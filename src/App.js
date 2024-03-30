import './App.css';
import Footer from '../src/components/footer/footer';
import AppBarone from './components/appbar/appbar';
import GridBox from './components/grid/grid';

function App() {
  return (
    <div className='content'>
      <AppBarone />
      <GridBox/>
      
      <Footer />
    </div>
  );
}


export default App;
