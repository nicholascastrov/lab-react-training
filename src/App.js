import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
        {/* <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        /> */}

        {/* <Greetings lang='es'>Juan</Greetings>    
        <Random min={34} max={1000}/> */}

        {/* <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} /> */}
        {/* <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating> */}

        <LikeButton />
              
      </div>
  );
}

export default App;
