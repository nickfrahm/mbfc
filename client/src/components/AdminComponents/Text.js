function Text(props) {
  const { textType, text } = props;
  const hide = {
    display: 'none',
  };

  return (
    <div>
      <label for={textType} style={hide}>
        {textType}
      </label>
      <input name={textType} type='text' placeholder={text} />
    </div>
  );
}

export default Text;
