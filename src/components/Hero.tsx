import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-300 rounded-lg rotate-12"></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-16 border border-purple-500 rounded-lg -rotate-12"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <Icon
            name="Server"
            size={64}
            className="mx-auto mb-6 text-purple-400"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Roma Shaufler
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-6 text-purple-200">
          Server Developer
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Создаю плагины и моды для Minecraft серверов. Специализируюсь на
          Spigot, Paper и Fabric разработке.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection("projects")}
          >
            Мои проекты
            <Icon name="ArrowRight" size={20} />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-3 text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Связаться
            <Icon name="MessageCircle" size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-300" />
      </div>
    </section>
  );
};

export default Hero;
