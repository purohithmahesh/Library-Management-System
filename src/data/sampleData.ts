import { Book, Member, BorrowRecord, Activity } from '../types';

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '978-0-06-112008-4',
    category: 'Fiction',
    totalCopies: 5,
    availableCopies: 3,
    publishedYear: 1960,
    description: 'A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.',
    coverUrl: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300',
    addedDate: '2024-01-15'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0-452-28423-4',
    category: 'Dystopian Fiction',
    totalCopies: 4,
    availableCopies: 2,
    publishedYear: 1949,
    description: 'A dystopian social science fiction novel that follows the life of Winston Smith, a low-ranking member of the Party.',
    coverUrl: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=300',
    addedDate: '2024-01-10'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '978-0-14-143951-8',
    category: 'Romance',
    totalCopies: 6,
    availableCopies: 4,
    publishedYear: 1813,
    description: 'A romantic novel that follows Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage.',
    coverUrl: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=300',
    addedDate: '2024-01-20'
  },
  {
    id: '4',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0-7432-7356-5',
    category: 'Classic Literature',
    totalCopies: 3,
    availableCopies: 1,
    publishedYear: 1925,
    description: 'A classic American novel set in the Jazz Age that tells the story of Jay Gatsby and his pursuit of the American Dream.',
    coverUrl: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=300',
    addedDate: '2024-01-12'
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    isbn: '978-0-316-76948-0',
    category: 'Coming-of-age',
    totalCopies: 4,
    availableCopies: 4,
    publishedYear: 1951,
    description: 'A controversial novel that has become a touchstone for generations of readers, following Holden Caulfield.',
    coverUrl: 'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&w=300',
    addedDate: '2024-01-18'
  },
  {
    id: '6',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    isbn: '978-0-7475-3269-9',
    category: 'Fantasy',
    totalCopies: 8,
    availableCopies: 6,
    publishedYear: 1997,
    description: 'The first novel in the Harry Potter series, following the young wizard as he discovers the magical world.',
    coverUrl: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
    addedDate: '2024-01-22'
  }
];

export const sampleMembers: Member[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    phone: '+1-555-0101',
    address: '123 Oak Street, Springfield, IL',
    membershipDate: '2023-06-15',
    status: 'active',
    borrowedBooks: 2
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@email.com',
    phone: '+1-555-0102',
    address: '456 Pine Avenue, Springfield, IL',
    membershipDate: '2023-08-20',
    status: 'active',
    borrowedBooks: 1
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol.davis@email.com',
    phone: '+1-555-0103',
    address: '789 Elm Drive, Springfield, IL',
    membershipDate: '2023-12-10',
    status: 'active',
    borrowedBooks: 0
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@email.com',
    phone: '+1-555-0104',
    address: '321 Maple Lane, Springfield, IL',
    membershipDate: '2023-05-03',
    status: 'suspended',
    borrowedBooks: 3
  },
  {
    id: '5',
    name: 'Emma Brown',
    email: 'emma.brown@email.com',
    phone: '+1-555-0105',
    address: '654 Cedar Court, Springfield, IL',
    membershipDate: '2024-01-08',
    status: 'active',
    borrowedBooks: 1
  }
];

export const sampleBorrowRecords: BorrowRecord[] = [
  {
    id: '1',
    bookId: '1',
    memberId: '1',
    borrowDate: '2024-01-20',
    dueDate: '2024-02-03',
    status: 'borrowed'
  },
  {
    id: '2',
    bookId: '2',
    memberId: '2',
    borrowDate: '2024-01-18',
    dueDate: '2024-02-01',
    status: 'borrowed'
  },
  {
    id: '3',
    bookId: '4',
    memberId: '4',
    borrowDate: '2024-01-10',
    dueDate: '2024-01-24',
    status: 'overdue',
    fine: 5.00
  },
  {
    id: '4',
    bookId: '3',
    memberId: '1',
    borrowDate: '2024-01-15',
    dueDate: '2024-01-29',
    returnDate: '2024-01-28',
    status: 'returned'
  }
];

export const sampleActivities: Activity[] = [
  {
    id: '1',
    type: 'borrow',
    description: 'Alice Johnson borrowed "To Kill a Mockingbird"',
    timestamp: '2024-01-25T10:30:00Z',
    user: 'Alice Johnson'
  },
  {
    id: '2',
    type: 'return',
    description: 'Bob Smith returned "Pride and Prejudice"',
    timestamp: '2024-01-25T09:15:00Z',
    user: 'Bob Smith'
  },
  {
    id: '3',
    type: 'add_book',
    description: 'Added new book "Harry Potter and the Philosopher\'s Stone"',
    timestamp: '2024-01-24T14:20:00Z',
    user: 'Librarian'
  },
  {
    id: '4',
    type: 'add_member',
    description: 'New member Emma Brown registered',
    timestamp: '2024-01-24T11:45:00Z',
    user: 'Librarian'
  },
  {
    id: '5',
    type: 'borrow',
    description: 'David Wilson borrowed "The Great Gatsby"',
    timestamp: '2024-01-23T16:00:00Z',
    user: 'David Wilson'
  }
];