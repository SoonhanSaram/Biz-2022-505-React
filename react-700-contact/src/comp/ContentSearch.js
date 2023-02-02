import { useLoaderData } from "react-router-dom";
const ContentSearch = () => {
  const { hello } = useLoaderData();
  return (
    <form className="search-form">
      <input placeholder="검색" />
      <button className="">+</button>
      <div>{hello}</div>
    </form>
  );
};

export default ContentSearch;
