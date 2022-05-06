import ListItem from './ListItem';

function PlayersList(props) {
  const { players } = props;
  return (
    <ul className='bg-red-900'>
      {players.map((player) => {
        return (
          <ListItem key={player.id} itemKey={player.id} detail={player.name} />
        );
      })}
    </ul>
  );
}

export default PlayersList;
