import ListItem from './ListItem';

function PlayersList(props) {
  const { players, handlePlayerClick } = props;
  return (
    <ul className='bg-red-900'>
      {players.map((player) => {
        return (
          <ListItem
            key={player.id}
            itemKey={player.id}
            detail={player.name}
            clickHandler={handlePlayerClick}
            id={player.id}
          />
        );
      })}
    </ul>
  );
}

export default PlayersList;
