import Header from "@/components/header/header";
import styles from "./detalhe-patrimonio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TabelaHistorico from "@/components/tabela-historico/tabela-historico";

const DetalhePatrimonio = () => {
    return (
        <>
            <Header />
            <main className={styles.page_content}>
                <section
                    className={`${styles.page_detalhes} layout_guide`}
                    aria-labelledby="titulo-patrimonio"
                >
                    <a href="#" className={styles.back_link}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Voltar
                    </a>
                    <h1 id="titulo-patrimonio">Patrimônio: 1236808</h1>
                    <article className={styles.patrimonio_card}>
                        <div className={styles.patrimonio_content}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                            </dl>
                            <dl>
                                <dt>Tipo</dt>
                                <dd>Mesa</dd>
                            </dl>
                            <dl>
                                <dt>Data transferência</dt>
                                <dd>
                                    <time dateTime="2026-02-09">09/02/2026</time>
                                </dd>
                            </dl>
                            <dl>
                                <dt>Local Atual</dt>
                                <dd>Sala 09/10</dd>
                            </dl>
                            <dl>
                                <dt>Status Atual</dt>
                                <dd>Ativo</dd>
                            </dl>
                        </div>
                    </article>
                </section>
                <TabelaHistorico />
            </main>
        </>
    )
}
export default DetalhePatrimonio;