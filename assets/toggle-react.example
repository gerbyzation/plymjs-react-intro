import React from 'react';

const Button = (props) => {
  const {onToggle, text} = props;
  return (
    <button
      onClick={onToggle}
    >
      {text}
    </button>
  );
};

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    };
  }

  toggle = (event) => {
    this.setState({
      ...this.state,
      toggled: !this.state.toggled
    });
  }

  render() {
    const buttonText = this.state.toggled === true ? 'yes!' : 'no!';
    return (
      <div>
        <p>Should I give this talk or not?</p>
        <Button onToggle={this.toggle} text={buttonText} />
      </div>
    );
  }
}

export default Toggle;