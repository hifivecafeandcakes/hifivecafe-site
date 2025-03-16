import axios from "axios";
import { useEffect } from "react";
import useRazorpay from "react-razorpay";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Status from "../reservation/Status";
import Cart from "../Cart";
import { Navbar } from "react-bootstrap";
import Sidebar from "../Sidebar";

export default function Checkout() {
    const navigate = useNavigate();

    const user_id = localStorage.getItem("user_id")
    const res_id = localStorage.getItem('res_id');
    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_scat_id = localStorage.getItem('res_scat_id');

    const res_code = localStorage.getItem('res_code');


    let RedirectURL = '/clt_cart';
    if (res_code == "CL") {
        RedirectURL = '/clt_cart';
    }
    else if (res_code == "BP") {
        RedirectURL = '/btb_cart';
    }
    else {
        RedirectURL = '/tb_cart';
    }

    // status
    const empStatus = { msg: "", type: "success", toggle: "close" }
    const [status, setStatus] = useState(empStatus);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const [Razorpay, isLoaded] = useRazorpay();

    const location = useLocation();

    const { id, booking_id, booking_info, user, totalPrice } = location.state || {}; // Access the passed data

    console.log(id);
    const handlePayment = async (params) => {

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            // DDhNhOXW3EZ5MKexGupUdz9j
            amount: process.env.REACT_APP_MAINTENANCE_MODE === "true" ? 1 : totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: process.env.REACT_APP_CAFE_NAME,
            description: `${booking_info} Booking`,
            // image: "",
            order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                console.log(response);
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);

                updatePaymentStatus("success", response);
            },
            // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
            prefill: {
                name: user.name,
                email: user.email,
                contact: user.mobile,
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const Razorpay = window.Razorpay;
        if (!Razorpay) {
            console.error('Razorpay is not loaded');
            return;
        }


        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            console.log(response);
            console.log(response.error.code);
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.metadata.payment_id);
            updatePaymentStatus("error", response);
        });

        rzp1.open();
    };


    const updatePaymentStatus = async (razorpay_payment_status, response) => {
        try {
            const formData = new FormData();
            formData.append('userid', user_id);
            formData.append('reser_id', res_id);
            formData.append('reser_catid', res_cat_id);
            formData.append('resersubcatid', res_scat_id);
            formData.append('booking_id', booking_id);
            formData.append('razorpay_payment_status', razorpay_payment_status);
            // razorpay_payment_at

            //Razorpay success
            if (razorpay_payment_status == "success") {
                formData.append('razorpay_order_id', response.razorpay_order_id);
                formData.append('razorpay_payment_id', response.razorpay_payment_id);
                formData.append('razorpay_signature', response.razorpay_signature);
            } else {
                formData.append('razorpay_order_id', id);
                formData.append('razorpay_error_code', response.error.code);
                formData.append('razorpay_error_description', response.error.description);
                formData.append('razorpay_error_source', response.error.source);
                formData.append('razorpay_error_step', response.error.step);
                formData.append('razorpay_error_reason', response.error.reason);
                formData.append('razorpay_error_order_id', response.error.metadata.order_id);
                formData.append('razorpay_error_payment_id', response.error.metadata.payment_id);
            }


            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/reservation/booking/update`, formData)
            console.log("RESPONSE :", res.data);
            if (res?.data?.Response?.Success == '1') {
                setStatus({ msg: "Booked Successfully!", type: "success", toggle: "open" });
                navigate('/order', { state: { status: status } });
            } else {
                setStatus({ msg: "Error in Booking. Try Again", type: "error", toggle: "open" })
                navigate('/order', { state: { status: status } });
                console.log('Execution Error');
            }
        } catch (err) {
            setStatus({ msg: "Error in Booking. Try Again", type: "error", toggle: "open" })
            console.log('Fetching Error:', err);
        }
    }

    useEffect(() => {
        handlePayment();
    }, [handlePayment])


    const route_cat = (e) => {
        localStorage.setItem("res_id", res_id);
        localStorage.setItem("res_cat_id", res_cat_id);
        localStorage.setItem("res_scat_id", e);
    }


    return (

        <div className='container-fluid ' >
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row nav_bar'>
                        <Navbar />
                    </div>

                    <div className='row home_row_1'>
                        <div className='col-lg-3 home_col_1 sidebar ' >

                            <Sidebar />
                        </div>
                        <div className='col-lg-9  home_col_2'>
                            <Status msg={status.msg} type={status.type} toggle={status.toggle} onClose={() => setStatus(empStatus)} />
                            <Link onClick={() => route_cat(res_scat_id)} to={`${RedirectURL}/${res_id}/${res_cat_id}/${res_scat_id}`} className="sub-cat-part">
                                Go Back to Booking Page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
