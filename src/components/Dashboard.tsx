import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard,
  Search,
  Film,
  Calendar,
  TrendingUp,
  Settings,
  LogOut, 
  Instagram,
  Users,
  PlayCircle,
  ChevronRight,
  Brain,
  Sparkles,
  Target,
  MessageCircle,
  Eye,
  Menu,
  X,
  Upload,
  AlertCircle
} from 'lucide-react';
import Overview from './dashboard/Overview';
import AnalyzePage from './dashboard/AnalyzePage';
import ReelsGenerator from './dashboard/ReelsGenerator';
import ContentCalendar from './dashboard/ContentCalendar';
import GrowthAnalytics from './dashboard/GrowthAnalytics';
import SettingsPanel from './dashboard/SettingsPanel';

interface DashboardProps {
  user: { email: string } | null;
  onLogout: () => void;
}

function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analyze', label: 'Analyze My Page', icon: Search },
    { id: 'reels', label: 'AI-Generated Reels', icon: Film },
    { id: 'calendar', label: 'Content Calendar', icon: Calendar },
    { id: 'analytics', label: 'Growth Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Overview />;
      case 'analyze':
        return <AnalyzePage />;
      case 'reels':
        return <ReelsGenerator />;
      case 'calendar':
        return <ContentCalendar />;
      case 'analytics':
        return <GrowthAnalytics />;
      case 'settings':
        return <SettingsPanel user={user} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-lg shadow-md"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Instagram className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold">InstagramAI</span>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                  ${activeTab === item.id 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end h-16">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user?.email}</span>
                <button
                  onClick={onLogout}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;