import { useState } from "react";

function Form() {
  // state to check if the form is submitted
  const [formSubmit, setFormSubmit] = useState(false);

  // state to keep track of all users
  const [formErr, setFormErr] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handling form submission logic here
    console.log(formData);

    let errors = validate(formData);

    setFormErr(errors);

    let errKeyArray = Object.keys(errors);

    if (errKeyArray.length == 0) {
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};

    if (data.firstName.trim() == "") {
      error.firstName = "Please enter your First Name";
    }

    if (data.lastName.trim() == "") {
      error.lastName = "Please enter your Last Name";
    }

    if (data.email.trim() == "") {
      error.email = "Please enter your Email";
    }

    if (data.phone.trim() == "") {
      error.phone = "Please enter your Phone Number";
    }

    if (data.phone.trim().length != 10) {
      error.phone = "Please enter 10-digit Phone Number";
    }

    return error;
  };
  return (
    <div>
      <fieldset className="border border-solid border-gray-300 p-3">
        <legend className="text-md bg-black text-white">Fill This Form</legend>

        <form
          onSubmit={handleSubmit}
          className="flex bg-slate-300 p-4 flex-col justify-center space-y-5 px-20 font-bold text-1xl"
        >
          {formSubmit && (
            <div className="text-white px-3 py-2 bg-blue-700">
              <p className="text-2xl font-bold">Registration Successful</p>
            </div>
          )}
          <label>First Name: </label>
          <input
            onChange={handInputChange}
            type="text"
            name="firstName"
            className="bg-slate-100"
          />
          {formErr.firstName && (
            <p className="text-2xl font-bold">{formErr.firstName}</p>
          )}
          <label>Last Name: </label>
          <input
            onChange={handInputChange}
            type="text"
            name="lastName"
            className="bg-slate-100"
          />
          {formErr.lastName && (
            <p className="text-2xl font-bold">{formErr.lastName}</p>
          )}

          <label>Email: </label>
          <input
            onChange={handInputChange}
            type="email"
            name="email"
            className="bg-slate-100"
          />
          {formErr.email && (
            <p className="text-2xl font-bold">{formErr.email}</p>
          )}

          <label>Phone: </label>
          <input
            onChange={handInputChange}
            type="number"
            name="phone"
            className="bg-slate-100"
          />
          {formErr.phone && (
            <p className="text-2xl font-bold">{formErr.phone}</p>
          )}

          <input
            type="submit"
            className="cursor-pointer text-2xl m-2 bg-green-400 p-3 rounded-md hover:bg-green-500 hover:text-white"
            value={"Register"}
          />
        </form>
      </fieldset>
    </div>
  );
}

export default Form;
