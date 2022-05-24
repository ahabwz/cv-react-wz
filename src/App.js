import './App.css';
import { useEffect, useState } from 'react';
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"
import Home from "./components/Home"
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import PersonalProjects from "./components/Projects";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
import Skills from "./components/Skills";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY > 50){
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  //płynne scrollowanie
  const ScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Header />
      <Main>
      <Sidebar>
        <Home />
        {/* miejsce na portfolio */}
        <Social />
        <Profile />
        <Languages />
        <Skills />
      </Sidebar>
      <Content>
        <Education />
        <PersonalProjects />
        <Certificates />
        <Interests />
      </Content>
    </Main>
    
    {isVisible && (
      <span className="scrolltop show-scroll" onClick={ScrollToTop} id="scroll-top">
      <i className="bx bxs-up-arrow scrolltop__icon"></i>
    </span>
    
    )}
    </>
  );
}
export default App;