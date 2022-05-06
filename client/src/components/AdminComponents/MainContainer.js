import PlayerMenu from './PlayerMenu';
import PlayerForm from './PlayerForm';

function MainContainer() {
  const mockPlayers = [
    { id: 'a1', name: 'Nick' },
    { id: 'b2', name: 'Jeremy' },
    { id: 'b3', name: 'Cole' },
    { id: 'a44', name: 'Colton' },
  ];

  return (
    <div className='bg-gray-700 rounded-md flex w-11/12 content-center justify-center'>
      <PlayerMenu players={mockPlayers} />
      <PlayerForm />
    </div>
  );
}

export default MainContainer;
