# 🏠🌿 CleanConnect

### Community Cleanliness & Issue Reporting Portal

🔗 **Live Site:** [https://clean-connect-dev-techware.netlify.app](https://clean-connect-dev-techware.netlify.app)

---

## 🌍 Overview

**CleanConnect** is a comprehensive community-driven platform designed to empower citizens to report, track, and resolve environmental and cleanliness-related issues in their neighborhoods. From garbage disposal to broken public property — users can contribute, monitor progress, and actively participate in creating cleaner, greener communities.

---

## ✨ Key Features

### 🏠 **13-Section Interactive Home Page**

- Hero carousel with smooth scroll indicator
- Features showcase with 6 key benefits
- Step-by-step "How It Works" guide
- Category-based issue browsing
- Recent community issues display
- Animated impact metrics and statistics
- User testimonials and success stories
- Newsletter subscription
- Partner organizations showcase
- Multiple call-to-action sections

### 📋 **Advanced Issue Management**

- **Search Functionality**: Find issues by keywords in title, description, or location
- **Multi-Filter System**: Filter by category (6 types), status (3 types), and priority (3 levels)
- **Smart Sorting**: Sort by newest, oldest, priority, or alphabetically
- **Pagination**: Navigate through pages with numbered controls
- **Detailed Issue View**: Comprehensive issue pages with images, location, status tracking, and contribution system

### 📊 **Personal Dashboard**

- **Dashboard Home**: Overview with 4 dynamic stat cards
- **Interactive Charts**:
  - Bar chart showing 6-month issue trends
  - Pie chart displaying issues by category
- **Data Table**: Recent issues with sortable columns
- **Responsive Sidebar**: 5 navigation menu items with active state highlighting
- **Mobile Optimized**: Collapsible sidebar with smooth animations

### 👤 **User Profile Management**

- Editable profile information (name, photo, bio, location)
- Activity statistics (issues reported, resolved, pending, contributions)
- Account settings with toggle controls
- Recent activity timeline
- Secure profile updates via Firebase

### 💰 **Community Contributions**

- Support cleanup efforts financially
- Track contribution history
- View total community contributions
- Real-time updates on issue funding

### 🌐 **Additional Pages**

- **About Us**: 8 comprehensive sections including mission, vision, team, and timeline
- **Contact**: Form submission, Google Maps integration, 4 contact methods, FAQ section
- **Dark Mode**: Complete theme switching with proper contrast across all pages
- **Skeleton Loaders**: Enhanced perceived performance during data loading

---

## 🧰 Technologies Used

| Technology                    | Purpose                                                   |
| ----------------------------- | --------------------------------------------------------- |
| ⚡ **Vite**                   | Fast build tool for modern React setup                    |
| ⚛️ **React.js 19**            | Frontend library for building UI                          |
| 🎨 **TailwindCSS 4**          | Utility-first CSS framework for styling                   |
| 💠 **DaisyUI 5**              | Tailwind component library for clean design               |
| 🔀 **React Router 7**         | Navigation and routing between pages                      |
| 🔥 **Firebase 12**            | Authentication and user management                        |
| 🌟 **React Icons 5**          | Beautiful and consistent icon set                         |
| 💬 **SweetAlert2 11**         | Elegant alert popups and modals                           |
| 📄 **jsPDF 3**                | PDF generation and data export features                   |
| ✨ **React Awesome Reveal 4** | Smooth animations and entrance effects                    |
| 📊 **Custom SVG Charts**      | Lightweight data visualization without external libraries |

---

## 🗂️ Project Structure

```bash
CLEAN-CONNECT-CLIENT/
├── public/
│   ├── _redirects
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── user.png
│   ├── components/
│   │   ├── CategoryCards.jsx
│   │   ├── CommunityStats.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── GoogleLogIn.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── ImpactMetrics.jsx
│   │   ├── IssueCard.jsx
│   │   ├── IssueNotFound.jsx
│   │   ├── Loading.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterSection.jsx
│   │   ├── SkeletonCard.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── VolunteerCTA.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   ├── firebase/
│   │   └── Firebase.config.js
│   ├── layouts/
│   │   ├── DashboardLayout.jsx
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AddIssue.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
│   │   ├── IssueDetails.jsx
│   │   ├── Issues.jsx
│   │   ├── Login.jsx
│   │   ├── MyContributions.jsx
│   │   ├── MyIssues.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── routes/
│   │   ├── PrivateRoute.jsx
│   │   └── router.jsx
│   ├── index.css
│   └── main.jsx
├── .env                                  # Environment variables (not in git)
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

**Legend:**

- ✨ NEW - Completely new component
- ⚡ ENHANCED - Existing component with major updates

---

## 🚀 How to Run Locally

### 1. **Clone the Repository**

```bash
git clone https://github.com/devTechware/clean-connect-client.git
```

### 2. **Navigate into the Project**

```bash
cd clean-connect-client
```

### 3. **Install Dependencies**

```bash
npm install
```

### 4. **Set Up Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://clean-connect-api-server.vercel.app
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### 5. **Start Development Server**

```bash
npm run dev
```

### 6. **Open in Browser**

```bash
http://localhost:5173
```

---

## 📱 Pages & Routes

### **Public Routes**

- `/` - Home page with 13 interactive sections
- `/issues` - Browse all issues with search, filter, and sort
- `/about` - About us page with mission, vision, and team
- `/contact` - Contact form, map, and FAQ
- `/login` - User authentication
- `/register` - New user registration

### **Protected Routes (Login Required)**

- `/dashboard` - Personal dashboard with stats and charts
- `/dashboard/profile` - Edit user profile
- `/add-issue` - Report a new issue
- `/my-issues` - View all your reported issues
- `/my-contribution` - Track your contributions
- `/issue-details/:id` - Detailed issue view

---

## 🎨 Design System

### **Color Palette**

**Light Mode:**

- Primary: `#00aeef` (Clean Blue)
- Secondary: `#0096c7` (Deep Blue)
- Accent: `#34d399` (Fresh Green)
- Base: `#f1f5f9` (Light Gray)

**Dark Mode:**

- Fully supported across all pages
- Automatic contrast adjustments
- Smooth theme transitions

### **Typography**

- Font Family: System fonts for optimal performance
- Responsive font sizing
- Clear hierarchy with bold weights

### **Components**

- Border Radius: `rounded-2xl` (16px) for cards
- Shadows: `shadow-xl` for depth
- Transitions: 300ms for all interactions
- Spacing: Consistent Tailwind scale

---

## 🔐 Authentication

- **Email/Password**: Secure registration and login
- **Google OAuth**: One-click social login _(Coming Soon)_
- **Demo Credentials**: Quick access for testing
  - Email: `demo@cleanconnect.com`
  - Password: `Demo@123456`
- **Firebase Integration**: Industry-standard security
- **Protected Routes**: Automatic redirection for unauthorized access

---

## 📊 Dashboard Features

### **Statistics Cards**

- Total Issues Reported
- Issues Resolved
- Pending Issues
- Total Contributions

### **Interactive Charts**

1. **Bar Chart**: Shows 6-month trend of total vs resolved issues
2. **Pie Chart**: Displays issue distribution by category

### **Data Table**

- Recent 5 issues with full details
- Badges for status, category, and priority
- Sortable columns
- Responsive design

### **Sidebar Navigation**

1. Dashboard Home
2. My Profile
3. Add Issue
4. My Issues
5. My Contributions

---

## 🔍 Search & Filter System

### **Search**

- Real-time search across title, description, and location
- Clear button to reset search
- Results counter showing filtered items

### **Filters**

1. **Category**: Garbage, Road Repair, Public Property, Illegal Dumping, Drainage, Other
2. **Status**: All, Pending, In Progress, Resolved
3. **Priority**: All, High, Medium, Low

### **Sorting Options**

- Newest First (default)
- Oldest First
- High Priority First
- Alphabetical (A-Z)

### **Pagination**

- 12 items per page
- Numbered page buttons
- Previous/Next navigation
- Current page highlighting

---

## 🎯 Performance Optimizations

- ⚡ Vite for lightning-fast builds
- 🖼️ Lazy loading for images
- 💀 Skeleton loaders for better perceived performance
- 📦 Code splitting with React.lazy()
- 🎨 Optimized CSS with Tailwind JIT
- 🔄 Efficient re-renders with React hooks
- 📊 Lightweight custom charts (no heavy libraries)

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🧪 Testing Checklist

- [x] All navigation links functional
- [x] Search and filter system working
- [x] Pagination navigating correctly
- [x] Dashboard charts displaying data
- [x] Profile editing saves successfully
- [x] Dark mode toggles properly
- [x] Forms validate input correctly
- [x] Authentication flow complete
- [x] Mobile responsive design
- [x] Cross-browser compatibility

---

## 📈 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/devTechware/clean-connect-client?style=social)
![GitHub forks](https://img.shields.io/github/forks/devTechware/clean-connect-client?style=social)
![GitHub issues](https://img.shields.io/github/issues/devTechware/clean-connect-client)
![GitHub license](https://img.shields.io/github/license/devTechware/clean-connect-client)

---

## 🤝 Contribution Guidelines

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Coding Standards**

- Follow ESLint configuration
- Use React best practices
- Write meaningful commit messages
- Test thoroughly before submitting

---

## 🐛 Known Issues & Roadmap

### **Current Issues**

- None reported

### **Upcoming Features**

- [ ] Real-time notifications system
- [ ] Mobile app (React Native)
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] Issue voting system
- [ ] Gamification with badges
- [ ] Direct integration with city authorities
- [ ] AI-powered issue categorization
- [ ] Image optimization and compression
- [ ] Offline mode with service workers

---

## 📧 Contact & Support

- **Email**: support@cleanconnect.com
- **GitHub Issues**: [Report a Bug](https://github.com/devTechware/clean-connect-client/issues)
- **Website**: [cleanconnect.netlify.app](https://clean-connect-dev-techware.netlify.app)

---

## 📜 License

This project is licensed under the MIT License — free to use, modify, and distribute with attribution.

See [LICENSE](LICENSE) file for full details.

---

## 🙏 Acknowledgments

- **DaisyUI** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **Firebase** for authentication services
- **React Community** for excellent libraries
- **All Contributors** who helped improve CleanConnect

---

## 🌟 Show Your Support

If you find CleanConnect helpful, please consider:

- ⭐ Starring this repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with your community

---

## 💚 Together, we can build a cleaner and better community with CleanConnect.

**Made with ❤️ by the CleanConnect Team**

---

### 🚀 Version History

**v2.0.0 (Current)** - Major Feature Update

- Added 13-section home page
- Implemented complete dashboard system
- Added search, filter, sort, and pagination
- Created profile management system
- Enhanced About and Contact pages
- Implemented dark mode support
- Added skeleton loaders
- Improved responsive design

**v1.0.0** - Initial Release

- Basic issue reporting
- User authentication
- Simple issue listing
- Community statistics
