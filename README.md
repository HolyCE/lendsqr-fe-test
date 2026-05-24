# Lendsqr Frontend Engineering Assessment

## Live Demo
[https://lendsqr-fe-test-nine-alpha.vercel.app](https://lendsqr-fe-test-nine-alpha.vercel.app)

## GitHub Repository
[https://github.com/HolyCE/lendsqr-fe-test](https://github.com/HolyCE/lendsqr-fe-test)

## Project Overview
This is a frontend web application built for the Lendsqr Frontend Engineering Assessment. It is a complete admin dashboard for managing users, displaying statistics, and viewing detailed user information. The application includes authentication (login page), dashboard with dynamic statistics, users table with 500 mock users, search, filter, pagination, user details page with data persistence using localStorage, and fully responsive design for mobile and desktop.

## Tech Stack
- React 18 - UI library
- TypeScript - Type safety
- SCSS - Styling (variables, mixins, modules)
- React Router DOM - Navigation between pages
- React Icons - Icons for sidebar and header
- Vite - Build tool and dev server
- Vitest + Testing Library - Unit testing

## Features

### 1. Login Page
- Email and password validation
- Password show/hide toggle
- Redirect to dashboard on successful login

### 2. Dashboard
- Four stat cards showing: Total Users (from mock data), Active Users (users with status = "Active"), Users with Loans (users with balance > 10000), Users with Savings (users with tier >= 2)
- All stats are calculated dynamically from the mock data

### 3. Users Page
- Table displaying 500 mock users
- Columns: Organization, Username, Email, Phone Number, Date Joined, Status, Actions
- Search by name, email, phone, or organization
- Filter by organization and status
- Pagination (10 users per page)
- Action menu (3 dots) with "View Details" option

### 4. User Details Page
- Profile section with avatar, name, tier stars, and account balance
- Tabs: General Details, Documents, Bank Details, Loans, Savings, App and System
- Data is retrieved from the mock API and saved to localStorage
- Back button to return to users list

### 5. Responsive Design
- Desktop: Full sidebar and header
- Tablet: Adjusted layout
- Mobile: Hamburger menu for sidebar, hidden search bar, compact layout

## How to Run Locally

Prerequisites: Node.js (v18 or higher) and npm

Installation:
```bash
git clone https://github.com/HolyCE/lendsqr-fe-test.git
cd lendsqr-fe-test
npm install
npm run dev

The app will be available at http://localhost:5173

Run Tests

npm run test:run

Build for Production

npm run build
The built files will be in the dist folder.

Project Structure

src/
├── assets/images/          # Logo and illustration images
├── components/Layout/      # Header, Sidebar components
├── pages/
│   ├── Login/              # Login page
│   ├── Dashboard/          # Dashboard with stats
│   ├── Users/              # Users table with filters
│   └── UserDetails/        # User details with tabs
├── services/
│   ├── api.ts              # API service (fetch users)
│   └── mockData.ts         # 500 mock users generation
├── styles/
│   ├── variables.scss      # SCSS variables
│   ├── mixins.scss         # SCSS mixins
│   └── global.scss         # Global styles
├── types/user.ts           # User type definitions
├── __tests__/              # Unit tests
├── App.tsx                 # Main app with routes
└── main.tsx                # Entry point


Approach and Decisions
Why React + TypeScript? React is the required framework, and TypeScript ensures type safety, better code maintainability, and fewer runtime errors.

Why SCSS over Tailwind? The assessment required SCSS. I used SCSS variables, mixins, and nested styles for clean, maintainable styling.

Mock Data Generation: I generated 500 mock users with realistic data (organizations, statuses, names, emails, phone numbers, balances, tiers) to simulate a real API response.

localStorage for User Details: The assessment required storing user details in localStorage. When a user views a user's details, the data is saved to localStorage and retrieved on subsequent visits.

Responsive Design: I used CSS media queries to ensure the app works on mobile, tablet, and desktop devices. On mobile, the sidebar becomes a hidden drawer that opens with a hamburger menu button.

Unit Tests: I wrote 18 unit tests covering Login page (form validation, password toggle, navigation), Dashboard (stats cards rendering), and Users page (filters, search, pagination presence).


Deployment
The app is deployed on Vercel at https://lendsqr-fe-test-nine-alpha.vercel.app

