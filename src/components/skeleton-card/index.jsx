import React, { Component } from "react";
import styles from "./SkeletonCard.module.css";

export class SkeletonCard extends Component {
  render() {
    return (
      <div className={styles.skeletonCard}>
        <div className={styles.img}></div>
        <div className={styles.text}></div>
        <div className={styles.bottom}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>
    );
  }
}

export default SkeletonCard;
