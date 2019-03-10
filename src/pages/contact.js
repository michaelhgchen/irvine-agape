import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
      <iframe
        allowfullscreen
        frameborder="0"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1655.7612175396564!2d-117.79207706069626!3d33.69118064301656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x845c6270e3641907!2sDeerfield+Community+Park!5e0!3m2!1sen!2sus!4v1552177274732"
        style={{ border: 0 }}
        title="Irvine Agape Christian Church map"
        width="600"
      />
  </Layout>
)

export default ContactPage
