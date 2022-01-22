const express = require('express');
const app = express();
const port = 3000;


//加入靜態資料
app.use('/',express.static('public'));


//JavaScript文件預設會使用index.js所以不用再特別指定(但其他文件就需要)
const mainRoutes = require('./routes');
const dataRoutes = require('./routes/getData')
//運行
app.use(mainRoutes);
app.use('/getData', dataRoutes);


app.use((req, res, next) =>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});