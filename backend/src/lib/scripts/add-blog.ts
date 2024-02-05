import Database from "bun:sqlite";
import { addBlogsTable } from "../../routes/blogs/blogs";
import { addNotesTable } from "../../routes/notes/notes";

const filename = process.argv.slice(2).join(" ");
if (!filename) throw new Error("no filename provided");
console.log(`adding blog ${filename} to database`);

const date = Date.now();
const currentPath = import.meta.dir;
const path =
  currentPath.split("backend")[0] + "backend/assets/blog-markdown/" + filename;
const file = Bun.file(path);
let content = await file.text();

const title = filename.split(".")[0];

const db = new Database("whyYouLittle.db", { create: true });


addBlogsTable(db);
addNotesTable(db);

content = content.replace(/"/g, '\"\"');
content = content.replace(/'/g, '\'\'');

console.log(content);

const query = db.prepare(
  `INSERT INTO blogs VALUES ("${title}", "${date}", "${content}");`
);
query.get();