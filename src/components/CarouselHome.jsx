import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CarouselHome = () => {
    return (
        <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showThumbs={false} width={'95%'}>
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/146371181.jpg?k=f25014da08741717dd07915c641214c7028f8b581409c303583f4a9e3f1bcccb&o=&hp=1" alt={'homepic'} />
            </div>
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/333469775.jpg?k=c9574c1d267996124a5f5896eb3abc12689be53682ef9e66a73d59c96018a7b1&o=&hp=1" alt={'homepic'}/>
            </div>
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/333470485.jpg?k=009a115e013f9783210365084d263f8fe18e6b07c8bafc92a75d3287056a10fd&o=&hp=1" alt={'homepic'}/>
            </div>
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/333166097.jpg?k=5db705ce3cb5d922f78364475b10f79bbef53c87554607306cbabe55b5d245aa&o=&hp=1" alt={'homepic'}/>
            </div>
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/330662152.jpg?k=c1d3caec02555f38f83025446d53b77c08e520b1669df8356398259b44d42785&o=&hp=1" alt={'homepic'}/>
            </div>
        </Carousel>
    );
};

export default CarouselHome;