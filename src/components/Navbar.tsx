import { useState, useRef, useEffect } from "react";
import logo from "@/assets/gematex.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface SubItem {
  label: string;
  id: string;
}

interface MenuItem {
  label: string;
  subs: SubItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Remeras",
    subs: [
      { label: "Basica", id: "remeras-basica" },
      { label: "Oversize", id: "remeras-oversize" },
      { label: "Escote en V", id: "remeras-escote-en-v" },
    ],
  },
  {
    label: "Buzos",
    subs: [
      { label: "Canguro", id: "buzos-canguro" },
      { label: "Clasico", id: "buzos-clasico" },
      { label: "1/2 cierre polar", id: "buzos-medio-cierre-polar" },
    ],
  },
  {
    label: "Chombas",
    subs: [
      { label: "Pique", id: "chombas-pique" },
    ],
  },
  {
    label: "Chalecos",
    subs: [{ label: "Polar", id: "chalecos-polar" }],
  },
  {
    label: "Camperas",
    subs: [{ label: "Polar", id: "camperas-polar" }],
  },
  {
    label: "Gorras",
    subs: [{ label: "Trucker", id: "gorras-trucker" }],
  },
  {
    label: "Tazas",
    subs: [{ label: "Ceramica AAA", id: "tazas-ceramica-aaa" }],
  },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setOpenMenu(null);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-background h-20 px-6 lg:px-12 flex justify-between items-center"
      style={{
        boxShadow:
          "0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 3px 1px rgba(0,0,0,0.02)",
      }}
    >
      {/* Logo */}
      <a href="#" className="flex-shrink-0">
        <img src={logo} alt="GemaTex" className="h-10 w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-1">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleEnter(item.label)}
            onMouseLeave={handleLeave}
          >
            <button className="px-4 py-2 text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:text-primary">
              {item.label}
            </button>

            <AnimatePresence>
              {openMenu === item.label && item.subs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={spring}
                  className="absolute top-full left-0 mt-1 min-w-[200px] bg-background py-2"
                  style={{
                    boxShadow:
                      "0 4px 20px -4px rgba(0,0,0,0.12), 0 2px 8px -2px rgba(0,0,0,0.08)",
                  }}
                >
                  {item.subs.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => scrollTo(sub.id)}
                      className="block w-full text-left px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary hover:bg-muted"
                    >
                      {sub.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={spring}
            className="fixed inset-0 top-20 bg-background z-40 overflow-y-auto px-6 py-8"
          >
            {menuItems.map((item) => (
              <div key={item.label} className="mb-6">
                <p className="text-sm font-bold tracking-widest uppercase mb-2">
                  {item.label}
                </p>
                {item.subs.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => scrollTo(sub.id)}
                    className="block w-full text-left py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {sub.label}
                  </button>
                ))}
                {item.subs.length === 0 && (
                  <p className="pl-4 text-sm text-muted-foreground">—</p>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
