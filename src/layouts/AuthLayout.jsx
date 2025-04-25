import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div>
            <h3>
                AuthLayout
            </h3>
            <Outlet></Outlet>
        </div>
    )
}

AuthLayout.propTypes = {}

export default AuthLayout