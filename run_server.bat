@echo off
cd /d "%~dp0dist"
start http://localhost:3000
python -m http.server 3000