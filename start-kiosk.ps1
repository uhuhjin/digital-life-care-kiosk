$port = 5500
$url = "http://127.0.0.1:$port"

$server = Start-Process python -ArgumentList "-m", "http.server", "$port" -WorkingDirectory $PSScriptRoot -PassThru
Start-Sleep -Seconds 2
Start-Process $url

Write-Host "Kiosk server started at $url"
Write-Host "Stop the server by closing the Python process window or ending PID $($server.Id)."
