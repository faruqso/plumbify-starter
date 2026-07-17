export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceImage = {
  src: string;
  alt: string;
  label: string;
  position?: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  cardTitle: string;
  price: string;
  description: string;
  summary: string;
  heroLabel: string;
  heroHeadline: string;
  heroImage: string;
  heroImagePosition?: string;
  homepageImage: string;
  homepageImageAlt: string;
  trust: string[];
  storyTitle: string;
  storyLead: string;
  storyStats: Array<{ value: string; label: string }>;
  process: ServiceProcessStep[];
  benefits: ServiceBenefit[];
  gallery: ServiceImage[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: 'hot-water-heater-fixing',
    title: 'Hot Water Heater Fixing Services',
    shortTitle: 'Water heater repair',
    cardTitle: 'Hot Water Heater Fixing Services',
    price: '$150',
    description: 'Our water heater repair service involves diagnosing and fixing issues.',
    summary: 'Fast diagnosis and precise repair for inconsistent heating, noisy tanks, pressure faults, and tired fittings.',
    heroLabel: 'Water heater specialists',
    heroHeadline: 'Hot water restored without the guesswork.',
    heroImage: '/images/projects/water-heater-specialist.webp',
    heroImagePosition: '50% center',
    homepageImage: '/images/services/service-thumb-water-heater.png',
    homepageImageAlt: 'Plumbify plumber inspecting a water heater',
    trust: ['Same-day diagnosis', 'Parts-ready visits', 'Temperature and pressure tested'],
    storyTitle: 'We treat the heater as a whole system, not just a hot tank.',
    storyLead: 'Water heater issues often show up as cold showers, fluctuating pressure, pilot failures, or small leaks. Our visit maps the tank, valves, supply lines, controls, and safety discharge so the repair solves the real cause.',
    storyStats: [
      { value: '90 min', label: 'typical diagnostic window' },
      { value: '24 hr', label: 'priority repair availability' },
      { value: '100%', label: 'final temperature test' }
    ],
    process: [
      { title: 'System inspection', description: 'We check tank condition, fittings, valves, pressure behavior, and visible leaks.' },
      { title: 'Fault diagnosis', description: 'We isolate heating, flow, venting, electrical, or plumbing causes before repair starts.' },
      { title: 'Targeted repair', description: 'Failed components are repaired or replaced using durable parts suited to the unit.' },
      { title: 'Safety testing', description: 'Temperature, pressure relief, flow, and connection integrity are tested before handoff.' }
    ],
    benefits: [
      { title: 'Less downtime', description: 'A clear diagnosis keeps the visit focused and helps restore hot water quickly.' },
      { title: 'Safer operation', description: 'Pressure relief, leak points, and temperature behavior are checked before we leave.' },
      { title: 'Repair-first guidance', description: 'We explain whether repair, tune-up, or replacement is the best value.' }
    ],
    gallery: [
      { src: '/images/projects/water-heater-specialist.webp', alt: 'Plumbify plumber inspecting a water heater', label: 'Heater diagnostics', position: '50% center' },
      { src: '/images/projects/commercial-gallery-heater.png', alt: 'Water heater and utility system inspection', label: 'Utility room review', position: '50% center' },
      { src: '/images/projects/audit-pressure-test.png', alt: 'Pressure gauge connected during a plumbing test', label: 'Pressure testing', position: '50% 40%' }
    ],
    faqs: [
      { question: 'Can you repair a water heater the same day?', answer: 'Most common faults can be diagnosed the same day, and many repairs can be completed during the first visit when parts are available.' },
      { question: 'Should I repair or replace my water heater?', answer: 'We compare age, tank condition, fault type, energy performance, and repair cost before recommending the smartest option.' },
      { question: 'Do you test the system after repair?', answer: 'Yes. We test temperature, pressure, visible fittings, relief behavior, and water flow before closing the job.' }
    ]
  },
  {
    slug: 'sewer-maintenance-solutions',
    title: 'Sewer Maintenance Solutions',
    shortTitle: 'Sewer maintenance',
    cardTitle: 'Sewer Maintenance Solutions',
    price: '$200',
    description: 'Our drain cleaning service involves clearing out blockages and debris.',
    summary: 'Planned drain and sewer maintenance that clears blockages, spots deeper faults, and keeps water moving safely.',
    heroLabel: 'Drain and sewer care',
    heroHeadline: 'Clear drains today. Fewer surprises tomorrow.',
    heroImage: '/images/projects/drain-gallery-hero.png',
    heroImagePosition: '50% 20%',
    homepageImage: '/images/services/service-thumb-sewer.png',
    homepageImageAlt: 'Plumbify plumber with sewer inspection camera',
    trust: ['Camera-ready inspections', 'Cleanout planning', 'Flow verified before completion'],
    storyTitle: 'Maintenance is the quiet work that prevents messy emergencies.',
    storyLead: 'Slow drains and recurring clogs usually have a pattern. We look at the full route, clear the immediate restriction, and document warning signs before they turn into backups.',
    storyStats: [
      { value: '3 step', label: 'clear inspect verify' },
      { value: '0 mess', label: 'protected work zones' },
      { value: '5 yr', label: 'planning horizon' }
    ],
    process: [
      { title: 'Flow mapping', description: 'We identify affected fixtures and trace likely restriction points across the line.' },
      { title: 'Cleanout access', description: 'Access points are protected, opened, and prepared for clearing or inspection.' },
      { title: 'Line clearing', description: 'Blockages and buildup are removed with the right method for the pipe condition.' },
      { title: 'Verification', description: 'We run water under load and flag repair opportunities before they become emergencies.' }
    ],
    benefits: [
      { title: 'Cleaner flow', description: 'Debris, grease, and buildup are cleared so fixtures drain at a healthy pace.' },
      { title: 'Earlier warnings', description: 'Recurring issues, damaged sections, or access gaps are documented clearly.' },
      { title: 'Lower emergency risk', description: 'Routine maintenance reduces the chance of sudden backups and water damage.' }
    ],
    gallery: [
      { src: '/images/projects/drain-gallery-hero.png', alt: 'Plumbify plumber with drain inspection equipment', label: 'Drain inspection', position: '50% 20%' },
      { src: '/images/projects/drain-gallery-cctv.png', alt: 'CCTV drain inspection work', label: 'Camera survey', position: '50% center' },
      { src: '/images/projects/sink-drain-repair.webp', alt: 'Plumber repairing a sink drain', label: 'Fixture flow test', position: '50% center' }
    ],
    faqs: [
      { question: 'How often should drains be maintained?', answer: 'Homes with frequent use or past blockages benefit from an annual check. Commercial spaces may need a more frequent plan.' },
      { question: 'Do you use camera inspections?', answer: 'When symptoms suggest a deeper issue, camera inspection helps confirm pipe condition and location before recommending repairs.' },
      { question: 'Will maintenance stop every future clog?', answer: 'It greatly reduces risk, but damaged pipework, root intrusion, or heavy grease use may need additional repair or behavior changes.' }
    ]
  },
  {
    slug: 'leak-detection-repair',
    title: 'Leak Detection and Repair',
    shortTitle: 'Leak repair',
    cardTitle: 'Leak Detection & Repair',
    price: '$250',
    description: 'We find leaks fast and make lasting repairs.',
    summary: 'Precise leak tracing and tidy repair work that protects cabinets, walls, floors, and water bills.',
    heroLabel: 'Leak detection and repair',
    heroHeadline: 'Find the leak before it finds the rest of your home.',
    heroImage: '/images/projects/kitchen-gallery-undersink.png',
    heroImagePosition: '50% center',
    homepageImage: '/images/services/service-thumb-leak.png',
    homepageImageAlt: 'Plumbify plumber using a thermal leak scanner',
    trust: ['Non-invasive tracing', 'Moisture-aware repairs', 'Final pressure check'],
    storyTitle: 'A good leak repair starts with restraint.',
    storyLead: 'Instead of opening everything up, we read the signs first: moisture, pressure movement, fixture behavior, staining, and access points. Then we repair only what needs to be repaired.',
    storyStats: [
      { value: '1 visit', label: 'common leak fixes' },
      { value: '3 zones', label: 'pressure moisture visual' },
      { value: '0 guess', label: 'diagnosis-first work' }
    ],
    process: [
      { title: 'Moisture scan', description: 'We inspect visible signs and likely routes around fixtures, cabinets, and supply lines.' },
      { title: 'Pressure check', description: 'Pressure behavior helps separate active leaks from staining or old damage.' },
      { title: 'Controlled access', description: 'We reach the repair area with as little disruption to finished surfaces as possible.' },
      { title: 'Repair and retest', description: 'Connections are repaired, dried down, and pressure-tested before completion.' }
    ],
    benefits: [
      { title: 'Less damage', description: 'Early detection limits the spread of water into cabinets, floors, and walls.' },
      { title: 'Cleaner repairs', description: 'Diagnosis-led access avoids unnecessary demolition and keeps the work tidy.' },
      { title: 'Clear next steps', description: 'You leave with repair notes and prevention advice for the affected area.' }
    ],
    gallery: [
      { src: '/images/projects/kitchen-gallery-undersink.png', alt: 'Plumbify plumber repairing a leak beneath a sink', label: 'Under-sink repair', position: '50% center' },
      { src: '/images/projects/under-sink-repair.webp', alt: 'Close inspection of under-sink plumbing', label: 'Connection check', position: '50% center' },
      { src: '/images/projects/audit-bathroom-check.png', alt: 'Plumber inspecting bathroom plumbing', label: 'Moisture review', position: '50% 30%' }
    ],
    faqs: [
      { question: 'Can you find a hidden leak without opening the wall?', answer: 'Often we can narrow the source through pressure checks, moisture readings, fixture testing, and visible access before any opening is considered.' },
      { question: 'What should I do before you arrive?', answer: 'If water is actively escaping, shut off the nearest isolation valve or main supply. Keep photos of the leak pattern if it appears intermittently.' },
      { question: 'Do you repair the leak after finding it?', answer: 'Yes. The service is built around detection and repair, with final testing to confirm the issue is resolved.' }
    ]
  },
  {
    slug: 'fixture-installation',
    title: 'Fixture Installation',
    shortTitle: 'Fixture installs',
    cardTitle: 'Fixture Installation Services',
    price: '$180',
    description: 'Professional faucet, sink, toilet, and shower fixture installations.',
    summary: 'Clean fixture installation with precise alignment, sealed connections, and full flow testing before handoff.',
    heroLabel: 'Fixture installation',
    heroHeadline: 'New fixtures installed with a clean finish.',
    heroImage: '/images/projects/kitchen-faucet-repair.webp',
    heroImagePosition: '50% center',
    homepageImage: '/images/services/service-thumb-fixture.png',
    homepageImageAlt: 'Plumbify plumber installing a kitchen faucet',
    trust: ['Clean fit and finish', 'Connection testing', 'Old fixture removal'],
    storyTitle: 'A great fixture install should feel invisible once it is done.',
    storyLead: 'We check compatibility, protect surrounding surfaces, align the fixture, seal the connection, and test flow so the final result looks intentional and works reliably.',
    storyStats: [
      { value: '1 day', label: 'typical install window' },
      { value: '4 point', label: 'seal and flow check' },
      { value: '0 mess', label: 'tidy work zone' }
    ],
    process: [
      { title: 'Fit review', description: 'We confirm fixture size, supply access, and drain compatibility before removal.' },
      { title: 'Surface prep', description: 'Surrounding counters, tile, or floors are protected and cleaned for a proper seal.' },
      { title: 'Installation', description: 'The fixture is seated, aligned, secured, and connected with durable fittings.' },
      { title: 'Flow test', description: 'We test water flow, drainage, seals, and visible finish before completion.' }
    ],
    benefits: [
      { title: 'Clean finish', description: 'Careful alignment and sealing make the fixture look built into the space.' },
      { title: 'Reliable connections', description: 'Supply and drain points are tested under use before we leave.' },
      { title: 'Less disruption', description: 'Most common fixture installations are handled in a single focused visit.' }
    ],
    gallery: [
      { src: '/images/projects/kitchen-gallery-hero.png', alt: 'Plumbify plumber installing a faucet', label: 'Faucet install', position: '50% center' },
      { src: '/images/projects/drain-gallery-bathroom.png', alt: 'Bathroom fixture service', label: 'Bath fixture', position: '50% center' },
      { src: '/images/projects/kitchen-gallery-flow-test.png', alt: 'Toilet supply installation work', label: 'Flow test', position: '50% center' }
    ],
    faqs: [
      { question: 'Can you install fixtures I already purchased?', answer: 'Yes. We check compatibility first and will flag missing parts before installation begins.' },
      { question: 'Do you remove the old fixture?', answer: 'Yes. Standard removal is included in most fixture installation visits.' },
      { question: 'Will you test for leaks after installation?', answer: 'Yes. Supply, drainage, and visible seals are tested before the job is complete.' }
    ]
  },
  {
    slug: 'pipe-replacement',
    title: 'Pipe Replacement',
    shortTitle: 'Pipe replacement',
    cardTitle: 'Pipe Replacement Services',
    price: '$320',
    description: 'Durable pipe replacement for corroded, damaged, or undersized lines.',
    summary: 'Targeted pipe replacement that improves reliability, pressure, and access without unnecessary disruption.',
    heroLabel: 'Pipe replacement',
    heroHeadline: 'Stronger pipework where your system needs it most.',
    heroImage: '/images/projects/commercial-gallery-joint.png',
    heroImagePosition: '50% center',
    homepageImage: '/images/services/service-thumb-pipe.png',
    homepageImageAlt: 'Plumbify plumber fitting a copper water pipe',
    trust: ['Pressure balanced', 'Durable materials', 'Future access planned'],
    storyTitle: 'Replacement work should improve the system, not just swap a part.',
    storyLead: 'We identify the failed section, review pipe sizing and access, then replace with materials and routing that support long-term serviceability.',
    storyStats: [
      { value: '38%', label: 'possible pressure lift' },
      { value: '3 zone', label: 'isolation planning' },
      { value: '5 yr', label: 'workmanship focus' }
    ],
    process: [
      { title: 'Line assessment', description: 'We inspect condition, pressure symptoms, routing, and available access.' },
      { title: 'Isolation plan', description: 'Water is controlled so replacement work stays focused and predictable.' },
      { title: 'Replacement', description: 'Damaged or undersized sections are replaced with appropriate materials.' },
      { title: 'Commissioning', description: 'We test pressure, visible joints, and fixture behavior after replacement.' }
    ],
    benefits: [
      { title: 'Better pressure', description: 'Correctly sized replacement can restore stronger and more stable flow.' },
      { title: 'Reduced leak risk', description: 'Tired sections are removed before they become repeat repair points.' },
      { title: 'Cleaner maintenance', description: 'Access and isolation are considered so future service is simpler.' }
    ],
    gallery: [
      { src: '/images/projects/commercial-gallery-solder.png', alt: 'Plumbify plumber soldering copper pipework', label: 'Copper service', position: '50% center' },
      { src: '/images/projects/commercial-gallery-joint.png', alt: 'Large pipe joint being tightened', label: 'Joint replacement', position: '50% center' },
      { src: '/images/projects/commercial-gallery-hero.png', alt: 'Plumbing manifold upgrade', label: 'Manifold work', position: '50% center' }
    ],
    faqs: [
      { question: 'Do you replace only the damaged section?', answer: 'When appropriate, yes. We recommend targeted replacement unless wider system condition makes a larger upgrade smarter.' },
      { question: 'Will my water be off all day?', answer: 'We plan isolation carefully and explain the expected outage window before work begins.' },
      { question: 'Can replacement improve pressure?', answer: 'Yes, especially when old, restricted, corroded, or undersized pipework is part of the problem.' }
    ]
  },
  {
    slug: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    shortTitle: 'Bathroom plumbing',
    cardTitle: 'Bathroom Plumbing Services',
    price: '$220',
    description: 'Bathroom repairs for toilets, tubs, showers, drains, and supply lines.',
    summary: 'Bathroom plumbing support for slow drains, fixture faults, running toilets, leaks, and pressure issues.',
    heroLabel: 'Bathroom plumbing',
    heroHeadline: 'Bathroom plumbing that feels calm again.',
    heroImage: '/images/projects/plumber-bathroom-portrait.webp',
    heroImagePosition: '50% center',
    homepageImage: '/images/services/service-thumb-bathroom.png',
    homepageImageAlt: 'Plumbify plumber inspecting a new shower head',
    trust: ['Fixture-aware repairs', 'Drain and supply checks', 'Clean protected workspace'],
    storyTitle: 'Bathrooms need repairs that respect finishes and daily routines.',
    storyLead: 'We diagnose the fixture, drain, supply, and sealing behavior together so the repair protects tile, cabinetry, flooring, and the way the room is used every day.',
    storyStats: [
      { value: '4 areas', label: 'toilet tub shower sink' },
      { value: '1 visit', label: 'common repairs' },
      { value: '0 guess', label: 'tested before close' }
    ],
    process: [
      { title: 'Fixture check', description: 'We inspect visible fixtures, supply lines, drains, and seals.' },
      { title: 'Cause tracing', description: 'Symptoms are separated between drain, supply, valve, or fixture faults.' },
      { title: 'Focused repair', description: 'The right component is repaired while protecting nearby finishes.' },
      { title: 'Use testing', description: 'We test realistic use cycles to confirm the bathroom is ready.' }
    ],
    benefits: [
      { title: 'Protected finishes', description: 'Work is planned around tile, cabinetry, and surfaces that need care.' },
      { title: 'Less repeat trouble', description: 'Drain and supply symptoms are checked together to avoid partial fixes.' },
      { title: 'Daily-use ready', description: 'Repairs are tested around the way the bathroom is actually used.' }
    ],
    gallery: [
      { src: '/images/projects/audit-bathroom-check.png', alt: 'Plumbify plumber in a bathroom', label: 'Bathroom check', position: '50% center' },
      { src: '/images/projects/drain-gallery-bathroom.png', alt: 'Bathtub fixture repair', label: 'Tub fixture', position: '50% center' },
      { src: '/images/projects/kitchen-gallery-pressure.png', alt: 'Bathroom supply repair', label: 'Supply check', position: '50% center' }
    ],
    faqs: [
      { question: 'Can you fix a running toilet?', answer: 'Yes. We inspect the fill valve, flush valve, supply, and seal behavior to stop waste and noise.' },
      { question: 'Do you repair shower pressure problems?', answer: 'Yes. We check valves, supply behavior, aerators, cartridge issues, and broader pressure signs.' },
      { question: 'Can you work around tile?', answer: 'We always try to use existing access first and explain any surface risks before work begins.' }
    ]
  },
  {
    slug: 'water-audit-diagnostics',
    title: 'Water Audit and Diagnostics',
    shortTitle: 'Water diagnostics',
    cardTitle: 'Water Audit & Diagnostics',
    price: '$275',
    description: 'Whole-home water checks for pressure, usage, hidden waste, and efficiency.',
    summary: 'A room-by-room diagnostic service that finds hidden water waste, pressure issues, and upgrade priorities.',
    heroLabel: 'Water diagnostics',
    heroHeadline: 'Know exactly how your water system is behaving.',
    heroImage: '/images/projects/audit-hero-banner.png',
    heroImagePosition: '50% 30%',
    homepageImage: '/images/services/service-thumb-audit.png',
    homepageImageAlt: 'Plumbify plumber using a digital pressure testing device',
    trust: ['Pressure monitored', 'Usage reviewed', 'Upgrade roadmap'],
    storyTitle: 'The audit turns vague water problems into a clear action plan.',
    storyLead: 'We test fixture performance, pressure behavior, visible connections, and usage clues to identify silent losses and prioritize repairs or upgrades.',
    storyStats: [
      { value: '22%', label: 'possible usage reduction' },
      { value: '6 zones', label: 'room-by-room check' },
      { value: '1 plan', label: 'prioritized next steps' }
    ],
    process: [
      { title: 'Baseline review', description: 'We review water usage concerns and visible pressure symptoms.' },
      { title: 'Fixture testing', description: 'Key fixtures are checked for flow, leaks, and efficiency issues.' },
      { title: 'Pressure monitoring', description: 'Pressure behavior is measured to spot hidden losses or restrictions.' },
      { title: 'Action roadmap', description: 'You get prioritized recommendations based on impact and urgency.' }
    ],
    benefits: [
      { title: 'Better decisions', description: 'You know what matters now, what can wait, and what will save water.' },
      { title: 'Hidden waste found', description: 'Silent leaks and inefficient fixtures are easier to catch with a full review.' },
      { title: 'Prioritized spending', description: 'Repairs and upgrades are ordered by real system impact.' }
    ],
    gallery: [
      { src: '/images/projects/audit-thumbnail-landscape.png', alt: 'Plumbify water audit specialist', label: 'Water audit', position: '50% 30%' },
      { src: '/images/projects/audit-meter-reading.png', alt: 'Water meter reading', label: 'Meter reading', position: '50% 35%' },
      { src: '/images/projects/audit-report-consultation.png', alt: 'Water report consultation', label: 'Report review', position: '50% 30%' }
    ],
    faqs: [
      { question: 'Is this only for leaks?', answer: 'No. It covers leaks, pressure issues, water waste, fixture performance, and practical upgrade planning.' },
      { question: 'Will I get recommendations?', answer: 'Yes. The goal is a clear prioritized roadmap, not just a list of observations.' },
      { question: 'Can this lower my water bill?', answer: 'Often it can, especially when silent losses or inefficient fixtures are found.' }
    ]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
