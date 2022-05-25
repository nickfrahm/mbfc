import Section from './Section';
import Button from './Button';

function PlayerForm(props) {
  const { activePlayer, changeHandler } = props;

  return (
    <div className='md:w-2/3 flex flex-col justify-center content-center w-11/12 md:m-2 m-6 text-center'>
      <form className='border-2 border-solid border-white rounded-md'>
        <Section
          type='text'
          subject='name'
          textOverride='Player Name'
          player={activePlayer}
          changeHandler={changeHandler}
        />
        <Section
          type='list'
          subject='teams'
          player={activePlayer}
          isTeams={true}
          textOverride='Add a team...'
          changeHandler={changeHandler}
        />
        <Section
          type='list'
          subject='competitions'
          player={activePlayer}
          isTeams={false}
          textOverride='Add Competition Won...'
          changeHandler={changeHandler}
        />
        <Section
          type='text'
          subject='championsLeague'
          textOverride={`Champion's League Points`}
          player={activePlayer}
          changeHandler={changeHandler}
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
