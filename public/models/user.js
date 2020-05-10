class User {
    constructor(user_id, password, user_fname, user_lname, user_email,address1, address2, city, state, zip, country) {
        this._user_id = user_id;
        this.password = password;
        this._user_fname = user_fname;
        this._user_lname = user_lname;
        this._user_email = user_email;
        this._address1 = address1;
        this._address2 = address2;
        this._city = city;
        this._state = state;
        this._zip = zip;
        this._country = country;
    }
    getuser_id() {
        return this._user_id;
    }
    setuser_id(value) {
        this._user_id = value;
      }
      getpassword() {
        return this.password;
    }
    setpassword(value) {
        this.password = value;
      }
    getuser_fname() {
        return this._user_fname;
    }
    setuser_fname(value) {
        this._user_fname = value;
      }
    getuser_lname() {
        return this._user_lname;
    }
    setuser_lname(value) {
        this._user_lname = value;
      }
    getuser_email() {
        return this._user_email;
    }
    setuser_email(value) {
      this._user_email = value;
    }
    getaddress1() {
        return this._address1;
    }
    setaddress1(value) {
      this._address1 = value;
    }
    getaddress2() {
        return this._address2;
    }
    setaddress2(value) {
      this._address2 = value;
    }
    getcity() {
        return this._city;
    }
    setcity(value) {
      this._city = value;
    }
    getstate() {
        return this._state;
    }
    setstate(value) {
      this._state = value;
    }
    
    getzip() {
        return this._zip;
    }
    setzip(value) {
      this._zip = value;
    }
    
    getcountry() {
        return this._country;
    }
    setcountry(value) {
      this._country = value;
    }
  }
  module.exports = User;
