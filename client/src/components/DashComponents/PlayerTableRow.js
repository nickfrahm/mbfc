function PlayerTableRow(props) {
  const { name, wins, draws, losses, points } = props;

  return (
    <div className='table-row text-lg text-center text-sm'>
      <div className='table-cell px-4 py-2 text-lg'>{name}</div>
      <div className='table-cell px-4 py-2 text-lg'>{wins}</div>
      <div className='table-cell px-4 py-2 text-lg'>{draws}</div>
      <div className='table-cell px-4 py-2 text-lg'>{losses}</div>
      <div className='table-cell px-4 py-2 text-lg'>{points}</div>
    </div>
  );
}

export default PlayerTableRow;
