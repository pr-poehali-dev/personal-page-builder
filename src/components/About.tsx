import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            О себе
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Превращаю идеи в функциональные решения для Minecraft серверов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Icon name="Code2" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Опыт разработки
                </h3>
                <p className="text-gray-600">
                  Более 3 лет создаю плагины и моды для Minecraft серверов.
                  Работал с проектами от небольших приватных серверов до крупных
                  сетей.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Icon name="Settings" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Подход к работе
                </h3>
                <p className="text-gray-600">
                  Фокусируюсь на производительности, стабильности и удобстве
                  использования. Каждый плагин тестируется на различных
                  конфигурациях серверов.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Icon name="Users" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Сообщество
                </h3>
                <p className="text-gray-600">
                  Активный участник Minecraft dev сообщества. Помогаю другим
                  разработчикам и делюсь знаниями в открытых проектах.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <Icon
                  name="Target"
                  size={28}
                  className="mr-3 text-purple-600"
                />
                Моя миссия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Создавать инновационные решения, которые улучшают игровой опыт и
                помогают администраторам серверов достигать своих целей. Каждый
                проект — это возможность сделать Minecraft мир лучше.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Плагинов создано</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">
                    Активных пользователей
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
