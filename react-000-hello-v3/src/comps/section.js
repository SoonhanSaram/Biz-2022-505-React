import "../scss/section.scss";
import "../scss/section.sass";
const Section = (props) => {
  const { children } = props;
  return (
    <>
      <section className="container">{children}</section>;
      <section className="container red">{children}</section>
      <section className="container box">{children}</section>
      <section className="container red circle">{children}</section>
      <section className="container red circle blue">{children}</section>
    </>
  );
};

export default Section;
