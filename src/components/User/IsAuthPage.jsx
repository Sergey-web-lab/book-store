import { useDispatch } from "react-redux";
import { removeUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const IsAuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ChangeAccount = () => {
    dispatch(removeUser());
    navigate('/');
  }

  return (
    <div className="isAuthPage">
      <h1>Welcome to user page. If you want change account, click below</h1>
      <button onClick={ChangeAccount}>Change account</button>
    </div>
  );
}

export default IsAuthPage;