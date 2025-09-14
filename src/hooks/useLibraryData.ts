import { useState, useEffect } from 'react';
import { Book, Member, BorrowRecord, LibraryStats } from '../types';
import { sampleBooks, sampleMembers, sampleBorrowRecords, sampleActivities } from '../data/sampleData';

export const useLibraryData = () => {
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [members, setMembers] = useState<Member[]>(sampleMembers);
  const [borrowRecords, setBorrowRecords] = useState<BorrowRecord[]>(sampleBorrowRecords);
  const [stats, setStats] = useState<LibraryStats | null>(null);

  useEffect(() => {
    calculateStats();
  }, [books, members, borrowRecords]);

  const calculateStats = () => {
    const totalBooks = books.reduce((sum, book) => sum + book.totalCopies, 0);
    const availableBooks = books.reduce((sum, book) => sum + book.availableCopies, 0);
    const booksIssued = borrowRecords.filter(record => record.status === 'borrowed').length;
    const overdueBooks = borrowRecords.filter(record => record.status === 'overdue').length;

    setStats({
      totalBooks,
      totalMembers: members.length,
      booksIssued,
      overdueBooks,
      availableBooks,
      recentActivities: sampleActivities
    });
  };

  const addBook = (book: Omit<Book, 'id' | 'addedDate'>) => {
    const newBook: Book = {
      ...book,
      id: Date.now().toString(),
      addedDate: new Date().toISOString().split('T')[0]
    };
    setBooks(prev => [...prev, newBook]);
  };

  const updateBook = (id: string, updatedBook: Partial<Book>) => {
    setBooks(prev => prev.map(book => book.id === id ? { ...book, ...updatedBook } : book));
  };

  const deleteBook = (id: string) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const addMember = (member: Omit<Member, 'id' | 'membershipDate' | 'borrowedBooks'>) => {
    const newMember: Member = {
      ...member,
      id: Date.now().toString(),
      membershipDate: new Date().toISOString().split('T')[0],
      borrowedBooks: 0
    };
    setMembers(prev => [...prev, newMember]);
  };

  const updateMember = (id: string, updatedMember: Partial<Member>) => {
    setMembers(prev => prev.map(member => member.id === id ? { ...member, ...updatedMember } : member));
  };

  const deleteMember = (id: string) => {
    setMembers(prev => prev.filter(member => member.id !== id));
  };

  const borrowBook = (bookId: string, memberId: string) => {
    const book = books.find(b => b.id === bookId);
    if (!book || book.availableCopies === 0) return false;

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14); // 14 days loan period

    const newRecord: BorrowRecord = {
      id: Date.now().toString(),
      bookId,
      memberId,
      borrowDate: new Date().toISOString().split('T')[0],
      dueDate: dueDate.toISOString().split('T')[0],
      status: 'borrowed'
    };

    setBorrowRecords(prev => [...prev, newRecord]);
    updateBook(bookId, { availableCopies: book.availableCopies - 1 });
    
    const member = members.find(m => m.id === memberId);
    if (member) {
      updateMember(memberId, { borrowedBooks: member.borrowedBooks + 1 });
    }

    return true;
  };

  const returnBook = (recordId: string) => {
    const record = borrowRecords.find(r => r.id === recordId);
    if (!record) return false;

    const book = books.find(b => b.id === record.bookId);
    const member = members.find(m => m.id === record.memberId);

    if (book && member) {
      setBorrowRecords(prev => prev.map(r => 
        r.id === recordId 
          ? { ...r, status: 'returned' as const, returnDate: new Date().toISOString().split('T')[0] }
          : r
      ));
      updateBook(record.bookId, { availableCopies: book.availableCopies + 1 });
      updateMember(record.memberId, { borrowedBooks: member.borrowedBooks - 1 });
      return true;
    }

    return false;
  };

  return {
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
  };
};