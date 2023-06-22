import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci"
const Home = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };


  const clearall = (e) => {
    e.preventDefault();
    setInputs({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    });
  }
  //submit data funcation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
      });
    }
  };

  // delete funcation
  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };

  return (
    <>
      {/* navabar section */}
      <div className="header bg-[#1ba1f4] pt-3 pb-3">
        <h1 className="header-h1">Sparkleo 
        <small className="header-small">Employee Management</small></h1>
      </div>

      {/* form section */}
      <div className="form-container">
        <div className="container form-div bg-[#fbf8f8]  m-auto ">
          <h3 className="pt-3 pb-3 bg-[#1ba1f4]">New Employee</h3>
          <form onSubmit={handleSubmit} className="p-3 max-w-fit">
            <div className="gird">
              <label className="pr-10">First name <small>*</small></label>
              <input name="firstname" value={inputs.firstname} onChange={handleChange} />
            </div>
            <div className="gird ">
              <label className="pr-10">Last name <small>*</small></label>
              <input name="lastname" value={inputs.lastname} onChange={handleChange} />
            </div>
            <div className="gird ">
              <label className="pr-20">Email <small>*</small></label>
              <input name="email" value={inputs.email} onChange={handleChange} />
            </div>
            <div className="gird">
              <label className="pr-1">Phone number <small>*</small></label>
              <input name="phone" value={inputs.phone} onChange={handleChange} />
            </div><p className="m-auto">
            <button type="clear" className="clear-button mt-3" onClick={clearall}>
              Clear all
            </button>
            <button type="submit" className="add-button pl-5 pr-5 align-center bg-[#014d64] text-white m-3">
              {editClick ? "update" : "Add"}
            </button>
            </p>
          </form>
        </div>
      </div>
      {/* show data section */}

      <div className="output-contanier pt-4 pb-4">
        
          {tableData.map((item, i) => (
            <>
            <div className="container data-show m-auto ">
            <button
                onClick={() => handleDelete(i)}
                className="data-button"
              >
                <CiCircleRemove />
              </button>
            <h1 className="data-h1" >{item.firstname} {item.lastname}</h1>
            
              <p className="data-p">{item.email}</p>
              <p className="data-p">{item.phone}</p>
             
              </div>
              </>


          ))}
      </div>
    </>
  );
};

export default Home;
