import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import data from "./data.json";
import FilmCard from "./filmCard";

export const StyledSwiper = styled(Swiper)`
  & .swiper-button-next,
  .swiper-button-prev {
    color: #fdff7a;
  }
`;

const Banner = () => {
  return (
    <StyledSwiper
      navigation
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {data.map(
        (value: {
          key: number;
          image: string;
          title: string;
          tags: string[];
          year: number;
        }) => (
          <SwiperSlide key={`${value.key}-${value.title}`}>
            <FilmCard
              title={value.title}
              tags={value.tags}
              image={value.image}
              year={value.year}
            ></FilmCard>
          </SwiperSlide>
        )
      )}
    </StyledSwiper>
  );
};
export default Banner;
