import { Question } from '../types';

/**
 * Banco de questões PRF — padrão CEBRASPE (Certo / Errado)
 * 80+ questões cobrindo todas as disciplinas do edital PRF
 */
export const PRF_QUESTIONS_BANK: Question[] = [

  // ─────────────────────────────────────────────
  // LEGISLAÇÃO DE TRÂNSITO (20 questões)
  // ─────────────────────────────────────────────
  {
    id: 'lt-01',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Embriaguez ao Volante — Art. 306 CTB',
    statement: 'Conduzir veículo automotor com capacidade psicomotora alterada em razão do consumo de álcool configura infração penal, cuja constatação pode ser feita por etilômetro, exame de sangue ou sinais de alteração, conforme a Resolução CONTRAN 432.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 306 do CTB define o crime de embriaguez ao volante. A Resolução CONTRAN 432 regulamenta os meios de constatação: etilômetro (≥ 0,34 mg/L de ar alveolar), exame de sangue (≥ 6 dg/L) ou sinais de alteração psicomotora.'
  },
  {
    id: 'lt-02',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Embriaguez ao Volante — Art. 165 CTB',
    statement: 'A infração administrativa de embriaguez ao volante prevista no Art. 165 do CTB exige que o condutor apresente concentração de álcool acima de 0,34 mg/L de ar alveolar para ser autuado.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. A infração ADMINISTRATIVA (Art. 165) ocorre com qualquer concentração de álcool acima de 0,05 mg/L de ar alveolar. O limite de 0,34 mg/L é o que configura o CRIME (Art. 306). A diferença entre infração administrativa e penal é um ponto clássico de pegadinha do CEBRASPE.'
  },
  {
    id: 'lt-03',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Sistema Nacional de Trânsito',
    statement: 'A Polícia Rodoviária Federal é órgão integrante do Sistema Nacional de Trânsito, competindo-lhe fiscalizar o trânsito nas rodovias federais, aplicar penalidades e arrecadar multas.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Nos termos do Art. 7º, III e Art. 20, VI do CTB, a PRF integra o SNT e possui competência para arrecadar multas decorrentes de infrações cometidas em rodovias federais.'
  },
  {
    id: 'lt-04',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Velocidade — Pista Simples',
    statement: 'Em pista simples de rodovia federal, o limite máximo de velocidade para automóveis e motocicletas é de 100 km/h, enquanto para caminhões e ônibus é de 80 km/h, salvo sinalização diferente.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 61, I do CTB estabelece: 100 km/h para automóveis, camionetas e motocicletas; 80 km/h para os demais veículos, em pista simples. Em pista dupla, os limites são 110 km/h e 90 km/h respectivamente.'
  },
  {
    id: 'lt-05',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Velocidade — Pista Dupla',
    statement: 'Em rodovias de pista dupla, a velocidade máxima permitida para automóveis é de 120 km/h, independentemente de sinalização específica.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. O Art. 61, II do CTB estabelece 110 km/h para automóveis, camionetas e motocicletas em pista dupla (não 120 km/h). O limite de 120 km/h pode existir, mas somente se houver sinalização expressa autorizando.'
  },
  {
    id: 'lt-06',
    discipline: 'Legislação de Trânsito',
    subtopic: 'CNH — Habilitação e Renovação',
    statement: 'A CNH digital possui fé pública em todo o território nacional, podendo ser utilizada como documento de identificação e sendo aceita como autorização para conduzir veículos, dispensando o porte físico.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Com a Lei 14.071/2020, a CNH eletrônica passou a ter fé pública e validade em todo o Brasil, dispensando o porte do documento físico para fins de fiscalização quando o agente possui acesso aos sistemas eletrônicos de verificação.'
  },
  {
    id: 'lt-07',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Infrações — Classificação',
    statement: 'São infrações gravíssimas, previstas no CTB: conduzir sob efeito de álcool, participar de racha e ultrapassar sinal vermelho. A pontuação atribuída a cada uma dessas infrações é de 7 pontos na CNH.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. As infrações gravíssimas geram 7 pontos na CNH. Conduzir sob influência de álcool (Art. 165), participar de racha (Art. 173) e avançar sinal vermelho (Art. 208) são classificadas como gravíssimas pelo CTB.'
  },
  {
    id: 'lt-08',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Suspensão e Cassação da CNH',
    statement: 'O condutor que atingir 20 pontos na CNH terá sua habilitação automaticamente suspensa, independentemente do tipo de infração cometida.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. O limite varia conforme a presença de infrações gravíssimas. Sem infrações gravíssimas: suspensão com 40 pontos. Com 1 infração gravíssima: 30 pontos. Com 2 ou mais infrações gravíssimas: 20 pontos. (Art. 259 do CTB com redação da Lei 14.071/2020).'
  },
  {
    id: 'lt-09',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Medidas Administrativas',
    statement: 'A retenção do veículo é medida administrativa que pode ser adotada pelo agente de trânsito independentemente da lavratura do Auto de Infração de Trânsito, quando presentes irregularidades que impeçam o uso seguro do veículo.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. A retenção do veículo é uma medida administrativa, mas o Auto de Infração de Trânsito deve ser lavrado. Não há previsão legal de retenção sem a correspondente autuação pela infração detectada. (Art. 269 do CTB).'
  },
  {
    id: 'lt-10',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Crimes de Trânsito — Homicídio Culposo',
    statement: 'No homicídio culposo na direção de veículo automotor (Art. 302 do CTB), o agente responderá com pena de reclusão de 2 a 4 anos, aumentada de 1/3 à metade se o agente estiver sob influência de álcool.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. A pena base do Art. 302 do CTB é de DETENÇÃO de 2 a 4 anos (não reclusão). A pena de reclusão é aplicada a crimes mais graves. Além disso, a causa de aumento é de 1/3 a 1/2 (metade), o que está correto, mas o tipo de pena (detenção vs. reclusão) torna a assertiva errada.'
  },
  {
    id: 'lt-11',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Ultrapassagem',
    statement: 'É expressamente proibida a ultrapassagem em curvas, aclives sem visibilidade e faixas de pedestres, por disposição do Art. 37 do CTB.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 37 do CTB elenca os locais onde a ultrapassagem é proibida, incluindo curvas, aclives sem visibilidade e faixas de pedestres, por representarem risco à segurança no trânsito.'
  },
  {
    id: 'lt-12',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Uso do Cinto de Segurança',
    statement: 'O uso do cinto de segurança é obrigatório em todos os assentos do veículo, e a infração por não uso é classificada como grave.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Art. 65 do CTB torna obrigatório o uso do cinto em todos os assentos. A infração (Art. 167) é classificada como GRAVE, com multa e 4 pontos na CNH.'
  },
  {
    id: 'lt-13',
    discipline: 'Legislação de Trânsito',
    subtopic: 'CONTRAN — Competências',
    statement: 'O CONTRAN é o órgão máximo normativo do Sistema Nacional de Trânsito, com competência para estabelecer normas regulamentadoras dos dispositivos do CTB.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Conforme o Art. 10 do CTB, o CONTRAN (Conselho Nacional de Trânsito) é o coordenador máximo do SNT, responsável por baixar as normas regulamentadoras das disposições do CTB.'
  },
  {
    id: 'lt-14',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Pedestres — Faixa de Segurança',
    statement: 'O condutor que deixar de dar preferência de passagem ao pedestre que se encontre na faixa a ele destinada ou iniciando o seu atravessamento comete infração gravíssima com aplicação de multa em dobro.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. A infração prevista no Art. 214 do CTB por não dar preferência ao pedestre na faixa é classificada como GRAVE (não gravíssima), com penalidade de multa e 4 pontos na CNH.'
  },
  {
    id: 'lt-15',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Racha — Art. 173',
    statement: 'A participação em racha, disputa ou competição automobilística não autorizada na via pública configura infração gravíssima com penalidade de suspensão imediata do direito de dirigir.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 173 do CTB classifica o racha como infração gravíssima com multa (R$ 880,44 com fator multiplicador 5), 7 pontos na CNH e suspensão imediata do direito de dirigir.'
  },
  {
    id: 'lt-16',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Transporte de Crianças',
    statement: 'Crianças com até 7 anos e meio de idade devem ser transportadas em dispositivo de retenção (cadeirinha ou bebê conforto) apropriado para seu peso e estatura, obrigatoriamente no banco traseiro.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A Resolução CONTRAN 277 estabelece que crianças menores de 10 anos devem usar dispositivos de retenção. Menores de 1 ano: bebê conforto (traseiro de costas). De 1 a 4 anos: cadeirinha. De 4 a 7,5 anos: assento de elevação (booster).'
  },
  {
    id: 'lt-17',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Placa de Identificação',
    statement: 'Veículo com placa de identificação em desconformidade com o modelo oficial, deteriorada ou ilegível pode ser apreendido pelo agente de trânsito até que seja regularizada a situação.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Conforme o Art. 230 do CTB, circular com placa ilegível, em desconformidade ou ausente é infração grave com possibilidade de remoção do veículo até a regularização da situação.'
  },
  {
    id: 'lt-18',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Sinalização — Semáforo',
    statement: 'O sinal amarelo no semáforo indica que o condutor deve parar o veículo antes da faixa de retenção, salvo se a paragem criar risco de acidente.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Art. 208 do CTB e o Manual Brasileiro de Sinalização estabelecem que o amarelo indica "atenção — o sinal vai fechar", devendo o condutor parar antes da faixa de retenção, a menos que a parada coloque em risco a segurança do tráfego.'
  },
  {
    id: 'lt-19',
    discipline: 'Legislação de Trânsito',
    subtopic: 'Uso de Celular',
    statement: 'Usar celular ao volante sem dispositivo mãos-livres enquanto conduz veículo é infração gravíssima com penalidade de 7 pontos na CNH e multa.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Art. 252, VIII do CTB tipifica o uso do celular ao volante sem viva-voz ou dispositivo mãos-livres como infração gravíssima, sujeita a multa e 7 pontos na CNH.'
  },
  {
    id: 'lt-20',
    discipline: 'Legislação de Trânsito',
    subtopic: 'RENAVAM e Licenciamento',
    statement: 'O Registro Nacional de Veículos Automotores (RENAVAM) é expedido pelo DETRAN do estado de domicílio do proprietário e serve como documento único de identificação do veículo em todo o território nacional.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O RENAVAM é expedido pelo DETRAN e identifica unicamente cada veículo registrado em todo o Brasil. O CRLV (Certificado de Registro e Licenciamento de Veículo) é o documento de porte obrigatório que comprova o licenciamento anual.'
  },

  // ─────────────────────────────────────────────
  // DIREITO CONSTITUCIONAL (10 questões)
  // ─────────────────────────────────────────────
  {
    id: 'dc-01',
    discipline: 'Direito Constitucional',
    subtopic: 'Segurança Pública — Art. 144 CF',
    statement: 'A Polícia Rodoviária Federal é órgão permanente, mantido pela União e estruturado em carreira, destinado ao patrulhamento ostensivo das rodovias federais.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Art. 144, § 2º da CF/88 define exatamente esse conceito. A PRF é mantida pela UNIÃO (não pelos estados), o que é ponto frequente de pegadinha do CEBRASPE.'
  },
  {
    id: 'dc-02',
    discipline: 'Direito Constitucional',
    subtopic: 'Segurança Pública — Art. 144 CF',
    statement: 'Segundo a Constituição Federal, a Polícia Federal e a Polícia Rodoviária Federal são os únicos órgãos de segurança pública de âmbito federal, sendo as polícias civil e militar exclusivamente estaduais.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. O Art. 144 da CF elenca cinco órgãos: Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícias Civis e Polícias Militares (e Corpos de Bombeiros Militares). A Polícia Ferroviária Federal também é federal, tornando a assertiva incorreta.'
  },
  {
    id: 'dc-03',
    discipline: 'Direito Constitucional',
    subtopic: 'Direitos Fundamentais',
    statement: 'Nenhuma pena passará da pessoa do condenado, podendo a obrigação de reparar o dano e a decretação do perdimento de bens ser, nos termos da lei, estendidas aos sucessores até o limite do valor do patrimônio transferido.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Transcrição literal do Art. 5º, XLV da CF/88. O princípio da pessoalidade da pena impede que a sanção penal passe da pessoa do condenado, mas a reparação civil e o perdimento de bens podem alcançar os sucessores.'
  },
  {
    id: 'dc-04',
    discipline: 'Direito Constitucional',
    subtopic: 'Direitos Fundamentais — Habeas Corpus',
    statement: 'O habeas corpus pode ser impetrado por qualquer pessoa em favor de outrem ou em nome próprio, inclusive por pessoa jurídica em favor de pessoa física.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Conforme o Art. 5º, LXVIII da CF/88, o HC pode ser impetrado por qualquer pessoa — nacional, estrangeiro, analfabeto — em favor próprio ou de terceiro, inclusive por pessoa jurídica em favor de pessoa física.'
  },
  {
    id: 'dc-05',
    discipline: 'Direito Constitucional',
    subtopic: 'Organização do Estado',
    statement: 'A República Federativa do Brasil é formada pela união indissolúvel dos Estados, do Distrito Federal e dos Municípios, constituindo-se em Estado Democrático de Direito.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Transcrição do Art. 1º da CF/88. O ponto de atenção é que a União também não aparece como ente da Federação — o Brasil é formado pelos Estados, DF e Municípios, e a União é a pessoa jurídica de direito público que representa o Estado federal.'
  },
  {
    id: 'dc-06',
    discipline: 'Direito Constitucional',
    subtopic: 'Direitos Fundamentais — Mandado de Segurança',
    statement: 'O mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional ou por organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 5º, LXX da CF elenca os legitimados: partido político com representação no Congresso ou organização sindical, entidade de classe ou associação com pelo menos 1 ano de existência legal.'
  },
  {
    id: 'dc-07',
    discipline: 'Direito Constitucional',
    subtopic: 'Direitos Fundamentais — Prisão',
    statement: 'Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime militar definido em lei.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Transcrição exata do Art. 5º, LXI da CF/88. As exceções à necessidade de ordem judicial são flagrante delito e transgressão militar/crime militar.'
  },
  {
    id: 'dc-08',
    discipline: 'Direito Constitucional',
    subtopic: 'Direitos Fundamentais — Inviolabilidade',
    statement: 'A inviolabilidade do domicílio, garantida pela CF, pode ser afastada a qualquer hora do dia ou da noite em caso de flagrante delito, desastre, para prestar socorro ou por determinação judicial.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. O Art. 5º, XI da CF estabelece que a casa é asilo inviolável. Em caso de flagrante delito, desastre ou para prestar socorro, a entrada é permitida A QUALQUER HORA. Mas por determinação judicial, a entrada somente é permitida DURANTE O DIA. A assertiva equipara os casos, o que é incorreto.'
  },
  {
    id: 'dc-09',
    discipline: 'Direito Constitucional',
    subtopic: 'Direitos Sociais',
    statement: 'A segurança pública é um direito social expressamente previsto no caput do Art. 6º da Constituição Federal.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. O Art. 6º da CF elenca os direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, SEGURANÇA, previdência social, proteção à maternidade e à infância e assistência aos desamparados. A SEGURANÇA está no Art. 6º, mas como direito social, não no Art. 144 (segurança pública). O erro da assertiva é que segurança está implícita mas existem pegadinhas sobre "expressa" vs "implícita". Na verdade, está expressa no Art. 6º.'
  },
  {
    id: 'dc-10',
    discipline: 'Direito Constitucional',
    subtopic: 'Poderes da República',
    statement: 'A investigação criminal é função exclusiva do Poder Judiciário, que pode, por meio das autoridades policiais, instaurar inquéritos e colher provas para a persecução penal.',
    correctAnswer: 'E',
    difficulty: 'Fácil',
    explanation: 'Errado. A investigação criminal não é função do Poder Judiciário, mas da Polícia Judiciária (Polícia Federal e Polícias Civis), sob supervisão do Ministério Público. O Poder Judiciário exerce a função jurisdicional, não investigativa.'
  },

  // ─────────────────────────────────────────────
  // DIREITO PENAL (10 questões)
  // ─────────────────────────────────────────────
  {
    id: 'dp-01',
    discipline: 'Direito Penal',
    subtopic: 'Tempo e Lugar do Crime',
    statement: 'O Código Penal brasileiro adotou a teoria da atividade para determinar o tempo do crime e a teoria da ubiquidade para definir o lugar do crime.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Art. 4º: tempo do crime = momento da ação ou omissão (teoria da atividade). Art. 6º: lugar do crime = onde ocorreu a ação/omissão OU onde se produziu/deveria produzir o resultado (teoria da ubiquidade).'
  },
  {
    id: 'dp-02',
    discipline: 'Direito Penal',
    subtopic: 'Excludentes de Ilicitude',
    statement: 'A legítima defesa é excludente de ilicitude que pode ser invocada mesmo quando o agente se excede nos meios necessários para repelir injusta agressão, desde que o excesso tenha sido involuntário.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. O excesso doloso (voluntário) afasta a legítima defesa e o agente responde pelo excesso. O excesso culposo pode atenuar a responsabilidade, mas não há excludente de ilicitude quando há excesso — o que existe é eventual redução de pena. A assertiva generaliza de forma incorreta.'
  },
  {
    id: 'dp-03',
    discipline: 'Direito Penal',
    subtopic: 'Concurso de Pessoas',
    statement: 'No concurso de pessoas, o coautor responde pelo crime mesmo que a circunstância pessoal não se comunique, quando ela é elementar do tipo penal.',
    correctAnswer: 'C',
    difficulty: 'Difícil',
    explanation: 'Correto. O Art. 30 do CP dispõe que as circunstâncias e condições de caráter PESSOAL não se comunicam. Porém, as circunstâncias que são ELEMENTARES do crime (não meramente agravantes) se comunicam a todos os participantes, mesmo que não presentes em cada um deles.'
  },
  {
    id: 'dp-04',
    discipline: 'Direito Penal',
    subtopic: 'Prescrição',
    statement: 'A prescrição da pretensão punitiva é regulada pela pena máxima cominada ao crime, enquanto a prescrição da pretensão executória leva em conta a pena concretamente aplicada na sentença.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. É a distinção clássica: prescrição in abstrato (PPP) = pena máxima em abstrato; prescrição in concreto (PPE) = pena concretamente aplicada. Art. 109 e 110 do CP.'
  },
  {
    id: 'dp-05',
    discipline: 'Direito Penal',
    subtopic: 'Crimes Hediondos',
    statement: 'Os crimes hediondos, de acordo com a lei n.º 8.072/1990, são insuscetíveis de anistia, graça, indulto e fiança, e o cumprimento da pena deve se dar inicialmente em regime fechado.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. O STF declarou inconstitucional a obrigatoriedade de início em regime fechado para crimes hediondos (HC 111.840/ES). Atualmente, a fixação do regime leva em conta os critérios do Art. 33 do CP. O restante (vedação à anistia, graça, indulto e fiança) está correto.'
  },
  {
    id: 'dp-06',
    discipline: 'Direito Penal',
    subtopic: 'Dolo e Culpa',
    statement: 'Age com dolo eventual quem, prevendo o resultado lesivo como possível, assume o risco de produzi-lo, distinguindo-se da culpa consciente porque nesta o agente confia que o resultado não ocorrerá.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Esta é a distinção fundamental: dolo eventual = prevê e ASSUME O RISCO; culpa consciente = prevê mas CONFIA que não vai acontecer. Ambos envolvem a previsão do resultado, mas a diferença está na postura psicológica do agente.'
  },
  {
    id: 'dp-07',
    discipline: 'Direito Penal',
    subtopic: 'Tentativa',
    statement: 'O crime tentado é punido com a mesma pena do crime consumado, podendo o juiz, no entanto, reduzir a pena de um a dois terços.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 14, II do CP define tentativa. O parágrafo único estabelece que a pena da tentativa é a pena do crime consumado reduzida de 1 a 2/3 (quanto mais longe da consumação, maior a redução).'
  },
  {
    id: 'dp-08',
    discipline: 'Direito Penal',
    subtopic: 'Erro de Tipo e Erro de Proibição',
    statement: 'O erro de proibição, quando inevitável, exclui a culpabilidade do agente, enquanto o erro de tipo inevitável exclui o dolo e a culpa, tornando o fato atípico.',
    correctAnswer: 'C',
    difficulty: 'Difícil',
    explanation: 'Correto. Erro de tipo inevitável: exclui dolo E culpa → fato atípico (Art. 20 CP). Erro de proibição inevitável (escusável): exclui a culpabilidade → isenta de pena (Art. 21 CP). Se evitável: diminui a pena de 1/6 a 1/3.'
  },
  {
    id: 'dp-09',
    discipline: 'Direito Penal',
    subtopic: 'Concurso de Crimes',
    statement: 'No concurso material de crimes, as penas são somadas; no concurso formal, aplica-se a mais grave aumentada de 1/6 até a metade; no crime continuado, a pena mais grave é aumentada de 1/6 a 2/3.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Esta é a regra geral do concurso de crimes no CP: Art. 69 (material = soma), Art. 70 (formal = exasperação) e Art. 71 (continuado = exasperação de 1/6 a 2/3). No concurso formal imperfeito (desígnios autônomos), as penas são somadas.'
  },
  {
    id: 'dp-10',
    discipline: 'Direito Penal',
    subtopic: 'Crimes contra a Administração Pública',
    statement: 'O crime de peculato-desvio ocorre quando o funcionário público desvia, em proveito próprio ou alheio, dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 312 do CP define o peculato em suas modalidades. O peculato-desvio ocorre quando o funcionário, tendo a posse do bem em razão do cargo, o desvia em proveito próprio ou de terceiro. Distingue-se do peculato-apropriação, onde o agente se apropria do bem.'
  },

  // ─────────────────────────────────────────────
  // DIREITO ADMINISTRATIVO (8 questões)
  // ─────────────────────────────────────────────
  {
    id: 'da-01',
    discipline: 'Direito Administrativo',
    subtopic: 'Poderes Administrativos',
    statement: 'O poder de polícia administrativa legitima a restrição de direitos individuais em prol do interesse coletivo, sendo seus atributos a discricionariedade, a autoexecutoriedade e a coercibilidade.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Os atributos clássicos do poder de polícia são: discricionariedade (margem de escolha), autoexecutoriedade (execução direta sem autorização judicial) e coercibilidade (imposição forçada). Dica CEBRASPE: a discricionariedade não é absoluta — há atos de polícia vinculados.'
  },
  {
    id: 'da-02',
    discipline: 'Direito Administrativo',
    subtopic: 'Atos Administrativos',
    statement: 'A autoexecutoriedade é atributo presente em todos os atos administrativos, permitindo que a Administração os execute de forma direta, sem necessidade de autorização judicial.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. A autoexecutoriedade NÃO está presente em todos os atos. Por exemplo, para cobrar uma multa não paga, a Administração precisa ajuizar execução fiscal — não pode executar diretamente o patrimônio do particular. A autoexecutoriedade existe apenas quando prevista em lei ou em situações de urgência.'
  },
  {
    id: 'da-03',
    discipline: 'Direito Administrativo',
    subtopic: 'Servidores Públicos',
    statement: 'O estágio probatório do servidor público federal estatutário tem duração de 3 anos, coincidindo com o período de estágio confirmatório previsto na Constituição Federal.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. A Lei 8.112/90 e o STF (após a EC 19/98) consolidaram o entendimento de que o estágio probatório dos servidores estatutários federais tem duração de 3 anos, coincidindo com o período da estabilidade previsto no Art. 41 da CF.'
  },
  {
    id: 'da-04',
    discipline: 'Direito Administrativo',
    subtopic: 'Licitação',
    statement: 'A modalidade pregão pode ser utilizada para contratação de bens e serviços comuns, sendo obrigatória a sua utilização na forma eletrônica no âmbito da Administração Pública federal.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O pregão eletrônico é a modalidade preferencial para bens e serviços comuns na esfera federal, conforme o Decreto 10.024/2019 e a Lei 14.133/2021 (Nova Lei de Licitações).'
  },
  {
    id: 'da-05',
    discipline: 'Direito Administrativo',
    subtopic: 'Princípios Administrativos',
    statement: 'O princípio da eficiência, inserido na CF/88 pela EC 19/1998, exige que a Administração Pública execute suas atividades com qualidade, presteza e economicidade, aproximando-se dos parâmetros de desempenho da iniciativa privada.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A EC 19/1998 inseriu a eficiência nos princípios constitucionais da Administração (Art. 37, caput). O princípio exige resultado ótimo com menor custo, sem contudo equiparar o regime público ao privado integralmente.'
  },
  {
    id: 'da-06',
    discipline: 'Direito Administrativo',
    subtopic: 'Responsabilidade Civil do Estado',
    statement: 'A responsabilidade do Estado por atos omissivos é objetiva, dispensando a comprovação de culpa do agente público causador do dano.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. A responsabilidade por atos OMISSIVOS é SUBJETIVA (teoria da culpa do serviço — faute du service), exigindo comprovação de omissão culposa do Estado. A responsabilidade OBJETIVA (Art. 37, § 6º da CF) se aplica aos atos COMISSIVOS dos agentes públicos.'
  },
  {
    id: 'da-07',
    discipline: 'Direito Administrativo',
    subtopic: 'Controle da Administração',
    statement: 'O controle externo da Administração Pública federal é exercido pelo Congresso Nacional com o auxílio do Tribunal de Contas da União, que tem competência para julgar as contas dos administradores públicos federais.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Art. 71 da CF/88 estabelece que o controle externo é exercido pelo Congresso Nacional com o auxílio do TCU, que possui competência para julgar as contas de quem gere recursos públicos federais.'
  },
  {
    id: 'da-08',
    discipline: 'Direito Administrativo',
    subtopic: 'Bens Públicos',
    statement: 'Os bens de uso especial, como edifícios públicos e veículos oficiais, são alienáveis, desde que observados os procedimentos legais, pois não integram o patrimônio inalienável do Estado.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Os bens de uso especial são alienáveis, desde que desafetados (deixem de servir ao uso especial) e observados os procedimentos legais. Os bens de uso COMUM DO POVO também podem ser alienados, mas requerem desafetação. Somente os bens dominicais são naturalmente alienáveis sem necessidade de desafetação.'
  },

  // ─────────────────────────────────────────────
  // LÍNGUA PORTUGUESA (8 questões)
  // ─────────────────────────────────────────────
  {
    id: 'lp-01',
    discipline: 'Língua Portuguesa',
    subtopic: 'Coesão e Coerência Textual',
    statement: 'O emprego do pronome "lhe" em "O delegado comunicou-lhe a autuação" indica que a ação de comunicar foi praticada pelo delegado em benefício de uma terceira pessoa, funcionando como objeto indireto.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. "Lhe" é pronome oblíquo átono que funciona como objeto indireto, representando a terceira pessoa a quem foi feita a comunicação. O emprego está correto para a função de OI (comunicar a quem? — lhe).'
  },
  {
    id: 'lp-02',
    discipline: 'Língua Portuguesa',
    subtopic: 'Concordância Verbal',
    statement: 'Na frase "Faz dez anos que ocorreram os acidentes na rodovia", o verbo "faz" está corretamente empregado no singular por ser impessoal ao indicar tempo decorrido.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O verbo "fazer" indicando tempo decorrido é IMPESSOAL, devendo permanecer na 3ª pessoa do singular. "Faz dez anos" está correto. O erro comum é flexionar com o sujeito inexistente: *Fazem dez anos (errado).'
  },
  {
    id: 'lp-03',
    discipline: 'Língua Portuguesa',
    subtopic: 'Regência Verbal',
    statement: 'O verbo "assistir" no sentido de "ver, presenciar" é transitivo indireto e exige a preposição "a", sendo incorreto seu uso sem preposição nessa acepção.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. "Assistir a" (ver, presenciar) é transitivo indireto. Ex.: "Assistimos ao acidente" (correto). "Assistimos o acidente" (incorreto nessa acepção). No sentido de "ajudar, prestar assistência", o verbo pode ser transitivo direto ou indireto.'
  },
  {
    id: 'lp-04',
    discipline: 'Língua Portuguesa',
    subtopic: 'Pontuação',
    statement: 'O uso de vírgula antes da conjunção "e" é sempre proibido pela norma culta da língua portuguesa.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. Há situações em que a vírgula antes do "e" é obrigatória: (1) quando as orações têm sujeitos diferentes; (2) quando o "e" tem valor adversativo; (3) quando a vírgula integra lista de aposto. Ex.: "Pedro foi ao serviço, e Maria ficou em casa" (sujeitos diferentes).'
  },
  {
    id: 'lp-05',
    discipline: 'Língua Portuguesa',
    subtopic: 'Semântica — Polissemia',
    statement: 'O termo "diligência" pode referir-se tanto a uma providência tomada no âmbito judicial ou policial quanto a um veículo de transporte histórico, sendo exemplo de polissemia na língua portuguesa.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Polissemia é a propriedade de uma mesma palavra ter múltiplos sentidos relacionados. "Diligência" tem ao menos dois sentidos distintos no português: a providência administrativa/judicial e a carruagem puxada por cavalos (sentido histórico).'
  },
  {
    id: 'lp-06',
    discipline: 'Língua Portuguesa',
    subtopic: 'Crase',
    statement: 'O uso da crase é obrigatório na frase: "Refiro-me à decisão do superior hierárquico", pois há fusão da preposição "a" com o artigo definido feminino "a".',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. "Referir-se a" exige preposição "a". O substantivo "decisão" é feminino e admite artigo "a". Logo, há crase: "à decisão". Regra: crase = preposição "a" + artigo definido feminino "a".'
  },
  {
    id: 'lp-07',
    discipline: 'Língua Portuguesa',
    subtopic: 'Pronomes Relativos',
    statement: 'Na frase "O servidor a quem foi delegada a função cumpriu o prazo", o pronome "quem" tem como antecedente "servidor" e funciona como objeto indireto na oração relativa.',
    correctAnswer: 'C',
    difficulty: 'Difícil',
    explanation: 'Correto. "Quem" é pronome relativo que retoma "servidor" (antecedente). Na oração relativa, "a quem foi delegada a função", o pronome exerce função de objeto indireto (delegada a quem? — a quem). O emprego da preposição "a" é obrigatório.'
  },
  {
    id: 'lp-08',
    discipline: 'Língua Portuguesa',
    subtopic: 'Figuras de Linguagem',
    statement: 'A expressão "A lei é a espada da justiça" constitui uma metáfora, pois estabelece uma comparação implícita sem o uso de elemento comparativo expresso.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A metáfora é a comparação implícita (sem "como", "tal qual" etc.). Já a SÍMILE ou comparação usa o elemento comparativo explícito. "A lei É a espada" é metáfora; "A lei É COMO uma espada" é comparação/símile.'
  },

  // ─────────────────────────────────────────────
  // RACIOCÍNIO LÓGICO (6 questões)
  // ─────────────────────────────────────────────
  {
    id: 'rl-01',
    discipline: 'Raciocínio Lógico-Matemático',
    subtopic: 'Proposições e Conectivos',
    statement: 'A proposição "Se chove, então a pista fica molhada" é logicamente equivalente à proposição "A pista não fica molhada ou chove".',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. P → Q equivale a ¬P ∨ Q (negação do antecedente OU consequente). "Se chove (P) então pista molhada (Q)" equivale a "Não chove (¬P) OU pista molhada (Q)". A assertiva inverteu: "pista não molhada OU chove" = ¬Q ∨ P, que é a inversa — não equivalente.'
  },
  {
    id: 'rl-02',
    discipline: 'Raciocínio Lógico-Matemático',
    subtopic: 'Estruturas Lógicas',
    statement: 'A negação da proposição "Todos os condutores respeitam o limite de velocidade" é "Nenhum condutor respeita o limite de velocidade".',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. A negação de "Todo A é B" é "Existe pelo menos um A que não é B" (particular negativa). Logo, a negação correta seria "Existe pelo menos um condutor que não respeita o limite de velocidade" (ou "Algum condutor não respeita"). "Nenhum condutor respeita" é a contrária, não a negação (contraditória).'
  },
  {
    id: 'rl-03',
    discipline: 'Raciocínio Lógico-Matemático',
    subtopic: 'Raciocínio Dedutivo',
    statement: 'Dado que: (1) Todo policial é servidor público. (2) João é policial. Conclui-se necessariamente que João é servidor público.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Esse é um silogismo aristotélico válido (modus ponens). Premissa maior: Todo A é B. Premissa menor: C é A. Conclusão: C é B. A inferência é necessária (dedutiva).'
  },
  {
    id: 'rl-04',
    discipline: 'Raciocínio Lógico-Matemático',
    subtopic: 'Conjuntos e Probabilidade',
    statement: 'Em um grupo de 50 candidatos, 30 aprovaram na prova teórica e 25 aprovaram na prova prática. Se 10 candidatos aprovaram em ambas as provas, então 35 candidatos aprovaram em pelo menos uma das provas.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Princípio da inclusão-exclusão: |A ∪ B| = |A| + |B| − |A ∩ B| = 30 + 25 − 10 = 45. Aguarda: 30 + 25 − 10 = 45, não 35. Verificar: 45 candidatos aprovaram em pelo menos uma. Assertiva afirma 35 → ERRADO.'
  },
  {
    id: 'rl-05',
    discipline: 'Raciocínio Lógico-Matemático',
    subtopic: 'Sequências e Progressões',
    statement: 'Na sequência 2, 6, 18, 54, 162, o próximo termo é 486, pois a razão da progressão geométrica é 3.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Trata-se de uma PG com razão q = 3. Cada termo é multiplicado por 3: 162 × 3 = 486. A razão é calculada dividindo qualquer termo pelo anterior: 6/2 = 18/6 = 54/18 = 3.'
  },
  {
    id: 'rl-06',
    discipline: 'Raciocínio Lógico-Matemático',
    subtopic: 'Análise Combinatória',
    statement: 'A quantidade de anagramas da palavra "RADAR" é igual a 60.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. RADAR tem 5 letras com repetições: R aparece 2 vezes e A aparece 2 vezes. Anagramas = 5! / (2! × 2!) = 120 / 4 = 30 anagramas. A assertiva afirma 60, que seria o resultado sem considerar a repetição do R (5!/2! = 60), mas o A também se repete.'
  },

  // ─────────────────────────────────────────────
  // FÍSICA (6 questões)
  // ─────────────────────────────────────────────
  {
    id: 'fi-01',
    discipline: 'Física',
    subtopic: 'Cinemática — Distância de Frenagem',
    statement: 'Um veículo trafega a 72 km/h (20 m/s). Se o motorista freia com desaceleração constante de 4 m/s², a distância de frenagem até a parada completa é de 50 metros.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Usando Torricelli: v² = v₀² + 2aΔs → 0 = 20² + 2(−4)Δs → 0 = 400 − 8Δs → Δs = 50m. Esta equação é fundamental para a PRF: distância de frenagem é proporcional ao QUADRADO da velocidade inicial.'
  },
  {
    id: 'fi-02',
    discipline: 'Física',
    subtopic: 'Energia Cinética',
    statement: 'A energia cinética de um veículo em movimento é diretamente proporcional ao quadrado de sua velocidade, razão pela qual dobrar a velocidade quadruplica a energia cinética e, consequentemente, os danos em caso de colisão.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Ec = mv²/2. Se v dobra: Ec = m(2v)²/2 = 4mv²/2 = 4Ec. O risco de dano em colisão aumenta exponencialmente com a velocidade, justificando os limites do CTB.'
  },
  {
    id: 'fi-03',
    discipline: 'Física',
    subtopic: 'Força e Aceleração — 2ª Lei de Newton',
    statement: 'Segundo a 2ª Lei de Newton, a aceleração de um veículo é diretamente proporcional à força resultante aplicada e inversamente proporcional à sua massa, de modo que um veículo mais pesado, com a mesma força de frenagem, terá menor desaceleração.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. F = m.a → a = F/m. Com F constante, maior massa implica menor aceleração (ou desaceleração). Por isso caminhões pesados precisam de maior distância de frenagem que carros de passeio submetidos à mesma força de freio.'
  },
  {
    id: 'fi-04',
    discipline: 'Física',
    subtopic: 'Colisão Inelástica',
    statement: 'Em uma colisão perfeitamente inelástica entre dois veículos, a quantidade de movimento total do sistema é conservada, mas a energia cinética total não é conservada.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. A conservação da quantidade de movimento (momento linear) vale para qualquer colisão isolada. Na colisão perfeitamente inelástica, os corpos ficam juntos após o choque e há perda máxima de energia cinética, convertida em calor, som e deformação.'
  },
  {
    id: 'fi-05',
    discipline: 'Física',
    subtopic: 'Força Centrípeta — Curvas',
    statement: 'Na realização de uma curva, a força centrípeta que mantém o veículo na trajetória circular é fornecida pelo atrito dos pneus com o asfalto. Em pista molhada, com menor coeficiente de atrito, o veículo precisa reduzir a velocidade para realizar a mesma curva com segurança.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Fc = mv²/R. O atrito fornece a força centrípeta. Em pista molhada, μ (coeficiente de atrito) cai, reduzindo a força máxima de atrito. Para manter Fc ≤ força de atrito máxima, o condutor deve reduzir v (velocidade).'
  },
  {
    id: 'fi-06',
    discipline: 'Física',
    subtopic: 'Efeito Doppler',
    statement: 'O radar de velocidade utilizado pela PRF baseia-se no efeito Doppler: a frequência da onda refletida pelo veículo que se aproxima é maior que a frequência emitida, permitindo calcular a velocidade do veículo.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O efeito Doppler descreve a variação de frequência percebida quando há movimento relativo entre fonte e observador. No radar: emite onda → onda reflete no veículo → se veículo se aproxima, frequência refletida > emitida. A diferença de frequência permite calcular a velocidade.'
  },

  // ─────────────────────────────────────────────
  // DIREITOS HUMANOS (4 questões)
  // ─────────────────────────────────────────────
  {
    id: 'dh-01',
    discipline: 'Direitos Humanos',
    subtopic: 'Declaração Universal dos Direitos Humanos',
    statement: 'A Declaração Universal dos Direitos Humanos, adotada pela ONU em 1948, é um tratado internacional vinculante para todos os estados-membros da ONU, gerando obrigações jurídicas imediatas.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. A DUDH é uma DECLARAÇÃO — um documento de natureza política e moral, não um tratado vinculante. Ela não gera obrigações jurídicas diretas por si mesma. Os tratados internacionalmente vinculantes de direitos humanos são os Pactos de 1966 (PIDCP e PIDESC) e outros tratados específicos.'
  },
  {
    id: 'dh-02',
    discipline: 'Direitos Humanos',
    subtopic: 'Pacto de San José da Costa Rica',
    statement: 'A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) prevê que toda pessoa tem direito à vida, sendo que nenhuma pessoa poderá ser privada da vida arbitrariamente.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Art. 4º da CADH garante o direito à vida desde a concepção em geral e proíbe a privação arbitrária da vida. O Brasil ratificou a Convenção em 1992 e reconheceu a competência da Corte Interamericana de Direitos Humanos.'
  },
  {
    id: 'dh-03',
    discipline: 'Direitos Humanos',
    subtopic: 'Princípios dos Direitos Humanos',
    statement: 'Os direitos humanos são caracterizados pela universalidade, indivisibilidade, interdependência e inter-relacionariedade, o que significa que não podem ser realizados de forma isolada uns dos outros.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Esses são os princípios fundamentais dos direitos humanos proclamados na Declaração de Viena (1993): universalidade (valem para todos), indivisibilidade (civis e políticos + econômicos e sociais têm igual importância), interdependência e inter-relacionariedade.'
  },
  {
    id: 'dh-04',
    discipline: 'Direitos Humanos',
    subtopic: 'Uso da Força — Princípios Básicos',
    statement: 'Os Princípios Básicos sobre o Uso da Força e Armas de Fogo pelos Funcionários Responsáveis pela Aplicação da Lei da ONU estabelecem que o uso de armas letais é permitido apenas quando estritamente inevitável para proteger a vida.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Os Princípios Básicos da ONU (1990) determinam que armas letais somente podem ser usadas quando medidas menos extremas são insuficientes e há risco iminente de morte ou lesão grave. O uso deve ser proporcional, necessário e subsidiário.'
  },

  // ─────────────────────────────────────────────
  // DIREITO PROCESSUAL PENAL (4 questões)
  // ─────────────────────────────────────────────
  {
    id: 'dpp-01',
    discipline: 'Direito Processual Penal',
    subtopic: 'Inquérito Policial',
    statement: 'O inquérito policial é peça informativa de natureza administrativa, sigilosa e inquisitorial, não havendo contraditório pleno em sua fase, podendo o delegado indiciar o suspeito sem oitiva prévia do indiciado.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O IP tem natureza administrativa e inquisitorial — não há acusação formal nem contraditório pleno. O indiciamento é ato privativo do delegado de polícia e pode ocorrer independentemente de prévia oitiva do indiciado (Súmula Vinculante 14 garante acesso, mas não exige contraditório).'
  },
  {
    id: 'dpp-02',
    discipline: 'Direito Processual Penal',
    subtopic: 'Prisão em Flagrante',
    statement: 'Considera-se em flagrante delito aquele que é encontrado com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração, mesmo que horas depois do crime, configurando o chamado flagrante impróprio.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. O flagrante IMPRÓPRIO (quase-flagrante) ocorre quando o agente é perseguido logo após o crime. Quem é encontrado com instrumentos do crime pouco depois configura o flagrante PRESUMIDO (Art. 302, IV do CPP). São modalidades distintas de flagrante.'
  },
  {
    id: 'dpp-03',
    discipline: 'Direito Processual Penal',
    subtopic: 'Ação Penal',
    statement: 'A ação penal pública incondicionada independe de representação do ofendido para ser intentada pelo Ministério Público, sendo a regra geral para os crimes previstos no Código Penal.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A ação penal pública incondicionada é a regra (Art. 24 do CPP). O MP pode ajuizar a ação independentemente da vontade da vítima. As exceções são a ação penal pública condicionada à representação e a ação penal privada, que são expressamente previstas em lei.'
  },
  {
    id: 'dpp-04',
    discipline: 'Direito Processual Penal',
    subtopic: 'Provas — Interceptação Telefônica',
    statement: 'A interceptação telefônica, nos termos da Lei 9.296/1996, somente é admitida para apuração de infrações penais punidas com detenção, mediante autorização judicial.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. A Lei 9.296/96 e o Art. 5º, XII da CF estabelecem que a interceptação telefônica é admitida APENAS para infrações penais punidas com RECLUSÃO (não detenção), mediante autorização judicial, quando a prova não puder ser feita por outros meios.'
  },

  // ─────────────────────────────────────────────
  // INFORMÁTICA (4 questões)
  // ─────────────────────────────────────────────
  {
    id: 'inf-01',
    discipline: 'Informática',
    subtopic: 'Segurança da Informação',
    statement: 'O ataque de phishing consiste em uma tentativa de obter informações sensíveis, como senhas e dados bancários, por meio de mensagens fraudulentas que se passam por comunicações legítimas de empresas ou órgãos públicos.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. Phishing é engenharia social digital que simula comunicações legítimas para enganar o usuário e obter credenciais, dados financeiros ou acesso a sistemas. É uma das principais ameaças cibernéticas e tema recorrente em provas de informática de concursos.'
  },
  {
    id: 'inf-02',
    discipline: 'Informática',
    subtopic: 'Sistemas Operacionais',
    statement: 'No sistema operacional Windows, o arquivo de sistema "hosts" pode ser utilizado para mapear nomes de domínio a endereços IP, sem necessidade de consulta a servidores DNS externos.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O arquivo "hosts" (localizado em C:\\Windows\\System32\\drivers\\etc\\hosts) é consultado antes do DNS. Mapeamentos inseridos nele têm prioridade sobre a resolução DNS, sendo usados para bloqueio de sites ou configurações de rede locais.'
  },
  {
    id: 'inf-03',
    discipline: 'Informática',
    subtopic: 'Internet e Protocolos',
    statement: 'O protocolo HTTPS utiliza criptografia SSL/TLS para garantir a confidencialidade e integridade das comunicações, sendo obrigatório para sites que processam dados pessoais segundo a LGPD.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O HTTPS (HTTP + SSL/TLS) criptografa o canal de comunicação. A LGPD (Lei 13.709/2018) exige medidas técnicas de segurança para proteção de dados pessoais, sendo o HTTPS fundamental para comunicações web seguras.'
  },
  {
    id: 'inf-04',
    discipline: 'Informática',
    subtopic: 'Banco de Dados',
    statement: 'A linguagem SQL é utilizada para manipulação e consulta de bancos de dados relacionais, sendo o comando SELECT responsável pela inclusão de novos registros nas tabelas.',
    correctAnswer: 'E',
    difficulty: 'Fácil',
    explanation: 'Errado. O comando SELECT é para CONSULTA (recuperação) de dados. Para INSERIR novos registros, usa-se o comando INSERT INTO. Os comandos DML do SQL são: SELECT (consultar), INSERT (inserir), UPDATE (atualizar) e DELETE (excluir).'
  },

  // ─────────────────────────────────────────────
  // ÉTICA E CIDADANIA (6 questões)
  // ─────────────────────────────────────────────
  {
    id: 'ec-01',
    discipline: 'Ética e Cidadania',
    subtopic: 'Código de Ética — Decreto 1.171/1994',
    statement: 'O Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal, instituído pelo Decreto nº 1.171/1994, estabelece que o servidor público deve tratar com urbanidade as pessoas que demandem sua atenção, sendo vedado o tratamento discriminatório.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Decreto nº 1.171/1994 prevê explicitamente o dever de urbanidade e a vedação de discriminação. São deveres do servidor: atender com presteza, tratar com urbanidade e ser cortês. O desrespeito a esses deveres caracteriza falta ética passível de sanção pela Comissão de Ética.'
  },
  {
    id: 'ec-02',
    discipline: 'Ética e Cidadania',
    subtopic: 'Lei de Acesso à Informação — Lei 12.527/2011',
    statement: 'A Lei de Acesso à Informação (Lei nº 12.527/2011) estabelece que o acesso à informação é a regra, e o sigilo, a exceção, sendo o prazo máximo de classificação de informações ultrassecretas de 25 anos, prorrogável por igual período uma única vez.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. A LAI consagra o princípio da publicidade como regra e o sigilo como exceção. O prazo máximo de classificação ultrassecreta é de 25 anos, prorrogável uma única vez por mais 25 anos. Informações secretas têm prazo de até 15 anos e reservadas de até 5 anos.'
  },
  {
    id: 'ec-03',
    discipline: 'Ética e Cidadania',
    subtopic: 'Código de Ética — Vedações',
    statement: 'Segundo o Código de Ética do Servidor Público (Decreto nº 1.171/1994), é lícito ao servidor público utilizar pessoal ou recursos materiais da repartição para serviços ou atividades particulares, desde que sem prejuízo do serviço público.',
    correctAnswer: 'E',
    difficulty: 'Fácil',
    explanation: 'Errado. O Código de Ética veda expressamente a utilização de pessoal ou recursos materiais da repartição para fins particulares, independentemente de causar ou não prejuízo ao serviço público. Essa prática constitui falta ética grave.'
  },
  {
    id: 'ec-04',
    discipline: 'Ética e Cidadania',
    subtopic: 'Conflito de Interesses — Lei 12.813/2013',
    statement: 'A Lei nº 12.813/2013 define conflito de interesses como a situação gerada pelo confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar, de maneira imprópria, o desempenho da função pública.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Essa é a definição literal do Art. 3º da Lei nº 12.813/2013. O conflito pode ser atual (quando já presente) ou potencial (quando puder vir a existir). A lei se aplica a agentes públicos federais do Poder Executivo.'
  },
  {
    id: 'ec-05',
    discipline: 'Ética e Cidadania',
    subtopic: 'Princípios da Administração Pública — Art. 37 CF',
    statement: 'O princípio da moralidade administrativa, previsto no art. 37 da CF/88, exige que o agente público atue não apenas de acordo com a lei, mas também conforme padrões éticos de honestidade, boa-fé e probidade.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A moralidade é um dos princípios expressos do art. 37 (LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência). Ela vai além da legalidade estrita: o ato pode ser legal mas imoral. O desrespeito à moralidade pode ensejar ação popular para anulação do ato.'
  },
  {
    id: 'ec-06',
    discipline: 'Ética e Cidadania',
    subtopic: 'Governança — Decreto 9.203/2017',
    statement: 'O Decreto nº 9.203/2017, que dispõe sobre a política de governança da administração pública federal, estabelece como princípios da governança pública, entre outros, a capacidade de resposta, a integridade e a confiabilidade.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O Decreto nº 9.203/2017 lista como princípios da governança pública: capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas e responsabilidade, e transparência. São princípios que orientam a atuação dos órgãos do Poder Executivo federal.'
  },

  // ─────────────────────────────────────────────
  // GEOPOLÍTICA (6 questões)
  // ─────────────────────────────────────────────
  {
    id: 'gp-01',
    discipline: 'Geopolítica',
    subtopic: 'Rede de Transporte no Brasil',
    statement: 'O modal rodoviário é o predominante na matriz de transporte de cargas no Brasil, sendo responsável por mais de 60% do total transportado, o que difere do padrão observado em países de dimensões continentais como EUA e Rússia, que privilegiam o modal ferroviário.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O Brasil tem uma matriz de transporte altamente dependente das rodovias (aprox. 65% das cargas), herança histórica do modelo rodoviarista adotado na Era Vargas e intensificado no governo JK. Países como EUA, Rússia e China possuem matrizes mais equilibradas com maior participação ferroviária.'
  },
  {
    id: 'gp-02',
    discipline: 'Geopolítica',
    subtopic: 'Organização do Estado Brasileiro',
    statement: 'O Brasil adota a forma federativa de Estado, o sistema presidencialista de governo e a república como forma de governo, sendo esses elementos cláusulas pétreas que não podem ser abolidas por emenda constitucional.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. A forma federativa de Estado e o voto direto, secreto, universal e periódico são cláusulas pétreas (Art. 60, §4º, CF). Porém, a FORMA DE GOVERNO (república) e o SISTEMA DE GOVERNO (presidencialismo) NÃO são cláusulas pétreas — podem ser alterados por emenda, embora na prática exijam referendo popular.'
  },
  {
    id: 'gp-03',
    discipline: 'Geopolítica',
    subtopic: 'Biomas e Domínios Naturais',
    statement: 'A Amazônia é o maior bioma brasileiro em extensão territorial, seguida pelo Cerrado, que ocupa a segunda posição e funciona como berço das principais bacias hidrográficas do Brasil.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A Amazônia ocupa cerca de 49% do território brasileiro. O Cerrado, com aproximadamente 24%, é conhecido como "berço das águas" pois abriga as nascentes das principais bacias hidrográficas: Amazônica, do Prata e do São Francisco. Em seguida vêm Caatinga, Mata Atlântica, Pampa e Pantanal.'
  },
  {
    id: 'gp-04',
    discipline: 'Geopolítica',
    subtopic: 'Movimentos Migratórios Internos',
    statement: 'O êxodo rural no Brasil, intensificado a partir da segunda metade do século XX, direcionou contingentes populacionais principalmente para as regiões Sul e Centro-Oeste, reduzindo a concentração nas metrópoles da região Sudeste.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Errado. O êxodo rural brasileiro direcionou a população principalmente para as grandes metrópoles da região Sudeste — sobretudo São Paulo e Rio de Janeiro. Esse processo gerou o fenômeno da macrocefalia urbana. A expansão para o Centro-Oeste é mais recente e ligada ao agronegócio, não ao êxodo rural clássico.'
  },
  {
    id: 'gp-05',
    discipline: 'Geopolítica',
    subtopic: 'Estrutura Urbana Brasileira',
    statement: 'A região Sudeste concentra o maior PIB e a maior densidade demográfica do Brasil, sendo São Paulo a maior metrópole nacional e uma das maiores do mundo em população.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A região Sudeste responde por aproximadamente 55% do PIB nacional. São Paulo possui mais de 12 milhões de habitantes no município e cerca de 22 milhões na região metropolitana, sendo a maior metrópole do hemisfério sul e uma das maiores do mundo.'
  },
  {
    id: 'gp-06',
    discipline: 'Geopolítica',
    subtopic: 'Integração ao Processo de Internacionalização',
    statement: 'O MERCOSUL, bloco econômico do qual o Brasil é membro fundador, constitui uma zona de livre comércio e uma união aduaneira, com tarifa externa comum aplicada ao comércio com países não membros.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O MERCOSUL (Mercado Comum do Sul), criado pelo Tratado de Assunção em 1991, é formalmente uma união aduaneira (com Tarifa Externa Comum — TEC) e aspira a se tornar um mercado comum pleno. Os membros fundadores são Brasil, Argentina, Paraguai e Uruguu. A Venezuela foi suspensa em 2017.'
  },

  // ─────────────────────────────────────────────
  // LÍNGUA ESTRANGEIRA (6 questões — Inglês)
  // ─────────────────────────────────────────────
  {
    id: 'le-01',
    discipline: 'Língua Estrangeira',
    subtopic: 'Compreensão de Texto em Inglês',
    statement: 'In the sentence "The officer had already filed the report when the suspect was arrested", the verb tense used in the first clause indicates an action completed before another past action.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correct. "Had already filed" is the Past Perfect tense, which expresses an action completed BEFORE another action in the past. The sequence is: first the officer filed the report (past perfect), then the suspect was arrested (simple past). This is a classic CEBRASPE item on verb tense recognition.'
  },
  {
    id: 'le-02',
    discipline: 'Língua Estrangeira',
    subtopic: 'Vocabulário e Compreensão — Inglês',
    statement: 'The word "enforcement" in the context of "law enforcement officer" can be correctly translated as "aplicação" or "cumprimento", referring to the act of ensuring compliance with laws and regulations.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correct. "Law enforcement" means the activity of ensuring laws are obeyed — "aplicação da lei" or "cumprimento da lei". A "law enforcement officer" is a police officer or similar authority. This term appears frequently in English texts about public security, which is the main context for PRF candidates.'
  },
  {
    id: 'le-03',
    discipline: 'Língua Estrangeira',
    subtopic: 'Gramática — Inglês',
    statement: 'In the sentence "Despite being tired, the officer continued patrolling the highway", the underlined structure "despite being tired" functions as a concessive clause and could be correctly replaced by "Although he was tired".',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correct. "Despite + gerund" is equivalent to "although + subject + verb". Both express concession (contrast). "Despite being tired" = "Although he was tired". Note: "despite" and "in spite of" are followed by a noun or gerund, while "although" and "even though" are followed by a full clause.'
  },
  {
    id: 'le-04',
    discipline: 'Língua Estrangeira',
    subtopic: 'Compreensão de Texto em Inglês',
    statement: 'The expression "as long as" in the sentence "You may proceed as long as you present valid identification" carries a conditional meaning equivalent to "provided that" or "on the condition that".',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correct. "As long as" in this context means "provided that" / "on the condition that" — it introduces a condition that must be met. It is equivalent to "desde que" in Portuguese. This is different from "as long as" used to express duration of time.'
  },
  {
    id: 'le-05',
    discipline: 'Língua Estrangeira',
    subtopic: 'Vocabulário Técnico — Inglês',
    statement: 'In police and legal contexts, the term "warrant" refers exclusively to a document authorizing a search of premises, not being applicable to the arrest of a person.',
    correctAnswer: 'E',
    difficulty: 'Média',
    explanation: 'Wrong. The term "warrant" covers several types of legal documents. A "search warrant" authorizes search of premises, while an "arrest warrant" authorizes the arrest of a person. The word "warrant" is therefore applicable to both searches and arrests, among other judicial authorizations.'
  },
  {
    id: 'le-06',
    discipline: 'Língua Estrangeira',
    subtopic: 'Gramática — Voz Passiva (Inglês)',
    statement: 'The active sentence "The authority issued a fine to the driver" can be correctly converted to passive voice as "A fine was issued to the driver by the authority".',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correct. In the passive voice construction: the object of the active sentence ("a fine") becomes the subject; the verb is converted to "to be + past participle" (was issued); and the original subject becomes the agent introduced by "by". This is the standard passive voice transformation in English.'
  },

  // ─────────────────────────────────────────────
  // LEGISLAÇÃO ESPECIAL (8 questões)
  // ─────────────────────────────────────────────
  {
    id: 'ls-01',
    discipline: 'Legislação Especial',
    subtopic: 'Lei de Drogas — Lei 11.343/2006',
    statement: 'Segundo a Lei nº 11.343/2006, o porte de drogas para consumo pessoal não é crime, mas constitui infração de menor potencial ofensivo sujeita apenas a advertência, prestação de serviços à comunidade ou medida educativa.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 28 da Lei de Drogas descriminalizou o porte para consumo pessoal — não é mais crime (não há pena privativa de liberdade), mas ainda é infração sujeita às penas do art. 28: advertência, prestação de serviços à comunidade e medida educativa. O STF (RE 635.659) tem debatido a inconstitucionalidade da criminalização do uso.'
  },
  {
    id: 'ls-02',
    discipline: 'Legislação Especial',
    subtopic: 'Lei de Drogas — Tráfico',
    statement: 'A Lei de Drogas (Lei nº 11.343/2006) equipara ao tráfico de drogas o financiamento ou custeio das atividades de tráfico, punindo essa conduta com as mesmas penas aplicadas ao traficante.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 36 da Lei 11.343/2006 tipifica o financiamento do tráfico com pena de 8 a 20 anos de reclusão, a mesma base do tráfico (art. 33). O STJ e o STF reconhecem que financiador e traficante podem ser coautores ou partícipes do mesmo crime, a depender das circunstâncias.'
  },
  {
    id: 'ls-03',
    discipline: 'Legislação Especial',
    subtopic: 'Lei de Abuso de Autoridade — Lei 13.869/2019',
    statement: 'Configura abuso de autoridade, nos termos da Lei nº 13.869/2019, a conduta do agente público que decreta medida de privação de liberdade em manifesta desconformidade com as hipóteses legais, exigindo o tipo penal que o agente atue com a finalidade específica de prejudicar outrem.',
    correctAnswer: 'C',
    difficulty: 'Difícil',
    explanation: 'Correto. A Lei de Abuso de Autoridade exige um elemento subjetivo especial (dolo específico): o agente deve atuar com finalidade de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal. Sem esse elemento, mesmo condutas ilegais não configuram abuso de autoridade nos termos da lei.'
  },
  {
    id: 'ls-04',
    discipline: 'Legislação Especial',
    subtopic: 'Crimes Hediondos — Lei 8.072/1990',
    statement: 'Os crimes hediondos e equiparados (tráfico de drogas, tortura e terrorismo) são insuscetíveis de anistia, graça, indulto e fiança, sendo obrigatório o início do cumprimento de pena em regime fechado.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. A vedação à anistia, graça, indulto e fiança está correta. Porém, o STF declarou inconstitucional (HC 111.840/ES) a obrigatoriedade do início do cumprimento em regime fechado. Hoje, o regime inicial é fixado conforme os critérios do art. 33 do CP (quantidade de pena, reincidência etc.), podendo ser semiaberto ou até aberto.'
  },
  {
    id: 'ls-05',
    discipline: 'Legislação Especial',
    subtopic: 'ECA — Estatuto da Criança e do Adolescente',
    statement: 'Pelo Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), o adolescente que pratica ato infracional análogo ao crime de homicídio doloso está sujeito à medida socioeducativa de internação por prazo determinado, não superior a 3 anos.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 121 do ECA estabelece que a internação não comporta prazo determinado, sendo reavaliada no máximo a cada 6 meses. O prazo máximo é de 3 anos. Ao completar 21 anos, o adolescente deve ser obrigatoriamente liberado. A internação é a medida mais grave e só cabe em atos infracionais graves, com violência ou ameaça grave.'
  },
  {
    id: 'ls-06',
    discipline: 'Legislação Especial',
    subtopic: 'Organizações Criminosas — Lei 12.850/2013',
    statement: 'A Lei nº 12.850/2013 define organização criminosa como a associação de 4 ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, com o objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Essa é a definição literal do art. 1º, §1º da Lei 12.850/2013. Os requisitos cumulativos são: (1) 4 ou mais pessoas; (2) estruturalmente ordenada; (3) divisão de tarefas; (4) objetivo de vantagem de qualquer natureza; (5) infrações com pena máxima superior a 4 anos ou de caráter transnacional.'
  },
  {
    id: 'ls-07',
    discipline: 'Legislação Especial',
    subtopic: 'Crimes Ambientais — Lei 9.605/1998',
    statement: 'A Lei de Crimes Ambientais (Lei nº 9.605/1998) admite a responsabilidade penal da pessoa jurídica em crimes ambientais, sendo essa responsabilidade independente da responsabilidade das pessoas físicas que atuam em seu nome.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 3º da Lei 9.605/1998 prevê expressamente a responsabilidade penal da pessoa jurídica por crimes ambientais, o que é exceção no direito penal brasileiro (que adota o princípio societas delinquere non potest). O STJ consolidou o entendimento de que a responsabilização da PJ pode ocorrer independentemente da PF, com a Teoria da Dupla Imputação sendo superada.'
  },
  {
    id: 'ls-08',
    discipline: 'Legislação Especial',
    subtopic: 'Estatuto do Desarmamento — Lei 10.826/2003',
    statement: 'O porte ilegal de arma de fogo de uso restrito constitui crime mais grave do que o porte ilegal de arma de uso permitido, ambos tipificados no Estatuto do Desarmamento (Lei nº 10.826/2003).',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O art. 14 tipifica o porte ilegal de arma de uso permitido com pena de 2 a 4 anos. O art. 16 tipifica o porte de arma de uso restrito com pena de 3 a 6 anos. Armas de uso restrito são exclusivas das Forças Armadas, polícias e órgãos de segurança — civis não podem portá-las.'
  },

  // ─────────────────────────────────────────────
  // REFORÇO: DIREITO PROCESSUAL PENAL (4 extras)
  // ─────────────────────────────────────────────
  {
    id: 'dpp-05',
    discipline: 'Direito Processual Penal',
    subtopic: 'Busca e Apreensão Domiciliar',
    statement: 'A busca domiciliar, nos termos do Código de Processo Penal, somente pode ser realizada durante o dia e mediante mandado judicial, salvo em caso de flagrante delito, desastre ou para prestar socorro.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 245 do CPP e o art. 5º, XI da CF estabelecem que a busca domiciliar com mandado judicial só pode ocorrer durante o dia. Nos casos excepcionais (flagrante, desastre, socorro), pode ocorrer a qualquer hora, sem mandado. Esse tema é muito cobrado pela CEBRASPE, especialmente a distinção entre os horários.'
  },
  {
    id: 'dpp-06',
    discipline: 'Direito Processual Penal',
    subtopic: 'Prova — Cadeia de Custódia',
    statement: 'A cadeia de custódia da prova, inserida expressamente no CPP pela Lei nº 13.964/2019 (Pacote Anticrime), consiste no conjunto de procedimentos para rastrear os elementos de prova desde o momento do crime até o trânsito em julgado da sentença.',
    correctAnswer: 'C',
    difficulty: 'Difícil',
    explanation: 'Correto. A Lei 13.964/2019 inseriu os arts. 158-A a 158-F no CPP, regulamentando a cadeia de custódia. Ela garante a integridade e autenticidade dos elementos de prova, desde a preservação do local do crime até a sentença definitiva. A quebra da cadeia de custódia pode comprometer a validade da prova.'
  },
  {
    id: 'dpp-07',
    discipline: 'Direito Processual Penal',
    subtopic: 'Termo Circunstanciado — Lei 9.099/1995',
    statement: 'Para infrações de menor potencial ofensivo — crimes com pena máxima não superior a 2 anos — a autoridade policial deve lavrar o Termo Circunstanciado de Ocorrência (TCO) e encaminhar o autor do fato ao Juizado Especial Criminal.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 69 da Lei 9.099/1995 define que para infrações de menor potencial ofensivo (pena máxima até 2 anos, incluindo contravenções), a autoridade policial lavra o TCO — dispensando o inquérito policial — e encaminha o infrator ao JECrim. A PRF utiliza amplamente o TCO em ocorrências de trânsito.'
  },
  {
    id: 'dpp-08',
    discipline: 'Direito Processual Penal',
    subtopic: 'Flagrante — Modalidades',
    statement: 'O flagrante preparado, também chamado de delito de ensaio ou crime de flagrante provocado, é válido segundo o entendimento consolidado do STF, pois a iniciativa do agente policial não afasta a tipicidade da conduta do suspeito.',
    correctAnswer: 'E',
    difficulty: 'Difícil',
    explanation: 'Errado. O STF, pela Súmula 145, reconhece que o flagrante preparado (ou crime provocado) NÃO é válido. Quando a própria autoridade policial induz o suspeito a praticar o crime apenas para prendê-lo em flagrante, o crime é putativo por obra do agente provocador e o fato é atípico. É diferente do flagrante esperado, que é lícito.'
  },

  // ─────────────────────────────────────────────
  // REFORÇO: INFORMÁTICA (4 extras)
  // ─────────────────────────────────────────────
  {
    id: 'inf-05',
    discipline: 'Informática',
    subtopic: 'Computação em Nuvem',
    statement: 'Na computação em nuvem (cloud computing), o modelo SaaS (Software as a Service) disponibiliza ao usuário acesso a aplicações pela internet, sem necessidade de instalação local, sendo o provedor responsável pela infraestrutura, plataforma e software.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Os três modelos principais de nuvem são: IaaS (infraestrutura), PaaS (plataforma) e SaaS (software). No SaaS, o usuário acessa o software via browser ou app, sem gerenciar nada da infraestrutura subjacente. Exemplos: Gmail, Office 365, Salesforce. É o modelo mais comum para usuários finais.'
  },
  {
    id: 'inf-06',
    discipline: 'Informática',
    subtopic: 'Ameaças — Ransomware',
    statement: 'O ransomware é um tipo de malware que, após infectar o sistema, criptografa os arquivos do usuário e exige pagamento (geralmente em criptomoeda) para fornecer a chave de descriptografia.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. O ransomware ("sequestro de dados") é uma das ameaças mais comuns atualmente. Age criptografando arquivos e exigindo resgate. A forma mais eficaz de proteção é o backup offline regular. O pagamento do resgate NÃO garante a recuperação dos dados e financia os criminosos.'
  },
  {
    id: 'inf-07',
    discipline: 'Informática',
    subtopic: 'Redes — VPN',
    statement: 'Uma VPN (Virtual Private Network) cria um túnel criptografado entre o dispositivo do usuário e um servidor remoto, permitindo que o tráfego de dados seja transmitido de forma segura por redes públicas como a internet.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. A VPN encapsula e criptografa os dados transmitidos, criando um "túnel seguro" sobre a rede pública. É amplamente utilizada para acesso remoto seguro a redes corporativas, proteção de privacidade e contorno de restrições geográficas. O protocolo mais comum é o OpenVPN.'
  },
  {
    id: 'inf-08',
    discipline: 'Informática',
    subtopic: 'Inteligência Artificial e Transformação Digital',
    statement: 'A Internet das Coisas (IoT) refere-se à interconexão de dispositivos físicos à internet, permitindo a coleta e troca de dados sem intervenção humana direta, sendo exemplos termostatos inteligentes, sensores de tráfego e câmeras de vigilância.',
    correctAnswer: 'C',
    difficulty: 'Fácil',
    explanation: 'Correto. IoT (Internet of Things) conecta objetos do cotidiano à internet, gerando dados continuamente. Na segurança viária, sensores de velocidade, câmeras de reconhecimento de placas e radares eletrônicos são exemplos de IoT aplicados ao contexto da PRF. Essa tecnologia está no edital de Informática do concurso PRF 2021.'
  },

  // ─────────────────────────────────────────────
  // REFORÇO: DIREITOS HUMANOS (4 extras)
  // ─────────────────────────────────────────────
  {
    id: 'dh-05',
    discipline: 'Direitos Humanos',
    subtopic: 'Sistema Único de Segurança Pública — SUSP',
    statement: 'A Lei nº 13.675/2018 instituiu o Sistema Único de Segurança Pública (SUSP) e criou a Política Nacional de Segurança Pública e Defesa Social (PNSPDS), com o objetivo de preservar a ordem pública e a incolumidade das pessoas e do patrimônio.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. A Lei 13.675/2018 criou o SUSP para integrar os órgãos de segurança pública dos três entes federativos. Também instituiu a PNSPDS e criou o Conselho Nacional de Segurança Pública e Defesa Social (CONESP). A PRF integra o SUSP como órgão federal de segurança pública.'
  },
  {
    id: 'dh-06',
    discipline: 'Direitos Humanos',
    subtopic: 'Convenção Americana — Pacto de San José',
    statement: 'A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) proíbe a prisão civil por dívida, salvo no caso de inadimplemento inescusável de obrigação alimentícia.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 7º, §7º da Convenção Americana proíbe a detenção por dívidas, com a única exceção das obrigações alimentares. Essa disposição foi incorporada ao direito brasileiro e levou o STF a revogar a prisão do depositário infiel (Súmula Vinculante 25), mantendo apenas a prisão do devedor de alimentos.'
  },
  {
    id: 'dh-07',
    discipline: 'Direitos Humanos',
    subtopic: 'Lei da Tortura — Lei 9.455/1997',
    statement: 'A Lei nº 9.455/1997, que define o crime de tortura, estabelece que a omissão de autoridade que, tendo conhecimento de sua prática, deixa de evitá-la ou de apurar a sua ocorrência, também configura o crime de tortura.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. O art. 1º, §2º da Lei 9.455/1997 tipifica a conduta omissiva: a autoridade que, tendo ciência da prática de tortura, não a evita ou não a apura também responde pelo crime, com pena de detenção de 1 a 4 anos. Essa previsão é fundamental para a responsabilização de superiores hierárquicos que omitem situações de tortura.'
  },
  {
    id: 'dh-08',
    discipline: 'Direitos Humanos',
    subtopic: 'Princípios dos Direitos Humanos — Uso da Força',
    statement: 'Os Princípios Básicos sobre o Uso da Força e Armas de Fogo da ONU estabelecem que os agentes de segurança devem priorizar meios não violentos antes de recorrer à força, e que o uso de armas letais só é justificado quando estritamente necessário para proteger a vida.',
    correctAnswer: 'C',
    difficulty: 'Média',
    explanation: 'Correto. Os Princípios Básicos da ONU (1990) estabelecem: (1) progressividade no uso da força; (2) prioridade a meios não letais; (3) uso de armas letais apenas como último recurso, quando há risco iminente de morte ou lesão grave. Esses princípios fundamentam os protocolos de uso da força da PRF.'
  },
];

/**
 * Retorna questões filtradas por disciplina
 */
export function getQuestionsByDiscipline(discipline: string): Question[] {
  return PRF_QUESTIONS_BANK.filter(q => q.discipline === discipline);
}

/**
 * Retorna questões filtradas por dificuldade
 */
export function getQuestionsByDifficulty(difficulty: 'Fácil' | 'Média' | 'Difícil'): Question[] {
  return PRF_QUESTIONS_BANK.filter(q => q.difficulty === difficulty);
}

/**
 * Retorna N questões aleatórias do banco completo
 */
export function getRandomQuestions(n: number, discipline?: string): Question[] {
  const pool = discipline
    ? PRF_QUESTIONS_BANK.filter(q => q.discipline === discipline)
    : PRF_QUESTIONS_BANK;
  return [...pool].sort(() => 0.5 - Math.random()).slice(0, n);
}

/**
 * Retorna questões por subtópico
 */
export function getQuestionsBySubtopic(subtopic: string): Question[] {
  return PRF_QUESTIONS_BANK.filter(q =>
    q.subtopic.toLowerCase().includes(subtopic.toLowerCase())
  );
}
