import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react'
import Highlighter from 'react-highlight-words'

class MonsterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { monster, search } = this.props

    const highlightStyle = {
      backgroundColor: 'yellow'
    }

    return (
      <Card color={"red"} raised={true}>
        <Card.Content>
          <Card.Header>
            <strong>{monster.name}</strong>
          </Card.Header>
          <Card.Meta>
            (Challenge Rating: {monster.challenge_rating})
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

MonsterCard.propTypes = {
  monster: PropTypes.object.isRequired,
  search: PropTypes.string,
}

export default MonsterCard;
