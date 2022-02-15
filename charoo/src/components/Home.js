import React from 'react'
import Share from "./Share"
import '../stylesheets/App.css'

const Landing = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm 8 mx-auto">
                    <h1 className="text-center"> Hello World</h1>
                    <Share />
                </div>
            </div>

        </div>
    )
}

export default Landing