function Text(props) {
  const { textType, text, textOverride } = props;
  const hide = {
    display: 'none',
  };

  return (
    <div>
      <label htmlFor={textType} style={hide}>
        {textType}
      </label>
      <input
        name={textType}
        type='text'
        placeholder={textOverride ? textOverride : text}
        className='rounded-lg py-1 px-2 m-2 md:w-2/3 w-1/3'
      />
    </div>
  );
}

export default Text;
