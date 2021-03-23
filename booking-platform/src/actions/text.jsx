import React from "react";
import * as cms from "@botonic/plugin-contentful";
import { renderText } from "./render"; // the file created on previous step
import { WebchatContext } from "@botonic/react";
import "./text.css";

const converter = new cms.BotonicMsgConverter();

export default class Text extends React.Component {
    static contextType = WebchatContext;
    static async botonicInit(init) {
        const plugin = init.plugins.contentful;
        const callback = cms.ContentCallback.ofPayload(init.input.payload);
        let text = await plugin.cms.text(callback.id);
        let keywords = [];
        if (text?.common?.keywords) {
            keywords = text?.common?.keywords;
        }
        return { text, keywords };
    }

    render() {
        const pluginElement = renderText(this.props["text"]);
        const msg = converter.text(this.props["text"]);
        return pluginElement;
    }
}
