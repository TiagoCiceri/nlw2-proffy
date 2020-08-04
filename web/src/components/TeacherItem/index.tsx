import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/7707439?s=460&u=1d491cc1c8c343dba61c6be065222e12ed1ffe38&v=4" alt="Tiago Ciceri" />
                <div>
                    <strong>Tiago Ciceri</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Texto fake para demonstração de lay-out.
                <br /> <br />
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
            </p>

            <footer>
                <p>
                    Preço/hora <strong>R$ 80,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;