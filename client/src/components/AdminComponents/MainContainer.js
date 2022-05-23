import PlayerMenu from './PlayerMenu';
import PlayerForm from './PlayerForm';
import { useState, useEffect } from 'react';

function MainContainer() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState({});

  const mockPlayers = [
    { id: 'a1', name: 'Nick' },
    { id: 'b2', name: 'Jeremy' },
    { id: 'b3', name: 'Cole' },
    { id: 'a44', name: 'Colton' },
  ];

  useEffect(() => {
    setPlayers(mockPlayers);
  }, []);

  return (
    <div className='bg-gray-700 rounded-md flex w-11/12 content-center justify-center flex-col md:flex-row'>
      <PlayerMenu
        players={players}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      />
      <PlayerForm players={players} activePlayer={activePlayer} />
    </div>
  );
}

export default MainContainer;
