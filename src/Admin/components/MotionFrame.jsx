import { AnimatePresence, animate, motion } from 'framer-motion'
import React from 'react'
const MotionFrame = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.section exit={{ opacity: 0, scale: 1 }} initial={{ opacity: 0, scale: 0.999889 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, type: "spring" }} >
                <div className="px-4 py-4">
                    {children}
                </div>
            </motion.section>
        </AnimatePresence>
    )
}

export default MotionFrame