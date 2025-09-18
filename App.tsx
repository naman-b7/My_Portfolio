import React, { useState, useEffect } from 'react';
import type { Experience, Project, Education, Course, Skill } from './types';
import { MailIcon, MapPinIcon, LinkedinIcon, MenuIcon, XIcon, SendIcon, GraduationCapIcon, BookOpenIcon } from './components/Icons';

const portfolioData = {
  name: "Naman Banskota",
  titles: ["Data Analyst", "Business Development", "Email Marketing"],
  contact: {
    email: "namanbanskota7@gmail.com",
    location: "Kathmandu, Nepal",
    linkedin: "https://linkedin.com/in/namanbanskota",
    linkedinDisplay: "linkedin.com/in/namanbanskota"
  },
  profile: "A versatile and results-driven professional with experience across counselling, design, email marketing, and business development. Over the past two years, I have worked as a Counsellor and Designer at Nishan Recruitment Service, providing personalized career guidance and creating impactful visual content to support recruitment initiatives. As a Freelance Email Marketing Manager, I have designed and executed high-performing campaigns using platforms such as Klaviyo, Mailchimp, Brevo, and Benchmark Email, driving engagement and conversion for diverse clients. Additionally, I served as a Business Development Intern at Green Earth Token, where I supported strategic growth efforts, conducted market research, and contributed to partnership outreach in the blockchain and sustainability space. Known for adaptability, creativity, and a strong understanding of digital marketing and client engagement.",
  experience: [
    { role: "Business Development Intern", company: "Voyageons", dates: "04/2025 – present", location: "Kathmandu, Nepal", description: "As a Business Development Intern at Voyageons, I contributed to the company’s growth strategy by identifying partnership opportunities, researching market trends in the blockchain and sustainability sectors, and assisting in outreach initiatives. I collaborated with the core team to develop pitch materials, manage client communications, and support strategic planning for eco-focused token-based initiatives. My role also involved analyzing competitor landscapes and helping streamline processes to improve lead generation and investor engagement." },
    { role: "Email Marketing Manager", company: "Freelance", dates: "10/2024 – present", location: "Kathmandu, Nepal", description: "As a freelance Email Marketing Manager, I have successfully planned, designed, and executed high-converting email marketing campaigns for various clients across different industries. My work has focused on driving customer engagement, improving email deliverability, and increasing conversion rates using leading platforms such as Klaviyo, Mailchimp, Brevo, and Benchmark Email." },
    { role: "Counsellor/Designer", company: "Nishan Recruitment Service", dates: "01/2023 – 01/2025", location: "Kathmandu, Nepal", description: "At Nishan Recruitment Service, I served as a dual-role Counsellor and Designer, providing personalized career guidance to clients while also creating compelling visual materials for marketing and informational purposes. I assisted individuals in understanding job opportunities abroad, prepared them for interviews, and supported their application processes. Simultaneously, I designed brochures, presentations, and digital content to enhance the company’s outreach and branding, ensuring a seamless blend of communication and creativity." }
  ] as Experience[],
  projects: [
    { name: "PREDICTION IN STOCK MARKET USING AI, A Comprehensive Overview", dates: "11/2024 – present", description: "By examining enormous volumes of historical data and seeing intricate patterns that conventional approaches might overlook, artificial intelligence (AI) has the potential to completely transform stock market prediction. Investors may make better-informed decisions and more accurate forecasts by utilizing machine learning models like LSTM." },
    { name: "Real Estate Smart Billboard Optimization", dates: "11/2024 – present", description: "The research presentation on Real Estate Smart Billboard Optimization highlights how AI-driven, data-powered billboards can enhance ad targeting, maximize engagement, and improve cost efficiency for real estate marketing. By leveraging real-time analytics, IoT, and dynamic content adaptation, smart billboards optimize ad placements, increase buyer interest, and drive higher conversion rates, ultimately revolutionizing property advertising strategies." }
  ] as Project[],
  education: [
    { degree: "Undergraduate", institution: "Birmingham City University", dates: "2024 – present", location: "Birmingham, England", description: "I choose Birmingham City University because of its industry-focused curriculum, knowledgeable instructors, and state-of-the-art facilities, which provide the perfect setting for me to hone my data science and artificial intelligence abilities for a prosperous career." },
    { degree: "Data Science & AI", institution: "Sunway College", dates: "2024 – present", location: "Kathmandu, Nepal" }
  ] as (Education & { description?: string })[],
    courses: [
    { name: "Data Camp", dates: "present", description: "My abilities have improved greatly as a result of DataCamp's practical instruction in programming, machine learning, and data analysis. I was able to establish a solid foundation and keep up with industry-relevant tools like Python, R, and SQL thanks to its engaging classes and practical projects." }
  ] as Course[],
  skills: [
    { name: "Data Analysis", level: "Competent" }, { name: "HTML+CSS", level: "Competent" }, { name: "Canva", level: "Proficient" }, { name: "Sales Representative", level: "Proficient" }, { name: "Email Marketing", level: "Competent" }, { name: "Critical Thinking", level: "Proficient" }, { name: "Figma", level: "Proficient" }, { name: "Marketing", level: "Proficient" }, { name: "Python", level: "Competent" }
  ] as Skill[],
};

