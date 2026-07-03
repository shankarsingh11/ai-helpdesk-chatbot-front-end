import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-900/70 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-2">
            <Bot className="h-6 w-6 text-white" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              AI Helpdesk
            </h2>

            <p className="text-xs text-slate-400">
              Smart Support
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Buttons */}

        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="ghost"
            className="text-white hover:bg-slate-800"
          >
            Login
          </Button>

          <Button
            className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white md:hidden"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-slate-800 bg-slate-900 md:hidden"
        >
          <div className="space-y-5 p-6">

            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block text-white"
              >
                {item.title}
              </Link>
            ))}

            <Button className="w-full">
              Login
            </Button>

            <Button
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500"
            >
              Get Started
            </Button>

          </div>
        </motion.div>
      )}
    </motion.header>
  );
}