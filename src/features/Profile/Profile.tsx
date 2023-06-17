import {AppBar, Button, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import s from "./styles.module.css"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export const Profile = () => {
    const profile = useAppSelector(state => state.auth.profile)
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <div style={{flexGrow: 1}}>
                        {/* здесь может быть логотип или другие элементы */}
                    </div>

                    <Button color="inherit">
                        <Link to={'/login'}>
                            Войти
                        </Link>
                    </Button>

                </Toolbar>
            </AppBar>
            <Paper className={s.container} elevation={3}
                   sx={{p: 3, mt: 12, width: ' 500px', borderRadius: '5px', mx: 'auto'}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Personal Information
                </Typography>
                <img className={s.avatar} alt={'avatar'}
                     src={'https://i1.sndcdn.com/avatars-000476129043-244ezm-t500x500.jpg'}/>
                <div>
                    <Typography variant="h6" align="center" gutterBottom>
                        {profile?.name}
                    </Typography>
                    <Typography variant="inherit" align="center" gutterBottom>
                        {profile?.email}
                    </Typography>
                    <Button variant={"contained"}>
                        <ExitToAppIcon/> Log out
                    </Button>
                </div>


            </Paper>
        </>
    )
}