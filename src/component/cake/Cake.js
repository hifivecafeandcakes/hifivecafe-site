import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/galary.css'
import Sidebar from '../Sidebar';

import cake1 from '../../theme/image/cake/1.png'
import cake2 from '../../theme/image/cake/2.png'
import cake3 from '../../theme/image/cake/3.png'
import cake4 from '../../theme/image/cake/4.png'
import cake5 from '../../theme/image/cake/5.png'
import cake6 from '../../theme/image/cake/6.png'
import cake7 from '../../theme/image/cake/7.png'


const Cake = () => {

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
                                <h1>CAKES</h1>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-3  sidebar ' >

                            </div>
                            <div className='col-lg-9 galary_row1_2'>
                                <div>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake1}></img>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake2}></img>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake3}></img>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake4}></img>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake5}></img>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake6}></img>
                                <img className="w-100 h-75 mb-4" width="" height="" src={cake7}></img>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Cake
