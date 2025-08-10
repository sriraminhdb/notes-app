import AddIcon from "../assets/add.svg?react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div>
        <Link to="/note/new/"><AddIcon className="floating-button" /></Link>
    </div>
  )
};

export default AddButton;
