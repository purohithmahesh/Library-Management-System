import React, { useState } from 'react';
import { Book, Member, BorrowRecord } from '../types';
import { Search, ArrowUpRight, ArrowDownLeft, Calendar, AlertTriangle, CheckCircle, User, BookOpen, X } from 'lucide-react';

interface TransactionManagerProps {
  books: Book[];
  members: Member[];
  borrowRecords: BorrowRecord[];
  onBorrowBook: (bookId: string, memberId: string) => boolean;
  onReturnBook: (recordId: string) => boolean;
}

const TransactionManager: React.FC<TransactionManagerProps> = ({
  books,
  members,
  borrowRecords,
  onBorrowBook,
  onReturnBook
}) => {
  const [activeTab, setActiveTab] = useState<'borrow' | 'return' | 'history'>('borrow');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [showBorrowForm, setShowBorrowForm] = useState(false);

  const handleBorrow = () => {
    if (selectedBook && selectedMember) {
      const success = onBorrowBook(selectedBook, selectedMember);
      if (success) {
        setSelectedBook('');
        setSelectedMember('');
        setShowBorrowForm(false);
        alert('Book borrowed successfully!');
      } else {
        alert('Failed to borrow book. Please check availability.');
      }
    }
  };

  const handleReturn = (recordId: string) => {
    const success = onReturnBook(recordId);
    if (success) {
      alert('Book returned successfully!');
    } else {
      alert('Failed to return book.');
    }
  };

  const getStatusIcon = (status: BorrowRecord['status']) => {
    switch (status) {
      case 'borrowed':
        return <ArrowUpRight className="h-4 w-4 text-blue-500" />;
      case 'returned':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'overdue':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: BorrowRecord['status']) => {
    switch (status) {
      case 'borrowed':
        return 'bg-blue-100 text-blue-800';
      case 'returned':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const activeBorrows = borrowRecords.filter(record => record.status === 'borrowed' || record.status === 'overdue');
  const filteredRecords = borrowRecords.filter(record => {
    const book = books.find(b => b.id === record.bookId);
    const member = members.find(m => m.id === record.memberId);
    const searchLower = searchTerm.toLowerCase();
    
    return (
      book?.title.toLowerCase().includes(searchLower) ||
      book?.author.toLowerCase().includes(searchLower) ||
      member?.name.toLowerCase().includes(searchLower)
    );
  });

  const availableBooks = books.filter(book => book.availableCopies > 0);
  const activeMembers = members.filter(member => member.status === 'active');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Transaction Management</h2>
          <p className="text-gray-600 mt-1">Manage book borrowing and returns</p>
        </div>
        <button
          onClick={() => setShowBorrowForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <ArrowUpRight className="h-5 w-5" />
          <span>New Borrow</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
        <div className="flex space-x-1">
          {[
            { id: 'borrow', label: 'Active Borrows', icon: ArrowUpRight },
            { id: 'return', label: 'Returns', icon: ArrowDownLeft },
            { id: 'history', label: 'History', icon: Calendar }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by book title, author, or member name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          />
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'borrow' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Borrowed Books</h3>
          <div className="grid gap-4">
            {activeBorrows.filter(record => {
              const book = books.find(b => b.id === record.bookId);
              const member = members.find(m => m.id === record.memberId);
              const searchLower = searchTerm.toLowerCase();
              
              return (
                book?.title.toLowerCase().includes(searchLower) ||
                book?.author.toLowerCase().includes(searchLower) ||
                member?.name.toLowerCase().includes(searchLower)
              );
            }).map((record, index) => {
              const book = books.find(b => b.id === record.bookId);
              const member = members.find(m => m.id === record.memberId);
              const isOverdue = new Date(record.dueDate) < new Date() && record.status === 'borrowed';
              
              return (
                <div 
                  key={record.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={book?.coverUrl || 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=100'}
                        alt={book?.title}
                        className="w-16 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 text-lg">{book?.title}</h4>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                            isOverdue ? 'bg-red-100 text-red-800' : getStatusColor(record.status)
                          }`}>
                            {getStatusIcon(isOverdue ? 'overdue' : record.status)}
                            <span className="ml-1">{isOverdue ? 'Overdue' : record.status}</span>
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">by {book?.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{member?.name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Due: {new Date(record.dueDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleReturn(record.id)}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <ArrowDownLeft className="h-4 w-4" />
                      <span>Return Book</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrow Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRecords.map((record) => {
                    const book = books.find(b => b.id === record.bookId);
                    const member = members.find(m => m.id === record.memberId);
                    
                    return (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{book?.title}</div>
                              <div className="text-sm text-gray-500">by {book?.author}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-900">{member?.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(record.borrowDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(record.dueDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                            {getStatusIcon(record.status)}
                            <span className="ml-1">{record.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {record.returnDate ? new Date(record.returnDate).toLocaleDateString() : '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Borrow Book Modal */}
      {showBorrowForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Borrow Book</h3>
                <button
                  onClick={() => setShowBorrowForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Book</label>
                  <select
                    value={selectedBook}
                    onChange={(e) => setSelectedBook(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="">Choose a book...</option>
                    {availableBooks.map(book => (
                      <option key={book.id} value={book.id}>
                        {book.title} by {book.author} ({book.availableCopies} available)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Member</label>
                  <select
                    value={selectedMember}
                    onChange={(e) => setSelectedMember(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="">Choose a member...</option>
                    {activeMembers.map(member => (
                      <option key={member.id} value={member.id}>
                        {member.name} ({member.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowBorrowForm(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBorrow}
                    disabled={!selectedBook || !selectedMember}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Borrow Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionManager;