import { Link } from "react-router-dom";
import "../components/detail/detail.css"

export default function DetailProduct() {

  return (
    <>
      <div className="wrapper__detail__product">
        <Link to="/shop"><p style={{ paddingTop: '50px' }}>Back</p></Link>

        <div className="wrap_content_detail">
          <img src="https://mamuka.rest/upload/resize_cache/iblock/13b/900_1000_1/13bc52992617bb70ed0e54a25b53976e.jpg" alt="" />

          <div className="content-mainIfo">
            <h3>About dinner</h3>
            <p>
            Салат с лососем, с авокадо, вялеными томатами
            </p>

            <p>
            Состав: слабосоленый лосось, микс салата, сыр кремета, авокадо, вяленые томаты, грецкий орех, соус апельсиновый
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
