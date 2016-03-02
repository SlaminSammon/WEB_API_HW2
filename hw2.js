var express = require('express')
var app = express();
//access for all get requests
app.get('/gets', function (req, res) {
  //Create an array that will hold all
  //query parameters and headers
  var array = {};
  //Pass all the headers and parameters into the array
  for(var elem in req.headers) array[elem] = req.headers[elem];
  for(var elem in req.query) array[elem] = req.query[elem];
  //If no parameters or headers were passed let the user know
  if(array == {}){
  	res.send("No query parameters or headers passed.");
  }
  else{
  	res.send(array);
  }
});
//The exact same function as gets just for posts
app.post('/posts', function (req, res) {
  var array = {};
  for(var elem in req.headers) array[elem] = req.headers[elem]
  for(var elem in req.query) array[elem] = req.query[elem]
  if(array == {}){
  	res.send("No query parameters or headers passed.")
  }
  else{
  	res.send(array)
  }
});
//the exact same function for gets just for puts
app.put('/puts', function (req, res) {
  var array = {};
  for(var elem in req.headers) array[elem] = req.headers[elem]
  for(var elem in req.query) array[elem] = req.query[elem]
  if(array == {}){
  	res.send("No query parameters or headers passed.")
  }
  else{
  	res.send(array)
  }
});
//The exact same funtion for gets just for deletes
app.delete('/deletes', function (req, res) {
  var array = {};
  for(var elem in req.headers) array[elem] = req.headers[elem]
  for(var elem in req.query) array[elem] = req.query[elem]
  if(array == {}){
  	res.send("No query parameters or headers passed.")
  }
  else{
  	res.send(array)
  }
});
//Listen function
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});