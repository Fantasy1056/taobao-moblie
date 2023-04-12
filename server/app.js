const express = require('express')
const connection = require('./db/mysql')
connection.connect()
const app = express()
app.all('*', function (req, res, next) {
  // 设置请求头为允许跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 设置服务器支持的所有头信息字段
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, sessionToken'
  )
  // 设置服务器支持的所有跨域请求的方法
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method.toLowerCase() === 'options') {
    res.send(200) // 让options尝试请求快速结束
  } else {
    next()
  }
})
app.get('/test', (req, res) => {
  connection.query('select * from test', (e, r) => {
    res.send({
      code: 200,
      id: r
    })
  })
})
app.get('/iconlist', (req, res) => {
  connection.query('select * from icons', (e, r) => {
    res.send({
      code: 200,
      data: r
    })
  })
})
app.get('/gongelist', (req, res) => {
  const data = []
  connection.query('select * from gonge where type="聚划算"', (e, r) => {
    data.push({
      id: 1,
      title: '聚划算',
      tag: '平品牌折扣',
      tagColor: '#ff4200',
      items: r
    })
  })
  connection.query('select * from gonge where type="天天特卖"', (e, r) => {
    data.push({
      id: 2,
      title: '天天特卖',
      tag: '1元秒杀',
      tagColor: '#ff4200',
      items: r
    })
  })
  connection.query('select * from gonge where type="有好货"', (e, r) => {
    data.push({
      id: 3,
      title: '有好货',
      tag: '好口碑',
      tagColor: '#0090ea',
      items: r
    })
  })
  connection.query('select * from gonge where type="每日好店"', (e, r) => {
    data.push({
      id: 4,
      title: '每日好店',
      tag: '头条',
      tagColor: '#ff9711',
      items: r
    })
    res.send({
      code: 200,
      data
    })
  })
})
app.get('/footerlist', (req, res) => {
  connection.query('select * from footer', (e, r) => {
    res.send({
      code: 200,
      data: r
    })
  })
})
app.listen(8088, () => {
  console.log('server is active on localhost:8088')
})
