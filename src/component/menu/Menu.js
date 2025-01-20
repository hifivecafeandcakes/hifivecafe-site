import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/galary.css'
import Sidebar from '../Sidebar';

import menu1 from '../../theme/pdf/menu/1.jpg'
import menu2 from '../../theme/pdf/menu/2.jpg'
import menu3 from '../../theme/pdf/menu/3.jpg'
import menu4 from '../../theme/pdf/menu/4.jpg'
import menu5 from '../../theme/pdf/menu/5.jpg'
import menu6 from '../../theme/pdf/menu/6.jpg'
import menu7 from '../../theme/pdf/menu/7.jpg'
import menu8 from '../../theme/pdf/menu/8.jpg'
import menu9 from '../../theme/pdf/menu/9.jpg'
import menu10 from '../../theme/pdf/menu/10.jpg'
import menu11 from '../../theme/pdf/menu/11.jpg'
import menu12 from '../../theme/pdf/menu/12.jpg'
import menu13 from '../../theme/pdf/menu/13.jpg'
import menu14 from '../../theme/pdf/menu/14.jpg'
import menu15 from '../../theme/pdf/menu/15.jpg'
import menu16 from '../../theme/pdf/menu/16.jpg'
import menu17 from '../../theme/pdf/menu/17.jpg'
import menu18 from '../../theme/pdf/menu/18.jpg'
import menu19 from '../../theme/pdf/menu/19.jpg'
import menu20 from '../../theme/pdf/menu/20.jpg'
import menu21 from '../../theme/pdf/menu/21.jpg'
import menu22 from '../../theme/pdf/menu/22.jpg'
import menu23 from '../../theme/pdf/menu/23.jpg'
import menu24 from '../../theme/pdf/menu/24.jpg'
import menu25 from '../../theme/pdf/menu/25.jpg'
import menu26 from '../../theme/pdf/menu/26.jpg'
import menu27 from '../../theme/pdf/menu/27.jpg'
import menu28 from '../../theme/pdf/menu/28.jpg'
import menu29 from '../../theme/pdf/menu/29.jpg'
import menu30 from '../../theme/pdf/menu/30.jpg'
import menu31 from '../../theme/pdf/menu/31.jpg'
import menu32 from '../../theme/pdf/menu/32.jpg'
import menu33 from '../../theme/pdf/menu/33.jpg'


