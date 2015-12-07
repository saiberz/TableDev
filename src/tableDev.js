import React, { PropTypes } from 'react';

export default class TableDev extends React.Component {

  static propTypes = {
    title: React.PropTypes.string
  };

  static defaultProps = {
    title: "Default Title"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          Titulo:
          {this.props.title}
      </div>
    );
  }
}

