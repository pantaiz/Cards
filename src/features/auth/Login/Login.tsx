import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'
import {useForm} from "react-hook-form";
//useref
//gпрнимание общего работы браузера
//сборка приложения , конфиги
//js оптимизация
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
const {register,handleSubmit}=useForm()
    return (
        <div className={s.container}>
            <h1>Login</h1>
            <form  onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
                <input {...register(("login"),{ required:true,minLength:4}) } placeholder={'login'}/>
                <input {...register(("password"))} placeholder={'password'}/>
                <button type={"submit"}> Submit </button>
            </form>
        </div>
    );
};