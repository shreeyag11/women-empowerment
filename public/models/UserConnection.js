class UserConnection {
    constructor(connection, rsvp) {
        this._connection = connection;
        this._rsvp = rsvp;
	}
    get connection() {
        return this._connection;
    }
    get rsvp() {
        return this._rsvp;
    }

    set connection(value) {
      this._connection = value;
    }
    set rsvp(value) {
      this._rsvp = value;
    }
  }
  module.exports = UserConnection;