import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import s from './styles.module.css'
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {Button, Checkbox, FormControlLabel, Paper, Typography} from "@mui/material";
import {ArgLoginType} from "../auth.api";
import {EmailInput} from "../../../common/components/LoginInput/EmailInput";
import {PasswordInput} from "../../../common/components/PasswordInput/PasswordInput";
import {Link, Navigate} from "react-router-dom";

export const Login = () => {
    const dispatch = useAppDispatch();
    const loginHandler = (data: ArgLoginType) => {
        dispatch(authThunks.login(data));
    };
    const methods = useForm<ArgLoginType>();
    const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
        loginHandler(data);
    };
    return (
        <div>
            <Paper elevation={3} sx={{p: 3, mt: 12, width: ' 500px', borderRadius: '5px', mx: 'auto'}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign in
                </Typography>
                <FormProvider {...methods}>
                    <form className={s.container} onSubmit={methods.handleSubmit(onSubmit)}>
                        <EmailInput label={'Email'}/>
                        <PasswordInput label={'Password'}/>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <FormControlLabel control={
                                <Checkbox
                                    {...methods.register('rememberMe')}
                                    name="rememberMe"/>}
                                              label="Remember me?"/>

                            <Link to={"/forgot-password"}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Forgot your password?
                                </Typography>
                            </Link>
                        </div>

                        <Button type="submit" variant="contained" color="primary">
                            Sign In
                        </Button>
                    </form>
                </FormProvider>
                <div className={s.signUp}>
                    <Typography variant="subtitle1" gutterBottom>
                        Don't have an account?
                    </Typography>
                    <Link to={"/register"}>
                        <Typography variant="subtitle1" gutterBottom>
                            Sign Up
                        </Typography>
                    </Link>
                </div>
            </Paper>

        </div>
    );
};