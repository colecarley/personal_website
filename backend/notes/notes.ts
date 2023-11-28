import Database from "bun:sqlite";

export function addNotesTable(db: Database) {
  const addNotes = db.query(
    "CREATE TABLE IF NOT EXISTS blogs (title TEXT, date TEXT, content TEXT);"
  );
  addNotes.get();
}

export async function notes(req: Request, db: Database): Promise<Response> {
  if (req.method === "POST") {
    const body = await req.json();
    if (body?.name && body?.content) {
      const query = db.prepare(
        `INSERT INTO notes (name, date, content) VALUES("${
          body.name
        }", "${Date.now()}", "${body.content}");`
      );
      const note = query.get();

      return new Response(JSON.stringify(note), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    throw new Error("Invalid request");
  }
  const query = db.prepare("SELECT * FROM notes;");
  const notes = query.all();

  return new Response(JSON.stringify(notes), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
