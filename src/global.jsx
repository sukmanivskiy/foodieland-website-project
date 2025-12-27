import '@/styles'
import { Head } from 'minista'
import Section from "@/layouts/Section";
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'
import ogImage from  '@/assets/images/og-default.jpg'

export default (props) => {
  const { children, title, url } = props
  const description = 'Foodieland — your trusted destination for delicious recipes, cooking tips, and inspiring food stories.'
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Foodieland | {title}</title>
        <script src="/src/main.js" type="module" />

        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content='https://foodieland-website-project.vercel.app/assets/og-default.jpg' />
        <meta property="og:url" content='https://foodieland-website-project.vercel.app/' />
        <meta property="og:site_name" content="Foodieland" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content='https://foodieland-website-project.vercel.app/assets/og-default.jpg' />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
