(function () {
    const storageKey = "dufs-ui-settings";
    const sessionAuthKey = "dufs-session-auth";
    const serverSettingsUrl = window.__CUSTOM_UI_SETTINGS_URL__ || "/__dufs__/ui-settings";
    const initialData = window.__DUFS_INITIAL_DATA__ || window.__INITIAL_DATA__ || {};
    let currentUser = initialData.user || "";
    let allowUiSettings = Boolean(window.__DUFS_ALLOW_UI_SETTINGS__);
    let permissionCheckedUser = currentUser;
    let pageStateRequest = null;
    let syncedSettingsUser = currentUser;
    let appliedPageTitle = "";
    const themeFields = ["panelOpacity", "panelBlur", "accentColor", "fileNameColor"];
    const defaults = {
        activeTheme: "theme1",
        pageTitle: "Dustin's file share",
        themes: {
            theme1: {
                panelOpacity: 0.5,
                panelBlur: 1,
                accentColor: "#f7a8c4",
                fileNameColor: "#121822",
            },
            theme2: {
                panelOpacity: 0.5,
                panelBlur: 1,
                accentColor: "#f7a8c4",
                fileNameColor: "#121822",
            },
        },
    };

    function readSettings() {
        try {
            return normalizeSettings(JSON.parse(localStorage.getItem(storageKey) || "{}"));
        } catch {
            return normalizeSettings({});
        }
    }

    async function readServerSettings() {
        const response = await fetch(serverSettingsUrl, {
            credentials: "same-origin",
            headers: { accept: "application/json" },
        });
        if (!response.ok) {
            throw new Error(`Failed to load UI settings: ${response.status}`);
        }
        return normalizeSettings(await response.json());
    }

    function clamp(value, min, max) {
        if (!Number.isFinite(value)) {
            return min;
        }
        return Math.min(max, Math.max(min, value));
    }

    function normalizeTheme(theme, fallback) {
        theme = theme && typeof theme === "object" ? theme : fallback;
        return {
            panelOpacity: clamp(Number(theme.panelOpacity ?? fallback.panelOpacity), 0, 1),
            panelBlur: clamp(Number(theme.panelBlur ?? fallback.panelBlur), 0, 20),
            accentColor: /^#[0-9a-fA-F]{6}$/.test(theme.accentColor)
                ? theme.accentColor
                : fallback.accentColor,
            fileNameColor: /^#[0-9a-fA-F]{6}$/.test(theme.fileNameColor)
                ? theme.fileNameColor
                : fallback.fileNameColor,
        };
    }

    function normalizeSettings(settings) {
        settings = settings && typeof settings === "object" ? settings : {};
        const legacyTheme = normalizeTheme(settings || {}, defaults.themes.theme1);
        const sourceThemes = settings && typeof settings.themes === "object" ? settings.themes : {};
        const themes = {
            theme1: normalizeTheme(sourceThemes.theme1 || legacyTheme, legacyTheme),
            theme2: normalizeTheme(sourceThemes.theme2 || defaults.themes.theme2, defaults.themes.theme2),
        };
        const activeTheme = settings.activeTheme === "theme2" ? "theme2" : "theme1";
        return {
            activeTheme,
            themes,
            pageTitle: typeof settings.pageTitle === "string"
                ? settings.pageTitle.trim().slice(0, 80)
                : defaults.pageTitle,
        };
    }

    function hexToRgb(hex) {
        const value = hex.replace("#", "");
        return {
            r: parseInt(value.slice(0, 2), 16),
            g: parseInt(value.slice(2, 4), 16),
            b: parseInt(value.slice(4, 6), 16),
        };
    }

    function mixWithWhite(hex, amount) {
        const rgb = hexToRgb(hex);
        const mixed = [rgb.r, rgb.g, rgb.b].map((channel) => {
            return Math.round(channel + (255 - channel) * amount);
        });
        return `#${mixed.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
    }

    function applySettings(settings) {
        const next = normalizeSettings(settings);
        applyTheme(next.themes[next.activeTheme]);
        applyPageTitle(next.pageTitle);
    }

    function applyTheme(theme) {
        document.documentElement.style.setProperty("--dufs-panel-opacity", String(theme.panelOpacity));
        document.documentElement.style.setProperty("--dufs-table-head-opacity", String(theme.panelOpacity * 0.28));
        document.documentElement.style.setProperty("--dufs-table-row-opacity", String(theme.panelOpacity * 0.12));
        document.documentElement.style.setProperty("--dufs-table-row-hover-opacity", String(theme.panelOpacity * 0.22));
        document.documentElement.style.setProperty("--dufs-panel-blur", `${theme.panelBlur}px`);
        document.documentElement.style.setProperty("--dufs-accent-color", theme.accentColor);
        document.documentElement.style.setProperty("--dufs-accent-hover-color", mixWithWhite(theme.accentColor, 0.18));
        document.documentElement.style.setProperty("--dufs-file-name-color", theme.fileNameColor);
    }

    function applyPageTitle(title) {
        appliedPageTitle = title;
        window.__CUSTOM_PAGE_TITLE__ = title;
        document.querySelectorAll(".v-toolbar-title__placeholder").forEach((element) => {
            element.textContent = title;
        });
        if (document.title && title) {
            document.title = document.title.replace(/ - .+$/, ` - ${title}`);
        }
    }

    function installSakuraCursorEffect() {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
        }
        const layer = document.createElement("canvas");
        layer.className = "dufs-sakura-layer";
        document.body.appendChild(layer);
        const ctx = layer.getContext("2d");
        const petalImage = new Image();
        petalImage.src = `${window.__DUFS_PREFIX__ || ""}src/sakura/petal.png`;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let lastTime = 0;
        let lastX = 0;
        let lastY = 0;
        let cursorX = width / 2;
        let cursorY = height / 2;
        let hasCursor = false;
        let idleSpawnTime = 0;
        let rafId = 0;
        let windTime = 0;
        let previousFrameTime = 0;
        const petals = [];
        const maxPetals = 90;

        function resize() {
            const ratio = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            layer.width = Math.ceil(width * ratio);
            layer.height = Math.ceil(height * ratio);
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        }

        function spawnPetal(x, y) {
            const direction = Math.random() > 0.5 ? 1 : -1;
            petals.push({
                x: x + Math.random() * 12 - 6,
                y: y + Math.random() * 10 - 5,
                vx: (Math.random() * 0.8 + 0.25) * direction,
                vy: Math.random() * 0.55 + 0.34,
                size: Math.random() * 11 + 20,
                age: 0,
                life: Math.random() * 180 + 260,
                alpha: Math.random() * 0.22 + 0.56,
                rotate: Math.random() * Math.PI * 2,
                rotateSpeed: (Math.random() * 0.006 + 0.002) * direction,
                flip: Math.random() * Math.PI * 2,
                flipSpeed: (Math.random() * 0.018 + 0.008) * direction,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: Math.random() * 0.035 + 0.018,
            });
            if (petals.length > maxPetals) {
                petals.splice(0, petals.length - maxPetals);
            }
        }

        function drawPetal(petal) {
            const progress = petal.age / petal.life;
            const fade = progress < 0.12 ? progress / 0.12 : 1;
            const scaleX = Math.cos(petal.flip) * 0.55 + 0.45;
            ctx.save();
            ctx.translate(petal.x, petal.y);
            ctx.rotate(petal.rotate);
            ctx.scale(scaleX, 1);
            ctx.globalAlpha = Math.max(0, petal.alpha * fade);
            ctx.drawImage(petalImage, -petal.size / 2, -petal.size / 2, petal.size, petal.size);
            ctx.restore();
        }

        function loop(now) {
            const frameScale = previousFrameTime
                ? clamp((now - previousFrameTime) / 16.67, 0.25, 2.5)
                : 1;
            previousFrameTime = now;
            ctx.clearRect(0, 0, width, height);
            windTime += 0.008 * frameScale;
            if (hasCursor && petalImage.complete && now - idleSpawnTime > 700) {
                idleSpawnTime = now;
                spawnPetal(cursorX, cursorY);
            }
            for (let i = petals.length - 1; i >= 0; i -= 1) {
                const petal = petals[i];
                const wind = Math.sin(windTime + petal.y * 0.006) * 0.035;
                petal.age += frameScale;
                petal.vx += wind * frameScale;
                petal.vx *= Math.pow(0.985, frameScale);
                petal.vy += 0.018 * frameScale;
                petal.x += (petal.vx + Math.sin(petal.wobble) * 0.45) * frameScale;
                petal.y += petal.vy * 1.08 * frameScale;
                petal.rotate += petal.rotateSpeed * frameScale;
                petal.flip += petal.flipSpeed * frameScale;
                petal.wobble += petal.wobbleSpeed * frameScale;
                drawPetal(petal);
                if (petal.age >= petal.life || petal.y > height + 90 || petal.x < -120 || petal.x > width + 120) {
                    petals.splice(i, 1);
                }
            }
            rafId = requestAnimationFrame(loop);
        }

        resize();
        window.addEventListener("resize", resize);
        petalImage.addEventListener("load", () => {
            if (!rafId) {
                loop();
            }
        }, { once: true });
        document.addEventListener("pointermove", (event) => {
            if (event.pointerType && event.pointerType !== "mouse") {
                return;
            }
            const now = performance.now();
            cursorX = event.clientX;
            cursorY = event.clientY;
            hasCursor = true;
            const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
            if (now - lastTime < 34 || distance < 14 || !petalImage.complete) {
                return;
            }
            lastTime = now;
            idleSpawnTime = now;
            lastX = event.clientX;
            lastY = event.clientY;
            spawnPetal(event.clientX, event.clientY);
        }, { passive: true });
    }

    async function saveSettings(settings) {
        if (!canManageUiSettings()) {
            throw new Error("Current user cannot manage UI settings");
        }
        const next = normalizeSettings(settings);
        const response = await fetch(serverSettingsUrl, {
            method: "PUT",
            credentials: "same-origin",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(next),
        });
        if (!response.ok) {
            throw new Error(`Failed to save UI settings: ${response.status}`);
        }
        localStorage.setItem(storageKey, JSON.stringify(next));
        applySettings(next);
    }

    function encodeBasicAuth(username, password) {
        const value = new TextEncoder().encode(`${username}:${password}`);
        let binary = "";
        value.forEach((byte) => {
            binary += String.fromCharCode(byte);
        });
        return `Basic ${btoa(binary)}`;
    }

    function setAuthCookie(authHeader) {
        document.cookie = `dufs_auth=${encodeURIComponent(authHeader)}; Path=/; SameSite=Lax`;
        sessionStorage.setItem(sessionAuthKey, "1");
    }

    function clearAuthCookie() {
        document.cookie = "dufs_auth=; Path=/; Max-Age=0; SameSite=Lax";
        sessionStorage.removeItem(sessionAuthKey);
        currentUser = "";
        allowUiSettings = false;
        permissionCheckedUser = "";
    }

    function getCookie(name) {
        return document.cookie
            .split(";")
            .map((part) => part.trim())
            .find((part) => part.startsWith(`${name}=`));
    }

    function enforceBrowserSessionLogin() {
        if (getCookie("dufs_auth") && !sessionStorage.getItem(sessionAuthKey)) {
            clearAuthCookie();
            if (initialData.user) {
                window.location.reload();
                return true;
            }
        }
        return false;
    }

    function storePasswordCredential(username, password) {
        if (!window.PasswordCredential || !navigator.credentials) {
            return;
        }
        navigator.credentials.store(new PasswordCredential({
            id: username,
            name: username,
            password,
        })).catch((error) => console.warn(error));
    }

    function createLoginDialog() {
        const dialog = document.createElement("div");
        dialog.className = "dufs-login-overlay";
        dialog.innerHTML = `
            <form class="dufs-login-panel" aria-label="Login">
                <div class="dufs-login-title">登录</div>
                <label class="dufs-login-field">
                    <span>用户名</span>
                    <input name="username" autocomplete="username" required>
                </label>
                <label class="dufs-login-field">
                    <span>密码</span>
                    <input name="password" type="password" autocomplete="current-password" required>
                </label>
                <div class="dufs-login-error" hidden></div>
                <div class="dufs-login-actions">
                    <button type="button" data-action="cancel">取消</button>
                    <button type="submit">登录</button>
                </div>
            </form>
        `;
        document.body.appendChild(dialog);
        return dialog;
    }

    function openLoginDialog(url) {
        return new Promise((resolve) => {
            const dialog = createLoginDialog();
            const form = dialog.querySelector("form");
            const username = dialog.querySelector('[name="username"]');
            const password = dialog.querySelector('[name="password"]');
            const error = dialog.querySelector(".dufs-login-error");
            const close = (result) => {
                dialog.remove();
                resolve(result);
            };

            dialog.addEventListener("click", (event) => {
                if (event.target === dialog || event.target.dataset.action === "cancel") {
                    close(false);
                }
            });
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
                const authHeader = encodeBasicAuth(username.value, password.value);
                const loginUrl = url.includes("?") ? `${url}&login` : `${url}?login`;
                try {
                    const response = await fetch(loginUrl, {
                        method: "CHECKAUTH",
                        credentials: "same-origin",
                        headers: { authorization: authHeader },
                    });
                    if (!response.ok) {
                        error.textContent = "用户名或密码错误";
                        error.hidden = false;
                        return;
                    }
                    setAuthCookie(authHeader);
                    storePasswordCredential(username.value, password.value);
                    close(true);
                } catch (err) {
                    console.error(err);
                    error.textContent = "登录请求失败";
                    error.hidden = false;
                }
            });
            username.focus();
        });
    }

    window.__DUFS_CUSTOM_LOGIN__ = openLoginDialog;
    window.__DUFS_CUSTOM_LOGOUT__ = clearAuthCookie;

    function getSignedInUser() {
        const domUser = document.querySelector(".topbar-user-name")?.textContent?.trim();
        return domUser || currentUser || "";
    }

    function isSignedIn() {
        return Boolean(getSignedInUser());
    }

    function canManageUiSettings() {
        return Boolean(allowUiSettings);
    }

    async function refreshPageState() {
        if (pageStateRequest) {
            return pageStateRequest;
        }
        const url = new URL(window.location.href);
        url.search = "json=";
        pageStateRequest = fetch(url, {
            credentials: "same-origin",
            headers: { accept: "application/json" },
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error(`Failed to refresh page state: ${response.status}`);
                }
                const data = await response.json();
                currentUser = data.user || "";
                allowUiSettings = Boolean(data.allow_ui_settings);
                permissionCheckedUser = currentUser;
                return data;
            })
            .catch((error) => {
                console.warn(error);
                allowUiSettings = false;
                permissionCheckedUser = getSignedInUser();
                return null;
            })
            .finally(() => {
                pageStateRequest = null;
            });
        return pageStateRequest;
    }

    async function syncSignedInSettings() {
        const user = getSignedInUser();
        if (!user || syncedSettingsUser === user) {
            return;
        }
        syncedSettingsUser = user;
        const settings = normalizeSettings(await readServerSettings());
        localStorage.setItem(storageKey, JSON.stringify(settings));
        applySettings(settings);
    }

    function createSettingsDialog() {
        const dialog = document.createElement("div");
        dialog.className = "dufs-settings-overlay";
        dialog.innerHTML = `
            <div class="dufs-settings-panel" role="dialog" aria-modal="true" aria-label="UI settings">
                <div class="dufs-settings-title">界面设置</div>
                <div class="dufs-settings-field">
                    <span>
                        白色透明度 <output data-output="panelOpacity"></output>
                        <button type="button" data-reset-setting="panelOpacity">重置</button>
                    </span>
                    <input data-setting="panelOpacity" type="range" min="0" max="1" step="0.01">
                </div>
                <div class="dufs-settings-field">
                    <span>
                        模糊度 <output data-output="panelBlur"></output>
                        <button type="button" data-reset-setting="panelBlur">重置</button>
                    </span>
                    <input data-setting="panelBlur" type="range" min="0" max="20" step="1">
                </div>
                <div class="dufs-settings-field">
                    <span>
                        顶部图标颜色
                        <button type="button" data-reset-setting="accentColor">重置</button>
                    </span>
                    <input data-setting="accentColor" type="color">
                </div>
                <div class="dufs-settings-field">
                    <span>
                        列表文本颜色
                        <button type="button" data-reset-setting="fileNameColor">重置</button>
                    </span>
                    <input data-setting="fileNameColor" type="color">
                </div>
                <div class="dufs-settings-field">
                    <span>
                        页面标题
                        <button type="button" data-reset-setting="pageTitle">重置</button>
                    </span>
                    <input data-setting="pageTitle" type="text" maxlength="80">
                </div>
                <div class="dufs-settings-actions">
                    <div class="dufs-settings-theme-actions">
                        <button type="button" data-theme="theme1">主题1</button>
                        <button type="button" data-theme="theme2">主题2</button>
                    </div>
                    <div class="dufs-settings-save-actions">
                        <button type="button" data-action="cancel">取消</button>
                        <button type="button" data-action="save">保存</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);
        return dialog;
    }

    function bindDialog(dialog) {
        const inputs = {
            panelOpacity: dialog.querySelector('[data-setting="panelOpacity"]'),
            panelBlur: dialog.querySelector('[data-setting="panelBlur"]'),
            accentColor: dialog.querySelector('[data-setting="accentColor"]'),
            fileNameColor: dialog.querySelector('[data-setting="fileNameColor"]'),
            pageTitle: dialog.querySelector('[data-setting="pageTitle"]'),
        };
        const outputs = {
            panelOpacity: dialog.querySelector('[data-output="panelOpacity"]'),
            panelBlur: dialog.querySelector('[data-output="panelBlur"]'),
        };
        const themeButtons = {
            theme1: dialog.querySelector('[data-theme="theme1"]'),
            theme2: dialog.querySelector('[data-theme="theme2"]'),
        };
        let draft = normalizeSettings(readSettings());
        let editingTheme = draft.activeTheme;

        function setInputs(settings, themeName = editingTheme) {
            const next = normalizeSettings(settings);
            const theme = next.themes[themeName];
            inputs.panelOpacity.value = theme.panelOpacity;
            inputs.panelBlur.value = theme.panelBlur;
            inputs.accentColor.value = theme.accentColor;
            inputs.fileNameColor.value = theme.fileNameColor;
            inputs.pageTitle.value = next.pageTitle;
            outputs.panelOpacity.value = `${Math.round(theme.panelOpacity * 100)}%`;
            outputs.panelBlur.value = `${theme.panelBlur}px`;
            Object.entries(themeButtons).forEach(([name, button]) => {
                button.classList.toggle("is-active", name === themeName);
            });
        }

        function currentThemeInputs() {
            return normalizeTheme({
                panelOpacity: inputs.panelOpacity.value,
                panelBlur: inputs.panelBlur.value,
                accentColor: inputs.accentColor.value,
                fileNameColor: inputs.fileNameColor.value,
            }, defaults.themes[editingTheme]);
        }

        function updateDraftFromInputs() {
            draft = normalizeSettings({
                ...draft,
                pageTitle: inputs.pageTitle.value,
                themes: {
                    ...draft.themes,
                    [editingTheme]: currentThemeInputs(),
                },
            });
            return draft;
        }

        Object.values(inputs).forEach((input) => {
            input.addEventListener("input", () => {
                const next = updateDraftFromInputs();
                setInputs(next, editingTheme);
                applyTheme(next.themes[editingTheme]);
                applyPageTitle(next.pageTitle);
            });
        });

        dialog.addEventListener("click", (event) => {
            const resetButton = event.target.closest("button[data-reset-setting]");
            if (resetButton) {
                const setting = resetButton.dataset.resetSetting;
                const next = updateDraftFromInputs();
                if (setting === "pageTitle") {
                    next.pageTitle = defaults.pageTitle;
                } else if (themeFields.includes(setting)) {
                    next.themes[editingTheme][setting] = defaults.themes[editingTheme][setting];
                }
                draft = normalizeSettings(next);
                setInputs(draft, editingTheme);
                applyTheme(draft.themes[editingTheme]);
                applyPageTitle(draft.pageTitle);
                return;
            }
            const themeButton = event.target.closest("button[data-theme]");
            if (themeButton) {
                updateDraftFromInputs();
                editingTheme = themeButton.dataset.theme;
                draft.activeTheme = editingTheme;
                setInputs(draft, editingTheme);
                applyTheme(draft.themes[editingTheme]);
                applyPageTitle(draft.pageTitle);
                return;
            }
            if (event.target === dialog || event.target.dataset.action === "cancel") {
                const saved = readSettings();
                draft = normalizeSettings(saved);
                editingTheme = draft.activeTheme;
                setInputs(draft, editingTheme);
                applySettings(saved);
                dialog.hidden = true;
                return;
            }
            if (event.target.dataset.action === "save") {
                if (!inputs.pageTitle.value.trim()) {
                    alert("页面标题不能为空");
                    inputs.pageTitle.focus();
                    return;
                }
                event.target.disabled = true;
                updateDraftFromInputs();
                draft.activeTheme = editingTheme;
                saveSettings(draft)
                    .then(() => {
                        dialog.hidden = true;
                    })
                    .catch((error) => {
                        console.error(error);
                        alert("保存界面设置失败");
                    })
                    .finally(() => {
                        event.target.disabled = false;
                    });
                return;
            }
        });

        dialog.hidden = true;
        return {
            open() {
                draft = normalizeSettings(readSettings());
                editingTheme = draft.activeTheme;
                setInputs(draft, editingTheme);
                dialog.hidden = false;
            },
        };
    }

    function installButton(dialogController) {
        const append = document.querySelector("#app-bar-append") || document.querySelector(".v-toolbar__append");
        if (!append) {
            return false;
        }
        if (!isSignedIn()) {
            append.querySelector(".dufs-settings-button")?.remove();
            return false;
        }
        if (append.querySelector(".dufs-settings-button")) {
            return true;
        }
        const button = document.createElement("button");
        button.type = "button";
        button.className = "dufs-settings-button topbar-action-btn topbar-action-btn--pink";
        button.title = "界面设置";
        button.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.5.42L9.12 5.07c-.6.23-1.16.56-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65a7.93 7.93 0 0 0 0 1.96l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.13.22.39.31.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.6-.25 1.16-.58 1.69-.98l2.49 1c.22.08.48 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"/>
            </svg>
        `;
        button.addEventListener("click", dialogController.open);
        append.prepend(button);
        return true;
    }

    function installTitleThemeToggle() {
        const title = document.querySelector(".v-app-bar .v-toolbar-title") || document.querySelector(".v-toolbar-title__placeholder");
        if (!title) {
            return false;
        }
        if (title.dataset.dufsThemeToggle) {
            return true;
        }
        title.dataset.dufsThemeToggle = "true";
        title.classList.add("dufs-title-theme-toggle");
        title.title = "点击切换主题";
        title.addEventListener("click", () => {
            const next = normalizeSettings(readSettings());
            next.activeTheme = next.activeTheme === "theme1" ? "theme2" : "theme1";
            localStorage.setItem(storageKey, JSON.stringify(next));
            applySettings(next);
            if (canManageUiSettings()) {
                saveSettings(next).catch((error) => {
                    console.error(error);
                    alert("保存主题切换失败");
                });
            }
        });
        return true;
    }

    function boot() {
        if (enforceBrowserSessionLogin()) {
            return;
        }
        installSakuraCursorEffect();
        const cachedSettings = localStorage.getItem(storageKey);
        applySettings(readSettings());
        if (isSignedIn() || !cachedSettings) {
            readServerSettings()
                .then((settings) => {
                    const next = normalizeSettings(settings);
                    localStorage.setItem(storageKey, JSON.stringify(next));
                    applySettings(next);
                })
                .catch((error) => console.warn(error));
        }
        const titleTimer = setInterval(() => applyPageTitle(appliedPageTitle), 250);
        setTimeout(() => clearInterval(titleTimer), 10000);
        const titleToggleTimer = setInterval(() => {
            if (installTitleThemeToggle()) {
                clearInterval(titleToggleTimer);
            }
        }, 250);
        setTimeout(() => clearInterval(titleToggleTimer), 10000);
        let dialogController = null;
        function syncSettingsButton() {
            const user = getSignedInUser();
            if (!user) {
                document.querySelector(".dufs-settings-button")?.remove();
                return;
            }
            if (permissionCheckedUser !== user) {
                refreshPageState()
                    .then(syncSignedInSettings)
                    .finally(syncSettingsButton);
                return;
            }
            syncSignedInSettings().catch((error) => console.warn(error));
            if (!canManageUiSettings()) {
                document.querySelector(".dufs-settings-button")?.remove();
                return;
            }
            if (!dialogController) {
                dialogController = bindDialog(createSettingsDialog());
            }
            if (dialogController) {
                installButton(dialogController);
            }
        }
        syncSettingsButton();
        const buttonTimer = setInterval(syncSettingsButton, 1000);
        const observer = new MutationObserver(syncSettingsButton);
        observer.observe(document.body, { childList: true, subtree: true });
        window.addEventListener("beforeunload", () => {
            clearInterval(buttonTimer);
            observer.disconnect();
        }, { once: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
