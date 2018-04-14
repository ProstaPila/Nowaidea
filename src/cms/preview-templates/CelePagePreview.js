import React from 'react'
import PropTypes from 'prop-types'
import { CelePageTemplate } from '../../templates/cele-page'

const CelePagePreview = ({ entry, widgetFor }) => (
  <CelePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CelePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CelePagePreview
