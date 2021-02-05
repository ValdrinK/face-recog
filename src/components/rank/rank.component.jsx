import React from "react";
import "./rank.styles.scss";
import { connect } from "react-redux";

const Rank = ({ name, entries }) => {
  return (
    <div className="rank">
      <div className="name">{` ${name}, your current rank is...`}</div>
      <hr />
      <div className="rank-number">{` #${entries}`}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.user.user.name,
  entries: state.user.counter
});

export default connect(mapStateToProps)(Rank);
