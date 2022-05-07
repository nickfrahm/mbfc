function ListItem(props) {
  const { detail, itemKey } = props;
  return (
    <li key={itemKey} className='cursor-pointer'>
      {detail}
    </li>
  );
}

export default ListItem;
