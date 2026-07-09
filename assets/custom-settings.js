(function () {
    const storageKey = "dufs-ui-settings";
    const serverSettingsUrl = window.__CUSTOM_UI_SETTINGS_URL__ || "/__dufs__/ui-settings";
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
            pageTitle: typeof settings.pageTitle === "string" && settings.pageTitle.trim()
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
        if (document.title) {
            document.title = document.title.replace(/ - .+$/, ` - ${title}`);
        }
    }

    async function saveSettings(settings) {
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

    function isSignedIn() {
        return Boolean(
            (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.auth && window.__INITIAL_DATA__.user) ||
            document.querySelector(".topbar-user-name")
        );
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
            if (isSignedIn()) {
                saveSettings(next).catch((error) => {
                    console.error(error);
                    alert("保存主题切换失败");
                });
            }
        });
        return true;
    }

    function boot() {
        applySettings(readSettings());
        readServerSettings()
            .then((settings) => {
                const next = normalizeSettings(settings);
                localStorage.setItem(storageKey, JSON.stringify(next));
                applySettings(next);
            })
            .catch((error) => console.warn(error));
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
            if (!dialogController && isSignedIn()) {
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
