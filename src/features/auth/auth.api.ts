import {instance} from "../../common/api/common.api";


export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('/auth/register', arg)
    },
    login: (arg: any) => {
        //TODO
        return instance.post<LoginResponseType>('/auth/login', arg)
    }
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
export type RegisterResponseType = {
    addedUser: Omit<LoginResponseType, 'token'|'tokenDeathTime'> ;
}

export type LoginResponseType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;

    token: string;
    tokenDeathTime: number;
}