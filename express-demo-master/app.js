const express = require('express')
const pug = require('pug')

const app = express()

let rawList=[
  {id: 1, name: "朱胜利" , sex: "boy", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390004" },
  {id: 2, name: "王光宇" , sex: "boy", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390011"},
  {id: 3, name: "刘信伶" , sex: "girl", xueyuan: "软件学院" , xibie: "软件工程" , num:"3117370031"},
  {id: 4, name: "张银书" , sex: "girl", xueyuan: "软件学院" , xibie: "软件工程" , num:"3117370039"},
  {id: 5, name: "万寒月" , sex: "girl", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390006"},
  {id: 6, name: "朱博迪" , sex: "boy", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390008" }
]

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/list', function(req, res) {
  res.render('list', {list: rawList})
})


app.get('/delete/:id',function(req,res){
  let id=parseInt(req.params.id);
  rawList=rawList.filter(function(data){
    return data.id !== id
  })
  res.redirect("/list")
})

app.get('/add',function(req,res){
  res.render('add',{addList:
    ['']
  })
})

app.get('/submit/:id  :name :sex :xueyuan :xibie :num',function(req,res){
  let id=parseInt(req.params.id);
  rawList=rawList.filter(function(data){
    return data.id=id,data.name=name,data.sex=sex,data.xueyuan=xueyuan,data.xibie=xibie,data.num=num
  })
  res.redirect("/list")
})

app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})