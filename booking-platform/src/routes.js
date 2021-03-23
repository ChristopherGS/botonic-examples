import * as cms from '@botonic/plugin-contentful'
import Text from './actions/text'

export const routes = [
  {
    payload: cms.ContentCallback.regexForModel(cms.TopContentType.TEXT),
    action: Text
  },
]
