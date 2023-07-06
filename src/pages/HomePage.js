import '../App.css'
import AppBar from '../components/appbar_header';
import Banner from '../components/banner';
import CategoryCourse from '../components/category_course';
import CategoryTest from '../components/category_test';
import Footer from '../components/footer';
import HomeBase from '../components/home_base';
import HomeFeedBack from '../components/home_feedback';
import HomeUtils from '../components/home_utils';
import KnowledgeView from '../components/knowledge_view';
import NavBar from '../components/navbar_header';

export default function HomePage() {
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

