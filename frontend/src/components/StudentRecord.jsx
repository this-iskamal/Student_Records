import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import StudentProfile from "./StudentProfile";
import StudentList from "./StudentList";

function StudentRecord() {
  return (
    <Container>
      <Navbar />
      <div className="profile_list">
        <StudentProfile />
        <StudentList />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: wheat;
  display: flex;
  flex-direction: column;

  .profile_list{
    width: 100%;
    height: 92%;
    display: flex;
    flex-direction: row;
  }
`;

export default StudentRecord;
