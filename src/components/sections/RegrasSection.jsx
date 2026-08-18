export default function RegrasSection() {
  return (
    <section id="Regras">
      <h2>Regras</h2>

      <h3>Itens Necessários</h3>
      <p>
        Você vai precisar de 3 Bakugans, 6 BakuCores e um deck com 40 cartas. Os BakuCores devem corresponder aos
        símbolos dos seus Bakugans.
      </p>
      <ul>
        <li>Você pode ter até 3 cópias da mesma carta no deck.</li>
        <li>As cartas devem ter ao menos uma facção em comum com um Bakugan do time.</li>
        <li>O jogador escolhe a ordem dos efeitos simultâneos.</li>
      </ul>

      <h3>Dano / Vida</h3>
      <p>
        Ao vencer uma rodada, o Bakugan ataca diretamente os pontos de vida do oponente. A quantidade de dano pode
        variar com os efeitos em jogo.
      </p>
      <ul>
        <li>A vida de cada jogador é representada por seu deck. Ou seja, 40 cartas = 40 de vida.</li>
        <li>Se sua vida chegar a 0, ainda é necessário sofrer mais 1 dano para perder o jogo.</li>
      </ul>

      <h3>Energia</h3>
      <p>A energia é o recurso necessário para jogar cartas no Bakugan TCG.</p>
      <ul>
        <li>Cada carta tem um custo de energia no canto superior direito.</li>
        <li>Você pode energizar uma carta da mão por turno, virando-a de lado.</li>
        <li>A energia gasta desaparece ao fim do turno, mas retorna no início do próximo.</li>
      </ul>

      <h3>Prioridade</h3>
      <p>
        No <strong>Bakugan TCG</strong>, os jogadores atuam ao mesmo tempo, mas a prioridade determina quem pode jogar
        cartas primeiro durante cada fase do turno.
      </p>
      <ul>
        <li>A prioridade inicial pode ser decidida com uma moeda ou acordo entre os jogadores.</li>
        <li>Quem venceu o turno anterior começa com a prioridade no próximo.</li>
      </ul>

      <h3>Bakucores</h3>
      <p>
        Bakucores Tem 2 lados: o superior que há um indicador de ícone e o inferior que terá os status que o bakugan
        irá receber.
      </p>
      <p>Caso o Bakugan pegue 2 bakucores o status de ambos será adicionado</p>

      <h3>Zonas</h3>
      <p>O jogo possui 6 zonas principais:</p>
      <ul>
        <li>
          <strong>Deck:</strong> Virado para baixo, não pode ser reorganizado. É permitido perguntar quantas cartas
          restam no deck do oponente.
        </li>
        <li>
          <strong>Mão:</strong> Máximo de 7 cartas. Caso ultrapasse, descarte o excesso ao fim da rodada. É permitido
          perguntar quantas cartas o oponente tem.
        </li>
        <li>
          <strong>Lote (Stack):</strong> Onde entram as cartas jogadas. As habilidades são resolvidas em ordem inversa
          (última a entrar, primeira a resolver). Efeitos automáticos não entram no lote.
        </li>
        <li>
          <strong>Pilha de Descarte:</strong> Contém cartas destruídas, descartadas ou usadas. Sempre visível e pode
          ser reorganizada para análise.
        </li>
        <li>
          <strong>Arena (Área de Jogo):</strong> Onde ficam cartas ativas como Heróis, Evoluções e Energias
          permanentes.
        </li>
        <li>
          <strong>Campo de BakuCores:</strong> Área onde os BakuCores são colocados antes da briga. Jogadores se
          alternam para montar o campo.
        </li>
      </ul>
    </section>
  )
}
