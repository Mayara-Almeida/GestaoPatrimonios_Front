import RegistroPatrimonio from "../registro-patrimonio/registro-patrimonio";
import styles from "./tabela-patrimonio.module.css"

const TabelaPatrimonio = () => {
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
                            <th>Tipo</th>
                            <th>Data transfêrencia</th>
                            <th>Detalhes</th>
                            <th>Transferir</th>
                        </tr>
                    </thead>
                    <RegistroPatrimonio />
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