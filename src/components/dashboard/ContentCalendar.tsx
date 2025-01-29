import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Clock } from 'lucide-react';

const ContentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showAddContent, setShowAddContent] = useState(false);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = selectedDate.toLocaleString('default', { month: 'long' });
  const currentYear = selectedDate.getFullYear();

  const scheduledContent = [
    {
      date: '2024-03-15',
      time: '10:00 AM',
      type: 'Reel',
      title: 'Morning Routine Tips',
      status: 'scheduled'
    },
    {
      date: '2024-03-15',
      time: '3:00 PM',
      type: 'Carousel',
      title: 'Growth Hacking Strategies',
      status: 'draft'
    },
    {
      date: '2024-03-16',
      time: '12:00 PM',
      type: 'Story',
      title: 'Behind the Scenes',
      status: 'idea'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Content Calendar</h2>
          <button
            onClick={() => setShowAddContent(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            <Plus className="h-5 w-5" />
            <span>Add Content</span>
          </button>
        </div>

        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {currentMonth} {currentYear}
          </h3>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <CalendarIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {/* Calendar days would be generated here */}
        </div>

        {/* Scheduled Content */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Upcoming Content</h3>
          <div className="space-y-4">
            {scheduledContent.map((content, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{content.time}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{content.type}</span>
                  </div>
                  <h4 className="font-medium text-gray-900">{content.title}</h4>
                </div>
                <span className={`
                  px-2 py-1 text-xs rounded-full
                  ${content.status === 'scheduled' ? 'bg-green-100 text-green-600' : 
                    content.status === 'draft' ? 'bg-yellow-100 text-yellow-600' : 
                    'bg-gray-100 text-gray-600'}
                `}>
                  {content.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;