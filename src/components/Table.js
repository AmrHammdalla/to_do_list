import Delete from "./Delete";
import Update from "./Update";
//-------------------------------------------------------------------------------------------------//
const Table = (props) => {
  const { to_do_list, handle_delete_to_do, handle_update_to_do } = props;
  //----------------------------------------------------------------------------------------------//
  return (
    <table className="table table-bordered table-hover table-sm">
      <thead>
        <tr>
          <th style={{width: "10%"}}>#</th>
          <th style={{width:"60%"}}>To Do</th>
          <th style={{width: "20%"}}>Update</th>
          <th style={{width: "10%"}}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {to_do_list.length > 0 ? (
          to_do_list.map((e, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{e.to_do}</td>
              <td>
                <Update
                  index={index}
                  handle_update_to_do={handle_update_to_do}
                />
              </td>
              <td>
                <Delete
                  index={index}
                  handle_delete_to_do={handle_delete_to_do}
                />
              </td>
            </tr>
          ))
        ) : (
          <h6>No To dos....</h6>
        )}
      </tbody>
    </table>
  );
};

export default Table;
