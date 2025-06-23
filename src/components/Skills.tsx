import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Серверные ядра",
      icon: "Server",
      skills: [
        { name: "Spigot", level: 95 },
        { name: "Paper", level: 90 },
        { name: "Fabric", level: 85 },
        { name: "Bukkit", level: 90 },
      ],
    },
    {
      title: "Языки программирования",
      icon: "Code",
      skills: [
        { name: "Java", level: 95 },
        { name: "Kotlin", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 70 },
      ],
    },
    {
      title: "Инструменты и технологии",
      icon: "Wrench",
      skills: [
        { name: "Maven", level: 90 },
        { name: "Gradle", level: 85 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Навыки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Технологии и инструменты, которыми я владею для создания
            качественных решений
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={category.icon}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: "Database", name: "MySQL", desc: "База данных" },
            { icon: "Cloud", name: "Redis", desc: "Кэширование" },
            { icon: "Shield", name: "ProtocolLib", desc: "Пакеты" },
            { icon: "Zap", name: "PlaceholderAPI", desc: "Интеграция" },
          ].map((tool, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white p-6 rounded-lg shadow-md group-hover:shadow-lg">
                <Icon
                  name={tool.icon}
                  size={40}
                  className="mx-auto mb-3 text-purple-500"
                />
                <h3 className="font-semibold text-slate-800 mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
