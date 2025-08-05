# GREAT Coaching Center Website

A modern, responsive website for GREAT Coaching Center built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Contact Forms**: Functional registration and contact forms
- **Component-Based**: Built with reusable React components
- **Fast Performance**: Optimized with Vite for quick development and builds

## Sections

1. **Header**: Navigation with smooth scrolling to sections
2. **Hero**: Eye-catching introduction with call-to-action buttons
3. **About**: Information about the coaching center and its features
4. **Services**: Detailed overview of Math and English programs
5. **Registration**: Student registration form with all necessary fields
6. **Contact**: Contact information and inquiry form
7. **Footer**: Links and social media information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- **React 19**: Latest version of React with modern features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **TypeScript**: Type safety and better development experience

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Reusable UI components
│   ├── header.tsx     # Navigation header
│   ├── hero.tsx       # Hero section
│   ├── about.tsx      # About section
│   ├── services.tsx   # Services section
│   ├── registration.tsx # Registration form
│   ├── contact.tsx    # Contact section
│   ├── footer.tsx     # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/
│   └── utils.ts       # Utility functions
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Customization

The website is designed to be easily customizable:

- **Colors**: Update the emerald color scheme in Tailwind classes
- **Content**: Modify text content in each component
- **Images**: Replace placeholder images with actual photos
- **Forms**: Update form fields and validation as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
