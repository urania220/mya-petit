import { MenuItem, MenuCategory } from '../types';

export const UBER_EATS_STORE_URL =
  'https://www.ubereats.com/pt-en/store/mya-petit-cafe/OyW8DAQfX--zE7WPuH_XYQ?srsltid=AYCX9vKiAxNaiYi3ydO5xrZRiELINm-B1vyxl5adVsK4GcP11vOhaqVI';

export interface CategoryInfo {
  key: MenuCategory;
  namePt: string;
  nameEn: string;
  descriptionPt: string;
  descriptionEn: string;
}

export const menuCategories: CategoryInfo[] = [
  {
    key: 'toasts',
    namePt: 'Tostas Artesanais',
    nameEn: 'Artisanal Toasts',
    descriptionPt: 'Pão rústico artesanal com ingredientes frescos, ovos escalfados e combinações exclusivas.',
    descriptionEn: 'Artisan sourdough toasts with fresh farm ingredients, poached eggs, and signature toppings.',
  },
  {
    key: 'pancakes',
    namePt: 'Panquecas & Crepes',
    nameEn: 'Fluffy Pancakes & Crepes',
    descriptionPt: 'Panquecas altas, fofas e aromáticas feitas na hora, com opções doces e salgadas.',
    descriptionEn: 'Thick, fluffy, freshly flipped pancakes with sweet and savory signature toppings.',
  },
  {
    key: 'wraps',
    namePt: 'Wraps Frescos',
    nameEn: 'Fresh Artisan Wraps',
    descriptionPt: 'Tortilhas recheadas com proteínas marinadas, verdes crocantes e molhos especiais caseiros.',
    descriptionEn: 'Warm rolled tortillas packed with seasoned proteins, crisp garden greens, and homemade dressings.',
  },
  {
    key: 'burgers',
    namePt: 'Hambúrgueres Artesanais',
    nameEn: 'Brioche Burgers',
    descriptionPt: 'Pão brioche fofo com hambúrgueres suculentos, queijos grelhados e cebola caramelizada.',
    descriptionEn: 'Fluffy brioche buns layered with juicy patties, melted grilled cheeses, and slow-caramelized onions.',
  },
  {
    key: 'bowls',
    namePt: 'Bowls & Saladas',
    nameEn: 'Nourishing Bowls & Salads',
    descriptionPt: 'Tigelas coloridas e equilibradas com quinoa, verdes frescos, frutas tropicais e sementes.',
    descriptionEn: 'Vibrant, nourishing bowls with quinoa, seasonal greens, tropical fruits, and toasted seeds.',
  },
  {
    key: 'shakes',
    namePt: 'Batidos & Smoothies',
    nameEn: 'Smoothies & Milkshakes',
    descriptionPt: 'Bebidas cremosas e refrescantes preparadas com frutas frescas, iogurte ou bebidas vegetais.',
    descriptionEn: 'Creamy and refreshing blended drinks made with real fruit, yogurt, or plant-based milks.',
  },
  {
    key: 'drinks',
    namePt: 'Cafetaria & Bebidas Especiais',
    nameEn: 'Specialty Coffee & Drinks',
    descriptionPt: 'Cafés de especialidade, matcha cerimonial japonês, sumos naturais e infusões botânicas.',
    descriptionEn: 'Specialty roasted coffee, ceremonial Japanese matcha, fresh pressed juices, and loose teas.',
  },
];

