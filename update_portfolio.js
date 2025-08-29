// Portfolio Update Helper Script
// This script helps you quickly update your portfolio with your resume information

const portfolioData = {
    // Personal Information
    name: "Parth Kohli", // Update with your name
    title: "Computer Science Student & Data Science Enthusiast", // Update with your job title
    email: "parthkohli2k3@gmail.com", // Update with your email
    university: "VIT Bhopal University", // Update with your university
    location: "Bhopal, India", // Update with your location
    
    // Professional Summary
    summary: "Passionate about data science, machine learning, and building scalable solutions. Currently pursuing B.Tech in Computer Science at VIT Bhopal University.",
    
    // About Section
    about: [
        "I'm a passionate Computer Science student at VIT Bhopal University with a strong foundation in data science and machine learning. Currently pursuing my B.Tech in Computer Science and Engineering with a CGPA of 7.81, I specialize in building scalable data-driven solutions and implementing cutting-edge machine learning algorithms.",
        "With experience in data science internships and diverse technical projects, I've developed expertise in Python, machine learning frameworks, and cloud technologies. I'm actively pursuing AWS Solutions Architect and MERN Full Stack certifications to enhance my skills further."
    ],
    
    // Statistics
    stats: {
        cgpa: "7.81", // Current CGPA
        projects: "8+", // Number of projects
        studyYears: "2+" // Years of study
    },
    
    // Projects (Update with your actual projects)
    projects: [
        {
            name: "Book Recommender System",
            description: "A content-based recommendation system using Python, Scikit-learn, and K-Means Clustering. Processes 8000+ books to provide 6-10 similar book recommendations based on genre, author, and metadata.",
            technologies: ["Python", "Scikit-learn", "K-Means"],
            github: "https://github.com/Parth282003/recommender-system"
        },
        {
            name: "Nimbus ETL Pipeline",
            description: "A scalable ETL pipeline using Apache Airflow, Python, and PostgreSQL. Automatically fetches daily weather data from public APIs across 5+ countries with DAG-based automation and real-time data tracking.",
            technologies: ["Apache Airflow", "Python", "PostgreSQL"],
            github: "https://github.com/Parth282003/ETL"
        },
        {
            name: "Tumour Detection Model",
            description: "A CNN-based tumor detection system using Inception Model architecture with TensorFlow and Keras. Trained on 20,000+ medical images with 96% accuracy for medical diagnosis applications.",
            technologies: ["TensorFlow", "Keras", "CNN"],
            github: "https://github.com/Parth282003/tumour-detection"
        }
    ],
    
    // Skills (Update with your actual skills)
    skills: [
        // Programming Languages
        { name: "Python", icon: "fab fa-python" },
        { name: "C++", icon: "fab fa-cpp" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        
        // Machine Learning & Data Science
        { name: "TensorFlow", icon: "fas fa-brain" },
        { name: "Keras", icon: "fas fa-brain" },
        { name: "Scikit-learn", icon: "fas fa-chart-bar" },
        { name: "Pandas", icon: "fas fa-chart-line" },
        { name: "NumPy", icon: "fas fa-chart-pie" },
        { name: "Matplotlib", icon: "fas fa-chart-area" },
        
        // Tools & Technologies
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Google Cloud", icon: "fab fa-google" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Apache Airflow", icon: "fas fa-cloud" },
        { name: "Apache Kafka", icon: "fas fa-stream" }
    ],
    
    // Social Links
    social: {
        github: "https://github.com/Parth282003",
        linkedin: "https://www.linkedin.com/in/parth-kohli-543978236/"
    }
};

// Function to update the portfolio
function updatePortfolio() {
    console.log("Updating portfolio with your information...");
    
    // Update page title
    document.title = `${portfolioData.name} - Portfolio`;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `Hi, I'm <span class="highlight">${portfolioData.name}</span>`;
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = portfolioData.title;
    }
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.textContent = portfolioData.summary;
    }
    
    // Update profile card
    const profileName = document.querySelector('.profile-info h3');
    if (profileName) {
        profileName.textContent = portfolioData.name;
    }
    
    const profileTitle = document.querySelector('.profile-info p');
    if (profileTitle) {
        profileTitle.textContent = portfolioData.title;
    }
    
    // Update about section
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].textContent = portfolioData.about[0];
        aboutParagraphs[1].textContent = portfolioData.about[1];
    }
    
    // Update stats
    const stats = document.querySelectorAll('.stat h3');
    if (stats.length >= 3) {
        stats[0].textContent = portfolioData.stats.experience;
        stats[1].textContent = portfolioData.stats.projects;
        stats[2].textContent = portfolioData.stats.clients;
    }
    
    // Update projects
    const projectCards = document.querySelectorAll('.project-card');
    portfolioData.projects.forEach((project, index) => {
        if (projectCards[index]) {
            const projectName = projectCards[index].querySelector('h3');
            const projectDesc = projectCards[index].querySelector('p');
            const projectTech = projectCards[index].querySelector('.project-tech');
            const projectLinks = projectCards[index].querySelectorAll('.project-link');
            
            if (projectName) projectName.textContent = project.name;
            if (projectDesc) projectDesc.textContent = project.description;
            
            if (projectTech) {
                projectTech.innerHTML = project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('');
            }
            
            if (projectLinks.length >= 1) {
                projectLinks[0].href = project.github;
            }
        }
    });
    
    // Update skills
    const skillsContainer = document.querySelector('.skills-content');
    if (skillsContainer) {
        skillsContainer.innerHTML = portfolioData.skills.map(skill => `
            <div class="skill-item">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>
        `).join('');
    }
    
    // Update contact information
    const contactItems = document.querySelectorAll('.contact-item span');
    if (contactItems.length >= 3) {
        contactItems[0].textContent = portfolioData.email;
        contactItems[1].textContent = portfolioData.university;
        contactItems[2].textContent = portfolioData.location;
    }
    
    // Update social links
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length >= 2) {
        socialLinks[0].href = portfolioData.social.github;
        socialLinks[1].href = portfolioData.social.linkedin;
    }
    
    console.log("Portfolio updated successfully!");
}

// Instructions for using this script:
console.log(`
=== PORTFOLIO UPDATE INSTRUCTIONS ===

1. Update the 'portfolioData' object above with your information from your resume
2. Open index.html in your browser
3. Open the browser console (F12)
4. Copy and paste this entire script into the console
5. Run: updatePortfolio()

Or you can manually update the HTML file following the CUSTOMIZATION_GUIDE.md

=== INFORMATION TO UPDATE ===
- Personal details (name, email, phone, location)
- Professional summary
- About section text
- Statistics (experience, projects, clients)
- Projects (names, descriptions, technologies, links)
- Skills (programming languages, frameworks, tools)
- Social media links

=== NEXT STEPS ===
1. Extract information from your resume (parths_Resume.pdf)
2. Update the portfolioData object
3. Test the changes
4. Deploy your portfolio
`);

// Export for use in browser console
window.portfolioData = portfolioData;
window.updatePortfolio = updatePortfolio;

