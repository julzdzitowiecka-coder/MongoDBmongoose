const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:nEenYBcxPvaVkDitRZfCePco@172.21.173.210:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
    console.log(data);
    mongoose.connection.close()
})
