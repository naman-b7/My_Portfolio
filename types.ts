export interface Experience {
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
}

export interface Project {
  name: string;
  dates: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
  location: string;
}

export interface Course {
    name: string;
    dates: string;
    description: string;
}

export interface Skill {
  name: string;
  level: 'Proficient' | 'Competent';
}