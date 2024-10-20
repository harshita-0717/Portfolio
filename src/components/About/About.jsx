import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src= "https://varthana.com/student/wp-content/uploads/2023/11/what-indian-students-expect-from-the-world-after-graduation.jpg" alt="Me sitting with a laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3> </h3>
              <p>I am a 3rd-year BTech student specializing in Cyber Security, with a strong foundation in web development. My academic journey has been fueled by a deep interest in both development and cybersecurity, and I have successfully completed several projects in web development. Eager to contribute to impactful projects, I aim to make a difference in the field of cybersecurity while continuously enhancing my technical expertise.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>My Interest</h3>
              <p>
                My interest are in CyberSecurity. I like to explore about the new tech specially related to my domain and I want to work with the defence category in the Cybersecurity. 
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  )
}

export default About
