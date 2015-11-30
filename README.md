# limelight-react
A lightweight react component for [Limelight Networks](http://support.video.limelight.com/support/docs/player_api/)

# Dependencies
* [ES6](https://babeljs.io/docs/learn-es2015/)
* [ReactJS](https://facebook.github.io/react/index.html)

# Usage

Simply add `limelight.jsx` to your project and begin using it.

```javascript
let React           = require('react');
let ReactDOM        = require('react-dom');
let LimelightVideo  = require('./limelight.jsx');

let Example = React.createClass({
    getDefaultProps() {
        return {
            width: "100%",
            height: "100%",
        }
    },

    render() {
        let options = {
            source: this.props.mediaSource,
            id: this.props.id,
            width: this.props.width,
            height: this.props.height
        }

        return (
            <LimelightVideo options={this.props.options} />
        )
    }
});

ReactDOM.render(
    <Example mediaSource={"1a2b3c4d"} id={"limelight_1"}  />,
    document.getElementById('video')
);
```

# Parameters

* `mediaSource`: [media ID](http://support.video.limelight.com/support/docs/player_api/#1.0) of the limelight video
* `id`: Unique ID for the limelight video player
* `width`: Default 100%
* `height`: Default 100%
