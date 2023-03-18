import Registration from 'components/modules/RegisterForm/Registration';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { signup } from 'redux/auth/auth-operations';

import styles from '../RegisterPage/register-page.module.scss';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1 className={styles.regist}>Registration</h1>
      <Registration onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;
