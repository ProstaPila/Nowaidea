import React from 'react'
import PropTypes from 'prop-types'
import { CelePageTemplate } from '../../templates/cele-page'

const CelePagePreview = ({ entry, widgetFor }) => (
  <CelePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    slug={entry.getIn(['fields', 'slug'])}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'slug'])}
    description={entry.getIn(['data', 'description'])}
    helmet={entry.getIn(['data', 'title'])}
      postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ])   

      }
      

      }}
  />
)

CelePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CelePagePreview
