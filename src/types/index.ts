export interface TeamMember {
  id: string;
  name: string;
  position: string;
  rollNumber: string;
  department: string;
  year: string;
  photo: string;
  council?: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  mode: string;
  description: string;
  objectives: string[];
  speakers?: string[];
  poster: string;
  banner: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  category: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  eventName: string;
  description: string;
  venue: string;
  category: string;
  year: string;
}

export interface Council {
  id: string;
  name: string;
  shortName: string;
  responsibilities: string[];
  contributions: string[];
  icon: string;
}
