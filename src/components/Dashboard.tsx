import React from 'react';
import { BookOpen, Users, TrendingUp, AlertTriangle, Clock, Activity } from 'lucide-react';
import { LibraryStats } from '../types';

interface DashboardProps {
  stats: LibraryStats | null;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Books',
      value: stats.totalBooks,
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Active Members',
      value: stats.totalMembers,
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Books Issued',
      value: stats.booksIssued,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: 'Overdue Books',
      value: stats.overdueBooks,
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      change: '-2%',
      changeType: 'negative'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome to Your Library</h2>
            <p className="text-blue-100 text-lg">
              Monitor your library's performance and manage operations efficiently
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Clock className="h-12 w-12 text-white mb-2" />
              <p className="text-sm text-blue-100">Last Updated</p>
              <p className="font-semibold">{new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} transform rotate-3 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.changeType === 'positive' 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Library Usage Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Library Usage</h3>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Issued</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Books Available</span>
                <span className="font-medium">{stats.availableBooks}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.availableBooks / stats.totalBooks) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Books Issued</span>
                <span className="font-medium">{stats.booksIssued}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.booksIssued / stats.totalBooks) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </div>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {stats.recentActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-2 rounded-full flex-shrink-0 ${
                  activity.type === 'borrow' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'return' ? 'bg-green-100 text-green-600' :
                  activity.type === 'add_book' ? 'bg-purple-100 text-purple-600' :
                  'bg-teal-100 text-teal-600'
                }`}>
                  {activity.type === 'borrow' && <TrendingUp className="h-4 w-4" />}
                  {activity.type === 'return' && <BookOpen className="h-4 w-4" />}
                  {activity.type === 'add_book' && <BookOpen className="h-4 w-4" />}
                  {activity.type === 'add_member' && <Users className="h-4 w-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-medium">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(activity.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;