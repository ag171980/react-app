import './App.css';
import RouterPage from './pages/router/RouterPage';
import { Contexto} from '../src/pages/contexto/Context'
//import Nav from '../src/pages/components/NavBar/Nav'
function App() {
  return (
     <Contexto>
      <RouterPage />
      </Contexto>
  );
}

export default App;
