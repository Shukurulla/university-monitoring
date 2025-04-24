import { useState } from "react";
import { Download } from "lucide-react";

// Импортируем все созданные компоненты
// В реальном проекте здесь были бы настоящие импорты
const ScheduleViewer = () => {
  // Здесь будет содержимое из schedule-viewer-component
  return (
    <div className="p-8 bg-blue-50 rounded-lg text-center">
      <h3 className="text-xl font-medium">Просмотр расписания</h3>
      <p className="mt-2 text-gray-600">
        Компонент для просмотра и редактирования расписания занятий
      </p>
    </div>
  );
};

const ClassroomManager = () => {
  // Здесь будет содержимое из classroom-manager-component
  return (
    <div className="p-8 bg-green-50 rounded-lg text-center">
      <h3 className="text-xl font-medium">Управление аудиториями</h3>
      <p className="mt-2 text-gray-600">
        Компонент для управления аудиторным фондом
      </p>
    </div>
  );
};

const ScheduleSettings = () => {
  // Здесь будет содержимое из schedule-settings-component
  return (
    <div className="p-8 bg-yellow-50 rounded-lg text-center">
      <h3 className="text-xl font-medium">Настройки расписания</h3>
      <p className="mt-2 text-gray-600">
        Компонент для настройки параметров составления расписания
      </p>
    </div>
  );
};

const ScheduleGenerator = () => {
  // Здесь будет содержимое из schedule-generator-component
  return (
    <div className="p-8 bg-purple-50 rounded-lg text-center">
      <h3 className="text-xl font-medium">Генератор расписания</h3>
      <p className="mt-2 text-gray-600">
        Компонент для автоматической генерации расписания
      </p>
    </div>
  );
};

// Главный компонент для модуля расписания
const ScheduleModule = () => {
  const [activeTab, setActiveTab] = useState("schedule");

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

      {/* Сводная информация */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500 text-sm mb-1">Преподавателей</div>
          <div className="text-2xl font-bold">124</div>
          <div className="mt-2 text-xs text-gray-500">
            Активных в этом семестре
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500 text-sm mb-1">Групп</div>
          <div className="text-2xl font-bold">48</div>
          <div className="mt-2 text-xs text-gray-500">По всем факультетам</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500 text-sm mb-1">Аудиторий</div>
          <div className="text-2xl font-bold">56</div>
          <div className="mt-2 text-xs text-gray-500">По всем корпусам</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500 text-sm mb-1">Дисциплин</div>
          <div className="text-2xl font-bold">87</div>
          <div className="mt-2 text-xs text-gray-500">Текущий семестр</div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModule;
