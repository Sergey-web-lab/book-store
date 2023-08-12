import styles from "./LoginPage.module.css";
import loginImg from "../../imgs/login.png";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
        alert('Invalid user');
      });
  }

  return (
    <div className="loginPage">
      <div className={styles.titleWrapper}>
        <h1>Login</h1>
        <img className={styles.img} src={loginImg} alt="login" />
      </div>
      <UserForm
        btnText="Sign in"
        handleClick={handleLogin}
      />
      <p>
        Or <Link to="/register">register</Link>
      </p>
    </div>
  );
}

export default LoginPage;