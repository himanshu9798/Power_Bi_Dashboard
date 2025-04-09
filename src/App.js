
import './App.css';
import Header from './component/Header';
import Search from './component/Search';
import Second from './component/Second';
import Chart from './component/Chart';
import Third from './component/Third';
import Footer from './component/Footer';
import Setting from './component/Setting';

function App() {
  return (
    <div className="App">
  
     <Header></Header>
     
    <div>
    <Search main="Dashboard" secondmains="Dashboard" ></Search>
    <Setting></Setting>

    </div>
    <br/><br/>
   <br/><br/>
    <br/><br/>
    <Second></Second>
    <br/><br/>
    <Chart></Chart>
    <br/><br/>
    <Third></Third>
    <br/>
   
   <Footer></Footer>
    
    

    </div>
    
  );
}

export default App;
