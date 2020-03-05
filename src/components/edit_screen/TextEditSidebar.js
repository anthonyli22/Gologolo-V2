import React, { Component } from "react";

class TextEditSidebar extends Component {
  constructor() {
    super();

    // WE'LL MANAGE THE UI CONTROL
    // VALUES HERE
    this.state = {
      textColor: "#FF0000",
      fontSize: 100,
      backgroundColor: "#FF0000", //chnaged
      borderRadius: 24 //changed
    };
  }

  handleUndo = () => {
    this.props.undoCallback();
  };

  handleTextColorChange = event => {
    console.log("handleTextColorChange to " + event.target.value);
    this.setState({ textColor: event.target.value }, this.completeUserEditing);
  };

  handleFontSizeChange = event => {
    console.log("handleFontSizeChange to " + event.target.value);
    this.setState({ fontSize: event.target.value }, this.completeUserEditing);
  };

  handleBackgroundColorChange = event => {
    console.log("handleBackgroundColorChange to" + event.target.value);
    this.setState(
      { backgroundColor: event.target.value },
      this.completeUserEditing
    );
  };

  handleBorderRadiusChange = event => {
    console.log("handleBorderRadiusChange to" + event.target.value);
    this.setState(
      { borderRadius: event.target.value },
      this.completeUserEditing
    );
  };

  handleThicknessChange = event => {
    console.log("handleThicknessChange to" + event.target.value);
    this.setState(
      { handleThicknessChange: event.target.value },
      this.completeUserEditing
    );
  };

  clickOnTextEdit = () => {
    console.log("Edit text button pressed");
    //var a = prompt("New text");
  };

  completeUserEditing = () => {
    console.log("completeUserEditing");
    console.log("this.state.textColor: " + this.state.textColor);
    this.props.changeLogoCallback(
      this.props.logo,
      this.props.logo.key,
      this.props.logo.text,
      this.state.textColor,
      this.state.fontSize,
      this.state.borderRadius,
      this.state.backgroundColor
    );
  };

  render() {
    let undoDisabled = !this.props.canUndo();
    let undoClass = "waves-effect waves-light btn-small";
    if (undoDisabled) undoClass += " disabled";
    return (
      <div className="card-panel col s4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <button
              className="waves-effect waves-light btn-small"
              onClick={this.clickOnTextEdit}
            >
              &#9998;
            </button>
            <button className={undoClass} onClick={this.handleUndo}>
              Undo
            </button>
            <button className={undoClass} onClick={this.handleUndo}>
              Redo
            </button>
          </div>
        </div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Text</span>

            <div className="row">
              <div className="col s4">Color:</div>
              <div className="col s8">
                <input
                  type="color"
                  onChange={this.handleTextColorChange}
                  value={this.props.logo.textColor}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Background Color:</div>
              <div className="col s8">
                <input
                  type="color"
                  onChange={this.handleBackgroundColorChange}
                  value={this.props.logo.backgroundColor}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border Color:</div>
              <div className="col s8">
                <input
                  type="color"
                  onChange={this.handleBackgroundColorChange}
                  value={this.props.logo.backgroundColor}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Font Size:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="144"
                  onChange={this.handleFontSizeChange}
                  value={this.props.logo.fontSize}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border Radius:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="144"
                  onChange={this.handleBorderRadiusChange}
                  value={this.props.logo.borderRadius}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border THICkness:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="144"
                  onChange={this.handleBorderRadiusChange}
                  value={this.props.logo.borderRadius}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Padding:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="144"
                  onChange={this.handleBorderRadiusChange}
                  value={this.props.logo.borderRadius}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Margin:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="144"
                  onChange={this.handleBorderRadiusChange}
                  value={this.props.logo.borderRadius}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextEditSidebar;
