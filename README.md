# From Prompt to Production

**Engineering Enterprise GIS with AI**  
Presentation by Chris Lyons | 

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white)



This is a web-based presentation built with [Spectacle](https://commerce.nearform.com/open-source/spectacle/) (React-based presentation library) and deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git
- GitHub account

### Local Development

1. **Clone this repository** (after you create it on GitHub):
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

The presentation will automatically reload when you make changes.

## 📦 Building for Production

Build the presentation for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to GitHub and create a new repository
2. Name it something like `prompt-to-production` (or whatever you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (you already have one)

### Step 2: Update Configuration Files

Before deploying, you need to update two files with your GitHub information:

**1. Update `package.json`:**
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and `YOUR_REPO_NAME` with your repository name.

**2. Update `vite.config.js`:**
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```
Replace `YOUR_REPO_NAME` with your repository name (same as in package.json).

### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Spectacle presentation"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your presentation
2. Create a `gh-pages` branch
3. Push the built files to that branch
4. GitHub will automatically serve your site

### Step 5: Enable GitHub Pages (first time only)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select the `gh-pages` branch
5. Click **Save**

Your presentation will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
```

It may take a few minutes for the site to become available the first time.

## 🔄 Updating Your Presentation

After making changes:

1. Commit your changes:
```bash
git add .
git commit -m "Update presentation content"
git push
```

2. Redeploy:
```bash
npm run deploy
```

Your changes will be live in a few minutes.

## 🎨 Customization

### Theme & Colors

Edit the `theme` object in `src/Presentation.jsx`:

```javascript
const theme = {
  colors: {
    primary: '#1E2761',    // Main color
    secondary: '#CADCFC',  // Accent color
    tertiary: '#FFFFFF',   // Background
    accent: '#F96167',     // Highlight color
    // ... add more colors
  },
  fonts: {
    header: '"Georgia", serif',
    text: '"Calibri", sans-serif',
    // ... customize fonts
  },
};
```

### Slide Content

Edit slides directly in `src/Presentation.jsx`. Each slide is a `<Slide>` component:

```jsx
<Slide>
  <Heading>Your Title</Heading>
  <Text>Your content</Text>
</Slide>
```

### Navigation

During presentation:
- **Arrow keys**: Navigate slides
- **Space**: Next slide
- **Alt + O**: Toggle overview mode
- **Alt + P**: Toggle presenter mode (with notes)
- **Alt + A**: Toggle auto-play mode

## 📚 Spectacle Documentation

For more advanced customization options, see the [Spectacle documentation](https://commerce.nearform.com/open-source/spectacle/).

## 🛠️ Tech Stack

- **React**: UI framework
- **Spectacle**: Presentation library
- **Vite**: Build tool
- **GitHub Pages**: Hosting

## 📄 License
![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
## 🤝 Credits

Presentation content by Chris Lyons  
Built with Spectacle by Formidable Labs
