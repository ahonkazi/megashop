import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { ButtonBlue, ButtonOutLinePrimary } from '../../Commponents/Button/Button'
import profile from '../../assets/images/Auther/profile.jpeg'
const EditProfile = () => {
  const [firstName, setFirstName] = useState('Md Aohinuzzaman')
  const [lastName, setLastName] = useState('Ahon')
  const [email, setEmail] = useState('user@gmail.com')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [changePassStatus, setChangePassStatus] = useState(true)
  const [profilePicture, setProfilePicture] = useState(profile)
  const handleFile = (e) => {
    const file = e.target.files[0]
    setProfilePicture(URL.createObjectURL(file))
  }
  return (
    <AnimatePresence>
      <motion.section initial={{opacity:0,scale:0.99889}} animate={{ opacity: 1,scale:1 }} transition={{ duration: 0.7 }} className='px-4 font-Nunito'>
        <h2 className="section-title">Edit profile</h2>


        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-2'>
          <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-2 ">
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" placeholder='First Name...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" placeholder='Last Name...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
          </div>
          <div className="input-group grid grid-cols-1 ">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='You Email...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
          </div>
          <div className="input-group grid grid-cols-1 ">
            <p onClick={() => setChangePassStatus(!changePassStatus)} className='flex cursor-pointer select-none items-center gap-2 text-gray-500'>
              <p>Change Password?</p>
              <BiChevronDown className={`text-[22px] ${changePassStatus ? 'rotate-180' : ''} duration-300`} />

            </p>
            <div className="overflow-hidden">
              <AnimatePresence>
                {
                  changePassStatus && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} style={{ overflow: 'clip' }}>
                      <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="input-item mt-[10px]">
                          <label htmlFor="old-pass" className=''>
                            <span className='text-sm text-gray-500'>Current Password</span>
                            <br />
                            <input autoComplete='new-password' onChange={(e) => setPassword(e.target.value)} value={password} type="password" id='old-pass' className='border w-full border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                          </label>
                        </div>
                        <div className="input-item mt-[10px]">
                          <label htmlFor="new-pass" className=''>
                            <span className='text-sm text-gray-500'>New Password</span>
                            <br />
                            <input autoComplete='new-password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} type="password" id='new-pass' className='border w-full border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="change-profile">
              <div className="flex gap-4 items-center">
                <img className='w-[45px] h-[45px] rounded-full' src={profilePicture} alt="" />
                <input onChange={(e) => handleFile(e)} type="file" id='change-profile' hidden />
                <button className='bg-gray-800 h-fit text-gray-50 px-4 py-2'>Upload File</button>
              </div>
            </label>
          </div>

          <div className="input-group flex gap-3 justify-end">
            <ButtonOutLinePrimary>Reset</ButtonOutLinePrimary>
            <ButtonBlue>Save</ButtonBlue>
          </div>



        </form>
      </motion.section>
    </AnimatePresence>
  )
}

export default EditProfile