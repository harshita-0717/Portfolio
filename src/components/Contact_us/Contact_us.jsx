import React from 'react';
import styles from "./Contact_us.module.css";
const Contact_us = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact <span className={styles.titleUnderline}></span></h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:harshitakumawat1704@email.com">harshitakumawat1704@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href=" https://www.linkedin.com/in/harshita-kumawat-350a4b24b/">linkedin.com/harshita_kumawat</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/harshita-0717">github.com/harshita-0717</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact_us
