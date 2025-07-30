const db = require('../db');

exports.getNumberOfProject=async (id) => {
  
  const result=await db.query('select count(*) from projects where owner_id=$1',[id]);
  return result.rows[0];

}

exports.getAllProject=async()=>{
  const result=await db.query('select * from projects')
  return result.rows
}