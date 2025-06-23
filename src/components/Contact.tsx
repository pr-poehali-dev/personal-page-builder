import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: "GitHub", icon: "Github", url: "#", color: "hover:text-gray-800" },
    {
      name: "Discord",
      icon: "MessageSquare",
      url: "#",
      color: "hover:text-indigo-600",
    },
    { name: "Telegram", icon: "Send", url: "#", color: "hover:text-blue-500" },
    {
      name: "Email",
      icon: "Mail",
      url: "mailto:roma@example.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Связаться
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готов обсудить ваш проект или ответить на вопросы. Свяжитесь со мной
            удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <Icon
                  name="MessageCircle"
                  size={28}
                  className="mr-3 text-purple-600"
                />
                Написать сообщение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Разработка плагина / Консультация / Сотрудничество"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите ваш проект или задачу..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Быстрый контакт
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-purple-600" />
                  <span className="text-gray-700">Россия, UTC+3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-purple-600" />
                  <span className="text-gray-700">
                    Обычно отвечаю в течение 24 часов
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Coffee" size={20} className="text-purple-600" />
                  <span className="text-gray-700">
                    Открыт для новых проектов
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors ${social.color}`}
                    >
                      <Icon name={social.icon} size={20} />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Что я могу для вас сделать
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Code"
                      size={16}
                      className="text-green-500 mr-3"
                    />
                    Разработка плагинов под заказ
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Settings"
                      size={16}
                      className="text-green-500 mr-3"
                    />
                    Настройка серверов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Bug"
                      size={16}
                      className="text-green-500 mr-3"
                    />
                    Исправление багов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Users"
                      size={16}
                      className="text-green-500 mr-3"
                    />
                    Консультации по разработке
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
