import AppBar from "./components/appbar_header/AppBar";
import Banner from "./components/banner/Banner";
import CategoryCourse from "./components/category_course/CategoryCourse";
import CategoryTest from "./components/category_test/CategoryTest";
import NavBar from "./components/navbar_header/NavBar";

function App() {
  return (
    <>
      <AppBar />
      <NavBar />
      <Banner />
      <CategoryCourse />
      <CategoryTest />
    </>
  );
}

export default App;
