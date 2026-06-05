# Content Creation Guide for FilipinoHub

A simple guide for writers and content creators to add articles to FilipinoHub.

## Quick Start: Adding Your First Article

### Step 1: Create the File

Create a new file in the `_posts` folder with this format:
```
_posts/YYYY-MM-DD-your-article-title.md
```

**Example:**
```
_posts/2026-06-10-breaking-news-story.md
```

**Rules:**
- Use today's date or publication date
- Use lowercase letters
- Replace spaces with hyphens (-)
- End with `.md`

### Step 2: Add Article Information (Front Matter)

At the very top of your file, add this:

```yaml
---
title: "Your Article Title Here"
date: 2026-06-10
category: "local-news"
subcategory: "politics"
image: "/assets/images/your-image.jpg"
author: "Your Name"
---
```

**Required Fields:**
- `title`: Your article headline
- `date`: Publication date (YYYY-MM-DD format)
- `category`: Main category (see list below)
- `author`: Your name

**Optional Fields:**
- `subcategory`: Specific topic within category
- `image`: Featured image path

### Step 3: Write Your Article

After the front matter (after the second `---`), write your article using Markdown.

## Markdown Basics

### Headings

```markdown
## Main Section Heading
### Subsection Heading
#### Smaller Heading
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Lists

**Bullet Points:**
```markdown
- First item
- Second item
- Third item
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Links

```markdown
[Link text](https://example.com)
```

**Example:**
```markdown
Read more at [FilipinoHub](https://filipinohub.com)
```

### Images

```markdown
![Image description](/assets/images/image-name.jpg)
```

**Example:**
```markdown
![President speaking at event](/assets/images/president-speech.jpg)
```

### Quotes

```markdown
> This is a quote from someone important.
```

### Paragraphs

Just write normally. Leave a blank line between paragraphs.

```markdown
This is the first paragraph.

This is the second paragraph.
```

## Categories and Subcategories

### Local News (`local-news`)
- `politics` - Political news and updates
- `economy` - Economic developments
- `crime` - Crime reports and safety
- `government` - Government programs and policies
- `community` - Community events and stories

### World News (`world-news`)
No subcategories - use for international news

### Entertainment (`entertainment`)
- `showbiz` - Celebrity news and gossip
- `pageantry` - Beauty pageants
- `ppop` - Filipino pop music
- `movies-tv` - Films and television
- `celebrities` - Celebrity features

### Sports (`sports`)
- `basketball` - Basketball news
- `football` - Football/soccer news
- `esports` - Gaming and esports
- `local-sports` - Local sports events
- `international-sports` - International competitions

### Lifestyle (`lifestyle`)
- `health` - Health and wellness
- `travel` - Travel guides and tips
- `food` - Food and recipes
- `fashion` - Fashion and style
- `technology` - Tech news and reviews

### Stories (`stories`)
- `inspirational` - Uplifting stories
- `short-stories` - Fiction and narratives
- `love-stories` - Romance stories
- `horror-stories` - Scary tales
- `real-life-stories` - True stories

### Editorial (`editorial`)
- `opinion` - Opinion pieces
- `analysis` - In-depth analysis
- `commentary` - Commentary on current events
- `featured-writers` - Guest columns

## Complete Article Example

```markdown
---
title: "Manila Traffic Solutions: New Plan Announced"
date: 2026-06-10
category: local-news
subcategory: government
image: "/assets/images/manila-traffic.jpg"
author: "Juan Dela Cruz"
---

The Metropolitan Manila Development Authority (MMDA) announced today a comprehensive plan to address the capital's notorious traffic congestion.

## Key Points of the Plan

The new initiative includes several major components:

### Infrastructure Improvements

- Construction of 5 new skyways
- Expansion of existing highways
- Addition of dedicated bus lanes

### Public Transportation

The government will invest ₱50 billion in:

1. Modern bus systems
2. Extended train lines
3. Improved jeepney routes

## Expert Opinions

Transportation expert Dr. Maria Santos commented:

> "This is a step in the right direction, but implementation will be key to success."

### Timeline

The plan will be rolled out in three phases:

- **Phase 1 (2026-2027)**: Planning and initial construction
- **Phase 2 (2027-2028)**: Major infrastructure projects
- **Phase 3 (2028-2029)**: Final implementation and evaluation

## Public Reaction

Citizens have expressed cautious optimism about the plan. Many hope it will finally address the daily traffic nightmare that affects millions of commuters.

For more information, visit the [MMDA website](https://mmda.gov.ph).

![Traffic in Manila](/assets/images/manila-traffic-2.jpg)

---

*What do you think about the new traffic plan? Share your thoughts in the comments below.*
```

## Adding Images

### Step 1: Prepare Your Image

