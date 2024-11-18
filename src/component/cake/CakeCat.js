import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../theme/css-component/cake_cat.css"
import Navbar from "../Navbar";
import Sidebar from '../Sidebar'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image1 from '../../theme/assets/crsl_1.webp';
import Image2 from '../../theme/assets/crsl_2.webp';
import CatImage1 from '../../theme/assets/cate_1.jpg';
import CatImage2 from '../../theme/assets/cate_2.jpg';
import CatImage3 from '../../theme/assets/cate_3.jpg';
import CatImage4 from '../../theme/assets/cate_4.jpg';
import CatImage5 from '../../theme/assets/cate_5.jpg';
import Cake1 from '../../theme/assets/cake_1.jpg';
import Cake2 from '../../theme/assets/cake_2.jpg';
import Cake3 from '../../theme/assets/cake_3.jpg';
import Category1 from '../../theme/assets/redVelvet.jpg';
import Category2 from '../../theme/assets/chocoTruffle.jpg';
import Category3 from '../../theme/assets/ButterscotchCake.jpg';
import Category4 from '../../theme/assets/CappuccinoCake.jpg';
import Category5 from '../../theme/assets/blackForest.jpg';
import Category6 from '../../theme/assets/chaiLayerCake.jpg';
import Category7 from '../../theme/assets/GulabLayerJamunCake.jpg';
import Category8 from '../../theme/assets/rasamalaiDippingCake.jpg';
import Category9 from '../../theme/assets/rasagukaFilledCake.jpg';

import axios from 'axios'
import baseurl from '../Baseurl'

const CakeCat = () => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath: Image1,
        },
        {
            label: 'Bird',
            imgPath: Image2,
        },
    ];

    function SwipeableTextMobileStepper() {
        const theme = useTheme();
        const [activeStep, setActiveStep] = React.useState(0);
        const maxSteps = images.length;

        const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        const handleStepChange = (step) => {
            setActiveStep(step);
        };


        // =================================================

        const [cake_cat_data, setCake_cat_data] = useState([])

        useEffect(() => {

            axios.get(`${process.env.REACT_APP_API_URL}cake/category/get/list`)
                .then((res) => {
                    if (res.data.Response.Success == 1) {
                        setCake_cat_data(res.data.Response?.result)
                    }
                })
                .catch((err) => {
                    console.log("error");
                })
        }, [])





        const cake_scat = (e) => {
            localStorage.setItem("cake_cat_id",e)
            window.location.href='/cake_sub'

        }

        return (
            <>
                <div className='container-fluid ' >
                    <div className='row'>
                        <div className='col-lg-12 home_full'>
                            <div className='row'>
                                <Navbar />
                            </div>

                            <div className='row mt-5'>

                                <div className='col-lg-12 cake_cat_col1' >


                                    <div className='row cake_cat_col1_row'>
                                        <h1>FRESH CREAM</h1>
                                    </div>

                                    <Box sx={{ maxWidth: "100%", flexGrow: 1, height: '60%' }}>
                                        <AutoPlaySwipeableViews
                                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                            index={activeStep}
                                            onChangeIndex={handleStepChange}
                                            enableMouseEvents
                                        >
                                            {images.map((step, index) => (
                                                <div key={index}>
                                                    {Math.abs(activeStep - index) <= 2 ? (
                                                        <Box
                                                            className='corosel'
                                                            component="img"
                                                            src={step.imgPath}
                                                            alt={step.label}

                                                        />
                                                    ) : null}
                                                </div>
                                            ))}
                                        </AutoPlaySwipeableViews>
                                        <MobileStepper style={{ marginTop: '-6vh' }}
                                            steps={maxSteps}
                                            position="static"
                                            activeStep={activeStep}
                                            nextButton={
                                                <Button
                                                    size="small"
                                                    onClick={handleNext}
                                                    disabled={activeStep === maxSteps - 1}
                                                >
                                                    Next
                                                    {theme.direction === 'rtl' ? (
                                                        <KeyboardArrowLeft />
                                                    ) : (
                                                        <KeyboardArrowRight />
                                                    )}
                                                </Button>
                                            }
                                            backButton={
                                                <Button
                                                    size="small"
                                                    onClick={handleBack}
                                                    disabled={activeStep === 0}
                                                >
                                                    {theme.direction === 'rtl' ? (
                                                        <KeyboardArrowRight />
                                                    ) : (
                                                        <KeyboardArrowLeft />
                                                    )}
                                                    Back
                                                </Button>
                                            }
                                        />
                                    </Box>


                                    <div className="row" id='catRimage' >
                                        <div className='catImg'><img src={CatImage1} alt="" className='imgBox' /></div>
                                        <div className='catImg'><img src={CatImage2} alt="" className='imgBox' /></div>
                                        <div className='catImg'><img src={CatImage3} alt="" className='imgBox' /></div>
                                        <div className='catImg'><img src={CatImage4} alt="" className='imgBox' /></div>
                                        <div className='catImg'><img src={CatImage5} alt="" className='imgBox' /></div>
                                    </div>


                                    <div className="row" id='ImgDiv'>
                                        <div className="col-lg-4 my-2 d-flex align-items-center justify-content-center"><img className='Img' src={Cake1} alt="" /></div>
                                        <div className="col-lg-4 my-2 d-flex align-items-center justify-content-center"><img className='Img' src={Cake2} alt="" /></div>
                                        <div className="col-lg-4 my-2 d-flex align-items-center justify-content-center"><img className='Img' src={Cake3} alt="" /></div>
                                    </div>

                                    <div className="row catstart">
                                        <p className='text-center' id='textTop'>OUR TOP SELLERS</p>
                                    </div>


                                    <div className="row" id='catOV'>
                                        {cake_cat_data.map((data, i) => (
                                            <div className="col-lg-4" id='catDiv' key={i}>
                                                <img className='categoryImage' onClick={()=>cake_scat(data.cake_id)} src={data.cake_img} alt="" />
                                                <p className='cakeTitle'>{data.cake_title}</p>
                                            </div>
                                        ))}


                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )


    }

    return <SwipeableTextMobileStepper />;


}

export default CakeCat


