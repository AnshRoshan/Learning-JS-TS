import postgres from 'postgres'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5431,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
})

async function getPgVersion() {
  const result = await sql`select version()`
  console.log(result)
}

getPgVersion()
