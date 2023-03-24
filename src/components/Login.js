import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import axios from "axios";

function Login({ setLoginUser }) {
  // ....................................................................
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  // console.log(errors);
  const onSubmit = (logindata) => {
    // console.log(logindata);
    axios.post("http://localhost:9002/login", logindata)
    .then((res) => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    })
  };
  //.....................................................................

  return (
    <div className="container login-container py-4">
      <div className="card text-center">
        <div className="card-header">Login Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group py-4">
              <input
                type="email"
                className={classNames("form-control", {
                  "is-invalid": errors.loginemail,
                })}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="loginemail"
                {...register("loginemail", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "please enter valid email",
                  }
                })}
              />

              {errors.loginemail && (
                <div className=" alert alert-danger">
                  {errors.loginemail.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={classNames("form-control", {
                  "is-invalid": errors.loginpassword,
                })}
                id="exampleInputPassword1"
                placeholder="Password"
                name="loginpassword"
                {...register("loginpassword", {
                  required: "password is required",
                  minLength: {
                    value: 4,
                    message: "Enter Password of atleast 4 character",
                  },
                })}
              />
              {errors.loginpassword && (
                <div className=" alert alert-danger">
                  {errors.loginpassword.message}
                </div>
              )}
            </div>

            <Link className="btn btn-secondary mx-4 my-4" to="/register">
              SignUp
            </Link>

            <button type="submit" className="btn btn-primary my-4">
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer text-muted">......</div>
      </div>
    </div>
  );
}

export default Login;
