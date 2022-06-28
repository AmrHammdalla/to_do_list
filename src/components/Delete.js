const Delete = (props) => {
    const{index,handle_delete_to_do}=props
    return (
      <button
        index={index}
        className="btn btn-sm btn-danger"
        onClick={(e) => handle_delete_to_do(e)}
      >
        Delete
      </button>
    );
}
 
export default Delete;