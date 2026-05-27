import RegistroHistorico from "../registro-historico/registro-historico";
import styles from "./tabela-historico.module.css"

const TabelaHistorico = () => {
    return (
        <>
            <section
                className={`${styles.table_section} layout_guide`}
                aria-label="Lista de histórico do patrimônio"
            >
                <h2>Histórico</h2>
                <table className={styles.history_table}>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Tipo de movimentação</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Responsável</th>
                            <th>Justificativa</th>
                        </tr>
                    </thead>
                    <RegistroHistorico />
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
export default TabelaHistorico;