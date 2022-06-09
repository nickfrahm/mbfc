function Delete(props) {
  const { click, styles, itemId, canDelete } = props;
  const hide = {
    display: 'none',
  };

  return (
    <span onClick={click} className={styles}>
      {canDelete === true ? 'x' : ''}
    </span>
  );
}

export default Delete;
