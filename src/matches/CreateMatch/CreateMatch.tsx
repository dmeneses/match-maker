import React from 'react';
import styles from './CreateMatch.module.css';

class CreateMatch extends React.Component {
  state: {teams: Array<string>, teamName: string};

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { teams: new Array<string>(), teamName: '' };
    this.updateTeamName = this.updateTeamName.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.generateMatches = this.generateMatches.bind(this);
  }

  updateTeamName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({teamName: event?.target?.value});
  }

  addTeam() {
    const teams = this.state.teams;
    teams.push(this.state.teamName);
    this.setState({teams, teamName: ''});
  }

  generateMatches() {
    console.log('generateMatches');
  }

  render() {
    return (
      <div className={styles.CreateMatch}>
        <div>
          <input type="text" placeholder="Team Name" value={this.state.teamName} onChange={this.updateTeamName}/>
          <button onClick={this.addTeam}>Add Team</button>
        </div>
        <h1>Teams</h1>
        <ul>
          {this.state.teams.map((team, index) => <li key={index}>{team}</li>)}
        </ul>
        <button onClick={this.generateMatches}>Generate Matches</button>
      </div>
    );
  }
};

export default CreateMatch;
