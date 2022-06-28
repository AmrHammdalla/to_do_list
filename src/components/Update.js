import { useState } from "react";
const Update = (props) => {
  //-----------------------------------------------------------------------------------------------//
  const [updated_text, set_updated_text] = useState("");
  //-----------------------------------------------------------------------------------------------//
  const { handle_update_to_do, index } = props;
  //-----------------------------------------------------------------------------------------------//
  return (
    <div class="input-group input-group-sm mb-3">
      <input
        type="text"
        value={updated_text}
        onChange={(e) => set_updated_text(e.target.value)}
        className="form-control"
        placeholder="Edit your to do.."
      ></input>
      <div className="input-group-append">
        <button
          index={index}
          className="btn btn-sm btn-success"
          onClick={(e) => {
            handle_update_to_do(e, updated_text);
            set_updated_text("");
          }}
          type="button"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
