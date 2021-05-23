import React from 'react'
import { withRouter } from "react-router-dom";

const Title = (props) => {

    return (
        <h2 className="mb-2 text-center text-5xl">
           Productos
        </h2>
    )
}

export default withRouter(Title);