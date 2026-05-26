import RegistroAmbiente from "../registro-ambiente/registro-ambiente";
import styles from "./tabela-ambiente.module.css"

const TabelaAmbiente = () => {
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
                            <th>Responsável</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <RegistroAmbiente />
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