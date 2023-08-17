import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AddNewStudent from "./AddNewStudent";

function StudentList() {
  const [studentlist, setStudentlist] = useState([]);
  const [query, setQuery] = useState("");
  const [showAddNew, setShowAddNew] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/get-student-list/?q=${query}`)
      .then((res) => {
        setStudentlist(res.data.student_list);
      });
  }, [query]);

  const handleaddbutton = () => {
    setShowAddNew(!showAddNew);
  };

  return (
    <ListContainer>
      {showAddNew ? (
        <AddNewStudent />
      ) : (
        <>
          <div className="search_bar">
            <button onClick={handleaddbutton}>Add New</button>
            <input
              type="text"
              placeholder="Search Student"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <table class="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date Of Birth</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {studentlist.map((slist) => {
                return (
                  <tr key={slist.id}>
                    <td>{slist.id}</td>
                    <td>{slist.first_name}</td>
                    <td>{slist.last_name}</td>

                    <td>{slist.date_of_birth}</td>

                    <td>{slist.email}</td>

                    <td>{slist.phone_number}</td>
                    <td>{slist.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 75%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;

  .search_bar {
    display: flex;
    flex-direction: row;
    margin-top: 1%;
    width: 60%;
    gap: 1rem;
    button {
      background-color: #009879;
      color: white;
      font-size: 18px;
      width: 15%;
      font-weight: bold;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }

    input {
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 20px;
      margin-left: 15%;
    }
  }

  .styled-table {
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1.2rem;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-right: 5%;
    thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
    }

    th,
    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
    }
  }
`;

export default StudentList;
