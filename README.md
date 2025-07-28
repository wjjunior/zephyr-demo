# 🌾 AgroMarket - Agricultural Products Marketplace

An agricultural products marketplace application built with React 19, TypeScript, Tailwind CSS, and Feature Sliced Design architecture, deployed on Zephyr Cloud.

## 🚀 Technologies Used

- **React 19** - Main framework
- **TypeScript** - Static typing
- **Tailwind CSS** - Styling framework
- **Feature Sliced Design** - Code organization architecture
- **Rspack** - Bundler and dev server
- **Zephyr Cloud** - Cloud deployment platform

## 📁 Project Structure

```
src/
├── app/                    # Application configuration
│   └── providers/         # Global providers
├── pages/                 # Application pages
│   └── home/             # Home page
│       └── ui/           # Home page components
├── widgets/               # Composite widgets
│   ├── header/           # Application header
│   │   └── ui/           # Header components
│   ├── product-grid/     # Product grid
│   │   └── ui/           # Product grid components
│   ├── product-card/     # Individual product card
│   │   └── ui/           # Product card components
│   └── features/         # Features widget
│       └── ui/           # Features components
├── features/              # Specific features
│   ├── product-search/   # Product search and filters
│   │   └── ui/           # Search components
│   └── shopping-cart/    # Shopping cart
│       └── model/        # Cart state management
└── shared/                # Shared code
    ├── ui/               # Reusable UI components
    └── lib/              # Utilities and types
```

## 🎯 Features

### ✅ Implemented

- **Home page** with hero section and statistics
- **Product catalog** with responsive grid
- **Search system** with category filters and organic products
- **Shopping cart** with global context
- **Product cards** with detailed information
- **Responsive header** with navigation and cart
- **Responsive design** for mobile and desktop

### 🔄 In Development

- Product details page
- Authentication system
- Complete cart page
- Checkout and payment
- User profile
- Rating system

## 🛠️ How to Run

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run in development mode:**

   ```bash
   pnpm start
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

## ☁️ Zephyr Cloud Deployment

This application is deployed on **Zephyr Cloud**, a modern cloud platform that provides:

- **Automatic deployments** from Git repositories
- **Global CDN** for fast content delivery
- **SSL certificates** for secure connections
- **Environment management** for different deployment stages
- **Real-time monitoring** and analytics
- **Scalable infrastructure** that grows with your application

### Deployment Benefits

- **Zero-downtime deployments** with automatic rollbacks
- **Edge computing** for improved performance
- **Built-in CI/CD** pipeline integration
- **Cost-effective** pricing model
- **Developer-friendly** dashboard and CLI tools

## 🎨 Design System

### Colors

- **Green**: Primary theme (#16a34a)
- **Gray**: Neutral texts and backgrounds
- **White**: Cards and main elements

### Components

- **Button**: Buttons with primary, secondary, and outline variants
- **Card**: Containers with shadow and rounded borders
- **Input**: Input fields with focus and error states

## 📱 Responsiveness

The application is fully responsive and works on:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Feature Sliced Design Architecture

The application follows the FSD architecture with the following layers:

1. **app** - Global configuration and providers
2. **pages** - Application pages
3. **widgets** - Composite components
4. **features** - Specific features
5. **entities** - Business entities
6. **shared** - Shared code

## 📊 Mocked Data

The application uses mocked agricultural product data including:

- 8 different products
- 8 categories (vegetables, fruits, grains, herbs, dairy, eggs, honey, others)
- Producer information
- Ratings and reviews

## 🚀 Next Steps

1. Implement routing with React Router
2. Add global state with Zustand or Redux
3. Integrate with real API
4. Implement tests with Jest and React Testing Library
5. Add PWA capabilities
6. Implement notification system
7. Optimize for Zephyr Cloud performance

## 📄 License

This project is under the MIT license.
