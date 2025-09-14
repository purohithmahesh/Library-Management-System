
# 📚 Library Management System

A modern, fully-functional Library Management System built with React, TypeScript, and Tailwind CSS. This professional-grade application provides a complete solution for managing library operations with an intuitive user interface and comprehensive features.

## ✨ Features

### 📊 Dashboard & Analytics
- **Real-time Statistics**: Track total books, active members, issued books, and overdue items
- **Interactive Charts**: Visual representation of library usage and book availability
- **Recent Activities**: Monitor all library transactions and activities
- **Performance Metrics**: Comprehensive overview of library operations

### 📖 Book Management
- **Complete CRUD Operations**: Add, edit, update, and delete books
- **Advanced Search & Filtering**: Search by title, author, ISBN, or category
- **Book Categories**: Organize books by genres and categories
- **Inventory Tracking**: Monitor total and available copies
- **Cover Image Support**: Visual book representation with cover images
- **Detailed Book Information**: ISBN, publication year, descriptions, and more

### 👥 Member Management
- **Member Registration**: Complete member onboarding system
- **Profile Management**: Update member information and status
- **Member Status Tracking**: Active, inactive, and suspended members
- **Contact Information**: Email, phone, and address management
- **Borrowing History**: Track member's borrowing patterns

### 🔄 Transaction Management
- **Book Borrowing**: Issue books to members with due dates
- **Return Processing**: Handle book returns with date tracking
- **Overdue Management**: Automatic overdue detection and tracking
- **Transaction History**: Complete audit trail of all transactions
- **Fine Calculation**: Automatic fine calculation for overdue books

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, professional interface with gradient themes
- **Smooth Animations**: Micro-interactions and hover effects
- **Intuitive Navigation**: Easy-to-use tab-based navigation system
- **Form Validation**: Real-time validation with user-friendly error messages
- **Loading States**: Smooth loading animations and transitions

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons

### Build Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization

### Development Tools
- **TypeScript Compiler** - Static type checking
- **Autoprefixer** - Automatic CSS vendor prefixing
- **Hot Module Replacement** - Fast development with instant updates

## 📁 Project Structure

```
library-management-system/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Layout.tsx     # Main layout component
│   │   ├── Dashboard.tsx  # Dashboard with statistics
│   │   ├── BookManager.tsx    # Book management interface
│   │   ├── MemberManager.tsx  # Member management interface
│   │   └── TransactionManager.tsx # Transaction handling
│   ├── hooks/             # Custom React hooks
│   │   └── useLibraryData.ts  # Data management hook
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Main type definitions
│   ├── data/              # Sample data and utilities
│   │   └── sampleData.ts  # Initial sample data
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## 🎯 Usage Guide

### Dashboard
- View real-time library statistics and metrics
- Monitor recent activities and transactions
- Track book availability and usage patterns
- Access quick navigation to all system modules

### Managing Books
1. **Adding Books**: Click "Add New Book" and fill in the required information
2. **Searching**: Use the search bar to find books by title, author, or ISBN
3. **Filtering**: Filter books by category using the dropdown menu
4. **Editing**: Click the edit icon on any book card to modify information
5. **Deleting**: Use the delete icon to remove books from the system

### Managing Members
1. **Registration**: Add new members with complete contact information
2. **Status Management**: Update member status (active, inactive, suspended)
3. **Profile Updates**: Edit member information as needed
4. **Search & Filter**: Find members quickly using search and status filters

### Processing Transactions
1. **Borrowing Books**: Select available books and active members to create loans
2. **Returning Books**: Process returns from the active borrows list
3. **Overdue Tracking**: Monitor and manage overdue books automatically
4. **Transaction History**: View complete audit trail of all library activities

## 🔧 Configuration

### Customizing the Application

You can customize various aspects of the application:

**Colors and Themes**: Modify the Tailwind configuration in `tailwind.config.js`

**Sample Data**: Update initial data in `src/data/sampleData.ts`

**Business Rules**: Adjust loan periods, fine calculations, and other rules in `src/hooks/useLibraryData.ts`

## 🤝 Contributing

We welcome contributions to improve the Library Management System! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices and maintain type safety
- Use meaningful component and variable names
- Write clean, readable code with proper comments
- Ensure responsive design across all screen sizes
- Test your changes thoroughly before submitting


### Deploying to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings: Build command: `npm run build`, Publish directory: `dist`

### Deploying to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Deploying to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

### SCREENSHORTS
<img width="1764" height="909" alt="Screenshot 2025-09-14 174152" src="https://github.com/user-attachments/assets/ccf6e0fd-d90c-4e54-8326-be0ea37a946d" />
<img width="1823" height="911" alt="Screenshot 2025-09-14 174219" src="https://github.com/user-attachments/assets/ff43b26f-3ed3-473e-a3a7-011ded94ced4" />
<img width="1821" height="907" alt="Screenshot 2025-09-14 174307" src="https://github.com/user-attachments/assets/de3aa242-8630-408e-9ba0-f269ec0ce816" />
<img width="1668" height="911" alt="Screenshot 2025-09-14 174407" src="https://github.com/user-attachments/assets/8134290b-4e81-4d18-9927-1871f91cd286" />
<img width="1735" height="904" alt="Screenshot 2025-09-14 174443" src="https://github.com/user-attachments/assets/75b10ab3-7a43-44cb-ad6b-e25a334e09a4" />
<img width="1639" height="909" alt="Screenshot 2025-09-14 174502" src="https://github.com/user-attachments/assets/4a19eb1e-8d6e-4fe1-bc4e-c430dcef2dad" />
