const express = require('express');
const router = express.Router();
const { check, validationResult,body } = require('express-validator/check');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/first-form",(req,res,next)=>{
  res.render('first-form');
})
router.post("/first-form",[
	body('email').isEmail().normalizeEmail(),
	body('real_name').trim().escape()
	],(req,res,next)=>{
	const errors = validationResult(req);
	const {email,real_name} = req.body;
	if(email && real_name && errors.isEmpty()){
		res.redirect("/first-form");
	}else{
		res.sendStatus(400);
	}
})

module.exports = router;
