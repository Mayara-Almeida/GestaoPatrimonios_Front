import styles from "./registro-ambiente.module.css"

type Localizacao = {
    nomeLocalizacao: string,
    nomeArea: string,
    responsavel: string
}

const RegistroAmbiente = ({nomeLocalizacao, nomeArea, responsavel}: Localizacao) => {
    return (
        <>
            <tbody className={styles.environment_table}>
                <tr className="">
                    <td>{nomeLocalizacao}</td>
                    <td>{nomeArea}</td>
                    <td>{responsavel}</td>
                </tr>
            </tbody>
        </>
    )
}
export default RegistroAmbiente;