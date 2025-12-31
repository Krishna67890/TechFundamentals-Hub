@echo off
echo Starting SQL Learning Center - Full Stack Application
echo.

echo Starting backend server...
start cmd /k "cd /d backend && python app.py"

echo Starting frontend server...
start cmd /k "cd /d frontend && npm start"

echo.
echo Both servers started!
echo Backend: http://localhost:5001
echo Frontend: http://localhost:3000 (will open in browser)
echo.
pause