import React from "react";
import styles from "./login.module.css";

const LoginSection: React.FC = () => {
  return (
    <div className={styles["login-box"]}>
      <h3 className={styles.h3}>Login:</h3>
      <label className={styles.label} htmlFor="username">
        Username:
      </label>
      <input
        className={styles.input}
        type="text"
        id="username"
        name="username"
        placeholder="Username"
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
    </div>
  );
};

export default LoginSection;
