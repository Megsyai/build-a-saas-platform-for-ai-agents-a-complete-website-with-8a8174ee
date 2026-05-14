
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Bot, Menu, X, Globe, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/features", label: "المميزات" },
    { to: "/pricing", label: "الأسعار" },
    { to: "/about", label: "من نحن" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white text-black p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Bot size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">أورا <span className="text-white/60">ذكاء</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-white/50"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">دخول</button>
          <Link to="/pricing" className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-white/90 transition-all flex items-center gap-2 shadow-xl shadow-white/5">
            ابدأ الآن <Sparkles size={14} />
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
            <Link 
              to="/pricing" 
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-white text-black text-xl font-bold px-12 py-4 rounded-full"
            >
              ابدأ الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
