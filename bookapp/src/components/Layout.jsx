import React from "react";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

// 전체 디자인
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
