"use server";
import { PeopleOverview } from "components/peopleOverview/PeopleOverview";
import { getUsers } from "serverActions/getUsers";

const PeoplePage = async () => {
  const teachers = await getUsers({ role: "teacher" });
  const students = await getUsers({ role: "user" });

  return <PeopleOverview teachers={teachers} students={students} />;
};

export default PeoplePage;
