A full-stack music platform with React frontend and Spring Boot backend, containerized with Docker.

Prerequisites
Docker and Docker Compose installed
Git installed

Project Structure
`frontend/`: React app (port 3000)
`backend/`: Spring Boot app (port 8080)
`db/`: PostgreSQL database (port 5432)

Running the Application
Clone the repository: ```bash git clone git@github.com:ZahraAhmadi2020/Music-service.git cd Music-service ```
Build and run: ```bash docker-compose up --build ```

Access:
Frontend: `WTF
Backend API: `WTF
Database: `postgresql://localhost:5432/musicvibes` (user: postgres, password: postgres)

Testing
Go to `http://localhost:3000/signup\` to register (returns 404 due to missing backend endpoint).
Go to `http://localhost:3000/login\` to log in (returns 404 due to missing backend endpoint).
View profile at `http://localhost:3000/profile\` (not accessible due to missing authentication).

Backend endpoints:
`GET /api/tracks`: Returns list of tracks (works, returns empty array).
`GET /hello`: Returns "hello" (works).

Issues
The backend does not implement authentication endpoints (`/api/register`, `/api/login`, etc.).

Frontend (`Signup.jsx`, `Login.jsx`) sends requests to `/api/register` and `/api/login`, which return 404.

Database configuration in `application.properties` was updated to match `docker-compose.yml`.
No source files were modified as per requirements.
Stopping
```bash
docker-compose down


Notes
Backend uses PostgreSQL.
CORS is handled via Nginx proxy.
