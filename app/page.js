"use client";

import styles from "./page.module.css";
import { Button } from "semantic-ui-react";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button primary>Button</Button>
    </div>
  );
}
