const Input = ({nameChange}) => {
  const nameChangeHandller = (e) => {
    const st_name = e.target.value;
    // console.log(st_name);
    nameChange(st_name)
  };
  return (
    <input
      onChange={nameChangeHandller}
      name="st_name"
      placeholder="이름을 입력하세요"
    />
  );
};
export default Input;
