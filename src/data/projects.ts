export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  duration: string;
  image: string;
  imagePosition?: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  services: string[];
  gallery: Array<{ src: string; alt: string; position?: string }>;
};

export const projects: Project[] = [
  {
    slug: 'commercial-pipe-upgrade',
    title: 'Commercial Pipe Upgrade',
    category: 'Commercial',
    location: 'Springfield Business District',
    year: '2025',
    duration: '12 days',
    image: '/images/projects/commercial-thumbnail.png',
    imagePosition: '50% center',
    summary: 'A phased pipework upgrade that kept a busy hospitality venue open throughout installation.',
    challenge: 'Aging supply lines were causing pressure drops during peak service, but a full shutdown was not possible for the operating venue.',
    solution: 'We mapped the existing network, isolated the work into controlled zones, and installed a higher-capacity system around the venue’s trading hours.',
    outcomes: ['38% stronger peak-time pressure', 'Zero unplanned closure hours', 'Future-ready isolation zones'],
    services: ['Pipe replacement', 'Pressure balancing', 'Commercial commissioning'],
    gallery: [
      { src: '/images/projects/commercial-gallery-hero.png', alt: 'Plumbify plumber standing proud in a commercial utility room', position: '50% 25%' },
      { src: '/images/projects/commercial-gallery-joint.png', alt: 'Plumber tightening a large copper pipe joint', position: '50% center' },
      { src: '/images/projects/commercial-gallery-pressure.png', alt: 'Technician reading an analog pressure gauge', position: '50% center' },
      { src: '/images/projects/commercial-gallery-heater.png', alt: 'Inspecting large commercial water heater', position: '50% center' },
      { src: '/images/projects/commercial-gallery-tablet.png', alt: 'Tracing pipework on a tablet blueprint', position: '50% center' },
      { src: '/images/projects/commercial-gallery-solder.png', alt: 'Soldering commercial copper pipes', position: '50% center' }
    ]
  },
  {
    slug: 'kitchen-flow-restoration',
    title: 'Kitchen Flow Restoration',
    category: 'Residential',
    location: 'Oakview Residence',
    year: '2025',
    duration: '1 day',
    image: '/images/projects/kitchen-thumbnail.png',
    imagePosition: '50% center',
    summary: 'A precise sink and supply-line repair that restored full flow without disturbing the finished kitchen.',
    challenge: 'Intermittent pressure and a concealed leak were damaging cabinetry in a newly renovated kitchen.',
    solution: 'Our team traced the leak non-invasively, replaced the failed connections, and recalibrated the faucet supply for consistent pressure.',
    outcomes: ['Same-day completion', 'No cabinet removal', 'Stable hot and cold pressure'],
    services: ['Leak detection', 'Fixture repair', 'Flow testing'],
    gallery: [
      { src: '/images/projects/kitchen-gallery-hero.png', alt: 'Plumbify plumber standing in a modern white kitchen', position: '50% 20%' },
      { src: '/images/projects/kitchen-gallery-undersink.png', alt: 'Technician repairing plumbing beneath a sink', position: '50% center' },
      { src: '/images/projects/kitchen-gallery-flow-test.png', alt: 'Plumber testing water flow at the kitchen tap', position: '50% center' },
      { src: '/images/projects/kitchen-gallery-pressure.png', alt: 'Checking kitchen faucet water pressure', position: '50% center' },
      { src: '/images/projects/kitchen-gallery-dishwasher.png', alt: 'Inspecting dishwasher water connection', position: '50% center' },
      { src: '/images/projects/kitchen-gallery-tablet.png', alt: 'Showing digital repair report on tablet', position: '50% center' }
    ]
  },
  {
    slug: 'whole-home-drain-renewal',
    title: 'Whole-Home Drain Renewal',
    category: 'Drainage',
    location: 'Maple Grove',
    year: '2024',
    duration: '3 days',
    image: '/images/projects/drain-thumbnail.png',
    imagePosition: '50% center',
    summary: 'A targeted drainage renewal that removed recurring blockages and protected the home from future backups.',
    challenge: 'Repeated blockages across multiple fixtures pointed to a deeper issue in the home’s main drainage route.',
    solution: 'We surveyed the line, removed damaged sections, introduced accessible cleanouts, and verified the renewed system under load.',
    outcomes: ['Full-bore drainage restored', 'New service access points', 'Five-year workmanship cover'],
    services: ['Drain inspection', 'Line renewal', 'System testing'],
    gallery: [
      { src: '/images/projects/drain-gallery-hero.png', alt: 'Plumbify specialist standing by CCTV drain inspection equipment', position: '50% 20%' },
      { src: '/images/projects/drain-gallery-bathroom.png', alt: 'Clearing bathroom floor drain', position: '50% center' },
      { src: '/images/projects/drain-gallery-cctv.png', alt: 'Using outdoor CCTV drain camera', position: '50% center' },
      { src: '/images/projects/drain-gallery-jetting.png', alt: 'High pressure hydro-jetting drain pipe', position: '50% center' },
      { src: '/images/projects/drain-gallery-manhole.png', alt: 'Lifting outdoor manhole cover', position: '50% center' },
      { src: '/images/projects/drain-gallery-monitor.png', alt: 'Explaining issue on CCTV monitor', position: '50% center' }
    ]
  },
  {
    slug: 'smart-water-audit',
    title: 'Smart Water Audit',
    category: 'Consultation',
    location: 'Riverside House',
    year: '2024',
    duration: '2 days',
    image: '/images/projects/audit-thumbnail-landscape.png',
    imagePosition: '50% 30%',
    summary: 'A room-by-room water audit that found hidden waste and produced a practical efficiency roadmap.',
    challenge: 'The homeowner had rising water bills without an obvious leak or change in household usage.',
    solution: 'We combined fixture testing, pressure monitoring, and usage analysis to identify silent losses and prioritize high-impact upgrades.',
    outcomes: ['Three hidden losses identified', 'Projected 22% usage reduction', 'Prioritized upgrade plan'],
    services: ['Water audit', 'Pressure diagnostics', 'Efficiency planning'],
    gallery: [
      { src: '/images/projects/audit-hero-banner.png', alt: 'Plumbify specialist standing in front of a home manifold ready for the water audit', position: '50% 30%' },
      { src: '/images/projects/audit-pressure-test.png', alt: 'Plumbify plumber attaching a pressure gauge under the kitchen sink', position: '50% 40%' },
      { src: '/images/projects/audit-bathroom-check.png', alt: 'Plumber presenting water usage data on a tablet during a bathroom audit', position: '50% 30%' },
      { src: '/images/projects/audit-meter-reading.png', alt: 'Plumbify specialist reading the outdoor water meter with a digital device', position: '50% 35%' },
      { src: '/images/projects/audit-report-consultation.png', alt: 'Plumber presenting the water efficiency report to a homeowner', position: '50% 30%' },
      { src: '/images/projects/audit-consultation-portrait.png', alt: 'Plumbify specialist holding a moisture meter and clipboard during a consultation', position: '50% 25%' }
    ]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
