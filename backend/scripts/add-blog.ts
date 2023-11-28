import Database from "bun:sqlite";
import { addBlogsTable } from "../blogs/blogs";
import { addNotesTable } from "../notes/notes";

const filename = process.argv[2];
if (!filename) throw new Error("no filename provided");
console.log(`adding blog ${filename} to database`);

const date = Date.now();
const currentPath = import.meta.dir;
const path =
  currentPath.split("backend")[0] + "backend/assets/blog-markdown/" + filename;
const file = Bun.file(path);
const content = await file.text();

const title = filename.split(".")[0];

const db = new Database("whyYouLittle.db", { create: true });

addBlogsTable(db);
addNotesTable(db);

const query = db.prepare(
  `INSERT INTO blogs VALUES ('${title}', '${date}', '${content}');`
);
query.get();
