function Text(props) {
  const { textType, text, textOverride, styles } = props;
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
        className={styles}
      />
    </div>
  );
}

export default Text;
