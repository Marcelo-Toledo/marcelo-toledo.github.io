export const descriptionView = document.createElement("div");
descriptionView.classList.add("descriptionContainer");
descriptionView.innerHTML = `
<div class="descriptionContainerImg">
        <img src="../../images/content/product/coffee2.jpg" alt="coffee2" width="100%" height="100%">
    </div>

    <div class="descriptionContainerInfo">

        <div class="descriptionContainerInfoTitle">
        <span>Café especial 500g</span>
        </div>
        
        <div class="descriptionContainerInfoRating">
        <span>Avaliação: </span><span>4.5/5</span>
        </div>

        <div class="descriptionContainerInfoPrice">
        <span>R$ 15,00</span>
        </div>

        <div class="descriptionContainerInfoButton">
        <button>Comprar</button>
        <button>Adicionar ao carrinho</button>
        </div>


        <div class="descriptionContainerInfoShipping">
        <span class="descriptionContainerInfoShippingTitle">Frete</span>
        <div class="descriptionContainerInfoShippingCalCEP">
            <input type="text" placeholder="Digite o CEP">
            <Button>Calcular</Button>
        </div>
        </div>

    </div>

    <div class="descriptionContainerDetails">
        <article>
        <h1>Detalhes do produto</h1>
        <p>Nossos grãos são provenientes de fazendas familiares, 
            onde a sustentabilidade e o comércio justo são prioridades. 
            Trabalhamos diretamente com os produtores, garantindo que cada 
            xícara de café que você saboreia tenha um impacto positivo 
            tanto no seu paladar quanto na vida das comunidades envolvidas.
        </p>

        <p>
            Nosso café especial é cuidadosamente torrado para realçar suas 
            notas distintas e complexas. Desfrute de uma mistura única de 
            sabores, que variam desde notas frutadas e cítricas até nuances
            de chocolate e caramelo, tudo em uma única xícara.
        </p>
        </article>

        <article>
        <h2>Caracteristicas</h2>
        <table>
            <tbody>
            <tr class="firstTr">
                <th>Tipo</th>
                <td>100% arábica</td>
            </tr>
            <tr class="secondTr">
                <th>Intensidade</th>
                <td>média</td>
            </tr>
            <tr class="firstTr">
                <th>Sabor</th>
                <td>mel e banana passa</td>
            </tr>
            <tr class="secondTr">
                <th>Aroma</th>
                <td>agradável e adocicado</td>
            </tr>
            <tr class="firstTr">
                <th>Torra</th>
                <td>média</td>
            </tr>
            <tr class="secondTr">
                <th>Acidez</th>
                <td>citrica adocicada</td>
            </tr>
            <tr class="firstTr">
                <th>Corpo</th>
                <td>médio</td>
            </tr>
            <tr class="secondTr">
                <th>Variedade</th>
                <td>arara</td>
            </tr>
            </tbody>
        </table>
        </article>
        <div>

        </div>
    </div>

    <div class="descriptionContainerRating">
        <h2>Avaliações</h2>
        <div class="itemRating">
        <div class="itemRatingContainer">
            <span class="titleItemRating">Ótimo produto</span>
        </div>
        <div class="itemRatingContainer">
            <div class="scoreItemRating">
            <p>Avaliação: 5/5</p>
            </div>
        </div>
        <div class="itemRatingContainer">
            <div class="commentItemRating">
            <p>Estou muito satisfeito com a qualidade e desempenho deste produto. Recomendo fortemente!</p>
            </div>
        </div>
        <div class="itemRatingContainer">
            <span>- João Silva</span>
        </div>
        </div>

        <div class="itemRating">
        <div class="itemRatingContainer">
            <span class="titleItemRating">Ótimo produto</span>
        </div>
        <div class="itemRatingContainer">
            <div class="scoreItemRating">
            <p>Avaliação: 5/5</p>
            </div>
        </div>
        <div class="itemRatingContainer">
            <div class="commentItemRating">
            <p>Estou muito satisfeito com a qualidade e desempenho deste produto. Recomendo fortemente!</p>
            </div>
        </div>
        <div class="itemRatingContainer">
            <span>- João Silva</span>
        </div>
    </div>

</div>    
`;