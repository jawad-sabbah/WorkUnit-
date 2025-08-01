const db = require('../db');

exports.getNumberOfProject=async (id) => {
  
  const result=await db.query('select count(*) from projects where owner_id=$1',[id]);
  return result.rows[0];

}

exports.getAllProject=async()=>{
  const result = await db.query(`
    SELECT 
      projects.*, 
      users.username AS owner_username
    FROM projects
    JOIN users ON projects.owner_id = users.id
    ORDER BY projects.created_at DESC
  `); // we did join to get name of user and render it as owner proj not his id
  
  return result.rows
}

exports.getProjectById=async (id) => {
  const result=await db.query('select * from projects where id=$1',[id])
  return result.rows[0]
}
exports.updateProjectByAdmin=async (id,title,desc) => {
   const result=await db.query('update projects set name=$1,description=$2 where id=$3 returning *',[title,desc,id])
}

exports.RemoveProjectById=async (id) => {
   const result=await db.query('delete from projects where id=$1',[id]);
}