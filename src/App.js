import { useState } from "react";
import Add from "./components/Add";
import Table from "./components/Table";
//-----------------------------------------------//
function App() {
  const [to_do_list, update_to_do_list] = useState([
    { to_do: "initial to do, you can delete it" },
  ]);
  //------------------------------------------------------------------------------------------------//
  const [to_do_text, set_to_do_text] = useState("");
  //-----------------------------------------------------------------------------------------------//
  function handle_add_to_do(e) {
    const new_to_do = {
      to_do: to_do_text,
    };
    let old_list = [...to_do_list];
    old_list.push(new_to_do);
    update_to_do_list(old_list);
    set_to_do_text("");
  }
  //-----------------------------------------------------------------------------------------------//
  function handle_delete_to_do(e) {
    const index = e.target.getAttribute("index");
    let old_list = [...to_do_list];
    old_list.splice(index, 1);
    update_to_do_list(old_list);
  }
  //--------------------------------------------------------------------------------------------------//
  function handle_update_to_do(e, updated_text) {
    const updated_to_do = {
      to_do: updated_text,
    };
    const index = e.target.getAttribute("index");
    let old_list = [...to_do_list];
    old_list[index] = updated_to_do;
    update_to_do_list(old_list);
  }
  //-----------------------------------------------------------------------------------------------//
  return (
    <div className="container-fluid">
      {/* ------------------------------------ADD FIELD--------------------------------------------- */}
      <Add
        handle_add_to_do={handle_add_to_do}
        to_do_text={to_do_text}
        set_to_do_text={set_to_do_text}
      />
      {/* --------------------------------------TABLE---------------------------------------------- */}
      <Table
        to_do_list={to_do_list}
        handle_delete_to_do={handle_delete_to_do}
        handle_update_to_do={handle_update_to_do}
      />
    </div>
  );
}

export default App;
