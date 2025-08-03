const db = require('../db');

exports.getAllTaskForSpeacificProject=async (id) => {
  const result=await db.query('select * from tasks where project_id=$1 order by id ASC',[id])
  return result.rows;
}

exports.CreateTask=async (title,desc,Status,pID,assigned_to) => {
  const result=await db.query('insert into tasks(title,description,status,project_id,assigned_to) values($1,$2,$3,$4,$5)',[title,desc,Status,pID,assigned_to])
}

exports.getOneTaskById=async (id) => {
  const result=await db.query('select * from tasks where id=$1',[id])
  return result.rows[0];
}

exports.updateTask=async (title,desc,id) => {
  const result=await db.query('update tasks set title=$1,description=$2 where id=$3 ',[title,desc,id])
}

exports.updateStatus=async (Status,id) => {
  const result=await db.query('update tasks set status=$1 where id=$2',[Status,id])
  
}

exports.getNumberOfTasks=async (id) => {
  const result=await db.query('select count(*) from tasks where assigned_to=$1 and status=$2 ',[id,'Completed'])
   return result.rows[0];
}