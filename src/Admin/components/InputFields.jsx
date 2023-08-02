import React, { useState } from 'react'
export const InputWithIcon = ({ icon, placeholer, inputType, setState, idName, setStateList }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInput = () => {
        if (inputValue !== '') {
            setState(inputValue)
            setInputValue('')
            setStateList(list => [...list, inputValue])
        }
    }
    return (

        <label htmlFor={idName}>
            <div className="input-box relative  bg-slate-100 ">
                <input value={inputValue} id={idName} onChange={(e) => setInputValue(e.target.value)} className='h-[45px] font-Montserrat text-sm  text-slate-700 placeholder:text-slate-400  pl-4 pr-12 py-2 pr- w-full bg-transparent outline-none border border-transparent  focus:border-slate-500' type={inputType} placeholder={placeholer} />
                <button onClick={handleInput} className='shrink-0 bg-white shadow2 p-2 rounded-full absolute top-1/2 right-[10px] -translate-y-1/2'>
                    {icon}
                </button>
            </div>
        </label>
    )
}



export const InputWithPhoto = ({ img, idName, inputType }) => {
    const [url, setUrl] = useState(img)
    const handleFile = (e) => {
        const file = e.target.files[0];
        setUrl(URL.createObjectURL(file))
    }
    return (
        <label htmlFor={idName}>
            <div className="flex items-center gap-4 w-fit">
                <img className='h-[40px] rounded-full w-[40px]' src={url} alt="" />
                <input onChange={(e) => handleFile(e)} type={inputType} hidden id={idName} />
                <p className='bg-slate-700 font-Montserrat text-slate-50 px-3 rounded py-2'>Upload Photo</p>
            </div>
        </label>
    )
}
