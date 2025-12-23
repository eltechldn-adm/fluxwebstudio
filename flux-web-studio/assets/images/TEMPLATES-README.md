# Template Thumbnail Images

This directory contains thumbnail screenshots for the Flux Web Studio template catalog.

## Required Files

All template thumbnails are now integrated into the website:

1. **thumb-trades.jpg** - Modern Trades template
2. **thumb-salon.jpg** - Elegant Salon template  
3. **thumb-creative.jpg** - Creative Portfolio template
4. **thumb-corporate.jpg** - Corporate Minimal template
5. **thumb-community.jpg** - Community Local template

## Specifications

### Image Requirements
- **Format:** JPEG (optimized)
- **Aspect Ratio:** 16:10 (e.g., 1600x1000px)
- **File Size:** 150-300KB per image
- **Quality:** High, but web-optimized
- **Theme:** Align with grey × forest green brand

### Display Behavior
- Width: 100% of card
- Height: Auto (maintains aspect ratio)
- Object-fit: cover
- Hover: Subtle scale (1.03x)
- Border radius matches site design

### Screenshot Guidelines

When capturing template screenshots:
1. Use desktop view (1440-1920px width)
2. Capture full homepage or hero section
3. Ensure text is readable in thumbnail size
4. Show key template features clearly
5. Use neutral, professional content
6. Match the grey × forest green color scheme

### Optimization

Before adding images:
```bash
# Resize to 1600x1000
# Compress using:
- TinyJPG (web)
- ImageOptim (Mac)
- jpegoptim (CLI): jpegoptim --size=200k *.jpg
```

## Current Status

✅ HTML integration complete
✅ CSS styling with hover effects
✅ Proper aspect ratio enforcement
✅ Alt text for accessibility
⏳ Awaiting actual screenshot files

Once thumbnails are added, they will automatically display in the template catalog with premium hover effects.
