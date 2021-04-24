import React, { Component } from 'react'

// Jesus Urueta Creacion del componente slide

export default class Slide extends Component {
    render() {
        return (
        <div className="bg-white shadow-2 px-3 py-3 h-400">
            <h1 className="dark mb-3 text-center">{this.props.title}</h1>
            <p className="dark text-center">{this.props.text}</p>
       </div>
        )
    }
}
