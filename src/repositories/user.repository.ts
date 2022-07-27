import db from '../db'
import { User } from '../models/user.model'

function UserRepository() {

 async function findAllUsers(): Promise<User[]> {
    const query = `
      SELECT uuid, username
      FROM application_user
    `;

   const result = await db.query<User>(query)
   const rows = result.rows
    return rows || []
  }

 
  return ({
    findAllUsers
  })
}

export default UserRepository();