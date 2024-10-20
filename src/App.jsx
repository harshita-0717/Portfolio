
import styles from "./App.module.css";
import About from "./components/About/about";
import Contact_us from "./components/Contact_us/Contact_us";

import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";

import { Navbar } from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
// import { First } from "./components/Navbar/Front_page/Front_page";


function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className={styles.App}>
          <Navbar />

          <Home />

          <About />

          <Experience />

          <Skills />

          <Project />

          <Contact_us />
        
      </div>

  )
}

export default App
