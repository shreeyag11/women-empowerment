let usersDB = require("../models/user");

var mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var usersSchema = new mongoose.Schema({
  user_id: String,
  password: String,
  user_fname: String,
  user_lname: String,
  email: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String, 
  country: String,
});


users = mongoose.model('usersData', usersSchema);

// addUser = async function(){
//   return new Promise((resolve, reject)=>{
//     new users({user_id: 'sgupta42',
//     user_fname: 'Shreeya',
//     user_lname: 'Gupta',
//     email: 'sgupta42@uncc.edu',
//     address1: '9544 University Terrace Drive',
//     address2: 'Apt J',
//     city: "Charlotte",
//     state: "NC",
//     zip: 28262, 
//    country: 'USA'}).save().then(conn =>{
//      console.log('User Saved:',conn);
//      resolve(conn);
//    }).catch(err => {
//     return reject(err);
// });
//   })
// }

  getUser= async function(user_id) {
    return new Promise((resolve,reject) => {
        users
        .find({user_id:user_id})
          .then(conn => {
            if(conn.length>0){
             //console.log("user data: ",conn);
              let userObj = new usersDB(conn[0].user_id,conn[0].password, conn[0].user_fname, conn[0].user_lname, conn[0].email,conn[0].address1, conn[0].address2, conn[0].city, conn[0].state, conn[0].zip, conn[0].country);
            resolve(userObj);
            }
            else
              resolve(undefined);
          })
          .catch(err => {
            return reject(err);
        });
    });
    }

  module.exports = {getUser};