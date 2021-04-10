import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Footer } from "../Component/Footer"
import { NavBar } from "../Component/NavBar"
import { Products } from "../Component/Products"
import { getProduct} from "../Redux/Product/action"

export const Home = () => {

    const dispatch = useDispatch()

    const product_list = useSelector((state) => state.productStore.productList)

    const mixed_products = "mixed_products";

    const [page, setPage] = React.useState(0)


    React.useEffect(() => {
        dispatch(getProduct(mixed_products))
    }, [dispatch])

    return (
        <>
            <NavBar />
            {/* Banner Image */}
            <div className="w-4/5 m-auto shadow-2xl">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/PrimeDay/Xiaomi/MiStore/Revised/b._CB1198675309_.jpg" alt="banner" className="w-full" />
            </div>
            <div className="w-4/5 m-auto flex flex-wrap mt-4">
                {
                    product_list.map((item) => {
                        return <Products details={item} key={item.id} />
                    })
                }
            </div>
            {/* Pagination */}
            <div className="flex w-72 m-auto mt-10">
                <button className="w-24 m-4 p-2 text-xl font-semibold bg-gray-300 shadow-lg ">Prev</button>
                <p className="w-9 border-2 h-9 mt-5 text-2xl text-center rounded-full bg-gray-300">{page}</p>
                <button className="border-2 w-24 m-4 p-2 text-xl font-semibold bg-gray-300 shadow-lg">Next</button>
            </div> 
            {/* Footer */}
            <Footer />
        </>
    )
}