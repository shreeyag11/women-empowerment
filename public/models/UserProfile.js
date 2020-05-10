var User = require('./user');
var UserConnection = require('./UserConnection');
var Connection = require('./connection');

class UserProfile {
	constructor(user, userConnections) {
		this.user = user;
		this.userConnections = userConnections;
	}

	//Add and Update
	addConn(connection, rsvp) {
		var flag = 0;
		if (connection instanceof Connection && rsvp != undefined) {
			for (let i = 0; i < this.userConnections.length; i++) {
				if (this.userConnections[i]._connection._conn_id === connection.conn_id) {
					this.userConnections[i]._rsvp = rsvp;
					flag = 1;
					break;
				}
			}
			if (flag == 0) {
				let newUser = new UserConnection(connection, rsvp);
				this.userConnections.push(newUser);
			}
		} else {
			throw new Error('Connection is not of Connection Object');
		}
	}

	//Delete
	removeConn(connection) {
		if (connection instanceof Connection) {
			for (let i = 0; i < this.userConnections.length; i++) {
				if (this.userConnections[i]._connection._conn_name === connection.conn_name) {
					this.userConnections.splice(i, 1);
					break;
				}
			}
		} else {
			throw new Error('Connection is not of Connection Object');
		}
	}

	getUserConn() {
		return this.userConnections;
	}

	emptyProfile() {
		delete this.user;
		this.userConnections = new Array();
	}
}

module.exports = UserProfile;