#!/bin/bash
cd /Users/matthiheuweinlein/Documents/Apps/DoctorBox
python3 -m http.server 8000 --bind 0.0.0.0 > /tmp/doctorbox_server.log 2>&1 &
echo $! > /tmp/doctorbox_server.pid
echo "Server started with PID: $(cat /tmp/doctorbox_server.pid)"
echo "Server running at http://localhost:8000"
echo "Log file: /tmp/doctorbox_server.log"
