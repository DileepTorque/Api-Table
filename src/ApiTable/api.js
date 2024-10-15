import React, { Component } from "react";
import './api.css'; 

export default class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thead: [],
            tbody: []
        }
    }

    componentDidMount() {
        let api = fetch("https://fakestoreapi.com/products")
        api.then((x) => x.json()).then((data) => {
            this.setState({ thead: Object.keys(data[0]).slice(0, 4) });
            this.setState({ tbody: data })
        })
    }

    render() {
        return (
            <>
             <div className="main">
                <h1>SHOPPING DATA</h1>
             <table className="api-table">
                    <thead>
                        <tr className="table-header">
                            {this.state.thead.map((x, ind) => <th key={ind}>{x}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tbody.slice(0, 4).map((y, index) => {
                            return (
                                <tr className="table-row" key={index}>
                                    <td className="table-cell">{y.id}</td>
                                    <td className="table-cell">{y.title}</td>
                                    <td className="table-cell">{y.price}</td>
                                    <td className="table-cell">{y.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
             </div>
            </>
        )
    }
}

// function al(){
//     return(
//         <h1>Welcome to react</h1>
//     )
// }
// export default al
// let x=()=>{
//    return (
//     <>
//     <h2>Alhamdullilah</h2>
//     <h2>Inshallah</h2>
//     <h2>Astagfirullah   </h2>
//     </>
//    )
// }
// export default x;