create table users(
	id serial PRIMARY KEY,
	email text not null,
	real_name text not null
);