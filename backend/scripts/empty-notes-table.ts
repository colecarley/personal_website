import Database from "bun:sqlite";

const db = new Database("whyYouLittle.db", { create: true });

console.log("emptying notes table");
const query = db.prepare("DELETE FROM notes;");
query.get();
