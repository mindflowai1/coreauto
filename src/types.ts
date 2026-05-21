export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PartCategory {
  id: string;
  name: string;
  description: string;
  iconName: string; // Used to match Lucide icon
  popularItems: string[];
  imageName: string; // Asset identification or generated search term
}

export interface VehicleModel {
  brand: 'Hyundai' | 'Kia';
  name: string;
  years: string[];
}
