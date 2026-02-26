# Quick Deployment Checklist

Follow these steps to get your presentation live on GitHub Pages:

## ✅ Before You Start

- [ ] Have Node.js installed (check with `node --version`)
- [ ] Have Git installed (check with `git --version`)
- [ ] Have a GitHub account created

## 📝 Step-by-Step Deployment

### 1. Create GitHub Repository
- [ ] Go to github.com and log in
- [ ] Click the "+" in top right → "New repository"
- [ ] Name it (e.g., "prompt-to-production")
- [ ] Make it **Public**
- [ ] Do NOT initialize with README
- [ ] Click "Create repository"

### 2. Update Configuration Files

- [ ] Open `package.json`
- [ ] Change line 6: `"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"`
  - Replace `YOUR_USERNAME` with your GitHub username
  - Replace `YOUR_REPO_NAME` with the repository name you just created

- [ ] Open `vite.config.js`
- [ ] Change line 6: `base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',`
  - Replace `YOUR_REPO_NAME` with the same repository name

### 3. Install Dependencies & Test Locally

```bash
# Install everything
npm install

# Run locally to make sure it works
npm run dev
```

Open http://localhost:5173 in your browser. Press Ctrl+C to stop the server.

### 4. Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Spectacle presentation"

# Connect to your GitHub repo (replace with your info)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

Wait for this to complete (it might take 1-2 minutes).

### 6. Enable GitHub Pages on GitHub.com

- [ ] Go to your repository on GitHub.com
- [ ] Click the **Settings** tab
- [ ] Click **Pages** in the left sidebar
- [ ] Under "Source", select branch: **gh-pages**
- [ ] Click **Save**

### 7. View Your Live Presentation! 🎉

Your presentation will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

It may take 2-5 minutes to become available the first time.

## 🔄 Making Updates Later

After making changes to your presentation:

```bash
# Save your changes
git add .
git commit -m "Updated slides"
git push

# Deploy the updates
npm run deploy
```

Changes will be live in a few minutes!

## 🆘 Troubleshooting

**Problem**: "npm: command not found"
- **Solution**: Install Node.js from nodejs.org

**Problem**: 404 error when visiting the GitHub Pages URL
- **Solution**: 
  1. Make sure the repository is Public
  2. Check that GitHub Pages is enabled in Settings → Pages
  3. Wait 5-10 minutes after first deploy
  4. Check that `gh-pages` branch exists in your repository

**Problem**: Site loads but styles are broken
- **Solution**: Double-check the `base` setting in `vite.config.js` matches your repo name exactly

**Problem**: "Permission denied" when pushing to GitHub
- **Solution**: You may need to set up SSH keys or use Personal Access Token authentication

## 📧 Need Help?

If you get stuck, the README.md has more detailed explanations of each step!
