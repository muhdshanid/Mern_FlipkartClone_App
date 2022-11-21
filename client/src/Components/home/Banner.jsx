import React from 'react'
import Carousel from 'react-multi-carousel'
import { bannerData } from '../../constans/data';
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel slidesToSlide={1} keyBoardControl={true}  autoPlaySpeed={4000} autoPlay={true} infinite={true} swipeable={false}
    draggable={false} containerClass="carousel-container" dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px" responsive={responsive}>
        {bannerData.map((data)=>(
            <img style={{width:"100%",height:"280px"}} src={data.url} alt="banner" />
        ))}
    </Carousel>
  )
}

export default Banner