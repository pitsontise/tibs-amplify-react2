import UsersAll from "../users/users.all";
import { H3 } from "../../components/utils/typography";
import Tabs from "../../components/tabs/tabs.component";

const Dashboard = () => {
  const tabs = [
    {
      id: 0,
      title: "Users",
      component: <UsersAll />,
    },
    {
      id: 1,
      title: "Tenders",
      component: <>List of tenders</>,
    },
  ];

  console.log(tabs);

  // return <Tabs data={tabs ?? []} />;
  return (
    <>
      <H3>Dashboard</H3>
      <Tabs data={tabs ?? []} />
    </>
  );
};

export default Dashboard;
