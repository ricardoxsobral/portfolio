import "./App.css";
import Menu from "./components/menu/Menu";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Project";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
