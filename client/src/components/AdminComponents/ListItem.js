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
    isPlayer,
    subject,
  } = props;
  const [hover, setHover] = useState(false);

  const classNameGenerator = () => {
    if (subject !== null && subject !== '') {
      return `cursor-pointer my-2 ${subject}-li`;
    }

    return 'cursor-pointer my-2';
  };

  return (
    <li
      id={id}
      key={itemKey}
      className={classNameGenerator()}
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
        click={isPlayer ? playerDeleteClick : handleDeleteItem}
      />
    </li>
  );
}

export default ListItem;
