import Text from './Text';
import List from './List';

function Section(props) {
  const { subject, type, textOverride } = props;

  return (
    <div className='bg-blue-500'>
      {(() => {
        if (type === 'text') {
          return (
            <Text
              textType={subject}
              text={subject}
              textOverride={textOverride}
            />
          );
        } else {
          return <List />;
        }
      })()}
    </div>
  );
}

export default Section;
