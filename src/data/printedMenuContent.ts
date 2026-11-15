import { Language } from '../types';

export interface PrintedDishItem {
  name: string;
  note?: string;
  description?: string;
  isVeg?: boolean;
  isVegan?: boolean;
  isBestSeller?: boolean;
}

export interface PrintedMenuSheetContent {
  // Page 1
  toStartTitle: string;
  toStartItems: PrintedDishItem[];
  toStartExtrasTitle: string;
  toStartExtras: string[];

  toastsTitle: string;
  toastsSubtitle: string;
  toastsItems: PrintedDishItem[];

  powerBrunchTitle: string;
  powerBrunchLines: {
    topDesc: string;
    pancakesLabel: string;
    pancakesSub: string;
    shotLabel: string;
    drinksLabel: string;
  };

  goodMorningTitle: string;
  goodMorningLines: {
    mainDesc: string;
    orLabel: string;
    veganDesc: string;
    drinksLabel: string;
  };

  myaBrunchTitle: string;
  myaBrunchLines: {
    eggsLabel: string;
    eggsSub: string;
    pancakesLabel: string;
    pancakesSub: string;
    drinksLabel: string;
  };
  siriCardLabel: string;
  myaCardLabel: string;

  hamburguersTitle: string;
  hamburguersSubtitle: string;
  hamburguersItems: PrintedDishItem[];
  hamburguersFootnote: string;

  wrapsTitle: string;
  wrapsSubtitle: string;
  wrapsItems: PrintedDishItem[];

  // Page 2
  bowlsTitle: string;
  bowlsSubtitle: string;
  bowlsItems: PrintedDishItem[];
  bowlsExtrasTitle: string;
  bowlsExtras: string[];
  chooseSauceTitle: string;
  chooseSauceOptions: string;

  sweetsTitle: string;
  sweetsShowcaseHeading: string;
  sweetsItems: PrintedDishItem[];
  sweetsFootnotes: string[];
  bowlCardLabel: string;
  toffeeCardLabel: string;

  pancakesTitle: string;
  pancakesSubtitle: string;
  pancakesItems: PrintedDishItem[];

  myWayTitle: string;
  myWaySubtitle: string;
  myWayBaseLine: string;
  myWayChooseLine: string;
  myWayBullets: string[];

  legendVegan: string;
  legendVeg: string;
  legendBestSeller: string;
  allergensTitle: string;
  allergensSubtitle: string;

  footerTagline: string;
}

