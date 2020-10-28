import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({ data }) {

  const {gcms: {homePages}} = useStaticQuery(pageQuery) 
  
  return (
    <Layout>
      <SEO title="Home" />

      {homePages.map(({...homePage}) =>
        <h1 key="{homePage.id}">{homePage.heroText}</h1>
      )}

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
  
}

export const pageQuery = graphql`
  query {
    gcms {
      homePages(first: 1) {
        heroText
        id
      }
    }
  }
`;


