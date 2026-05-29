import styles from "./registro-patrimonio.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

type Patrimonio = {
    numeroPatrimonio: string,
    nome: string,
    dataTransferencia: string
}

const RegistroPatrimonio = ({numeroPatrimonio, nome, dataTransferencia}: Patrimonio) => {
    return (
        <>
            <tbody className={styles.environment_table}>
                <tr className="">
                    <td>{numeroPatrimonio}</td>
                    <td>{nome}</td>
                    <td>{dataTransferencia}</td>
                    <td>
                        <a href="#" aria-label="Ver detalhes do patrimonio">
                            <FontAwesomeIcon icon={faInfo} />
                        </a>
                    </td>
                    <td>
                        <a href="#" aria-label="Transferir patrimonio">
                            <img src="./imgs/transferencia.svg" alt="" className={styles.icone_transferencia}/> 
                        </a>
                    </td>
                </tr>
            </tbody>
        </>
    )
}
export default RegistroPatrimonio;