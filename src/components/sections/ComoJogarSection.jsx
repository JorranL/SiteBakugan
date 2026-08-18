export default function ComoJogarSection() {
  return (
    <section id="ComoJogar">
      <h1>Como Jogar</h1>
      <p>Primeiro é necessário montar o campo de Bakucores.</p>
      <ul>
        <li>Os jogadores decidem quem irá começar.</li>
        <li>
          O primeiro jogador coloca seu bakucore no centro, e depois vai alternando com o adversário até todos os
          Bakucores terem sido colocados.
        </li>
      </ul>

      <p>O jogo é feito em turnos divididos em 4 fases:</p>
      <ol>
        <li>
          <strong>Fase Inicial:</strong>
          <ul>
            <li>Compre uma carta.</li>
            <li>Você pode energizar uma carta da mão.</li>
            <li>Decida quem será o jogador inicial da rodada.</li>
          </ul>
        </li>

        <li>
          <strong>Fase de Rolagem:</strong>
          <ul>
            <li>
              <strong>Etapa de Seleção:</strong>
              <ul>
                <li>Escolha seu Bakugan e posicione-o à frente.</li>
                <li>Jogue cartas, se desejar, antes da rolagem.</li>
                <li>Ambos os jogadores contam até 3 e lançam seus Bakugans.</li>
              </ul>
            </li>
            <li>
              <strong>Etapa de Rolagem:</strong>
              <ul>
                <li>Lance o Bakugan a pelo menos duas cartas de distância do campo.</li>
                <li>O lançamento pode ser rolado, deslizado ou girado (sem quicar ou jogar com força).</li>
                <li>
                  Se parar em cima de um BakuCore e abrir corretamente, o jogador revela sua carta de personagem.
                </li>
                <li>Se nenhum abrir, os jogadores tentam novamente.</li>
                <li>Se apenas um Bakugan abrir, ele vence a briga automaticamente.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Fase de Briga:</strong>
          <ul>
            <li>
              <strong>Etapa de Poder:</strong>
              <ul>
                <li>Jogadores usam cartas em ordem de prioridade, formando o lote.</li>
                <li>As cartas são resolvidas na ordem inversa à qual foram jogadas.</li>
              </ul>
            </li>
            <li>
              <strong>Etapa do Vencedor:</strong>
              <ul>
                <li>O Bakugan com maior B-Power vence.</li>
                <li>Cartas ainda podem ser jogadas antes do cálculo final.</li>
              </ul>
            </li>
            <li>
              <strong>Etapa de Dano:</strong>
              <ul>
                <li>O jogador derrotado vira para o descarte o número de cartas igual ao dano.</li>
                <li>Se virar cartas do tipo Flip, pode ativá-las se os requisitos forem atendidos.</li>
              </ul>
            </li>
            <li>
              <strong>Ataque em Equipe:</strong>
              <ul>
                <li>Se os 3 Bakugans de um jogador estiverem abertos, ele pode realizar um ataque em equipe.</li>
                <li>Some os danos dos três Bakugans.</li>
                <li>Bônus dos BakuCores são aplicados normalmente.</li>
                <li>Reduções de dano não se aplicam.</li>
                <li>Após o ataque, todos os Bakugans são retraídos e os BakuCores são devolvidos ao campo.</li>
              </ul>
            </li>
            <li>
              <strong>Etapa de Retração:</strong>
              <ul>
                <li>O jogador que perdeu a briga deve retrair seu Bakugan.</li>
                <li>Os BakuCores usados devem ser devolvidos ao campo.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Fase Final:</strong>
          <p>Qualquer efeito "até o fim do turno" termina. O controle passa ao próximo jogador.</p>
        </li>
      </ol>
    </section>
  )
}
