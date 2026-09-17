export interface HeroSlide {
  id: string;
  image: string;
  eyebrow: string;
  headline: string;
  description: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  background: string;
  photo: string;
}

export interface StartStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  context: string;
  quote: string;
  result: string;
  photo: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  handle: string;
}
