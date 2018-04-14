import React from 'react'
import PropTypes from 'prop-types'
import { OfundacjiPageTemplate } from '../../templates/ofundacji-page'

const OfundacjiPagePreview = ({ entry, widgetFor }) => (
  <OfundacjiPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

OfundacjiPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OfundacjiPagePreview
