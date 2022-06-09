import ListItem from './ListItem';

function PlayersList(props) {
  const { players, handlePlayerClick } = props;
  return (
    <ul>
      {players.map((player) => {
        return (
          <ListItem
            key={player.id}
            itemKey={player.id}
            detail={player.name}
            clickHandler={handlePlayerClick}
            id={player.id}
            canDelete={true}
          />
        );
      })}
    </ul>
  );
}

export default PlayersList;
