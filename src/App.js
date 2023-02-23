import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto text-offWhite bg-darkBlue font-titleFont">
      <div className="max-w-screen-2xl mx-auto px-10">
        <NavBar />
        <Banner />
        <About />
        <Resume />
        <Projects />
      </div>
    </div>
  )
}

export default App;
