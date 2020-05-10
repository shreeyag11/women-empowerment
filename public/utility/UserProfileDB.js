let userProfileDB = require("../models/UserProfile");

var mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var userPSchema = new mongoose.Schema({
    user_id: String,
    userConnections: [
        {
            conn_id : Number,
            rsvp : String
        }
    ]
  });

userPModel = mongoose.model('userProfile', userPSchema);
  
//1st connection
createNewConn = function(conn_id,user_id,rsvp){
    new Promise((resolve,reject) => {
        new userPModel({user_id:user_id, userConnections:[{conn_id:conn_id,rsvp:rsvp}]})
            .save(function(err,data){
                if(err){
                    reject('reject');
                } else{
                    console.log("inside create new conn", data);
                    resolve(data);
                }
            })
    })
}

//add any other connection after the 1st one
addNewConn = function(conn_id,user_id,rsvp){
    new Promise((resolve,reject) => {
        userPModel.updateOne({user_id:user_id, "userConnections.conn_id":{$ne:conn_id}},
            {$push: {userConnections:{conn_id:conn_id,rsvp:rsvp}}}, function(err,data){
                if(err){
                    reject('reject');
                } else{
                    resolve(data);
                }
            })
    })
}

updateConn = function(conn_id,user_id,rsvp){
    new Promise((resolve,reject) => {
        console.log('Update logic:',conn_id,user_id,rsvp)
        userPModel.updateOne({user_id:user_id, "userConnections.conn_id":conn_id},
            {$set: {"userConnections.$.rsvp":rsvp}}, function(err,data){
                if(err){
                    reject('reject');
                } else{
                    console.log(data);
                    resolve(data);
                }
            })
    })
}

removeConn = function(user_id,conn_id){
    new Promise((resolve,reject) => {
        userPModel.updateOne({user_id:user_id},
            {$pull: {userConnections:{conn_id:conn_id}}}, function(err,data){
                if(err){
                    reject('reject');
                } else{
                    resolve(data);
                }
            })
    })
}

getUserProfile = function(user_id){
    return new Promise((resolve,reject) => {
        userPModel 
            .find({user_id:user_id})
                .then(data => {
                    console.log("user profile data:", data);
                    resolve(data);
                }).catch(err => {
                    return reject(err);
                });
    })
}

module.exports = {getUserProfile, createNewConn, addNewConn, removeConn, updateConn}