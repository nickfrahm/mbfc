import Delete from './Delete';
import { useState } from 'react';

function ListItem(props) {
  const {
    detail,
    itemKey,
    clickHandler,
    id,
    canDelete,
    playerDeleteClick,
    handleDeleteItem,
  } = props;
  const [hover, setHover] = useState(false);

  return (
    <li
      id={id}
      key={itemKey}
      className='cursor-pointer my-2'
      onClick={clickHandler}
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
    >
      {detail}{' '}
      <Delete
        itemId={id}
        canDelete={canDelete}
        styles={
          canDelete && hover
            ? 'pl-1 pr-2 pb-1 text-left leading-none bg-red-800 rounded-md'
            : 'hidden'
        }
        click={playerDeleteClick}
      />
    </li>
  );
}

export default ListItem;
