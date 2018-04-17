import React from 'react'
import PropTypes from 'prop-types'
import { ProjektPostTemplate } from '../../templates/projekt-post'
import Content, { HTMLContent } from '../components/Content'

const ProjektPostPreview = ({ entry, widgetFor }) => (
  <ProjektPostTemplate
    content={widgetFor('body')}
    contentComponent={HTMLContent} 
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    slug={entry.getIn(['data', 'slug' ])}
    helmet={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data',"date"])}
    
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        tags: entry.getIn(['data', 'tags']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ]),
        date: entry.getIn(['data', 'date']),


      }
      

      }}
  />
)

ProjektPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjektPostPreview