import ParamsData from '@/components/Params/ParamsData'
import Timer from '@/components/Params/Timer'
import React from 'react'

const Params = () => {
    return (
        <div className='bg-cover min-h-screen  flex items-start justify-center'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}>
            <div className='flex flex-col items-center w-full md:py-12 lg:flex-row lg:max-w-48 lg:justify-between'>
                <ParamsData />
                <Timer />
            </div>
        </div>
    )
}

export default Params