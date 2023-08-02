import React from 'react'
import { Route } from 'react-router-dom'
import { EditProfile, ProfilePage, WishList } from './route'

const ProfilePrivateRoute = () => {
    return (
        <Route path='/profile' element={<ProfilePage />}>
            <Route path='details' element={<h1>Details</h1>} />
            <Route path='message' element={<h1>Message</h1>} />
            <Route path='edit' element={<EditProfile />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='payment-setting' element={<h1>Payment Setting</h1>} />
            <Route path='prev-order' element={<h1>Prev Order </h1>} />
        </Route>
    )
}

export default ProfilePrivateRoute