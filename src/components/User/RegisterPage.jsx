import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/');
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      })
  }

  return (
    <div className="registerPage">
      <h1>Register</h1>
      <UserForm
        btnText="Register"
        handleClick={handleRegister}
      />
      <p>Already have an account? <Link to="/login">Sign up</Link></p>
    </div>
  );
}

export default RegisterPage;