export const uberEatsDishes: MenuItem[] = [
  // --- TOSTAS (Artisanal Toasts) ---
  {
    id: 'tosta-mya',
    name: 'Tosta Mya',
    namePt: 'Tosta Mya',
    nameEn: 'Mya Signature Pink Toast',
    category: 'toasts',
    price: '€18.50',
    tag: 'Signature',
    isVegetarian: true,
    descriptionPt:
      'Pão caseiro torrado, hummus artesanal de beterraba, abacate fresco fatiado, ovos escalfados biológicos, queijo feta desfeito e salsa fresca. Acompanhada por salada fresca.',
    descriptionEn:
      'Artisan toasted bread, house-crafted beetroot hummus, fresh sliced avocado, organic poached eggs, crumbled Greek feta cheese, and parsley. Served with a side salad.',
    image: '/mya-assets/04_food_savory_pancakes.jpg',
  },
  {
    id: 'tosta-siri',
    name: 'Tosta Siri',
    namePt: 'Tosta Siri com Salmão Fumado',
    nameEn: 'Siri Smoked Salmon Toast',
    category: 'toasts',
    price: '€22.40',
    tag: 'Best Seller',
    descriptionPt:
      'Pão artesanal torrado, ovos biológicos escalfados, salmão fumado norueguês, molho holandês picante com toque de sriracha, pérolas de "caviar" e salsa fresca.',
    descriptionEn:
      'Toasted artisan bread, organic poached eggs, premium smoked salmon, zesty sriracha hollandaise sauce, gourmet "caviar" pearls, and fresh parsley.',
    image: '/mya-assets/03_food_wraps.jpg',
  },
  {
    id: 'tosta-avo',
    name: 'Tosta Avo',
    namePt: 'Tosta Avo (Vegan)',
    nameEn: 'Avo Toast (Vegan)',
    category: 'toasts',
    price: '€14.40',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Pão rústico torrado, generosa camada de abacate fresco fatiado, tomate seco italiano marinado, sementes tostadas e salsa fresca. Servida com salada da horta.',
    descriptionEn:
      'Artisan toasted bread, generous layers of fresh sliced avocado, marinated sun-dried tomatoes, roasted seed blend, and fresh parsley. Served with garden salad.',
    image: '/mya-assets/04_food_savory_pancakes.jpg',
  },
  {
    id: 'crunchie',
    name: 'Crunchie',
    namePt: 'Tosta Crunchie',
    nameEn: 'Crunchie Mushroom & Onion Toast',
    category: 'toasts',
    price: '€17.60',
    isVegetarian: true,
    descriptionPt:
      'Pão artesanal torrado, cebola caramelizada, cogumelos salteados com alho, cebola crocante frita, queijo feta, 1 ovo escalfado, rúcula selvagem e redução agridoce sweet chili. Acompanha salada.',
    descriptionEn:
      'Toasted homemade sourdough, caramelized onion, garlic sautéed mushrooms, crispy onions, feta cheese, 1 organic poached egg, wild arugula, and sweet chili glaze. Served with a side salad.',
    image: '/mya-assets/03_food_wraps.jpg',
  },
  {
    id: 'tosta-muxi',
    name: 'Tosta Muxi',
    namePt: 'Tosta Muxi de Cogumelos e Ovos Mexidos',
    nameEn: 'Muxi Scrambled Eggs & Mushrooms Toast',
    category: 'toasts',
    price: '€14.70',
    isVegetarian: true,
    descriptionPt:
      'Pão artesanal tostado, ovos mexidos cremosos feitos na hora, rúcula tenra, cogumelos salteados e tomates cherry doces. Servida com salada fresca.',
    descriptionEn:
      'Artisan toasted bread, silky scrambled eggs cooked to order, tender arugula, sautéed mushrooms, and sweet cherry tomatoes. Served with side salad.',
    image: '/mya-assets/04_food_savory_pancakes.jpg',
  },
  {
    id: 'tosta-my-choice',
    name: 'Tosta My Choice',
    namePt: 'Tosta My Choice (Ovos a Gosto)',
    nameEn: 'My Choice Toast (Eggs Your Way)',
    category: 'toasts',
    price: '€10.90',
    isVegetarian: true,
    descriptionPt:
      'Dois ovos biológicos preparados ao seu gosto (escalfados ou mexidos cremosos) sobre pão artesanal torrado, servidos com manteiga cremosa ou compota caseira.',
    descriptionEn:
      'Two organic eggs prepared your way (delicate poached or creamy scrambled) on toasted sourdough, served with rich creamery butter or homemade fruit jam.',
    image: '/mya-assets/04_food_savory_pancakes.jpg',
  },

  // --- PANQUECAS & CREPES ---
  {
    id: 'panqueca-salty',
    name: 'Panqueca Salty',
    namePt: 'Panqueca Salty Salgada',
    nameEn: 'Salty Savory Pancake Stack',
    category: 'pancakes',
    price: '€15.00',
    tag: 'Signature',
    isVegetarian: true,
    descriptionPt:
      'Duas panquecas fofas artesanais, ovos mexidos aveludados, queijo feta grego desfeito, salsa fresca picada e cebola frita crocante.',
    descriptionEn:
      'Stack of freshly flipped fluffy pancakes, creamy scrambled eggs, crumbled Greek feta cheese, fresh parsley, and crunchy crispy onions.',
    image: '/mya-assets/04_food_savory_pancakes.jpg',
  },
  {
    id: 'panqueca-sunny',
    name: 'Panqueca Sunny',
    namePt: 'Panqueca Sunny Lemon Curd & Manga',
    nameEn: 'Sunny Lemon Curd & Mango Pancakes',
    category: 'pancakes',
    price: '€13.70',
    tag: 'Best Seller',
    isVegetarian: true,
    descriptionPt:
      'Panquecas fofas servidas com iogurte grego (ou de soja vegan), lemon curd caseiro aveludado, manga fresca marinada com raspa de lima e granola artesanal crocante.',
    descriptionEn:
      'Fluffy pancakes topped with Greek yogurt (or vegan soy yogurt), homemade velvety lemon curd, fresh mango infused with lime zest, and homemade crunchy granola.',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },
  {
    id: 'panqueca-toffee',
    name: 'Panqueca Toffee',
    namePt: 'Panqueca Toffee de Banana e Caramelo Salgado',
    nameEn: 'Toffee Banana & Salted Caramel Pancakes',
    category: 'pancakes',
    price: '€13.00',
    tag: 'Best Seller',
    isVegetarian: true,
    descriptionPt:
      'Panquecas douradas fofas, rodelas de banana fresca, nozes crocantes tostadas e calda quente caseira de caramelo salgado.',
    descriptionEn:
      'Fresh golden fluffy pancakes layered with ripe banana slices, toasted crunchy walnuts, and warm house-crafted salted caramel sauce.',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },
  {
    id: 'panqueca-choco',
    name: 'Panqueca Choco',
    namePt: 'Panqueca Choco & Amêndoas Tostadas',
    nameEn: 'Choco & Flaked Almonds Pancakes',
    category: 'pancakes',
    price: '€12.70',
    isVegetarian: true,
    descriptionPt:
      'Panquecas fofas cobertas com molho artesanal de chocolate belga e chuva de amêndoas laminadas ligeiramente tostadas.',
    descriptionEn:
      'Fluffy pancake stack drizzled with warm Belgian chocolate sauce and sprinkled with toasted flaked almonds.',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },
  {
    id: 'panqueca-lace',
    name: 'Panqueca Lace',
    namePt: 'Crepe Rendado Lace com Frutos e Maracujá',
    nameEn: 'Lace Crepe with Passion Fruit & Berries',
    category: 'pancakes',
    price: '€12.70',
    isVegetarian: true,
    descriptionPt:
      'Crepe rendado delicado, curd de maracujá da Madeira caseiro, fruta fresca da época e coco ralado levemente tostado.',
    descriptionEn:
      'Delicate lacy crepe folded with homemade Madeira passion fruit curd, fresh seasonal berries & fruit, and toasted shredded coconut.',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },
  {
    id: 'panqueca-cozy',
    name: 'Cozy',
    namePt: 'Panqueca Cozy de Canela e Abóbora',
    nameEn: 'Cozy Spiced Pumpkin & Cinnamon Pancakes',
    category: 'pancakes',
    price: '€14.20',
    isVegetarian: true,
    descriptionPt:
      'Panquecas com espiral quente de canela, compota caseira de abóbora especiada, creme de queijo suave e sementes de abóbora caramelizadas.',
    descriptionEn:
      'Pancake stack infused with a warm cinnamon swirl, spiced pumpkin compote, whipped cream cheese frosting, and candied pumpkin seeds.',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },
  {
    id: 'panqueca-vita',
    name: 'Vita',
    namePt: 'Panqueca Vita (100% Vegan)',
    nameEn: 'Vita Plant-Based Pancakes (Vegan)',
    category: 'pancakes',
    price: '€15.00',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Panquecas 100% vegetais, maçã fatiada caramelizada com canela, manteiga de amendoim biológica cremosa, sementes de abóbora caramelizadas e néctar de agave puro.',
    descriptionEn:
      'Plant-based vegan pancakes topped with warm cinnamon-caramelized apple, creamy organic peanut butter, toasted pumpkin seeds, and pure agave nectar.',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },
  {
    id: 'panqueca-simple',
    name: 'Panqueca Simple',
    namePt: 'Panqueca Simple (Base Artesanal)',
    nameEn: 'Simple Traditional Pancakes',
    category: 'pancakes',
    price: '€7.20',
    isVegetarian: true,
    descriptionPt:
      'Duas panquecas fofas tradicionais preparadas na hora com o topping da sua preferência (mel, xarope de ácer ou manteiga).',
    descriptionEn:
      'Stack of traditional fluffy golden pancakes freshly made to order, served with your choice of topping (honey, maple syrup, or butter).',
    image: '/mya-assets/02_hero_strawberry_pancakes.jpg',
  },

  // --- WRAPS ---
  {
    id: 'wrap-frango',
    name: 'Wrap de Frango',
    namePt: 'Wrap de Frango com Mostarda e Mel',
    nameEn: 'Honey-Orange Mustard Chicken Wrap',
    category: 'wraps',
    price: '€14.40',
    tag: 'Popular',
    descriptionPt:
      'Frango marinado suculento com toque cítrico de laranja e mel, molho suave de mel e mostarda, mistura de verdes tenros, tomate fresco e abacate. Acompanha salada e batatas chips.',
    descriptionEn:
      'Tender seared chicken marinated in citrus orange and honey, signature honey mustard emulsion, crisp mixed greens, vine tomato, and sliced avocado. Served with side salad and crisps.',
    image: '/mya-assets/03_food_wraps.jpg',
  },
  {
    id: 'wrap-salmon',
    name: 'Wrap de Salmão',
    namePt: 'Wrap de Salmão Fumado e Manga',
    nameEn: 'Smoked Salmon & Mango Wrap',
    category: 'wraps',
    price: '€15.70',
    descriptionPt:
      'Salmão fumado de primeira qualidade, molho suave de iogurte e endro, verdes frescos seleccionados e fatias doces de manga madura. Acompanha salada da horta.',
    descriptionEn:
      'Premium cold-smoked salmon, light dill yogurt dressing, fresh baby greens, and ripe sweet mango slices wrapped in a soft tortilla. Served with fresh side salad.',
    image: '/mya-assets/03_food_wraps.jpg',
  },
  {
    id: 'wrap-tofu',
    name: 'Wrap Tofu',
    namePt: 'Wrap Tofu e Grão ao Caril (Vegan)',
    nameEn: 'Curried Tofu & Chickpea Wrap (Vegan)',
    category: 'wraps',
    price: '€13.40',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Caril aromático caseiro de tofu e grão-de-bico, molho de laranja e mostarda, verdes frescos e pimentos salteados aromáticos.',
    descriptionEn:
      'Aromatic homemade tofu and chickpea curry, zesty orange mustard dressing, mixed baby greens, and warm sautéed sweet peppers rolled in a soft wrap.',
    image: '/mya-assets/03_food_wraps.jpg',
  },

  // --- HAMBÚRGUERES ---
  {
    id: 'burger-muhh',
    name: 'Hambúrguer Muhh',
    namePt: 'Hambúrguer Muhh em Pão Brioche',
    nameEn: 'Muhh Artisan Brioche Beef Burger',
    category: 'burgers',
    price: '€19.20',
    tag: 'Signature',
    descriptionPt:
      'Pão brioche fofo artesanal, hambúrguer de novilho suculento, queijo branco fresco grelhado, espinafres salteados, pimentos assados e cebola lentamente caramelizada.',
    descriptionEn:
      'Glazed artisanal brioche bun, juicy premium beef burger patty, grilled white cheese, sautéed spinach, roasted sweet peppers, and slow-caramelized onions.',
    image: '/mya-assets/03_food_wraps.jpg',
  },
  {
    id: 'burger-frango',
    name: 'Hambúrguer de Frango',
    namePt: 'Hambúrguer de Frango e Abacate',
    nameEn: 'Grilled Chicken & Avocado Brioche Burger',
    category: 'burgers',
    price: '€15.30',
    descriptionPt:
      'Pão brioche dourado, hambúrguer de peito de frango temperado, queijo cheddar fundido, abacate fatiado fresco e cebola caramelizada. Acompanha salada fresca.',
    descriptionEn:
      'Soft brioche bun, seasoned grilled chicken patty, melted cheddar cheese, fresh avocado slices, and caramelized onion. Served with fresh garden salad.',
    image: '/mya-assets/03_food_wraps.jpg',
  },
  {
    id: 'burger-nature',
    name: 'Hambúrguer Nature',
    namePt: 'Hambúrguer Nature de Vegetais e Grão',
    nameEn: 'Nature Chickpea & Roasted Veggie Burger',
    category: 'burgers',
    price: '€15.30',
    isVegetarian: true,
    descriptionPt:
      'Pão brioche com hambúrguer artesanal de grão-de-bico e legumes assados no forno, pimentos doces salteados e cebola caramelizada.',
    descriptionEn:
      'Soft brioche bun filled with a house-crafted roasted chickpea & garden vegetable patty, sweet sautéed bell peppers, and slow-caramelized onion.',
    image: '/mya-assets/03_food_wraps.jpg',
  },

  // --- BOWLS & SALADAS ---
  {
    id: 'bowl-frango',
    name: 'Bowl de Frango',
    namePt: 'Bowl de Frango, Quinoa e Laranja',
    nameEn: 'Honey-Orange Chicken & Quinoa Bowl',
    category: 'bowls',
    price: '€19.60',
    tag: 'Nutritious',
    descriptionPt:
      'Base generosa de verdes e quinoa biológica, gomos frescos de laranja, salada de tomate, cebola e pepino, queijo fresco, frango cozinhado com mel e laranja e mix de sementes tostadas.',
    descriptionEn:
      'Wholesome bowl with organic quinoa and seasonal greens, sweet orange segments, vine tomato, cucumber and red onion salad, fresh cheese, seared honey-orange glazed chicken, and toasted seeds.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'bowl-camarao',
    name: 'Bowl de Camarão',
    namePt: 'Bowl Tropical de Camarão e Abacaxi',
    nameEn: 'Tropical Prawn & Pineapple Salsa Bowl',
    category: 'bowls',
    price: '€19.80',
    descriptionPt:
      'Camarão grelhado salteado com alho e ervas, quinoa biológica, folhas verdes da época, cubos de abacate, salsa fresca de abacaxi com lima e redução balsâmica cítrica.',
    descriptionEn:
      'Sautéed garlic and herb marinated prawns, organic quinoa, seasonal baby greens, diced avocado, tropical pineapple & lime salsa, and a citrus vinaigrette.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'bowl-veggie',
    name: 'Bowl Veggie',
    namePt: 'Bowl Veggie com Hummus e Grão Tostado (Vegan)',
    nameEn: 'Veggie Nourish Bowl with Beet Hummus (Vegan)',
    category: 'bowls',
    price: '€16.50',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Quinoa biológica, grão-de-bico crocante temperado, hummus caseiro de beterraba, tomate cherry, pepino, fatias de abacate, cogumelos marinados e molho cremoso de tahini.',
    descriptionEn:
      'Organic quinoa base, spiced roasted chickpeas, house beetroot hummus, cherry tomatoes, crisp cucumber, avocado slices, marinated mushrooms, and creamy tahini drizzle.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },

  // --- BATIDOS & SMOOTHIES ---
  {
    id: 'batido-love',
    name: 'Batido Love',
    namePt: 'Batido Love de Maracujá e Gengibre',
    nameEn: 'Love Shake (Passion Fruit, Mint & Ginger)',
    category: 'shakes',
    price: '€6.40',
    tag: 'Signature',
    isVegetarian: true,
    descriptionPt:
      'Smoothie aveludado de iogurte, banana fresca, polpa pura de maracujá da Madeira, flocos de aveia, folhas de hortelã e gengibre ralado fresco.',
    descriptionEn:
      'Velvety yogurt smoothie blended with ripe banana, fresh Madeira passion fruit, rolled oats, cooling garden mint, and a touch of grated ginger.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'batido-cookie',
    name: 'Batido Cookie',
    namePt: 'Batido Cookie de Morango e Bolacha',
    nameEn: 'Cookie Milkshake (Strawberry & Biscuit)',
    category: 'shakes',
    price: '€5.60',
    tag: 'Best Seller',
    isVegetarian: true,
    descriptionPt:
      'Batido cremoso e indulgente com banana, morangos maduros, pedaços crocantes de bolacha e leite à sua escolha (leite ou bebida vegetal).',
    descriptionEn:
      'Indulgent creamy milkshake blended with ripe banana, sweet strawberries, artisan biscuit crumbles, and milk of your choice (dairy or oat/soy).',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'batido-popeye',
    name: 'Batido Popeye',
    namePt: 'Batido Popeye Green Detox (Vegan)',
    nameEn: 'Popeye Green Smoothie (Vegan)',
    category: 'shakes',
    price: '€6.10',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Espinafres frescos bebé, ananás doce, banana madura, maçã verde crocante e bebida suave de coco biológica.',
    descriptionEn:
      'Refreshing green booster with fresh baby spinach, sweet pineapple, banana, crisp green apple, and smooth organic coconut milk.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'batido-pinky',
    name: 'Batido Pinky',
    namePt: 'Batido Pinky de Beterraba e Ananás',
    nameEn: 'Pinky Smoothie (Beetroot & Pineapple)',
    category: 'shakes',
    price: '€5.60',
    isVegetarian: true,
    descriptionPt:
      'Smoothie cor-de-rosa vibrante com iogurte cremoso, beterraba pura, banana doce e ananás refrescante.',
    descriptionEn:
      'Vibrant pink yogurt smoothie packed with natural antioxidants, pure beetroot, sweet banana, and juicy tropical pineapple.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'batido-nutty',
    name: 'Nutty',
    namePt: 'Batido Nutty de Manteiga de Amendoim (Vegan)',
    nameEn: 'Nutty Shake (Peanut Butter & Coconut)',
    category: 'shakes',
    price: '€7.00',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Bebida cremosa de coco, banana madura, generosa colher de manteiga de amendoim biológica e fio de néctar de agave.',
    descriptionEn:
      'Rich plant-based protein blend with coconut milk, ripe banana, creamy organic peanut butter, and a hint of pure agave.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'batido-tropical',
    name: 'Tropical Shake',
    namePt: 'Tropical Shake de Manga e Coco (Vegan)',
    nameEn: 'Tropical Shake (Pure Mango & Coconut)',
    category: 'shakes',
    price: '€4.90',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Batido tropical aveludado de manga fresca madura com bebida de coco refrigerada.',
    descriptionEn:
      'Silky smooth tropical fruit shake with pure sweet mango and chilled coconut milk.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },

  // --- CAFETARIA & BEBIDAS ---
  {
    id: 'mya-iced-coffee',
    name: 'Mya Iced Coffee',
    namePt: 'Mya Iced Coffee de Especialidade',
    nameEn: 'Mya Signature Iced Coffee',
    category: 'drinks',
    price: '€5.60',
    tag: 'Signature',
    isVegetarian: true,
    descriptionPt:
      'Café duplo de especialidade servido com gelo, bebida vegetal à sua escolha e um toque suave de baunilha.',
    descriptionEn:
      'Specialty double espresso poured over crystal ice, paired with your choice of plant-based milk and a subtle hint of vanilla.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    namePt: 'Matcha Latte Cerimonial',
    nameEn: 'Ceremonial Matcha Latte',
    category: 'drinks',
    price: '€7.20',
    tag: 'Popular',
    isVegetarian: true,
    descriptionPt:
      'Matcha cerimonial japonês biológico batido na hora com bebida cremosa de aveia (servido quente ou com gelo).',
    descriptionEn:
      'Premium ceremonial grade Japanese green tea freshly whisked with velvety steamed or iced oat milk.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'matcha-outono',
    name: 'Matcha de Outono (Frio)',
    namePt: 'Matcha de Outono Frio com Espuma Aveludada',
    nameEn: 'Iced Autumn Spiced Matcha',
    category: 'drinks',
    price: '€7.50',
    isVegetarian: true,
    descriptionPt:
      'Matcha frio especial batido com especiarias suaves de outono, baunilha e coroado com espuma cremosa.',
    descriptionEn:
      'Cold seasonal ceremonial matcha infused with gentle autumn spices, vanilla notes, and topped with rich velvety cold foam.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'latte-macchiato',
    name: 'Latte Macchiato',
    namePt: 'Latte Macchiato com Bebida Vegetal',
    nameEn: 'Plant-Based Latte Macchiato',
    category: 'drinks',
    price: '€5.00',
    isVegetarian: true,
    descriptionPt:
      'Espresso de especialidade em camadas com bebida vegetal vaporizada aveludada da sua preferência.',
    descriptionEn:
      'Layered specialty espresso poured through silky steamed plant-based milk of your choice.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'cinnamon-latte',
    name: 'Cinnamon Latte',
    namePt: 'Cinnamon Latte com Toque Quente de Canela',
    nameEn: 'Cinnamon Latte with Warm Spices',
    category: 'drinks',
    price: '€6.00',
    isVegetarian: true,
    descriptionPt:
      'Espresso aromático com infusão suave de canela e leite vegetal vaporizado com espuma densa.',
    descriptionEn:
      'Rich espresso paired with warm ground cinnamon notes and velvety steamed milk.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'cinnamon-macchiato',
    name: 'Cinnamon Macchiato',
    namePt: 'Cinnamon Macchiato com Leite Condensado',
    nameEn: 'Sweet Cinnamon Macchiato',
    category: 'drinks',
    price: '€6.50',
    isVegetarian: true,
    descriptionPt:
      'Base doce de leite condensado, café espresso encorpado e finalizado com canela aromática.',
    descriptionEn:
      'Indulgent sweet condensed milk base topped with a shot of bold espresso and aromatic cinnamon dust.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'moccaccino',
    name: 'Moccaccino',
    namePt: 'Moccaccino com Chocolate Negro',
    nameEn: 'Artisan Dark Chocolate Moccaccino',
    category: 'drinks',
    price: '€5.00',
    isVegetarian: true,
    descriptionPt:
      'Chocolate negro aveludado derretido com espresso duplo e leite vaporizado com espuma sedosa.',
    descriptionEn:
      'Velvety dark chocolate melted into rich double espresso and steamed plant milk.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'sumo-laranja',
    name: 'Sumo de Laranja Natural',
    namePt: 'Sumo de Laranja do Algarve Espremido na Hora',
    nameEn: 'Freshly Squeezed Orange Juice',
    category: 'drinks',
    price: '€5.00',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Sumo 100% natural espremido no momento a partir de laranjas doces seleccionadas, sem açúcares adicionados.',
    descriptionEn:
      '100% pure fresh-squeezed orange juice prepared right when you order, with no added sugars.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'sumo-do-dia',
    name: 'Sumo do Dia',
    namePt: 'Sumo do Dia com Frutas Frescas da Época',
    nameEn: 'Fresh Daily Cold Pressed Juice',
    category: 'drinks',
    price: '€4.00',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Combinação diária refrescante de frutas tropicais da Madeira e da época (consulte a equipa para a receita de hoje).',
    descriptionEn:
      'Daily rotating chef selection of freshly pressed seasonal and tropical Madeira fruits.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
  {
    id: 'chas-especiais',
    name: 'Chás e Infusões',
    namePt: 'Selecção de Chás e Infusões Botânicas',
    nameEn: 'Specialty Botanical Teas & Infusions',
    category: 'drinks',
    price: '€3.80',
    isVegan: true,
    isVegetarian: true,
    descriptionPt:
      'Escolha entre Hortelã Fresca, Immunity Booster, Cherry Love, Peachy Blossom ou Marrocos Chá Verde.',
    descriptionEn:
      'Choice of Fresh Mint, Immunity Booster, Cherry Love, Peachy Blossom, or Moroccan Spiced Green Tea.',
    image: '/mya-assets/07_interior_pink_mint_counter.jpg',
  },
];
