import Button from './Button';
import PlayersList from './PlayersList';

function PlayerMenu(props) {
  const { players } = props;
  return (
    <div className='bg-yellow-600 flex flex-col justify-center content-center w-1/3 m-2 text-center'>
      <h2 className='underline text-slate-50 text-xl'>Players</h2>
      <PlayersList players={players} />
      <Button
        text='Add'
        style='container bg-green-500 text-black rounded-md cursor-pointer w-24 mx-auto my-2'
      />
    </div>
  );
}

export default PlayerMenu;
