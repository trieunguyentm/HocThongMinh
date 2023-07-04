import './App.css'
import AppBar from "./components/appbar_header/AppBar";
import Banner from "./components/banner/Banner";
import CategoryCourse from "./components/category_course/CategoryCourse";
import CategoryTest from "./components/category_test/CategoryTest";
import NavBar from "./components/navbar_header/NavBar";
import HomeUtils from "./components/home_utils/HomeUtils";
import HomeBase from "./components/home_base/HomeBase";
import HomeFeedBack from "./components/home_feedback/HomeFeedBack";
import KnowledgeView from './components/knowledge_view/KnowledgeView';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <AppBar />
      <NavBar />
      <Banner />
      <CategoryCourse />
      <CategoryTest />
      <HomeUtils />
      <HomeBase />
      <HomeFeedBack />
      <KnowledgeView />
      <Footer />
    </>
  );
}

export default App;
