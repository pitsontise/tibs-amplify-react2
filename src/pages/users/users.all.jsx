import Table from "../../components/table/table.component";
import { usersData } from "../../data/users";

const UsersAll = () => {
  const headers = [
    {
      title: "ID",
      accessor: "id",
    },
    {
      title: "First Name",
      accessor: "firstName",
    },
    {
      title: "Last Name",
      accessor: "lastName",
    },
    {
      title: "Contact Number",
      accessor: "contactNumber",
    },
    {
      title: "Email",
      accessor: "email",
    },
    {
      title: "Organisation",
      accessor: "organisation",
    },
  ];

  return <Table title="Users" headers={headers} data={usersData} />;
};

export default UsersAll;
