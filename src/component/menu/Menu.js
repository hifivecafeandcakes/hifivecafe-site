import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../theme/css-component/menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretUp, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar";
import axios from 'axios'
import baseurl from '../Baseurl'

import LOGO from '../../theme/image/logo.png'



const Menu = () => {

    const user_id = localStorage.getItem("user_id")

    const [menu_id, setMenu_id] = useState()
    const [menu_cat, setMenu_cat] = useState([])



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}menu/category/get/list?menu_id=1`)
            .then((res) => {
                if (res.data.Response.Success == 1) {
                    setMenu_cat(res.data.Response?.result)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    // =====================================

    const [menu_scat, setMenu_scat] = useState([])

    const menucat = (e) => {
        setMenu_id(e)
        axios.get(`${process.env.REACT_APP_API_URL}menu/item/list?menu_cat_id=${e}`)
            .then((res) => {
                console.log(res);
                if (res.data.Response.Success == 1) {
                    setMenu_scat(res.data.Response?.result)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        menucat('')
    }, [])


    // ================================

    const menu_add = (user_id, menu_id, sub_menu_id, type, denomination, menu_price) => {

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




    // ================================



    const route_cart = () => {
        alert("hi")
        window.location.href = "/menu_cart"
    }




    return (
        <>
            <div className='container-fluid '>
                <div className='row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='col-lg-12 ' style={{ zIndex: '1' }}>
                        <div className='row nav_bar'>
                            <Navbar />

                        </div>
                        <div className='row menu_row1'>

                        </div>
                        <div className='row menu_row2  mobile_menu_row'>
                            <div className='col-lg-12'>
                                {menu_cat.map((data, i) => (
                                    <div key={i}>
                                        <button className="button type1">
                                            <span className="btn-txt" onClick={() => menucat(data.menu_id)}>{data.menu_title}</span>
                                        </button>
                                    </div>
                                ))}

                            </div>


                        </div>


                        {/* =========================================================================== */}

                        <div className='row  menu_row3'>
                            <div className='col-lg-3  menu_sidebar ' >
                                <div className='menubar_col1_1'>
                                    <div className='menubar_div1 '>
                                        <a href="/"> <img src={LOGO} width={"75px"} /></a>
                                    </div>
                                    <div className='menubar_div2 '>
                                        <ul >
                                            {menu_cat.map((data, i) => (
                                                <li key={i}><a href="#" onClick={() => menucat(data.menu_id)}>{data.menu_title}</a></li>
                                            ))}
                                        </ul>

                                    </div>
                                    <div className='menubar_div3'>
                                        <a href="/menu_cart"><FontAwesomeIcon icon={faCartShopping} /></a>
                                    </div>

                                </div>


                            </div>


                            <div className='col-lg-9 menu_col_31'>
                                <div className='row'>
                                    {
                                        menu_scat.map((data, i) => (
                                            <div className='col-lg-3' key={i}>

                                                <div className='menu_row3_2'>
                                                    <div style={{ flexWrap: 'wrap' }}>
                                                        <h4>{data.menu_title}</h4>
                                                    </div>
                                                    <div className='menu_row3_2_2'>
                                                        <img src={data.menu_img} alt="" />
                                                    </div>

                                                    <div className='menu_row3_2_3'>
                                                        <h6>{data.menu_description}</h6>
                                                    </div>
                                                    <div className=' menu_row3_2_4'>
                                                        <h6>PRICE-{data.menu_final_price}</h6>
                                                        <button className="button2" onClick={() => menu_add(user_id, data.menu_sub_id, data.menu_id, 'M', '1', data.menu_final_price)}>
                                                            ADD
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        ))
                                    }

                                </div>

                            </div>


                            {/* ===================================================================================== */}


                        </div>



                    </div>
                </div>
            </div>

            {/* <div className="contactButton" onClick={() => route_cart()}>
                Check to cart
                <div className="iconButton">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </div> */}



        </>
    )
}

export default Menu
