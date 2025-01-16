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
  settings: {
    logoText: string;
  }
}

const businessConfig: BusinessConfig = {
  name: "Your Business Name",
  domain: "example.com",
  logo: "/logo.png",
  tagline: "Professional Services for Your Business Success",
  description: "We provide top-notch services tailored to your unique business needs",
  foundedYear: 2010,
  address: {
    street: "Smith St",
    city: "Capalaba",
    state: "Queensland",
    zip: "4157",
    country: "Australia",
  },
  contact: {
    phone: "(123) 456-7890",
    email: "info@yourbusinessname.com",
  },
  socialMedia: [
    { platform: "Facebook", url: "https://www.facebook.com/yourbusinessname" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/yourbusinessname" },
    { platform: "Twitter", url: "https://twitter.com/yourbusinessname" },
  ],
  services: [
    {
      title: "Service 1",
      description: "Description of Service 1 goes here.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Service 2",
      description: "Description of Service 2 goes here.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Service 3",
      description: "Description of Service 3 goes here.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  team: [
    {
      name: "John Doe",
      role: "CEO",
      bio: "John has over 20 years of experience in the industry.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jane Smith",
      role: "COO",
      bio: "Jane is an expert in operations and process optimization.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Mike Johnson",
      role: "CTO",
      bio: "Mike leads our technology initiatives and innovations.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Brown",
      role: "Head of Marketing",
      bio: "Sarah brings creative marketing strategies to our team.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ],
  values: ["Excellence", "Integrity", "Innovation", "Client Focus"],
  settings: {
    logoText: "Text"
  }
};

export default businessConfig;

