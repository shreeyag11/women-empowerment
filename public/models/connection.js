class Connection {
    constructor(conn_id, conn_name, conn_topic, conn_details, conn_location, conn_host, conn_date, conn_timeFrom, conn_timeTo, conn_image) {
        this._conn_id = conn_id;
        this._conn_name = conn_name;
        this._conn_topic = conn_topic;
        this._conn_details = conn_details;
		this._conn_location = conn_location;
		this._conn_host = conn_host;
		this._conn_date = conn_date;
		this._conn_timeFrom = conn_timeFrom;
		this._conn_timeTo = conn_timeTo;
		this._conn_image = conn_image;
    }
    getconn_id() {
        return this._conn_id;
	}
	setconn_id(value) {
		this._conn_id = value;
	  }
    getconn_name() {
        return this._conn_name;
	}
	setconn_name(value) {
		this._conn_name = value;
	  }
    getconn_topic() {
        return this._conn_topic;
	}
	setconn_topic(value) {
		this._conn_topic = value;
	  }
    getconn_details() {
        return this._conn_details;
	}
	setconn_details(value) {
		this._conn_details = value;
	  }
    getconn_location() {
        return this._conn_location;
	}
	setconn_location(value) {
		this._conn_location = value; 
	  } 
	getconn_host() {
		return this._conn_host;
	}
	setconn_host(value) {
		this._conn_host = value;
	}
	getconn_date() {
		return this._conn_date;
	}

	setconn_date(value) {
		this._conn_date = value;
	}

	getconn_timeFrom() {
		return this._conn_timeFrom;
	}

	setconn_timeFrom(value) {
		this._conn_timeFrom = value;
	}

	getconn_timeTo() {
		return this._conn_timeTo;
	}

	setconn_timeTo(value) {
		this._conn_timeTo = value;
	}

	getconn_image() {
		return this._conn_image;
	}

	setconn_image(value) {
		this._conn_image = value;
	}

  }

  module.exports = Connection;