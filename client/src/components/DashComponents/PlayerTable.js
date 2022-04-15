import PlayerTableRow from './PlayerTableRow';
import { useState, useEffect } from 'react';

function PlayerTable(props) {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('/api/tableData/')
      .then((res) => res.json())
      .then((data) => setTeamData(data));
  }, []);

  return (
    <div className='bg-gray-700 rounded-md w-11/12 m-auto table mt-6 lg:mx-6 lg:flex-auto'>
      <div className='text-3xl underline text-center table-header-group'>
        <div className='table-cell'>LaLiga</div>
        <div className='table-cell'>W</div>
        <div className='table-cell'>D</div>
        <div className='table-cell'>L</div>
        <div className='table-cell'>Total</div>
      </div>
      {teamData.map((team) => {
        return (
          <div className='table-row-group'>
            <PlayerTableRow
              name={team.team}
              wins={team.wins}
              draws={team.draws}
              losses={team.losses}
              points={team.points}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PlayerTable;
