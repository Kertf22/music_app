import { StringToBoolean } from "class-variance-authority/dist/types";
import api from "../config/api";
import User from "../domain/types/user";
import { LoginForm } from "../components/Login";

export type ActionStatus = "ok" | "error";

export interface ActionResponse<TData> {
    data: TData;
    status: ActionStatus;
}

interface LoginResponse {
    token: string;
    user: User;
}

export const signIn = async ({ email, password }: LoginForm): Promise<ActionResponse<LoginResponse | string>> => {

    let data: LoginResponse | string;
    let status: ActionStatus = "ok";

    try {
        const res = await api.post<LoginResponse>('/login', { email, password });
        data = res.data
    } catch (error) {
        data = "Usuário ou senha inválidos";
        status = "error";
    }

    return { data, status }
}