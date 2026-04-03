# H&M Clone — Full Stack Project

## Project Structure
```
hm-clone/
├── schema.sql              ← Run this in PostgreSQL first
├── backend/                ← Spring Boot (Java 17)
│   ├── pom.xml
│   └── src/main/...
└── frontend/               ← React + Vite + Tailwind
    ├── package.json
    └── src/...
```

---

## 🚀 Getting Started

### Step 1 — Set up the database
1. Install PostgreSQL (https://www.postgresql.org/download/)
2. Open pgAdmin or psql and create a database called `hmclone`
3. Run `schema.sql` to create tables and insert sample data

### Step 2 — Start the Spring Boot backend
```bash
cd backend
# Make sure Java 17 is installed
./mvnw spring-boot:run
```
The server runs on http://localhost:8080

### Step 3 — Start the React frontend
```bash
cd frontend
npm install
npm run dev
```
The app runs on http://localhost:5173

---

## 📡 API Endpoints

| Method | URL                          | Description            | Auth? |
|--------|------------------------------|------------------------|-------|
| GET    | /api/products                | List all products      | No    |
| GET    | /api/products/:id            | Get product by ID      | No    |
| GET    | /api/products/category/:slug | Filter by category     | No    |
| GET    | /api/products/search?q=...   | Search products        | No    |
| POST   | /api/auth/register           | Create account         | No    |
| POST   | /api/auth/login              | Login → get JWT token  | No    |
| GET    | /api/orders/user/:userId     | Get user's orders      | Yes   |
| POST   | /api/orders                  | Place a new order      | Yes   |

---

## 🔮 Next Steps (after the basics work)

- Add product images (upload to Cloudinary or AWS S3)
- Add a size selector on the product detail page
- Build an Admin panel to add/edit/delete products
- Implement Stripe for real payments
- Deploy: backend on Railway/Render, frontend on Vercel

---

## 🛠 Tools Used
- **React 18** + **Vite** — fast dev server and bundler
- **Tailwind CSS** — utility-first styling
- **React Router v6** — client-side routing
- **Axios** — API calls
- **Spring Boot 3** — REST API framework
- **Spring Security + JWT** — authentication
- **Spring Data JPA** — database layer
- **PostgreSQL** — relational database
