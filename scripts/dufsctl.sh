#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
SERVICE_NAME="${SERVICE_NAME:-dufs-share}"
SERVICE_FILE="${SERVICE_FILE:-${ROOT_DIR}/dufs-share.service}"

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

    sudo install -m 0644 "${SERVICE_FILE}" "/etc/systemd/system/${SERVICE_NAME}.service"
    sudo systemctl daemon-reload
    sudo systemctl enable "${SERVICE_NAME}.service"
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
