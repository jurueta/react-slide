import React, { Component } from 'react'

// Jesus Urueta Creacion del componente Header para su uso

export default class Header extends Component {
    render() {
        return (
           <React.Fragment>
               <div className="container-fluid py-3 bg-header justify-content-center d-flex align-items-center">
                    <h2 className="greem-title fw-bold">Jesus Urueta Slideshow App</h2>
               </div>
           </React.Fragment>
        )
    }
}
