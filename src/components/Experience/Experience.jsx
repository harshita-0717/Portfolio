import React from 'react'
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <img src= "https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png" alt="laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OP1Y9k8aV9eI-Pc_B66HN6XopgTv5S32wA&s" alt="sems" />
            <div className={styles.aboutItemText}>
              <h3>SEMS Welfare Foundation</h3>
              <p className= {styles.about_semsdate}>(May 2024 - July 2024)</p>
              <ul className= {styles.about_sems}>
                <li>Role - IT Intern</li>
                <li>Type- - Hybrid</li>
              </ul>
              <p className= {styles.sems_discription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem quo libero debitis, laudantium corrupti vel obcaecati porro dolor quam?</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience
