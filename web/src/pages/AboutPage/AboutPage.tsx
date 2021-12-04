import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const AboutPage = () => {
  return (
    <AppLayout>
      <MetaTags
        title="About"
        // description="About description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </AppLayout>
  )
}

export default AboutPage
