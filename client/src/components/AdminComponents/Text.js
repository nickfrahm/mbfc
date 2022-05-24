function Text(props) {
  const { textType, text, textOverride, styles, val, changeHandler } = props;
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
        className={styles + ' text-black'}
        value={val ? val : ''}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Text;
