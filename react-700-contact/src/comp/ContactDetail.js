import ContactInput from "./ContactInput";
import { useLoaderData } from "react-router-dom";
export const loader = async ({ params }) => {
  const uid = params.uid;
  const res = await fetch(`/api/detail/?uid=${uid}`);

  const result = await res.json();
  return { contact: result };
};
const ContactDetail = () => {
  const { contact } = useLoaderData();
  return (
    <div className="detail">
      <img />
      <div>이름 : {contact.c_name}</div>
      <div>id : {contact.c_uid}</div>

      <ContactInput />
    </div>
  );
};
export default ContactDetail;
