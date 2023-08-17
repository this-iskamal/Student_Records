import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function AddNewStudent() {
  const [info, setInfo] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    date_of_birth: "",
  });

  const handleinputchange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handlesubmit = () => {
    console.log(info);

    axios.post(`http://localhost:8000/add-new-student`,info)
    .then((res)=>{
        console.log(res.data.message)
    })

    setInfo({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      date_of_birth: "",
    });
  };
  return (
    <Container>
      <div className="form_input">
        <div className="input_fields">
          <label htmlFor="first_name">First Name *</label>
          <input
            type="text"
            name="first_name"
            value={info.first_name}
            placeholder="First Name"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <div className="input_fields">
          <label htmlFor="middle_name">Middle Name </label>
          <input
            type="text"
            value={info.middle_name}
            name="middle_name"
            placeholder="Middle Name"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <div className="input_fields">
          <label htmlFor="last_name">Last Name *</label>
          <input
            type="text"
            name="last_name"
            value={info.last_name}
            placeholder="Last Name"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <div className="input_fields">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            value={info.email}
            placeholder="Email"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <div className="input_fields">
          <label htmlFor="Phone">Phone *</label>
          <input
            type="text"
            name="phone_number"
            value={info.phone_number}
            placeholder="Phone Number"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <div className="input_fields">
          <label htmlFor="date_of_birth">Date Of Birth *</label>
          <input
            type="date"
            value={info.date_of_birth}
            name="date_of_birth"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <div className="input_fields">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            name="address"
            value={info.address}
            placeholder="Address"
            onChange={(e) => handleinputchange(e)}
          />
        </div>
        <button onClick={handlesubmit}>Submit</button>
        <button onClick={()=>window.location.reload()} style={{backgroundColor:"white" , color:"blacke"}}>Home</button>

      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: beige;
  display: flex;
  justify-content: center;

  .form_input {
    width: 30%;
    height: 80%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: beige;
    padding: 10px 10px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

    .input_fields {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      label {
        font-size: 18px;
      }

      input {
        padding: 5px;
        font-size: 20px;
      }
    }

    button {
      padding: 5px;
      border: none;
      cursor: pointer;
      background-color: green;
      color: white;
      height: 10%;
      font-size: 30px;
      font-weight: 500;
    }
  }
`;

export default AddNewStudent;
