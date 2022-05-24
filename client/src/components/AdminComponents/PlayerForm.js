import Section from './Section';
import Button from './Button';

function PlayerForm(props) {
  const { players, activePlayer } = props;

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case '':
        //setName(value);
        break;
      case '':
        //setEmail(value);
        break;
      case '':
        //setPhoneNumber(value);
        break;
    }
  };

  return (
    <div className='md:w-2/3 flex flex-col justify-center content-center w-11/12 md:m-2 m-6 text-center'>
      <form>
        <Section
          type='text'
          subject='name'
          textOverride={`Player Name`}
          player={activePlayer}
        />
        <Section
          type='list'
          subject='teams'
          player={activePlayer}
          isTeams={true}
        />
        <Section
          type='list'
          subject='competitions'
          player={activePlayer}
          isTeams={false}
        />
        <Section
          type='text'
          subject='championsLeague'
          textOverride={`Champion's League Points`}
          player={activePlayer}
        />
        <Button
          text='Save All'
          styles='container bg-green-500 text-black rounded-md cursor-pointer w-24 mx-auto my-2 text-center'
        />
      </form>
    </div>
  );
}

export default PlayerForm;
