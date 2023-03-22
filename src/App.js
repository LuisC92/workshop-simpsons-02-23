import './App.css';
import Avatar from "./components/Avatar/Avatar"

function App() {
  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  };
  const homer = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
    firstName: "Homer",
    lastName: "Simpson"
  };
  return (
    <div className='main-container'>
      <h1>Workshop - Simpsons</h1>
      <div className='simpson-container'>
        <Avatar firstName={bart.firstName}  lastName={bart.lastName} image={bart.image} />
        <Avatar firstName={homer.firstName}  lastName={homer.lastName} image={homer.image} />
      </div>
    </div>
  );
}

export default App;
