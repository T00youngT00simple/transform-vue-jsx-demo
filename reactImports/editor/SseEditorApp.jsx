import React from 'react';
import SseApp3d from "./3d/SseApp3d";

import "./3d/styles/layout.scss"
import "./3d/styles/main.scss"
import "./3d/styles/tippy.scss"

function SseEditorApp () {
    return (
        <div>
            <SseApp3d imageId={1}></SseApp3d>
        </div>
    )
}


export default SseEditorApp;
