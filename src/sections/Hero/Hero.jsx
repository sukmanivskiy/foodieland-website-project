import './Hero.scss'
import HeroCard from "@/components/HeroCard/index.js";
import heroSlides from "@/data/heroSlides.js";

export default () => {

  return (
    <section className="hero ce" aria-labelledby="hero-title">
      <div className="hero__slider swiper" data-js-slider={JSON.stringify({
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 1,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 25
        }
      })}>
        <ul className = " hero__slider-list swiper-wrapper">
          {heroSlides.map((
            {
              category,
              title,
              TitleTag,
              description,
              tags,
              author,
              imgSrc,
            }) => (
            <li className = "hero__slider-item swiper-slide">
              <HeroCard
                category={{
                  imgSrc: category.imgSrc,
                  label: category.label,
                }}
                title = {title}
                TitleTag = {TitleTag}
                description = {description}
                tags = {tags}
                author={author}
                imgSrc ={imgSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
