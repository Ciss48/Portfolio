#!/bin/bash

# Portfolio Startup Script
echo "🚀 Starting Portfolio Development Server..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "Please install Node.js first:"
    echo "  Option 1: brew install node"
    echo "  Option 2: Visit https://nodejs.org/"
    echo ""
    echo "See SETUP.md for detailed instructions."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🌐 Starting development server..."
echo "   The site will be available at http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

npm run dev

