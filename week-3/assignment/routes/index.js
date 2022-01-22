const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello My Server!');
});

router.get('/myName', (req, res) => {
  const name = req.cookies.username;
  if (name){
    res.render('welcome',{name:name});
  }else{
    res.render('hello');
  }
});

router.post('/myName',(req, res) => {
  let username = req.body.username;
  res.cookie('username', username);
  res.redirect(`/trackName?name=${username}`);
})

router.get('/trackName',(req,res) =>{
  const name = req.cookies.username;
  if (name){
    res.redirect('/myName');
  }
})

router.post('/goodbye',(req,res) => {
  res.clearCookie('username',{ path: '/'});
  res.redirect('/myName');
})

module.exports = router;