import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/sub_cat.css'
import Sidebar from '../Sidebar';

import bread1 from '../../theme/image/menu/breads/Aberu.jpg'
import bread2 from '../../theme/image/menu/breads/Ches-Garlic.jpg'
import bread3 from '../../theme/image/menu/breads/Chic-Brus.jpg'
import bread4 from '../../theme/image/menu/breads/Gar-Mus-Bru.jpg'

import burgar1 from '../../theme/image/menu/burgers/Chi-Gril-Bur.jpg'
import burgar2 from '../../theme/image/menu/burgers/Lam-Chees.jpg'
import burgar3 from '../../theme/image/menu/burgers/Pann-Bur.jpg'
import burgar4 from '../../theme/image/menu/burgers/Veg-Bur.jpg'


import coffee1 from '../../theme/image/menu/coffees/Americana.jpg'
import coffee2 from '../../theme/image/menu/coffees/Capac.jpg'
import coffee3 from '../../theme/image/menu/coffees/Espraso.jpg'
import coffee4 from '../../theme/image/menu/coffees/Latee.jpg'
import coffee5 from '../../theme/image/menu/coffees/Mocha.jpg'


import destes1 from '../../theme/image/menu/destes/Brownie.jpg'
import destes2 from '../../theme/image/menu/destes/Cap-Mous.jpg'
import destes3 from '../../theme/image/menu/destes/Carml-Cus.jpg'
import destes4 from '../../theme/image/menu/destes/Carot-Halwa.jpg'
import destes5 from '../../theme/image/menu/destes/Egg-Ben.jpg'
import destes6 from '../../theme/image/menu/destes/Elaner-Payasam.jpg'

import eggKebab1 from '../../theme/image/menu/Egg-kebab/Chick-Mela-Keb.jpg'
import eggKebab2 from '../../theme/image/menu/Egg-kebab/Chk-Keb.jpg'
import eggKebab3 from '../../theme/image/menu/Egg-kebab/Egg-Bene.jpg'
import eggKebab4 from '../../theme/image/menu/Egg-kebab/Panner-Kebab.jpg'
import eggKebab5 from '../../theme/image/menu/Egg-kebab/Scotch-Egg.jpg'
import eggKebab6 from '../../theme/image/menu/Egg-kebab/Spanis-Omb.jpg'

const MenuOLD = () => {

    const [activeTab, setActiveTab] = useState('bread'); // State to keep track of the active tab

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

                        <div className='row'>
                            <div className='col-lg-3  sidebar ' >
                                <Sidebar />
                            </div>
                            <div className='col-lg-9 galary_row1_1'>
                                <h1>MENU</h1>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-3 sidebar'></div>
                            <div className='col-lg-9'>

                           


                                <div className="tab-app row web-mt-20">
                                    <div className="tabs mob-fs-8">
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
                                                className={`tab-button ${activeTab === 'coffee' ? 'active' : ''}`}
                                                onClick={() => changeTab('coffee')}
                                            >
                                                Coffees
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
                                                className={`tab-button ${activeTab === 'Egg-kebab' ? 'active' : ''}`}
                                                onClick={() => changeTab('Egg-kebab')}
                                            >
                                                Egg & kebab
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className={` mt-3 ${activeTab === 'bread' ? 'show' : 'hide'}`}>
                                    <div className={`row `}>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={bread1} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Aberu</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={bread2} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Ches Garlic</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={bread3} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Chic Brus</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={bread4} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Gar & Mus Bru</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className={` mt-3 ${activeTab === 'burgar' ? 'show' : 'hide'}`}>
                                    <div className={`row `}>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={burgar1} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Chi Gril Bur</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={burgar2} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Lam Chees</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={burgar3} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Pann Bur</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={burgar4} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Veg Bur</h3>
                                        </div>
                                    </div>
                                </div>


                                <div className={` mt-3 ${activeTab === 'coffee' ? 'show' : 'hide'}`}>
                                    <div className={`row `}>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={coffee1} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Americana</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={coffee2} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Capac</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={coffee3} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Espraso</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={coffee4} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Latee</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={coffee5} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Mocha</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className={` mt-3 ${activeTab === 'destes' ? 'show' : 'hide'}`}>
                                    <div className={`row `}>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={destes1} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Brownie</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={destes2} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Cap Mous</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={destes3} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Carml Cus</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={destes4} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Carot Halwa</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={destes5} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Egg Ben</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={destes6} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Elaner Payasam</h3>
                                        </div>
                                    </div>
                                </div>


                                <div className={` mt-3 ${activeTab === 'Egg-kebab' ? 'show' : 'hide'}`}>
                                    <div className={`row `}>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={eggKebab1} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Chick Mela Keb</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={eggKebab2} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Chk Keb</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={eggKebab3} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Egg Bene</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={eggKebab4} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Panner Kebab</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={eggKebab5} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Scotch Egg</h3>
                                        </div>
                                        <div className='col-sm mb-4 sub_cat_2'>
                                            <img className="img" src={eggKebab6} />
                                            <h3 className='text-center orange' style={{ marginTop: '2vh' }}>Spanis Omb</h3>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MenuOLD
