import PlayerMenu from './PlayerMenu';
import PlayerForm from './PlayerForm';

function MainContainer() {
  return (
    <div className='container bg-gray-700 rounded-md'>
      <PlayerMenu />
      <PlayerForm />
    </div>
  );
}

export default MainContainer;
