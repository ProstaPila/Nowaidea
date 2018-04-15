import React from 'react'
import PropTypes from 'prop-types'
import { CelePageTemplate } from '../../templates/cele-page'

const CelePagePreview = ({ entry, widgetFor }) => (
  <CelePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'title'])}
    cover={entry.getIn(['data', 'cover' ])}
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        tags: entry.getIn(['data', 'tags']),
        title: entry.getIn(['data', 'title'])    

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
