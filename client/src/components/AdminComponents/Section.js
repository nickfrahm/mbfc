import Text from './Text';
import List from './List';

function Section(props) {
  const { subject, type, textOverride, player, isTeams } = props;

  return (
    <div className='bg-blue-500'>
      {(() => {
        if (type === 'text') {
          return (
            <Text
              textType={subject}
              text={subject}
              textOverride={textOverride}
              player={player}
              styles='rounded-lg py-1 px-2 m-2 md:w-2/3 w-1/3'
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
