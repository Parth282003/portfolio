// Portfolio Data - Parth Kohli
// Last updated: 2025

const portfolioData = {
    name: "Parth Kohli",
    title: "DevOps Intern & Computer Science Student",
    email: "parthkohli2k3@gmail.com",
    university: "VIT Bhopal University",
    location: "Delhi / Bhopal, India",

    summary: "Building and automating infrastructure at CHI Networks. Passionate about DevOps, cloud infrastructure, security tooling, and machine learning.",

    about: [
        "I'm a Computer Science student at VIT Bhopal University (CGPA: 8.05) currently working as a DevOps Intern at CHI Networks, Delhi. My work spans CI/CD pipelines, Linux server automation, Docker-based deployments, security tooling, and backend API development.",
        "I've automated full-stack deployments to under 90 seconds and server provisioning to under 6 minutes using Jenkins and Ansible. I also have a background in data science and machine learning, having completed a separate internship delivering 8 ML projects."
    ],

    stats: {
        cgpa: "8.05",
        projects: "10+",
        internships: "2"
    },

    experience: [
        {
            title: "DevOps Intern",
            company: "CHI Networks",
            duration: "Feb 2025 – Present",
            type: "On-Site, Delhi",
            bullets: [
                "Built Jenkins CI/CD pipelines for Django and React applications, reducing full-stack deployment time to under 90 seconds",
                "Automated Linux server provisioning with Ansible, cutting new server setup time to under 6 minutes",
                "Deployed and containerized 10+ self-hosted services using Docker and Docker Compose",
                "Developed FastAPI-based REST APIs to automate OpenVAS vulnerability scan management and integrate with Wazuh SIEM",
                "Configured and provisioned network switches, handling VLAN setup and inter-VLAN routing",
                "Built n8n automation workflows including an end-to-end proposal and PowerPoint generation pipeline"
            ],
            tags: ["Jenkins", "Ansible", "Docker", "FastAPI", "Wazuh", "OpenVAS", "Linux", "n8n", "Nginx", "Sentry"]
        },
        {
            title: "Data Science Intern",
            company: "Main Flow Services and Technologies Pvt. Ltd.",
            duration: "Feb 2025 – Apr 2025",
            type: "Remote",
            bullets: [
                "Completed Data Science with Python internship under Ministry of Corporate Affairs and MSME",
                "Delivered 8 ML projects in 2 months using NumPy, Pandas, Matplotlib, and Scikit-learn, improving model accuracy by up to 15%"
            ],
            tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
        }
    ],

    projects: [
        {
            name: "Book Recommender System",
            description: "A content-based recommender system using K-Means clustering on 8,000+ books, achieving 85%+ genre alignment and reducing user search time by ~40%.",
            technologies: ["Python", "Scikit-learn", "K-Means"],
            github: "https://github.com/Parth282003/recommender-system"
        },
        {
            name: "Nimbus ETL Pipeline",
            description: "Automated daily weather ETL for 50+ locations using Apache Airflow with 99% uptime. Loads 1,000+ records/day to PostgreSQL with 30% faster query performance.",
            technologies: ["Apache Airflow", "Python", "PostgreSQL"],
            github: "https://github.com/Parth282003/ETL"
        },
        {
            name: "Tumour Detection Model",
            description: "CNN-based tumour detection using Inception architecture trained on 20,000+ medical images with data augmentation. Achieved 96% validation and test accuracy.",
            technologies: ["TensorFlow", "Keras", "CNN"],
            github: "https://github.com/Parth282003/tumour-detection"
        }
    ],

    skills: {
        "Languages": ["Python", "C++", "SQL", "Bash", "YAML", "HTML/CSS"],
        "DevOps & Infrastructure": ["Docker", "Docker Compose", "Jenkins", "Ansible", "SaltStack", "Nginx", "Linux (Ubuntu)", "n8n", "Networking / VLANs", "OpenStack"],
        "Security & Monitoring": ["OpenVAS / Greenbone", "Wazuh", "Sentry", "Grafana"],
        "Frameworks & Libraries": ["FastAPI", "Django", "React", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
        "Tools & Platforms": ["Git", "REST APIs", "PostgreSQL", "Apache Kafka", "Apache Airflow", "AWS", "Google Cloud"]
    },

    certifications: [
        { name: "AWS Certified Cloud Practitioner (CLF-C02)", issuer: "Amazon Web Services", year: 2025 },
        { name: "OCI Certified Data Science Professional", issuer: "Oracle", year: 2025 },
        { name: "AWS Solutions Architect – Associate", issuer: "Ethnus", year: 2024 }
    ],

    social: {
        github: "https://github.com/Parth282003",
        linkedin: "https://linkedin.com/in/psk28"
    }
};

window.portfolioData = portfolioData;
