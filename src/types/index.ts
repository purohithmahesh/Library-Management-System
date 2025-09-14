export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  publishedYear: number;
  description: string;
  coverUrl?: string;
  addedDate: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  membershipDate: string;
  status: 'active' | 'inactive' | 'suspended';
  borrowedBooks: number;
}

export interface BorrowRecord {
  id: string;
  bookId: string;
  memberId: string;
  borrowDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'borrowed' | 'returned' | 'overdue';
  fine?: number;
}

export interface LibraryStats {
  totalBooks: number;
  totalMembers: number;
  booksIssued: number;
  overdueBooks: number;
  availableBooks: number;
  recentActivities: Activity[];
}

export interface Activity {
  id: string;
  type: 'borrow' | 'return' | 'add_book' | 'add_member';
  description: string;
  timestamp: string;
  user: string;
}