import PlayerMenu from './PlayerMenu';
import PlayerForm from './PlayerForm';
import uniqid from 'uniqid';
import { useState, useEffect, useRef } from 'react';

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
  //const [addPlayerField, setAddPlayerField] = useState('');

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

  const nameRef = useRef('');
  const nullRef = useRef(null);

  useEffect(() => {
    console.log('activePlayer useEffect logged.');
    let updatedPlayers = players.map((player) => {
      if (player.id === activePlayer.id) {
        return { ...player, name: activePlayer.name };
      }
      return player;
    });
    setPlayers(updatedPlayers);
    nameRef.current.value = activePlayer.name;
  }, [activePlayer.name]);

  useEffect(() => {
    setPlayers(mockPlayers);
  }, []);

  useEffect(() => {
    console.log(activePlayer);
    console.log(addTeamField);
    console.log(addCompField);
    console.log(players);
    //console.log(addPlayerField);
  });

  const resetAddFields = () => {
    setAddCompField('');
    setAddTeamField('');
    document.getElementById('teams-txt').value = '';
    document.getElementById('competitionWins-txt').value = '';
  };

  const handlePlayerClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    console.log('player clicked, id: ' + id);
    setActivePlayer(players.find((player) => player.id === id));
    nameRef.current.value = activePlayer.name;
    resetAddFields();
  };

  const changeHandler = (e) => {
    //handle input change
    const { name, value, validity } = e.target;
    switch (name) {
      case 'name':
        setActivePlayer({ ...activePlayer, name: value });
        break;
      case 'teams':
        console.log('team text changed');
        setAddTeamField(value);
        break;
      case 'competitionWins':
        setAddCompField(value);
        break;
      case 'uclPoints':
        validity.valid && !isNaN(parseInt(value))
          ? setActivePlayer({ ...activePlayer, uclPoints: parseInt(value) })
          : setActivePlayer({ ...activePlayer, uclPoints: 0 });
        break;
      default:
        break;
    }
  };

  const addToActiveArr = (e) => {
    e.preventDefault();
    const { id } = e.target;

    switch (id) {
      case 'competitionWins':
        if (addCompField.trim() !== '') {
          setActivePlayer({
            ...activePlayer,
            competitionWins: [...activePlayer.competitionWins, addCompField],
          });
        }
        break;
      case 'teams':
        if (addTeamField.trim() !== '') {
          setActivePlayer({
            ...activePlayer,
            teams: [...activePlayer.teams, { name: addTeamField }],
          });
        }
        break;
      case 'AddPlayerBtn':
        setPlayers([
          ...players,
          {
            id: uniqid(),
            name: 'New Player',
            teams: [],
            uclPoints: 0,
            competitionWins: [],
          },
        ]);
        break;
      default:
        resetAddFields();
        break;
    }
    resetAddFields();
  };

  return (
    <div className='bg-gray-700 rounded-md flex w-11/12 content-center justify-center flex-col md:flex-row'>
      <PlayerMenu
        players={players}
        handlePlayerClick={handlePlayerClick}
        changeHandler={changeHandler}
        addToActiveArr={addToActiveArr}
      />
      <PlayerForm
        players={players}
        activePlayer={activePlayer}
        changeHandler={changeHandler}
        addToActiveArr={addToActiveArr}
        nameRef={nameRef}
        nullRef={nullRef}
      />
    </div>
  );
}

export default MainContainer;
