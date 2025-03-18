import axios from "axios"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar";
import { Navbar } from "react-bootstrap";
import "../theme/css-component/cart.css"
import { Link, useLocation } from "react-router-dom";
import Status from "./reservation/Status";


const Cart = () => {

    const user_id = localStorage.getItem("user_id")

    //cart datas
    const [datas, setDatas] = useState([]);

    const location = useLocation();
    console.log(location.state)
    const { status } = location.state || { status: { msg: "", type: "success", toggle: "close" } }; // Access the passed data
    console.log(status)

    // status
    const empStatus = { msg: "", type: "success", toggle: "close" }
    const [status1, setStatus1] = useState(empStatus);

    useEffect(() => {
        getCardDetails();
    }, [])


    useEffect(() => {
        if (status && status != null) {
            setStatus1(status);
        }
    }, [])


    const route_cat = (reser_id, res_cat_id) => {
        localStorage.setItem("reser_id", reser_id)
        localStorage.setItem("res_cat_id", res_cat_id)
    }


    async function getCardDetails() {
        try {
            const formData = new FormData();
            formData.append('userid', user_id);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/cart/api`, formData)

            console.log("RESPONSE :", res.data);
            if (res?.data?.Response?.Success == '1') {
                let results = res?.data?.Response?.Result;
                console.log(results);
                setDatas(results)
                setStatus1({ msg: "Card details get Successfully!", type: "success", toggle: "open" });
            } else {
                setDatas([])
                setStatus1({ msg: "Error in fetching data", type: "error", toggle: "open" })
                console.log('Execution Error');
            }
        } catch (err) {
            setDatas([])
            setStatus1({ msg: "Error in fetching data. Try Again", type: "error", toggle: "open" })
            console.log('Fetching Error:', err);
        }
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row'>
                            <div className='col-lg-3 sidebar ' >
                                <Sidebar />
                            </div>

                            <div className='col-lg-9'>
                                <div className='container-fluid'>
                                    <Status msg={status1.msg} type={status1.type} toggle={status1.toggle} onClose={() => setStatus1(empStatus)} />
                                    <div className='cart-title'>
                                        <h1 className='text-center' style={{ color: 'orange' }}>Cart</h1>
                                    </div>
                                    <div className='cart-head'>
                                        {(datas.length > 0) ?
                                            <>
                                                {datas.map((data, index) => (
                                                    <>
                                                        <div key={`cart` + index} className="row cart-row cart-border ">
                                                            <div className="col-sm-3">
                                                                <Link to={`/sub_cat_list/${data.reser_id}/${data.reser_cat_id}`} onClick={() => route_cat(data.reser_id, data.reser_cat_id)} className="sub-cat-part">
                                                                    <div className="text-center">
                                                                        <img src={data.sub_img} className="sub-img" alt={data.sub_tilte}></img>
                                                                        <div className="fs-12">{data.reser_main_title}&nbsp;-&nbsp;{data.cat_title}</div>
                                                                        <div className="fs-14 white">{data.sub_tilte}&nbsp;-&nbsp;&#8377;{data.sub_cat_price_range}</div>
                                                                    </div>
                                                                </Link>
                                                            </div>

                                                            <div className="col-sm-3">
                                                                <span><div className="cart-label1">Booking Id:</div>{data.booking_id}</span>
                                                                <span><div className="cart-label1">Booking At:</div><span className="orange fs-18">{data.booking_date}&nbsp;{data.booking_time}</span></span>
                                                                <span><div className="cart-label1">Booking By:</div>{data.user_name}-{data.user_mobile}</span>
                                                                <span><div className="cart-label1">Paid status:</div><span className={`${data.booking_payment_status}`}>
                                                                    {(data.booking_payment_status) ? data.booking_payment_status : "Not Paid"}</span></span>
                                                                <span><div className="cart-label1">Paid Amount:</div>{(data.booking_payment_amount) ? data.booking_payment_amount : "0.00"}</span>
                                                                <span><div className="cart-label1">Hifive Booking status:</div>Confirmed</span></div>

                                                            <div className="col-sm-3">
                                                                {/* <div className="sub-cat-part white"> */}
                                                                <div>
                                                                    <span><div className="cart-label1">Guest:</div> &nbsp;{data.booking_guest_name}</span>
                                                                    <span><div className="cart-label1">Total People:</div> &nbsp;{data.booking_total_people}</span>
                                                                    <span><div className="cart-label1">Food Type:</div> {(data.booking_veg_or_nonveg == "1") ? "Veg" : "Non-Veg"} </span>
                                                                    <span><div className="cart-label1">Additional Information:</div>{(data.remarks) ? data.remarks : "-"}</span>
                                                                    {/* </div>
                                                                    <div className="ps-2 "> */}
                                                                    <span><div className="cart-label1">Cake:</div>&nbsp;{(data.booking_cake == "") ? "-" : data.booking_cake}</span>
                                                                    <span><div className="cart-label1">Cake Message:</div>&nbsp;{(data.booking_cake_msg == "") ? "-" : data.booking_cake_msg}</span>
                                                                    {/* <span><div className="cart-label1">Food Type:</div> {(data.booking_veg_or_nonveg == "1") ? "Veg" : "Non-Veg"} </span> */}
                                                                    {/* </div> */}
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-3 text-center">
                                                                <img src={data.sub_extra_img[data.booking_menu_type]} className="sub-img" alt={data.sub_tilte}></img>
                                                                <div className="fs-14 white">Menu-{data.booking_menu_type}</div>
                                                            </div>

                                                        </div>
                                                    </>
                                                ))}
                                            </>
                                            : ""}
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart