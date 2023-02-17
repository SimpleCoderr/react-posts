import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {  useSelector } from 'react-redux';
import Loader from './components/UI/loader/Loader';
import AppRouter from './components/AppRouter';

function App() {
  const isLoading = useSelector(state => state.app.isLoading)

  return (
    <div className='app'>
      <Header title={'React app'} links={['posts','users']}/>
      <AppRouter/>
      {isLoading && <Loader/>}
    </div>
  );
}

export default App;
