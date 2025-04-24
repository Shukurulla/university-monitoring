import { Calendar, AlertCircle } from "lucide-react";

const ScheduleGenerator = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-medium mb-6">
          Автоматическая генерация расписания
        </h3>

        <div className="bg-blue-50 p-4 border border-blue-200 rounded-lg mb-6">
          <div className="flex items-start space-x-3">
            <div className="text-blue-500 flex-shrink-0 mt-1">
              <AlertCircle size={20} />
            </div>
            <div>
              <div className="font-medium">Перед генерацией расписания</div>
              <div className="text-sm text-gray-600 mt-1">
                Убедитесь, что все нагрузки преподавателей распределены и
                установлены все необходимые параметры в настройках.
                Автоматическая генерация расписания может занять некоторое
                время.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-medium mb-3">Параметры генерации</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Семестр
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Осенний семестр 2024-2025</option>
                  <option>Весенний семестр 2024-2025</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Приоритет
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Оптимизация для преподавателей</option>
                  <option>Оптимизация для студентов</option>
                  <option>Оптимальное использование аудиторий</option>
                  <option>Сбалансированный подход</option>
                </select>
              </div>
              <div>
                <label className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>Учитывать сложность дисциплин</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>Учитывать переходы между корпусами</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>Учитывать возраст преподавателей</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Шаги генерации</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-2">
                      1
                    </div>
                    <div className="font-medium">Проверка данных</div>
                  </div>
                  <div className="pl-8 text-sm text-gray-600">
                    Проверка корректности нагрузки преподавателей и доступности
                    аудиторий
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-2">
                      2
                    </div>
                    <div className="font-medium">Распределение нагрузки</div>
                  </div>
                  <div className="pl-8 text-sm text-gray-600">
                    Распределение занятий по дням недели с учетом ограничений
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs mr-2">
                      3
                    </div>
                    <div className="font-medium text-gray-500">Оптимизация</div>
                  </div>
                  <div className="pl-8 text-sm text-gray-500">
                    Оптимизация расписания с учетом переходов между корпусами
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs mr-2">
                      4
                    </div>
                    <div className="font-medium text-gray-500">
                      Проверка конфликтов
                    </div>
                  </div>
                  <div className="pl-8 text-sm text-gray-500">
                    Выявление и устранение возможных конфликтов в расписании
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs mr-2">
                      5
                    </div>
                    <div className="font-medium text-gray-500">
                      Формирование расписания
                    </div>
                  </div>
                  <div className="pl-8 text-sm text-gray-500">
                    Создание финальной версии расписания
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Calendar size={18} />
            <span>Сгенерировать расписание</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">История генераций</h3>

        <div className="overflow-hidden border rounded">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                  Дата
                </th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                  Семестр
                </th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                  Статус
                </th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium text-sm">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">23.04.2025 14:32</td>
                <td className="px-4 py-3">Весенний семестр 2024-2025</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Успешно
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-500 hover:underline">
                    Просмотр
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">21.04.2025 10:15</td>
                <td className="px-4 py-3">Весенний семестр 2024-2025</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                    Ошибка
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-500 hover:underline">
                    Подробности
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">15.10.2024 09:48</td>
                <td className="px-4 py-3">Осенний семестр 2024-2025</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Успешно
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-500 hover:underline">
                    Просмотр
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Статистика оптимизации</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-lg font-medium">Нагрузка преподавателей</div>
            <div className="text-3xl font-bold mt-2">92%</div>
            <div className="text-sm text-gray-600 mt-1">оптимальности</div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-lg font-medium">Использование аудиторий</div>
            <div className="text-3xl font-bold mt-2">87%</div>
            <div className="text-sm text-gray-600 mt-1">эффективности</div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-lg font-medium">Перемещения</div>
            <div className="text-3xl font-bold mt-2">78%</div>
            <div className="text-sm text-gray-600 mt-1">минимизации</div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">
            Последняя оптимизация: 23.04.2025 в 14:32
          </div>
          <div className="text-sm text-gray-600">
            Улучшение по сравнению с предыдущей версией:{" "}
            <span className="text-green-600 font-medium">+8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleGenerator;
