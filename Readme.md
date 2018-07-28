## React Round
[![npm package](https://img.shields.io/npm/v/react-round.svg)](https://www.npmjs.com/package/react-round)
[![npm package](https://img.shields.io/npm/dm/react-round.svg)](https://www.npmjs.com/package/react-round)


![](./resources/images/sample.png)


## Get Started

1. `npm install --save react-round`
2. props:

    `position`: "left,top,right,bottom"

    `backgroundColor`: "color name, hex, rgba ..."

    `size`: number

3. Example usage:

```js
import React, { PropTypes } from 'react';
import Round from 'react-round';
import { Header, Description } from './index.js'

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Description />
                <Round backgroundColor="#6941eeb3" position="300,120" size={40} />
            </div>
        );
    }
}

export default Home;
```
