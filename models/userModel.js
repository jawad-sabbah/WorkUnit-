const db = require('../db');


exports.createUser = async (username,email,password) => {
  const result=await db.query("insert into users (username,email,password) values($1,$2,$3) RETURNING *",[username,email,password])

  return result.rows[0];
}

exports.findByUserName=async (username) => {
  const result=await db.query("select * from users where username=$1",[username]);

  return result.rows[0];
}

exports.findById=async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
}

exports.getAllUsers=async () => {
  const result=await db.query("select * from users order by id ASC")
  return result.rows
}



exports.updateProfile=async (id,username,email) => {
  
  const result = await db.query(
    'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
    [username, email, id]
  );
   
   return result.rows[0];
}