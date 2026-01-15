#!/bin/bash

# Quick Start Script for Linux/Mac
# This script will set up and start the development server

echo "========================================"
echo "  Index 101 Storefront - Quick Start"
echo "========================================"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✓ Dependencies already installed"
else
    echo "Installing dependencies..."
    npm install
fi

echo ""

# Check if public/stores directory exists
if [ -d "public/stores" ]; then
    echo "✓ Images directory exists"
else
    echo "Creating placeholder images..."
    npm run create-placeholders
fi

echo ""
echo "========================================"
echo "Starting development server..."
echo "========================================"
echo ""
echo "The application will be available at:"
echo "  http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
