# AmeriBus USA - Professional Bus Travel Website

A modern, responsive, and feature-rich website for a fictional bus travel company serving North America.

## 🚌 Features

### Core Pages
- **Homepage (index.html)** - Hero section, booking engine, popular routes, testimonials, FAQs
- **About (about.html)** - Company mission, timeline, leadership bios, sustainability commitment
- **Services (services.html)** - Service tiers, amenities, group travel, parcel shipping
- **Contact (contact.html)** - Contact form, support information, emergency assistance, map

### Professional Design Elements
✅ **Fully Responsive** - Mobile-first design that works on all devices
✅ **Modern UI/UX** - Clean, professional interface with smooth animations
✅ **Interactive Forms** - Real-time validation and user feedback
✅ **Mobile Navigation** - Slide-out menu for mobile devices
✅ **Notification System** - Toast notifications for user actions
✅ **Modal Dialogs** - "Manage Booking" feature with modal interface
✅ **Smooth Animations** - Scroll-triggered animations and hover effects
✅ **Typography** - Proper font hierarchy and readability
✅ **Color System** - Professional color palette with CSS variables
✅ **Accessibility** - Semantic HTML and keyboard navigation support

## 📁 File Structure

```
ameribus-website/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
└── assets/
    ├── style.css       # Main stylesheet
    ├── main.js         # JavaScript functionality
    └── images/         # (You need to add these)
        ├── kamran-khan.jpg
        ├── Maaz-khan.jpg
        └── shahid-khan.png
```

## 🚀 Setup Instructions

1. **Extract all files** to a folder on your computer

2. **Create the images folder**:
   - Inside the `assets` folder, create a new folder called `images`
   - Add the three leadership photos:
     - kamran-khan.jpg
     - Maaz-khan.jpg
     - shahid-khan.png

3. **Open in browser**:
   - Simply double-click `index.html` to open in your default browser
   - Or right-click and choose "Open with" your preferred browser

4. **For development**:
   - Use a local server for best results (optional but recommended)
   - VS Code: Install "Live Server" extension
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`

## 🎨 Design Features

### Color Palette
- **Primary Blue**: `#003580` - Trust and professionalism
- **Secondary Red**: `#d32f2f` - Energy and urgency
- **Dark Navy**: `#0a192f` - Premium feel
- **Light Gray**: `#f8f9fa` - Clean backgrounds
- **Accent Gray**: `#6c757d` - Secondary text

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights (600-800) for hierarchy
- **Body Text**: Regular weight (400) for readability
- **Line Height**: 1.6-1.8 for comfortable reading

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 💻 JavaScript Features

### Interactive Elements
1. **Mobile Menu** - Fully functional slide-out navigation
2. **Form Validation** - Real-time input validation
3. **Search Engine** - Bus route search with loading states
4. **Contact Form** - Email validation and submission handling
5. **Newsletter Signup** - Footer newsletter subscription
6. **Manage Booking Modal** - Popup for booking management
7. **Notification System** - Toast notifications for user feedback
8. **Scroll Animations** - Elements fade in on scroll
9. **Active Navigation** - Highlights current page in menu
10. **Keyboard Support** - ESC key closes modals and mobile menu

### Form Features
- Input validation before submission
- Loading states on buttons
- Success/error notifications
- Email format validation
- Date picker with min date (today)
- Character counter for textareas
- Checkbox validation

## 📱 Mobile Responsiveness

### Mobile Optimizations
- Hamburger menu with slide-out navigation
- Touch-friendly buttons and links
- Optimized image sizes
- Stacked layouts on small screens
- Reduced padding/margins for space efficiency
- Larger touch targets (minimum 44x44px)
- Readable font sizes (minimum 16px)

### Mobile Menu
- Swipe-friendly slide animation
- Overlay background
- Close on link click or overlay tap
- Keyboard accessible (ESC to close)

## 🎯 Key Highlights

### Homepage
- Eye-catching hero section with call-to-action
- Functional booking search engine
- Trust indicators (40M+ passengers, 2,500 destinations)
- Popular routes with pricing
- Feature highlights with icons
- Customer testimonials
- Comprehensive FAQ section

### About Page
- Company mission and values
- Interactive timeline (1998-2026)
- Executive leadership profiles
- Mission/Vision statements for each leader
- Sustainability commitment banner
- Professional team photos

### Services Page
- Two-tier service comparison (Standard vs Premier)
- Detailed feature comparison table
- Onboard amenities grid
- Group travel packages
- Parcel shipping service
- Loyalty rewards program
- Hotel package deals

### Contact Page
- Multi-channel contact information
- Contact form with 10 inquiry types
- Booking reference field
- Quick help topics
- Google Maps integration
- Emergency assistance section
- Social media links

## 🔧 Customization Guide

### Changing Colors
Edit the CSS variables in `assets/style.css`:
```css
:root {
  --primary: #003580;     /* Main brand color */
  --secondary: #d32f2f;   /* Accent color */
  --dark: #0a192f;        /* Dark backgrounds */
  --light: #f8f9fa;       /* Light backgrounds */
}
```

### Updating Content
- **Routes**: Edit the route cards in `index.html`
- **Pricing**: Update prices in service tier cards
- **Contact Info**: Modify contact details in `contact.html`
- **Company Info**: Edit text in `about.html`

### Adding New Pages
1. Copy `index.html` as template
2. Update navigation links in header
3. Change page-specific content
4. Update active class in navigation
5. Add to footer links

## 📊 Performance Features

- Lazy loading for images (ready for implementation)
- Optimized CSS with efficient selectors
- Minimal JavaScript for fast load times
- CSS animations using GPU acceleration
- Debounced scroll events
- Intersection Observer for animations

## ✨ Advanced Features

### Notification System
- Custom toast notifications
- Auto-dismiss after 5 seconds
- Multiple types (success, error, info)
- Slide-in animation
- Manual close button
- Responsive design

### Modal System
- "Manage Booking" modal
- Click outside to close
- ESC key to close
- Focus trap for accessibility
- Smooth animations

### Form Handling
- Prevents default submission
- Client-side validation
- Loading state indicators
- Success feedback
- Error handling
- Reset on success

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All external images use Unsplash URLs (works when online)
- Leadership photos need to be added locally
- Google Maps integration requires internet connection
- Forms are front-end only (no backend)
- All functionality is demo/prototype (not connected to real services)

## 🎓 Best Practices Used

1. **Semantic HTML5** - Proper use of header, nav, section, footer
2. **CSS Organization** - Variables, comments, logical grouping
3. **Mobile-First Design** - Base styles for mobile, enhanced for desktop
4. **Accessibility** - ARIA labels, keyboard navigation, focus states
5. **Code Comments** - Well-documented code for easy maintenance
6. **DRY Principle** - Reusable classes and functions
7. **Progressive Enhancement** - Works without JavaScript, enhanced with it
8. **Performance** - Optimized animations, efficient selectors

## 🚀 Future Enhancements

Potential additions:
- Backend integration for forms
- Real booking system
- User authentication
- Route search with actual database
- Payment processing
- Review system
- Blog section
- Multilingual support (English/Spanish)
- PWA capabilities
- Dark mode toggle

## 📞 Support

For questions about this template:
- Review the code comments
- Check browser console for errors
- Ensure all file paths are correct
- Verify images folder structure

---

**Created by:** Shahid Khan
**Version:** 1.0
**Last Updated:** February 2026
**License:** Free to use and modify
