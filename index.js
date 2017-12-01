var users = require('./users');
var app = require('express')();
var bodyParser = require('body-parser');
var port = process.env.PORT || 7777;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//bank
app.get('/contacts', function(req,res){
   res.json(users.findAll());
});
//bank
app.get('/contacts/id/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

//bank
app.get('/contacts/name/:name',function(req,res){
    var name = req.params.name;
    res.json(users.findByName(name));
});

app.delete('/contacts/:id',function(req,res){
    let del_id = req.params.id;
    res.json(users.DeleteID(del_id));
    console.log("Just Delete ID:" + del_id);
});
app.listen(port,function(){
    console.log("Staring at port" + port);
})













