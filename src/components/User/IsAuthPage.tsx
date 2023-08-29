import styles from "./IsAuthPage.module.css";
import { removeUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reactReduxHooks";
import Button from 'react-bootstrap/Button';

const IsAuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const ChangeAccount = () => {
    dispatch(removeUser());
    navigate('/');
  }

  return (
    <div className={styles.isAuthPage}>
      <h1>Welcome to user page. If you want change account, click below</h1>
      <Button variant="primary" onClick={ChangeAccount}>Change account</Button>
    </div>
  );
}

export default IsAuthPage;