const Menu = () => {

    const [activeTab, setActiveTab] = useState('soup'); // State to keep track of the active tab

    const changeTab = (tabName) => {
        setActiveTab(tabName);
    };

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
                                <h1>MENU</h1>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-3  sidebar ' >

                            </div>
                            <div className='col-lg-9'>
                                <div className="tab-app row">
                                    <div className="tabs mob-fs-8 fs-12">
                                        <div>
                                            <button className={`tab-button ${activeTab === 'soup' ? 'active' : ''}`}
                                                onClick={() => changeTab('soup')}>
                                                Soups
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'salad' ? 'active' : ''}`}
                                                onClick={() => changeTab('salad')}
                                            >
                                                Salads
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'bread' ? 'active' : ''}`}
                                                onClick={() => changeTab('bread')}
                                            >
                                                Breads
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'burgar' ? 'active' : ''}`}
                                                onClick={() => changeTab('burgar')}
                                            >
                                                Burgers
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'sandwich' ? 'active' : ''}`}
                                                onClick={() => changeTab('sandwich')}
                                            >
                                                Sandwich
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'Egg-kebab' ? 'active' : ''}`}
                                                onClick={() => changeTab('Egg-kebab')}
                                            >
                                                Egg & kebab
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'pizza' ? 'active' : ''}`}
                                                onClick={() => changeTab('pizza')}
                                            >
                                                Pizza
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'shashlik' ? 'active' : ''}`}
                                                onClick={() => changeTab('shashlik')}
                                            >
                                                Shashlik
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'starter' ? 'active' : ''}`}
                                                onClick={() => changeTab('starter')}
                                            >
                                                Starter
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'main-course' ? 'active' : ''}`}
                                                onClick={() => changeTab('main-course')}
                                            >
                                                Main Course
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'pasta' ? 'active' : ''}`}
                                                onClick={() => changeTab('pasta')}
                                            >
                                                Pasta
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'rice' ? 'active' : ''}`}
                                                onClick={() => changeTab('rice')}
                                            >
                                                Rice
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'destes' ? 'active' : ''}`}
                                                onClick={() => changeTab('destes')}
                                            >
                                                Dessert
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'coffee' ? 'active' : ''}`}
                                                onClick={() => changeTab('coffee')}
                                            >
                                                Coffees
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'hot-tea' ? 'active' : ''}`}
                                                onClick={() => changeTab('hot-tea')}
                                            >
                                                Hot Tea
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'ice-tea' ? 'active' : ''}`}
                                                onClick={() => changeTab('ice-tea')}
                                            >
                                                Ice Tea
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'milkshake' ? 'active' : ''}`}
                                                onClick={() => changeTab('milkshake')}
                                            >
                                                Milkshake
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'mocktail' ? 'active' : ''}`}
                                                onClick={() => changeTab('mocktail')}
                                            >
                                                Mocktail
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'chickenliciuos' ? 'active' : ''}`}
                                                onClick={() => changeTab('chickenliciuos')}
                                            >
                                                Chickenliciuos
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'fishiliciuos' ? 'active' : ''}`}
                                                onClick={() => changeTab('fishiliciuos')}
                                            >
                                                Fishiliciuos
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                className={`tab-button ${activeTab === 'mutolicious' ? 'active' : ''}`}
                                                onClick={() => changeTab('mutolicious')}
                                            >
                                                Mutolicious
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className='imgbr '>
                                    <div className={` ${activeTab === 'soup' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu3}></img></div>
                                    <div className={` ${activeTab === 'salad' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu4}></img></div>
                                    <div className={` ${activeTab === 'bread' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu5}></img></div>
                                    <div className={` ${activeTab === 'burgar' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu6}></img></div>
                                    <div className={` ${activeTab === 'sandwich' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu7}></img></div>
                                    <div className={` ${activeTab === 'Egg-kebab' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu8}></img></div>
                                    <div className={` ${activeTab === 'pizza' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu9}></img></div>
                                    <div className={` ${activeTab === 'shashlik' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu10}></img></div>

                                    <div className={` ${activeTab === 'starter' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu11}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu12}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu13}></img></div>
                                    <div className={` ${activeTab === 'main-course' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu14}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu15}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu16}></img></div>
                                    <div className={` ${activeTab === 'pasta' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu17}></img></div>
                                    <div className={` ${activeTab === 'rice' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu18}></img></div>
                                    <div className={` ${activeTab === 'destes' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu19}></img></div>
                                    <div className={` ${activeTab === 'coffee' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu20}></img></div>
                                    <div className={` ${activeTab === 'hot-tea' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu21}></img></div>
                                    <div className={` ${activeTab === 'ice-tea' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu22}></img></div>
                                    <div className={` ${activeTab === 'milkshake' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu23}></img></div>
                                    <div className={` ${activeTab === 'mocktail' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu24}></img></div>
                                    <div className={` ${activeTab === 'chickenliciuos' ? 'show' : 'hide'}`}>
                                        <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu25}></img>
                                        <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu26}></img></div>
                                    <div className={` ${activeTab === 'fishiliciuos' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu27}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu28}></img></div>
                                    <div className={` ${activeTab === 'mutolicious' ? 'show' : 'hide'}`}><img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu29}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu30}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu31}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu32}></img>
                                    <img className="w-100 h-75 mb-4 mob-mt-20" width="" height="" src={menu33}></img></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Menu
