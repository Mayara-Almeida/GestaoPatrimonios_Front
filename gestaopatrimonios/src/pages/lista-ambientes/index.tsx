import Header from "@/components/header/header";
import styles from "./lista-ambientes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons"; 
import TabelaAmbiente from "@/components/tabela-ambiente/tabela-ambiente";
import { useState } from "react";

const ListaAmbientes = () => {

    return (
        <>
            <Header />
            <main className={styles.page_content}>
                <section
                    className={`${styles.page_header} layout_guide`}
                    aria-labelledby="titulo-ambientes"
                >
                    <h1>Ambientes</h1>
                    <form className={styles.search_area} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                        </label>
                        <input
                            type="search"
                            id="pesquisa-ambiente"
                            name="pesquisaAmbiente"
                            placeholder="Pesquise o ambiente"
                        />
                        <button
                            type="button"
                            className={styles.filter_button}
                            aria-label="Filtrar ambientes"
                        >
                            <FontAwesomeIcon icon={faSliders} />
                        </button>
                    </form>
                </section>
                <TabelaAmbiente/>
            </main>
        </>
    )
}
export default ListaAmbientes;