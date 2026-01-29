export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  features: string[];
  challenges: string;
  github: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'manileela',
    title: 'Manileela – Fashion & Jewelry Brand Website',
    shortDescription: 'A modern, fast, and visually rich brand website for Manileela, focusing on elegant product presentation and clean UI.',
    description: 'A modern, fast, and visually rich brand website developed for Manileela, focusing on elegant product presentation and clean UI. Built with high-performance, responsive layouts that highlight the brand\'s identity and allow customers to browse products easily.',
    longDescription: 'Manileela is a polished fashion and jewelry brand website that delivers a premium online experience. The site features a brand-focused UI design with lightweight, fast-loading pages that showcase products beautifully. Every aspect has been optimized for performance while maintaining visual richness. The mobile-first responsive layout ensures customers can browse seamlessly across all devices, with smooth animations and transitions that enhance the luxury feel of the brand.',
    image: '/images/projects/manileela-1.png',
    gallery: [
      '/images/projects/manileela-1.png',
      '/images/projects/manileela-2.png',
      '/images/projects/manileela-3.png',
      '/images/projects/manileela-4.png',
      '/images/projects/manileela-5.png',
      '/images/projects/manileela-6.png',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'E-Commerce', 'Brand Website'],
    features: [
      'Brand-focused UI design with elegant aesthetics',
      'Lightweight, fast-loading pages for optimal performance',
      'Responsive mobile-first layout',
      'Product showcase pages with beautiful imagery',
      'Smooth animations and transitions',
      'Optimized for high customer engagement',
    ],
    challenges: 'The main challenge was creating a website that balances visual richness with performance. Fashion and jewelry brands require stunning imagery and smooth interactions, but these can often slow down a site. The solution involved implementing modern optimization techniques, lazy loading images strategically, and using efficient animations that enhance rather than hinder performance. The result is a fast, elegant site that properly represents the brand\'s premium identity.',
    github: 'https://manileela.in/',
    liveUrl: 'https://manileela.in/',
    featured: true,
  },
  {
    slug: 'smilvin',
    title: 'Smilvin – Jewelry E-Commerce Website',
    shortDescription: 'A complete e-commerce platform for a jewelry brand with product categories, detailed pages, and luxury-themed UI.',
    description: 'A complete e-commerce website built for a jewelry brand, featuring product categories, detailed product pages, and a clean luxury-themed UI. The site is optimized for smooth shopping experience, fast interactions, and strong mobile performance.',
    longDescription: 'Smilvin is a full-featured jewelry e-commerce platform designed to provide customers with an exceptional online shopping experience. The site includes a complete product catalog with intuitive category browsing, detailed product pages that showcase jewelry pieces beautifully, and a conversion-focused layout that guides customers naturally through their shopping journey. The luxury-themed UI matches the premium nature of the products while maintaining excellent usability. Every element has been optimized for performance to ensure fast, smooth interactions that keep customers engaged.',
    image: '/images/projects/smilvin-1.png',
    gallery: [
      '/images/projects/smilvin-1.png',
      '/images/projects/smilvin-2.png',
      '/images/projects/smilvin-3.png',
      '/images/projects/smilvin-4.png',
      '/images/projects/smilvin-5.png',
      '/images/projects/smilvin-6.png',
      '/images/projects/smilvin-7.png',
      '/images/projects/smilvin-8.png',
    ],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'E-Commerce', 'Responsive Design'],
    features: [
      'Full e-commerce product catalog',
      'Intuitive category browsing system',
      'Detailed product pages with high-quality imagery',
      'Conversion-focused layout design',
      'Fully responsive design optimized for all devices',
      'Fast interactions and smooth user experience',
    ],
    challenges: 'Building an e-commerce platform requires balancing many concerns: beautiful product presentation, intuitive navigation, fast performance, and conversion optimization. The challenge was creating a luxury shopping experience while maintaining technical excellence. The solution involved careful UX design to guide customers naturally through browsing and purchasing, implementing efficient image optimization for product photos, and creating a mobile experience that matches the quality of the desktop site. The result is a professional online store that drives engagement and supports business growth.',
    github: 'https://smilvin.com/',
    liveUrl: 'https://smilvin.com/',
    featured: true,
  },
  {
    slug: 'rise-heal',
    title: 'Rise & Heal – Full-Stack Therapy Platform Redesign',
    shortDescription: 'Complete UI/UX redesign of a wellness platform with backend-ready architecture for messaging and authentication.',
    description: 'A comprehensive redesign of a wellness & therapy platform combining excellent UX with full-stack architecture planning. Ram transformed outdated interfaces into a modern, calming, user-focused application with improved flows and backend-ready structures for messaging, user authentication, and data management.',
    longDescription: 'Rise & Heal represents a comprehensive full-stack transformation of a therapy and wellness platform. The redesign focused on creating a calming, intuitive interface while planning the underlying architecture for real-time messaging, secure authentication, and user data management. Every screen, from the dashboard to messaging interfaces, has been thoughtfully redesigned with both user experience and backend scalability in mind.',
    image: '/images/projects/rise-1.png',
    gallery: [
      '/images/projects/rise-1.png',
      '/images/projects/rise-2.png',
      '/images/projects/rise-3.png',
      '/images/projects/rise-4.png',
      '/images/projects/rise-5.png',
      '/images/projects/rise-6.png',
    ],
    tags: ['Full-Stack Redesign', 'Wellness Platform', 'UI/UX', 'Architecture'],
    features: [
      'Complete visual redesign with therapeutic color palette',
      'Improved dashboard and navigation structures',
      'Backend-ready messaging and communication flows',
      'Authentication UI and user profile management',
      'Scalable component architecture for data handling',
      'Accessibility and responsive design for all users',
    ],
    challenges: 'Understanding both the emotional needs of therapy users and the technical requirements of a scalable platform was crucial. The challenge was balancing beautiful UI with secure authentication patterns, real-time messaging architecture, and data privacy. The solution involved user research, iterative testing, and designing interfaces and data flows that support both emotional safety and technical robustness.',
    github: 'https://github.com/Ramm39/Rise-Heal',
    featured: true,
  },
  {
    slug: 'aventora-international',
    title: 'Aventora International – Enterprise Full-Stack Platform',
    shortDescription: 'A structured, scalable business platform with professional presentation and dynamic content capabilities.',
    description: 'A structured corporate platform created for professional business operations. The architecture emphasizes clean spacing, typography, and clear information organization while being built with full-stack principles for easy content management and future dynamic data integration.',
    longDescription: 'Aventora International is an enterprise-grade platform designed to establish a strong business presence online. The site showcases services, team, and values through carefully organized sections while maintaining a scalable code structure. The architecture supports easy content updates and can easily integrate with backend services for dynamic data, CMS functionality, or API connections.',
    image: '/images/projects/avan-1.png',
    gallery: [
      '/images/projects/avan-1.png',
      '/images/projects/avan-2.png',
      '/images/projects/avan-3.png',
      '/images/projects/avan-4.png',
      '/images/projects/avan-5.png',
      '/images/projects/avan-6.png',
      '/images/projects/avan-7.png',
    ],
    tags: ['Enterprise', 'Full-Stack', 'Corporate', 'Scalable'],
    features: [
      'Multi-section corporate layout with clear navigation',
      'Professional typography and information hierarchy',
      'Services and team showcase sections',
      'Scalable component structure for content management',
      'Backend-ready data organization',
      'Business-friendly color palette and branding',
    ],
    challenges: 'The challenge was presenting corporate information clearly while building a flexible architecture that could support future CMS integration and dynamic content. The solution involved creating logical content organization, clear visual hierarchy, and a component structure that separates data from presentation for easy backend integration.',
    github: 'https://github.com/Ramm39/Aventora-International-BOLT',
    liveUrl: 'https://aventorainternational.com/',
    featured: true,
  },
  {
    slug: 'gamezone-website',
    title: 'GameZone – Interactive Full-Stack Gaming Platform',
    shortDescription: 'A dynamic gaming platform with interactive UI, animations, and architecture ready for game data integration.',
    description: 'A vibrant, interactive gaming platform showcasing full-stack development. Includes dynamic UI elements, engaging animations, and a well-organized game catalog structure that can connect to backend game databases and user management systems.',
    longDescription: 'GameZone is an energetic, interactive gaming platform designed for gaming enthusiasts. The site features dynamic styling, engaging animations, and a well-organized game categorization system. The architecture demonstrates Ram\'s ability to create engaging user interfaces while building backend-ready data structures for games, user profiles, and gaming statistics.',
    image: '/images/projects/gamezone-1.png',
    gallery: [
      '/images/projects/gamezone-1.png',
      '/images/projects/gameozne-2.png',
      '/images/projects/gamezone-3.png',
      '/images/projects/gamezone-4.png',
      '/images/projects/gamezone-5.png',
    ],
    tags: ['Full-Stack Gaming', 'Interactive UI', 'Dynamic Platform', 'Responsive'],
    features: [
      'Dynamic and energetic visual design',
      'Interactive game category and listing structures',
      'Engaging animations and smooth transitions',
      'User profile and progress tracking UI',
      'Backend-ready game data management architecture',
      'Clean, responsive, scalable component system',
    ],
    challenges: 'Creating an energetic design while maintaining clean architecture and planning for backend game logic was the key challenge. The solution involved using bold typography and animations purposefully, building reusable component patterns for game listings, and designing data structures that support future backend game systems.',
    github: 'https://github.com/Ramm39/GameZone-Website',
    liveUrl: 'https://vortexarena.co.in/',
    featured: true,
  },
  {
    slug: 'the-sprout',
    title: 'The Sprout',
    shortDescription: 'A scalable multi-section platform with organized architecture and dynamic content structure.',
    description: 'A structured multi-section platform with modern presentation and clean, scalable architecture.',
    longDescription: 'The Sprout showcases a complete multi-section platform with thoughtful design and clear organization. Each section flows naturally to guide the user through content, demonstrating strong information architecture, visual hierarchy, and scalable code structure suitable for backend integration.',
    image: '/images/projects/sprout-1.png',
    gallery: [
      '/images/projects/sprout-1.png',
      '/images/projects/sprout-2.png',
      '/images/projects/sprout-3.png',
      '/images/projects/sprout-4.png',
      '/images/projects/sprout-5.png',
      '/images/projects/sprout-6.png',
      '/images/projects/sprout-7.png',
    ],
    tags: ['Full-Stack', 'Multi-section', 'Scalable Architecture'],
    features: [
      'Well-organized multi-section layout',
      'Modern visual design with clear hierarchy',
      'Clean typography and spacing',
      'Responsive across all devices',
      'Scalable component structure',
      'Backend-ready data organization',
    ],
    challenges: 'Organizing multiple content sections into a cohesive experience required careful planning of information architecture and data structure. The solution involved creating consistent design patterns, logical component organization, and ensuring the system could support backend services for dynamic content.',
    github: 'https://github.com/Ramm39/The-Sprout',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const nonFeaturedProjects = projects.filter((p) => !p.featured);
