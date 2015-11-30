var React = require('react');

var LimelightVideo = React.createClass({
   
    /**
     * Need to inject the limelight embed code as raw HTML for it to work properly
     * The embed.js is required. You can require('./path/to/embed.js') for your vendor.js or put the following script
     * into the HTML below.
     *
     * <script src="//video.limelight.com/player/embed.js"></script>
     */
    injectScript(options) {
        return {
            __html: `<span class=LimelightEmbeddedPlayer>
            <object type=application/x-shockwave-flash id=${options.id} name=${options.id} class=LimelightEmbeddedPlayerFlash width=${options.width} height=${options.height} data=//video.limelight.com/player/loader.swf><param name=movie value="//video.limelight.com/player/loader.swf">
            <param name=wmode value="window">
            <param name=allowScriptAccess value="always">
            <param name=allowFullScreen value="true">
            <param name=flashVars value="playerForm=Player&amp;mediaId=${options.source}">
            </object>
            </span>`
        };
    },

    shouldComponentUpdate(nextProps, nextState) {
        let shouldUpdate = true;

        /**
         * Do not update the video player after it has been rendered once
         * This prevents issues with the HTML5 player on mobile devices
         */
        if (nextProps.options.id === this.props.options.id) {
            shouldUpdate = false;
        }

        return shouldUpdate;
    },

    componentDidMount() {
        LimelightPlayerUtil.initEmbed(this.props.options.id);
    },
    
    render() {
        return (
            <div className="video-wrapper" dangerouslySetInnerHTML={this.injectScript(this.props.options)} />
        )
    }
});

module.exports = LimelightVideo;