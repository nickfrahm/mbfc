import Leaderboard from './Leaderboard';
import PlayerTable from './PlayerTable';

function Dashboard() {
  return (
    <div className='container m-auto py-5 lg:flex lg:content-center lg:justify-center lg:w-1/2 lg:flex-wrap'>
      <Leaderboard />
      <PlayerTable />
      <PlayerTable />
      <PlayerTable />
      <PlayerTable />
    </div>
  );
}

export default Dashboard;
