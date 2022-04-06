function LeaderboardRow(props) {
  const { name, points } = props;

  return (
    <div className='table-row text-lg text-center'>
      <div className='table-cell px-4 py-2'>{name}</div>
      <div className='table-cell px-4 py-2'>{points}</div>
    </div>
  );
}

export default LeaderboardRow;
