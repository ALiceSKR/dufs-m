#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
SERVICE_NAME="${SERVICE_NAME:-dufs-share}"
SERVICE_FILE="${SERVICE_FILE:-${ROOT_DIR}/dufs-share.service}"
CONFIG_FILE="${CONFIG_FILE:-${ROOT_DIR}/dufs-share.yaml}"

usage() {
    cat <<EOF
Usage: $(basename "$0") <command> [command...]

Commands:
  build      Build target/release/dufs
  deploy     Install ${SERVICE_NAME}.service into systemd and enable it
  restart    Restart ${SERVICE_NAME}
  status     Show ${SERVICE_NAME} status
  all        Run build, deploy, restart

Environment:
  SERVICE_NAME   systemd service name, default: dufs-share
  SERVICE_FILE   service file to install, default: ./dufs-share.service
  CONFIG_FILE    dufs yaml config file, default: ./dufs-share.yaml
EOF
}

build() {
    cargo build --release --manifest-path "${ROOT_DIR}/Cargo.toml"
}

deploy() {
    if [[ ! -f "${SERVICE_FILE}" ]]; then
        echo "service file not found: ${SERVICE_FILE}" >&2
        exit 1
    fi

    ensure_ui_settings
    sudo install -m 0644 "${SERVICE_FILE}" "/etc/systemd/system/${SERVICE_NAME}.service"
    sudo systemctl daemon-reload
    sudo systemctl enable "${SERVICE_NAME}.service"
}

ensure_ui_settings() {
    local assets_path
    local settings_path

    if [[ -f "${CONFIG_FILE}" ]]; then
        settings_path="$(sed -n 's/^[[:space:]]*ui-settings-path:[[:space:]]*//p' "${CONFIG_FILE}" | tail -n 1 | sed "s/^['\"]//;s/['\"]$//")"
        assets_path="$(sed -n 's/^[[:space:]]*assets:[[:space:]]*//p' "${CONFIG_FILE}" | tail -n 1 | sed "s/^['\"]//;s/['\"]$//")"
    else
        settings_path=""
        assets_path=""
    fi

    if [[ -z "${settings_path}" ]]; then
        if [[ -n "${assets_path}" ]]; then
            settings_path="${assets_path%/}/ui-settings.json"
        else
            settings_path="${ROOT_DIR}/assets/ui-settings.json"
        fi
    fi

    if [[ -f "${settings_path}" ]]; then
        return
    fi

    mkdir -p "$(dirname -- "${settings_path}")"
    cat >"${settings_path}" <<'EOF'
{
  "default": {
    "activeTheme": "theme1",
    "pageTitle": "Dustin's file share",
    "themes": {
      "theme1": {
        "panelOpacity": 0.5,
        "panelBlur": 1,
        "accentColor": "#f7a8c4",
        "fileNameColor": "#121822"
      },
      "theme2": {
        "panelOpacity": 0.5,
        "panelBlur": 1,
        "accentColor": "#f7a8c4",
        "fileNameColor": "#121822"
      }
    }
  },
  "users": {}
}
EOF
}

restart() {
    sudo systemctl restart "${SERVICE_NAME}.service"
}

status() {
    systemctl status "${SERVICE_NAME}.service" --no-pager
}

run_command() {
    case "$1" in
        build)
            build
            ;;
        deploy)
            deploy
            ;;
        restart)
            restart
            ;;
        status)
            status
            ;;
        all)
            build
            deploy
            restart
            ;;
        -h|--help|help)
            usage
            ;;
        *)
            echo "unknown command: $1" >&2
            usage >&2
            exit 1
            ;;
    esac
}

if [[ "$#" -eq 0 ]]; then
    usage >&2
    exit 1
fi

for command in "$@"; do
    run_command "${command}"
done
