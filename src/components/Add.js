const Add = (props) => {
  const{handle_add_to_do,to_do_text,set_to_do_text}=props
//-------------------------------------------------------------------------------------------------------//
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        type="text"
        className="form-control"
        value={to_do_text}
        onChange={(e) => set_to_do_text(e.target.value)}
        placeholder="Add To do...."
      ></input>
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          onClick={(e) => handle_add_to_do(e)}
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
