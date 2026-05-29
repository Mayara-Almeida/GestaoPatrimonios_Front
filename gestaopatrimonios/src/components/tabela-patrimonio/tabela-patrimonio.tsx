import { useEffect, useState } from "react";
import RegistroPatrimonio from "../registro-patrimonio/registro-patrimonio";
import styles from "./tabela-patrimonio.module.css"
import { listarPatrimonio } from "@/pages/api/patrimonioService";

interface Patrimonio {
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    imagem: string,
    localizacaoID: string,
    statusPatrimonioID: string,
    dataTransferencia: string
}

const TabelaPatrimonio = () => {

const[patrimonios, setPatrimonios] = useState<Patrimonio[]>([]); 

async function listagem(){
    try{
        const lista = await listarPatrimonio();
        setPatrimonios(lista);
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
                aria-label="Lista de patrimonios"
            >
                <table className={styles.environment_table}>
                    <thead>
                        <tr>
                            <th>Patrimônio</th>
                            <th>Denominação</th>
                            <th>Data transfêrencia</th>
                            <th>Detalhes</th>
                            <th>Transferir</th>
                        </tr>
                    </thead>
                    {patrimonios.map((item) => (
                        <RegistroPatrimonio 
                        key={item.patrimonioID}
                        numeroPatrimonio={item.numeroPatrimonio}
                        nome={item.denominacao}
                        dataTransferencia={item.dataTransferencia}
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
export default TabelaPatrimonio;