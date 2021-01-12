const mongoose = require("mongoose");


  

  // mongoose.connect("mongodb+srv://gnbkb:JV4stock@mangad.ovvm2.mongodb.net/Mangad?retryWrites=true&w=majority");
  mongoose.connect("mongodb://gnbkb:JV4stock@mangad-shard-00-00.ovvm2.mongodb.net:27017,mangad-shard-00-01.ovvm2.mongodb.net:27017,mangad-shard-00-02.ovvm2.mongodb.net:27017/Mangad?ssl=true&replicaSet=atlas-tnopp0-shard-0&authSource=admin&retryWrites=true&w=majority")


mongoose.Promise = Promise;

module.exports = mongoose;
