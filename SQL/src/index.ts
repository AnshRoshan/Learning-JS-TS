import { createTodos, insertUsers, createUsers } from './db'

createTodos()
createUsers()
insertUsers({ email: 'ansh@test.com', password: 'securepassword' })
insertUsers({ email: 'anshroshan@test.com', password: 'superSecurePassword' })
