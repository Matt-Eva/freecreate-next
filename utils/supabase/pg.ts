import postgres from "postgres";

const conn = process.env.PG_URI;
if (!conn) {
  throw new Error("PG_URI is not defined");
}

const sql = postgres(conn);

export default sql;
