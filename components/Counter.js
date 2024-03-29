import React from 'react';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import classNames from 'classnames';
import styles from '../pages/scoreboard/Scoreboard.module.css';

const Counter = ({id, score, changeScore}) => {
  return (
    <div className={styles.counter}>
      <button className={classNames(styles["counter-action"], styles.decrement)} onClick={() => changeScore(id, -1)}> - </button>
      <span className={styles["counter-score"]}>{score}</span>
      <button className={classNames(styles["counter-action"], styles.increment)} onClick={() => changeScore(id, 1)}> + </button>
    </div>
  )
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
  }
};

export default connect(null, mapDispatchToProps)(Counter);