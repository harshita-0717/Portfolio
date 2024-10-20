import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";


const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills<span className={styles.titleUnderline}></span></h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                <div className={styles.skillsrow}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLueaRJsD38b32MAw93xzUa7Pftq_l8BUDOw&s" alt="Skill 1" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqD_6_ykJXXfdL0uJf8FXwwHtzIfD13NcX9w&s" alt="Skill 2" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBYnqQAqT_GxrJP8C_tpZs6i8o4rYxl8SUQ&s" alt="Skill 2" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://img.icons8.com/?size=512&id=40670&format=png" alt="Skill 2" />
                        </div>
                    </div>
                </div>

                <div className={styles.skillsrow}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://static-00.iconduck.com/assets.00/java-icon-512x512-kvr1nudq.png" alt="Skill 1" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s" alt="Skill 2" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="Skill 2" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://i.pinimg.com/736x/87/b8/0a/87b80a1542d3eaacff9760b6c29d79e0.jpg" alt="Skill 2" />
                        </div>
                    </div>
                </div>
                <div className={styles.skillsrow}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://pbs.twimg.com/profile_images/1488891747576860674/s5UpLDjU_400x400.jpg" alt="Skill 1" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://img.icons8.com/color/200/autocad.png" alt="Skill 2" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sEqd7KCgQ6quwwIJkABM4W4eXmL2L8eabg&s" alt="Skill 2" />
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sEqd7KCgQ6quwwIJkABM4W4eXmL2L8eabg&s" alt="Skill 2" />
                        </div>
                    </div>
                </div>
            </div>

            <ul className={styles.Certi}>
                <li className={styles.CertiItem}>
                    <img src="/Coursera.png" alt="Logo" />
                    <div className={styles.CertiItemDetails}>
                        <h3>Introduction to Cybersecurity</h3>
                        <p>(Sept 2024)</p>
                        {/* <ul>
                            <li>what i gain</li>
                            <li>___________</li>
                            <li>___________</li>
                        </ul> */}
                    </div>
                </li>

                <li className={styles.CertiItem}>
                <img src="/Coursera.png" alt="Logo" />
                    <div className={styles.CertiItemDetails}>
                        <h3>Statistics for Data Science with Python</h3>
                        <p>(Jan 2020 - Dec 2020)</p>
                        {/* <ul>
                            <li>what i gain</li>
                            <li>___________</li>
                            <li>___________</li>
                        </ul> */}
                    </div>
                </li>

                <li className={styles.CertiItem}>
                <img src="/Coursera.png" alt="Logo" />
                    <div className={styles.CertiItemDetails}>
                        <h3>Excel Basics for Data Analysis</h3>
                        <p>(Jan 2023 - Dec 2023)</p>
                        {/* <ul>
                        <li>what i gain</li>
                        <li>___________</li>
                        <li>___________</li>
                        </ul> */}
                    </div>
                </li>       
            </ul>
        </div>
    </section>

  )
}

export default Skills
