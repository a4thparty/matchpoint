import React from 'react';

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="matchField" className="flex-container">
                <div id="leftField"></div>
                <div id="rightField"></div>
            </div>
        );
    }

}


export default Match;