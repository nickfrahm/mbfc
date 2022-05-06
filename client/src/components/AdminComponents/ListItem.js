function ListItem(props) {
  const { detail, itemKey } = props;
  return <li key={itemKey}>{detail}</li>;
}

export default ListItem;
