import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <div className="logo_name">
        <img
          src="data:image/png;base64,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"
          alt="student_logo"
        />
        <span>Student Record Management System</span>
      </div>
      <div className="name_logout">
        <span>Admin 1</span>
        <span>Log Out</span>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  width: 100%;
  height: 8%;
  background-color: #aede1a;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 0 20px;

  .logo_name{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    
    img{
      height: 70px;
      border-radius: 50%;
    }
    span{
      font-weight: 500;
      font-size: 30px;
    }
  }
  .name_logout{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    span{
      font-weight: 400;
      font-size: 25px;
    }

  }


`;

export default Navbar;
