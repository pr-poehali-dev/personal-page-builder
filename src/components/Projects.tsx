import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: "CustomEconomy",
      description:
        "Полноценная экономическая система с банками, магазинами и аукционами. Поддержка множественных валют и интеграция с популярными плагинами.",
      tech: ["Spigot", "MySQL", "PlaceholderAPI"],
      features: ["Банковская система", "Аукцион", "Магазины", "API интеграция"],
      status: "Активная разработка",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
      github: "#",
      download: "#",
    },
    {
      title: "ServerManager",
      description:
        "Мощный инструмент для управления сервером через веб-интерфейс. Мониторинг производительности, управление игроками и автоматизация задач.",
      tech: ["Paper", "JavaScript", "Docker"],
      features: ["Веб-панель", "Мониторинг", "Автобэкапы", "Статистика"],
      status: "Релиз",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      github: "#",
      download: "#",
    },
    {
      title: "CustomItems",
      description:
        "Система создания уникальных предметов с особыми свойствами. Редактор предметов, система крафтов и балансировка характеристик.",
      tech: ["Fabric", "Java", "NBT"],
      features: ["Редактор предметов", "Крафты", "Эффекты", "Баланс"],
      status: "Beta",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
      github: "#",
      download: "#",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Релиз":
        return "bg-green-100 text-green-800";
      case "Beta":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Избранные работы, которые демонстрируют мои навыки в серверной
            разработке
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-slate-800 mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">
                    Технологии:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">
                    Особенности:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <Icon name="Github" size={16} />
                    Код
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Icon name="Download" size={16} />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <Icon name="ExternalLink" size={20} />
            Все проекты на GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
