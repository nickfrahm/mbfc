function Button(props) {
  const { text, style } = props;
  return <div className={style}>{text}</div>;
}

export default Button;
