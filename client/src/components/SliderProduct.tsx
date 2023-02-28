import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../components/components.css';

interface propsCarosel {
    onClick: any
}

interface data {
    _id: number
    imgCourses: string,
    nameCourses: string,
    descriptionCourses: string,
}

function SampleNextArrow(props: propsCarosel) {
    const { onClick } = props;

    return (
        <div className="next_arrow" onClick={onClick} ></div>
    );
}

function SamplePrevArrow(props: propsCarosel) {
    const { /* className, style, */ onClick } = props;
    return (
        <div onClick={onClick} className='prev_arrow'></div>
    );
}

export default function SliderProduct() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        // axios.get(`http://localhost:8080/api/v1/products-courses`).then(data => setProduct(data.data['productCourses']))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow onClick={undefined} />,
        prevArrow: <SamplePrevArrow onClick={undefined} />
    };

    return (
        <div>
            <Slider {...settings} className="slider_Product" >
                {/* {product.map((data: data) => (
                    <Link to={`/detail-product/${data._id}`}>
                        <div className="w-[233px] cursor-pointer">
                            <p><img src={data.imgCourses} alt="" /></p>
                            <p><b>{data.nameCourses}</b></p>
                            <p>{data.descriptionCourses}</p>
                            <p>ádfasdasdasd</p>
                        </div>
                    </Link>

                ))} */}
                <div className="w-[233px] cursor-pointer">
                    <p><img src="https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp" alt="" /></p>
                    <p><b>ss</b></p>
                    <p>đ</p>
                    <p>ádfasdasdasd</p>
                </div>

                <div className="w-[233px] cursor-pointer">
                    <p><img src="https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp" alt="" /></p>
                    <p><b>ss</b></p>
                    <p>đ</p>
                    <p>ádfasdasdasd</p>
                </div>

                <div className="w-[233px] cursor-pointer">
                    <p><img src="https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp" alt="" /></p>
                    <p><b>ss</b></p>
                    <p>đ</p>
                    <p>ádfasdasdasd</p>
                </div>

                <div className="w-[233px] cursor-pointer">
                    <p><img src="https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp" alt="" /></p>
                    <p><b>ss</b></p>
                    <p>đ</p>
                    <p>ádfasdasdasd</p>
                </div>

                <div className="w-[233px] cursor-pointer">
                    <p><img src="https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp" alt="" /></p>
                    <p><b>ss</b></p>
                    <p>đ</p>
                    <p>ádfasdasdasd</p>
                </div>

                <div className="w-[233px] cursor-pointer">
                    <p><img src="https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp" alt="" /></p>
                    <p><b>ss</b></p>
                    <p>đ</p>
                    <p>ádfasdasdasd</p>
                </div>
            </Slider>

        </div>


    );
}