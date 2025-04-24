import React, { useState } from "react";
import {
  Calendar,
  Download,
  Filter,
  Plus,
  Search,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

// Базовая структура компонента управления расписанием
const ScheduleManager = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  // Мокап данных будет в отдельном файле
  const mockData = {
    days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    groups: [
      "Все группы",
      "Информ-101",
      "Информ-102",
      "Мат-201",
      "Физ-301",
      "Ин.яз-401",
    ],
    teachers: [
      "Все преподаватели",
      "Рахимов А.К.",
      "Исмаилов С.Т.",
      "Каримова Н.Д.",
    ],
  };

  // Подключение компонентов будет происходить через импорты
  // Здесь будут только заглушки
  const ScheduleViewer = () => (
    <div className="p-4 text-center text-gray-500">
      Компонент просмотра расписания
    </div>
  );

  const ClassroomManager = () => (
    <div className="p-4 text-center text-gray-500">
      Компонент управления аудиториями
    </div>
  );

  const ScheduleSettings = () => (
    <div className="p-4 text-center text-gray-500">
      Компонент настроек расписания
    </div>
  );

  const ScheduleGenerator = () => (
    <div className="p-4 text-center text-gray-500">
      Компонент генерации расписания
    </div>
  );

  // Выбор активной вкладки
  const renderTabContent = () => {
    switch (activeTab) {
      case "schedule":
        return <ScheduleViewer />;
      case "classrooms":
        return <ClassroomManager />;
      case "settings":
        return <ScheduleSettings />;
      case "generator":
        return <ScheduleGenerator />;
      default:
        return <ScheduleViewer />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Управление расписанием</h2>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
            <Download size={18} />
            <span>Экспорт</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "schedule"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("schedule")}
            >
              Расписание
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "classrooms"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("classrooms")}
            >
              Аудитории
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "settings"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              Настройки
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "generator"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("generator")}
            >
              Генератор расписания
            </button>
          </div>
        </div>

        <div className="p-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default ScheduleManager;
