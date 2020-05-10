let connectionsDB = require("../models/connection");

var mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var connectionSchema = new mongoose.Schema({
    user_id: String,
    conn_id: Number,
    conn_name: String,
    conn_topic: String,
    conn_details: String,
    conn_location: String,
    conn_host: String,
    conn_date: String,
    conn_timeFrom: String,
    conn_timeTo: String,
    conn_image: String,
});

connections = mongoose.model('connections', connectionSchema);
//console.log(JSON.stringify(connections.find()));

getLastConnectionId = async function(){
  return new Promise((resolve, reject) => {
    connections
      .find({},{conn_id:1})
        .sort({conn_id:-1})
          .limit(1)
            .then(data => {
              console.log("hello",data);
 
              resolve(data);
                      })
        .catch(err => {
          return reject(err);
      });
  })
}


addConnection = async function(user_id, conObj){
  return new Promise((resolve, reject)=>{
    console.log("user id in addConn:",user_id);
    console.log('abcdefg:',user_id, 'askjfhaf:',conObj)
      new connections({user_id:user_id, conn_id:conObj._conn_id, conn_name:conObj._conn_name, conn_topic:conObj._conn_topic, 
        conn_details:conObj._conn_details, conn_location:conObj._conn_location, conn_host:conObj._conn_host, conn_date:conObj._conn_date, 
        conn_timeFrom:conObj._conn_timeFrom, conn_timeTo:conObj._conn_timeTo})
      .save(function(err, data){
          if(err){
              console.log(err)
              reject('reject');
          } else{
            console.log('shreeyaaaaaaaaaa;,',data);
              resolve(data);
          }
      })
  })
}

getConnections = async function() {
    return new Promise((resolve, reject) => {
        connections
        .find()
          .then(data => {
            console.log("fetching data from db");

            let connections = [];
            data.forEach((conn) => {
              let connectionObj = new connectionsDB();
              connectionObj.setconn_id(conn.conn_id);
              connectionObj.setconn_name(conn.conn_name);
              connectionObj.setconn_topic(conn.conn_topic);
              connectionObj.setconn_details(conn.conn_details);
              connectionObj.setconn_location(conn.conn_location);
              connectionObj.setconn_host(conn.conn_host);
              connectionObj.setconn_date(conn.conn_date);
              connectionObj.setconn_timeFrom(conn.conn_timeFrom);
              connectionObj.setconn_timeTo(conn.conn_timeTo);
              connectionObj.setconn_image(conn.conn_image);
  
              connections.push(connectionObj);
            });
            //console.log(connections);
            resolve(connections);
        })
        .catch(err => {
            return reject(err);
        });
    });
  };


getConnection = async function(conn_id) {
  return new Promise((resolve, reject) => {
    connections
    .find({conn_id:conn_id})
      .then(conn => {
        let connectionObj = new connectionsDB();
          connectionObj.setconn_id(conn[0].conn_id);
          connectionObj.setconn_name(conn[0].conn_name);
          connectionObj.setconn_topic(conn[0].conn_topic);
          connectionObj.setconn_details(conn[0].conn_details);
          connectionObj.setconn_location(conn[0].conn_location);
          connectionObj.setconn_host(conn[0].conn_host);
          connectionObj.setconn_timeFrom(conn[0].conn_timeFrom);
          connectionObj.setconn_timeTo(conn[0].conn_timeTo);
          connectionObj.setconn_image(conn[0].conn_image);

        resolve(connectionObj);
    })
    .catch(err => {
        return reject(err);
    });
});
}

getTopics = async function() {
  var conn_topics = new Array();  
  var getconnect = await getConnections();
    getconnect.forEach(function(connection){
      if (!conn_topics.includes(connection.getconn_topic())) {
        conn_topics.push(connection.getconn_topic());
    }
    });
  if (conn_topics !== undefined) {
      return conn_topics;
  }
};
 module.exports = {getConnections , getConnection, getTopics, getLastConnectionId, addConnection};

 