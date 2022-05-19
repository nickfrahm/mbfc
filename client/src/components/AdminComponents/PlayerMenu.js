import Button from './Button';
import PlayersList from './PlayersList';
import Text from './Text';

function PlayerMenu(props) {
  const { players } = props;
  return (
    <div className='bg-yellow-600 flex flex-col justify-center content-center md:w-1/3 w-11/12 md:m-2 text-center'>
      <h2 className='underline text-slate-50 text-3xl my-2 cursor-default'>
        Players
      </h2>
      <PlayersList players={players} />
      <Text
        textType='playerName'
        text='Player'
        styles='rounded-lg py-1 px-2 m-2 md:w-2/3 w-1/3'
      />
      <Button
        text='Add'
        style='container bg-green-500 text-black rounded-md cursor-pointer w-24 mx-auto my-2'
      />
    </div>
  );
}

export default PlayerMenu;
