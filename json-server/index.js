import jsonServer from "json-server";
import fs from "fs";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares);

// Add custom routes before JSON Server router
// server.get("/echo", (req, res) => {
//     res.jsonp(req.query);
// });

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//     if (req.method === "POST") {
//         req.body.createdAt = Date.now();
//     }
//     // Continue to JSON Server router
//     next();
// });

// server.use(jsonServer.defaults());
// server.use(middlewares);

// Use default router

server.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
        );
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: "User not found" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "AUTH ERROR" });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log("server is running on 8000 port");
});
