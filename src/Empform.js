import React, { Component } from 'react';

class Empform extends Component {
  constructor(props) {
    super(props);
    this.empname = React.createRef();
    this.email = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('employee name is ' + this.empname.current.value + ' and email is ' + this.email.current.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Enter Employee Name: <input type="text" ref={this.empname} /><br />
          Enter Employee Email: <input type="text" ref={this.email} /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Empform;