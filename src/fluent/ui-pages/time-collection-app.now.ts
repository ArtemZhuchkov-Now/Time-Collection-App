import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import timeCollectionPage from '../../client/index.html'

export const time_collection_app = UiPage({
    $id: Now.ID['time-collection-app'],
    endpoint: 'x_snc_time_collect_app.do',
    html: timeCollectionPage,
    direct: true
})