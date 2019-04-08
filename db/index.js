const { Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgresql://localhost:5432/users"
const ssl = process.env.SSL_TRUE === "true"
const pool = new Pool({
	connectionString,
	ssl
});

module.exports = {
	"add_user":async function(email,real_name){
		const { rows } = await pool.query('insert into users (email,real_name) values ($1,$2) returning *',[email,real_name])
		return rows[0];
	},
	"view_users":async function(){
		const { rows } = await pool.query("select * from users");
		return rows;
	}
}