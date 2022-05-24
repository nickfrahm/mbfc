import Text from './Text';
import ListItem from './ListItem';
import uniqid from 'uniqid';

function List(props) {
  const { subject, textOverride, player, isTeams } = props;

  return (
    <div>
      <Text
        textType={subject}
        text={subject}
        styles='rounded-lg py-1 px-2 m-2 md:w-1/3 w-1/8'
      />
      <ul>
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
                <ListItem
                  detail={comp.name}
                  itemKey={uniqid()}
                  key={uniqid()}
                />
              );
            })
          : 'No information on this player'}
      </ul>
    </div>
  );
}

export default List;
