import React, { Component } from "react";

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
  render() {
    const styles = {
      container: {
        color: this.props.logo.textColor,
        fontSize: this.props.logo.fontSize + "pt",
        backgroundColor: this.props.logo.backgroundColor, //changed
        borderRadius: this.props.logo.borderRadius + "pt", //changed
        borderColor: this.props.logo.borderColor,
        borderWidth: this.props.logo.borderWidth + "pt",
        padding: this.props.logo.padding + "pt",
        margin: this.props.logo.margin + "pt",
        borderStyle: "solid",
        width: "auto",
        whiteSpace: "pre-wrap",
        minwidth: "max-content",
        position: "absolute"
      }
    };
    return (
      <div className="col s8" style={{ overflow: "auto" }}>
        <div style={styles.container}>{this.props.logo.text}</div>
      </div>
    );
  }
}

export default TextEditWorkspace;
