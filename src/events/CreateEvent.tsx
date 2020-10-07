import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

class CreateEvent extends React.Component<RouteComponentProps> {
  state: {teams: Array<string>, teamName: string};

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { teams: new Array<string>(), teamName: '' };
    this.updateTeamName = this.updateTeamName.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  updateTeamName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({teamName: event?.target?.value});
  }

  addTeam() {
    const teams = this.state.teams;
    teams.push(this.state.teamName);
    this.setState({teams, teamName: ''});
  }

  createEvent() {
    console.log('createEvent');
    navigate('/events/1');
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Team Name" value={this.state.teamName} onChange={this.updateTeamName}/>
          <button onClick={this.addTeam}>Add Team</button>
        </div>
        <h1>Teams</h1>
        <ul>
          {this.state.teams.map((team, index) => <li key={index}>{team}</li>)}
        </ul>
        <button onClick={this.createEvent}>Create Event</button>
      </div>
    );
  }
};

export default CreateEvent;
