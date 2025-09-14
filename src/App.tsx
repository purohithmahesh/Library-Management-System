import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import BookManager from './components/BookManager';
import MemberManager from './components/MemberManager';
import TransactionManager from './components/TransactionManager';
import { useLibraryData } from './hooks/useLibraryData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const {
    books,
    members,
    borrowRecords,
    stats,
    addBook,
    updateBook,
    deleteBook,
    addMember,
    updateMember,
    deleteMember,
    borrowBook,
    returnBook
  } = useLibraryData();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={stats} />;
      case 'books':
        return (
          <BookManager
            books={books}
            onAddBook={addBook}
            onUpdateBook={updateBook}
            onDeleteBook={deleteBook}
          />
        );
      case 'members':
        return (
          <MemberManager
            members={members}
            onAddMember={addMember}
            onUpdateMember={updateMember}
            onDeleteMember={deleteMember}
          />
        );
      case 'transactions':
        return (
          <TransactionManager
            books={books}
            members={members}
            borrowRecords={borrowRecords}
            onBorrowBook={borrowBook}
            onReturnBook={returnBook}
          />
        );
      default:
        return <Dashboard stats={stats} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderActiveTab()}
    </Layout>
  );
}

export default App;