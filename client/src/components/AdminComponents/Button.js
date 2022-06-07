function Button(props) {
  const { text, styles, click, name } = props;
  return (
    <div id={name} className={styles} onClick={click}>
      {text}
    </div>
  );
}

export default Button;
