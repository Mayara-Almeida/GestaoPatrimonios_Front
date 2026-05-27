import styles from "./registro-patrimonio.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

const RegistroPatrimonio = () => {
    return (
        <>
                    <tbody className={styles.environment_table}>
                        <tr className="">
                            <td>1236808</td>
                            <td>MESA TRAPEZOIDAL DC-1987a</td>
                            <td>Mesa</td>
                            <td>11/02/26</td>
                            <td>
                                <a href="#" aria-label="Ver detalhes do patrimonio">
                                    <FontAwesomeIcon icon={faInfo} />
                                </a>
                            </td>
                            <td>
                                <a href="#" aria-label="Transferir patrimonio">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </a>
                            </td>
                        </tr>
                    </tbody>
        </>
    )
}
export default RegistroPatrimonio;