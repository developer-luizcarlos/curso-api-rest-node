import express, { Express, Request, Response } from 'express';

const server: Express = express();

server.get("/", (req: Request, res: Response) => {
  return res.send("Olá, Developer!");
});

export { server };