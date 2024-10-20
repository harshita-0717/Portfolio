import React from "react";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";


const Project = () => {
  return (
    <section className={styles.container} id="project">
        <h2 className={styles.title}>Projects<span className={styles.titleUnderline}></span></h2>
        <div className={styles.content}>
            <ul className={styles.Pro}>
                <li className={styles.ProItem}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL193pINk6MACQuHeAKHw6ZcpbpllWP9knTw&s" alt="pro 1 Logo" />
                    <div className={styles.ProItemDetails}>
                        <h3>Instagram Clone using HTML & CSS</h3>
                        <p>(July 2023)</p>
                        {/* <ul>
                            <li>what i gain</li>
                            <li>___________</li>
                            <li>___________</li>
                        </ul> */}
                        <button className={styles.buttons}><a href="https://harshita-0717.github.io/Instagram_Clone/">Source</a></button>
                    </div>
                </li>

                <li className={styles.ProItem}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5Chu9ScKZU6OqZy-fJyCVHWc9ouoBEES_g&s" alt="pro 1 Logo" />
                    <div className={styles.ProItemDetails}>
                        <h3>Amazon Clone using HTML & CSS</h3>
                        <p>(July 2023)</p>
                        {/* <ul>
                            <li>what i gain</li>
                            <li>___________</li>
                            <li>___________</li>
                        </ul> */}
                        <button className={styles.buttons}><a href="https://harshita-0717.github.io/Amazon_Clone/">Source</a></button>
                    </div>
                </li>

                <li className={styles.ProItem}>
                    <img src="https://nationaltoday.com/wp-content/uploads/2022/05/National-Windmill-Day-min-1200x834.jpg" alt="pro 1 Logo" />
                    <div className={styles.ProItemDetails}>
                        <h3>Windmill: Swift Blades</h3>
                        <p>(March 2023 - May 2023)</p>
                        <p className={styles.disc}>It is a project to make an adjustable windmill to reduce windmill damage during storms as it can
                        sense the weather and adjust accordingly</p>
                        {/* <ul>
                        <li></li>
                        <li>___________</li>
                        <li>___________</li>
                        </ul> */}
                        <button className={styles.buttons}>Source</button>
                    </div>
                </li>       
                <li className={styles.ProItem}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHayCNMSLMqc-3rw8SfLUh5_s1Lzsl7VdMQQ&s" alt="pro 1 Logo" />
                    <div className={styles.ProItemDetails}>
                        <h3>Hospital Management System</h3>
                        <p>(Feb 2023)</p>
                        <p className={styles.disc}>By using Python programming, a Graphic User Interface (GUI) is made.</p>
                        {/* <ul>
                        <li></li>
                        <li>___________</li>
                        <li>___________</li>
                        </ul> */}
                        <button className={styles.buttons}>Source</button>
                    </div>
                </li>      
                <li className={styles.ProItem}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5geSpiVxWi5T4MqP6Ex4tsetz1M72ankpA&s" alt="pro 1 Logo" />
                    <div className={styles.ProItemDetails}>
                        <h3>Golfy-Wolfy</h3>
                        <p>(Aug 2022 - May 2023)</p>
                        <p className={styles.disc}>It is a project to make an adjustable golf stick so that it can be used by different players with
                        different heads in one stick.</p>
                        {/* <ul>
                        <li></li>
                        <li>___________</li>
                        <li>___________</li>
                        </ul> */}
                        <button className={styles.buttons}>Source</button>
                    </div>
                </li> 

            </ul>
        </div>
    </section>

  )
}

export default Project
