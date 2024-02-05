import Database from "bun:sqlite";

const db = new Database("whyYouLittle.db", { create: true });

console.log("emptying blogs table");
const query = db.prepare("DELETE FROM blogs;");
query.get();
