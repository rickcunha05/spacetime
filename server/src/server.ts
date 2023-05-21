import fastify from "fastify";
import jtw from "@fastify/jwt";
import cors from "@fastify/cors";
import "dotenv/config";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";

const app = fastify();

app.register(cors, {
  // origin: ['http://localhost:3030', 'url de produção'],
  origin: true,
});
app.register(jtw, {
  secret: "spacetime",
});

app.register(memoriesRoutes);
app.register(authRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP SERVER RUNNING ON http://localhost:3333");
  });
