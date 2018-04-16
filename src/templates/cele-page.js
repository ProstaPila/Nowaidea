import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO/seo';
import config from "../../data/SiteConfig";

export const CelePageTemplate = ({ title, content, contentComponent, slug, postNode, thumbnail, description, helmet }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      {helmet}
    <SEO postPath={slug} postNode={postNode} postSEO />
    <section 
  className="hero is-info is-small " style={{
    background: "url(" + thumbnail + ")",
    backgroundSize: "cover",
    backgroundPosition: "bottom"
      }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column"> 
            <div className="mytitle">
              {title}
              </div>
          </div>
  </div>
  </div>
  </div>
</section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

CelePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  slug: PropTypes.string,
  excerpt: PropTypes.string
}

const CelePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
    <CelePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      postNode={data.markdownRemark}
      content={post.html}
      slug={post.fields.slug}
      helmet={<Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`}/>}
      description={post.frontmatter.description}
      thumbnail={post.frontmatter.thumbnail}
    />
  )
}

CelePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CelePage

export const celePageQuery = graphql`
 query CelePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
    html
    excerpt
    fields {
      slug
    }
      frontmatter {
        title
        thumbnail
        description
        
        
      }
    }
  }
`
