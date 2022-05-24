function Button(props) {
  const { text, styles } = props;
  return <div className={styles}>{text}</div>;
}

export default Button;
