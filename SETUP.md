# Quick Setup Guide

## Step 1: Install Node.js (if not already installed)

If Node.js is not installed, you have a few options:

### Option A: Using Homebrew (Recommended for macOS)
```bash
brew install node
```

### Option B: Download from Official Website
Visit https://nodejs.org/ and download the LTS version for macOS.

### Option C: Using nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

## Step 2: Verify Installation
After installing Node.js, verify it's working:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x and 10.x.x)

## Step 3: Install Project Dependencies
Navigate to the project directory and run:
```bash
cd /Users/vudung/Desktop/cursor/Portfolio
npm install
```

This will install all required packages (Next.js, React, TypeScript, Tailwind CSS, etc.)

## Step 4: Run the Development Server
```bash
npm run dev
```

## Step 5: Open in Browser
Once the server starts, you'll see a message like:
```
- Local:        http://localhost:3000
```

Open that URL in your web browser to see your portfolio!

## Troubleshooting

### If npm install fails:
- Make sure Node.js is properly installed
- Try deleting `node_modules` folder and `package-lock.json` (if exists), then run `npm install` again

### If port 3000 is already in use:
- The server will automatically try the next available port (3001, 3002, etc.)
- Check the terminal output for the correct URL

### If you see image errors:
- The site will work with gradient placeholders
- Add your images to `public/images/` folder when ready

