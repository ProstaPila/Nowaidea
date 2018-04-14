import CMS from 'netlify-cms'
import OfundacjiPagePreview from './preview-templates/OfundacjiPagePreview'
import ProjektgatPostPreview from './preview-templates/ProjektPostPreview'
import CelePagePreview from './preview-templates/CelePagePreview'
import KontaktPagePreview from './preview-templates/KontaktPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('ofundacji', OfundacjiPagePreview)
CMS.registerPreviewTemplate('projket', ProjektPostPreview)
CMS.registerPreviewTemplate('cele', ProjektPostPreview)
CMS.registerPreviewTemplate('kontakt', ProjektPostPreview)