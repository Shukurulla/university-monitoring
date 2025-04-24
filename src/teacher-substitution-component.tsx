import { useState } from "react";
import {
  Clock,
  AlertCircle,
  CheckCircle,
  Search,
  ChevronDown,
} from "lucide-react";

const TeacherSubstitutionModule = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const [selectedStatus, setSelectedStatus] = useState("Все");

  // Имитация данных для демонстрации
  const mockData = {
    statuses: ["Все", "На рассмотрении", "Одобрено", "Отклонено"],
    requests: [
      {
        id: 1,
        teacher: "Рахимов А.К.",
        department: "Информатика",
        date: "25.04.2025",
        reason: "Командировка",
        status: "На рассмотрении",
        classes: 2,
      },
      {
        id: 2,
        teacher: "Каримова Н.Д.",
        department: "Физика",
        date: "27.04.2025",
        reason: "Болезнь",
        status: "Одобрено",
        classes: 3,
      },
      {
        id: 3,
        teacher: "Исмаилов С.Т.",
        department: "Математика",
        date: "26.04.2025",
        reason: "Личные обстоятельства",
        status: "Отклонено",
        classes: 1,
      },
      {
        id: 4,
        teacher: "Бекназаров К.Р.",
        department: "Информатика",
        date: "28.04.2025",
        reason: "Методический семинар",
        status: "На рассмотрении",
        classes: 2,
      },
      {
        id: 5,
        teacher: "Жумабаева Н.О.",
        department: "Иностранные языки",
        date: "30.04.2025",
        reason: "Конференция",
        status: "Одобрено",
        classes: 4,
      },
    ],
    substitutions: [
      {
        id: 1,
        originalTeacher: "Каримова Н.Д.",
        substitutionTeacher: "Алиев Р.М.",
        subject: "Физика",
        groups: "Физ-301, Физ-302",
        date: "27.04.2025",
        time: "10:00-11:20",
        classroom: "309",
        status: "Подтверждено",
      },
      {
        id: 2,
        originalTeacher: "Жумабаева Н.О.",
        substitutionTeacher: "Назарова Л.К.",
        subject: "Английский язык",
        groups: "Ин.яз-101",
        date: "30.04.2025",
        time: "12:00-13:20",
        classroom: "415",
        status: "Ожидает подтверждения",
      },
    ],
  };

  // Компонент для просмотра заявок на замену
  const SubstitutionRequests = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск по преподавателю..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>

          <div className="relative">
            <select
              className="pl-4 pr-10 py-2 border rounded-lg appearance-none"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {mockData.statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="relative">
            <input type="date" className="pl-4 pr-4 py-2 border rounded-lg" />
          </div>
          <button className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
            <span>Создать заявку</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full overflow-x-scroll">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Преподаватель
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Кафедра
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Дата
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Причина
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Занятия
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Статус
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockData.requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{request.teacher}</td>
                <td className="px-6 py-4 text-gray-600">
                  {request.department}
                </td>
                <td className="px-6 py-4">{request.date}</td>
                <td className="px-6 py-4">{request.reason}</td>
                <td className="px-6 py-4">{request.classes}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === "Одобрено"
                        ? "bg-green-100 text-green-700"
                        : request.status === "Отклонено"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 text-blue-500 hover:bg-blue-50 rounded text-sm">
                    Подробнее
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="text-gray-500">Показано 5 из 28 заявок</div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded">Назад</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">Далее</button>
        </div>
      </div>
    </div>
  );

  // Компонент для деталей заявки
  const RequestDetail = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center">
              <h3 className="text-xl font-bold">Заявка №1</h3>
              <span className="ml-3 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                На рассмотрении
              </span>
            </div>
            <div className="text-gray-500 mt-1">Создана: 23.04.2025, 14:30</div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Одобрить
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Отклонить
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-medium mb-3">Информация о преподавателе</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <div className="text-sm text-gray-500">ФИО</div>
                  <div className="font-medium">Рахимов Алишер Каримович</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Кафедра</div>
                  <div>Информатика</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Должность</div>
                  <div>Доцент</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Детали отсутствия</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <div className="text-sm text-gray-500">Дата</div>
                  <div className="font-medium">25.04.2025</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Причина</div>
                  <div>Командировка</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Комментарий</div>
                  <div>Участие в научной конференции в г. Ташкент</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Занятия, требующие замены</h4>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Дисциплина
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Группа
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Время
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Аудитория
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Заместитель
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-medium">Программирование</td>
                  <td className="px-4 py-3">Информ-302</td>
                  <td className="px-4 py-3">10:00-11:20</td>
                  <td className="px-4 py-3">214</td>
                  <td className="px-4 py-3">
                    <select className="w-full px-2 py-1 border rounded text-sm">
                      <option value="">Выберите заместителя</option>
                      <option>Бекназаров К.Р.</option>
                      <option>Алиев Р.М.</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Базы данных</td>
                  <td className="px-4 py-3">Информ-302</td>
                  <td className="px-4 py-3">12:00-13:20</td>
                  <td className="px-4 py-3">315</td>
                  <td className="px-4 py-3">
                    <select className="w-full px-2 py-1 border rounded text-sm">
                      <option value="">Выберите заместителя</option>
                      <option>Бекназаров К.Р.</option>
                      <option>Алиев Р.М.</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">История рассмотрения</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="text-blue-500 mr-3 mt-1">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="font-medium">Заявка создана</div>
                  <div className="text-sm text-gray-500">
                    23.04.2025, 14:30 - Рахимов А.К.
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-3 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <div className="font-medium">Одобрено на уровне кафедры</div>
                  <div className="text-sm text-gray-500">
                    23.04.2025, 16:45 - Джураев М.Б. (Зав. кафедрой)
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-500 mr-3 mt-1">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <div className="font-medium">Ожидает решения декана</div>
                  <div className="text-sm text-gray-500">24.04.2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Компонент для просмотра замен
  const SubstitutionsList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск замен..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="relative">
            <input type="date" className="pl-4 pr-4 py-2 border rounded-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Основной преподаватель
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Заместитель
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Дисциплина
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Группы
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Дата / Время
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Аудитория
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Статус
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockData.substitutions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{sub.originalTeacher}</td>
                <td className="px-6 py-4">{sub.substitutionTeacher}</td>
                <td className="px-6 py-4">{sub.subject}</td>
                <td className="px-6 py-4">{sub.groups}</td>
                <td className="px-6 py-4">
                  {sub.date}
                  <br />
                  <span className="text-sm text-gray-500">{sub.time}</span>
                </td>
                <td className="px-6 py-4">{sub.classroom}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      sub.status === "Подтверждено"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {sub.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Выбор активной вкладки
  const renderTabContent = () => {
    switch (activeTab) {
      case "requests":
        return <SubstitutionRequests />;
      case "detail":
        return <RequestDetail />;
      case "list":
        return <SubstitutionsList />;
      default:
        return <SubstitutionRequests />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Система замен преподавателей</h2>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "requests"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("requests")}
            >
              Заявки на замену
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "detail"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("detail")}
            >
              Детали заявки
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "list"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Список замен
            </button>
          </div>
        </div>

        <div className="p-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default TeacherSubstitutionModule;
