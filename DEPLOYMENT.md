# FilipinoHub - GitHub Pages Deployment Guide

This guide will walk you through deploying FilipinoHub to GitHub Pages step by step.

## Prerequisites

- GitHub account
- Git installed on your computer
- Basic command line knowledge

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right
3. Select **New repository**
4. Repository name: `FilipinoHub` (or your preferred name)
5. Description: "Filipino-focused news and content website"
6. Choose **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license
8. Click **Create repository**

### Step 2: Update Configuration

Before deploying, update `_config.yml`:

```yaml
# Change these lines:
url: "https://YOUR-USERNAME.github.io"
baseurl: "/FilipinoHub"  # Use your repository name
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Initialize Git Repository

Open terminal/command prompt in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: FilipinoHub website"

# Rename branch to main
git branch -M main
```

### Step 4: Connect to GitHub

```bash
# Add remote repository (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/FilipinoHub.git

# Push to GitHub
git push -u origin main
```

If prompted, enter your GitHub credentials.

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 6: Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- You'll see a message: "Your site is ready to be published at..."
- Refresh the page after a minute
- When ready, you'll see: "Your site is published at..."

### Step 7: Visit Your Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/FilipinoHub/
```

## Troubleshooting

### Site Shows 404 Error

**Solution:**
1. Check `_config.yml` has correct `url` and `baseurl`
2. Ensure GitHub Pages is enabled in Settings
3. Wait 2-3 minutes for GitHub to rebuild
4. Clear browser cache

### CSS/Images Not Loading

**Solution:**
1. Verify `baseurl` in `_config.yml` matches repository name
2. Check file paths start with `/` (e.g., `/css/style.css`)
3. Ensure files are committed and pushed to GitHub

### Articles Not Showing

**Solution:**
1. Check post filename format: `YYYY-MM-DD-title.md`
2. Verify front matter is correct
3. Ensure date is not in the future
4. Push changes to GitHub

## Adding Content After Deployment

### Add New Article

1. Create new file in `_posts/`:
   ```bash
   # Example filename
   _posts/2026-06-10-new-article-title.md
   ```

2. Add front matter and content:
   ```yaml
   ---
   title: "Article Title"
   date: 2026-06-10
   category: "local-news"
   subcategory: "politics"
   image: "/assets/images/image.jpg"
   author: "Author Name"
   ---
   
   Your article content here...
   ```

3. Commit and push:
   ```bash
   git add _posts/2026-06-10-new-article-title.md
   git commit -m "Add new article: Article Title"
   git push
   ```

4. Wait 1-2 minutes for GitHub to rebuild

### Add Images

1. Add image to `assets/images/`:
   ```bash
   # Copy your image
   cp ~/Downloads/my-image.jpg assets/images/
   ```

2. Commit and push:
   ```bash
   git add assets/images/my-image.jpg
   git commit -m "Add image: my-image.jpg"
   git push
   ```

3. Reference in article:
   ```markdown
   ![Description](/assets/images/my-image.jpg)
   ```

## Custom Domain (Optional)

### Step 1: Purchase Domain

Buy a domain from:
- Namecheap
- GoDaddy
- Google Domains
- etc.

### Step 2: Configure DNS

Add these DNS records:

**A Records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www -> YOUR-USERNAME.github.io
```

### Step 3: Configure GitHub

1. Go to repository Settings > Pages
2. Under **Custom domain**, enter: `yourdomain.com`
3. Click **Save**
4. Wait for DNS check (can take 24-48 hours)
5. Enable **Enforce HTTPS** once DNS is verified

### Step 4: Update Config

Update `_config.yml`:
```yaml
url: "https://yourdomain.com"
baseurl: ""  # Empty for custom domain
```

Commit and push changes.

## Maintenance

### Regular Updates

```bash
# Pull latest changes (if working from multiple computers)
git pull

# Make changes to files
# ...

# Commit and push
git add .
git commit -m "Description of changes"
git push
```

### Backup

Regularly backup your repository:
1. Download ZIP from GitHub
2. Or clone to another location:
   ```bash
   git clone https://github.com/YOUR-USERNAME/FilipinoHub.git backup-folder
   ```

## Performance Optimization

### Image Optimization

Before uploading images:
1. Resize to appropriate dimensions (1200x630 for featured images)
2. Compress using tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - RIOT (Windows)

### Monitoring

Track your site with:
1. **Google Analytics**
   - Add tracking code to `_layouts/default.html`
   
2. **Google Search Console**
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Monitor search performance

## Security

### Best Practices

1. **Never commit sensitive data**
   - API keys
   - Passwords
   - Personal information

2. **Use .gitignore**
   - Already configured in project
   - Add any additional files to ignore

3. **Keep dependencies updated**
   ```bash
   bundle update
   ```

## Getting Help

### Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

### Common Commands

```bash
# Check git status
git status

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename

# View remote URL
git remote -v
```

## Success Checklist

- [ ] Repository created on GitHub
- [ ] `_config.yml` updated with correct URL
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] All pages loading correctly
- [ ] Images displaying properly
- [ ] Navigation working
- [ ] Mobile responsive
- [ ] Search functionality working

## Next Steps

After successful deployment:

1. **Add Real Images**
   - Replace placeholder images in `assets/images/`
   - Use high-quality, relevant photos

2. **Create More Content**
   - Write additional articles
   - Cover all categories
   - Maintain regular posting schedule

3. **SEO Optimization**
   - Submit to Google Search Console
   - Create XML sitemap
   - Optimize meta descriptions

4. **Social Media**
   - Share articles on social platforms
   - Create social media accounts
   - Engage with audience

5. **Monetization**
   - Apply for Google AdSense
   - Add ad code to templates
   - Monitor revenue

## Support

For issues or questions:
- Check [README.md](README.md) for detailed documentation
- Open an issue on GitHub
- Email: contact@filipinohub.com

---

**Congratulations on deploying FilipinoHub! 🎉**

Your Filipino-focused news and content website is now live and ready to serve the community.