- **Size**: Resize to 1200x630 pixels for featured images
- **Format**: Use JPG for photos, PNG for graphics
- **File Size**: Compress to under 500KB
- **Name**: Use descriptive names with hyphens: `manila-traffic-solution.jpg`

### Step 2: Add to Project

Place your image in the `assets/images/` folder.

### Step 3: Reference in Article

**Featured Image (shows at top):**
```yaml
image: "/assets/images/manila-traffic-solution.jpg"
```

**In-Article Images:**
```markdown
![Description](/assets/images/manila-traffic-solution.jpg)
```

## Embedding Videos

### YouTube Videos

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

**How to get VIDEO_ID:**
1. Go to YouTube video
2. Click "Share"
3. Copy the code after `youtu.be/`
4. Example: `https://youtu.be/dQw4w9WgXcQ` → VIDEO_ID is `dQw4w9WgXcQ`

## Writing Tips

### Good Headlines

✅ **Good:**
- "Senate Approves Education Reform Bill"
- "Filipino PPOP Group Wins International Award"
- "10 Must-Visit Destinations in the Philippines"

❌ **Avoid:**
- "You Won't Believe What Happened Next!"
- "SHOCKING: This Will Change Everything"
- "Click Here to Find Out More"

### Article Structure

1. **Opening Paragraph**: Answer who, what, when, where, why
2. **Body**: Provide details, quotes, context
3. **Conclusion**: Summarize key points or call to action

### Best Practices

- **Be Clear**: Use simple, direct language
- **Be Accurate**: Verify facts and sources
- **Be Concise**: Get to the point quickly
- **Be Engaging**: Use active voice and vivid descriptions
- **Be Respectful**: Maintain professional tone

### Length Guidelines

- **News Articles**: 300-600 words
- **Features**: 600-1200 words
- **In-Depth Analysis**: 1200-2000 words
- **Stories**: 800-1500 words

## SEO Tips

### Use Keywords Naturally

Include relevant keywords in:
- Title
- First paragraph
- Headings
- Throughout content

### Write Descriptive Titles

- Keep under 60 characters
- Include main keyword
- Make it compelling

### Add Alt Text to Images

```markdown
![President Marcos speaking at education summit](/assets/images/president-speech.jpg)
```

The text in brackets is the alt text - describe what's in the image.

## Common Mistakes to Avoid

### ❌ Wrong Date Format

```yaml
date: June 10, 2026  # WRONG
date: 06/10/2026     # WRONG
```

### ✅ Correct Date Format

```yaml
date: 2026-06-10     # CORRECT
```

### ❌ Wrong Category Names

```yaml
category: "Local News"      # WRONG (has space and capital)
category: "localnews"       # WRONG (no hyphen)
```

### ✅ Correct Category Names

```yaml
category: "local-news"      # CORRECT
```

### ❌ Missing Front Matter

```markdown
# My Article Title

This is my article...
```

### ✅ Complete Front Matter

```markdown
---
title: "My Article Title"
date: 2026-06-10
category: "local-news"
author: "Your Name"
---

This is my article...
```

## Checklist Before Publishing

- [ ] File name follows format: `YYYY-MM-DD-title.md`
- [ ] Front matter is complete and correct
- [ ] Title is compelling and under 60 characters
- [ ] Category and subcategory are correct
- [ ] Images are added and properly referenced
- [ ] Article is proofread for spelling and grammar
- [ ] Links work correctly
- [ ] Content is factual and verified
- [ ] Author name is included

## Getting Help

### Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Questions?

Contact the editorial team:
- Email: editorial@filipinohub.com
- Slack: #content-creators

## Sample Templates

### News Article Template

```markdown
---
title: "Your Headline Here"
date: 2026-06-10
category: "local-news"
subcategory: "politics"
image: "/assets/images/your-image.jpg"
author: "Your Name"
---

Lead paragraph summarizing the main news.

## Background

Provide context and background information.

## Key Details

- Important point 1
- Important point 2
- Important point 3

## Quotes

> "Quote from relevant person or expert."

## What This Means

Explain the significance and impact.

## Looking Ahead

Discuss future implications or next steps.
```

### Feature Story Template

```markdown
---
title: "Feature Title"
date: 2026-06-10
category: "stories"
subcategory: "inspirational"
image: "/assets/images/feature-image.jpg"
author: "Your Name"
---

Engaging opening that hooks the reader.

## The Story

Tell the main narrative with vivid details.

### Key Moments

Highlight important events or turning points.

## Impact

Discuss the broader significance.

## Conclusion

Wrap up with a memorable ending or call to action.
```

---

**Happy Writing! 📝**

Remember: Great content is clear, accurate, engaging, and serves the Filipino community.