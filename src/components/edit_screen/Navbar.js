import React from "react";
import { Modal, Button } from "react-materialize";
//const delModal = <Modal> Delete? </Modal>;
class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
    console.log("\tNavbar component did mount");
  };

  componentWillUnmount = () => {
    console.log("\tNavbar component will unmount");
  };

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div
            className="brand-logo"
            style={{ cursor: "pointer" }}
            onClick={this.handleGoHome}
          >
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Modal
              trigger={<Button style={{ cursor: "pointer" }}>&#128465;</Button>}
            >
              <Button
                onClick={this.props.deleteLogo.bind(this, this.props.logo.key)}
              >
                {" "}
                Yes{" "}
              </Button>
            </Modal>
          </ul>
        </div>
      </nav>
    ); //this.props.deleteLogo.bind(this, this.props.logo.key)
  }
}

export default Navbar;
