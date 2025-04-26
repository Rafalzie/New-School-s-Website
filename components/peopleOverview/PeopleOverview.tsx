import { UserInfoCards } from "components/userInfoCards/UserInfoCards";
import { Container } from "./style";
import { ShareableUserInfo } from "types/types";

interface PeopleOverviewProps {
  teachers: ShareableUserInfo[];
  students: ShareableUserInfo[];
}

export const PeopleOverview = ({ teachers, students }: PeopleOverviewProps) => {
  return (
    <Container>
      <div
        style={{
          alignSelf: "flex-start",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "2rem",
        }}
      >
        <p>Select someone to learn more about them</p>

        <UserInfoCards userInfo={teachers} title="Teachers" zIndex={4} />

        <UserInfoCards userInfo={students} title="Students" />
      </div>
    </Container>
  );
};
