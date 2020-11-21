import React, { Component } from 'react';

class StockRow extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        //insert data
        this.setState({
            data: {
                price:5,
                date:'12-12-12',
                time: '09:30'
            }
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.price}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>
            </tr>
        )
    }
}

export default StockRow;