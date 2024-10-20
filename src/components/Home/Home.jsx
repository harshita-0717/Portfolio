import React from "react";
import styles from "./Home.module.css";
// import { getImageUrl } from '../../utils';

const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Harshita Kumawat</h1>
            <p className={styles.description}>
            I'm a full-stack developer with 2 years of experience using React and
            NodeJS. Reach out if you'd like to learn more!
            </p>
            <a href="https://drive.google.com/file/d/1sVTFaTmtyVZesLgirRU7mTjoBKS0UteW/view?usp=sharing" className={styles.contactBtn}>
            My Resume
            </a>
        </div>
        <img src= "./myimage.jpeg" alt="image of me" className={styles.myImg}/>

{/* 
        <img src= "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-user-cartoon-girl-avatar-image_1200112.jpg" alt="image of me" className={styles.myImg}/> */}

    </section>
  )
}

export default Home
