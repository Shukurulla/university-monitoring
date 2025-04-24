import { Save, Trash2, Plus } from "lucide-react";

const ScheduleSettings = () => {
  // Имитация данных для демонстрации
  const mockData = {
    distances: [
      { from: "Главный корпус", to: "Корпус естественных наук", time: 15 },
      { from: "Главный корпус", to: "Филологический корпус", time: 20 },
      {
        from: "Корпус естественных наук",
        to: "Филологический корпус",
        time: 10,
      },
    ],
    timeSlots: [
      { id: 1, start: "8:30", end: "9:50" },
      { id: 2, start: "10:00", end: "11:20" },
      { id: 3, start: "11:30", end: "12:50" },
      { id: 4, start: "13:30", end: "14:50" },
      { id: 5, start: "15:00", end: "16:20" },
      { id: 6, start: "16:30", end: "17:50" },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">
          Параметры составления расписания
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Общие ограничения</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Максимальное количество пар в день для преподавателя
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  defaultValue="4"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Максимальное количество последовательных пар
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  defaultValue="3"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Минимальное время перерыва между парами (мин)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  defaultValue="10"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Параметры преподавателей</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Время на переход между корпусами
                </label>
                <div className="bg-gray-50 p-3 rounded">
                  {mockData.distances.map((distance, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-1"
                    >
                      <span>
                        {distance.from} — {distance.to}
                      </span>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="w-16 p-1 border rounded"
                          defaultValue={distance.time}
                        />
                        <span className="ml-1 text-gray-500">мин</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm text-gray-600 mb-1">
                  Учет возраста преподавателей
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm text-gray-600">
                      Молодые (до 35 лет)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      defaultValue="8"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Средний возраст (35-50 лет)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      defaultValue="6"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Старший возраст (старше 50 лет)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      defaultValue="4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-3">Временные слоты занятий</h4>
          <div className="bg-white border rounded overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                    Номер пары
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                    Начало
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                    Окончание
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockData.timeSlots.map((slot, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{index + 1} пара</td>
                    <td className="px-4 py-2">
                      <input
                        type="time"
                        className="p-1 border rounded"
                        defaultValue={slot.start}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="time"
                        className="p-1 border rounded"
                        defaultValue={slot.end}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-2 text-blue-500 text-sm flex items-center">
            <Plus size={16} className="mr-1" /> Добавить временной слот
          </button>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Save size={18} />
            <span>Сохранить настройки</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Дополнительные параметры</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Веса при оптимизации</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Минимизация перемещений преподавателей
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="7"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Низкий</span>
                  <span>Высокий</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Оптимизация по нагрузке преподавателей
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="8"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Низкий</span>
                  <span>Высокий</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Оптимизация по сложности дисциплин
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="6"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Низкий</span>
                  <span>Высокий</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Типы занятий</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <div className="font-medium">Лекция</div>
                  <div className="text-sm text-gray-500">
                    Коэффициент сложности: 1.0
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    step="0.1"
                    className="w-20 p-1 border rounded"
                    defaultValue="1.0"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <div className="font-medium">Практическое занятие</div>
                  <div className="text-sm text-gray-500">
                    Коэффициент сложности: 1.2
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    step="0.1"
                    className="w-20 p-1 border rounded"
                    defaultValue="1.2"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <div className="font-medium">Лабораторная работа</div>
                  <div className="text-sm text-gray-500">
                    Коэффициент сложности: 1.5
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    step="0.1"
                    className="w-20 p-1 border rounded"
                    defaultValue="1.5"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">Семинар</div>
                  <div className="text-sm text-gray-500">
                    Коэффициент сложности: 1.3
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    step="0.1"
                    className="w-20 p-1 border rounded"
                    defaultValue="1.3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Save size={18} />
            <span>Сохранить параметры</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSettings;
