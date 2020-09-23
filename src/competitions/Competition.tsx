import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface CompetitionProps extends RouteComponentProps {
  competitionId?: number;
}

class Competition extends React.Component<CompetitionProps> {

  constructor(props: CompetitionProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Competition
        </h1>
      </div>
    );
  }
};

export default Competition;
