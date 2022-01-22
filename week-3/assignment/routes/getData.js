const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
  const { number } = req.query;
  let result = 0;
  let integer = parseInt(number,10);
  let formula =[];
  let msg;
  if (!number){
    msg = 'Lack of Parameter';
  }else if(isNaN(integer)){
    msg = 'Wrong Parameter';
  }else{
    for(let i=1; i<=number; i++){
      result += i;
      formula.push(i);
    }
    formula = formula.join('+')
    msg = `<h1>${result}</h1><p>=${formula}</p>`;
  }
  res.send(`${msg}`);
});

module.exports = router;