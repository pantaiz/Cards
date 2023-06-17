import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'
import {Button, Paper, Typography} from "@mui/material";
import {ArgRegisterType} from "../auth.api";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {EmailInput} from "../../../common/components/LoginInput/EmailInput";
import {PasswordInput} from "../../../common/components/PasswordInput/PasswordInput";
import {Link} from "react-router-dom";

export const Register = () => {
    const dispatch = useAppDispatch();
    const methods = useForm<ArgRegisterType>();

    const onSubmit: SubmitHandler<ArgRegisterType> = (data) => {
        dispatch(authThunks.register(data));
    };

        //TODO проверку пароля со вторым инпутом

    return (
        <div className={s.container}>
            <Paper elevation={3} sx={{p: 3, mt: 12, width: ' 500px', borderRadius: '5px', mx: 'auto'}}>
                <Typography variant="h5" align="center" gutterBottom>
                    Sign Up
                </Typography>
                <FormProvider {...methods}>
                    <form className={s.container} onSubmit={methods.handleSubmit(onSubmit)}>
                        <EmailInput label={'Email'}/>
                        <PasswordInput label={'Password'}/>
                        <PasswordInput label={'Confirm Password'}/>
                        <Button type="submit" variant="contained" color="primary">
                            Sign Up
                        </Button>
                    </form>
                </FormProvider>
                <div className={s.signIn}>
                    <Typography variant="subtitle1" gutterBottom>
                        Don't have an account?
                    </Typography>
                    <Link to={"/login"}>
                        <Typography variant="subtitle1" gutterBottom>
                            Sign In
                        </Typography>
                    </Link>
                </div>
            </Paper>
        </div>
    );
};