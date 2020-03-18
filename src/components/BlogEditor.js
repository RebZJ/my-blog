import React, { Component } from 'react';
import postslocal from "../posts/postslocal";
import { JSONEditor } from 'react-json-editor-viewer';

class BlogEditor extends Component {
    render() {
        return (
            <JSONEditor data={postslocal}></JSONEditor>
        )
    }
}

export default BlogEditor;