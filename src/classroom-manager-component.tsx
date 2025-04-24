import { Search, ChevronDown, Plus, Edit, Trash2 } from "lucide-react";

const ClassroomManager = () => {
  // Имитация данных для демонстрации
  const mockData = {
    buildings: [
      "Главный корпус",
      "Корпус естественных наук",
      "Филологический корпус",
    ],
    classrooms: [
      {
        id: 1,
        number: "101",
        building: "Главный корпус",
        capacity: 80,
        type: "Лекционная",
      },
      {
        id: 2,
        number: "214",
        building: "Главный корпус",
        capacity: 30,
        type: "Компьютерный класс",
      },
      {
        id: 3,
        number: "315",
        building: "Главный корпус",
        capacity: 25,
        type: "Компьютерный класс",
      },
      {
        id: 4,
        number: "105",
        building: "Корпус естественных наук",
        capacity: 70,
        type: "Лекционная",
      },
      {
        id: 5,
        number: "309",
        building: "Корпус естественных наук",
        capacity: 30,
        type: "Лаборатория",
      },
      {
        id: 6,
        number: "415",
        building: "Филологический корпус",
        capacity: 25,
        type: "Семинарская",
      },
    ],
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск аудиторий..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>

          <div className="relative">
            <select className="pl-4 pr-10 py-2 border rounded-lg appearance-none">
              <option>Все корпуса</option>
              {mockData.buildings.map((building, index) => (
                <option key={index} value={building}>
                  {building}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        <button className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
          <Plus size={18} />
          <span>Добавить аудиторию</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Номер
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Корпус
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Тип
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Вместимость
              </th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockData.classrooms.map((room) => (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{room.number}</td>
                <td className="px-6 py-4">{room.building}</td>
                <td className="px-6 py-4">{room.type}</td>
                <td className="px-6 py-4">{room.capacity}</td>
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

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-3">
          Статистика использования аудиторий
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">
              Загруженность аудиторий
            </div>
            <div className="text-xl font-bold mb-2">76%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "76%" }}
              ></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">
              Компьютерные классы
            </div>
            <div className="text-xl font-bold mb-2">89%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "89%" }}
              ></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">Лекционные залы</div>
            <div className="text-xl font-bold mb-2">62%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "62%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomManager;
