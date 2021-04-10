import React from "react"
import { BsSearch} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { getProduct } from "../Redux/Product/action"
import amazonlogo from "../Images/Amazon-India-Logo-PNG-White-removebg-preview.png"

export const NavBar = () => {
    const [productName, setProductName] = React.useState("")
    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(getProduct(productName))
    }

    return (
        <>
            <div className="w-full">
                <div className="w-full flex bg-gray-900 justify-around">
                    <img src={amazonlogo} alt="amazon logo" className="w-32 h-10 mt-3" />
                    <div className="p-1 mt-3 ml-1">
                        <p className="ml-6 text-xs text-white">Hello</p>
                        <p className="flex text-white text-sm font-semibold">
                            <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg></span>
                            Select your address 
                        </p>
                    </div>
                    <div className="w-2/6 flex">
                        <input type="text" placeholder="Type the product" className="m-2 w-full h-11 p-1 mr-0" value={productName} onChange={e => setProductName(e.target.value)} />
                        <div className="w-16 h-11 border-2 border-gray m-2 ml-0 bg-yellow-400 flex justify-center items-center text-2xl" onClick={handleSearch}>
                            <BsSearch />
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <img src="https://img.icons8.com/color/48/000000/india.png" alt="flag icon" className="h-8 mt-1.5"/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="flex mt-4">
                        <div>
                            <p className="text-xs text-white">Hello, Sign in</p>
                            <p className="text-white text-sm font-extrabold">Account & List</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="text-white mt-4">
                        <p className="text-xs">Returns</p>
                        <p className="text-sm font-extrabold">& Orders</p>
                    </div>
                    <div className="flex text-white mt-3 mr-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="mt-4">cart</p>
                    </div>
                </div>
            </div>
        </>
    )
}