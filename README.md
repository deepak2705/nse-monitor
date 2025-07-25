# NSE Indian Stock Monitor (Frontend + Backend)

## 🔧 Setup Instructions

### Frontend (GitHub Pages)
1. Push this folder to GitHub.
2. Enable GitHub Pages (Settings > Pages > source: root)
3. Update `API_BASE` in `index.html` to your backend Render URL.

### Backend (Render Deployment)
1. Go to https://render.com and create a new Web Service.
2. Set:
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `node server.js`
3. After deployment, note your Render URL.
4. Replace `API_BASE` in HTML with that URL.

Example: `const API_BASE = 'https://nse-api-xyz.onrender.com';`
