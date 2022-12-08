import boxStyle from "../css/Box.module.css";
const Box = (props) => {
  const { childrent } = props;
  return <div className={`${boxStyle.container}`}>{childrent}</div>;
};

export default Box;
