import './App.css';
import Header from './component/Header_1/Header';
import Application from './component/Content_Application_2/Application';
import Scroll from './component/additional_info_3/Scroll';
import Desires from './component/Desires_4/Desires';
import Program from './component/Program_5/Program';
import Registration from './component/Registration_6/Registration';
import Teachers from './component/Teachers_7/Teachers';
import Question from './component/Question_8/Question';
import ExpressDive from './component/Express_Dive_9/ExpressDive';
import Footer from './component/Footer_10/Footer';
// import "./reset.css"

function App() {
  return (
    <div className='App'>
      <Header />
      <Application />
      <Scroll />
      <Desires />
      <Program />
      <Registration />
      <Teachers />
      <Question />
      <ExpressDive />
      <Footer />

    </div>
  );
}

export default App;
