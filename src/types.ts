export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
}

export interface ProductSpec {
  feature: string;
  detail: string;
  iconName?: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: string;
}

export interface SolutionPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  subPoints?: string[];
  badge: string;
  image: string;
}

export interface UsageStep {
  stepNumber: string;
  name: string;
  action: string;
  description: string;
  tip: string;
  icon: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  skinType: string;
  comment: string;
  rating: number;
  date: string;
  verified: boolean;
  avatar: string;
  tag: string;
}

export interface ComboOffer {
  id: 'single' | 'combo3';
  title: string;
  tag: string;
  price: number;
  originalPrice: number;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  giftText?: string;
  image: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  note: string;
  selectedCombo: 'single' | 'combo3';
  quantity: number;
  paymentMethod: 'cod' | 'banking';
}
