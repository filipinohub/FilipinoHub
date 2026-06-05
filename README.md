# FilipinoHub - Multi-Category News & Content Website

A complete static website built with Jekyll, designed specifically for GitHub Pages deployment. FilipinoHub is a Filipino-focused news, entertainment, stories, and content platform.

## 🌟 Features

- **100% Static**: No backend, no database required
- **Multi-Category System**: 7 main categories with subcategories
- **SEO-Friendly URLs**: Clean, readable URLs for all articles
- **Responsive Design**: Mobile-first, works on all devices
- **Easy Content Management**: Add articles using simple Markdown files
- **Search Functionality**: Client-side search with JavaScript
- **Ad-Ready**: Placeholder sections for Google AdSense
- **Fast Loading**: Optimized static pages

## 📁 Project Structure

```
FilipinoHub/
├── _config.yml                 # Jekyll configuration
├── _layouts/                   # Page templates
│   ├── default.html           # Main layout
│   ├── post.html              # Article layout
│   └── category.html          # Category page layout
├── _posts/                     # Article files (Markdown)
│   └── YYYY-MM-DD-title.md
├── assets/
│   └── images/                # Image files
├── css/
│   └── style.css              # Main stylesheet
├── js/
│   └── main.js                # JavaScript functionality
├── local-news/                # Category pages
├── world-news/
├── entertainment/
├── sports/
├── lifestyle/
├── stories/
├── editorial/
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── privacy.html               # Privacy policy
└── README.md                  # This file
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/FilipinoHub.git
cd FilipinoHub
```

### 2. Update Configuration

Edit `_config.yml`:

```yaml
url: "https://yourusername.github.io"
baseurl: "/FilipinoHub"  # Change to your repo name
```

### 3. Test Locally (Optional)

Install Jekyll:

```bash
gem install jekyll bundler
```

Run locally:

```bash
jekyll serve
```

Visit: `http://localhost:4000`

### 4. Deploy to GitHub Pages

1. Create a new repository on GitHub named `FilipinoHub` (or your preferred name)
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/FilipinoHub.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Click Save

4. Your site will be live at: `https://yourusername.github.io/FilipinoHub/`

## ✍️ Adding New Articles

### Step 1: Create a Markdown File

Create a new file in `_posts/` with this naming format:
```
YYYY-MM-DD-article-title.md
```

Example: `2026-06-05-new-article-title.md`

### Step 2: Add Front Matter

At the top of your file, add:

```yaml
---
title: "Your Article Title"
date: 2026-06-05
category: "local-news"
subcategory: "politics"
image: "/assets/images/your-image.jpg"
author: "Author Name"
---
```

### Step 3: Write Content

Write your article using Markdown:

```markdown
## Heading 2

This is a paragraph with **bold** and *italic* text.

### Heading 3

- List item 1
- List item 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Image alt text](/assets/images/image.jpg)
```

### Step 4: Add Images

1. Place images in `assets/images/`
2. Reference them in your article:
   ```markdown
   ![Description](/assets/images/your-image.jpg)
   ```

### Step 5: Embed Videos

Use YouTube iframe:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### Step 6: Commit and Push

```bash
git add .
git commit -m "Add new article: Your Title"
git push
```

GitHub Pages will automatically rebuild your site (takes 1-2 minutes).

## 📂 Categories and Subcategories

### Available Categories

1. **local-news**
   - politics
   - economy
   - crime
   - government
   - community

2. **world-news** (no subcategories)

3. **entertainment**
   - showbiz
   - pageantry
   - ppop
   - movies-tv
   - celebrities

4. **sports**
   - basketball
   - football
   - esports
   - local-sports
   - international-sports

5. **lifestyle**
   - health
   - travel
   - food
   - fashion
   - technology

6. **stories**
   - inspirational
   - short-stories
   - love-stories
   - horror-stories
   - real-life-stories

7. **editorial**
   - opinion
   - analysis
   - commentary
   - featured-writers

## 🎨 Customization

### Change Colors

Edit `css/style.css`:

```css
:root {
    --primary-color: #c41e3a;    /* Red */
    --secondary-color: #0038a8;  /* Blue */
    --text-color: #333;
}
```

### Modify Navigation

Edit `_layouts/default.html` to add/remove menu items.

### Update Footer

Edit the footer section in `_layouts/default.html`.

## 💰 Monetization

### Google AdSense Integration

1. Get approved for Google AdSense
2. Replace ad placeholders in:
   - `_layouts/default.html` (top banner)
   - `_layouts/post.html` (below title, in-content)

Example:
```html
<div class="ad-banner">
    <!-- Replace with your AdSense code -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

## 🔍 SEO Optimization

### Already Included

- Clean URLs
- Meta descriptions
- Jekyll SEO Tag plugin
- Semantic HTML structure
- Mobile-responsive design

### Additional Steps

1. Submit sitemap to Google Search Console:
   - Your sitemap: `https://yourusername.github.io/FilipinoHub/sitemap.xml`

2. Add Google Analytics:
   - Edit `_layouts/default.html`
   - Add tracking code before `</head>`

3. Create `robots.txt`:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourusername.github.io/FilipinoHub/sitemap.xml
   ```

## 📱 Social Media Integration

### Open Graph Tags

Already included in `_layouts/default.html` via Jekyll SEO Tag.

### Share Buttons

Share buttons are included in `_layouts/post.html` for:
- Facebook
- Twitter

## 🛠️ Troubleshooting

### Site Not Loading

1. Check GitHub Pages settings
2. Verify `_config.yml` has correct `url` and `baseurl`
3. Wait 1-2 minutes for GitHub to rebuild

### Images Not Showing

1. Verify image path starts with `/assets/images/`
2. Check image file exists in repository
3. Ensure image filename matches exactly (case-sensitive)

### Articles Not Appearing

1. Check filename format: `YYYY-MM-DD-title.md`
2. Verify front matter is correct
3. Ensure date is not in the future
4. Check category name matches exactly

### CSS Not Loading

1. Clear browser cache
2. Check `css/style.css` exists
3. Verify path in `_layouts/default.html`

## 📊 Analytics

To track your site's performance:

1. **Google Analytics**
   - Create account at analytics.google.com
   - Add tracking code to `_layouts/default.html`

2. **GitHub Insights**
   - View traffic in repository Insights tab

## 🔒 Security

- No backend = No server vulnerabilities
- Static files only
- HTTPS enabled by default on GitHub Pages
- No user data collection (unless you add forms)

## 📄 License

This project is open source. Feel free to use and modify for your needs.

## 🤝 Contributing

To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: contact@filipinohub.com

## 🎯 Roadmap

Future enhancements:
- [ ] Newsletter subscription
- [ ] Comment system integration
- [ ] Advanced search filters
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] RSS feed customization

## 🙏 Credits

Built with:
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Free hosting
- Designed for the Filipino community

---

**Made with ❤️ for Filipinos worldwide**

Visit: [FilipinoHub](https://yourusername.github.io/FilipinoHub/)