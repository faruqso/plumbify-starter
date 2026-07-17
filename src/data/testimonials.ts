export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  title: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Mark Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5.0,
    title: 'Quick and Reliable Service',
    content: 'I recently had an emergency plumbing issue, and Plumbify provided quick and reliable service. They arrived promptly, identified the issue, and resolved it efficiently. I highly recommend Plumbify for any home repairs.',
  },
  {
    id: 't2',
    name: 'Sarah Kim',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 4.2,
    title: 'Honest and Transparent Pricing',
    content: 'Plumbify provided honest and transparent pricing for their services. They explained the pricing upfront and provided a detailed breakdown of the costs. I highly recommend the Plumbify team.',
  },
  {
    id: 't3',
    name: 'David Lee',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 4.3,
    title: 'Excellent Customer Service',
    content: 'The team at Plumbify provided excellent customer service from start to finish. They were responsive, knowledgeable, and professional throughout the entire process. I highly recommend Plumbify.',
  },
  {
    id: 't4',
    name: 'Jennifer Smith',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5.0,
    title: 'Efficient and Thorough Work',
    content: 'Plumbify provided efficient and thorough work for my commercial plumbing issue. They took the time to diagnose the problem, explained the solution, and resolved it quickly. I highly recommend Plumbify.',
  },
  {
    id: 't5',
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5.0,
    title: 'Saved Our Business Night',
    content: 'When our main kitchen pipe burst during dinner rush, Plumbify was there in 30 minutes. They handled the situation calmly and professionally. Truly a lifesaver for our business.',
  }
];
