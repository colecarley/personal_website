import { Database } from "bun:sqlite";
import { addNotesTable, notes } from "./notes/notes";
import { addBlogsTable, blogs } from "./blogs/blogs";

console.log("Hello from backend!");

Bun.serve({
  port: 1701,
  async fetch(req: Request) {
    const url = new URL(req.url);

    let res = new Response("Bun!");
    const db = new Database("whyYouLittle.db", { create: true });

    addBlogsTable(db);
    addNotesTable(db);

    if (req.method !== "OPTIONS") {
      switch (url.pathname) {
        case "/notes":
          res = await notes(req, db);
          break;
        case "/blogs":
          res = await blogs(req, db);
          break;
        default:
          break;
      }
    }
    addCorsHeaders(res);
    return res;
  },
});

function addCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.headers.set("Access-Control-Allow-Headers", "*");
}
