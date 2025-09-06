import type {Project, Skill, ExperienceItem, EducationItem, Achievement} from './types';
import {
    JavaIcon,
    SpringBootIcon,
    ReactIcon,
    DockerIcon,
    KubernetesIcon,
    JenkinsIcon,
    AwsIcon,
    SqlIcon,
    NoSqlIcon,
    MavenIcon,
    CICDIcon,
    LinuxIcon
} from './components/icons/TechIcons';
import {CertificateIcon} from './components/icons/GeneralIcons';

export const SKILLS_DATA: Skill[] = [
    {name: 'Java', icon: JavaIcon},
    {name: 'Spring Boot', icon: SpringBootIcon},
    {name: 'React', icon: ReactIcon},
    {name: 'Docker', icon: DockerIcon},
    {name: 'Kubernetes', icon: KubernetesIcon},
    {name: 'Jenkins', icon: JenkinsIcon},
    {name: 'AWS', icon: AwsIcon},
    {name: 'Maven', icon: MavenIcon},
    {name: 'CI/CD', icon: CICDIcon},
    {name: 'SQL', icon: SqlIcon},
    {name: 'MongoDB', icon: NoSqlIcon},
    {name: 'Linux', icon: LinuxIcon},
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'Microservices E-Commerce Platform',
        description: 'A scalable, cloud-native e-commerce backend built with a microservices architecture. Features include service discovery, centralized configuration, and resilient communication patterns.',
        tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Eureka', 'API Gateway', 'Docker'],
        githubUrl: '#',
        demoUrl: '#',
    },
    {
        title: 'React-based Inventory Dashboard',
        description: 'A dynamic and responsive frontend application for managing product inventory. Communicates with the e-commerce backend via REST APIs and provides real-time data updates.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Recharts'],
        githubUrl: '#',
        demoUrl: '#',
    },
    {
        title: 'Automated CI/CD Pipeline',
        description: 'A complete CI/CD pipeline for the full-stack application. Automates building, testing, and deployment of both Java microservices and the React frontend to a Kubernetes cluster.',
        tags: ['Jenkins', 'Docker', 'Kubernetes', 'Maven', 'AWS ECR'],
        githubUrl: '#',
    },
    {
        title: 'Cloud Cost Optimization Tool',
        description: 'A serverless application on AWS to monitor and report on cloud resource usage, helping to identify and reduce unnecessary costs. Leveraged Lambda and EventBridge for automation.',
        tags: ['AWS Lambda', 'Python', 'Boto3', 'Serverless', 'EventBridge'],
        githubUrl: '#',
    }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: 'Jan 2021 - Present',
        description: 'Led the development of a high-traffic microservices-based system using Java and Spring Boot. Architected and implemented a CI/CD pipeline on AWS, reducing deployment times by 60%. Mentored junior developers on best practices.',
    },
    {
        role: 'Java Backend Developer',
        company: 'Innovate Systems',
        period: 'Jun 2018 - Dec 2020',
        description: 'Developed and maintained core backend services for a financial analytics platform. Worked extensively with Spring, Hibernate, and relational databases. Participated in the migration of monolithic services to a microservices architecture.',
    },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'B.Tech in Electronics and Telecommunication',
        institution: 'G. H. Raisoni Pune',
        period: '2019 - 2023'
    },
    {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'State University',
        period: '2012 - 2016'
    }
]

export const ACHIEVEMENTS_DATA: Achievement[] = [
    {
        name: 'AWS Certified Cloud Practitioner - Associate',
        issuer: 'Amazon Web Services',
        icon: CertificateIcon
    },
    {
        name: 'Certified Java Developer Udemy',
        issuer: 'Udemy Certification',
        icon: CertificateIcon
    },
    {
        name: 'Oracle Certified Generative AI Professional',
        issuer: 'Oracle',
        icon: CertificateIcon
    }
]
