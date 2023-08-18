import style from './style.module.css';

import logoImage from '../assets/png/Logo130.png'

import Header from './components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header Logo={logoImage}/>
      <h1>Home</h1>
    </div>
  );
}

export default Home;