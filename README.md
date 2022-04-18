# transform-vue-jsx-demo

## Project setup

```
npm install
```

## Import jsx in vue

1、babel.config.js

```
"@babel/plugin-transform-react-jsx": "^7.17.3",

"@babel/plugin-transform-runtime": "^7.17.0",
```

```
plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-jsx'
]
```

2、main.js

```
"vuera": "^0.2.7"
```

```
import { VuePlugin } from 'vuera'
Vue.use(VuePlugin);
```

3、.jsx in .vue

```
import React from 'react';

function SseEditorApp () {
    return (
        <div>
            hellp world
        </div>
    )
}
export default SseEditorApp;

```

```
<template>
  <div id="app">
    <SseEditorApp/>
  </div>
</template>

<script>
import SseEditorApp from '../reactImports/editor/SseEditorApp.jsx'

export default {
  name: 'App',
  components: {
  
    SseEditorApp
  }
}
</script>

```

4、css

other modules support for semantic segmentation editor

```
"sass": "^1.32.12",
"sass-loader": "^10.0.0",
```