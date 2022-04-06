import PlayerTableRow from './PlayerTableRow';
const mockPlayerTableData = [
  {
    playerId: 1,
    playerName: 'Nick',
    team: 'Tottenham',
    wins: 10,
    draws: 5,
    losses: 5,
    totalPoints: 35,
  },
  {
    playerId: 1,
    playerName: 'Nick',
    team: 'Man United',
    wins: 10,
    draws: 5,
    losses: 5,
    totalPoints: 35,
  },
  {
    playerId: 1,
    playerName: 'Nick',
    team: 'Liverpool',
    wins: 10,
    draws: 5,
    losses: 5,
    totalPoints: 35,
  },
  {
    playerId: 1,
    playerName: 'Nick',
    team: 'Arsenal',
    wins: 10,
    draws: 5,
    losses: 5,
    totalPoints: 35,
  },
  {
    playerId: 1,
    playerName: 'Nick',
    team: 'Chelsea',
    wins: 10,
    draws: 5,
    losses: 5,
    totalPoints: 35,
  },
  {
    playerId: 1,
    playerName: 'Nick',
    team: 'Man City',
    wins: 10,
    draws: 5,
    losses: 5,
    totalPoints: 35,
  },
];
function PlayerTable(props) {
  return (
    <div className='bg-gray-700 rounded-md w-11/12 m-auto table mt-6 lg:mx-6 lg:flex-auto'>
      <div className='text-3xl underline text-center table-header-group'>
        <div className='table-cell'>{mockPlayerTableData[0].playerName}</div>
        <div className='table-cell'>W</div>
        <div className='table-cell'>D</div>
        <div className='table-cell'>L</div>
        <div className='table-cell'>Total</div>
      </div>
      {mockPlayerTableData.map((team) => {
        return (
          <div className='table-row-group'>
            <PlayerTableRow
              name={team.team}
              wins={team.wins}
              draws={team.draws}
              losses={team.losses}
              points={team.totalPoints}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PlayerTable;
