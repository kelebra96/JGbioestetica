import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialCard from './TestimonialCard';
import { Container } from '../Layout';
import {
  TestimonialsContainer,
  TestimonialsTitle,
  TestimonialsSubtitle,
  SwiperContainer
} from './styles';

const Testimonials = () => {
  // Hardcoded testimonial data - will be replaced by CMS in future task
  const testimonials = [
    {
      id: 1,
      quote: "Excelente atendimento e resultados incríveis! A equipe da JG Bioestética é muito profissional e atenciosa. Recomendo a todos!",
      author: "Maria Silva",
      role: "Cliente"
    },
    {
      id: 2,
      quote: "Fiz vários procedimentos e sempre fiquei satisfeita. O ambiente é acolhedor e os profissionais são muito qualificados.",
      author: "Ana Costa",
      role: "Cliente"
    },
    {
      id: 3,
      quote: "Superou todas as minhas expectativas! Os tratamentos são modernos e eficazes. Já indiquei para várias amigas.",
      author: "Carla Oliveira",
      role: "Cliente"
    }
  ];

  return (
    <TestimonialsContainer>
      <Container>
        <TestimonialsTitle>O Que Nossos Clientes Dizem</TestimonialsTitle>
        <TestimonialsSubtitle>
          Confira os depoimentos de quem já experimentou nossos serviços
        </TestimonialsSubtitle>

        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;