import React from "react"

export const Products = ({details}) => {
    return (
        <>
            {/* card */}
            <div className="w-1/7 m-3 text-center p-4 px-4 bg-gray-200 shadow-xl rounded-md ">
                <img src={details.image_address} alt="product pic" className="m-auto" />
                <p className="text-center text-xl">{details.description}</p>
                {/* rating div */}
                <div className="flex">
                    <img src="https://img.icons8.com/color/25/000000/filled-star--v1.png" alt="stars" className="ml-40"/>
                    <img src="https://img.icons8.com/color/25/000000/filled-star--v1.png" alt="stars"/>
                    <img src="https://img.icons8.com/color/25/000000/filled-star--v1.png" alt="stars"/>
                    <img src="https://img.icons8.com/color/25/000000/filled-star--v1.png" alt="stars"/>
                    <img src="https://img.icons8.com/color/25/000000/star-half-empty.png" alt="stars"/>
                </div>
                <p className="text-red-800">{details.rate}</p>
                <p className="text-gray-600">Save extra with Cashback</p>
                <p className="text-gray-600">FREE Delivery</p>
            </div>
        </>
    )
}