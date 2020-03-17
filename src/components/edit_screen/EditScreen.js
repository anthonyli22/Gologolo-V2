// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from "react";
import Navbar from "./Navbar.js";
import TextEditSidebar from "./TextEditSidebar.js";
import TextEditWorkspace from "./TextEditWorkspace.js";
//import { KeyboardEventHandler } from "react-keyboard-event-handler";

export class EditScreen extends Component {
  constructor(props) {
    super(props);

    // DISPLAY WHERE WE ARE
    console.log("\tEditScreen constructor");

    this.state = {
      deleteModalVisible: false
    };
  }
  keyHandler = event => {
    if (event.keyCode === 90 && event.ctrlKey) {
      this.props.undoCallback();
      this.forceUpdate();
    }
    if (event.keyCode === 89 && event.ctrlKey) {
      this.props.redoCallback();
      this.forceUpdate();
    }
  };
  componentDidMount = () => {
    console.log("\tEditScreen component did mount");
    document.addEventListener("keydown", this.keyHandler);
  };

  componentWillUnmount = () => {
    console.log("\tEditScreen component will unmount");
    document.removeEventListener("keydown", this.keyHandler);
  };

  render() {
    // DISPLAY WHERE WE ARE
    console.log("\tEditScreen render");
    return (
      <div className="container" tabIndex="0" onKeyDown={this.keyHandler}>
        <Navbar
          goToHomeCallback={this.props.goToHomeCallback}
          deleteLogo={this.props.deleteLogo}
          logo={this.props.logo}
        />
        <div className="row">
          <TextEditSidebar
            logo={this.props.logo}
            changeLogoCallback={this.props.changeLogoCallback}
            undoCallback={this.props.undoCallback}
            redoCallback={this.props.redoCallback}
            canUndo={this.props.canUndo}
            canRedo={this.props.canRedo}
          />
          <TextEditWorkspace logo={this.props.logo} />
        </div>
      </div>
    );
  }
}

export default EditScreen;
