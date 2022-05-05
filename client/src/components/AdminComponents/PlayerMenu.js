import AddButton from './AddButton';
import PlayersList from './PlayersList';

function PlayerMenu() {
  return (
    <div className='container'>
      <h2 className='underline text-slate-50 text-xl'>Players</h2>
      <PlayersList />
      <AddButton />
    </div>
  );
}

export default PlayerMenu;
