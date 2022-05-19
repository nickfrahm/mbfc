import Section from './Section';
import Button from './Button';

function PlayerForm(props) {
  const { players, active } = props;

  return (
    <div className='md:w-2/3 flex flex-col justify-center content-center w-11/12 md:m-2 m-6 text-center'>
      <form>
        <Section type='text' subject='name' textOverride={`Player Name`} />
        <Section type='list' subject='teams' />
        <Section type='list' subject='competitions' />
        <Section
          type='text'
          subject='championsLeague'
          textOverride={`Champion's League`}
        />
        <Button
          text='Save All'
          style='container bg-green-500 text-black rounded-md cursor-pointer w-24 mx-auto my-2 text-center'
        />
      </form>
    </div>
  );
}

export default PlayerForm;
