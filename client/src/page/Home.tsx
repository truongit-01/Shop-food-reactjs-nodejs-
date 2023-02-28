import Slider from "react-slick";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import HeaderHome from "../components/home/HeaderHome";
import "../components/home/Home.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ButtonMore from "../components/ButtonMore";

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const data = [
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/85d/700_9999_1/85dbc36067a19873a842761cc5f3a8d7.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/dcc/700_9999_1/dcc4459f90e0ee7a9c4a462faf6c0c4b.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/e04/700_9999_1/e0439b48d92d72a720d2082a457022e9.jpg" },
    { src: "https://mamuka.rest/upload/iblock/37a/37a00b3eeb558112ba1f7880171b0750.jpg" },
  ]

  return (
    <div>
      <div className="wrap_home">
        <img className="main_img" src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551438228969-H0FPV1FO3W5B0QL328AS/chup-anh-thuc-an-1.jpg" alt="main-img" />

        <div className="backdrop">
          {/* header home */}
          <HeaderHome />

          {/*  */}
          <ul className="box_introduce">
            <li className="first" >
              <h1>About the restaurant</h1>
              <p>
                "Mamuka" là một nhà hàng gia đình kiểu Georgia được tạo ra theo truyền thống hiếu khách tốt nhất của miền Nam. Chúng tôi đã cố gắng kết hợp phong cách tinh tế, hương vị phong phú của Gruzia và mức độ tiện nghi hiện đại. Và khi thức ăn ngon được kết hợp với dịch vụ chất lượng, bạn sẽ có được một nhà hàng mà bạn muốn quay lại lần nữa.
              </p>
              <p className="btn_more"><b>More about us</b></p>
            </li>
            <li className="second">
              <iframe src="//player.vimeo.com/video/231571928?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </li>
          </ul>

          {/* Chef Famous */}
          <div className="wrapp__chefFamous-home">
            <h2 > Đầu Bếp Hàng Đầu</h2>
            <Slider {...settings}>
              {data.map((data) => (
                <>
                  <Link to="/chef-famous-detail">
                    <img style={{ width: "90%", height: "265px", margin: 'auto', borderRadius: '18px' }} src={data.src} />
                  </Link>

                </>
              ))}
            </Slider>

            <div style={{ marginTop: '30px' }}>
              <Link to="/chef-famous">
                {/* <ButtonMore /> */}
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '140px', display: 'flex', flexWrap: 'wrap', paddingTop: '20px', width: '90%', margin: 'auto', borderTop: '2px solid #BF014B' }}>
            <div style={{ width: '32%', paddingRight: '20px' }}>
              <div className="ccc">
                <div className="items">
                  <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/cd0/600_600_1/cd01de56a7be73e3f5eb5a9be475fc18.jpg" />
                </div>
                <div className="items">
                  <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/d25/600_600_1/d259804b9a895cf765e9ef22ac95e80b.jpg" />
                </div>
                <div className="items">
                  <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/34f/600_600_1/34f2543d35ddbfb4ed1dfcfdf57eba96.jpg" />
                </div>
                <div className="items">
                  <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/cd0/600_600_1/cd01de56a7be73e3f5eb5a9be475fc18.jpg" />
                </div>
              </div>
            </div>

            <div style={{ width: '68%' }}>
              <ul className="box_introduce2">
                <li className="first" >
                  <h1>About the restaurant</h1>

                  <p>
                    "Mamuka" là một nhà hàng gia đình kiểu Georgia được tạo ra theo truyền thống hiếu khách tốt nhất của miền Nam. Chúng tôi đã cố gắng kết hợp phong cách tinh tế, hương vị phong phú của Gruzia và mức độ tiện nghi hiện đại. Và khi thức ăn ngon được kết hợp với dịch vụ chất lượng, bạn sẽ có được một nhà hàng mà bạn muốn quay lại lần nữa.
                  </p>

                  <p className="btn_more"><b>More about us</b></p>
                </li>
              </ul>
            </div>
          </div>



          {/* <div style={{ marginTop: '140px', display: 'flex', background: '', width: '90%', margin: 'auto', borderTop: '2px solid #BF014B' }}>
            <div style={{ width: '100%' }}>
              <ul className="box_introduce2">
                <li className="first" >
                  <h1>About the restaurant</h1>

                  <p>
                    "Mamuka" là một nhà hàng gia đình kiểu Georgia được tạo ra theo truyền thống hiếu khách tốt nhất của miền Nam. Chúng tôi đã cố gắng kết hợp phong cách tinh tế, hương vị phong phú của Gruzia và mức độ tiện nghi hiện đại. Và khi thức ăn ngon được kết hợp với dịch vụ chất lượng, bạn sẽ có được một nhà hàng mà bạn muốn quay lại lần nữa.
                  </p>

                  <p className="btn_more"><b>More about us</b></p>
                </li>
              </ul>
            </div>

            <div style={{ width: '42%', paddingTop: '40px' }}>
              <div className="ccc">
                <div className="items">
                  <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/cd0/600_600_1/cd01de56a7be73e3f5eb5a9be475fc18.jpg" />
                </div>
              </div>
            </div>

          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
