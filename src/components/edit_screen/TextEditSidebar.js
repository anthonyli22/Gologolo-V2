import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import TextInput from "react-materialize/lib/TextInput";

class TextEditSidebar extends Component {
  tex = "placeholder";
  constructor(props) {
    super(props);
    // WE'LL MANAGE THE UI CONTROL
    // VALUES HERE

    // values c
    this.state = {
      text: this.props.logo.text,
      textColor: this.props.logo.textColor,
      fontSize: this.props.logo.fontSize,
      borderColor: this.props.logo.borderColor,
      backgroundColor: this.props.logo.backgroundColor, //chnaged
      borderRadius: this.props.logo.borderRadius, //changed
      borderWidth: this.props.logo.borderWidth,
      padding: this.props.logo.padding,
      margin: this.props.logo.margin
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("updating component");
      this.setState({
        text: this.props.logo.text,
        textColor: this.props.logo.textColor,
        fontSize: this.props.logo.fontSize,
        borderColor: this.props.logo.borderColor,
        backgroundColor: this.props.logo.backgroundColor, //chnaged
        borderRadius: this.props.logo.borderRadius, //changed
        borderWidth: this.props.logo.borderWidth,
        padding: this.props.logo.padding,
        margin: this.props.logo.margin
      });
    }
  }

  handleUndo = () => {
    this.props.undoCallback();
  };

  handleRedo = () => {
    this.props.redoCallback();
  };

  handleTextColorChange = event => {
    console.log("handleTextColorChange to " + event.target.value);
    this.setState({ textColor: event.target.value }, this.completeUserEditing);
  };

  handleBackgroundColorChange = event => {
    console.log("handleBackgroundColorChange to" + event.target.value);
    this.setState(
      { backgroundColor: event.target.value },
      this.completeUserEditing
    );
  };

  handleBorderColorChange = event => {
    console.log("handleBorderColorChange to" + event.target.value);
    this.setState(
      { borderColor: event.target.value },
      this.completeUserEditing
    );
  };

  handleFontSizeChange = event => {
    console.log("handleFontSizeChange to " + event.target.value);
    this.setState({ fontSize: event.target.value }, this.completeUserEditing);
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
      { borderWidth: event.target.value },
      this.completeUserEditing
    );
  };

  handlePaddingChange = event => {
    console.log("handlePaddingChange to" + event.target.value);
    this.setState({ padding: event.target.value }, this.completeUserEditing);
  };

  handleMarginChange = event => {
    console.log("handleMarginChange to" + event.target.value);
    this.setState({ margin: event.target.value }, this.completeUserEditing);
  };

  clickOnTextEdit = () => {
    console.log("Edit text button pressed");

    var a = "Changed hehe";
    this.props.changeLogoCallback(
      this.props.logo,
      this.props.logo.key,
      a,
      this.state.textColor,
      this.state.borderColor,
      this.state.fontSize,
      this.state.borderRadius,
      this.state.backgroundColor,
      this.state.borderWidth,
      this.state.padding,
      this.state.margin
    );
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
      this.state.borderColor,
      this.state.fontSize,
      this.state.borderRadius,
      this.state.backgroundColor,
      this.state.borderWidth,
      this.state.padding,
      this.state.margin
    );
  };
  changeT = a => {
    this.props.logo.text = "Yuumi!";
  };

  render() {
    let undoDisabled = !this.props.canUndo();
    let redoDisabled = !this.props.canRedo();
    let undoClass = "waves-effect waves-light btn-small";
    let redoClass = "waves-effect waves-light btn-small";
    if (undoDisabled) undoClass += " disabled";
    if (redoDisabled) redoClass += " disabled";
    //let redoClass = "waves-effect btn-small waves-light";
    return (
      <div className="card-panel col s4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            {/* <Modal
              trigger={<button>&#9998;</button>}
              className="waves-effect waves-light btn modal-trigger .modal-close" //waves-effect waves-light btn-small
              onClick={this.clickOnTextEdit}
            >
              &#9998;
            </Modal> */}
            <Modal header="Edit Text Here" trigger={<Button>&#9998;</Button>}>
              <TextInput
                id="5"
                data-length={25}
                label="Input Text"
                onChange={this.changeT}
              />
              <Button
                node="button"
                waves="light"
                onClick={this.clickOnTextEdit}
              >
                {" "}
                Enter
              </Button>
            </Modal>
            {/* onClick={this.clickOnTextEdit.bind(this, this.), } */}
            <button className={undoClass} onClick={this.handleUndo}>
              Undo
            </button>
            <button className={redoClass} onClick={this.handleRedo}>
              Redo
            </button>
          </div>
        </div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
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
                  onChange={this.handleBorderColorChange}
                  value={this.props.logo.borderColor}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Font Size:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="40"
                  onChange={this.handleFontSizeChange}
                  value={this.props.logo.fontSize}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border Radius:</div>
              <div className="col s8">
                <input
                  id="font_size"
                  type="range"
                  min="4"
                  max="50"
                  onChange={this.handleBorderRadiusChange}
                  value={this.props.logo.borderRadius}
                />
                <label style={{ alignContent: "right" }}>
                  {this.props.logo.borderRadius}
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border THICkness:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="50"
                  onChange={this.handleThicknessChange}
                  value={this.props.logo.borderWidth}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Padding:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="40"
                  onChange={this.handlePaddingChange}
                  value={this.props.logo.padding}
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">Margin:</div>
              <div className="col s8">
                <input
                  type="range"
                  min="4"
                  max="40"
                  onChange={this.handleMarginChange}
                  value={this.props.logo.margin}
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
