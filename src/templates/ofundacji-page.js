import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO/seo';
import config from "../../data/SiteConfig";

export const OfundacjiPageTemplate = ({ title, content, contentComponent, slug, postNode, thumbnail, description }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <SEO postPath={slug} postNode={postNode} postSEO />
    <section className="hero is-info is-small ">
  <div className="hero-body">
    <div className="full-width-image-container">
      <img src={thumbnail} alt={description}/>
          </div>
  </div>
</section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

OfundacjiPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  slug: PropTypes.string,
  excerpt: PropTypes.string
}

const OfundacjiPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <OfundacjiPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      postNode={data.markdownRemark}
      slug={post.fields.slug}
      thumbnail={post.frontmatter.thumbnail}
      description={post.frontmatter.description}
      
    />
  )
}

OfundacjiPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OfundacjiPage

export const ofundacjiPageQuery = graphql`
  query OfundacjiPage($id: String!) {
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
