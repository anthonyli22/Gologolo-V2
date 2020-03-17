import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import TextInput from "react-materialize/lib/TextInput";
//import { KeyboardEventHandler } from "react-keyboard-event-handler";

class TextEditSidebar extends Component {
  textPlaceHolder = "";
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
      margin: this.props.logo.margin,
      modal: true
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
        margin: this.props.logo.margin,
        modal: this.state.modal
      });
    }
  }

  openModal = () => {
    this.setState = {
      text: this.props.logo.text,
      textColor: this.props.logo.textColor,
      fontSize: this.props.logo.fontSize,
      borderColor: this.props.logo.borderColor,
      backgroundColor: this.props.logo.backgroundColor, //chnaged
      borderRadius: this.props.logo.borderRadius, //changed
      borderWidth: this.props.logo.borderWidth,
      padding: this.props.logo.padding,
      margin: this.props.logo.margin,
      modal: false
    };
  };

  closeModal = () => {
    this.setState = {
      text: this.props.logo.text,
      textColor: this.props.logo.textColor,
      fontSize: this.props.logo.fontSize,
      borderColor: this.props.logo.borderColor,
      backgroundColor: this.props.logo.backgroundColor, //chnaged
      borderRadius: this.props.logo.borderRadius, //changed
      borderWidth: this.props.logo.borderWidth,
      padding: this.props.logo.padding,
      margin: this.props.logo.margin,
      modal: true
    };
  };

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

  clickOnTextEdit = event => {
    console.log("Edit text button pressed");
    if (this.textPlaceHolder.length < 1) {
      this.textPlaceHolder = " Less Than 1";
    }
    //var a = "Changed hehe";
    this.props.changeLogoCallback(
      this.props.logo,
      this.props.logo.key,
      this.textPlaceHolder,
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

  changedText = event => {
    this.textPlaceHolder = event.target.value;
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
            <Modal
              header="Edit Text Here"
              trigger={<Button>&#9998;</Button>}
              open={!this.state.modal}
              error={"Length cannot be less than 1"}
            >
              <TextInput
                id="text_input"
                data-length={25}
                label="Input Text"
                onChange={this.changedText}
                defaultValue={this.state.text}
              />
              <Button
                node="button"
                waves="light"
                // onClick={() => {
                //   this.clickOnTextEdit("text_input");
                // }}
                // onClick={() => {
                //   this.closeModal();
                // }}
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
              <div className="col s8 input-field">
                <input
                  type="range"
                  min="4"
                  max="40"
                  onChange={this.handleFontSizeChange}
                  value={this.props.logo.fontSize}
                />
                <label style={{ left: "-1rem" }}>
                  {this.props.logo.fontSize}
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border Radius:</div>
              <div className="col s8 input-field">
                <input
                  type="range"
                  min="4"
                  max="50"
                  onChange={this.handleBorderRadiusChange}
                  value={this.props.logo.borderRadius}
                />
                <label style={{ left: "-1rem" }}>
                  {this.props.logo.borderRadius}
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col s4">Border THICkness:</div>
              <div className="col s8 input-field">
                <input
                  type="range"
                  min="4"
                  max="50"
                  onChange={this.handleThicknessChange}
                  value={this.props.logo.borderWidth}
                />
                <label style={{ left: "-1rem" }}>
                  {this.props.logo.borderWidth}
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col s4">Padding:</div>
              <div className="col s8 input-field">
                <input
                  type="range"
                  min="4"
                  max="40"
                  onChange={this.handlePaddingChange}
                  value={this.props.logo.padding}
                />
                <label style={{ left: "-1rem" }}>
                  {this.props.logo.padding}
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col s4">Margin:</div>
              <div className="col s8 input-field">
                <input
                  type="range"
                  min="4"
                  max="40"
                  onChange={this.handleMarginChange}
                  value={this.props.logo.margin}
                />
                <label style={{ left: "-1rem" }}>
                  {this.props.logo.margin}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextEditSidebar;
