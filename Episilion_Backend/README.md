# Express JSON Backend

A simple Node.js + Express API that reads data from a local hostel database file and exposes it via REST endpoints.

## Setup

```bash
npm install
npm start          # production
npm run dev        # development (auto-restart with nodemon)
```

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/data` | Return entire JSON file |
| GET | `/api/users` | Return all users |
| GET | `/api/users/:id` | Return a single user |
| GET | `/api/products` | Return all products |
| GET | `/api/products/:id` | Return a single product |

## Example Frontend Fetch

```javascript
// Fetch all users
fetch("http://localhost:5000/api/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

## Adding Your Own Data

Edit `hostel_data.json` and add new top-level keys. Then add matching routes in `server.js`.
