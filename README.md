# Devdatta Thorat - Data Engineering & Analytics Portfolio

A modern, responsive portfolio website showcasing data engineering pipelines, analytics projects, technical skills, and professional experience.

## 🌟 Features

- ✨ Modern, clean design with smooth animations
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading and performance optimized
- 🎨 Interactive skill filters and project cards
- 📊 Animated statistics and progress bars
- 📧 Functional contact form
- ♿ Accessible (semantic HTML, ARIA labels)
- 🚀 SEO-friendly

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, CSS Variables
- **JavaScript** - Vanilla JS for interactivity
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins font family

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── assets/             # Images and files
│   ├── profile.jpeg             # Profile photo
│   ├── naturaldub-ai.png        # NATURALDUB-AI project screenshot
│   ├── youtube-analytics.png    # AWS End-to-End Pipeline screenshot
│   └── Devdatta_Thorat_Resume.pdf # Latest Resume PDF
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Clone or Download

Download all files and place them in a folder:
- `index.html`
- `styles.css`
- `script.js`
- `assets/` folder

### 2. Add Your Images

Place your images in the `assets/` folder:

**Profile Photo** (`profile.jpeg`):
- Recommended size: 400x400px
- Format: JPEG, PNG
- Should be a professional headshot with good lighting

**Project Images**:
- `naturaldub-ai.png` - NATURALDUB-AI Multi-Agent AI Movie Dubbing Pipeline screenshot
- `youtube-analytics.png` - AWS-Based End-to-End Data Engineering Pipeline screenshot
- Recommended size: 1200x600px
- Format: PNG, JPG

**Resume PDF**:
- `Devdatta_Thorat_Resume.pdf` - Latest resume in PDF format

### 3. Customize Content

Open `index.html` and update:
- Personal information (if needed)
- Links to your profiles
- Project descriptions (already populated from your resume)

### 4. Test Locally

Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your browser

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

**Steps:**

1. **Create a GitHub Repository**
   ```bash
   # Initialize git in your project folder
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Push to GitHub**
   ```bash
   # Connect and push:
   git remote add origin https://github.com/devdatta1429/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Click Save

4. **Access Your Site**
   - URL: `https://your-username.github.io`
   - Wait 2-3 minutes for first deployment

**Alternative: Project Repository**

If you want `github.com/username/portfolio`:
- Name repo `portfolio`
- Site will be at: `https://username.github.io/portfolio`
- Update all asset paths to include `/portfolio/` prefix

### Option 2: Netlify (Easy Drag & Drop - FREE)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free account)
3. Click "Add new site" → "Deploy manually"
4. Drag your entire project folder
5. Get instant URL: `https://random-name.netlify.app`
6. Optional: Set custom domain in settings

### Option 3: Vercel (Fast Deployment - FREE)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Get URL: `https://your-project.vercel.app`

### Option 4: Traditional Web Hosting

Upload via FTP to any web host:
- Hostinger
- Bluehost
- GoDaddy
- SiteGround

## 📝 Customization Guide

### Change Colors

Edit `styles.css` CSS variables at the top:

```css
:root {
    --primary-color: #0f766e;      /* Deep Teal */
    --secondary-color: #0891b2;    /* Cyan / Accent */
    --accent-color: #f59e0b;       /* Amber */
}
```

### Update Gradient

```css
:root {
    --gradient-primary: linear-gradient(135deg, #0f766e 0%, #0891b2 100%);
}
```

### Modify Sections

Each section in `index.html` is clearly labeled:
- Find `<section id="projects">` to update projects
- Find `<section id="skills">` to update skills
- Find `<section id="contact">` to update contact info

### Add New Projects

Copy this template in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://github.com/..." class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Python</span>
            <span>ML</span>
        </div>
        <div class="project-buttons">
            <a href="github-url" class="btn btn-small">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    </div>
</div>
```

## 📧 Contact Form Setup

The contact form currently shows a success message without actually sending emails. To make it functional:

### Option 1: EmailJS (Recommended)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Add EmailJS SDK to `index.html` before `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
4. Update `script.js` contact form handler with:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
   ```

### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update form in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: Netlify Forms

If hosting on Netlify:
1. Add `netlify` attribute to form:
   ```html
   <form name="contact" method="POST" netlify>
   ```
2. Submissions appear in Netlify dashboard

## 🎨 Adding Your Photos

### Profile Photo Guidelines

**Requirements:**
- Size: 400x400px (square)
- Format: JPG or PNG
- Max file size: 500KB
- High quality, well-lit headshot
- Professional attire
- Solid or minimal background

**Editing Tips:**
- Use tools like [remove.bg](https://remove.bg) to remove background
- Crop to square using [photopea.com](https://photopea.com) (free)
- Compress with [tinypng.com](https://tinypng.com)

### Project Screenshots

**Best Practices:**
- Size: 1200x600px (2:1 ratio)
- Show the key interface/dashboard
- Include branding/logo if applicable
- High contrast for readability
- No sensitive/personal data visible

**Tools:**
- Screenshot: Windows Snipping Tool, Mac Screenshot
- Edit: Photopea, Figma, Canva
- Compress: TinyPNG, Squoosh.app

## 🔧 Troubleshooting

### Images Not Showing
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/` folder
- Verify file extensions (.jpg, .png)
- Check browser console for errors (F12)

### Dark Mode Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Check localStorage is enabled
- Try in incognito/private mode

### Mobile Menu Not Opening
- Check JavaScript is loaded
- Look for errors in browser console (F12)
- Ensure `script.js` is linked correctly

### Animations Not Playing
- Check if browser supports CSS animations
- Disable browser motion settings
- Clear cache and reload

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format for better compression
   - Lazy load images below the fold
   - Use appropriate dimensions

2. **Minimize Code**
   - Minify CSS and JS for production
   - Remove unused CSS rules
   - Combine and compress files

3. **Enable Caching**
   - Add cache headers if using own server
   - Use CDN for libraries
   - Enable browser caching

## 🔐 Security Best Practices

1. Don't commit sensitive data to GitHub
2. Use environment variables for API keys
3. Add `.gitignore` for private files:
   ```
   .env
   *.log
   node_modules/
   ```
4. Keep dependencies updated
5. Use HTTPS (GitHub Pages provides this)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE11 (limited support)

## 🆘 Need Help?

**Resources:**
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [GitHub Pages Docs](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Stack Overflow](https://stackoverflow.com/) - Q&A

**Common Questions:**
- How to add Google Analytics? → Add tracking code to `<head>`
- How to add custom domain? → Configure in hosting provider settings
- How to add blog? → Consider adding a `/blog` page or use external platform

## 📄 License

This project is open source and available for personal use. Feel free to modify and use it for your own portfolio!

## 🙏 Credits

**Design Inspiration:**
- Reference: Vineet Singh Portfolio

**Libraries Used:**
- Font Awesome Icons
- Google Fonts (Poppins)

**Built by:** Devdatta Thorat

---

## 🚀 Next Steps After Deployment

1. ✅ Test on multiple devices and browsers
2. ✅ Add Google Analytics for tracking
3. ✅ Submit sitemap to Google Search Console
4. ✅ Share on LinkedIn and social media
5. ✅ Add to resume and email signature
6. ✅ Keep updating with new projects
7. ✅ Monitor and respond to contact form submissions

**Made with ❤️ and ☕**
