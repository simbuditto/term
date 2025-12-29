# Term Insurance Website - Deployment Guide

## 🎯 Overview
This is a complete React-based term insurance website with 11 pages, smooth animations, and an insurance premium calculator. Built with React, Tailwind CSS, Shadcn/UI, and Framer Motion.

## 📁 Project Structure
```
frontend/
├── src/
│   ├── components/         # Navigation and UI components
│   │   ├── Navigation.jsx
│   │   └── ui/            # Shadcn UI components
│   ├── pages/             # All 11 pages
│   │   ├── HomePage.jsx
│   │   ├── ApplicationProcess.jsx
│   │   ├── ClaimsProcess.jsx
│   │   ├── Exclusions.jsx
│   │   ├── SelectPlan.jsx
│   │   ├── Riders.jsx
│   │   ├── RiderWaiverPremium.jsx
│   │   ├── RiderCriticalIllness.jsx
│   │   ├── RiderDisability.jsx
│   │   ├── WhyDitto.jsx
│   │   ├── Nominees.jsx
│   │   ├── FAQ.jsx
│   │   ├── MWPA.jsx
│   │   └── ControlPanel.jsx
│   ├── App.js             # Main app with routing
│   ├── index.css          # Design system & styles
│   └── index.js           # Entry point
├── public/
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── .env                   # Environment variables
```

## 🚀 Hosting Options

### **Option 1: Host on Your Own Server**

#### Prerequisites:
- Node.js 16+ installed
- npm or yarn package manager

#### Steps:
1. **Extract the code:**
   ```bash
   tar -xzf term-insurance-website.tar.gz
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Build for production:**
   ```bash
   yarn build
   # or
   npm run build
   ```

4. **Deploy the `build` folder:**
   - Copy the `build/` folder to your web server
   - Configure your web server (Apache/Nginx) to serve the static files
   - Set up proper routing for React Router

#### Nginx Configuration Example:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/term-insurance/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache Configuration (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### **Option 2: Deploy to Cloud Platforms**

#### **Vercel (Recommended - Easiest)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```
- Vercel automatically detects React and configures everything
- Free tier available
- Custom domain support
- Automatic SSL

#### **Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
cd frontend
npm run build
netlify deploy --prod --dir=build
```

#### **AWS S3 + CloudFront**
```bash
# Build the app
npm run build

# Upload to S3
aws s3 sync build/ s3://your-bucket-name

# Configure CloudFront for React Router
```

#### **GitHub Pages**
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
```
Then:
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

---

### **Option 3: Docker Deployment**

Create a `Dockerfile`:
```dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Deploy:
```bash
docker build -t term-insurance-website .
docker run -p 80:80 term-insurance-website
```

---

## 🎨 Customization Guide

### **Editing Content**
All content is modular and easy to edit:

1. **Page Content**: Edit files in `src/pages/`
   - Each page has data arrays at the top (steps, cards, FAQs, etc.)
   - Simply modify the text in these arrays

2. **Design System**: Edit `src/index.css`
   - Color scheme: Update CSS variables in `:root`
   - Fonts: Modify Google Fonts import
   - Spacing, shadows, animations: All in CSS custom properties

3. **Navigation**: Edit `src/components/Navigation.jsx`
   - Modify the `navItems` array to add/remove menu items

### **Example - Changing Colors:**
In `src/index.css`:
```css
:root {
  --primary: 210 60% 45%;     /* Change main blue color */
  --secondary: 160 50% 45%;   /* Change teal accent */
  --accent: 25 85% 55%;       /* Change orange accent */
}
```

### **Example - Adding a New Page:**
1. Create new file: `src/pages/NewPage.jsx`
2. Add route in `src/App.js`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add to navigation in `src/components/Navigation.jsx`

---

## 🔧 Development Mode

Run locally for development:
```bash
cd frontend
yarn install
yarn start
# Opens at http://localhost:3000
```

---

## 📦 Dependencies

### Core:
- React 19
- React Router 7
- Framer Motion (animations)
- Tailwind CSS (styling)
- Shadcn/UI (components)
- Lucide React (icons)

### All dependencies are listed in `package.json`

---

## 🌐 Domain Setup

### Custom Domain Configuration:
1. Build and deploy your site
2. Point your domain's DNS to your hosting provider:
   - **Vercel/Netlify**: Add CNAME record
   - **Own Server**: Add A record to server IP
3. Configure SSL certificate (Let's Encrypt free SSL)

---

## 🔒 Adding Authentication (Optional)

If you want to add Google SSO or other authentication:

1. **Frontend**: Install auth library
   ```bash
   npm install @react-oauth/google
   ```

2. **Add Google OAuth**: 
   - Get credentials from Google Cloud Console
   - Wrap app with GoogleOAuthProvider
   - Add login/logout functionality

3. **Backend (if needed)**:
   - Set up FastAPI with OAuth
   - Add protected endpoints
   - Manage user sessions

---

## 🎯 Performance Optimization

The site is already optimized with:
- ✅ Code splitting with React Router
- ✅ Lazy loading of components
- ✅ Optimized images
- ✅ Minified CSS/JS in production build
- ✅ Modern build tools (Create React App)

### Additional Optimizations:
1. **Enable Compression**: Gzip/Brotli on your server
2. **CDN**: Use CloudFlare or similar for global distribution
3. **Caching**: Set proper cache headers for static assets

---

## 📊 Analytics & Monitoring

Add Google Analytics or similar:
```bash
npm install react-ga4
```

In `src/index.js`:
```javascript
import ReactGA from 'react-ga4';
ReactGA.initialize('YOUR-GA-ID');
```

---

## 🐛 Troubleshooting

### Build Errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues:
- Ensure your server redirects all routes to index.html
- Check Nginx/Apache configuration

### Styling Issues:
- Ensure Tailwind is properly configured
- Check that index.css is imported in index.js

---

## 📞 Support

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Shadcn/UI: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion

---

## 📄 License

This project code is yours to use, modify, and deploy as needed.

---

## 🚀 Quick Start Checklist

- [ ] Extract the code
- [ ] Run `npm install`
- [ ] Run `npm start` to test locally
- [ ] Run `npm run build` for production
- [ ] Deploy build folder to your hosting
- [ ] Configure domain and SSL
- [ ] Test all pages and calculator
- [ ] Add analytics (optional)
- [ ] Add authentication (optional)

---

**Your website is production-ready and can be hosted anywhere!**
