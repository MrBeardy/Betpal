
import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    onClick: () => {},
    clicked: false,
    titleClicked: "Disable",
    titleDefault: "Enable",
  };

  static propTypes = {
    onClick: React.PropTypes.func,
    clicked: React.PropTypes.bool,
    titleClicked: React.PropTypes.string,
    titleDefault: React.PropTypes.string,
  };

  get styles() {
    return {
      padding: "10px",
      display: "inline-block",
      fontSize: "20px",
      padding: "5px 20px",
      opacity: this.props.clicked ? '0.5' : '1.0',
      cursor: 'pointer'
    }
  }

  get title() {
    if (this.props.clicked) {
      return this.props.titleClicked;
    } else {
      return this.props.titleDefault;
    }
  }

  handleClick() {
    return this.props.onClick(this)
  }

  render() {
    return (
      <button onClick={ this.handleClick } style={ this.styles } className="banner">{ this.title }</button>
    )
  }
}
