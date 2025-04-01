import express from "express";
import { api } from "./api.ts";

const app = express();
app.use(api);

app.get("*", (req, res) => res.send(`api Server - path: "${req.path}"`))
app.listen(3002, () => console.log("Server started"));
