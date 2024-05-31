
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CourseList from './components/CourseList/CourseList';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses';
import RecommendedTutors from './components/RecommendedTutors/RecommendedTutors';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import { useState } from 'react';
import LoginUser from './components/LoginUser/LoginUser';
import SignUpUser from './components/SignUpUser/SignUpUser';

function App() {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isSignUpUser, setIsSignUpUser] = useState(false);
  return (
    <>
    {isLoginUser ? <LoginUser setIsLoginUser={setIsLoginUser} /> : <></>}
    {isSignUpUser ? <SignUpUser setIsSignUpUser={setIsSignUpUser} /> : <></>}
    <div className='app'>
      <Navbar  setIsLoginUser={setIsLoginUser}
               setIsSignUpUser={setIsSignUpUser}/>
      <Banner />
      {/* <CourseList/>
      <RecommendedTutors />
      <RecommendedCourses/> */}
      <Body />
    </div>
    <Footer />
   </>
  );
}

export default App;
