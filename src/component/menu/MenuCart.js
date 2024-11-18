import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../theme/css-component/menu_cart.css"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { FormControlLabel, IconButton, Radio } from '@mui/material';
import { Card } from 'react-bootstrap';
import minus from '../../theme/image/minus.png'
import plus from '../../theme/image/plus.png'
import { orange } from '@mui/material/colors'
import axios from 'axios'
import baseurl from '../Baseurl'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HailIcon from '@mui/icons-material/Hail';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';



const MenuCart = () => {
    const [value, setValue] = useState(1);
    const [delivery, setDelivery] = useState(true);
    const [pickup, setPickup] = useState(false);

    const handleIncrement = (user_id, main_id, main_sub_id, cart_type, denomination, cart_total, cart_id) => {
        const den = parseInt(denomination) + 1;
        const tot = parseInt(cart_total) * den;

        axios.post(`${process.env.REACT_APP_API_URL}add/to/cart/update/api`, { user_id: user_id, main_id: main_id, main_sub_id: main_sub_id, cart_type: cart_type, denomination: den, cart_total: tot, cart_id: cart_id })
            .then((res) => {
                if (res.data.Response.Success == 1) {
                    window.location.reload()

                } else {
                    alert(res.data.message)

                }
            })
    };

    const handleDecrement = (user_id, main_id, main_sub_id, cart_type, denomination, cart_total, cart_id) => {
        if (denomination > 1) {
            const den = parseInt(denomination) - 1;
            const tot = parseInt(cart_total) * den;

            axios.post(`${process.env.REACT_APP_API_URL}add/to/cart/update/api`, { user_id: user_id, main_id: main_id, main_sub_id: main_sub_id, cart_type: cart_type, denomination: den, cart_total: tot, cart_id: cart_id })
                .then((res) => {
                    if (res.data.Response.Success == 1) {
                        window.location.reload()

                    } else {
                        alert(res.data.message)

                    }
                })
        }
    };


    // =========================================================
    const user_id = localStorage.getItem("user_id")

    const [addtocart_list, setAddtocart_list] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}cart/list/api?userid=${user_id}`)
            .then((res) => {
                if (res.data.Response.Success == 1) {
                    setAddtocart_list(res.data.Response.Result)
                    setValue(res.data.Response.all_item_tot)

                }
            })
            .catch((error) => {
                console.log(error);
            })


    }, [])


    // console.log(value);
    // ============================================

    const delete_func = (main_id, main_sub_id, cart_id) => {
        axios.post(`${process.env.REACT_APP_API_URL}add/to/cart/remove/api`, { main_id: main_id, main_sub_id: main_sub_id, cart_id: cart_id })
            .then((res) => {
                console.log(res);
                if (res.data.Response.Success == 1) {
                    window.location.reload()

                } else {
                    alert(res.data.message)

                }
            })
    };

    const HandleDelivery = () => {
        setDelivery(true);
        setPickup(false);
    }

    const HandlePickUp = () => {
        setPickup(true);
        setDelivery(false);
    }

    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12 '>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 sidebar' >
                                <Sidebar />
                            </div>
                            <div className='col-lg-9 menu_cart_col1'>
                                <div className='menu_cart_col1_1'>
                                </div>
                                <div className='menu_cart_col1_2'>
                                    <h1>CART</h1>

                                </div>

                                <div>
                                    {addtocart_list.map((data, i) => (
                                        <Card className='cartItem' key={i}>
                                            <div className='cartItem1'>
                                                <h3 onClick={() => delete_func(data.cart_main_id, data.cart_submain_id, data.cart_id)}><CloseIcon /></h3>
                                            </div>
                                            <div>

                                                <h3 className='cartItemName'>{data.menu_stitle} - ₹ {data.menu_final_price}</h3>

                                            </div>
                                            <br />
                                            <div className='itemDesc'>
                                                <div style={{ width: '60%' }}>
                                                    <p className='cartItemPrice'>₹-{data.cart_total}</p>
                                                    <p className='cartItemDesc'>{data.menu_description}</p>
                                                </div>
                                                <div className='divImg'>
                                                    <img className='cartItemImg' src={data.image_url} alt="" />
                                                    <div className='cartQTY'>
                                                        <img className='minus' src={minus} alt="" onClick={() => handleDecrement(user_id, data.cart_main_id, data.cart_submain_id, data.cart_type, data.denomination, data.menu_final_price, data.cart_id)} />
                                                        <input className='cartCount'
                                                            type="text"
                                                            value={data.denomination}
                                                            readOnly
                                                        />
                                                        <img className='plus' src={plus} alt="" onClick={() => handleIncrement(user_id, data.cart_main_id, data.cart_submain_id, data.cart_type, data.denomination, data.menu_final_price, data.cart_id)} />
                                                    </div>
                                                </div>
                                            </div>

                                        </Card>
                                    ))}




                                </div>


                                <div id='total'>
                                    <Card className='itemCard'>
                                        <h3 className='cartTotel'>CART - TOTAL</h3>
                                        {addtocart_list.map((data, i) => (

                                            <div className='itemList' key={i}>
                                                <p className='item'>
                                                    {data.menu_stitle}
                                                    <span className='itemQty1'>
                                                        X
                                                        <span className='itemQty'>
                                                            {data.denomination}Nos
                                                        </span>
                                                    </span>
                                                </p>
                                                <p className='itemPrice'>₹{data.cart_total}</p>

                                            </div>
                                        ))}

                                        <hr />



                                        <hr style={{ marginTop: '-1.5vh' }} />

                                        <div className='cost'>
                                            <div className='itemList1'>
                                                <p className='subTotal'>
                                                    Sub total
                                                </p>
                                                <p className='itemPrice'>₹{value}</p>
                                            </div>


                                            <div className='itemList1'>
                                                <p className='subTotal'>
                                                    Total
                                                </p>
                                                <p className='itemPrice'>₹{value}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>




                                <div className="col-lg-12">
                                    <div className='SlectionDiv' style={{alignItems:'center',  display:'flex', justifyContent:'center',marginTop:'3vh', marginBottom:'3vh'}}>


                                        <p style={{marginBottom:'0', color:'#fff'}}>Delivery Type </p>

                                        <Button className='BTN mx-5' variant="outlined" color="warning"
                                            onClick={HandleDelivery}>
                                            Delivery
                                        </Button>
                                        <Button className='BTN' variant="outlined" color="warning"
                                            onClick={HandlePickUp}>
                                            Pickup
                                        </Button>
                                    </div>



                                    {delivery ? (
                                        <Card className='Card'>

                                            <div style={{display:'flex'}}>
                                                <FmdGoodIcon />
                                                <p className='deliveryTTL'>DELIVERY ADDRESS</p>
                                            </div>




                                            <div className='InputDiv'>
                                                <TextField
                                                    className='textInput'
                                                    id="input-with-icon-textfield"
                                                    label="Address"
                                                    rows={3}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountCircle />
                                                            </InputAdornment>
                                                        ),
                                                        value: "house, 6/5, Covai Pudur Rd, Vivekanandapuram, Madukkarai"
                                                    }}
                                                    variant="standard"
                                                />
                                            </div>

                                            <div className='InputDiv'>
                                                <TextField
                                                    className='textInput'
                                                    id="input-with-icon-textfield"
                                                    label="City"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountCircle />
                                                            </InputAdornment>
                                                        ),
                                                        value: "Coimbatore"
                                                    }}
                                                    variant="standard"
                                                />
                                            </div>

                                            <div className='InputDiv'>
                                                <TextField
                                                    className='textInput'
                                                    id="input-with-icon-textfield"
                                                    label="State"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountCircle />
                                                            </InputAdornment>
                                                        ),
                                                        value: "Tamil Nadu"
                                                    }}
                                                    variant="standard"
                                                />
                                            </div>

                                            <div className='InputDiv'>
                                                <TextField
                                                    className='textInput'
                                                    id="input-with-icon-textfield"
                                                    label="Pincode"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountCircle />
                                                            </InputAdornment>
                                                        ),
                                                        value: "641105"
                                                    }}
                                                    variant="standard"
                                                />
                                            </div>

                                            <div className='InputDiv'>
                                                <TextField
                                                    className='textInput'
                                                    id="input-with-icon-textfield"
                                                    label="Contact"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountCircle />
                                                            </InputAdornment>
                                                        ),
                                                        value: "9898765432"
                                                    }}
                                                    variant="standard"
                                                />
                                            </div>

                                            <div className='deliverBTNDiv'>
                                                <Button variant="outlined" color="warning">
                                                    Delivery Here
                                                </Button>
                                            </div>
                                        </Card>
                                    ) : pickup ? (
                                        <Card className='Card'>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FmdGoodIcon />
                                                <p className='deliveryTTL'>PICKUP DATE</p>
                                            </div>





                                            <div className='DateDiv'>
                                                <input id='inputBox' type="date" className="form-control" />

                                                <input id='inputBox' type="date" className="form-control" />
                                            </div>


                                            <div className='deliverBTNDiv'>
                                                <Button variant="outlined" color="warning">
                                                    Check Out
                                                </Button>
                                            </div>
                                        </Card>
                                    ) : (
                                        <div></div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuCart
