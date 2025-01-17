import businessData from './businessData.json';

export interface SocialMedia {
  platform: string;
  url: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BusinessConfig {
  name: string;
  domain: string;
  logo: string;
  tagline: string;
  description: string;
  foundedYear: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  socialMedia: SocialMedia[];
  services: Service[];
  team: TeamMember[];
  values: string[];
  images: {
    home: {
      background1: string;
      background2: string;
      expertise: string;
    };
    services: {
      background: string;
    };
    people: {
      background: string;
    };
    contact: {
      image1: string;
      image2: string;
    };
  }
  settings: {
    logoText: string;
  }
}

const businessConfig: BusinessConfig = businessData as BusinessConfig;

export default businessConfig;

