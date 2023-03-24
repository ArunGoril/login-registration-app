import { useForm } from "react-hook-form";
import classNames from "classnames";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Register() {
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  // console.log(errors);
  const onSubmit = (registerdata) => {
    // console.log(registerdata);
    const {password, confirmpassword} = registerdata
    if (password === confirmpassword) {
      axios.post("http://localhost:9002/register", registerdata)
      .then((res) => {
        alert(res.data.message)
        navigate("/login")
      })
    } else {
      alert("password and confirm password should match!")
    }
  };
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  return (
    <div className="container register-container py-4">
      <form className=" py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm-6 mb-sm-0 mb-4">
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.firstname,
              })}
              placeholder="First name"
              name="firstname"
              {...register("firstname", {
                required: "first name is required",
                minLength: {
                  value: 4,
                  message: "firstname should be of minimum four character",
                },
              })}
            />
            {errors.firstname && (
              <div className="alert alert-danger">
                {errors.firstname.message}
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.lastname,
              })}
              placeholder="Last name"
              name="lastname"
              {...register("lastname", {
                required: "last name is required",
                minLength: {
                  value: 3,
                  message: "last should be of minimum three character",
                },
              })}
            />
            {errors.lastname && (
              <div className="alert alert-danger">
                {errors.lastname.message}
              </div>
            )}
          </div>
        </div>

        <div className="row py-4">
          <div className="col-sm-6 mb-sm-0 mb-4">
            <input
              type="phone"
              className={classNames("form-control", {
                "is-invalid": errors.phonenumber,
              })}
              placeholder="Phone number"
              name="phonenumber"
              {...register("phonenumber", {
                required: "phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "please enter valid phone number",
                },
              })}
            />
            {errors.phonenumber && (
              <div className="alert alert-danger">
                {errors.phonenumber.message}
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <input
              type="email"
              className={classNames("form-control", {
                "is-invalid": errors.email,
              })}
              placeholder=" enter email"
              name="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "please enter valid email",
                },
              })}
            />
            {errors.email && (
              <div className="alert alert-danger">{errors.email.message}</div>
            )}
          </div>
        </div>

        <div className="row py-2">
          <div className="col-sm-6 mb-sm-0 mb-4">
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.password,
              })}
              placeholder=" enter password"
              name="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 4,
                  message: "Enter Password of atleast 4 character",
                },
              })}
            />
            {errors.password && (
              <div className=" alert alert-danger">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.confirmpassword,
              })}
              placeholder="confirm password"
              name="confirmpassword"
              {...register("confirmpassword", {
                required: "this field is required",
                minLength: {
                  value: 4,
                  message: "Enter Password of atleast 4 character",
                },
              })}
            />
            {errors.confirmpassword && (
              <div className=" alert alert-danger">
                {errors.confirmpassword.message}
              </div>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;
