import PlayerMenu from './PlayerMenu';
import PlayerForm from './PlayerForm';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';

function MainContainer() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState({
    id: uniqid(),
    name: '',
    teams: [],
    uclPoints: 0,
    competitionWins: [],
  });
  const [addTeamField, setAddTeamField] = useState('');
  const [addCompField, setAddCompField] = useState('');

  const mockPlayers = [
    {
      id: 'a1',
      name: 'Nick',
      teams: [{ name: 'Man City' }, { name: 'Real Madrid' }],
      uclPoints: 100,
      competitionWins: ['21/22 Club Draft'],
    },
    {
      id: 'b2',
      name: 'Jeremy',
      teams: [{ name: 'Man Utd' }, { name: 'PSG' }],
      uclPoints: 50,
      competitionWins: ['20/21 Club Draft', '19/20 Club Draft'],
    },
    {
      id: 'b3',
      name: 'Cole',
      teams: [{ name: 'Liverpool' }, { name: 'Atletico Madrid' }],
      uclPoints: 75,
      competitionWins: ['Euro 2020', '18/19 Club Draft'],
    },
    {
      id: 'a44',
      name: 'Colton',
      teams: [{ name: 'Bayern Munich' }, { name: 'Chelsea' }],
      uclPoints: 60,
      competitionWins: ['2018 World Cup'],
    },
  ];

  useEffect(() => {
    setPlayers(mockPlayers);
  }, []);

  useEffect(() => {
    console.log(activePlayer);
  });

  const handlePlayerClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    console.log('player clicked, id: ' + id);
    setActivePlayer(players.find((player) => player.id === id));
  };

  const changeHandler = (e) => {
    //handle input change
    const { name, value, validity } = e.target;
    switch (name) {
      case 'name':
        setActivePlayer({ ...activePlayer, name: value });
        break;
      case 'teams':
        setAddTeamField(value);
        break;
      case 'competitionWins':
        setAddCompField(value);
        break;
      case 'uclPoints':
        validity.valid
          ? setActivePlayer({ ...activePlayer, uclPoints: parseInt(value) })
          : setActivePlayer({ ...activePlayer, uclPoints: 0 });
        break;
      default:
        break;
    }
  };

  return (
    <div className='bg-gray-700 rounded-md flex w-11/12 content-center justify-center flex-col md:flex-row'>
      <PlayerMenu
        players={players}
        handlePlayerClick={handlePlayerClick}
        changeHandler={changeHandler}
      />
      <PlayerForm
        players={players}
        activePlayer={activePlayer}
        changeHandler={changeHandler}
      />
    </div>
  );
}

export default MainContainer;
