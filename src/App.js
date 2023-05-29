import logo from './logo.svg';
import './reset.css';
import './test.css';
import './main.js';
import Header from './companent/Header';
import Menu from './companent/Menu';
import Banner from './companent/Banner';
import Sample from './companent/Sample';
import Exam from './companent/Exam';
import Exam1 from './companent/Exam1';
//import $ from 'jquery'; 


function App() {
  // $(function(){
  //   $(".test li a").on("mouseenter",function(){
  //     $(".menubox").stop().slideDown(100);
  //   })
  //   $("#menu").on("mouseleave",function(){
  //     $(".menubox").stop().slideUp(100);
  //   })

  // });

  return (
    <>
    <Header/>
    <Menu/>
    <Banner/>
    <Exam/>
    <Sample/>
    <Exam1/>
    </>
  );
}

export default App;
