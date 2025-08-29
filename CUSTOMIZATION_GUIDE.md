# Portfolio Customization Guide

## 🎯 Quick Start - Update Your Portfolio with Resume Information

Follow these steps to personalize your portfolio with your actual information from `parths_Resume.pdf`:

### Step 1: Update Basic Information

Open `index.html` and update these sections:

#### 1.1 Page Title (Line 5)
```html
<title>Parth - Portfolio</title>
```

#### 1.2 Hero Section (Lines 30-50)
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Parth</span>
</h1>
<p class="hero-subtitle">[Your Job Title from Resume]</p>
<p class="hero-description">
    [Your professional summary from resume]
</p>
```

#### 1.3 Profile Card (Lines 45-55)
```html
<div class="profile-info">
    <h3>Parth</h3>
    <p>[Your Job Title]</p>
</div>
```

### Step 2: Update About Section

#### 2.1 About Text (Lines 70-85)
Replace the placeholder text with your actual background from your resume:
- Your education
- Your experience
- Your career goals
- Your interests

#### 2.2 Statistics (Lines 85-100)
Update with your actual numbers:
```html
<div class="stat">
    <h3>[Your Years of Experience]</h3>
    <p>Years Experience</p>
</div>
<div class="stat">
    <h3>[Number of Projects]</h3>
    <p>Projects Completed</p>
</div>
<div class="stat">
    <h3>[Number of Clients/Companies]</h3>
    <p>Happy Clients</p>
</div>
```

### Step 3: Update Projects Section

Replace the sample projects with your actual projects from your resume:

#### 3.1 Project Structure
For each project in your resume, create a project card:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>[Project Name from Resume]</h3>
        <p>[Project Description from Resume]</p>
        <div class="project-tech">
            <span class="tech-tag">[Technology 1]</span>
            <span class="tech-tag">[Technology 2]</span>
            <span class="tech-tag">[Technology 3]</span>
        </div>
        <div class="project-links">
            <a href="[Live Demo URL]" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="[GitHub URL]" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### Step 4: Update Skills Section

Replace the skills with your actual technical skills from your resume:

#### 4.1 Programming Languages
```html
<div class="skill-item">
    <i class="fab fa-js"></i>
    <span>JavaScript</span>
</div>
<div class="skill-item">
    <i class="fab fa-python"></i>
    <span>Python</span>
</div>
<!-- Add all languages from your resume -->
```

#### 4.2 Frameworks & Technologies
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
<div class="skill-item">
    <i class="fab fa-node-js"></i>
    <span>Node.js</span>
</div>
<!-- Add all frameworks from your resume -->
```

### Step 5: Update Contact Information

#### 5.1 Contact Details (Lines 280-300)
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>[Your Email from Resume]</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>[Your Phone from Resume]</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>[Your Location from Resume]</span>
</div>
```

#### 5.2 Social Links (Lines 300-320)
```html
<div class="social-links">
    <a href="[Your GitHub URL]" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="[Your LinkedIn URL]" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="[Your Twitter/Other URL]" class="social-link">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

### Step 6: Add Resume Download

Add a download button for your resume:
```html
<div class="hero-buttons">
    <a href="#projects" class="btn btn-primary">View My Work</a>
    <a href="parths_Resume.pdf" class="btn btn-secondary" download>
        Download Resume
    </a>
</div>
```

## 📋 Information to Extract from Your Resume

### Personal Information
- Full Name
- Job Title/Position
- Email Address
- Phone Number
- Location/City
- Professional Summary

### Education
- Degree(s)
- University/Institution
- Graduation Year
- GPA (if relevant)

### Experience
- Company Names
- Job Titles
- Duration
- Key Responsibilities
- Achievements

### Projects
- Project Names
- Descriptions
- Technologies Used
- Live Demo URLs
- GitHub Repository URLs

### Skills
- Programming Languages
- Frameworks & Libraries
- Databases
- Tools & Technologies
- Soft Skills

### Social Media
- GitHub Profile
- LinkedIn Profile
- Other Professional Profiles

## 🎨 Optional Customizations

### 1. Change Color Scheme
Edit `styles.css` lines 1-20:
```css
:root {
    --primary-color: #6366f1;      /* Change to your preferred color */
    --primary-dark: #4f46e5;
    --secondary-color: #f8fafc;
    /* ... other colors */
}
```

### 2. Add Your Photo
Replace the icon in the profile card with your actual photo:
```html
<div class="profile-avatar">
    <img src="your-photo.jpg" alt="Parth" />
</div>
```

### 3. Add Project Images
Replace the icons with actual project screenshots:
```html
<div class="project-image">
    <img src="project-screenshot.jpg" alt="Project Name" />
</div>
```

## 🚀 Next Steps

1. **Extract Information**: Go through your resume and extract all the information listed above
2. **Update HTML**: Follow the steps above to update `index.html`
3. **Test Locally**: Open `index.html` in your browser to see the changes
4. **Customize Further**: Adjust colors, add images, or modify the layout as needed
5. **Deploy**: Upload to GitHub Pages, Netlify, or Vercel

## 📞 Need Help?

If you need assistance with any specific section or have questions about customizing your portfolio, feel free to ask!

---

**Remember**: This is your professional portfolio, so make sure all information is accurate and up-to-date!
