import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';

type ServiceFabProps = {
  closeIcon: string;
};

/** Distance from viewport edges in the normal (sticky) position */
const STICKY_RIGHT = 28; // px
const STICKY_BOTTOM = 28; // px

// --- Icons ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="fab-select-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// --- Form Components ---
function FloatingInput({ id, name, label, type, icon }: { id: string, name: string, label: string, type: string, icon: React.ReactNode }) {
  const [value, setValue] = useState('');
  
  return (
    <div className={`fab-field ${value ? 'has-value' : ''}`}>
      <div className="fab-field__icon">
        {icon}
      </div>
      <div className="fab-field__content">
        <input 
          className="fab-field__input"
          id={id} 
          name={name} 
          type={type} 
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label className="fab-field__label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

function FloatingSelect({ id, name, label, icon, options }: { id: string, name: string, label: string, icon: React.ReactNode, options: {value: string, label: string}[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`fab-field ${isOpen ? 'is-open' : ''} ${value ? 'has-value' : ''}`}>
      <div className="fab-field__icon">
        {icon}
      </div>
      <div className="fab-field__content">
        <button 
          type="button"
          className="fab-select-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLabel}
        </button>
        <label className="fab-field__label" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {label}
        </label>
        
        {/* Hidden input to actually submit the value with the form */}
        <input type="hidden" id={id} name={name} value={value} />
        
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fab-select-dropdown"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className="fab-select-option"
                  onClick={() => {
                    setValue(opt.value);
                    setSelectedLabel(opt.label);
                    setIsOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <ChevronIcon />
      </div>
    </div>
  );
}

/**
 * How far LEFT to shift the FAB when the hero is fully visible,
 * expressed as a fraction of the viewport width.
 * 0.025 = 2.5vw, which pushes the panel slightly left.
 */
const HERO_SHIFT = 0.025;

export default function ServiceFab({ closeIcon }: ServiceFabProps) {
  // Default to collapsed for all pages/reloads
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const reduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const prevAboutTop = useRef(99999);
  const prevProgress = useRef(1);

  // Track window scroll activity to collapse/reveal label after idle
  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsCollapsed(false);
      }, 2500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Track window size for mobile check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize state based on current page and scroll position
  useEffect(() => {
    const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
    if (isHome && window.innerWidth > 720) {
      const about = document.querySelector('.about');
      if (about) {
        const rect = about.getBoundingClientRect();
        // If we are above the center of the about section, start open
        if (rect.top > window.innerHeight / 2) {
          setIsOpen(true);
        }
      } else {
        // Fallback if no about section
        if (window.scrollY < 100) {
          setIsOpen(true);
        }
      }
    }
  }, []);

  // Scroll-driven horizontal slide + auto-collapse / auto-reopen
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const wrapper = wrapperRef.current;
    if (!wrapper || !hero) return; // no hero on this page → stays at default

    let raf = 0;

    const update = () => {
      raf = 0;

      // Do NOT run any auto-expand/collapse/position shifts on mobile viewports
      if (window.innerWidth <= 720) {
        wrapper.style.right = '';
        return;
      }

      const rect = hero.getBoundingClientRect();
      // 0 = hero fully in view, 1 = hero fully scrolled away
      const progress = Math.min(1, Math.max(0, 1 - rect.bottom / rect.height));
      
      // Shift LEFT when in hero (add to right → pushes toward left edge)
      // ONLY apply this shift if the panel is currently OPEN. 
      // If it's closed, we want the button to stay at its default sticky corner.
      const extraShift = isOpen ? (1 - progress) * window.innerWidth * HERO_SHIFT : 0;
      wrapper.style.right = `${STICKY_RIGHT + extraShift}px`;

      // Auto-reopen when we scroll back up into the hero section (progress goes < 0.9)
      if (prevProgress.current >= 0.9 && progress < 0.9) {
        setIsOpen(true);
      }
      prevProgress.current = progress;

      // Auto-collapse when the about section reaches the center of the viewport
      const about = document.querySelector('.about');
      if (about) {
        const aboutRect = about.getBoundingClientRect();
        const center = window.innerHeight / 2;
        // Collapse if we cross the center moving downwards
        if (prevAboutTop.current > center && aboutRect.top <= center) {
          setIsOpen(false);
        }
        prevAboutTop.current = aboutRect.top;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className={`service-fab ${isOpen ? 'is-open' : ''}`}>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <>
            {isMobile && (
              <motion.div
                key="backdrop"
                className="service-fab__backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
            )}
            <motion.aside
              key="panel"
              className="service-fab__panel"
              aria-label="Request a Service"
              drag={isMobile ? 'y' : false}
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.8 }}
              onDragEnd={(event, info) => {
                if (isMobile && (info.offset.y > 100 || info.velocity.y > 400)) {
                  setIsOpen(false);
                }
              }}
              initial={isMobile ? { y: '100%', opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92, y: 12 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={isMobile ? { y: '100%', opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9, y: 8 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : isMobile
                  ? { type: 'spring', damping: 25, stiffness: 220 }
                  : { duration: 0.32, ease: [0.16, 1, 0.3, 1] }
              }
            >
              {isMobile && <div className="service-fab__drag-handle" />}

              {/* Close button — absolute top-right corner (original design) */}
              <button
                className="service-fab__close"
                aria-label="Close request form"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <img src={closeIcon} alt="" width={24} height={24} />
              </button>

              <div className="service-fab__head">
                <h2 className="service-fab__title">Request a Service</h2>
              </div>

              <form id="service-fab-form" className="service-fab__fields">
                <FloatingInput 
                  id="fab-name" 
                  name="name" 
                  label="Your name" 
                  type="text"
                  icon={<UserIcon />}
                />
                <FloatingInput 
                  id="fab-email" 
                  name="email" 
                  label="Email" 
                  type="email"
                  icon={<MailIcon />}
                />
                <FloatingInput 
                  id="fab-phone" 
                  name="phone" 
                  label="Phone number" 
                  type="tel"
                  icon={<PhoneIcon />}
                />
                <FloatingSelect 
                  id="fab-service" 
                  name="service" 
                  label="Choose a service"
                  icon={<WrenchIcon />}
                  options={[
                    { value: 'repairs', label: 'Plumbing Repairs' },
                    { value: 'installations', label: 'Plumbing Installations' },
                    { value: 'heater', label: 'Water Heater Services' },
                    { value: 'drain', label: 'Drain Cleaning' },
                    { value: 'leak', label: 'Leak Detection' },
                  ]}
                />
              </form>

              <Button
                className="service-fab__submit"
                variant="primary"
                form="service-fab-form"
                type="submit"
              >
                Request Services
              </Button>
            </motion.aside>
          </>
        ) : (
          <motion.button
            key="trigger"
            className={`service-fab__trigger ${isCollapsed ? 'is-collapsed' : ''}`}
            aria-label="Open request a service form"
            onClick={() => setIsOpen(true)}
            type="button"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.26, ease: [0.16, 1, 0.3, 1] }
            }
          >
            <span className="service-fab__trigger-icon-wrap" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </span>
            <span className="service-fab__trigger-text-wrap">
              Request a Service
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
