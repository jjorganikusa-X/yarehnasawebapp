# PT ESE YAREHNASA - Corporate Website

Premium ginger supplier website from the Spice Islands (Maluku, Indonesia).

## 🚀 Features

- **5 Pages**: Home, About Us, Market & Products, Sustainability, Investor Relations
- **Bilingual Support**: Language switcher (ID, EN, JP, NL, DE)
- **Modern Design**: Corporate agri-tech aesthetic with gradient backgrounds
- **Responsive**: Fully mobile-friendly
- **Performance**: Optimized with Next.js 15 and Server Components
- **File Upload API**: Integrated upload functionality

## 📁 Pages

1. **Home** (`/`) - Hero, company overview, product showcase
2. **About Us** (`/about-us`) - Company history, values, team
3. **Market & Products** (`/market-and-products`) - Product details, market analysis
4. **Sustainability** (`/sustainability`) - Regenerative farming, field photos
5. **Investor Relations** (`/investor-relations`) - Financial info, contact

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS + Custom Gradients
- **Icons**: Phosphor Icons (CDN)
- **Fonts**: Inter, Merriweather, Satoshi, Telma (CDN)
- **Animations**: Framer Motion + CSS Animations
- **State Management**: Zustand (client-side)
- **Type Safety**: TypeScript

## 🎨 Design System

### Colors
- **Primary Blue**: `#1e40af` (yareh-blue)
- **Primary Green**: `#059669` (yareh-green)
- **Dark Blue**: `#0d142d` (yareh-darkBlue)

### Typography
- **Headings**: Telma (Serif)
- **Body**: Satoshi (Sans-serif)
- **UI**: Inter

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `zustand` - State management
- `lucide-react` - Additional icons
- `clsx` & `tailwind-merge` - Utility classes
- `date-fns` - Date formatting
- `@neondatabase/serverless` - Database client (optional)

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Add any API keys or environment-specific variables here
# DATABASE_URL=your_database_url_here
```

## 📝 Custom CSS Classes

- `.glass-nav` - Glassmorphism navigation
- `.text-glow` - Text glow effect
- `.animate-fade-in-up` - Fade in animation
- `.animate-bounce` - Bounce animation

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

## 📸 Image Optimization

Images are loaded from:
- AppGen CDN (`app-cdn.appgen.com`) - Uploaded assets
- External URLs with proper Next.js Image optimization

## 🐛 Known Issues

- **Hydration Warning**: Browser environment injects `__gchrome_remoteframetoken` attribute in preview mode. This is expected and won't affect production. The `suppressHydrationWarning` prop is added to handle this.

## 📄 License

© 2024 PT ESE YAREHNASA. All rights reserved.

## 📧 Contact

- **Email**: Yarehnasa@gmail.com
- **WhatsApp**: +62 821 2285 4195
- **Location**: Hatusua, Maluku, Indonesia
