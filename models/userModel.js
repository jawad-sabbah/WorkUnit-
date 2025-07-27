const db = require('../db');


exports.createUser = async (username,email,password) => {
  const result=await db.query("insert into users (username,email,password) values($1,$2,$3) RETURNING *",[username,email,password])

  return result.rows[0];
}

exports.findByUserName=async (username) => {
  const result=await db.query("select * from users where username=$1",[username]);

  return result.rows[0];
}