import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Nav from "../../components/nav/Nav";
import { DataTable } from "../../components/dataTable/DataTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Nav />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
