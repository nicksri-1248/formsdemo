import React, {Component} from 'react';

class Formtest extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your payment method is: ' + this.state.value);
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Forms Example</h2>
                <form onSubmit={this.handleSubmit}>
                    Payment Method:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
                    <label>
                        Pick your payment method:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="netbanking">Net Banking</option>
                            <option value="paytm">PAYTM</option>
                            <option value="giftcard">Gift Card</option>
                            <option value="cash">Cash on Delivery</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Formtest;