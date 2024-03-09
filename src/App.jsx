import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {

  const handleClick = () => {
    alert("Function Click")
  }

  const addFive = (num) => {
    alert(5+num);
  }

  return (
    <>
      <h1>Explore More React </h1>
      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => alert("Second Button Clicked")}>Second Button</button>
      <button onClick={() => addFive(5)}>Third Button</button>
    </>
  )
}

export default App
