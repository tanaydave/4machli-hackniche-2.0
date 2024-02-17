import React from 'react'
import Slider from "react-slick";


const Tanay = () => {
    const promotions= ['Promotion: 25% off on OAT MILK (150 ML) during weekends', 'Promotion: 20% off on Madagascar Hot Chocolate (350 ML) during weekends', 'Promotion: 15% off on Sea Salt Dark Mocha Frappe (450 ML) during weekends', 'Promotion: 20% off on ESPRESSO (30 ML) during weekends', 'Promotion: 25% off on Berliners (Lotus Biscoff Berliner) during weekends', 'Promotion: 10% off on Irish Americano (350 ML) during weekends', 'Promotion: 25% off on Iced Latte (350 Ml) during weekends', 'Promotion: 15% off on South Indian Filter Kaapi (250 Ml) during weekends', 'Promotion: 25% off on Cappucino (350 ML) during weekends', 'Promotion: 20% off on Tartlets (kodai cheese tartlet) during weekends', 'Promotion: 15% off on Pour Over during weekends', 'Promotion: 25% off on Iced Latte (450 ML) during weekends', 'Promotion: 15% off on Berliner Mix 3 Pcs (Nutella Berliner) during weekends', 'Promotion: 25% off on Hazelnut Frappe (450 ML) during weekends', 'Promotion: 10% off on Berliners (Blueberry Cheese Cake Berliner) during weekends']
    const renderSlides = () =>
    carImgs.map((image) => (
      <div>
        <h1 style={{color:"red"}}>{image.tagline}</h1>
      </div>
    ));

    const carImgs = [
        {
          id: 1,
          tagline:
            "It is not how much we give but how much love we put into giving",
          button: "Donate Now",
          
        },
        {
          id: 2,
          tagline:
            "It is not how much we give but how much love we put into giving",
          button: "Become a Volunteer",
          
          
        },
        {
          id: 3,
          tagline:
            "It is not how much we give but how much love we put into giving",
          button: "Become a Partner",
          
          
        },
      ];
  return (
    <div className="flex overflow-hidden w-[98.9vw] ">
        <Slider
          dots={true}
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplaySpeed={4000}
          infinite={true}
          arrows={false}
        >
            
          {renderSlides()}
        </Slider>
        
      </div>
  )
}

export default Tanay
