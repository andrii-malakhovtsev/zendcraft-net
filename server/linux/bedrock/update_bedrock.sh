#!/usr/bin/env bash
# Updates the Minecraft Bedrock Dedicated Server on Linux using Mojang's download API.
# Requires: bash, curl, grep (GNU grep for -P), wget, unzip.
# Run on the host (not from this repo's dev machine): copy to ~/bedrock-server or adjust BEDROCK_DIR.

set -euo pipefail

BEDROCK_DIR="${BEDROCK_DIR:-$HOME/bedrock-server}"
cd "$BEDROCK_DIR" || exit 1

echo "[*] Backing up worlds and config..."
cp server.properties server.properties.bak
cp -r worlds worlds.bak

echo "[*] Stopping current server (if running)..."
pkill -f bedrock_server || true

echo "[*] Downloading latest Bedrock server..."
link="$(curl -s https://net-secondary.web.minecraft-services.net/api/v1.0/download/links | grep -oP '"downloadType":"serverBedrockLinux"[^}]*"downloadUrl":"\K[^"]+')"
if [[ -z "$link" ]]; then
  echo "[!] Could not resolve Linux Bedrock download URL." >&2
  exit 1
fi
wget -O bedrock.zip "$link"

echo "[*] Unzipping and updating..."
unzip -o bedrock.zip
rm bedrock.zip

echo "[*] Restoring config..."
mv server.properties.bak server.properties

echo "[*] Update complete. (Worlds backup: worlds.bak — restore manually if the update replaced them.)"
