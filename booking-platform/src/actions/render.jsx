import * as cms from '@botonic/plugin-contentful'
import { msgsToBotonic } from '@botonic/react'

const converter = new cms.BotonicMsgConverter()

export function renderText(text) {
    const msg = converter.text(text);
    return msgsToBotonic(msg);
}
