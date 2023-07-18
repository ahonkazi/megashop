import React from 'react'

export const ButtonOutLinePrimary = ({ children, size }) => {
    return (
        <button style={size ? { width: "100%" } : {}} className='text-Primary-0 border font-Nunito px-4 py-2 border-Primary-0 bg-transparent'>{children}</button>
    )
}

export const ButtonDownload = ({ children, size }) => {
    return (
        <button style={size ? { width: "100%" } : {}} className='text-Primary-0 border font-Nunito px-4 py-2 border-Primary-0 bg-transparent'>{children}</button>
    )
}