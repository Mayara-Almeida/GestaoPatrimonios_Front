import { useEffect, useState } from "react";
import RegistroAmbiente from "../registro-ambiente/registro-ambiente";
import styles from "./tabela-ambiente.module.css"
import { listarLocalizacao } from "@/pages/api/localizacaoService";

interface Localizacao {
    localizacaoID: string,
    nomeLocal: string,
    localSAP: number,
    descricaoSAP: string,
    areaID: string,
    nomeArea: string,
    responsavel: string
}

const TabelaAmbiente = () => {

    const[localizacoes, setLocalizacoes] = useState<Localizacao[]>([]);

    async function listagem(){
        try{
            const lista = await listarLocalizacao();
            setLocalizacoes(lista);
        }
        catch(error: any){
            console.log(error.message);
        }
    }

    useEffect(() => {
        listagem();
    }, [])

    return (
        <>
            <section
                className={`${styles.table_section} layout_guide`}
                aria-label="Lista de ambientes"
            >
                <table className={styles.environment_table}>
                    <thead>
                        <tr>
                            <th>Local</th>
                            <th>Área</th>
                            <th>Responsável</th>
                        </tr>
                    </thead>
                    {localizacoes.map((item) => (
                        <RegistroAmbiente 
                        key={item.localizacaoID}
                        nomeLocalizacao={item.nomeLocal}
                        nomeArea={item.nomeArea}
                        responsavel={item.responsavel}
                        />
                    ))}
                </table>
            </section>

            <nav className={styles.pagination} aria-label="Paginação">
                <button
                    type="button"
                    className={styles.pagination_button}
                    aria-label="Página anterior"
                >
                    ‹
                </button>
                <a href="#" className={`${styles.pagination_link} ${styles.current}`} aria-current="page">
                    1
                </a>
                <a href="#" className={styles.pagination_link}>
                    2
                </a>
                <a href="#" className={styles.pagination_link}>
                    3
                </a>
                <button
                    type="button"
                    className={styles.pagination_button}
                    aria-label="Próxima página"
                >
                    ›
                </button>
            </nav>
        </>
    )
}

export default TabelaAmbiente;