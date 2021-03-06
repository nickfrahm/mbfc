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

  //active player name changed on form
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

  //active player teams changed on form
  useEffect(() => {
    console.log('activePlayer teams changed.');
    let updatedPlayers = players.map((player) => {
      if (player.id === activePlayer.id) {
        return { ...player, teams: activePlayer.teams };
      }
      return player;
    });
    setPlayers(updatedPlayers);
    //nameRef.current.value = activePlayer.name;
  }, [activePlayer.teams]);

  //active player comps won changed on form
  useEffect(() => {
    console.log('activePlayer teams changed.');
    let updatedPlayers = players.map((player) => {
      if (player.id === activePlayer.id) {
        return { ...player, competitionWins: activePlayer.competitionWins };
      }
      return player;
    });
    setPlayers(updatedPlayers);
    //nameRef.current.value = activePlayer.name;
  }, [activePlayer.competitionWins]);

  useEffect(() => {
    setPlayers(mockPlayers);
  }, []);

  useEffect(() => {
    console.log(activePlayer);
    console.log(addTeamField);
    console.log(addCompField);
    console.log(players);
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

  const playerDeleteClick = (e) => {
    const { id } = e.target;
    e.stopPropagation();
    console.log('player delete clicked');
    const newPlayersArr = players.filter((player) => player.id !== id);
    setPlayers(newPlayersArr);
    if (activePlayer.id === id) {
      setActivePlayer({
        id: uniqid(),
        name: '',
        teams: [],
        uclPoints: 0,
        competitionWins: [],
      });
    }
  };

  const handleDeleteItem = (e) => {
    e.stopPropagation();
    console.log('deleting item');

    //handle Team deletion
    if (e.target.parentElement.classList.contains('teams-li')) {
      const newTeamsList = activePlayer.teams.filter((team) => {
        if (team.name !== e.target.parentElement.childNodes[0].textContent) {
          console.log(
            `Team names ${team.name} and ${e.target.parentElement.childNodes[0].textContent} don't match, don't delete.`
          );
          return true;
        }
      });

      setActivePlayer({ ...activePlayer, teams: newTeamsList });
      console.log(activePlayer);
    }

    //handle Comp Wins deletion
    if (e.target.parentElement.classList.contains('competitionWins-li')) {
      const newCompList = activePlayer.competitionWins.filter((win) => {
        if (win !== e.target.parentElement.childNodes[0].textContent) {
          console.log(
            `Comp wins ${win} and ${e.target.parentElement.childNodes[0].textContent} don't match, don't delete.`
          );
          return true;
        }
      });

      setActivePlayer({ ...activePlayer, competitionWins: newCompList });
      console.log(activePlayer);
    }
  };

  return (
    <div className='bg-gray-700 rounded-md flex w-11/12 content-center justify-center flex-col md:flex-row'>
      <PlayerMenu
        players={players}
        handlePlayerClick={handlePlayerClick}
        changeHandler={changeHandler}
        addToActiveArr={addToActiveArr}
        playerDeleteClick={playerDeleteClick}
      />
      <PlayerForm
        players={players}
        activePlayer={activePlayer}
        changeHandler={changeHandler}
        addToActiveArr={addToActiveArr}
        nameRef={nameRef}
        nullRef={nullRef}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default MainContainer;
