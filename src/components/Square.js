import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Square.css";
import { connect } from "react-redux";

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.arrayOf.isRequired,
    col: PropTypes.arrayOf.isRequired
  };

  render() {
    const value = this.props;

    return <div className={`Square fill-${value || 0}`} />;
  }
}


export default Square
