export default function MultijogadorSection() {
  return (
    <section id="Multijogador">
      <h2>Modo Multijogador</h2>
      <p>
        O Bakugan TCG também pode ser jogado de forma não oficial com mais de dois jogadores, com suporte para até 4
        participantes. Existem duas principais variações:
      </p>
      <ul>
        <li>
          <strong>Duplas (2x2):</strong> Uma versão cooperativa do modo padrão. Os jogadores se dividem em duas duplas
          e enfrentam a equipe adversária. Estratégia e sincronia com seu parceiro são fundamentais para vencer.
        </li>
        <li>
          <strong>Todos contra todos (1x1x1x1):</strong> Um modo livre em que cada jogador luta por si. O objetivo é
          ser o último com cartas restantes no deck — apenas um sairá vitorioso.
        </li>
      </ul>

      <h3>Regras – Todos Contra Todos</h3>
      <p>Esse modo requer algumas modificações nas regras:</p>
      <ul>
        <li>
          As lutas funcionam como uma batalha geral: todos os jogadores que abrirem seus Bakugans entram na disputa, e
          o jogador com maior poder de Batalha (BP) vence.
        </li>
        <li>
          Em caso de empate, siga os dois passos abaixo:
          <ol>
            <li>Os jogadores empatados não causam nem recebem dano nessa rodada.</li>
            <li>
              Esses jogadores devem refazer a batalha entre si, mas sem utilizar cartas de habilidade — apenas os
              valores base do Bakugan e o bônus do BakuCore serão considerados. O vencedor dessa disputa secundária
              causará dano normalmente aos demais jogadores que perderam a batalha inicial.
            </li>
          </ol>
        </li>
      </ul>
      <ul>
        <li>A prioridade segue no sentido horário entre os jogadores.</li>
        <li>
          Cartas de habilidade e Flip funcionam normalmente. Se uma carta afetar "o oponente", o jogador escolhe qual
          será afetado. Efeitos que dizem "todos os jogadores" se aplicam a todos.
        </li>
        <li>
          O jogador vencedor da rodada escolhe qual oponente receberá o dano, salvo indicação diferente em cartas ou
          habilidades.
        </li>
        <li>O jogo termina quando restar apenas um jogador com cartas no deck.</li>
      </ul>

      <h3>Regras – Modo Duplas</h3>
      <p>Esse modo também exige ajustes específicos:</p>
      <ul>
        <li>
          Os jogadores devem se sentar de frente para seu aliado, facilitando a comunicação e a estratégia da dupla.
        </li>
        <li>
          As duplas decidem quem inicia jogando uma moeda (cara ou coroa). A dupla vencedora, então, escolhe qual dos
          dois jogadores começará.
        </li>
        <li>A prioridade segue no sentido horário entre os jogadores.</li>
        <li>Na hora da briga, as duplas somam o poder de seus Bakugans para determinar o vencedor da rodada.</li>
        <li>
          A dupla vencedora da briga deve escolher qual jogador da dupla adversária receberá o ataque, sendo permitido
          que apenas um jogador seja atacado por vez.
        </li>
        <li>
          Se apenas um Bakugan da dupla for aberto, ele deverá enfrentar os dois Bakugans da dupla adversária sozinho.
          As regras nesse caso são:
          <ol>
            <li>
              Ele lutará separadamente contra cada adversário. Se vencer apenas uma das lutas, apenas um jogador da
              dupla perdedora sofrerá dano.
            </li>
            <li>Enquanto isso, o parceiro que não entrou em combate pode usar cartas de habilidade para oferecer suporte.</li>
          </ol>
        </li>
        <li>Cartas Flip afetam apenas o jogador que as ativou.</li>
        <li>O ganhador da briga deve anunciar claramente qual jogador adversário está sendo atacado.</li>
        <li>O jogo termina quando os dois jogadores de uma mesma dupla forem eliminados.</li>
      </ul>
    </section>
  )
}
