import './App.css';
import ItemList from './Components/ItemList/ItemList';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/Shared/NavBar';
import Container from '@material-ui/core/Container';

function App() {
  return (
   
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Container>
          <Route exact path='/' component={ItemList} />
        </Container>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
