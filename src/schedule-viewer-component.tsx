import React, { useState } from 'react';
import { Filter, Plus, Search, ChevronDown, AlertCircle, Edit, Trash2 } from 'lucide-react';

const ScheduleViewer = () => {
  const [selectedDay, setSelectedDay] = useState('Понедельник');
  const [selectedGroup, setSelectedGroup] = useState('Все группы');
  const [selectedTeacher, setSelectedTeacher] = useState('Все преподаватели');

  // Имитация данных для демонстрации
  const mockData = {
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    groups: ['Все группы', 'Информ-101', 'Информ-102', 'Мат-201', 'Физ-301', 'Ин.яз-401'],
    teachers: ['Все преподаватели', 'Рахимов А.К.', 'Исмаилов С.Т.', 'Каримова Н.Д.', 'Бекназаров К.Р.', 'Жумабаева Н.О.'],
    timeSlots: [
      { id: 1, start: '8:30', end: '9:50' },
      { id: 2, start: '10:00', end: '11:20' },
      { id: 3, start: '11:30', end: '12:50' },
      { id: 4, start: '13:30', end: '14:50' },
      { id: 5, start: '15:00', end: '16:20' },
      { id: 6, start: '16:30', end: '17:50' }
    ],
    scheduleItems: [
      { 
        id: 1,
        day: 'Понедельник',
        timeSlot: 1,
        subject: 'Программирование',
        teacher: 'Рахимов А.К.',
        group: 'Информ-101',
        classroom: '214',
        building: 'Главный корпус'
      },
      { 
        id: 2,
        day: 'Понедельник',
        timeSlot: 2,
        subject: 'Высшая математика',
        teacher: 'Исмаилов С.Т.',
        group: 'Мат-201',
        classroom: '105',
        building: 'Корпус естественных наук'
      },
      { 
        id: 3,
        day: 'Понедельник',
        timeSlot: 3,
        subject: 'Физика',
        teacher: 'Каримова Н.Д.',
        group: 'Физ-301',
        classroom: '309',
        building: 'Корпус естественных наук'
      },
      { 
        id: 4,
        day: 'Понедельник',
        timeSlot: 4,
        subject: 'Английский язык',
        teacher: 'Жумабаева Н.О.',
        group: 'Ин.яз-401',
        classroom: '415',
        building: 'Филологический корпус'
      }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="relative">
            <select 
              className="pl-4 pr-10 py-2 border rounded-lg appearance-none"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {mockData.days.map((day, index) => (
                <option key={index} value={day}>{day}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <select 
              className="pl-4 pr-10 py-2 border rounded-lg appearance-none"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              {mockData.groups.map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <select 
              className="pl-4 pr-10 py-2 border rounded-lg appearance-none"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
            >
              {mockData.teachers.map((teacher, index) => (
                <option key={index} value={teacher}>{teacher}</option>
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
          <button className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
            <Plus size={18} />
            <span>Добавить занятие</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Время</th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Дисциплина</th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Группа</th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Преподаватель</th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Аудитория</th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Корпус</th>
              <th className="px-6 py-3 text-gray-500 font-medium text-sm">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockData.scheduleItems
              .filter(item => item.day === selectedDay)
              .sort((a, b) => a.timeSlot - b.timeSlot)
              .map(item => {
                const timeSlot = mockData.timeSlots.find(t => t.id === item.timeSlot);
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{timeSlot ? `${timeSlot.start} - ${timeSlot.end}` : ''}</td>
                    <td className="px-6 py-4">{item.subject}</td>
                    <td className="px-6 py-4">{item.group}</td>
                    <td className="px-6 py-4">{item.teacher}</td>
                    <td className="px-6 py-4">{item.classroom}</td>
                    <td className="px-6 py-4">{item.building}</td>
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
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-3">
        <div className="text-blue-500 flex-shrink-0 mt-1">
          <AlertCircle size={20} />
        </div>
        <div>
          <div className="font-medium">Перемещения между корпусами</div>
          <div className="text-sm text-gray-600 mt-1">
            Обратите внимание, что преподавателю Каримовой Н.Д. потребуется 15 минут для перемещения из Корпуса естественных наук в Главный корпус для следующего занятия.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleViewer;