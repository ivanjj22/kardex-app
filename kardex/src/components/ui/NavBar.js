import React from 'react'

export const NavBar = () => {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box m-1">
            <div className="flex-none lg:flex">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </label>
            </div> 
            <div className="flex-1 hidden px-2 mx-2 lg:flex">
                <span className="text-lg font-bold">
                    Kardex
                </span>
            </div> 
            
           
        </div>
    )
}
