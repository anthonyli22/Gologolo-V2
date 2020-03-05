import React from "react";

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

  handleDeleteLogo = () => {
    console.log("handleDeleteLogo");
    //this.props.deleteLogo("7");
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
            <li
              style={{ cursor: "pointer" }}
              onClick={this.props.deleteLogo.bind(this, this.props.logo.key)}
            >
              &#128465;
            </li>
          </ul>
        </div>
      </nav>
    ); //onClick={this.props.deleteLogo} == ^
  }
}

export default Navbar;
