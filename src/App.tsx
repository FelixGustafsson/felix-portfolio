import About from "./components/about/About"
import Navigation from "./components/navigation/Navigation"
import ProjectsList from "./components/projects/ProjectsList"
import SocialIcons from "./components/socials/SocialIcons"
import Title from "./components/title/Title"

function App() {


  return (
    <>
      <Title />
      <br></br>
      <Navigation />
      <br></br>
      <SocialIcons />
      <About />
      <br></br>
      <ProjectsList />
    </>
  )
}

export default App
