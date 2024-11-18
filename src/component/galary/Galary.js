import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/galary.css'
import Sidebar from '../Sidebar';

import axios from 'axios'
import baseurl from '../Baseurl'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';


const Galary = () => {

    const [record, setRecord] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}gallery/category/admin/list`)
            .then((res) => {
                if (res.data.Response.Success == 1) {
                    setRecord(res.data.Response.result)

                }

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const galary_list = (id) => {
        window.location.href = "/galary_list"
        localStorage.setItem("galary_cat_id", id)
    }
    console.log(record);
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row galary_row1'>
                            <div className='col-lg-3  sidebar ' >
                                <Sidebar />
                            </div>
                            <div className='col-lg-9 galary_row1_1'>
                                <h1>GALARY</h1>

                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-3  sidebar ' >

                            </div>
                            <div className='col-lg-9 galary_row1_2'>
                                <div>
                                    <h5>This part is something where our work speaks and not words. Have a look at our gallery that has a collection of events conducted, arrangements, and decorations done by our innovative team. Come celebrate with us and get added to our gallery space.</h5>
                                </div>
                            </div>
                        </div>

                        {/* =============== */}


                        <div className='row galary_row2 ' >
                            <div className='col-lg-3  sidebar ' >

                            </div>
                            <div className='col-lg-9 '>
                                <div className='row'>
                                    {record.map((data, i) => (
                                        <div className='col-lg-3 galary_row2_div' key={i}>

                                            <img src={data.gallery_img} onClick={() => galary_list(data.gallery_id)} />
                                            <h2>{data.gallery_title}</h2>
                                        </div>
                                    ))}

                                </div>

                            </div>


                        </div>




                        {/* ================================footer */}





                    </div>
                </div>
            </div>
        </>

    )
}

export default Galary
