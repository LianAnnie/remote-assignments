const express = require('express');
const app = express();
const port = 3000;

//告訴Express要使用哪個模板引擎
app.set('view engine','pug');

//請求中間件(body parser解析器)
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hello My Server!');
});

app.get('/getData',(req, res) => {
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});