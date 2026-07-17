export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'prevent-frozen-pipes-winter',
    title: 'How to Prevent Frozen Pipes in Winter',
    category: 'Plumbing Tips',
    date: 'January 10, 2026',
    readTime: '5 min read',
    excerpt: 'Learn how to prevent frozen pipes during the cold winter months and avoid costly emergency repairs with these practical steps.',
    image: '/images/blog/blog-frozen-pipes.png',
    author: {
      name: 'John Miller',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
      role: 'Master Plumber'
    },
    body: `
      <p>As winter temperatures drop, the risk of frozen pipes increases dramatically. When water freezes inside a pipe, it expands, causing pressure to build up between the ice block and the closed faucet. Eventually, this pressure can cause the pipe to burst, leading to thousands of dollars in water damage.</p>
      
      <h2>Why Do Pipes Freeze?</h2>
      <p>Pipes are most susceptible to freezing when they are exposed to severe cold. This typically occurs in unheated areas such as basements, crawl spaces, attics, garages, or along exterior walls with poor insulation.</p>
      
      <h2>Key Steps to Prevent Frozen Pipes</h2>
      <ul>
        <li><strong>Insulate exposed pipes:</strong> Wrap pipes in unheated areas with foam pipe insulation or heat tape. This is a cost-effective way to protect them from freezing temperatures.</li>
        <li><strong>Let faucets drip:</strong> During extreme cold snaps, allow a trickle of water to run from faucets connected to exposed pipes. Moving water is much less likely to freeze.</li>
        <li><strong>Keep thermostat consistent:</strong> Keep your home temperature stable day and night. Avoid dropping the thermostat at night, as this is when temperatures are lowest.</li>
        <li><strong>Keep interior doors open:</strong> Open cabinet doors in kitchens and bathrooms to allow warm air from the room to circulate around plumbing under sinks.</li>
        <li><strong>Seal exterior drafts:</strong> Block cold air leaks around windows, vents, and sill plates near water supply lines.</li>
      </ul>

      <h2>What to Do If a Pipe Freezes</h2>
      <p>If you turn on a faucet and only a trickle of water comes out, a pipe may be frozen. Keep the faucet open as you work to thaw it, so water can flow as ice melts. You can use a hair dryer or space heater to gently warm the frozen section, but never use an open flame, which poses a fire hazard and can damage the pipe.</p>
      <p>If a pipe has already burst, immediately turn off the main water shut-off valve to minimize flooding and contact our team for immediate <a href="/services/pipe-replacement">pipe replacement services</a> or scheduling urgent <a href="/services/leak-detection-repair">leak detection and repairs</a> before severe structural damage occurs.</p>
    `
  },
  {
    slug: 'tankless-water-heater-benefits',
    title: 'The Benefits of a Tankless Water Heater',
    category: 'Product Spotlight',
    date: 'February 5, 2026',
    readTime: '4 min read',
    excerpt: 'Discover the advantages of upgrading to a tankless water heater, including continuous hot water and lower energy bills.',
    image: '/images/blog/blog-tankless-heater.png',
    author: {
      name: 'Sarah Jennings',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
      role: 'Energy Solutions Specialist'
    },
    body: `
      <p>Traditional water heaters store and heat water in a large tank, constantly consuming energy to maintain water temperature even when it is not in use. Upgrading to a tankless system heats water directly only when you turn on a hot water tap.</p>
      
      <h2>Top Benefits of Tankless Systems</h2>
      <ol>
        <li><strong>Continuous Hot Water:</strong> Since tankless systems heat water on demand, you never have to worry about running out of hot water, even if multiple family members shower back-to-back.</li>
        <li><strong>Energy Efficiency:</strong> By eliminating standby energy loss, tankless systems can be up to 24% to 34% more energy-efficient than conventional storage tank water heaters.</li>
        <li><strong>Space-Saving Design:</strong> Tankless units are compact and wall-mounted, freeing up valuable floor space in basements, closets, or utility rooms.</li>
        <li><strong>Longer Lifespan:</strong> Most tankless units last 20 years or more with proper maintenance, compared to just 10 to 15 years for traditional tank heaters.</li>
        <li><strong>Reduced Risk of Water Damage:</strong> Without a giant tank of water waiting to rust and leak, the risk of a catastrophic basement flood is practically eliminated.</li>
      </ol>

      <h2>Is a Tankless Water Heater Right for You?</h2>
      <p>While the initial cost of a tankless water heater is higher than a traditional unit due to equipment costs and potential installation adjustments (such as upgrading gas lines or venting), the long-term energy savings and convenience make it a highly rewarding upgrade for many homeowners. If you are experiencing issues with your current setup or want to explore an upgrade, explore our <a href="/services/hot-water-heater-fixing">water heater services and repairs</a> or learn about new <a href="/services/fixture-installation">fixture installations</a>.</p>
    `
  },
  {
    slug: 'signs-you-need-water-softener',
    title: '5 Signs You Need a Water Softener',
    category: 'Maintenance Tips',
    date: 'March 1, 2026',
    readTime: '4 min read',
    excerpt: 'Are you experiencing dry skin, water spots, or mineral buildup? Learn how to identify the signs that your home has hard water.',
    image: '/images/blog/blog-water-softener.png',
    author: {
      name: 'David Lee',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
      role: 'Water Quality Tech'
    },
    body: `
      <p>Hard water is water that contains high levels of dissolved minerals, primarily calcium and magnesium. While it is not a health risk, hard water can wreak havoc on your home’s plumbing, appliances, and even your skin and hair.</p>
      
      <h2>Key Signs of Hard Water</h2>
      <ul>
        <li><strong>Mineral Buildup on Fixtures:</strong> If you see chalky white crust or scale forming on your faucets and showerheads, it is a clear sign of mineral accumulation that can block water flow.</li>
        <li><strong>Dry, Itchy Skin and Dull Hair:</strong> Hard water minerals prevent soap from dissolving fully, leaving a film on your skin and hair that strips away natural moisture.</li>
        <li><strong>Stiff or Dingy Laundry:</strong> Clothes washed in hard water often feel rough, look faded, and wear out faster because of the mineral abrasive action.</li>
        <li><strong>Spots on Dishes and Glassware:</strong> Cloudiness or white spots on clean glasses and silverware are mineral deposits left behind as hard water evaporates.</li>
        <li><strong>Frequent Appliance Problems:</strong> Mineral scale builds up inside dishwashers, washing machines, and water heaters, reducing their efficiency and shortening their lifespan.</li>
      </ul>

      <h2>The Solution: Water Softeners</h2>
      <p>A water softener works by exchanging hard minerals for sodium ions through a process called ion exchange. Installing a water softener protects your plumbing network, keeps your appliances running efficiently, and leaves your skin feeling softer and cleaner. To determine the scale of hard water in your house, book a comprehensive <a href="/services/water-audit-diagnostics">water audit and diagnostics consultation</a> with our specialists.</p>
    `
  },
  {
    slug: 'diy-vs-professional-plumbing',
    title: 'DIY vs. Professional Plumbing: When to Call the Experts',
    category: 'Homeowner Guide',
    date: 'April 15, 2026',
    readTime: '6 min read',
    excerpt: 'Understand which plumbing tasks are safe for a weekend DIY project and which ones require a licensed plumber to prevent costly errors.',
    image: '/images/blog/blog-diy-vs-pro.png',
    author: {
      name: 'John Miller',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
      role: 'Master Plumber'
    },
    body: `
      <p>Tackling home improvement projects can be rewarding and cost-effective, but plumbing is one area where a mistake can quickly lead to disastrous water damage. Knowing your limits is crucial for protecting your property.</p>
      
      <h2>Safe DIY Plumbing Projects</h2>
      <p>If you have some basic tools and patience, you can usually handle these tasks on your own:</p>
      <ul>
        <li>Replacing a showerhead or kitchen faucet</li>
        <li>Installing a new toilet seat or fixing a running toilet flush valve</li>
        <li>Unclogging a simple drain clog with a hand plunger or small sink snake</li>
        <li>Replacing worn washer seals on dripping faucets</li>
      </ul>
      
      <h2>Plumbing Jobs That Require a Professional</h2>
      <p>These complex tasks should always be left to a licensed professional:</p>
      <ul>
        <li><strong>Main line sewer blocks:</strong> Clearing these requires heavy machinery and specialized cameras to find tree root intrusions or broken pipes. We advise booking a professional <a href="/services/sewer-maintenance-solutions">sewer maintenance and cleaning solution</a>.</li>
        <li><strong>Water heater installation:</strong> Improper installation of gas or electrical lines and pressure relief valves poses major safety hazards.</li>
        <li><strong>Replacing concealed pipes:</strong> Modifying pipes behind drywall or beneath flooring requires code compliance, precise soldering, and leakage checks.</li>
        <li><strong>Sump pump replacements:</strong> Your home's flood defense needs to be sized and installed perfectly to ensure it works in emergency situations.</li>
      </ul>

      <h2>The Risk of DIY Mistakes</h2>
      <p>A simple cross-threaded pipe joint or using the wrong type of sealant can slow-drip behind a wall for months before you notice, causing rot and mold growth. When in doubt, checking our comprehensive <a href="/services">plumbing services guide</a> and hiring a professional saves time, protects your warranty, and keeps your home secure.</p>
    `
  },
  {
    slug: 'how-to-spot-hidden-leak',
    title: 'How to Spot a Hidden Water Leak in Your House',
    category: 'Maintenance Tips',
    date: 'May 12, 2026',
    readTime: '5 min read',
    excerpt: 'Water leaks aren’t always obvious. Learn the subtle warning signs of hidden leaks behind walls, under floors, or in the yard.',
    image: '/images/blog/blog-hidden-leak.png',
    author: {
      name: 'David Lee',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
      role: 'Water Quality Tech'
    },
    body: `
      <p>While a burst pipe creates an immediate emergency, slow, hidden leaks can cause far more structural damage over time because they go unnoticed for weeks or months. Spotting the signs early is key to protecting your home.</p>
      
      <h2>Warning Signs of a Concealed Leak</h2>
      <ul>
        <li><strong>Unexplained Increase in Water Bills:</strong> If your household water usage habits haven’t changed but your monthly bill is rising, water is likely escaping somewhere in the line.</li>
        <li><strong>Musty Odors:</strong> Water pooling behind walls or under flooring creates a damp environment, leading to mold and mildew that produces a distinct musty smell.</li>
        <li><strong>Wall and Ceiling Discoloration:</strong> Yellow, brown, or bubbling paint or drywall indicate that water is dripping from overhead pipes.</li>
        <li><strong>Warped or Soft Flooring:</strong> Buckling wood floorboards or spongy spots on linoleum are classic signs of subfloor pipe leaks.</li>
        <li><strong>The Water Meter Test:</strong> Turn off all water fixtures in your home and check your main water meter. Wait 2 hours without using any water, and check it again. If the dials have moved, you have a leak.</li>
      </ul>

      <h2>Locating and Resolving the Issue</h2>
      <p>Once you suspect a hidden leak, professional leak detection services can pinpoint the exact spot using acoustic listening devices and thermal cameras, avoiding unnecessary demolition of walls or floors. Learn more about how we handle these issues through our dedicated <a href="/services/leak-detection-repair">non-invasive leak detection and repair service</a>.</p>
    `
  },
  {
    slug: 'boiler-maintenance-guide',
    title: 'Boiler Maintenance Guide: Tips for Optimal Efficiency',
    category: 'Homeowner Guide',
    date: 'June 2, 2026',
    readTime: '5 min read',
    excerpt: 'Keep your heating system running efficiently and reliably with this seasonal guide to home boiler maintenance.',
    image: '/images/blog/blog-boiler-maintenance.png',
    author: {
      name: 'Sarah Jennings',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
      role: 'Energy Solutions Specialist'
    },
    body: `
      <p>A boiler is the heart of your home heating system. Regular maintenance ensures it operates safely, keeps your energy bills low, and prevents sudden breakdowns during the freezing winter months.</p>
      
      <h2>Essential Maintenance Tasks</h2>
      <ul>
        <li><strong>Check the boiler pressure:</strong> Look at the pressure gauge on the front of your boiler. It should typically be between 1.0 and 1.5 bar. If it is too low, you may need to top it up using the filling loop.</li>
        <li><strong>Bleed your radiators:</strong> If your radiators are cold at the top but warm at the bottom, there is air trapped inside them. Bleeding them releases this air, allowing hot water to circulate fully.</li>
        <li><strong>Clear vents and flues:</strong> Ensure that the external flue pipe and internal air vents are clear of obstructions, leaves, and debris to maintain safe ventilation.</li>
        <li><strong>Monitor for leaks:</strong> Visually inspect the pipework around your boiler for small drips or signs of corrosion, which can lead to low pressure and failure.</li>
      </ul>
      
      <h2>The Importance of an Annual Professional Service</h2>
      <p>While basic visual checks are great, a qualified professional should inspect your boiler once a year. A technician will clean internal components, check electrical connections, test safety controls, and perform combustion analysis to ensure gas is burning safely and efficiently. An annual service is also typically required to keep your manufacturer warranty valid. If you suspect any water heater or system failure, consult our <a href="/services/hot-water-heater-fixing">water heater repair division</a> for professional tuning.</p>
    `
  }
];