const navLinks = [
  { name: 'Profile', href: '#profile' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Connect', href: '#connect' },
];

// --- Helper Components ---

const ContentSection: React.FC<{ title: string; children: React.ReactNode; id: string; className?: string }> = ({ title, children, id, className = '' }) => (
  <section id={id} className={`py-16 md:py-20 ${className}`}>
    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-10 relative after:content-[''] after:absolute after:block after:w-16 after:h-1 after:bg-emerald-800 after:rounded-full after:-bottom-3 after:left-0">{title}</h2>
    <div className="space-y-8">
      {children}
    </div>
  </section>
);

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="relative group">
    <div className="absolute -left-9 sm:-left-11 top-0 h-full flex items-start">
        <div className="w-3 h-3 bg-emerald-800 rounded-full border-2 border-white transition-all duration-300 group-hover:bg-emerald-600 group-hover:scale-125"></div>
    </div>
    <div className="bg-white p-6 rounded-lg border border-emerald-200 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 overflow-hidden">
        <div className="bg-emerald-50 -mx-6 -mt-6 px-6 py-3 border-b border-emerald-200">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2 sm:gap-4">
                <div>
                    <h3 className="text-xl font-bold text-emerald-900">{item.role}</h3>
                    <p className="text-emerald-700 font-medium">{item.company}</p>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                    <p className="text-sm text-emerald-500">{item.dates}</p>
                    <p className="text-sm text-emerald-500">{item.location}</p>
                </div>
            </div>
        </div>
        <p className="text-emerald-700 leading-relaxed pt-6 text-justify">{item.description}</p>
    </div>
    <div className="absolute -left-4 sm:-left-5 top-1.5 h-0 w-4 sm:w-5 border-t border-emerald-300 group-hover:border-emerald-400 transition-colors"></div>
  </div>
);

const ProjectCard: React.FC<{ item: Project }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg border border-emerald-200 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 flex flex-col">
    <div className="flex-grow">
      <div className="flex justify-between items-start flex-col sm:flex-row gap-2 sm:gap-4 mb-2">
        <h3 className="text-xl font-bold text-emerald-800">{item.name}</h3>
        <p className="text-sm text-emerald-500 flex-shrink-0">{item.dates}</p>
      </div>
      <p className="text-emerald-700 leading-relaxed text-justify">{item.description}</p>
    </div>
    <div className="mt-6 text-right">
        <a href="#" className="inline-block bg-emerald-100 text-emerald-800 font-semibold px-4 py-2 rounded-md text-sm hover:bg-emerald-200 transition-colors">
            Learn More
        </a>
    </div>
  </div>
);

type EducationalItem = (Education & { description?: string; type: 'education' }) | (Course & { type: 'course' });

const EducationTimelineItem: React.FC<{ item: EducationalItem }> = ({ item }) => {
    const isEducation = item.type === 'education';
    const title = isEducation ? item.degree : item.name;
    const subtitle = isEducation ? item.institution : 'Online Course';

    return (
        <div className="relative group">
            <div className="absolute -left-[42px] sm:-left-[54px] top-1 h-full flex items-start" aria-hidden="true">
                <div className="w-8 h-8 bg-green-50 rounded-full border-2 border-emerald-300 flex items-center justify-center transition-all duration-300 group-hover:border-emerald-500 group-hover:scale-110">
                   {isEducation ? <GraduationCapIcon className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600"/> : <BookOpenIcon className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600"/> }
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-emerald-200 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 overflow-hidden">
                <div className="flex justify-between items-start flex-col sm:flex-row gap-2 sm:gap-4 mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-emerald-900">{title}</h3>
                        <p className="text-emerald-700 font-medium">{subtitle}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                        <p className="text-sm text-emerald-500">{item.dates}</p>
                        {isEducation && item.location && <p className="text-sm text-emerald-500">{item.location}</p>}
                    </div>
                </div>
                {item.description && <p className="text-emerald-700 leading-relaxed mt-4 text-justify">{item.description}</p>}
            </div>
        </div>
    );
};

