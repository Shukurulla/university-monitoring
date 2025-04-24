import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  PieChart,
  Settings,
  User,
  Users,
} from "lucide-react";
import TeacherSubstitutionModule from "./teacher-substitution-component";
import ScheduleSettings from "./schedule-settings-component";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Имитация данных для демонстрации
  const mockData = {
    teachers: [
      { id: 1, name: "Рахимов А.К.", department: "Информатика", workload: 820 },
      { id: 2, name: "Исмаилов С.Т.", department: "Математика", workload: 760 },
      { id: 3, name: "Каримова Н.Д.", department: "Физика", workload: 640 },
    ],
    scheduleChanges: [
      {
        id: 1,
        teacher: "Рахимов А.К.",
        date: "25.04.2025",
        status: "Ожидает подтверждения",
      },
      {
        id: 2,
        teacher: "Каримова Н.Д.",
        date: "27.04.2025",
        status: "Подтверждено",
      },
    ],
    reportTypes: [
      "Нагрузка преподавателей",
      "Использование аудиторий",
      "Замены преподавателей",
      "Расчет заработной платы",
    ],
  };

  // Компонент боковой панели
  const Sidebar = () => (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 p-4">
      <div className="text-xl font-bold mb-8 text-center">
        Система мониторинга учебного процесса
      </div>

      <div className="space-y-2">
        <SidebarItem
          icon={<PieChart size={20} />}
          label="Дашборд"
          id="dashboard"
        />
        <SidebarItem
          icon={<Calendar size={20} />}
          label="Расписание"
          id="schedule"
        />
        <SidebarItem
          icon={<Users size={20} />}
          label="Преподаватели"
          id="teachers"
        />
        <SidebarItem
          icon={<Clock size={20} />}
          label="Замены"
          id="substitutions"
        />
        <SidebarItem
          icon={<FileText size={20} />}
          label="Отчеты"
          id="reports"
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Настройки"
          id="settings"
        />
      </div>
    </div>
  );

  // Элемент меню
  const SidebarItem = ({ icon, label, id }) => (
    <div
      className={`flex items-center p-3 rounded-lg cursor-pointer ${
        activeTab === id ? "bg-blue-600" : "hover:bg-gray-700"
      }`}
      onClick={() => setActiveTab(id)}
    >
      <div className="mr-3">{icon}</div>
      <div>{label}</div>
    </div>
  );

  // Содержимое дашборда
  const Dashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Обзор системы</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Преподавателей" value="124" color="bg-blue-500" />
        <StatCard title="Аудиторий" value="48" color="bg-green-500" />
        <StatCard title="Замен на сегодня" value="3" color="bg-orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Топ преподавателей по нагрузке">
          {mockData.teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex justify-between items-center p-3 border-b"
            >
              <div className="flex items-center">
                <User size={18} className="mr-2 text-gray-500" />
                <span>{teacher.name}</span>
                <span className="text-sm text-gray-500 ml-2">
                  ({teacher.department})
                </span>
              </div>
              <div className="font-bold">{teacher.workload} ч.</div>
            </div>
          ))}
        </DashboardCard>

        <DashboardCard title="Недавние запросы на замену">
          {mockData.scheduleChanges.map((change) => (
            <div key={change.id} className="flex justify-between p-3 border-b">
              <div>
                <div className="font-medium">{change.teacher}</div>
                <div className="text-sm text-gray-500">{change.date}</div>
              </div>
              <div
                className={`text-sm ${
                  change.status === "Подтверждено"
                    ? "text-green-500"
                    : "text-orange-500"
                }`}
              >
                {change.status}
              </div>
            </div>
          ))}
        </DashboardCard>
      </div>
    </div>
  );

  // Карточка статистики
  const StatCard = ({ title, value, color }) => (
    <div className="bg-white rounded-lg shadow p-4">
      <div
        className={`${color} text-white rounded-full w-12 h-12 flex items-center justify-center mb-3`}
      >
        <PieChart size={20} />
      </div>
      <div className="text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );

  // Карточка для дашборда
  const DashboardCard = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b font-medium">{title}</div>
      <div className="divide-y">{children}</div>
    </div>
  );

  // Компонент расписания
  const Schedule = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Расписание занятий</h2>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Сегодня
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded">Неделя</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Месяц</button>
          </div>
          <div className="flex items-center">
            <button className="p-2">
              <ChevronDown size={20} />
            </button>
            <span className="font-medium">24 апреля 2025</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Время</th>
                <th className="p-3 text-left">Группа</th>
                <th className="p-3 text-left">Предмет</th>
                <th className="p-3 text-left">Преподаватель</th>
                <th className="p-3 text-left">Аудитория</th>
                <th className="p-3 text-left">Статус</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">8:30 - 9:50</td>
                <td className="p-3">Информ-302</td>
                <td className="p-3">Программирование</td>
                <td className="p-3">Рахимов А.К.</td>
                <td className="p-3">214</td>
                <td className="p-3 text-green-500">Активно</td>
              </tr>
              <tr className="border-t bg-yellow-50">
                <td className="p-3">10:00 - 11:20</td>
                <td className="p-3">Мат-205</td>
                <td className="p-3">Высшая математика</td>
                <td className="p-3">
                  Исмаилов С.Т.{" "}
                  <span className="text-orange-500 text-sm">(Замена)</span>
                </td>
                <td className="p-3">105</td>
                <td className="p-3 text-orange-500">Замена</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">11:30 - 12:50</td>
                <td className="p-3">Физ-401</td>
                <td className="p-3">Физика</td>
                <td className="p-3">Каримова Н.Д.</td>
                <td className="p-3">309</td>
                <td className="p-3 text-blue-500">Ожидается</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Компонент для подачи запроса на замену
  const Substitutions = () => (
    <TeacherSubstitutionModule />
    // <div className="space-y-6">
    //   <h2 className="text-2xl font-bold mb-4">Система замен преподавателей</h2>

    //   <div className="bg-white rounded-lg shadow p-6">
    //     <h3 className="text-lg font-medium mb-4">Подать заявку на замену</h3>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    //       <div>
    //         <label className="block text-sm text-gray-600 mb-1">
    //           Дата отсутствия
    //         </label>
    //         <input type="date" className="w-full p-2 border rounded" />
    //       </div>
    //       <div>
    //         <label className="block text-sm text-gray-600 mb-1">Причина</label>
    //         <select className="w-full p-2 border rounded">
    //           <option>Болезнь</option>
    //           <option>Командировка</option>
    //           <option>Личные обстоятельства</option>
    //           <option>Другое</option>
    //         </select>
    //       </div>
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-sm text-gray-600 mb-1">
    //         Комментарий
    //       </label>
    //       <textarea className="w-full p-2 border rounded" rows="3"></textarea>
    //     </div>

    //     <div className="border-t pt-4">
    //       <h4 className="font-medium mb-2">Дисциплины, требующие замены:</h4>

    //       <div className="bg-gray-50 p-3 rounded mb-3">
    //         <div className="flex justify-between">
    //           <div>
    //             <div className="font-medium">Программирование</div>
    //             <div className="text-sm text-gray-500">
    //               10:00 - 11:20, Группа Информ-302, Ауд. 214
    //             </div>
    //           </div>
    //           <div>
    //             <select className="p-1 border rounded text-sm">
    //               <option>Выбрать заместителя</option>
    //               <option>Исмаилов С.Т.</option>
    //               <option>Каримова Н.Д.</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-gray-50 p-3 rounded">
    //         <div className="flex justify-between">
    //           <div>
    //             <div className="font-medium">Базы данных</div>
    //             <div className="text-sm text-gray-500">
    //               12:00 - 13:20, Группа Информ-302, Ауд. 315
    //             </div>
    //           </div>
    //           <div>
    //             <select className="p-1 border rounded text-sm">
    //               <option>Выбрать заместителя</option>
    //               <option>Исмаилов С.Т.</option>
    //               <option>Каримова Н.Д.</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-6">
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded">
    //         Отправить заявку
    //       </button>
    //     </div>
    //   </div>

    //   <div className="bg-white rounded-lg shadow">
    //     <div className="p-4 border-b font-medium">Статус ваших заявок</div>
    //     <div className="divide-y">
    //       {mockData.scheduleChanges.map((change) => (
    //         <div key={change.id} className="flex justify-between p-4">
    //           <div>
    //             <div className="font-medium">{change.date}</div>
    //             <div className="text-sm text-gray-500">
    //               Причина: Командировка
    //             </div>
    //           </div>
    //           <div
    //             className={`${
    //               change.status === "Подтверждено"
    //                 ? "text-green-500"
    //                 : "text-orange-500"
    //             }`}
    //           >
    //             {change.status}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );

  // Компонент формирования отчетов
  const Reports = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Отчеты</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockData.reportTypes.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-500 rounded-full p-3 mr-3">
                <FileText size={20} />
              </div>
              <div>
                <div className="font-medium">{report}</div>
                <div className="text-sm text-gray-500">Формат: PDF, Excel</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end text-blue-500 text-sm">
              Сформировать отчет
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Основной контент
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "schedule":
        return <Schedule />;
      case "substitutions":
        return <TeacherSubstitutionModule />;
      case "reports":
        return <Reports />;
      case "settings":
        return <ScheduleSettings />;
      default:
        return (
          <div className="text-center text-gray-500 mt-12">
            Выберите раздел для просмотра
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-6">{renderContent()}</div>
    </div>
  );
};

export default MainLayout;
