import './App.css';
import Header from './componenents/Header';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
