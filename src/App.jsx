import { useState } from 'react';
import Footer from './Footer';
import Page from './Page'

function App() {
  const [reset,setReset] = useState(false);
  const [winner,setWinner] = useState("");
  const [name, setName] = useState("X");
  const [name2,setName2] = useState("O");

  function handleChange(e){
    setName(e.target.value);
  }
  function handleChange2(e){
    setName2(e.target.value);
  }

  const resetBoard = () => {
    setReset(true);
}
  return (
    <>
      <div className="App">
            {winner && <div className="winner">
                <div className='winner-text'>{winner}</div>
                <button onClick={() => resetBoard()}>Reset</button>
            </div>}
            <h2 className="h1 text-4xl lg:text-7xl md:text-6xl sm:text-5xl text-center tracking-widest">Tic Tac Toe</h2>
            <div className="flex space-y-2 lg:space-y-0 lg:flex-row flex-col w-1/2 lg:w-full items-center justify-around">
              <input onChange={handleChange} value={name} placeholder="Player 1"  className="w-60 lg:py-1 px-4 text-xl font-bold rounded-sm text-center bg-transparent border-2 rounded-md border-gray-900 outline-none" />
              <input onChange={handleChange2} value={name2} placeholder="Player 2" className="w-60 px-4 lg:py-1 text-xl rounded-sm font-bold text-center bg-transparent border-2 rounded-md border-gray-900 outline-none" />
            </div>
            <Page reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} title={name} title2={name2} />
      </div>
      <Footer />
    </>
  )
}

export default App
