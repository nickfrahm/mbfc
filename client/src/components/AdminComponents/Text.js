function Text(props) {
  const {
    textType,
    text,
    textOverride,
    styles,
    val,
    changeHandler,
    isNumber,
    nameRef,
    nullRef,
  } = props;
  const hide = {
    display: 'none',
  };

  return (
    <div>
      <label htmlFor={textType} style={hide}>
        {textType}
      </label>
      <input
        id={textType + '-txt'}
        ref={textType === 'name' ? nameRef : nullRef}
        name={textType}
        type='text'
        className={styles + ' text-black'}
        placeholder={textOverride ? textOverride : text}
        defaultValue={val ? val : ''}
        onChange={changeHandler}
        pattern={isNumber ? '[0-9]*' : '[A-Za-z0-9]'}
      />
    </div>
  );
}

export default Text;
