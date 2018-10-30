import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: 0
    };
  }

  handleChange = event => {
    console.log(event.target.value.length);
    let msg = event.target.value;
    this.setState({
      maxChars: msg.length,
      message: msg
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          onChange={this.handleChange}
          placeholder="Type your message"
          value={this.state.message}
        />
        <strong>{140 - this.state.maxChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
