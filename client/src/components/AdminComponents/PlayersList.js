import ListItem from './ListItem';

function PlayersList(props) {
  const { players, handlePlayerClick, playerDeleteClick } = props;
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
            playerDeleteClick={playerDeleteClick}
          />
        );
      })}
    </ul>
  );
}

export default PlayersList;
