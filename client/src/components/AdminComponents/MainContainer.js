import PlayerMenu from './PlayerMenu';
import PlayerForm from './PlayerForm';
import { useState, useEffect } from 'react';

function MainContainer() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState({});

  const mockPlayers = [
    {
      id: 'a1',
      name: 'Nick',
      teams: [{ name: 'Man City' }, { name: 'Real Madrid' }],
    },
    { id: 'b2', name: 'Jeremy', teams: [{ name: 'Man Utd' }, { name: 'PSG' }] },
    {
      id: 'b3',
      name: 'Cole',
      teams: [{ name: 'Liverpool' }, { name: 'Atletico Madrid' }],
    },
    {
      id: 'a44',
      name: 'Colton',
      teams: [{ name: 'Bayern Munich' }, { name: 'Chelsea' }],
    },
  ];

  useEffect(() => {
    setPlayers(mockPlayers);
  }, []);

  const handlePlayerClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    console.log('player clicked');
    setActivePlayer(players.find((player) => player.id === id));
  };

  return (
    <div className='bg-gray-700 rounded-md flex w-11/12 content-center justify-center flex-col md:flex-row'>
      <PlayerMenu players={players} handlePlayerClick={handlePlayerClick} />
      <PlayerForm players={players} activePlayer={activePlayer} />
    </div>
  );
}

export default MainContainer;
