import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../theme/css-component/cake_sub.css"
import Navbar from "../Navbar";
import Sidebar from '../Sidebar'
import axios from 'axios'
import baseurl from '../Baseurl'

const CakeSub = () => {

    const cake_cat_id = localStorage.getItem("cake_cat_id")
    const [cake_scat_data, setCake_scat_data] = useState([])
    const [title, settitle] = useState([])

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}cake/subcategory/get/list?cake_cat_id=${cake_cat_id}`)
            .then((res) => {

                if (res.data.Response.Success == 1) {
                    settitle(res.data.Response?.result.cake_category_name)
                    setCake_scat_data(res.data.Response?.result.subcategories)
                }
            })
            .catch((err) => {
                console.log("error");
            })
    }, [])


    // console.log(cake_scat_data);/
    // ================================================================
    const user_id = localStorage.getItem("user_id")

    const menu_add = (user_id, menu_id, sub_menu_id, type, denomination, menu_price) => {
        console.log(menu_id,sub_menu_id);

        axios.post(`${process.env.REACT_APP_API_URL}add/to/cart/api`, { user_id: user_id, main_id: menu_id, main_sub_id: sub_menu_id, cart_type: type, denomination: denomination, cart_total: menu_price })
            .then((res) => {
                // console.log(res);
                if (res.data.success == 0) {
                    if (res.data.message == "user_id required!") {
                        window.location.href = '/login'
                    }

                } else if (res.data.Response.Success == 1) {
                    alert("Added")

                }
            })
            .catch((err) => {
                alert("Try again later")
            })

    }




    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12 home_full'>
                        <div className='nav_bar'>
                            <Navbar />

                        </div>

                        <div className='row'>
                            <div className='col-lg-3 sidebar'>
                                <Sidebar />

                            </div>
                            <div className='col-lg-9 cake_sub_col1' >
                                <div className='cartrow'>

                                </div>
                                <div className='row cake_sub_col1_row'>
                                    <h1>{title}</h1>

                                </div>
                                <div className='row cake_sub_col1_row2'>

                                    {cake_scat_data.map((data, i) => (
                                        <div className="col-lg-4" id='catDiv' key={i}>
                                            <img className='categoryImage' src={data.image_url} alt="" />
                                            <p className='cakeTitle'>{data.menu_title}</p>
                                            <div style={{ display: "flex", width: '100%', justifyContent: 'space-around', alignItems: 'center' }}><p className='cakeTitle'>1KG-₹{data.menu_final_price}</p>
                                                <button className='btn h-50' style={{ backgroundColor: 'orange' }} onClick={() => menu_add(user_id, data.menu_sub_id, data.menu_id, 'C', '1', data.menu_final_price)}>ADD</button></div>
                                        </div>
                                    ))}



                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CakeSub


