#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Clone the correct repository
echo "Cloning the repository..."
git clone https://github.com/correct-username/markdown-editor.git

# Navigate to the project directory
cd markdown-editor

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the application
echo "Starting the application..."
npm start