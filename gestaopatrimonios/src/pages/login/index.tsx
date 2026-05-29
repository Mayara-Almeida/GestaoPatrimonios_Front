import ModalImportar from "@/components/modal/modal";
import styles from "./login.module.css"
import React, { useState } from "react";
import { useRouter } from "next/router";
import { login } from "../api/authService";
import { erro, notificacaoSucesso } from "@/utils/toast";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

const Login = () => {

    const [nif, setNif] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();

    async function autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(nif, senha);
            notificacaoSucesso("Login bem sucedido!");
            setTimeout(() => {
                router.push("/lista-ambientes")
            }, 800);
        }
        catch(error: any){
            erro(error.message);
        }
    }

    return (
        <>
        <ToastContainer />
                <main className={styles.login_page}>
                <section className={styles.login_banner} aria-label="Apresentação do sistema">
                    <img
                        src="./imgs/imagem_login.png"
                        alt="Imagem de fundo relacionada à tecnologia"
                        className={styles.banner_image}
                    />
                    <div className={styles.banner_overlay} />
                    <div className={styles.banner_content}>
                        <img
                            src="./imgs/logo_senai.png"
                            alt="Logo do SENAI"
                            className={styles.senai_logo}
                        />
                        <h2>Gestão de patrimônios</h2>
                        <p className={styles.banner_content_text}>
                            Controle, organização e transparência do patrimônio com eficiência.
                        </p>
                        <p />
                    </div>
                </section>
                <section className={styles.login_area} aria-label="Formulário de login">
                    <form className={styles.login_form} onSubmit={autenticar}>
                        <h1>Login</h1>
                        <div className={styles.form_group}>
                            <label htmlFor="nif">NIF:</label>
                            <input
                                type="text"
                                id="nif"
                                name="nif"
                                placeholder="Insira o seu NIF"
                                required
                                value={nif}
                                onChange={(e) => setNif(e.target.value)}
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="senha">Senha:</label>
                            <div className={styles.password_field}>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Insira a sua senha"
                                    required
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                {/* Arrumar funcionalidade desse botão */}
                                <button
                                    type="button"
                                    className={styles.show_password}
                                    aria-label="Mostrar senha"
                                >
                                    👁
                                </button>
                            </div>
                        </div>
                        <button type="submit" className={styles.login_button}>
                            Entrar
                        </button>
                    </form>
                </section>
            </main>

        </>
    )
}
export default Login;