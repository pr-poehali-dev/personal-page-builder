import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Главная", id: "hero" },
    { label: "О себе", id: "about" },
    { label: "Навыки", id: "skills" },
    { label: "Проекты", id: "projects" },
    { label: "Связаться", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 group"
          >
            <Icon
              name="Server"
              size={28}
              className={`transition-colors ${
                isScrolled ? "text-purple-600" : "text-white"
              }`}
            />
            <span
              className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              Roma.dev
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-purple-500 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => scrollToSection("contact")}
            >
              Связаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon
              name={isMobileMenuOpen ? "X" : "Menu"}
              size={24}
              className={isScrolled ? "text-slate-800" : "text-white"}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-slate-700 hover:text-purple-600 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="w-full mt-3 bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection("contact")}
            >
              Связаться
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
