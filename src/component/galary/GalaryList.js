import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/galary.css'
import Sidebar from '../Sidebar';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { faL } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player'
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';

import axios from 'axios'
import baseurl from '../Baseurl'

const GalaryList = () => {

    const [show, setShow] = useState(false)

    const galary_cat_id = localStorage.getItem("galary_cat_id")

    const [record, setRecord] = useState([])
    const [galary_title, setGalary_title] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}gallery/subcategory/get/list?gallery_cat_id=${galary_cat_id}`)
            .then((res) => {

                if (res.data.Response.Success == 1) {
                    setRecord(res.data.Response.result[0].gallery_sub_img)
                    setGalary_title(res.data.Response.result[0].gallery_sub_title)
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])





    // =========================
    const [current, setCurrent] = useState(0);
    const length = record.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(record) || record.length <= 0) {
        return null;
    }


    // ==================================================


    return (
        <>
            {
                !show ?
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
                                        <h1>{galary_title}</h1>

                                    </div>

                                </div>



                                <div className='row galary_row2 ' style={{ marginTop: '-5%' }}>
                                    <div className='col-lg-3  sidebar ' >

                                    </div>
                                    <div className='col-lg-9 '>
                                        <div className='row'>
                                            {record.map((imageUrl, i) => (
                                                <div className='col-lg-3 galary_row2_div' key={i}>
                                                    <img src={imageUrl} onClick={() => setShow(true)} alt={`Image ${imageUrl}`} />
                                                </div>
                                            ))}

                                        </div>

                                    </div>

                
                                </div>



                                {/* ================================footer */}

                              

                            </div>

                        </div>

                    </div>
                    :
                    <div className='container-fluid '>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='row nav_bar'>
                                    <Navbar />
                                </div>

                                <div className='row galary_row1'>
                                    <div className='col-lg-3  sidebar ' >
                                        <Sidebar />
                                    </div>
                                    <div className='col-lg-9  '>

                                        <section className='slider'>
                                            <FaArrowAltCircleLeft className='left-arrow' style={{ color: 'orange' }} onClick={prevSlide} />
                                            <FaArrowAltCircleRight className='right-arrow' style={{ color: 'orange' }} onClick={nextSlide} />
                                            {record.map((slide, index) => {
                                                return (
                                                    <div
                                                        className={index === current ? 'slide active' : 'slide'}
                                                        key={index}
                                                    >
                                                        {index == current && (
                                                            <img src={slide} alt='travel image' className='image' />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </section>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

            }














        </>
    )
}

export default GalaryList
