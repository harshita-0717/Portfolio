import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";


const Skills = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>My Achievements<span className={styles.titleUnderline}></span></h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill1image.jpg" alt="Skill 1" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src="/path/to/your/skill2image.jpg" alt="Skill 2" />
                    </div>
                </div>
            </div>

            <ul className={styles.Certi}>
                <li className={styles.CertiItem}>
                    <img src="/path/to/your/experience1image.jpg" alt="Company 1 Logo" />
                    <div className={styles.CertiItemDetails}>
                        <h3>Role 1, Organisation 1</h3>
                        <p>Jan 2020 - Dec 2020</p>
                        <ul>
                            <li>Task or responsibility 1</li>
                            <li>Task or responsibility 2</li>
                            <li>Task or responsibility 3</li>
                        </ul>
                    </div>
                </li>

                <li className={styles.CertiItem}>
                    <img src="/path/to/your/experience1image.jpg" alt="Company 1 Logo" />
                    <div className={styles.CertiItemDetails}>
                        <h3>Role 1, Organisation 1</h3>
                        <p>Jan 2020 - Dec 2020</p>
                        <ul>
                            <li>Task or responsibility 1</li>
                            <li>Task or responsibility 2</li>
                            <li>Task or responsibility 3</li>
                        </ul>
                    </div>
                </li>

                <li className={styles.CertiItem}>
                    <img src="/path/to/your/experience1image.jpg" alt="Company 1 Logo" />
                    <div className={styles.CertiItemDetails}>
                        <h3>Role 1, Organisation 1</h3>
                        <p>Jan 2020 - Dec 2020</p>
                        <ul>
                            <li>Task or responsibility 1</li>
                            <li>Task or responsibility 2</li>
                            <li>Task or responsibility 3</li>
                        </ul>
                    </div>
                </li>       
            </ul>
        </div>
    </section>

  )
}

export default Skills
