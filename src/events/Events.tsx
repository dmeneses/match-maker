import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const url = 'https://ab59e492-a9b4-48c7-985c-c6350455a72e.mock.pstmn.io';

class Events extends React.Component<RouteComponentProps> {

  state : {events: Array<any>, isLoaded: boolean, error?: any};
  
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { events: new Array<any>(), isLoaded: false };
  }

  componentDidMount() {
    fetch(`${url}/event`)
      .then(res => res.json())
      .then(
        (events) => {
          this.setState({
            isLoaded: true,
            events: events
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
      <div>
        <h1>
          Events
        </h1>
        <Link to="/events/create">Create Event</Link>
        <ul>
          {this.state.events.map((event, index) => (<li key={index}><Link to={"/events/" + event.id}>{event.name}</Link></li>))}
        </ul>
      </div>
    );
  }
};

export default Events;
