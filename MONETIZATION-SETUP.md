# FilipinoHub Monetization Setup Guide

## Overview
FilipinoHub has been configured for monetization using Google AdSense. This document provides instructions for completing the setup and managing ads.

## What Has Been Implemented

### 1. Google AdSense Integration
- **Location**: `_layouts/default.html` and `_layouts/post.html`
- AdSense script added to the `<head>` section
- Ad units placed in strategic locations:
  - Top banner (728x90) - Below header on all pages
  - Below title (728x90) - On blog post pages
  - In-content (336x280) - Within blog post content

### 2. Ads.txt File
- **Location**: `ads.txt` (root directory)
- Purpose: Prevents ad fraud and ensures proper revenue attribution
- **Action Required**: Replace `pub-XXXXXXXXXXXXXXXX` with your actual Google AdSense Publisher ID

### 3. Privacy Policy Updates
- **Location**: `privacy.html`
- Added comprehensive advertising disclosure
- Includes information about:
  - Google AdSense usage
  - Cookie usage for advertising
  - User opt-out options
  - Third-party ad networks

## Setup Instructions

### Step 1: Apply for Google AdSense
1. Visit [Google AdSense](https://www.google.com/adsense)
2. Sign up with your Google account
3. Submit your website for review
4. Wait for approval (typically 1-2 weeks)

### Step 2: Get Your Publisher ID
Once approved:
1. Log into your AdSense account
2. Navigate to Account → Settings
3. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### Step 3: Update the Code
Replace all instances of `ca-pub-XXXXXXXXXXXXXXXX` in the following files:

**File: `_layouts/default.html`**
```html
<!-- Line 12: AdSense script -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>

<!-- Line 43: Top banner ad -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
```

**File: `_layouts/post.html`**
```html
<!-- Line 26: Below title ad -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"

<!-- Line 42: In-content ad -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
```

**File: `ads.txt`**
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### Step 4: Create Ad Units
1. Log into AdSense
2. Go to Ads → By ad unit
3. Create the following ad units:
   - **Top Banner**: Display ad, Responsive (728x90 preferred)
   - **Below Title**: Display ad, Responsive (728x90 preferred)
   - **In-Content**: Display ad, Rectangle (336x280 preferred)
4. Copy each ad unit's slot ID (format: `XXXXXXXXXX`)
5. Replace `data-ad-slot="XXXXXXXXXX"` in the respective locations

### Step 5: Verify Installation
1. Deploy your website
2. Visit your site and check if ads appear (may take 24-48 hours)
3. In AdSense dashboard, verify that your site is receiving ad requests
4. Check that `ads.txt` is accessible at `https://yourdomain.com/ads.txt`

## Ad Placement Strategy

### Current Ad Locations
1. **Top Banner** (All pages)
   - High visibility
   - First thing users see after header
   - Best for brand awareness

2. **Below Title** (Blog posts only)
   - Catches attention after reading headline
   - Good engagement rate
   - Non-intrusive placement

3. **In-Content** (Blog posts only)
   - Natural reading flow
   - High viewability
   - Placed after main content

### Best Practices
- Don't add too many ads (current setup is optimal)
- Monitor performance in AdSense dashboard
- Test different ad formats if needed
- Ensure ads don't interfere with user experience
- Keep content quality high to maintain traffic

## Compliance & Legal

### Privacy Policy
✅ Updated with advertising disclosures
✅ Includes Google AdSense information
✅ Provides opt-out instructions
✅ Explains cookie usage

### Required Disclosures
The privacy policy now includes:
- Information about third-party advertising
- Cookie usage for personalized ads
- User rights and opt-out options
- Links to Google's privacy policy

## Monitoring & Optimization

### Track Performance
1. Log into AdSense regularly
2. Monitor key metrics:
   - Page RPM (Revenue per 1000 impressions)
   - Click-through rate (CTR)
   - CPC (Cost per click)
   - Total earnings

### Optimization Tips
- Write quality content to increase traffic
- Focus on high-value topics
- Improve page load speed
- Ensure mobile responsiveness
- Use SEO best practices

## Troubleshooting

### Ads Not Showing?
- Wait 24-48 hours after setup
- Check if Publisher ID is correct
- Verify ads.txt file is accessible
- Ensure site is approved by AdSense
- Check browser ad blockers

### Low Revenue?
- Increase website traffic
- Improve content quality
- Target high-CPC keywords
- Optimize ad placements
- Check for policy violations

## Support Resources
- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Community](https://support.google.com/adsense/community)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)

## Next Steps
1. ✅ Complete AdSense application
2. ✅ Replace placeholder IDs with actual IDs
3. ✅ Create ad units in AdSense dashboard
4. ✅ Deploy website with changes
5. ✅ Verify ads.txt file
6. ✅ Monitor performance
7. ✅ Optimize based on data

---

**Last Updated**: June 2026
**Status**: Ready for AdSense integration