import './App.css';
import { useFetchOrder } from './services';

function App() {
  const { order, loading } = useFetchOrder();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <p>{JSON.stringify(order)}</p>
    </div>
  );
}

export default App;
