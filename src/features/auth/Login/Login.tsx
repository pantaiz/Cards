import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'

export const Login = () => {
    const dispatch = useAppDispatch();
    const loginHandler = () => {
        const payload = {
            email: "nya-admasdasdasdsdain@nya.nya",
            password: "1qazxcvBG",
            rememberMe: false
        }
        dispatch(authThunks.login(payload));
    };

    return (
        <div className={s.container}>
            <h1>Login</h1>
            <button onClick={loginHandler}>login</button>
        </div>
    );
};