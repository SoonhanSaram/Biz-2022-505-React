import ContentSearch from "./ContentSearch";
import ContactList from "./ContactList";
import { Outlet } from "react-router-dom";

const ContactMain = () => {
  return (
    <div className="main-container">
      <aside>
        <h1> Hello Contact</h1>
        <div className="main search">
          <ContentSearch />
        </div>
        <ContactList />
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
export default ContactMain;
