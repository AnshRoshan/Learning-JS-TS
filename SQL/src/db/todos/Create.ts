import { getClient, sql } from '../../util'

export async function createTodos() {
    const client = await getClient()
    const createTodosQuery = `
      CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
      );`

    console.log('Todos table creation is successfully')
    // const result = await client.query(createTodosQuery)

    const result = await sql`${createTodosQuery}`
    console.log(result)
}
