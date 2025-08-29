# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features include dark/light theme toggle, smooth animations, and a contact form.

## Features

- ✨ **Modern Design** - Clean and professional layout
- 🌙 **Dark/Light Theme** - Toggle between themes with persistent storage
- 📱 **Responsive** - Works perfectly on all devices
- 🎨 **Smooth Animations** - Engaging scroll animations and transitions
- 📧 **Contact Form** - Functional contact form with validation
- ⚡ **Fast Loading** - Optimized for performance

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── parths_Resume.pdf   # Your resume (for reference)
```

## Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<!-- Update your name and title -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Your Title & Role</p>
<p class="hero-description">
    Your personal description and tagline
</p>
```

#### About Section
```html
<!-- Update your about text -->
<p>
    Your personal story and background
</p>
<p>
    More details about your experience and interests
</p>

<!-- Update your stats -->
<div class="stat">
    <h3>Your Number</h3>
    <p>Years Experience</p>
</div>
```

#### Contact Information
```html
<!-- Update contact details -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>Your Phone Number</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your Location</span>
</div>
```

### 2. Projects Section

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <!-- You can add actual project images here -->
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description and features</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-live-demo-url" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="your-github-url" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### 3. Skills Section

Update the skills to match your expertise:

```html
<div class="skill-item">
    <i class="fab fa-html5"></i>
    <span>HTML5</span>
</div>
```

### 4. Social Links

Update your social media links:

```html
<div class="social-links">
    <a href="your-github-url" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="your-linkedin-url" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-twitter-url" class="social-link">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

### 5. Colors and Theme

To customize colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --secondary-color: #f8fafc;    /* Secondary background */
    --text-primary: #1e293b;       /* Main text color */
    --text-secondary: #64748b;     /* Secondary text color */
}
```

## Using Your Resume Information

Based on your `parths_Resume.pdf`, you should update the portfolio with:

1. **Your actual name** instead of "Your Name"
2. **Your real job title** and experience
3. **Your actual projects** with descriptions and links
4. **Your real skills** and technologies you know
5. **Your contact information** (email, phone, location)
6. **Your social media links** (GitHub, LinkedIn, etc.)

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get a custom URL instantly

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minify CSS/JS**: Use tools to reduce file sizes
3. **Enable Caching**: Set up proper cache headers
4. **Use CDN**: Serve fonts and libraries from CDN

## Customization Examples

### Adding a Blog Section
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Latest Articles</h2>
        <div class="blog-grid">
            <!-- Add your blog posts here -->
        </div>
    </div>
</section>
```

### Adding a Resume Download
```html
<div class="hero-buttons">
    <a href="#projects" class="btn btn-primary">View My Work</a>
    <a href="path-to-your-resume.pdf" class="btn btn-secondary" download>
        Download Resume
    </a>
</div>
```

## Support

If you need help customizing your portfolio:

1. Check the HTML comments for guidance
2. Review the CSS classes for styling options
3. Test changes in a local environment first
4. Use browser developer tools to debug

## License

This portfolio template is free to use for personal and commercial projects.

---

**Happy coding! 🚀**


