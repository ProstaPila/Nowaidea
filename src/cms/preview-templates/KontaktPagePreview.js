import React from 'react'
import PropTypes from 'prop-types'
import { KontaktPageTemplate } from '../../templates/kontakt-page'

const KontaktPagePreview = ({ entry, widgetFor }) => (
  <KontaktPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

KontaktPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default KontaktPagePreview
