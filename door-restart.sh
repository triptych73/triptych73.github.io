#!/bin/bash
# Restart the door unlock service
sudo systemctl restart door-unlock.service
echo "Door unlock service restarted."
sudo systemctl status door-unlock.service --no-pager -l
