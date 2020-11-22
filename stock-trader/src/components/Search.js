import React, { Component } from 'react';
import { iex } from '../config/iex'

class Search extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        //insert data
        const url = `${iex.base_url}stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
             this.setState({
                data: data[data.length - 1]
        })
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.close}</td>
                <td>{this.state.data.low} - {this.state.data.high}</td>
                <td>{this.state.data.volume}</td>
            </tr>
        )
    }
}

export default Search;