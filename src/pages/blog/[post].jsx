import './post.scss'
import Article from "@/components/Article/Article.jsx";
import SubscriptionCTA from "@/sections/SubscriptionCTA/index.js";
import RecipeSuggestions from "@/sections/RecipeSuggestions/index.js";
import blogs from "@/data/blogs.js";
import PostHeader from "@/sections/PostHeader/index.js";
import {Image} from "minista";
import Soc1als from "@/components/Soc1als/index.js";

export async function getStaticData() {
  return blogs.map((item) => ({
    props: {...item},
    paths: { post: item.href },
  }));
}

export default function (props) {
  const {
    linkLabel,
    tags,
    author,
    imgSrc,
    description,
    fullDescription,
    nutritionList,
    nutritionDescription,
    ingredients,
    article,
  } = props;
  return (
    <article className = "post container">
      <PostHeader
        className = "post__header"
        linkLabel={linkLabel}
        description={description}
        author={author}
      />
      <Image
        className = "post__image"
        src={imgSrc}
        width={800}
        height={600}
      />
      <div className="post__body">
        <Article
          className="post__details section "
          article={article}
        />
        <Soc1als
          className='post__soc1als section hidden-mobile-s'
          isColumn
        />
      </div>

      <SubscriptionCTA
        className = "post__subscription-cta" />
      <RecipeSuggestions
        className = "post__suggestions"
        isSmall
      />
    </article>
  );
}