import React from 'react';
import { RouteComponentProps } from '@reach/router';

const url = 'https://ab59e492-a9b4-48c7-985c-c6350455a72e.mock.pstmn.io';

interface EventProps extends RouteComponentProps {
  eventId?: number;
}

class Event extends React.Component<EventProps> {

  state: {event: any, isLoaded: boolean, error?: any};
  constructor(props: EventProps) {
    super(props);
    this.state = {event:null, isLoaded: false};
  }

  componentDidMount() {
    console.log(this.props, this.state);
    fetch(`${url}/event/${this.props.eventId}`)
    .then(res => res.json())
    .then(
      (event) => {
        console.log('api', event);
        this.setState({
          isLoaded: true,
          event: event
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    return (
      (this.state.isLoaded) ?
        (<div>
          <h1>
            Event: {this.state.event.name}
          </h1>
          <ul>
            {this.state.event.teams.map((team: any, index: number) => <li key={index}>{team.name}</li>)}
          </ul>
        </div>) : 
        (<h1>
          Event: loading...
        </h1>)
    );
  }
};

export default Event;
