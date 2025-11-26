import './InstagramFeed.scss'
import clsx from 'clsx'
import InstagramPost from "@/components/InstagramPost/index.js";
import instagramPosts from "@/data/instagramPosts.js";
import Button from "@/components/Button/index.js";
import MyIcon from "@/components/MyIcon/index.js";

export default () => {

  return (
    <section
      className = 'instagram-feed section'
    >
      <header className="instagram-feed__header">
        <h2 className="instagram-feed__title">Check out @foodieland on Instagram</h2>
        <div className="instagram-feed__description">
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
      </header>
      <div className="instagram-feed__body container">
        <ul className="instagram-feed__list">
          {instagramPosts.map(({postSrc}) => (
            <li className= 'instagram-feed__item'>
              <InstagramPost
                postSrc={postSrc}
                postWidth={290}
              />
            </li>
          ))}
        </ul>
        <Button
          href="/"
          className='instagram-feed__button'
        >
          <span>Visit Our Instagram</span>
          <MyIcon name='instagram' hasFill />
        </Button>
      </div>
    </section>
  )
}
