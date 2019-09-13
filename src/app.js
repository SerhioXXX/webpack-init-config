import React from "react";
import { Button } from "react-bootstrap";
import styles from "./app.module.css";

console.log("-----> styles", styles);

const app = props => {
  console.log("props", props);
  return (
    <>
      <span id="divEl" className={styles.classText}>
        123
      </span>
      <input id="divEl2" className={styles.classInput}></input>
      <Button variant="primary"> My bootstrap button</Button>
    </>
  );
};

export default app;
