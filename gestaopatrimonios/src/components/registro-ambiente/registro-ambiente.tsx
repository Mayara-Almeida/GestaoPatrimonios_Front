import styles from "./registro-ambiente.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"

const RegistroAmbiente = () => {
    return (
        <>
            <tbody className={styles.environment_table}>
                <tr className="">
                    <td>Sala 30/31 (anfiteatro)</td>
                    <td>Samanta Melissa</td>
                    <td>
                        <a href="#" aria-label="Ver detalhes da Sala 30/31">
                           <FontAwesomeIcon icon={faCircleInfo} />
                        </a>
                    </td>
                </tr>
            </tbody>
        </>
    )
}
export default RegistroAmbiente;