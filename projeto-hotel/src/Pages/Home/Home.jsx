import Rodapeapp from "../../Componentes/Footer/Rod";
import Rodape from "../../Componentes/Footer/Rodape";
import HeaderMenu from "../../Componentes/Header/Menu";
import "./home.css"
function Home () {
    return (
        <>
        <HeaderMenu />
        <br />
        <br />
        <br />
        
        <section className="sobre">
        <div className="center">
            <div className="texto">
                <h3> Os melhores hoteis do<br/>Rio de Janeiro!</h3>
                <br />
                <br />
                <br />
                <p> A Tourist Hotel é a melhor rede de hoteis do Rio de janeiro, contando
                    com mais de 9 hoteis espalhados por todo o estado, possuindo as melhores
                    classificações e notas do mercado, além de ser a opção que mais cabe no 
                    seu bolso para o planejamento das férias. Venha ter o seu conforto com a gente!
                </p>
            </div>
        </div>

        <div className="extra">
            <img src="../../../public/hotelcircle.png" width="500" />
            <br />
            <br />
            <br />
            <br />
        </div>
    </section>
       <Rodape />
        </>
    )
}

export default Home;