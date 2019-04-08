let db = require("../db");
let chai = require("chai");
let {should,assert} = chai;
should = should();

describe("insert name in db", ()=>{
	it("should add user data and return it", async()=>{
		user = {
			email: "test@example.com",
			real_name: "No Name"
		}
		const result = await db.add_user(user.email,user.real_name);
		assert.equal(user.email,result.email);
		assert.equal(user.real_name,result.real_name);
	});
})

describe("insert name in db", ()=>{
	it("should return all data with the correct keys",async()=>{
		const results = await db.view_users();
		results.forEach((result)=>{
			assert.hasAllKeys(result,["email","real_name"]);
		})
	});
})