const SkillPill: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex items-center space-x-2 bg-emerald-100 py-2 px-4 rounded-full border border-emerald-300 transition-colors hover:border-emerald-500">
    <span className={`h-2.5 w-2.5 rounded-full ${skill.level === 'Proficient' ? 'bg-emerald-800' : 'bg-emerald-600'}`}></span>
    <span className="text-emerald-800">{skill.name}</span>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };
  
  const educationalJourney = [
    ...portfolioData.education.map(e => ({ ...e, type: 'education' as const })),
    ...portfolioData.courses.map(c => ({ ...c, type: 'course' as const }))
  ];

  return (
    <div className="min-h-screen bg-green-50 text-emerald-800 font-sans leading-normal">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-green-50/80 backdrop-blur-lg border-b border-emerald-200' : 'bg-transparent'}`}>
        <nav className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-emerald-900">Naman Banskota</a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-emerald-600 hover:text-emerald-900 transition-colors">{link.name}</a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
              <MenuIcon className="w-6 h-6 text-emerald-900"/>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 w-full h-screen bg-green-50/95 backdrop-blur-xl z-50">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <XIcon className="w-8 h-8 text-emerald-900"/>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 mt-16">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-emerald-900 hover:text-emerald-600 transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-28">
          <div className="md:w-3/5 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-900 tracking-tight mb-2">
              {portfolioData.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-emerald-700">
              {portfolioData.titles.join(' | ')}
            </h2>
          </div>
          <div className="md:w-2/5 flex justify-center items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-2xl opacity-40 animate-spin-very-slow group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute -inset-2.5 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full blur-xl opacity-50 animate-spin-slow group-hover:[animation-duration:5s]"></div>
                <div className="absolute -inset-1 border-2 border-emerald-300/50 rounded-full animate-spin-reverse group-hover:[animation-duration:10s]"></div>
                <div className="absolute -inset-2 border border-emerald-400/30 rounded-full animate-spin [animation-duration:20s]"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-sm opacity-60 animate-spin [animation-duration:4s] group-hover:[animation-duration:2s]"></div>
                <div className="relative w-full h-full bg-green-50 rounded-full p-1.5 transition-transform group-hover:scale-105">
                     <img
                        src="/NAMAN.jpg"
                        alt="Profile Picture"
                        className="w-full h-full object-cover rounded-full shadow-2xl"
                      />
                </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <ContentSection title="Profile" id="profile">
          <p className="text-lg leading-relaxed text-emerald-700 text-justify">{portfolioData.profile}</p>
        </ContentSection>
        
        {/* Experience Section */}
        <ContentSection title="Professional Experience" id="experience" className="border-t border-emerald-200">
          <div className="relative border-l border-emerald-300 ml-4 pl-8 sm:ml-5 sm:pl-10">
            {portfolioData.experience.map((item, index) => (
                <div key={index} className="mb-10 last:mb-0">
                    <ExperienceCard item={item} />
                </div>
            ))}
          </div>
        </ContentSection>
        
        {/* Projects Section */}
        <ContentSection title="Projects" id="projects" className="border-t border-emerald-200">
          {portfolioData.projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </ContentSection>

        {/* Education & Courses Section */}
        <ContentSection title="Education & Courses" id="education" className="border-t border-emerald-200">
            <div className="relative border-l-2 border-emerald-200 border-dashed ml-2 pl-10 sm:ml-4 sm:pl-12">
                {educationalJourney.map((item, index) => (
                    <div key={index} className="mb-10 last:mb-0">
                         <EducationTimelineItem item={item} />
                    </div>
                ))}
            </div>
        </ContentSection>

        {/* Skills Section */}
        <ContentSection title="Skills" id="skills" className="border-t border-emerald-200">
            <div className="flex flex-wrap gap-4">
                {portfolioData.skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                ))}
            </div>
        </ContentSection>
        
        {/* Connect Section */}
        <ContentSection title="Connect With Me" id="connect" className="border-t border-emerald-200">
          {isSubmitted ? (
            <div className="text-center bg-emerald-100 border border-emerald-300 text-emerald-800 px-4 py-3 rounded-lg" role="alert">
              <strong className="font-bold">Thank you!</strong>
              <span className="block sm:inline"> Your message has been sent successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-emerald-200 shadow-lg shadow-emerald-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-1">Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-1">Email</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition"/>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex items-center gap-2 justify-center w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-800 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-transform hover:scale-105">
                  Send Message
                  <SendIcon className="w-5 h-5"/>
                </button>
              </div>
            </form>
          )}
        </ContentSection>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-100 text-emerald-700 border-t border-emerald-200 mt-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
                  <h3 className="text-2xl font-bold text-emerald-900">Let's Connect</h3>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                      <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:text-emerald-900 transition-colors">
                          <MailIcon className="w-5 h-5" /> {portfolioData.contact.email}
                      </a>
                      <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-900 transition-colors">
                          <LinkedinIcon className="w-5 h-5" /> {portfolioData.contact.linkedinDisplay}
                      </a>
                  </div>
              </div>
              <div className="border-t border-emerald-300 pt-6 text-center text-sm text-emerald-500">
                  <p>&copy; {new Date().getFullYear()} Naman Banskota. All Rights Reserved.</p>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default App;