function ListItem(props) {
  const { detail, itemKey, clickHandler, id } = props;
  return (
    <li id={id} key={itemKey} className='cursor-pointer' onClick={clickHandler}>
      {detail}
    </li>
  );
}

export default ListItem;
