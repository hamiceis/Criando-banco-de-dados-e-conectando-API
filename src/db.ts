import { Pool } from 'pg'
//Precisa colocar o link do seu banco de dados 
const connectionString = 'postgres://admin:password-Tb6ttUvVRFXVllSE6-@kesavan.db.elephantsql.com/qpmxtxil' 

const db = new Pool({ connectionString })  

export default db;