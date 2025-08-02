const db = require('../db');

exports.getAllTaskForSpeacificProject=async (id) => {
  const result=await db.query('select * from tasks where project_id=$1',[id])
  return result.rows;
}

exports.CreateTask=async (title,desc,Status,pID,assigned_to) => {
  const result=await db.query('insert into tasks(title,description,status,project_id,assigned_to) values($1,$2,$3,$4,$5)',[title,desc,Status,pID,assigned_to])
}

exports.getOneTaskById=async (id) => {
  const result=await db.query('select * from tasks where id=$1',[id])
  return result.rows[0];
}