import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Sample = () => {
return (
  <div className="App">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide><img src="img/p_main1.jpg" alt="ban" /></SwiperSlide>
    <SwiperSlide><img src="img/p_main1.jpg" alt="ban" /></SwiperSlide>
  </Swiper>
  </div>
);
};
export default Sample;