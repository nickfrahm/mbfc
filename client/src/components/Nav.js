function Nav(props) {
  const { title } = props;

  return (
    <div className='text-slate-50 bg-gray-700 flex justify-center align-center py-4 text-3xl'>
      <h1>{title}</h1>
    </div>
  );
}

export default Nav;
