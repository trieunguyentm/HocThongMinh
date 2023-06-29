import AppBar from "./components/appbar_header/AppBar";
import Banner from "./components/banner/Banner";
import CategoryCourse from "./components/category_course/CategoryCourse";
import NavBar from "./components/navbar_header/NavBar";
import './App.css'
function App() {
  return (
    <>
      <AppBar />
      <NavBar />
      <Banner />
      <CategoryCourse />
    </>
  );
}

export default App;
