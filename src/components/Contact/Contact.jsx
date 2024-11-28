import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = ({ name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      <div className={s.info}>
        <span className={s.name}>
          {" "}
          <IoMdContact className={s.icon} size="14" color="black" />
          {name}
        </span>
        <span className={s.number}>
          <BsFillTelephoneFill className={s.icon} size="14" color="black" />
          {number}
        </span>
      </div>
      <button className={s.button} onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
