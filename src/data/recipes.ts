import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: 'camarao-brocolis',
    title: 'Camarão com Brócolis ao Alho',
    category: 'Proteínas',
    ingredients: [
      '100g de camarão selvagem ou fresco (não cozido, sem casca e desvenado)',
      '100g de brócolis',
      '3 dentes de alho picados',
      'Suco de 1/2 limão',
      'Sal do Himalaia a gosto',
      'Pimenta preta ralada a gosto',
      'Água'
    ],
    instructions: [
      'Tempere os camarões com sal, pimenta e suco de limão. Deixe marinar por alguns minutos.',
      'Cozinhe os brócolis no vapor ou em água fervente por 5-7 minutos.',
      'Em uma frigideira antiaderente, adicione os dentes de alho picados e água.',
      'Cozinhe o alho até liberar aroma.',
      'Adicione os camarões e cozinhe por 2-3 minutos de cada lado.',
      'Adicione os brócolis e misture bem.',
      'Ajuste os temperos e sirva.'
    ],
    tips: ['Para um toque extra de sabor, adicione raspas de limão antes de servir.']
  },
  {
    id: 'sopa-camarao-espinafre',
    title: 'Sopa de Camarão com Espinafres',
    category: 'Sopas',
    ingredients: [
      '100g de camarão selvagem limpo',
      '100g de espinafres frescos',
      '1 dente de alho picado',
      '50g tomate médio picado',
      'Suco de 1/2 limão',
      'Sal a gosto',
      'Pimenta a gosto',
      'Ervas finas a gosto',
      '1 litro de água'
    ],
    instructions: [
      'Tempere os camarões com sal, pimenta e suco de limão. Reserve.',
      'Em uma panela grande, adicione a água e leve ao fogo médio.',
      'Adicione o alho picado e o tomate picado à panela.',
      'Deixe a água ferver e cozinhe até que o tomate esteja macio.',
      'Adicione os camarões à sopa e cozinhe por 5-7 minutos.',
      'Adicione os espinafres frescos e cozinhe por mais 2-3 minutos.',
      'Tempere com ervas finas e ajuste o sal e a pimenta.'
    ]
  },
  {
    id: 'camarao-courgette',
    title: 'Camarão com Courgette e Açafrão',
    category: 'Proteínas',
    ingredients: [
      '100g de camarão selvagem ou fresco',
      '100g de courgette (abobrinha)',
      '3 dentes de alho picados',
      '1 colher de chá de açafrão ralado',
      'Suco de 1/2 limão',
      'Sal do Himalaia a gosto',
      'Pimenta preta ralada a gosto',
      'Água'
    ],
    instructions: [
      'Tempere os camarões com sal, pimenta e suco de limão.',
      'Corte a courgette em rodelas ou tiras.',
      'Em uma frigideira, adicione os dentes de alho picados e água.',
      'Cozinhe o alho até liberar aroma.',
      'Adicione a courgette e cozinhe por 3-4 minutos.',
      'Adicione o açafrão ralado e misture bem.',
      'Adicione os camarões e cozinhe por 2-3 minutos de cada lado.'
    ],
    tips: ['Para um toque extra de sabor, adicione raspas de limão antes de servir.']
  },
  {
    id: 'maca-canela-airfryer',
    title: 'Maçã com Canela na Air Fryer',
    category: 'Sobremesas',
    ingredients: [
      '1 maçã grande',
      '1 colher de chá de canela em pó',
      '1 copo de água'
    ],
    instructions: [
      'Lave bem a maçã, mantendo a casca e os caroços.',
      'Polvilhe a canela em pó sobre a superfície da maçã.',
      'Coloque um copo de água no fundo da air fryer.',
      'Pré-aqueça a air fryer a 180°C por cerca de 3 minutos.',
      'Coloque a maçã inteira na cesta da air fryer.',
      'Cozinhe a 180°C por aproximadamente 30-40 minutos, ou até que a maçã esteja macia.',
      'Verifique se a maçã está macia espetando-a com um garfo.',
      'Retire a maçã da air fryer e deixe esfriar um pouco antes de servir.'
    ],
    tips: ['Se desejar, você pode adicionar uma pitada extra de canela sobre a maçã após o cozimento para intensificar o sabor.']
  },
  {
    id: 'chips-maca',
    title: 'Chips de Maçã Assada',
    category: 'Snacks',
    ingredients: [
      '1 maçã média',
      '1/2 colher de chá de canela em pó (opcional)'
    ],
    instructions: [
      'Lave bem a maçã.',
      'Fatie a maçã em rodelas finas, de preferência usando um mandolim para obter fatias uniformes.',
      'Se desejar, polvilhe a canela em pó sobre as fatias de maçã.',
      'Pré-aqueça o forno a 120°C.',
      'Disponha as fatias de maçã diretamente em uma assadeira antiaderente, sem sobreposição.',
      'Asse por cerca de 30 minutos, depois vire as fatias.',
      'Asse por mais 30 minutos, ou até que as maçãs estejam secas e crocantes.',
      'Deixe esfriar completamente antes de servir.'
    ],
    tips: ['As chips ficarão mais crocantes à medida que esfriam.']
  },
  {
    id: 'sumo-detox-energetico',
    title: 'Sumo Detox Energético',
    category: 'Bebidas',
    ingredients: [
      '15g de pepino',
      '5g de aipo',
      '1/2 maçã verde (sem sementes)',
      '1 punhado de folhas de espinafre',
      'Suco de 1/2 limão',
      '5g de gengibre fresco (opcional)',
      'Água gelada (opcional, para ajustar a consistência)'
    ],
    instructions: [
      'Lave bem todos os ingredientes.',
      'Corte o pepino, o talo de aipo e a maçã verde em pedaços pequenos.',
      'Descasque e pique o gengibre, se estiver usando.',
      'Coloque todos os ingredientes no liquidificador.',
      'Bata bem até obter uma mistura homogênea.',
      'Se necessário, adicione água gelada para ajustar a consistência.'
    ],
    tips: ['Sirva imediatamente para aproveitar todos os nutrientes.']
  },
  {
    id: 'sumo-detox-laxante',
    title: 'Sumo Detox Laxante Natural',
    category: 'Bebidas',
    ingredients: [
      '1/2 maçã verde (com sementes)',
      '15g de pepino (com sementes)',
      '1 dente de alho',
      '1 punhado de folhas de espinafre',
      '1/2 limão',
      '10g de raiz de açafrão',
      'Água gelada (opcional)'
    ],
    instructions: [
      'Lave bem todos os ingredientes.',
      'Corte a maçã, o pepino e o alho em pedaços pequenos.',
      'Descasque e pique a raiz de açafrão.',
      'Coloque todos os ingredientes no liquidificador, incluindo o limão com casca.',
      'Bata bem até obter uma mistura homogênea.',
      'Se necessário, adicione água gelada para ajustar a consistência.'
    ],
    tips: ['Beba imediatamente após o preparo para maior eficácia.']
  },
  {
    id: 'cha-hortela',
    title: 'Chá de Hortelã',
    category: 'Chás',
    ingredients: [
      '1 punhado de folhas frescas de hortelã',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas de hortelã à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.',
      'Evite consumir junto às refeições para não diluir os sucos gástricos.'
    ],
    notes: 'Não ultrapasse 1 litro por dia para não sobrecarregar os rins.',
    benefits: [
      'Ajuda na digestão e alivia inchaço',
      'Propriedades calmantes que ajudam a relaxar'
    ]
  },
  {
    id: 'cha-camomila',
    title: 'Chá de Camomila',
    category: 'Chás',
    ingredients: [
      '2 colheres de chá de flores de camomila secas',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as flores de camomila à água fervente.',
      'Deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara antes de dormir para relaxar e melhorar o sono.'
    ],
    benefits: [
      'Propriedades calmantes e anti-inflamatórias',
      'Alivia ansiedade e melhora o sono'
    ]
  },
  {
    id: 'cha-erva-cidreira',
    title: 'Chá de Erva-cidreira',
    category: 'Chás',
    ingredients: [
      '1 punhado de folhas frescas de erva-cidreira',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas de erva-cidreira à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara à tarde para reduzir a ansiedade e melhorar a digestão.'
    ],
    benefits: [
      'Reduz ansiedade e melhora a digestão',
      'Propriedades calmantes'
    ]
  },
  {
    id: 'cha-gengibre-limao',
    title: 'Chá de Gengibre com Limão',
    category: 'Chás',
    ingredients: [
      '10g de gengibre fresco, fatiado',
      'Suco de 1 limão',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione o gengibre à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Adicione o sumo de limão e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.'
    ],
    benefits: [
      'Estimula o metabolismo',
      'Possui propriedades anti-inflamatórias',
      'Ajuda na digestão'
    ]
  },
  {
    id: 'cha-verde',
    title: 'Chá Verde',
    category: 'Chás',
    ingredients: [
      '2 colheres de chá de folhas de chá verde',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água e deixe esfriar ligeiramente.',
      'Adicione as folhas de chá verde à água quente.',
      'Tampe e deixe em infusão por 2-3 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.',
      'Evite consumir junto às refeições para não diluir os sucos gástricos.'
    ],
    benefits: [
      'Rico em antioxidantes',
      'Ajuda na queima de gordura',
      'Melhora a função cerebral'
    ]
  },
  {
    id: 'cha-cavalinha',
    title: 'Chá de Cavalinha',
    category: 'Chás',
    ingredients: [
      '2 colheres de chá de folhas secas de cavalinha',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas de cavalinha à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.'
    ],
    benefits: [
      'Diurético natural',
      'Ajuda a eliminar toxinas',
      'Rico em minerais'
    ]
  },
  {
    id: 'cha-hibisco',
    title: 'Chá de Hibisco',
    category: 'Chás',
    ingredients: [
      '2 colheres de chá de flores de hibisco',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as flores de hibisco à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.'
    ],
    benefits: [
      'Ajuda na digestão',
      'Auxilia na eliminação de líquidos',
      'Rico em antioxidantes'
    ]
  },
  {
    id: 'cha-dente-leao',
    title: 'Chá de Dente-de-leão',
    category: 'Chás',
    ingredients: [
      '2 colheres de chá de folhas secas de dente-de-leão',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas secas de dente-de-leão à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.'
    ],
    benefits: [
      'Diurético e desintoxicante',
      'Melhora a função hepática',
      'Rico em vitaminas e minerais'
    ]
  },
  {
    id: 'cha-salsa',
    title: 'Chá de Salsa',
    category: 'Chás',
    ingredients: [
      '1 punhado de folhas frescas de salsa',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas de salsa à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.'
    ],
    benefits: [
      'Diurético natural',
      'Ajuda a eliminar o excesso de líquidos',
      'Rico em vitamina C'
    ]
  },
  {
    id: 'cha-louro',
    title: 'Chá de Folhas de Louro',
    category: 'Chás',
    ingredients: [
      '5 folhas de louro frescas',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas de louro à água fervente.',
      'Tampe e deixe em infusão por 10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.',
      'Evite consumir junto às refeições para não diluir os sucos gástricos.'
    ],
    benefits: [
      'Ajuda na digestão e alivia gases',
      'Propriedades anti-inflamatórias e antioxidantes',
      'Ajuda a regular os níveis de açúcar no sangue'
    ]
  },
  {
    id: 'cha-oregano',
    title: 'Chá de Orégano',
    category: 'Chás',
    ingredients: [
      '1-2 colheres de sopa de folhas de orégano secas ou frescas',
      '1 litro de água'
    ],
    instructions: [
      'Ferva 1 litro de água.',
      'Adicione as folhas de orégano à água fervente.',
      'Tampe e deixe em infusão por 5-10 minutos.',
      'Coe e deixe esfriar.'
    ],
    tips: [
      'Divida o chá em 3-4 porções para consumir ao longo do dia.',
      'Tome 1 xícara 30 minutos antes ou depois das refeições principais.',
      'Evite consumir junto às refeições para não diluir os sucos gástricos.'
    ],
    benefits: [
      'Propriedades antimicrobianas e antioxidantes',
      'Ajuda na digestão e alivia desconfortos gastrointestinais',
      'Pode ajudar a reduzir inflamações'
    ]
  },
  {
    id: 'sumo-detox-beterraba',
    title: 'Sumo Detox de Beterraba',
    category: 'Bebidas',
    ingredients: [
      '1 beterraba pequena',
      '1 cenoura média',
      '1 maçã verde',
      '1 raiz de açafrão',
      '2 folhas de couve',
      '1 ramo de alecrim',
      '5 gramas de canela em pó (biológica)',
      'Água gelada (opcional)'
    ],
    instructions: [
      'Lave bem todos os ingredientes.',
      'Corte os vegetais em pedaços pequenos.',
      'Descasque e pique a raiz de açafrão.',
      'Coloque todos os ingredientes no liquidificador.',
      'Bata bem até obter uma mistura homogênea.',
      'Se necessário, adicione água gelada para ajustar a consistência.'
    ],
    tips: [
      'Beba imediatamente após o preparo para aproveitar todos os nutrientes.',
      'Não coe o suco para manter as fibras.'
    ],
    benefits: [
      'Rico em antioxidantes',
      'Fortalece o sistema imunológico',
      'Auxilia na desintoxicação do organismo'
    ]
  },
  {
    id: 'frango-grelhado-limao',
    title: 'Peito de Frango Grelhado ao Limão',
    category: 'Proteínas',
    ingredients: [
      '100g de peito de frango sem pele',
      'Suco de 1 limão',
      '2 dentes de alho picados',
      'Sal do Himalaia a gosto',
      'Pimenta preta moída na hora a gosto',
      'Ervas finas a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o peito de frango com sal, pimenta, alho e suco de limão.',
      'Deixe marinar por 15 minutos.',
      'Em uma frigideira antiaderente, adicione um pouco de água.',
      'Grelhe o frango por aproximadamente 5-7 minutos de cada lado.',
      'Adicione as ervas finas no final do preparo.'
    ],
    tips: [
      'Certifique-se de que o frango esteja bem cozido antes de servir.',
      'Pode ser servido com salada de folhas verdes.'
    ]
  },
  {
    id: 'peixe-vapor-ervas',
    title: 'Peixe ao Vapor com Ervas',
    category: 'Proteínas',
    ingredients: [
      '100g de filé de peixe branco',
      'Suco de 1/2 limão',
      '1 dente de alho picado',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água para o vapor'
    ],
    instructions: [
      'Tempere o peixe com sal, pimenta, alho e suco de limão.',
      'Coloque água em uma panela com cesto para vapor.',
      'Quando a água ferver, coloque o peixe no cesto.',
      'Cozinhe por 8-10 minutos ou até que o peixe esteja opaco e se desfaça facilmente.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'O tempo de cozimento pode variar dependendo da espessura do filé.',
      'Evite cozinhar demais para manter o peixe suculento.'
    ]
  },
  {
    id: 'carne-grelhada-alho',
    title: 'Carne Grelhada ao Alho',
    category: 'Proteínas',
    ingredients: [
      '100g de carne magra (patinho ou alcatra)',
      '3 dentes de alho picados',
      'Sal do Himalaia a gosto',
      'Pimenta preta moída na hora',
      'Água',
      'Ervas finas a gosto'
    ],
    instructions: [
      'Tempere a carne com sal, pimenta e alho.',
      'Deixe descansar por 10 minutos.',
      'Em uma frigideira antiaderente, adicione um pouco de água.',
      'Grelhe a carne pelo tempo desejado (3-4 minutos cada lado para ao ponto).',
      'Finalize com ervas finas.'
    ],
    tips: [
      'Retire a carne da geladeira 30 minutos antes do preparo.',
      'Deixe a carne descansar por 5 minutos antes de cortar.'
    ]
  },
  {
    id: 'omelete-ervas',
    title: 'Omelete de Ervas',
    category: 'Proteínas',
    ingredients: [
      '3 ovos',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Bata os ovos em uma tigela.',
      'Adicione sal, pimenta e as ervas picadas.',
      'Aqueça uma frigideira antiaderente com um pouco de água.',
      'Despeje os ovos batidos.',
      'Cozinhe em fogo médio-baixo até firmar.',
      'Dobre ao meio e sirva.'
    ],
    tips: [
      'Não bata os ovos em excesso para manter a omelete macia.',
      'Use uma espátula de silicone para não riscar a frigideira.'
    ]
  },
  {
    id: 'salada-atum-fresco',
    title: 'Salada de Atum Fresco Grelhado',
    category: 'Proteínas',
    ingredients: [
      '100g de atum fresco',
      'Folhas verdes variadas',
      'Suco de 1 limão',
      '1 dente de alho picado',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Ervas finas a gosto'
    ],
    instructions: [
      'Tempere o atum com sal, pimenta, alho e metade do suco de limão.',
      'Grelhe o atum em uma frigideira antiaderente com um pouco de água.',
      'Cozinhe por 2-3 minutos de cada lado para manter o centro rosado.',
      'Monte a salada com as folhas verdes.',
      'Fatie o atum e disponha sobre as folhas.',
      'Finalize com o restante do suco de limão e ervas.'
    ],
    tips: [
      'O atum pode ser servido mais ou menos cozido conforme preferência.',
      'Mantenha o centro rosado para maior suculência.'
    ]
  },
  {
    id: 'frango-ervas-finas',
    title: 'Frango com Ervas Finas',
    category: 'Proteínas',
    ingredients: [
      '100g de peito de frango sem pele',
      '1 colher de sopa de ervas finas',
      '2 dentes de alho picados',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o frango com sal, pimenta, alho e metade das ervas finas.',
      'Deixe marinar por 15 minutos.',
      'Em uma frigideira antiaderente, adicione um pouco de água.',
      'Grelhe o frango por 5-7 minutos de cada lado.',
      'Finalize com o restante das ervas finas.'
    ],
    tips: [
      'Corte o frango em fatias finas para um cozimento mais uniforme.',
      'Verifique se está bem cozido antes de servir.'
    ]
  },
  {
    id: 'salada-aspargos-grelhados',
    title: 'Salada de Aspargos Grelhados',
    category: 'Vegetais',
    ingredients: [
      '100g de aspargos frescos',
      'Folhas verdes variadas',
      'Suco de 1/2 limão',
      '1 dente de alho picado',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Lave bem os aspargos e retire a parte dura da base.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Grelhe os aspargos por 3-4 minutos, virando ocasionalmente.',
      'Monte a salada com as folhas verdes.',
      'Disponha os aspargos grelhados por cima.',
      'Tempere com sal, pimenta e suco de limão.'
    ],
    tips: [
      'Os aspargos devem ficar al dente.',
      'Pode ser servido quente ou frio.'
    ]
  },
  {
    id: 'file-pescada-ervas',
    title: 'Filé de Pescada com Ervas',
    category: 'Proteínas',
    ingredients: [
      '100g de filé de pescada',
      'Suco de 1/2 limão',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o peixe com sal, pimenta, alho e suco de limão.',
      'Em uma frigideira antiaderente, adicione um pouco de água.',
      'Cozinhe o peixe por 4-5 minutos de cada lado.',
      'Adicione as ervas picadas no final do cozimento.',
      'Sirva imediatamente.'
    ],
    tips: [
      'O peixe deve estar opaco e se desfazer facilmente quando pronto.',
      'Evite mexer muito durante o cozimento para não quebrar o filé.'
    ]
  },
  {
    id: 'sopa-legumes',
    title: 'Sopa de Legumes',
    category: 'Sopas',
    ingredients: [
      '1 abobrinha média',
      '2 talos de aipo',
      '1 tomate médio',
      '1 cenoura média',
      '2 folhas de couve',
      '1 dente de alho',
      'Salsinha a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      '1 litro de água'
    ],
    instructions: [
      'Lave e corte todos os legumes em pedaços pequenos.',
      'Em uma panela, coloque a água e leve ao fogo.',
      'Adicione todos os legumes e o alho.',
      'Cozinhe em fogo médio por 15-20 minutos.',
      'Tempere com sal e pimenta.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'Os legumes devem ficar al dente.',
      'Pode ser consumida quente ou fria.'
    ]
  },
  {
    id: 'salada-rucula-tomate',
    title: 'Salada de Rúcula com Tomate Cherry',
    category: 'Saladas',
    ingredients: [
      '2 xícaras de folhas de rúcula',
      '8 tomates cherry',
      'Suco de 1/2 limão',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Lave bem as folhas de rúcula e os tomates.',
      'Corte os tomates ao meio.',
      'Monte a salada com a rúcula e os tomates.',
      'Tempere com sal, pimenta e suco de limão.'
    ],
    tips: [
      'Sirva imediatamente após temperar.',
      'Pode adicionar ervas frescas a gosto.'
    ]
  },
  {
    id: 'couve-flor-vapor',
    title: 'Couve-flor ao Vapor com Ervas',
    category: 'Vegetais',
    ingredients: [
      '100g de couve-flor',
      '1 dente de alho picado',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água para o vapor'
    ],
    instructions: [
      'Separe a couve-flor em floretes pequenos.',
      'Coloque água em uma panela com cesto para vapor.',
      'Quando a água ferver, coloque a couve-flor no cesto.',
      'Cozinhe por 8-10 minutos ou até ficar al dente.',
      'Tempere com sal, pimenta, alho e salsinha.'
    ],
    tips: [
      'Não cozinhe demais para manter a textura crocante.',
      'Pode ser servida quente ou fria.'
    ]
  },
  {
    id: 'berinjela-grelhada',
    title: 'Berinjela Grelhada',
    category: 'Vegetais',
    ingredients: [
      '1 berinjela média',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Corte a berinjela em rodelas de 1cm.',
      'Tempere com sal e deixe descansar por 10 minutos.',
      'Enxágue e seque bem as rodelas.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Grelhe as rodelas por 3-4 minutos de cada lado.',
      'Tempere com pimenta e salsinha.'
    ],
    tips: [
      'Deixar a berinjela descansar com sal ajuda a remover o amargor.',
      'Não adicione muito líquido para conseguir dourar bem.'
    ]
  },
  {
    id: 'sopa-espinafre',
    title: 'Sopa de Espinafre',
    category: 'Sopas',
    ingredients: [
      '2 maços de espinafre',
      '1 cenoura média',
      '1 talo de aipo',
      '1 dente de alho',
      'Salsinha a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      '1 litro de água'
    ],
    instructions: [
      'Lave bem todos os vegetais.',
      'Corte a cenoura e o aipo em pedaços pequenos.',
      'Em uma panela, coloque a água e leve ao fogo.',
      'Adicione a cenoura, o aipo e o alho.',
      'Cozinhe por 10 minutos.',
      'Adicione o espinafre e cozinhe por mais 5 minutos.',
      'Tempere com sal e pimenta.',
      'Finalize com salsinha.'
    ],
    tips: [
      'Não cozinhe demais o espinafre para manter os nutrientes.',
      'Pode ser batida no liquidificador se preferir cremosa.'
    ]
  },
  {
    id: 'salada-pepino-ervas',
    title: 'Salada de Pepino com Ervas',
    category: 'Saladas',
    ingredients: [
      '1 pepino médio',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Suco de 1/2 limão',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Lave bem o pepino.',
      'Corte o pepino em rodelas finas.',
      'Misture com as ervas picadas.',
      'Tempere com sal, pimenta e suco de limão.'
    ],
    tips: [
      'Pode deixar o pepino de molho em água com sal por 10 minutos para ficar mais crocante.',
      'Sirva imediatamente após temperar.'
    ]
  },
  {
    id: 'abobrinha-grelhada',
    title: 'Abobrinha Grelhada com Alho',
    category: 'Vegetais',
    ingredients: [
      '1 abobrinha média',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Corte a abobrinha em rodelas de 1cm.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Grelhe as rodelas por 2-3 minutos de cada lado.',
      'Tempere com sal, pimenta e salsinha.'
    ],
    tips: [
      'Não cozinhe demais para manter a textura crocante.',
      'Pode ser servida quente ou fria.'
    ]
  },
  {
    id: 'peixe-branco-limao',
    title: 'Peixe Branco ao Limão',
    category: 'Proteínas',
    ingredients: [
      '100g de filé de peixe branco',
      'Suco de 1 limão',
      '1 dente de alho picado',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o peixe com sal, pimenta e metade do suco de limão.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Cozinhe o peixe por 3-4 minutos de cada lado.',
      'Finalize com o restante do suco de limão e salsinha.'
    ],
    tips: [
      'O peixe está pronto quando estiver opaco e se desfizer facilmente.',
      'Evite mexer muito durante o cozimento.'
    ]
  },
  {
    id: 'sopa-tomate-ovos',
    title: 'Sopa de Tomate com Ovos',
    category: 'Sopas',
    ingredients: [
      '3 tomates maduros',
      '2 ovos',
      '1 dente de alho',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      '500ml de água'
    ],
    instructions: [
      'Corte os tomates em pedaços pequenos.',
      'Em uma panela, coloque a água e leve ao fogo.',
      'Adicione os tomates e o alho.',
      'Cozinhe por 10 minutos.',
      'Quebre os ovos diretamente na sopa.',
      'Cozinhe por mais 3-4 minutos até os ovos ficarem no ponto.',
      'Tempere com sal e pimenta.',
      'Finalize com salsinha.'
    ],
    tips: [
      'Os ovos devem ficar com a gema mole.',
      'Pode adicionar outras ervas a gosto.'
    ]
  },
  {
    id: 'hamburguer-frango-caseiro',
    title: 'Hambúrguer de Frango Caseiro',
    category: 'Proteínas',
    ingredients: [
      '100g de peito de frango moído',
      '1 dente de alho picado',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Misture o frango moído com alho, salsinha e cebolinha.',
      'Tempere com sal e pimenta.',
      'Modele no formato de hambúrguer.',
      'Em uma frigideira antiaderente, adicione um pouco de água.',
      'Grelhe por 4-5 minutos de cada lado.'
    ],
    tips: [
      'Certifique-se que o frango está bem cozido.',
      'Pode ser servido com salada de folhas verdes.'
    ]
  },
  {
    id: 'rocombole-rita',
    title: 'Rocombole da Rita',
    category: 'Proteínas',
    ingredients: [
      '3 ovos',
      '100g de peito de frango cozido e desfiado',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Bata os ovos e tempere com sal e pimenta.',
      'Em uma frigideira antiaderente, faça uma omelete fina.',
      'Recheie com o frango desfiado temperado com ervas.',
      'Enrole como um rocombole.',
      'Corte em fatias e sirva.'
    ],
    tips: [
      'O frango deve estar bem temperado.',
      'A omelete deve estar fina para enrolar facilmente.'
    ]
  },
  {
    id: 'ensopado-carne-beterraba',
    title: 'Ensopado de Carne com Beterraba',
    category: 'Proteínas',
    ingredients: [
      '100g de carne magra em cubos',
      '1 beterraba média',
      '1 cenoura',
      '1 talo de aipo',
      '2 dentes de alho',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      '500ml de água'
    ],
    instructions: [
      'Corte a carne em cubos pequenos e tempere com sal e pimenta.',
      'Em uma panela, coloque um pouco de água e doure o alho.',
      'Adicione a carne e deixe dourar levemente.',
      'Acrescente a água e cozinhe por 15 minutos.',
      'Adicione a beterraba, cenoura e aipo cortados em cubos.',
      'Cozinhe por mais 15-20 minutos até os legumes ficarem macios.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'A carne deve estar bem macia.',
      'Os legumes devem ficar al dente.'
    ]
  },
  {
    id: 'moqueca-peixe-repolho',
    title: 'Moqueca de Peixe com Repolho',
    category: 'Proteínas',
    ingredients: [
      '200g de filé de peixe branco',
      '2 xícaras de repolho fatiado',
      '1 tomate maduro',
      '1 dente de alho',
      'Suco de 1 limão',
      'Coentro picado a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o peixe com sal, pimenta e limão.',
      'Em uma panela, coloque um pouco de água e doure o alho.',
      'Adicione o tomate picado e cozinhe por 2 minutos.',
      'Coloque o repolho fatiado.',
      'Disponha os filés de peixe por cima.',
      'Tampe e cozinhe em fogo baixo por 10-12 minutos.',
      'Finalize com coentro picado.'
    ],
    tips: [
      'Não mexa muito durante o cozimento para não quebrar o peixe.',
      'O peixe estará pronto quando estiver opaco e se desfizer facilmente.'
    ]
  },
  {
    id: 'sopa-peixe-espinafres',
    title: 'Sopa de Peixe com Espinafres',
    category: 'Sopas',
    ingredients: [
      '200g de filé de peixe branco',
      '2 maços de espinafre',
      '1 cenoura',
      '1 talo de aipo',
      '2 dentes de alho',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      '1 litro de água'
    ],
    instructions: [
      'Corte o peixe em cubos e tempere com sal e pimenta.',
      'Em uma panela, coloque a água e leve ao fogo.',
      'Adicione a cenoura e o aipo cortados.',
      'Cozinhe por 10 minutos.',
      'Adicione o peixe e cozinhe por 5 minutos.',
      'Acrescente o espinafre e cozinhe por mais 3 minutos.',
      'Finalize com salsinha.'
    ],
    tips: [
      'O peixe deve estar cozido mas não muito para não desfazer.',
      'O espinafre deve ficar verde brilhante.'
    ]
  },
  {
    id: 'almondegas-carne',
    title: 'Almôndegas de Carne',
    category: 'Proteínas',
    ingredients: [
      '100g de carne moída magra',
      '1 ovo',
      '1 dente de alho picado',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Misture a carne moída com o ovo, alho e ervas.',
      'Tempere com sal e pimenta.',
      'Modele pequenas almôndegas.',
      'Em uma frigideira antiaderente, adicione um pouco de água.',
      'Cozinhe as almôndegas por 3-4 minutos de cada lado.',
      'Certifique-se que estejam bem cozidas.'
    ],
    tips: [
      'Faça almôndegas pequenas para cozinhar uniformemente.',
      'Pode servir com legumes cozidos ou salada.'
    ]
  },
  {
    id: 'espaguete-abobrinha',
    title: 'Espaguete de Abobrinha',
    category: 'Vegetais',
    ingredients: [
      '2 abobrinhas médias',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Lave bem as abobrinhas.',
      'Use um espiralizador para fazer o espaguete de abobrinha.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Cozinhe o "espaguete" por 2-3 minutos, mexendo delicadamente.',
      'Tempere com sal e pimenta.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'Não cozinhe demais para manter a textura al dente.',
      'Se não tiver espiralizador, use um descascador de legumes.'
    ]
  },
  {
    id: 'salada-brocolis',
    title: 'Salada de Brócolis',
    category: 'Saladas',
    ingredients: [
      '1 maço de brócolis',
      '1 dente de alho picado',
      'Suco de 1/2 limão',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Separe os brócolis em floretes pequenos.',
      'Cozinhe no vapor por 3-4 minutos até ficarem al dente.',
      'Mergulhe em água gelada para manter a cor verde.',
      'Misture com alho picado e salsinha.',
      'Tempere com sal, pimenta e suco de limão.'
    ],
    tips: [
      'O brócolis deve ficar crocante.',
      'Pode ser servido quente ou frio.'
    ]
  },
  {
    id: 'peixe-assado-legumes',
    title: 'Peixe Assado com Legumes',
    category: 'Proteínas',
    ingredients: [
      '200g de filé de peixe branco',
      '1 abobrinha pequena',
      '1 cenoura',
      '1 talo de aipo',
      '2 dentes de alho',
      'Suco de 1 limão',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o peixe com sal, pimenta e limão.',
      'Corte os legumes em rodelas finas.',
      'Em uma assadeira, faça uma cama com os legumes.',
      'Coloque o peixe por cima.',
      'Adicione um pouco de água no fundo da assadeira.',
      'Asse em forno preaquecido a 180°C por 20-25 minutos.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'Verifique se o peixe está cozido antes de servir.',
      'Os legumes devem ficar al dente.'
    ]
  },
  {
    id: 'frango-cogumelos',
    title: 'Frango com Cogumelos',
    category: 'Proteínas',
    ingredients: [
      '100g de peito de frango',
      '100g de cogumelos paris',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Corte o frango em cubos e tempere com sal e pimenta.',
      'Fatie os cogumelos.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Doure o frango por 5-6 minutos.',
      'Adicione os cogumelos e cozinhe por mais 3-4 minutos.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'O frango deve estar bem cozido.',
      'Os cogumelos devem ficar levemente dourados.'
    ]
  },
  {
    id: 'salada-folhas-ovo',
    title: 'Salada de Folhas Verdes com Ovo',
    category: 'Saladas',
    ingredients: [
      '2 xícaras de mix de folhas verdes',
      '2 ovos cozidos',
      'Suco de 1/2 limão',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto'
    ],
    instructions: [
      'Lave bem as folhas verdes.',
      'Cozinhe os ovos por 6-7 minutos.',
      'Monte a salada com as folhas.',
      'Corte os ovos ao meio e disponha sobre as folhas.',
      'Tempere com sal, pimenta, suco de limão e salsinha.'
    ],
    tips: [
      'Os ovos podem ficar com a gema mais ou menos cozida conforme preferência.',
      'Sirva imediatamente após temperar.'
    ]
  },
  {
    id: 'legumes-assados',
    title: 'Mix de Legumes Assados',
    category: 'Vegetais',
    ingredients: [
      '1 cenoura média',
      '1 abobrinha pequena',
      '1 berinjela pequena',
      '2 dentes de alho',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Corte todos os legumes em cubos médios.',
      'Disponha em uma assadeira.',
      'Adicione um pouco de água no fundo da assadeira.',
      'Tempere com sal, pimenta e alho picado.',
      'Asse em forno preaquecido a 180°C por 25-30 minutos.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'Mexa os legumes na metade do tempo para assar uniformemente.',
      'Os legumes devem ficar macios mas não muito cozidos.'
    ]
  },
  {
    id: 'sopa-legumes-frango',
    title: 'Sopa de Legumes com Frango',
    category: 'Sopas',
    ingredients: [
      '100g de peito de frango',
      '1 cenoura',
      '1 abobrinha',
      '2 talos de aipo',
      '2 dentes de alho',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      '1 litro de água'
    ],
    instructions: [
      'Corte o frango em cubos pequenos.',
      'Corte os legumes em cubos.',
      'Em uma panela, coloque a água e leve ao fogo.',
      'Adicione o frango e cozinhe por 10 minutos.',
      'Acrescente os legumes e o alho.',
      'Cozinhe por mais 10-15 minutos.',
      'Tempere com sal e pimenta.',
      'Finalize com salsinha.'
    ],
    tips: [
      'O frango deve estar bem cozido.',
      'Os legumes devem ficar al dente.'
    ]
  },
  {
    id: 'peixe-aspargos',
    title: 'Peixe Grelhado com Aspargos',
    category: 'Proteínas',
    ingredients: [
      '200g de filé de peixe branco',
      '100g de aspargos frescos',
      '2 dentes de alho',
      'Suco de 1 limão',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Tempere o peixe com sal, pimenta e metade do suco de limão.',
      'Corte as bases duras dos aspargos.',
      'Em uma frigideira antiaderente, adicione água e o alho.',
      'Grelhe o peixe por 4-5 minutos de cada lado.',
      'Retire o peixe e na mesma frigideira cozinhe os aspargos por 3-4 minutos.',
      'Finalize com o restante do suco de limão e salsinha.'
    ],
    tips: [
      'O peixe deve estar opaco e se desfazer facilmente.',
      'Os aspargos devem ficar crocantes.'
    ]
  },
  {
    id: 'espaguete-courget-carne',
    title: 'Espaguete de Courget com Carne Moída',
    category: 'Proteínas',
    ingredients: [
      '100g de carne moída magra',
      '2 abobrinha (courget)',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Use um espiralizador para fazer o espaguete de abobrinha.',
      'Em uma frigideira antiaderente, adicione um pouco de água e o alho.',
      'Doure a carne moída, temperando com sal e pimenta.',
      'Adicione o "espaguete" de abobrinha.',
      'Cozinhe por 2-3 minutos até a abobrinha ficar al dente.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'A abobrinha não deve cozinhar demais para não soltar água.',
      'A carne deve estar bem cozida.'
    ]
  },
  {
    id: 'enrolado-repolho-frango',
    title: 'Enrolado de Repolho com Peito de Frango',
    category: 'Proteínas',
    ingredients: [
      '100g de peito de frango moído',
      '4 folhas grandes de repolho',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Branqueie as folhas de repolho em água fervente por 2 minutos.',
      'Tempere o frango moído com alho, sal, pimenta e salsinha.',
      'Coloque uma porção de frango em cada folha de repolho.',
      'Enrole como um rocambole, fechando as laterais.',
      'Em uma frigideira com água, cozinhe os rolinhos por 10-12 minutos.',
      'Vire na metade do tempo para cozinhar uniformemente.'
    ],
    tips: [
      'As folhas devem estar maleáveis para enrolar.',
      'Certifique-se que o frango está bem cozido.'
    ]
  },
  {
    id: 'hamburguer-peixe',
    title: 'Hambúrguer de Filé de Peixe',
    category: 'Proteínas',
    ingredients: [
      '200g de filé de peixe branco moído',
      '1 ovo',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Cebolinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Misture o peixe moído com ovo, alho e ervas.',
      'Tempere com sal e pimenta.',
      'Modele no formato de hambúrguer.',
      'Em uma frigideira antiaderente com água.',
      'Cozinhe por 4-5 minutos de cada lado.',
      'Certifique-se que está bem cozido.'
    ],
    tips: [
      'O peixe deve estar bem fresco.',
      'Evite mexer muito durante o cozimento.'
    ]
  },
  {
    id: 'espaguete-courget-frango',
    title: 'Espaguete de Courget com Frango',
    category: 'Proteínas',
    ingredients: [
      '100g de peito de frango picado',
      '2 abobrinha (courget)',
      '2 dentes de alho picados',
      'Salsinha picada a gosto',
      'Sal do Himalaia a gosto',
      'Pimenta do reino a gosto',
      'Água'
    ],
    instructions: [
      'Use um espiralizador para fazer o espaguete de abobrinha.',
      'Em uma frigideira antiaderente, adicione água e o alho.',
      'Doure o frango picado, temperando com sal e pimenta.',
      'Adicione o "espaguete" de abobrinha.',
      'Cozinhe por 2-3 minutos até a abobrinha ficar al dente.',
      'Finalize com salsinha picada.'
    ],
    tips: [
      'O frango deve estar bem cozido.',
      'A abobrinha deve ficar al dente.'
    ]
  }
]; 