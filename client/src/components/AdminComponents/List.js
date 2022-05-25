import Text from './Text';
import ListItem from './ListItem';
import uniqid from 'uniqid';
import Button from './Button';

function List(props) {
  const { subject, textOverride, player, isTeams, changeHandler } = props;

  return (
    <div className='flex flex-wrap flex-row justify-center m-2'>
      <div className='w-3/4 flex items-start flex-wrap'>
        <Text
          textType={subject}
          text={subject}
          styles='rounded-lg py-1 px-2 m-2'
          changeHandler={changeHandler}
          textOverride={textOverride}
          value=''
        />
        <Button
          text='Add'
          styles='container bg-green-500 text-black rounded-md cursor-pointer mx-auto my-2 text-center w-1/4'
        />
      </div>
      <ul className='w-2/3'>
        {player.teams && isTeams
          ? player.teams.map((team) => {
              return (
                <ListItem
                  detail={team.name}
                  itemKey={uniqid()}
                  key={uniqid()}
                />
              );
            })
          : player.competitionWins && !isTeams
          ? player.competitionWins.map((comp) => {
              return (
                <ListItem detail={comp} itemKey={uniqid()} key={uniqid()} />
              );
            })
          : 'No information on this player'}
      </ul>
    </div>
  );
}

export default List;
