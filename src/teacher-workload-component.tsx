import { useState } from "react";
import {
  ChevronDown,
  Filter,
  Download,
  Search,
  UserPlus,
  Edit,
  Trash2,
} from "lucide-react";

const TeacherWorkloadModule = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedDepartment, setSelectedDepartment] = useState("Все");

  // Имитация данных для демонстрации
  const mockData = {
    departments: [
      "Все",
      "Информатика",
      "Математика",
      "Физика",
      "Иностранные языки",
    ],
    teachers: [
      {
        id: 1,
        name: "Рахимов А.К.",
        department: "Информатика",
        position: "Доцент",
        workload: 820,
        subjects: 4,
      },
      {
        id: 2,
        name: "Исмаилов С.Т.",
        department: "Математика",
        position: "Профессор",
        workload: 760,
        subjects: 3,
      },
      {
        id: 3,
        name: "Каримова Н.Д.",
        department: "Физика",
        position: "Преподаватель",
        workload: 640,
        subjects: 5,
      },
      {
        id: 4,
        name: "Бекназаров К.Р.",
        department: "Информатика",
        position: "Старший преподаватель",
        workload: 720,
        subjects: 4,
      },
      {
        id: 5,
        name: "Жумабаева Н.О.",
        department: "Иностранные языки",
        position: "Доцент",
        workload: 680,
        subjects: 6,
      },
    ],
    subjects: [
      {
        id: 1,
        name: "Программирование",
        hours: 240,
        groups: 3,
        type: "Лекция + практика",
      },
      {
        id: 2,
        name: "Базы данных",
        hours: 180,
        groups: 2,
        type: "Лекция + лаборатория",
      },
      {
        id: 3,
        name: "Высшая математика",
        hours: 320,
        groups: 4,
        type: "Лекция + практика",
      },
      {
        id: 4,
        name: "Физика",
        hours: 240,
        groups: 3,
        type: "Лекция + лаборатория",
      },
      {
        id: 5,
        name: "Английский язык",
        hours: 360,
        groups: 6,
        type: "Практика",
      },
    ],
  };

  // Компонент списка преподавателей
  const TeachersList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск преподавателей..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>

          <div className="relative">
            <select
              className="pl-4 pr-10 py-2 border rounded-lg appearance-none"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {mockData.departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
            <Filter size={18} />
            <span>Фильтр</span>
          </button>
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
            <Download size={18} />
            <span>Экспорт</span>
          </button>
          <button className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
            <UserPlus size={18} />
            <span>Добавить</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                ФИО
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Кафедра
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Должность
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Дисциплины
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Часы
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockData.teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{teacher.name}</td>
                <td className="px-6 py-4 text-gray-600">
                  {teacher.department}
                </td>
                <td className="px-6 py-4 text-gray-600">{teacher.position}</td>
                <td className="px-6 py-4">{teacher.subjects}</td>
                <td className="px-6 py-4 font-medium">{teacher.workload}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                      <Edit size={18} />
                    </button>
                    <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="text-gray-500">Показано 5 из 124 преподавателей</div>
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

  // Компонент детального просмотра нагрузки преподавателя
  const TeacherDetail = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold">Рахимов Алишер Каримович</h3>
            <div className="text-gray-500">Кафедра информатики, Доцент</div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Редактировать
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-gray-500 text-sm">Общая нагрузка</div>
            <div className="text-2xl font-bold">820 часов</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-gray-500 text-sm">Дисциплины</div>
            <div className="text-2xl font-bold">4</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-gray-500 text-sm">Группы</div>
            <div className="text-2xl font-bold">6</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Дисциплины и распределение часов</h4>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Название
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Тип занятий
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Группы
                  </th>
                  <th className="px-4 py-3 text-gray-500 font-medium text-sm">
                    Часы
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-medium">Программирование</td>
                  <td className="px-4 py-3">Лекция + практика</td>
                  <td className="px-4 py-3">3 (Информ-101, 102, 103)</td>
                  <td className="px-4 py-3 font-medium">240</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Базы данных</td>
                  <td className="px-4 py-3">Лекция + лаборатория</td>
                  <td className="px-4 py-3">2 (Информ-301, 302)</td>
                  <td className="px-4 py-3 font-medium">180</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Алгоритмы и структуры данных
                  </td>
                  <td className="px-4 py-3">Лекция + практика</td>
                  <td className="px-4 py-3">2 (Информ-201, 202)</td>
                  <td className="px-4 py-3 font-medium">160</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Информационная безопасность
                  </td>
                  <td className="px-4 py-3">Лекция + практика</td>
                  <td className="px-4 py-3">2 (Информ-401, 402)</td>
                  <td className="px-4 py-3 font-medium">240</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">График нагрузки по семестрам</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div>1 семестр</div>
                <div className="font-medium">380 часов</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "48%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <div>2 семестр</div>
                <div className="font-medium">440 часов</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "52%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Компонент распределения дисциплин
  const SubjectDistribution = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск дисциплин..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <button className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
          <span>Добавить дисциплину</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Название
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Тип
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Группы
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Часы
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Преподаватель
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockData.subjects.map((subject) => (
              <tr key={subject.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{subject.name}</td>
                <td className="px-6 py-4 text-gray-600">{subject.type}</td>
                <td className="px-6 py-4">{subject.groups}</td>
                <td className="px-6 py-4 font-medium">{subject.hours}</td>
                <td className="px-6 py-4">
                  <select className="px-2 py-1 border rounded text-sm">
                    <option>Выберите...</option>
                    {mockData.teachers.map((teacher) => (
                      <option key={teacher.id}>{teacher.name}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                      <Edit size={18} />
                    </button>
                    <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 size={18} />
                    </button>
                  </div>
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
      case "list":
        return <TeachersList />;
      case "detail":
        return <TeacherDetail />;
      case "subjects":
        return <SubjectDistribution />;
      default:
        return <TeachersList />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Управление нагрузкой преподавателей
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "list"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Список преподавателей
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "detail"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("detail")}
            >
              Детальный просмотр
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "subjects"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("subjects")}
            >
              Распределение дисциплин
            </button>
          </div>
        </div>

        <div className="p-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default TeacherWorkloadModule;
