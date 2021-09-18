import React from 'react';


function Carousel() {
  

    return (
 <div>
  <div id="carouselExampleSlidesOnly"   className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1631937857/Imagen1_pdwbtz.png" style={{ height: "220px"}} className="d-block w-100 " alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1631938585/Imagen2_tn2au9.png" style={{ height: "220px"}}  className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1631938607/Imagen3_fyaja4.png" style={{ height: "220px"}}  className="d-block w-100 " alt=""/>
    </div>

   </div>
</div>

</div>    
    )
}

export default Carousel
