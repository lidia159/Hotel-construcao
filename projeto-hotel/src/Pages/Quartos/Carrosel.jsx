
import React from 'react';



function AppCar (){

return(
  
<div className="Car" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="../../../public/quarto1.jpg" class="d-block w-100 h-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="../../../public/sacada.jpg" class="d-block w-100 " alt="..." />
    </div>
    <div class="carousel-item">
      <img src="../../../public/banheiro.jpg" class="d-block w-100 h-50" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

)
}
export default AppCar;
