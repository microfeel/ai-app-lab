# PowerShell script to activate virtual environment and run the video analyser project

# Check Python version
$pythonVersion = python --version
if ($pythonVersion -notlike "*3.11*") {
    Write-Host "Python version 3.11 is required. Current version is $pythonVersion."
    Write-Host "Please create a virtual environment with Python 3.11. You can do this by running:"
    Write-Host "py -3.11 -m venv venv"
    exit 1
}

# Activate the virtual environment
if (Test-Path "venv/Scripts/Activate.ps1") {
    Write-Host "Activating virtual environment..."
    .\venv\Scripts\Activate.ps1
} elseif (Test-Path ".venv/Scripts/Activate.ps1") {
    Write-Host "Activating virtual environment..."
    .\.venv\Scripts\Activate.ps1
} else {
    Write-Host "Virtual environment not found. Please ensure it is set up correctly."
    Write-Host "You can create a virtual environment with Python 3.11 by running:"
    Write-Host "py -3.11 -m venv venv"
    exit 1
}

# Run the project
Write-Host "Starting the video analyser backend..."
python code/main.py

# Deactivate the virtual environment when done
deactivate
