function Text(props) {
  const { textType } = props;
  const hide = {
    display: 'none',
  };

  return (
    <div>
      <label for={textType} style={hide}>
        {textType}
      </label>
      <input name={textType} type='text' placeholder={textType} />
    </div>
  );
}

export default Text;
