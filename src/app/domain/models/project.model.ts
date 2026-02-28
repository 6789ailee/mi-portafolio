export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];     
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;  
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  icon: string;
}