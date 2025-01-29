import React, { useState } from 'react';
import { TrendingUp, Users, Eye, MessageCircle } from 'lucide-react';

const GrowthAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      label: 'Follower Growth',
      value: '+1,234',
      change: '+12.3%',
      icon: Users
    },
    {
      label: 'Avg. Reach',
      value: '45.6K',
      change: '+8.7%',
      icon: Eye
    },
    {
      label: 'Engagement Rate',
      value: '4.8%',
      change: '+2.1%',
      icon: MessageCircle
    },
    {
      label: 'Profile Visits',
      value: '12.3K',
      change: '+15.4%',
      icon: TrendingUp
    }
  ];

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Growth Analytics</h2>
          <div className="flex space-x-2">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium
                  ${timeRange === range.value 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:bg-gray-100'}
                `}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm">{metric.label}</span>
                <metric.icon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                <span className={`
                  text-sm font-medium
                  ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}
                `}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Insights */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Growth Insights</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Best Posting Time</span>
                <span className="font-medium">7:00 PM - 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Top Performing Content</span>
                <span className="font-medium">Tutorial Reels</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Audience Growth Rate</span>
                <span className="font-medium text-green-600">+12.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Content Consistency</span>
                <span className="font-medium">4.5/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); <boltAction type="file" filePath="src/components/dashboard/SettingsPanel.tsx">import React, { useState } from 'react';
import { Settings, Bell, Lock, Palette, Globe } from 'lucide-react';

interface SettingsPanelProps {
  user: { email: string } | null;
}

const SettingsPanel = ({ user }: SettingsPanelProps) => {
  const [notifications, setNotifications] = useState({
    emailDigest: true,
    contentSuggestions: true,
    performanceAlerts: false,
    trendingTopics: true
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC'
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const timezones = [
    'UTC',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney'
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'German' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

        {/* Profile Settings */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full rounded-lg border-gray-300 bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select
                value={preferences.timezone}
                onChange={(e) => setPreferences(prev => ({ ...prev, timezone: e.target.value }))}
                className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              >
                {timezones.map(tz => (
                  <option key={tz} value={tz}>{tz}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <button
                  onClick={() => handleNotificationChange(key as keyof typeof notifications)}
                  className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                    transition-colors duration-200 ease-in-out focus:outline-none
                    ${value ? 'bg-purple-600' : 'bg-gray-200'}
                  `}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow 
                      ring-0 transition duration-200 ease-in-out
                      ${value ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <div className="flex space-x-4">
                {['light', 'dark'].map(theme => (
                  <button
                    key={theme}
                    onClick={() => setPreferences(prev => ({ ...prev, theme }))}
                    className={`
                      px-4 py-2 rounded-lg border-2
                      ${preferences.theme === theme 
                        ? 'border-purple-500 bg-purple-50 text-purple-700' 
                        : 'border-gray-200 hover:border-purple-200'}
                    `}
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;