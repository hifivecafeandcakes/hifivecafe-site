import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/galary.css'
import Sidebar from '../Sidebar';


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
                                    <h5>This part is something where our work speaks and not words. Have a look at our gallery that has a collection of events conducted, arrangements, and decorations done by our innovative team. Come celebrate with us and get added to our gallery space.</h5>
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
