import React, { Component } from 'react'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeScore: 0,
            awayScore: 0,
        };
        this.addScoreToHomeTeam = this.addScoreToHomeTeam.bind(this);
        this.addScoreToAwayTeam = this.addScoreToAwayTeam.bind(this);
    }

    render() {
        return (
            <div className="match-board">
                <h2 className="homeScore">{this.state.homeScore}</h2>
                <h2 className="awayScore">{this.state.awayScore}</h2>
                <button onClick={this.addScoreToHomeTeam}>Home Team Score</button>
                <button onClick={this.addScoreToAwayTeam}>Away Team Score</button>
            </div>
        );
    }

    addScoreToHomeTeam() {
        this.setState({ homeScore: this.state.homeScore + 1 });
    }

    addScoreToAwayTeam() {
        this.setState({ awayScore: this.state.awayScore + 1 });
    }
}

export default Board;