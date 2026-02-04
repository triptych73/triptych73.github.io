#!/bin/bash
# View door unlock service logs (live tail)
echo "Door Unlock Logs (Ctrl+C to exit):"
echo "-----------------------------------"
sudo journalctl -u door-unlock.service -f
