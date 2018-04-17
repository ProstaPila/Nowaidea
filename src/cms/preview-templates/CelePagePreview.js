import React from 'react'
import PropTypes from 'prop-types'
import { CelePageTemplate } from '../../templates/cele-page'
import '../../layouts/all.sass'

const CelePagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.get('data').toJS();
  const { title, content, slug, thumbnail, postPath, decription, helmet, postNode } = data;
  return <CelePageTemplate
    title={title}
    content={content}
    slug={slug}
    thumbnail={thumbnail}
    postPath={postPath}
    description={description}
    helmet={helmet}
    postNode={{
      frontmatter: {
        description: {description},
        title: {title},
        thumbnail: {thumbnail}   
     }
      

      }}
  />
}


CelePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CelePagePreview
