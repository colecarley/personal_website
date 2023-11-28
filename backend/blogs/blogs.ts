import Database from "bun:sqlite";

export function addBlogsTable(db: Database) {
  const addBlogs = db.query(
    "CREATE TABLE IF NOT EXISTS blogs (title TEXT, date TEXT, content TEXT);"
  );
  addBlogs.get();
}

export async function blogs(req: Request, db: Database): Promise<Response> {
  if (req.method === "POST") {
    const body = await req.json();
    if (body?.title) {
      const query = db.prepare(
        `SELECT * FROM blogs WHERE title='${body.title}'`
      );

      const blog = query.get();
      return new Response(JSON.stringify(blog), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    throw new Error("Invalid request");
  }
  const query = db.prepare("SELECT * FROM blogs;");
  const previews = query.all();

  return new Response(JSON.stringify(previews), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
