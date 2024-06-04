/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shivansh's Portfolio",
  description:
    "A computer science student who likes to work on computer science projects. I want to make a difference in the world and want to leave it in a better shape.",
  og: {
    title: "Shivansh Goel Portfolio",
    type: "website",
    url: "https://deadshotlegend.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Shivansh Goel",
  logo_name: "Shivansh Goel",
  nickname: "Deadshot Legend",
  subTitle:
    "A computer science student who likes to work on computer science projects. I want to make a difference in the world and want to leave it in a better shape.",
  resumeLink: "Resume.pdf",
  portfolio_repository: "https://github.com/DeadshotLegend/masterPortfolio",
  githubProfile: "https://github.com/DeadshotLegend",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/DeadshotLegend",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivanshgoel/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCa7i-_2bi9miaTKUjSDFORw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shivanshggamer@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development - Spring Boot",
      fileName: "FullStackImg",
      skills: [
        "⚡ Create stand-alone Spring applications",
        "⚡ RESTful Web Services: Building and consuming RESTful APIs using Spring MVC and Spring Boot",
        "⚡ Create HTML5 and JavaScript frontends",
        "⚡ Thymeleaf: Creating dynamic web pages using the Thymeleaf templating engine",
        "⚡ Spring Data JPA: Simplifying data access with JPA repositories",
      ],
      softwareSkills: [
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "ThymeLeaf",
          fontAwesomeClassname: "logos:thymeleaf-icon",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development - Python",
      fileName: "FullStackImg",
      skills: [
        "⚡ Create feature rich applications in Python",
        "⚡ Use Flask microframew  ork for fast web development",
        "⚡ Use Werkzeug web application libraries",
        "⚡ Use Jinja web templating engine",
        "⚡ Create HTML5 and JavaScript fronends",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jinja",
          fontAwesomeClassname: "simple-icons:jinja",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience hosting applications on AWS",
        "⚡ Using Docker to containerize deployment on AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "CyberPatriot",
      logo_path: "logo-cyberpatriot-white.png",
      alt_name: "Cyber Patriot",
      style: {
        maxWidth: "100%",
        maxHeight: "100%",
        transform: "scale(0.9)",
        background: "black",
      },
      profileLink: "https://www.uscyberpatriot.org/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Del Norte High School",
      subtitle: "Junior",
      logo_path: "school_logo.png",
      alt_name: "Del Norte High School",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like CSA and CSP",
        "⚡ Apart from this, I have done courses on Android Programming and Full Stack Development.",
      ],
      website_link: "https://delnorte.powayusd.com/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Currently interning at a software company, gaining hands-on experience in coding, testing, and troubleshooting software applications. Demonstrated ability to work independently and collaboratively in fast-paced environments. Eager to continue learning and growing in the field of technology while contributing to innovative projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Student Apps Developer",
          company: "Del Norte High School",
          company_url: "https://delnorte.powayusd.com/",
          logo_path: "school_logo.png",
          duration: "Sept 2023 - Present",
          location: "San Diego, CA, USA",
          description:
            "I am working on creating a time management application as part of the school club.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Unfold Labs Inc.",
          company_url: "",
          logo_path: "logo-unfoldlabs.svg",
          duration: "Sept 2023 - Present",
          location: "San Diego, CA, USA",
          description:
            "Tested various apps and developed presentations for the overview of the products. Researched and brainstormed various ways to improve the products from customer complaints to new innovative ideas. Worked with app development team in the products which were approved",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "SD Futures",
          company: "SD Futures",
          company_url: "https://sdfutures.org/",
          logo_path: "SDFFLogo.webp",
          duration: "July 2023 - Sept 2023",
          location: "San Diego, CA, USA",
          description: "Worked in adult digital literacy programs.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects have been built in both Java and Python languages. They range from a fun snake game to an AI ChatBot.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shivansh.png",
    description:
      "I am available on email. I will reply within 1 day. I can help you with SpringBoot, Web Site Development, Full Life Cycle Application Development, Mobile App Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "My life journey is just getting interesting and I am documenting it all here.",
    link: "https://stgblog9.wordpress.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "San Diego, CA 92127",
    locality: "San Diego",
    country: "USA",
    region: "California",
    postalCode: "92127",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/nDtQsm8bWt6rqo8b9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
