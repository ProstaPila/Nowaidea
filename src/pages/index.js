import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
      

      <section className="hero is-success is-fullheight myhero">
      <div className="hero-body">
    <div className="container has-text-centered">
    <div className="biglogo">
              <div className="fund">Fundacja:</div>
              <div className="idea">IDEA<br></br>NOWA</div>
              <div className="catchphrase">Idealni Racjonaliści</div>
            </div>
    </div>
  </div> 
           
      
      </section>
      <section className="section">
        <div className="container">

                 

        <div className="columns">
           <div className="column">
          <div className="content">
                     <h1 className="has-text-weight-bold is-size-2">Nasze Projekty</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'projekt-post')
            .map(({ node: post }) => (

              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <img src={post.frontmatter.thumbnail} alt={post.frontmatter.description} />
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Czytaj Więcej →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </div>
      
      <div className="columns">
           <div className="column">

             {posts
            .filter(post => post.node.frontmatter.templateKey === 'cele-page')
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Czytaj Więcej →
                  </Link>
                </p>
              </div>
            ))}

            </div>

            <div className="column">

{posts
.filter(post => post.node.frontmatter.templateKey === 'ofundacji-page')
.map(({ node: post }) => (
 <div
   className="content"
   style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
   key={post.id}
 >
   <p>
     <Link className="has-text-primary" to={post.fields.slug}>
       {post.frontmatter.title}
     </Link>
     
   </p>
   <p>
     {post.excerpt}
     <br />
     <br />
     <Link className="button is-small" to={post.fields.slug}>
       Czytaj Więcej →
     </Link>
   </p>
 </div>
))}

</div>
            </div>


      <div className="columns">
           <div className="column">

             </div></div>
             </div>
      </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
            description
            templateKey
            date(formatString: "MMMM DD, YYYY", locale: "pl")
          }
        }
      }
    }
  }
`
