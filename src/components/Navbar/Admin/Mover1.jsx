import React from 'react';
    import Slider from 'react-slick';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
import Trial2 from './Trial2';
import Trial3 from './Trial3';
import Trial4 from './Trial4';
import logo from '../../assets/logo-removebg-preview.png'


const Mover1 = () => {
    // const promotions= ['Promotion: 25% off on OAT MILK (150 ML) during weekends', 'Promotion: 20% off on Madagascar Hot Chocolate (350 ML) during weekends', 'Promotion: 15% off on Sea Salt Dark Mocha Frappe (450 ML) during weekends', 'Promotion: 20% off on ESPRESSO (30 ML) during weekends', 'Promotion: 25% off on Berliners (Lotus Biscoff Berliner) during weekends', 'Promotion: 10% off on Irish Americano (350 ML) during weekends', 'Promotion: 25% off on Iced Latte (350 Ml) during weekends', 'Promotion: 15% off on South Indian Filter Kaapi (250 Ml) during weekends', 'Promotion: 25% off on Cappucino (350 ML) during weekends', 'Promotion: 20% off on Tartlets (kodai cheese tartlet) during weekends', 'Promotion: 15% off on Pour Over during weekends', 'Promotion: 25% off on Iced Latte (450 ML) during weekends', 'Promotion: 15% off on Berliner Mix 3 Pcs (Nutella Berliner) during weekends', 'Promotion: 25% off on Hazelnut Frappe (450 ML) during weekends', 'Promotion: 10% off on Berliners (Blueberry Cheese Cake Berliner) during weekends']
    const promotions=["Combo 1: Mix Berliner  2 Pcs (Dark Choco Mousse Berliner) and Origanal South Indian Frappe (350 ML) at a special price of 325","Combo 2: Kaapicino (350 Ml) and South Indian Filter Kaapi (150 ML) at a special price of 413","Combo 3: Coconut Natkhatai (with Egg) and Baked Vada Pav at a special price of 403","Combo 4: Mix Tartlet 9 Pcs (Salted Caramel Tartlet) and Cappucino (250 ML) at a special price of 222","Combo 5: Mix Berliner  2 Pcs (Blueberry Cheese Cake Berliner) and South Indian Filter Kaapi (250 ML) at a special price of 219"]
  return (
    <div className=' w-full ' >
        <Slider 
        dots={true}
autoplay={true}
slidesToShow={1}
slidesToScroll={1}
autoplaySpeed={4000}
infinite={true}
arrows={true}>
            {promotions.map((promotion)=>{
                return(
                    <div class="container mx-auto">
            <div class="bg-[#AB877D] text-white text-center py-10 px-20 rounded-lg shadow-md relative">
                <img src={logo} class="w-40 mx-auto mb-4 rounded-lg "/>
                <h3 class="text-2xl font-semibold mb-4"> {promotion}</h3>
                <div class="flex items-center space-x-2 mb-6">
                    {/* <span id="cpnCode" class="border-dashed border text-white px-4 py-2 rounded-l">STEALDEAL20</span>
                    <span id="cpnBtn" class="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer">Copy Code</span>
                </div>
                <p class="text-sm">Valid Till: 20Dec, 2021</p> */}
                
<div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
<div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>

            </div>
        </div></div>
                )

            })}
            {/* Add more slides as needed */}
        </Slider>
    
   
   
    
        
    
    
      
    </div>
  )
}

export default Mover1