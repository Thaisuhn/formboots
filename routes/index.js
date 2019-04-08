const express = require('express');
const router = express.Router();
const { check, validationResult,body } = require('express-validator/check');
const {add_user,view_users} = require("../db");

router.get('/', async(req, res, next)=> {
	try{
		const results = await view_users();
		  res.render('index', {results});
	}catch(e){
		console.log(e);
		const results = null;
	    res.render('index', {results});
	}
	});

router.get("/first-form",(req,res,next)=>{
  res.render('first-form');
	})

router.post("/first-form",[
	body('email').isEmail().normalizeEmail(),
	body('real_name').trim().escape()
	],async(req,res,next)=>{
	const errors = validationResult(req);
	const {email,real_name} = req.body;
	if(email && real_name && errors.isEmpty()){
			try{
				await add_user(email,real_name);
				res.redirect("/");
			}catch(e){
				console.log(e);
				res.redirect("/first-form");
			}
	}else{
		res.sendStatus(400);
	}
	})

module.exports = router;
