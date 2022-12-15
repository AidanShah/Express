const express = require('express')
const app = express()
let f = function (req, res) {
    res.send('Hello World')
  }
app.get('/', f)
app.use(express.json())
app.get("/array", (req,res)=>{console.log(req.body)
res.send(req.body)})
const add = function(n)
{const banana = (accumulator, currentValue) => {
  return accumulator + currentValue
}
 return [n.reduce(banana)]
}
const product = function(n)
{const apple = (accumulator, currentValue) => {
  return accumulator * currentValue
}
 return [n.reduce(apple)]
}
const evens = function(nums)
{return nums.filter(num=>num%2==0)
}
const min = function(n)
{const coconut = (accumulator, currentValue) => {
  if(accumulator>currentValue){
    accumulator=currentValue
  }
  return accumulator
}
 return [n.reduce(coconut)]
}
const max = function(n)
{const durian = (accumulator, currentValue) => {
  if(accumulator<currentValue){
    accumulator=currentValue
  }
  return accumulator
}
 return [n.reduce(durian)]
}
const sort = function(n,ascending){
  array = []
  santa  = n.length
  for(i=0; i<santa; i++){
    array.push(max(n))
    n.splice(n.indexOf(max(n)), 1)
    console.log(array)
    console.log(n)
  }
  if(ascending=true){
    array = array.reverse()
  }
  return array
}
const matchTarget = function(nums, target) {
  const map1 = new Map()
  output = []
  for(i=0;i<nums.length; i++){
    if(map1.get(target-nums[i])>=0){
      output.push(map1.get(target-nums[i]),i)
      return output
    }
    map1.set(nums[i],i)
  }
}
app.get('/add',(req,res) => {res.send(add(req.body["array"]))})
app.get('/max',(req,res) => {res.send(max(req.body["array"]))})
app.get('/min',(req,res) => {res.send(min(req.body["array"]))})
app.get('/evens',(req,res) => {res.send(evens(req.body["array"]))})
app.get('/sort',(req,res) => {res.send(sort(req.body["array"],req.body["ascending"]))})
app.get('/product',(req,res) => {res.send(product(req.body["array"]))})
app.get('/target',(req,res) => {res.send(matchTarget(req.body["array"],req.body["target"]))})
console.log("why")
app.listen(3000)