# 💪 Iron Forge Gym Website

A professional, full-stack gym website built with **React.js** (frontend) and **Node.js + Express** (backend). Includes image/video gallery, contact form with email functionality, services/pricing, and location details.

## Features

- 🏋️ **Hero Section** - Animated landing with stats and CTAs
- 📍 **About Us** - Gym info, features, and address
- 🖼️ **Gallery** - Image showcase + video section
- 💰 **Services & Pricing** - Membership plan cards
- ✉️ **Contact Form** - Sends emails via Node.js backend (Nodemailer)
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- 🎨 **Modern Design** - Dark theme with orange accent

## Project Structure

```
gym-website/
├── frontend/                 # React.js app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── backend/                  # Express.js server
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### 1. Install Backend Dependencies

```bash
cd gym-website/backend
npm install
```

### 2. Configure Email (Optional)

Edit `backend/.env` with your Gmail credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
PORT=5000
```

> **Note:** For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833).

### 3. Start the Backend Server

```bash
cd gym-website/backend
npm start
```

The server runs on `http://localhost:5000`.

### 4. Install Frontend Dependencies

```bash
cd gym-website/frontend
npm install
```

### 5. Start the Frontend

```bash
cd gym-website/frontend
npm start
```

The frontend runs on `http://localhost:3000`.

### Usage

- **Contact Form:** Fill out the form and submit — it sends an email via the backend.
- **Gallery:** Browse images and the video placeholder section.
- **Services:** View membership plans and pricing.
- **Navigation:** Use the navbar to jump between sections.

## Customization

- **Replace placeholder content:** Edit the component files in `src/components/`
- **Change colors:** Update CSS variables in `src/App.css` (`:root`)
- **Add real images:** Replace emoji placeholders with actual `<img>` tags
- **Add real videos:** Embed YouTube videos in the Gallery component
- **Update address/info:** Edit the contact details in `Contact.jsx` and `Footer.jsx`

## Deployment

### Build Frontend for Production

```bash
cd gym-website/frontend
npm run build
```

Serve the `build/` folder with the Express backend or deploy to Vercel/Netlify.

## Tech Stack

- **Frontend:** React 18, CSS3
- **Backend:** Node.js, Express, Nodemailer
- **Email:** Nodemailer with Gmail SMTP
