import { getClient } from "../../util"

export async function createUsers() {
  const client = await getClient()

  const createTableQuery = `
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );`
  console.log('Users table creation is successfully')
  let result = await client.query(createTableQuery)
  console.log(result)

}
