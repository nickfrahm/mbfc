import Text from './Text';
import List from './List';

function Section(props) {
  const { subject, type, textOverride, player, isTeams, changeHandler } = props;

  return (
    <div>
      {(() => {
        if (type === 'text') {
          return (
            <Text
              textType={subject}
              text={subject}
              textOverride={textOverride}
              changeHandler={changeHandler}
              player={player}
              styles='rounded-lg py-1 px-2 m-2 md:w-2/3 w-1/3'
              val={
                subject === 'championsLeague' ? player.uclPoints : player.name
              }
            />
          );
        } else {
          return (
            <List
              subject={subject}
              type={type}
              textOverride={textOverride}
              player={player}
              isTeams={isTeams}
            />
          );
        }
      })()}
    </div>
  );
}

export default Section;
