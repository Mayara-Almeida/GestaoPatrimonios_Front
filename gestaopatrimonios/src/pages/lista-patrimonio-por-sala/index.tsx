import Header from "@/components/header/header";
import styles from "./lista-patrimonio-por-sala.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faPlus } from "@fortawesome/free-solid-svg-icons";
import TabelaPatrimonio from "@/components/tabela-patrimonio/tabela-patrimonio";

const ListaPatrimonioPorSala = () => {
    return (
        <>
            <Header />
                <main className={styles.page_content}>
                    <section
                        className={`${styles.page_header} layout_guide`}
                        aria-labelledby={styles.titulo_patrimonios}
                    >
                        <h1 id="titulo-patrimonios">Patrimônios: Sala 09/10</h1>
                        <form className={styles.search_area} role="search">
                            <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                            </label>
                            <input
                                type="search"
                                id="pesquisa-ambiente"
                                name="pesquisaAmbiente"
                                placeholder="Pesquise o ambiente"
                            />
                            <button type="button" className={styles.add_button} aria-label="Adicionar patrimônios">
                                <FontAwesomeIcon icon={faPlus} /> Patrimônio
                            </button>
                            <button
                                type="button"
                                className={styles.filter_button}
                                aria-label="Filtrar patrimonios"
                            >
                                <FontAwesomeIcon icon={faSliders} />
                            </button>
                        </form>
                    </section>
                    <TabelaPatrimonio />
                </main>
        </>
    )
}
export default ListaPatrimonioPorSala;