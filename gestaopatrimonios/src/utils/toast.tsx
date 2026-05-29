import { toast } from "react-toastify";

export const notificacaoSucesso = (msg: string) => toast.success(msg);
export const erro = (msg: string) => toast.error(msg);