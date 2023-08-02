import React, { useEffect, useState } from 'react'
import { NavBarFilter } from '../../Commponents/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
const Registration = () => {
    return (
        <>
            <NavBarFilter />
            <Outlet />
        </>

    )

}

export default Registration