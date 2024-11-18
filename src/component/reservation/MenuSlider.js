import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';


const MenuSlider = ({ menuImages }) => {

    const [refreshKey, setRefreshKey] = useState(0); // Key to force re-render


    const [curmenuImages, setCurmenuImages] = useState([]); //actual data



    useEffect(() => {
        setCurmenuImages([...menuImages]);
        console.log(curmenuImages);
        setRefreshKey(prevKey => prevKey);
    }, [menuImages]);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        (curmenuImages.length > 0) ?
            <>
                <Slider key={refreshKey} {...settings} style={{
                    width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    {/* {curmenuImages.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: '100%', height: "60vh", borderRadius: '10%' }}
                                />
                            </div>
                        )
                    })
                    } */}
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>

                </Slider>
            </> : ""
    )

}

export default MenuSlider