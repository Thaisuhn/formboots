var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/first-form",(req,res,next)=>{
	const {username,password} = req.body;
	if(username && password){
		res.status(200).end();
	}
	res.status(400).end();
})

module.exports = router;