export const printedMenuData: Record<Language, PrintedMenuSheetContent> = {
  en: {
    toStartTitle: 'TO START...',
    toStartItems: [
      {
        name: 'CHEEEEZYY',
        note: '(with toasts )',
        description: 'Grilled white cheese, cherry tomato, basil and balsamic',
        isVeg: true,
      },
      {
        name: 'PINK',
        note: '(with toasts)',
        description:
          'Beet hummus, sautéed mushrooms, pineapple, feta cheese, cucumber, almond and sesame seeds',
        isVeg: true,
      },
    ],
    toStartExtrasTitle: 'EXTRAS',
    toStartExtras: [
      'Hollandaise sauce',
      'Avocado',
      'Feta cheese',
      'Mushrooms',
      '(2) Eggs',
    ],

    toastsTitle: 'TOASTS',
    toastsSubtitle: '(served with salad )',
    toastsItems: [
      {
        name: 'SIRI',
        description:
          "Toasted bread, poached eggs, smoked salmon, hollandaise sauce with sriracha, 'caviar', parsley",
        isBestSeller: true,
      },
      {
        name: 'MYA',
        description:
          'Toasted bread, beet hummus, avocado, poached eggs, feta cheese, parsley',
        isVeg: true,
        isBestSeller: true,
      },
      {
        name: 'AVO',
        description: 'Toasted bread, avocado, sundried tomato, parsley, seeds',
        isVegan: true,
      },
      {
        name: 'MUXI',
        description:
          'Toasted bread, scrambled eggs, arugula, mushrooms, cherry tomato',
        isVeg: true,
      },
      {
        name: 'MY CHOICE',
        description:
          '(fried eggs | poached eggs | scrambled eggs | scrambled tofu)\nServed with toasted bread, butter or jam',
        isVeg: true,
        isVegan: true,
      },
    ],

    powerBrunchTitle: 'POWER BRUNCH',
    powerBrunchLines: {
      topDesc: 'Homemade toasted bread, poached eggs, avocado, salad',
      pancakesLabel: 'PANCAKES',
      pancakesSub: '( seasonal fruit, homemade granola and honey )',
      shotLabel: 'IMMUNITY SHOT',
      drinksLabel: 'COFFEE WITH MILK | AMERICANO*',
    },

    goodMorningTitle: 'GOOD MORNING',
    goodMorningLines: {
      mainDesc:
        'Toasted bread,scrambled eggs, avocado, salad, feta cheese, smoked salmon, butter or jam',
      orLabel: 'OR',
      veganDesc:
        'Toasted bread,scrambled tofu, avocado, salad, cherry tomato, sautéed mushrooms, butter or jam',
      drinksLabel: 'COFFEE WITH MILK | AMERICANO*',
    },

    myaBrunchTitle: 'MYA BRUNCH',
    myaBrunchLines: {
      eggsLabel: 'EGGS with salad and toasted bread',
      eggsSub: '( fried | poached | scrambled | vegan option )',
      pancakesLabel: 'PANCAKES',
      pancakesSub: '( 1 topping of your choice )',
      drinksLabel: 'COFFEE WITH MILK | AMERICANO*',
    },
    siriCardLabel: 'SIRI',
    myaCardLabel: 'MYA',

    hamburguersTitle: 'HAMBURGUERS',
    hamburguersSubtitle:
      '(Brioche bread, toasted with olive oil and lightly spread with dijon mustard)',
    hamburguersItems: [
      {
        name: 'CHICKEN*',
        description: 'Bread, chicken burger, cheddar, avocado, caramelized onion',
      },
      {
        name: 'NATURE*',
        description:
          'Bread, chickpeas and roasted vegetables burguer, sautéed bell pepper, caramelized onion',
        isVeg: true,
      },
      {
        name: 'MUHH*',
        description:
          'Bread, beef burguer, grilled white cheese, sautéed spinach, sautéed bell pepper, caramelized onion',
      },
    ],
    hamburguersFootnote: '*Served with salad and chips',

    wrapsTitle: 'WRAPS',
    wrapsSubtitle: '(Served with salad and chips)',
    wrapsItems: [
      {
        name: 'CHICKEN',
        description:
          'Honey and mostard sauce, mix of greens, sesame seeds\nchicken (cooked with honey and orange), tomato and avocado',
      },
      {
        name: 'SALMON',
        description:
          'Yogurt sauce, mix of greens, mango, smoked salmon\nsesame seeds',
      },
      {
        name: 'TOFU',
        description:
          'Orange and mostard sauce, mix of greens, sesame seeds\nsautéed bell pepper,chickpeas and tofu curry',
        isVeg: true,
      },
    ],

    // Page 2
    bowlsTitle: 'BOWLS',
    bowlsSubtitle: '(choose your sauce)',
    bowlsItems: [
      {
        name: 'CHICKEN',
        description:
          'Salad made with a mix of greens, orange, mix of tomato, onion and cucumber, fresh cheese, quinoa, chicken (cooked with honey and orange), seeds',
        isBestSeller: true,
      },
      {
        name: 'SHRIMP',
        description:
          'Salad made with a mix of greens, shrimp, pineapple with lime, sautéed bell pepper, basmati rice, seeds',
      },
      {
        name: 'VEGGIE',
        description:
          'Salad made with a mix of greens, mango with coconut and almond, feta cheese, papaya, beet hummus, chickpeas and tofu curry, seeds',
        isVeg: true,
      },
      {
        name: 'HOT',
        description:
          'Quinoa, sautéed spinach, sautéed bell pepper, feta cheese, apple, fried onion (you can add more protein, value is not included*)',
        isVeg: true,
      },
    ],
    bowlsExtrasTitle: '*EXTRAS',
    bowlsExtras: [
      'Chicken',
      'Shrimp OR chickpeas and tofu curry',
      'Fresh cheese OR feta',
      'Smoked salmon',
    ],
    chooseSauceTitle: 'CHOOSE YOUR SAUCE',
    chooseSauceOptions: 'Yogurt | Mango and curry | Orange and mostard',

    sweetsTitle: 'SWEETS',
    sweetsShowcaseHeading: 'SEVERAL HOMEMADE OPTIONS AT OUR\nSHOWCASE',
    sweetsItems: [
      {
        name: 'IOGI',
        description:
          'Plain greek yogurt or option of soy (value is not included*), homemade granola, fruit and honey',
      },
      {
        name: 'BERRIE',
        description:
          'Smoothie bowl of plain greek yogurt or option of soy (value is not included*) with blackberries, fruit, homemade granola and honey',
      },
      {
        name: 'COCONUT',
        description:
          'Hot porridge oats, made with oat flakes and coconut milk, coconut, papaya, mango, dates, homemade granola, honey',
        isVegan: true,
        isVeg: true,
      },
      {
        name: 'CHOCO OR NOT',
        description:
          'Hot porridge oats, made with oat flakes and milk or vegetable drink (value is not included**),cocoa or carob, fruit, homemade granola',
      },
    ],
    sweetsFootnotes: [
      '*Option of red fruits soy yogurt',
      '**Option of vegetable drink: coconut, oat or soy',
    ],
    bowlCardLabel: 'CHICKEN BOWL',
    toffeeCardLabel: 'TOFFEE',

    pancakesTitle: 'PANCAKES',
    pancakesSubtitle: '(2 pancakes made with homemade mix)',
    pancakesItems: [
      {
        name: 'SUNNY',
        description:
          'Pancakes, plain greek yogurt or option of soy (value is not included*), homemade lemon curd, mango with lime, homemade granola',
      },
      {
        name: 'TOFFEE',
        description: 'Pancakes, banana, walnuts, homemade salted caramel',
        isBestSeller: true,
      },
      {
        name: 'CHOCO',
        description:
          'Pancakes, homemade dark chocolate sauce 70% or milk chocolate, almonds',
      },
      {
        name: 'LACE',
        description:
          'Lace crepe, homemade passion fruit curd, seasonal fruit, grated coconut',
      },
      {
        name: 'SALTY',
        description:
          'Pancakes, scrambled eggs, feta cheese, parsley, fried onion',
      },
    ],

    myWayTitle: 'MY WAY !',
    myWaySubtitle: 'Indulge yourself, do it your way...',
    myWayBaseLine: '2 simple pancakes',
    myWayChooseLine: 'Choose your topping (price per ingredient):',
    myWayBullets: [
      'Cinnamon | powder sugar',
      'Sugar cane honey | bee honey | strawberry jam | homemade salted caramel',
      'Plain greek yogurt | agave syrup',
      'Red fruits soy yogurt | peanut butter | homemade dark chocolate or milk | homemade passion fruit or lemon curd | lotus',
      'Pineapple with lime | seasonal fruit',
      'Homemade granola | walnuts | almonds',
    ],

    legendVegan: 'NO ANIMAL INGREDIENTS, VEGAN',
    legendVeg: 'NO MEAT OR FISH, VEGETARIAN',
    legendBestSeller: 'BEST SELLER',
    allergensTitle: 'ALL OF OUR DISHES HAVE ALLERGENIC PRODUCTS',
    allergensSubtitle:
      'If you have any doubts about allergenic products, please ask one of the employees',

    footerTagline: 'TUDO FEITO NO MOMENTO / ALL DONE AT THE MOMENT',
  },

  pt: {
    toStartTitle: 'PARA COMEÇAR...',
    toStartItems: [
      {
        name: 'CHEEEEZYY',
        note: '(com tostas )',
        description:
          'Queijo branco grelhado, tomate cherry, manjericão e balsâmico',
        isVeg: true,
      },
      {
        name: 'PINK',
        note: '(com tostas)',
        description:
          'Húmus de beterraba, cogumelos salteados, ananás, queijo feta, pepino, amêndoa e sementes de sésamo',
        isVeg: true,
      },
    ],
    toStartExtrasTitle: 'EXTRAS',
    toStartExtras: [
      'Molho holandês',
      'Abacate',
      'Queijo feta',
      'Cogumelos',
      '(2) Ovos',
    ],

    toastsTitle: 'TOSTAS',
    toastsSubtitle: '(servidas com salada )',
    toastsItems: [
      {
        name: 'SIRI',
        description:
          "Pão torrado, ovos escalfados, salmão fumado, molho holandês com sriracha, 'caviar', salsa",
        isBestSeller: true,
      },
      {
        name: 'MYA',
        description:
          'Pão torrado, húmus de beterraba, abacate, ovos escalfados, queijo feta, salsa',
        isVeg: true,
        isBestSeller: true,
      },
      {
        name: 'AVO',
        description: 'Pão torrado, abacate, tomate seco, salsa, sementes',
        isVegan: true,
      },
      {
        name: 'MUXI',
        description:
          'Pão torrado, ovos mexidos, rúcula, cogumelos, tomate cherry',
        isVeg: true,
      },
      {
        name: 'MY CHOICE',
        description:
          '(ovos estrelados | ovos escalfados | ovos mexidos | tofu mexido)\nServido com pão torrado, manteiga ou compota',
        isVeg: true,
        isVegan: true,
      },
    ],

    powerBrunchTitle: 'POWER BRUNCH',
    powerBrunchLines: {
      topDesc: 'Pão caseiro torrado, ovos escalfados, abacate, salada',
      pancakesLabel: 'PANQUECAS',
      pancakesSub: '( fruta da época, granola caseira e mel )',
      shotLabel: 'SHOT DE IMUNIDADE',
      drinksLabel: 'CAFÉ COM LEITE | AMERICANO*',
    },

    goodMorningTitle: 'GOOD MORNING',
    goodMorningLines: {
      mainDesc:
        'Pão torrado, ovos mexidos, abacate, salada, queijo feta, salmão fumado, manteiga ou compota',
      orLabel: 'OU',
      veganDesc:
        'Pão torrado, tofu mexido, abacate, salada, tomate cherry, cogumelos salteados, manteiga ou compota',
      drinksLabel: 'CAFÉ COM LEITE | AMERICANO*',
    },

    myaBrunchTitle: 'MYA BRUNCH',
    myaBrunchLines: {
      eggsLabel: 'OVOS com salada e pão torrado',
      eggsSub: '( estrelados | escalfados | mexidos | opção vegan )',
      pancakesLabel: 'PANQUECAS',
      pancakesSub: '( 1 cobertura à sua escolha )',
      drinksLabel: 'CAFÉ COM LEITE | AMERICANO*',
    },
    siriCardLabel: 'SIRI',
    myaCardLabel: 'MYA',

    hamburguersTitle: 'HAMBÚRGUERES',
    hamburguersSubtitle:
      '(Pão brioche, torrado com azeite e ligeiramente barrado com mostarda dijon)',
    hamburguersItems: [
      {
        name: 'FRANGO*',
        description:
          'Pão, hambúrguer de frango, cheddar, abacate, cebola caramelizada',
      },
      {
        name: 'NATURE*',
        description:
          'Pão, hambúrguer de grão-de-bico e vegetais assados, pimento salteado, cebola caramelizada',
        isVeg: true,
      },
      {
        name: 'MUHH*',
        description:
          'Pão, hambúrguer de novilho, queijo branco grelhado, espinafres salteados, pimento salteado, cebola caramelizada',
      },
    ],
    hamburguersFootnote: '*Servido com salada e batatas chips',

    wrapsTitle: 'WRAPS',
    wrapsSubtitle: '(Servidos com salada e batatas chips)',
    wrapsItems: [
      {
        name: 'FRANGO',
        description:
          'Molho de mel e mostarda, mistura de verdes, sementes de sésamo\nfrango (confeccionado com mel e laranja), tomate e abacate',
      },
      {
        name: 'SALMÃO',
        description:
          'Molho de iogurte, mistura de verdes, manga, salmão fumado\nsementes de sésamo',
      },
      {
        name: 'TOFU',
        description:
          'Molho de laranja e mostarda, mistura de verdes, sementes de sésamo\npimento salteado, caril de grão-de-bico e tofu',
        isVeg: true,
      },
    ],

    // Page 2 (100% verbatim from uploaded Portuguese menu image)
    bowlsTitle: 'BOWLS',
    bowlsSubtitle: '(escolha o seu molho)',
    bowlsItems: [
      {
        name: 'FRANGO',
        description:
          'Salada de verdes, gomos de laranja, mistura de tomate, com cebola e pepino, queijo fresco, quinoa, frango (confeccionado com mel e laranja), sementes',
        isBestSeller: true,
      },
      {
        name: 'CAMARÃO',
        description:
          'Salada de verdes, camarão, abacaxi com lima, pimentão salteado, arroz basmati, sementes',
      },
      {
        name: 'VEGGIE',
        description:
          'Salada de verdes, manga com côco e amêndoa, queijo feta, papaia, húmus de beterraba e sementes de sésamo, caril de tofu e grão, sementes',
        isVeg: true,
      },
      {
        name: 'HOT',
        description:
          'Base de quinoa, espinafres salteados, pimento salteado, queijo feta, palitos de maçã, cebola frita ( poderá complementar com mais proteína, valor não incluído*)',
        isVeg: true,
      },
    ],
    bowlsExtrasTitle: '*EXTRAS',
    bowlsExtras: [
      'Frango',
      'Camarão OU caril de tofu e grão',
      'Queijo fresco OU feta',
      'Salmão fumado',
    ],
    chooseSauceTitle: 'MOLHOS À ESCOLHA',
    chooseSauceOptions: 'Iogurte | Manga e caril | Mostarda e laranja',

    sweetsTitle: 'DOCES',
    sweetsShowcaseHeading: 'DIVERSAS OPÇÕES CASEIRAS\nNA NOSSA VITRINE',
    sweetsItems: [
      {
        name: 'IOGI',
        description:
          'Iogurte grego natural ou opção de soja (valor não incluído*) granola caseira, fruta da época e mel',
      },
      {
        name: 'BERRIE',
        description:
          'Smoothie bowl com base de amoras e iogurte grego natural ou opção de soja (valor não incluído*), fruta da época, granola caseira e mel',
      },
      {
        name: 'COCONUT',
        description:
          'Papas quentes de aveia, feitas com flocos de aveia e leite de côco, côco desidratado, papaia, manga, tâmaras, granola caseira e mel',
        isVegan: true,
        isVeg: true,
      },
      {
        name: 'CHOCO OR NOT',
        description:
          'Papas quentes de aveia, feitas com flocos de aveia, leite ou opção de bebida vegetal(valor não incluído**), cacau ou alfarroba, fruta, granola caseira',
      },
    ],
    sweetsFootnotes: [
      '*Opção iogurte de soja de frutos vermelhos',
      '**Opção bebida de côco, aveia ou soja',
    ],
    bowlCardLabel: 'BOWL DE FRANGO',
    toffeeCardLabel: 'TOFFEE',

    pancakesTitle: 'PANQUECAS',
    pancakesSubtitle: '(2 panquecas feitas com massa caseira)',
    pancakesItems: [
      {
        name: 'SUNNY',
        description:
          'Panquecas, iogurte grego natural ou opção de soja (valor não incluído*), creme de limão caseiro, manga com lima, granola caseira',
      },
      {
        name: 'TOFFEE',
        description: 'Panquecas, banana, nozes, caramelo salgado caseiro',
        isBestSeller: true,
      },
      {
        name: 'CHOCO',
        description:
          'Panquecas, molho de chocolate caseiro negro 70% ou chocolate de leite, amêndoa laminada',
      },
      {
        name: 'LACE',
        description:
          'Crepes rendilhados, curd de maracujá caseiro, fruta da época e côco ralado',
      },
      {
        name: 'SALTY',
        description:
          'Panquecas, ovos mexidos, queijo feta, salsa e cebola crocante',
      },
    ],

    myWayTitle: 'MY WAY !',
    myWaySubtitle: 'Mime-se, faça à sua maneira ...',
    myWayBaseLine: '2 panquecas simples',
    myWayChooseLine: 'Coberturas à escolha (valor por ingrediente):',
    myWayBullets: [
      'Canela | Açúcar em pó',
      'Mel de cana | Mel de flores | Caramelo salgado caseiro | Compota de morango',
      'Iogurte grego natural | Xarope de agave',
      'Iogurte de soja de frutos vermelhos | Manteiga de amendoim | Chocolate negro ou leite | Curd maracujá ou limão | Lotus',
      'Abacaxi com lima | Fruta da época',
      'Granola caseira | Nozes | Amêndoa laminada',
    ],

    legendVegan: 'SEM INGREDIENTES ANIMAIS, VEGANO',
    legendVeg: 'SEM CARNE OU PEIXE, VEGETARIANO',
    legendBestSeller: 'MAIS PEDIDO',
    allergensTitle: 'TODOS OS NOSSOS PRATOS POSSUEM PRODUTOS ALERGÉNIOS',
    allergensSubtitle:
      'Se tiver alguma dúvida acerca de produtos alergénios, por favor pergunte a um dos colaboradores.',

    footerTagline: 'TUDO FEITO NO MOMENTO / ALL DONE AT THE MOMENT',
  },
};
