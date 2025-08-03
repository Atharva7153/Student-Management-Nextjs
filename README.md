# Student Management System

A simple student management web application built with Next.js. This is a basic project I created independently without following any tutorials - it's a self-learning exercise with minimal functionality and hardcoded data.

## 🚀 Features

- **Student List Display**: View all students on the home page
- **Individual Student Details**: Click on any student to view their detailed information
- **Responsive Design**: Clean and modern UI with animated gradients
- **Dynamic Routing**: Uses Next.js dynamic routes for individual student pages

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.4.5, React 19.1.0
- **Styling**: Tailwind CSS 4
- **Development**: ESLint for code quality
- **Build Tool**: Turbopack for faster development

## 📁 Project Structure

```
student/
├── app/
│   ├── api/
│   │   └── students/
│   │       └── route.js          # API endpoint for student data
│   ├── students/
│   │   └── [student]/
│   │       └── page.js           # Individual student detail page
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Home page with student list
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## 🎯 Current Data

The application currently uses hardcoded student data:

- **Atharva** (Age: 20, Hobby: coding)
- **Laksh** (Age: 22, Hobby: gaming)
- **Prem** (Age: 22, Hobby: gaming)
- **Yash** (Age: 22, Hobby: Rage)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Features Overview

### Home Page (`/`)
- Displays a list of all students
- Each student name is a clickable link
- Clean, minimal design with "Hola" branding

### Student Detail Page (`/students/[name]`)
- Shows individual student information (name, age, hobby)
- Animated gradient background
- Responsive design with smooth animations
- Back navigation to the main page

### API Endpoint (`/api/students`)
- Returns hardcoded student data as JSON
- Simple GET request handler

## 🔧 Limitations & Future Improvements

Since this is a basic self-learning project, it has minimal functionality:

- **Hardcoded Data**: All student information is stored in the API route
- **No Database**: No persistent data storage
- **No CRUD Operations**: Can't add, edit, or delete students
- **No Authentication**: No user management system

### Potential Enhancements
- Add a database (MongoDB, PostgreSQL)
- Implement CRUD operations
- Add user authentication
- Include student photos and more details
- Add search and filter functionality
- Implement form validation

## 💡 Learning Notes

This project was built as a personal learning exercise to understand:
- Next.js App Router
- Dynamic routing in Next.js
- API routes and data fetching
- React hooks (useState, useEffect)
- Basic styling with Tailwind CSS
- Component structure and organization

## 📄 License

This is a personal learning project. Feel free to use and modify as needed.

---

**Note**: This project was created independently without following any tutorials. It's intentionally basic with hardcoded data to focus on learning the core concepts of Next.js and React development.
