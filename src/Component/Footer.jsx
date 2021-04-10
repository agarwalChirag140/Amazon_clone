import React from "react"
import amazonlogo2 from "../Images/Amazon2-removebg-preview.png"
import { AiOutlineGlobal } from "react-icons/ai"

export const Footer = () => {
    return (
        <>
            <div className="w-full border-2 border-gray-500 bg-gray-800">
                <div className="w-3/5 mx-auto flex justify-between mt-10 mb-12">
                    <div className="w-40 text-white font-light">
                        <p className="font-extrabold text-xl p-1">Get to know us</p>
                        <p className="p-1">About Us</p>
                        <p className="p-1">Carrers</p>
                        <p className="p-1">Press Releases</p>
                        <p className="p-1">Amazon cares</p>
                        <p className="p-1">Gift a Smile</p>
                    </div>
                    <div  className="w-52  text-white font-light">
                        <p className="font-extrabold text-xl p-1">Connect with us</p>
                        <p className="p-1">Facebook</p>
                        <p className="p-1">Twitter</p>
                    </div>
                    <div  className="w-52  text-white font-light">
                        <p className="font-extrabold text-xl p-1">Make Money with us</p>
                        <p className="p-1">Sell on Amazon</p>
                        <p className="p-1">Sell under Amazon Accelerator</p>
                        <p className="p-1">Amazon Global Selling</p>
                        <p className="p-1">Become an Affiliate</p>
                        <p className="p-1">Fulfilment by Amazon</p>
                        <p className="p-1">Advertise Your Products</p>
                        <p className="p-1">Amazon Pay on Merchants</p>
                    </div>
                    <div  className="w-52  text-white font-light">
                        <p className="font-extrabold text-xl p-1">Let Us Help You</p>
                        <p className="p-1">Covid-19 and Amazon</p>
                        <p className="p-1">Your Account</p>
                        <p className="p-1">Returns Center</p>
                        <p className="p-1">100% Purchase Protection</p>
                        <p className="p-1">Amazon App Download</p>
                        <p className="p-1">Amazon Assistant Download</p>
                        <p className="p-1">Help</p>
                    </div>
                </div>
                <hr className="w-full mb-10 text-gray-400 " />
                <div className="w-1/4 m-auto flex justify-between">
                    <img src={amazonlogo2} alt="footer logo" className="w-36 h-20" />
                    <div className="w-1/4 h-10 border-2 border-gray-700 flex justify-evenly items-center mt-3 ">
                        <AiOutlineGlobal className="text-white" />
                        <p className="text-white">English</p>
                    </div>
                </div>
                <div className="w-3/5 mx-auto mt-6 h-10 flex text-white justify-between ">
                    <p>Australia</p>
                    <p>Brazil</p>
                    <p>Canada</p>
                    <p>China</p>
                    <p>France</p>
                    <p>Germany</p>
                    <p>Italy</p>
                    <p>Japan</p>
                    <p>Mexico</p>
                    <p>Netherlands</p>
                    <p>Singapore</p>
                    <p>Spain</p>
                    <p>Turkey</p>
                    <p>United Arab Emirates</p>
                    <p>United Kingdom</p>
                </div>
            </div>
        </>
    )
}