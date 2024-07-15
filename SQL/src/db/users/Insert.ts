import { getClient } from '../../util'

type User = {
  email: string
  password: string
}
export async function insertUsers({ email, password }: User) {
  const client = await getClient()

  {  // the query is written in a way that it is vulnerable to SQL injection attacks
    // never use this ways to write queries
    // const insertUserQuery = `
    //   INSERT INTO users (email, password) VALUES('${email}', '${password}');
    //   `
    // const result = await client.query(insertUserQuery)
    // console.log(result)
    // console.log('User inserted successfully')}
  }

  // better way to write the query
  const betterInsertUserQuery = `
    INSERT INTO users (email, password) VALUES($1, $2);
    `
  const result = await client.query(betterInsertUserQuery, [email, password])

  // More secure way to write the query
  email = "test@gmail.com"
  const secureInsertUserQuery = `
    INSERT INTO users (email, password) VALUES($1, crypt($2, gen_salt('bf')));
    `
  const secureResult = await client.query(secureInsertUserQuery, [email, password])
  console.log(secureResult)

  // instead of using $1, $2, there is another way to write the query
  email = "ducktype@outlook.com"
  const secureInsertUserQuery2 = `
    INSERT INTO users (email, password) VALUES($email, crypt($password, gen_salt('bf')));
    `
  const secureResult2 = await client.query(secureInsertUserQuery2, [email, password])
  console.log(secureResult2)
}
