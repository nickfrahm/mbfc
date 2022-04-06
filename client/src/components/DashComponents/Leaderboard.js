import LeaderboardRow from './LeaderboardRow';

function Leaderboard() {
  const mockData = [
    {
      name: 'Nick',
      points: 456,
    },
    {
      name: 'Mo',
      points: 400,
    },
    {
      name: 'Cole',
      points: 376,
    },
    {
      name: 'Colton',
      points: 250,
    },
  ];

  return (
    <div className='bg-gray-700 rounded-md w-11/12 m-auto table mt-6 lg:mx-6 lg:flex-auto'>
      {mockData.map((player) => {
        return (
          <div className='table-row-group'>
            <LeaderboardRow name={player.name} points={player.points} />
          </div>
        );
      })}
    </div>
  );
}

export default Leaderboard;
