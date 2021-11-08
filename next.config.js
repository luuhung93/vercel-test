/** @type {import('next').NextConfig} */
module.exports = {
	trailingSlash: true,
	reactStrictMode: true,
	images: {
		domains: ['cdn.healthykitchen101.com', 'healthykitchen101.com', '0.gravatar.com', '1.gravatar.com', '2.gravatar.com', 'secure.gravatar.com', 'localhost', 'images.dmca.com'],
	},
	env: {
		headerMenu: 2,
		footerMenu: 704,
		popularIds: [5032, 7887, 7319, 140, 575, 327],
		tagIds: [13541, 12383, 1864, 7852, 6213, 3434, 11173, 14, 1524, 1454],
		ourTeamIds: [1, 723, 719, 721],
	},
	async redirects() {
		return [
			{
				source: '/best-knife-sharpeners/',
				destination: '/buying-guides/best-knife-sharpeners/',
				permanent: true
			},
			{
				source: '/best-kitchen-knives/',
				destination: '/buying-guides/best-kitchen-knives/',
				permanent: true
			},
			{
				source: '/best-electric-knife-sharpeners/',
				destination: '/buying-guides/best-electric-knife-sharpeners/',
				permanent: true
			},
			{
				source: '/best-ice-makers/',
				destination: '/buying-guides/best-ice-makers/',
				permanent: true
			},
			{
				source: '/best-whole-house-water-filters-for-well-water/',
				destination: '/buying-guides/best-whole-house-water-filters-for-well-water/',
				permanent: true
			},
			{
				source: '/best-nonstick-skillets/',
				destination: '/buying-guides/best-nonstick-skillets/',
				permanent: true
			},
			{
				source: '/best-flat-top-grills/',
				destination: '/buying-guides/best-flat-top-grills/',
				permanent: true
			},
			{
				source: '/best-wall-mount-range-hoods/',
				destination: '/buying-guides/best-wall-mount-range-hoods/',
				permanent: true
			},
			{
				source: '/instant-pot-viva-vs-duo/',
				destination: '/buying-guides/instant-pot-viva-vs-duo/',
				permanent: true
			},
			{
				source: '/best-personal-blenders/',
				destination: '/buying-guides/best-personal-blenders/',
				permanent: true
			},
			{
				source: '/instant-pot-air-fryer-lid-reviews/',
				destination: '/buying-guides/instant-pot-air-fryer-lid-reviews/',
				permanent: true
			},
			{
				source: '/instant-pot-duo-vs-duo-nova/',
				destination: '/buying-guides/instant-pot-duo-vs-duo-nova/',
				permanent: true
			},
			{
				source: '/best-kitchen-trash-cans/',
				destination: '/buying-guides/best-kitchen-trash-cans/',
				permanent: true
			},
			{
				source: '/best-air-fryer-toaster-ovens/',
				destination: '/buying-guides/best-air-fryer-toaster-ovens/',
				permanent: true
			},
			{
				source: '/best-grills/',
				destination: '/buying-guides/best-grills/',
				permanent: true
			},
			{
				source: '/best-juicers/',
				destination: '/buying-guides/best-juicers/',
				permanent: true
			},
			{
				source: '/best-commercial-juicer-reviews/',
				destination: '/buying-guides/best-commercial-juicer-reviews/',
				permanent: true
			},
			{
				source: '/best-centrifugal-juicers/',
				destination: '/buying-guides/best-centrifugal-juicers/',
				permanent: true
			},
			{
				source: '/best-gas-grills/',
				destination: '/buying-guides/best-gas-grills/',
				permanent: true
			},
			{
				source: '/best-small-air-fryers/',
				destination: '/buying-guides/best-small-air-fryers/',
				permanent: true
			},
			{
				source: '/best-japanese-knives/',
				destination: '/buying-guides/best-japanese-knives/',
				permanent: true
			},
			{
				source: '/best-portable-ice-maker-reviews/',
				destination: '/buying-guides/best-portable-ice-maker-reviews/',
				permanent: true
			},
			{
				source: '/best-masticating-juicers/',
				destination: '/buying-guides/best-masticating-juicers/',
				permanent: true
			},
			{
				source: '/best-ninja-blender-reviews/',
				destination: '/buying-guides/best-ninja-blender-reviews/',
				permanent: true
			},
			{
				source: '/best-deep-fryers/',
				destination: '/buying-guides/best-deep-fryers/',
				permanent: true
			},
			{
				source: '/best-electric-skillets/',
				destination: '/buying-guides/best-electric-skillets/',
				permanent: true
			},
			{
				source: '/best-paring-knives/',
				destination: '/buying-guides/best-paring-knives/',
				permanent: true
			},
			{
				source: '/best-water-softeners/',
				destination: '/buying-guides/best-water-softeners/',
				permanent: true
			},
			{
				source: '/best-cheese-graters/',
				destination: '/buying-guides/best-cheese-graters/',
				permanent: true
			},
			{
				source: '/best-delta-kitchen-faucets/',
				destination: '/buying-guides/best-delta-kitchen-faucets/',
				permanent: true
			},
			{
				source: '/best-water-filters/',
				destination: '/buying-guides/best-water-filters/',
				permanent: true
			},
			{
				source: '/best-cutting-boards/',
				destination: '/buying-guides/best-cutting-boards/',
				permanent: true
			},
			{
				source: '/best-santoku-knives/',
				destination: '/buying-guides/best-santoku-knives/',
				permanent: true
			},
			{
				source: '/best-small-toaster-oven-reviews/',
				destination: '/buying-guides/best-small-toaster-oven-reviews/',
				permanent: true
			},
			{
				source: '/best-countertop-water-filters/',
				destination: '/buying-guides/best-countertop-water-filters/',
				permanent: true
			},
			{
				source: '/best-magnetic-knife-holders/',
				destination: '/buying-guides/best-magnetic-knife-holders/',
				permanent: true
			},
			{
				source: '/best-twin-gear-juicers/',
				destination: '/buying-guides/best-twin-gear-juicers/',
				permanent: true
			},
			{
				source: '/best-ja-henckels-steak-knife-sets/',
				destination: '/buying-guides/best-ja-henckels-steak-knife-sets/',
				permanent: true
			},
			{
				source: '/best-mini-food-processors/',
				destination: '/buying-guides/best-mini-food-processors/',
				permanent: true
			},
			{
				source: '/best-ceramic-cookware-sets/',
				destination: '/buying-guides/best-ceramic-cookware-sets/',
				permanent: true
			},
			{
				source: '/best-kitchen-shears/',
				destination: '/buying-guides/best-kitchen-shears/',
				permanent: true
			},
			{
				source: '/best-smokeless-indoor-grills/',
				destination: '/buying-guides/best-smokeless-indoor-grills/',
				permanent: true
			},
			{
				source: '/best-copper-cookware-sets/',
				destination: '/buying-guides/best-copper-cookware-sets/',
				permanent: true
			},
			{
				source: '/best-chefs-knives/',
				destination: '/buying-guides/best-chefs-knives/',
				permanent: true
			},
			{
				source: '/best-large-air-fryers/',
				destination: '/buying-guides/best-large-air-fryers/',
				permanent: true
			},
			{
				source: '/best-portable-grill-reviews/',
				destination: '/buying-guides/best-portable-grill-reviews/',
				permanent: true
			},
			{
				source: '/best-small-microwave-ovens/',
				destination: '/buying-guides/best-small-microwave-ovens/',
				permanent: true
			},
			{
				source: '/best-pellet-grill-reviews/',
				destination: '/buying-guides/best-pellet-grill-reviews/',
				permanent: true
			},
			{
				source: '/best-air-fryers/',
				destination: '/buying-guides/best-air-fryers/',
				permanent: true
			},
			{
				source: '/best-kitchen-faucets/',
				destination: '/buying-guides/best-kitchen-faucets/',
				permanent: true
			},
			{
				source: '/best-built-in-microwave-ovens/',
				destination: '/buying-guides/best-built-in-microwave-ovens/',
				permanent: true
			},
			{
				source: '/best-bread-machine-reviews/',
				destination: '/buying-guides/best-bread-machine-reviews/',
				permanent: true
			},
			{
				source: '/best-portable-gas-grills/',
				destination: '/buying-guides/best-portable-gas-grills/',
				permanent: true
			},
			{
				source: '/best-nonstick-cookware-sets/',
				destination: '/buying-guides/best-nonstick-cookware-sets/',
				permanent: true
			},
			{
				source: '/best-kamado-grills/',
				destination: '/buying-guides/best-kamado-grills/',
				permanent: true
			},
			{
				source: '/best-propane-grills/',
				destination: '/buying-guides/best-propane-grills/',
				permanent: true
			},
			{
				source: '/best-dutch-oven-reviews/',
				destination: '/buying-guides/best-dutch-oven-reviews/',
				permanent: true
			},
			{
				source: '/best-electric-grills/',
				destination: '/buying-guides/best-electric-grills/',
				permanent: true
			},
			{
				source: '/best-outdoor-grill-reviews/',
				destination: '/buying-guides/best-outdoor-grill-reviews/',
				permanent: true
			},
			{
				source: '/best-charcoal-grill-reviews/',
				destination: '/buying-guides/best-charcoal-grill-reviews/',
				permanent: true
			},
			{
				source: '/best-counter-depth-refrigerators/',
				destination: '/buying-guides/best-counter-depth-refrigerators/',
				permanent: true
			},
			{
				source: '/best-wine-refrigerators/',
				destination: '/buying-guides/best-wine-refrigerators/',
				permanent: true
			},
			{
				source: '/best-french-door-refrigerators/',
				destination: '/buying-guides/best-french-door-refrigerators/',
				permanent: true
			},
			{
				source: '/best-natural-gas-grill-reviews/',
				destination: '/buying-guides/best-natural-gas-grill-reviews/',
				permanent: true
			},
			{
				source: '/best-indoor-grill-reviews/',
				destination: '/buying-guides/best-indoor-grill-reviews/',
				permanent: true
			},
			{
				source: '/best-manual-knife-sharpeners/',
				destination: '/buying-guides/best-manual-knife-sharpeners/',
				permanent: true
			},
			{
				source: '/best-ice-cream-maker-reviews/',
				destination: '/buying-guides/best-ice-cream-maker-reviews/',
				permanent: true
			},
			{
				source: '/best-range-hood-reviews/',
				destination: '/buying-guides/best-range-hood-reviews/',
				permanent: true
			},
			{
				source: '/best-stainless-steel-cookware-sets/',
				destination: '/buying-guides/best-stainless-steel-cookware-sets/',
				permanent: true
			},
			{
				source: '/best-coffee-makers/',
				destination: '/buying-guides/best-coffee-makers/',
				permanent: true
			},
			{
				source: '/best-automatic-espresso-machines/',
				destination: '/buying-guides/best-automatic-espresso-machines/',
				permanent: true
			},
			{
				source: '/best-cookware-sets/',
				destination: '/buying-guides/best-cookware-sets/',
				permanent: true
			},
			{
				source: '/ja-henckels-knife-block-set-reviews/',
				destination: '/buying-guides/ja-henckels-knife-block-set-reviews/',
				permanent: true
			},
			{
				source: '/best-microwave-ovens/',
				destination: '/buying-guides/best-microwave-ovens/',
				permanent: true
			},
			{
				source: '/best-kitchen-knife-sets/',
				destination: '/buying-guides/best-kitchen-knife-sets/',
				permanent: true
			},
			{
				source: '/best-waffle-maker-reviews/',
				destination: '/buying-guides/best-waffle-maker-reviews/',
				permanent: true
			},
			{
				source: '/best-cold-brew-coffee-makers/',
				destination: '/buying-guides/best-cold-brew-coffee-makers/',
				permanent: true
			},
			{
				source: '/best-undercounter-ice-makers/',
				destination: '/buying-guides/best-undercounter-ice-makers/',
				permanent: true
			},
			{
				source: '/best-juicers-for-leafy-greens/',
				destination: '/buying-guides/best-juicers-for-leafy-greens/',
				permanent: true
			},
			{
				source: '/best-steak-knives/',
				destination: '/buying-guides/best-steak-knives/',
				permanent: true
			},
			{
				source: '/best-blender-reviews/',
				destination: '/buying-guides/best-blender-reviews/',
				permanent: true
			},
			{
				source: '/best-electric-kettles/',
				destination: '/buying-guides/best-electric-kettles/',
				permanent: true
			},
			{
				source: '/best-toaster-ovens/',
				destination: '/buying-guides/best-toaster-ovens/',
				permanent: true
			},
			{
				source: '/best-kitchenaid-mixers/',
				destination: '/buying-guides/best-kitchenaid-mixers/',
				permanent: true
			},
			{
				source: '/best-stand-mixers/',
				destination: '/buying-guides/best-stand-mixers/',
				permanent: true
			},
			{
				source: '/best-induction-cooktops/',
				destination: '/buying-guides/best-induction-cooktops/',
				permanent: true
			},
			{
				source: '/best-pressure-cookers/',
				destination: '/buying-guides/best-pressure-cookers/',
				permanent: true
			},
			{
				source: '/best-mixers/',
				destination: '/buying-guides/best-mixers/',
				permanent: true
			},
			{
				source: '/best-electric-cooktops/',
				destination: '/buying-guides/best-electric-cooktops/',
				permanent: true
			},
			{
				source: '/best-convection-toaster-oven-reviews/',
				destination: '/buying-guides/best-convection-toaster-oven-reviews/',
				permanent: true
			},
			{
				source: '/best-rice-cookers/',
				destination: '/buying-guides/best-rice-cookers/',
				permanent: true
			},
			{
				source: '/best-sous-vide-reviews/',
				destination: '/buying-guides/best-sous-vide-reviews/',
				permanent: true
			},
			{
				source: '/best-side-by-side-refrigerators/',
				destination: '/buying-guides/best-side-by-side-refrigerators/',
				permanent: true
			},
			{
				source: '/best-hand-mixers/',
				destination: '/buying-guides/best-hand-mixers/',
				permanent: true
			},
			{
				source: '/best-gas-electric-ranges/',
				destination: '/buying-guides/best-gas-electric-ranges/',
				permanent: true
			},
			{
				source: '/best-wall-oven-reviews/',
				destination: '/buying-guides/best-wall-oven-reviews/',
				permanent: true
			},
			{
				source: '/best-mini-fridges/',
				destination: '/buying-guides/best-mini-fridges/',
				permanent: true
			},
			{
				source: '/best-espresso-machines/',
				destination: '/buying-guides/best-espresso-machines/',
				permanent: true
			},
			{
				source: '/best-instant-pot-accessories/',
				destination: '/buying-guides/best-instant-pot-accessories/',
				permanent: true
			},
			{
				source: '/best-refrigerator-water-filters/',
				destination: '/buying-guides/best-refrigerator-water-filters/',
				permanent: true
			},
			{
				source: '/best-gas-ranges/',
				destination: '/buying-guides/best-gas-ranges/',
				permanent: true
			},
			{
				source: '/best-apple-utensils/',
				destination: '/buying-guides/best-apple-utensils/',
				permanent: true
			},
			{
				source: '/best-water-cooler-dispensers/',
				destination: '/buying-guides/best-water-cooler-dispensers/',
				permanent: true
			},
			{
				source: '/best-bottom-freezer-refrigerators/',
				destination: '/buying-guides/best-bottom-freezer-refrigerators/',
				permanent: true
			},
			{
				source: '/best-instant-pots/',
				destination: '/buying-guides/best-instant-pots/',
				permanent: true
			},
			{
				source: '/best-shower-filters/',
				destination: '/buying-guides/best-shower-filters/',
				permanent: true
			},
			{
				source: '/best-vitamix-blender-reviews/',
				destination: '/buying-guides/best-vitamix-blender-reviews/',
				permanent: true
			},
			{
				source: '/best-food-processors/',
				destination: '/buying-guides/best-food-processors/',
				permanent: true
			},
			{
				source: '/best-whole-house-water-filters/',
				destination: '/buying-guides/best-whole-house-water-filters/',
				permanent: true
			},
			{
				source: '/best-immersion-blenders/',
				destination: '/buying-guides/best-immersion-blenders/',
				permanent: true
			},
			{
				source: '/best-water-filter-pitchers/',
				destination: '/buying-guides/best-water-filter-pitchers/',
				permanent: true
			},
			{
				source: '/best-electric-range-reviews/',
				destination: '/buying-guides/best-electric-range-reviews/',
				permanent: true
			},
			{
				source: '/best-food-dehydrator-reviews/',
				destination: '/buying-guides/best-food-dehydrator-reviews/',
				permanent: true
			},
			{
				source: '/best-ductless-range-hoods/',
				destination: '/buying-guides/best-ductless-range-hoods/',
				permanent: true
			},
			{
				source: '/best-cuisinart-food-processors/',
				destination: '/buying-guides/best-cuisinart-food-processors/',
				permanent: true
			},
			{
				source: '/best-electric-smoker-reviews/',
				destination: '/buying-guides/best-electric-smoker-reviews/',
				permanent: true
			},
			{
				source: '/best-meat-thermometer-reviews/',
				destination: '/buying-guides/best-meat-thermometer-reviews/',
				permanent: true
			},
			{
				source: '/best-under-sink-water-filters/',
				destination: '/buying-guides/best-under-sink-water-filters/',
				permanent: true
			},
			{
				source: '/best-garbage-disposals/',
				destination: '/buying-guides/best-garbage-disposals/',
				permanent: true
			},
			{
				source: '/best-faucet-water-filters/',
				destination: '/buying-guides/best-faucet-water-filters/',
				permanent: true
			},
			{
				source: '/best-pull-down-kitchen-faucets/',
				destination: '/buying-guides/best-pull-down-kitchen-faucets/',
				permanent: true
			},
			{
				source: '/best-gravity-water-filters/',
				destination: '/buying-guides/best-gravity-water-filters/',
				permanent: true
			},
			{
				source: '/best-kitchen-sinks/',
				destination: '/buying-guides/best-kitchen-sinks/',
				permanent: true
			},
			{
				source: '/best-dishwashers/',
				destination: '/buying-guides/best-dishwashers/',
				permanent: true
			},
			{
				source: '/ja-henckels-knife-set-reviews/',
				destination: '/buying-guides/ja-henckels-knife-set-reviews/',
				permanent: true
			},
			{
				source: '/best-can-jar-bottle-wine-openers/',
				destination: '/buying-guides/best-can-jar-bottle-wine-openers/',
				permanent: true
			},
			{
				source: '/best-apple-corers/',
				destination: '/buying-guides/best-apple-corers/',
				permanent: true
			},
			{
				source: '/best-apple-peeler-corer-slicer/',
				destination: '/reviews/best-apple-peeler-corer-slicer/',
				permanent: true
			},
			{
				source: '/best-apple-peelers/',
				destination: '/buying-guides/best-apple-peelers/',
				permanent: true
			},
			{
				source: '/best-apple-slicers/',
				destination: '/buying-guides/best-apple-slicers/',
				permanent: true
			},
			{
				source: '/best-touchless-kitchen-faucets/',
				destination: '/buying-guides/best-touchless-kitchen-faucets/',
				permanent: true
			},
			{
				source: '/best-moen-kitchen-faucets/',
				destination: '/buying-guides/best-moen-kitchen-faucets/',
				permanent: true
			},
			{
				source: '/chicago-cutlery-knife-set-reviews/',
				destination: '/buying-guides/chicago-cutlery-knife-set-reviews/',
				permanent: true
			},
			{
				source: '/vitamix-5200-vs-5300/',
				destination: '/buying-guides/vitamix-5200-vs-5300/',
				permanent: true
			},
			{
				source: '/best-reverse-osmosis-system-reviews/',
				destination: '/buying-guides/best-reverse-osmosis-system-reviews/',
				permanent: true
			},
			{
				source: '/how-to-cut-papaya/',
				destination: '/blog/how-to-cut-papaya/',
				permanent: true
			},
			{
				source: '/how-to-cut-watermelon/',
				destination: '/blog/how-to-cut-watermelon/',
				permanent: true
			},
			{
				source: '/how-to-cut-dragon-fruit/',
				destination: '/blog/how-to-cut-dragon-fruit/',
				permanent: true
			},
			{
				source: '/how-to-cut-pomegranate/',
				destination: '/blog/how-to-cut-pomegranate/',
				permanent: true
			},
			{
				source: '/how-do-self-cleaning-ovens-work/',
				destination: '/blog/how-do-self-cleaning-ovens-work/',
				permanent: true
			},
			{
				source: '/how-to-defrost-salmon/',
				destination: '/blog/how-to-defrost-salmon/',
				permanent: true
			},
			{
				source: '/how-to-defrost-shrimp/',
				destination: '/blog/how-to-defrost-shrimp/',
				permanent: true
			},
			{
				source: '/how-to-defrost-ground-beef/',
				destination: '/blog/how-to-defrost-ground-beef/',
				permanent: true
			},
			{
				source: '/how-to-defrost-chicken/',
				destination: '/blog/how-to-defrost-chicken/',
				permanent: true
			},
			{
				source: '/how-to-thaw-a-turkey/',
				destination: '/blog/how-to-thaw-a-turkey/',
				permanent: true
			},
			{
				source: '/how-to-reheat-pulled-pork/',
				destination: '/blog/how-to-reheat-pulled-pork/',
				permanent: true
			},
			{
				source: '/how-to-reheat-turkey/',
				destination: '/blog/how-to-reheat-turkey/',
				permanent: true
			},
			{
				source: '/how-to-reheat-brisket/',
				destination: '/blog/how-to-reheat-brisket/',
				permanent: true
			},
			{
				source: '/how-to-reheat-pasta/',
				destination: '/blog/how-to-reheat-pasta/',
				permanent: true
			},
			{
				source: '/how-to-dry-cilantro/',
				destination: '/blog/how-to-dry-cilantro/',
				permanent: true
			},
			{
				source: '/how-to-freeze-spinach/',
				destination: '/blog/how-to-freeze-spinach/',
				permanent: true
			},
			{
				source: '/how-to-dry-thyme/',
				destination: '/blog/how-to-dry-thyme/',
				permanent: true
			},
			{
				source: '/how-to-dry-orange-slices/',
				destination: '/blog/how-to-dry-orange-slices/',
				permanent: true
			},
			{
				source: '/how-to-dry-dill/',
				destination: '/blog/how-to-dry-dill/',
				permanent: true
			},
			{
				source: '/how-to-dry-parsley/',
				destination: '/blog/how-to-dry-parsley/',
				permanent: true
			},
			{
				source: '/best-way-to-reheat-pizza/',
				destination: '/blog/best-way-to-reheat-pizza/',
				permanent: true
			},
			{
				source: '/apple-cider-vs-apple-cider-vinegar/',
				destination: '/blog/apple-cider-vs-apple-cider-vinegar/',
				permanent: true
			},
			{
				source: '/how-to-dry-cranberries/',
				destination: '/blog/how-to-dry-cranberries/',
				permanent: true
			},
			{
				source: '/how-to-make-apple-cider-vinegar/',
				destination: '/blog/how-to-make-apple-cider-vinegar/',
				permanent: true
			},
			{
				source: '/apple-cider-vinegar-benefits/',
				destination: '/blog/apple-cider-vinegar-benefits/',
				permanent: true
			},
			{
				source: '/substitutes-for-apple-cider-vinegar/',
				destination: '/blog/substitutes-for-apple-cider-vinegar/',
				permanent: true
			},
			{
				source: '/how-to-drink-apple-cider-vinegar/',
				destination: '/blog/how-to-drink-apple-cider-vinegar/',
				permanent: true
			},
			{
				source: '/how-to-dry-mint/',
				destination: '/blog/how-to-dry-mint/',
				permanent: true
			},
			{
				source: '/how-to-dry-mushrooms/',
				destination: '/blog/how-to-dry-mushrooms/',
				permanent: true
			},
			{
				source: '/how-to-dry-rosemary/',
				destination: '/blog/how-to-dry-rosemary/',
				permanent: true
			},
			{
				source: '/how-to-dry-oregano/',
				destination: '/blog/how-to-dry-oregano/',
				permanent: true
			},
			{
				source: '/how-to-dry-peppers/',
				destination: '/blog/how-to-dry-peppers/',
				permanent: true
			},
			{
				source: '/how-to-dry-basil/',
				destination: '/blog/how-to-dry-basil/',
				permanent: true
			},
			{
				source: '/how-to-store-apples/',
				destination: '/blog/how-to-store-apples/',
				permanent: true
			},
			{
				source: '/how-to-store-sweet-potatoes/',
				destination: '/blog/how-to-store-sweet-potatoes/',
				permanent: true
			},
			{
				source: '/how-to-store-lemons-and-limes/',
				destination: '/blog/how-to-store-lemons-and-limes/',
				permanent: true
			},
			{
				source: '/how-to-store-asparagus/',
				destination: '/blog/how-to-store-asparagus/',
				permanent: true
			},
			{
				source: '/how-to-store-celery/',
				destination: '/blog/how-to-store-celery/',
				permanent: true
			},
			{
				source: '/how-to-store-cucumbers/',
				destination: '/blog/how-to-store-cucumbers/',
				permanent: true
			},
			{
				source: '/how-to-store-zucchini/',
				destination: '/blog/how-to-store-zucchini/',
				permanent: true
			},
			{
				source: '/how-to-store-avocados/',
				destination: '/blog/how-to-store-avocados/',
				permanent: true
			},
			{
				source: '/how-to-store-carrots/',
				destination: '/blog/how-to-store-carrots/',
				permanent: true
			},
			{
				source: '/how-to-store-basil/',
				destination: '/blog/how-to-store-basil/',
				permanent: true
			},
			{
				source: '/how-to-store-tomatoes/',
				destination: '/blog/how-to-store-tomatoes/',
				permanent: true
			},
			{
				source: '/how-to-store-strawberries/',
				destination: '/blog/how-to-store-strawberries/',
				permanent: true
			},
			{
				source: '/how-to-store-mushrooms/',
				destination: '/blog/how-to-store-mushrooms/',
				permanent: true
			},
			{
				source: '/how-to-store-cilantro/',
				destination: '/blog/how-to-store-cilantro/',
				permanent: true
			},
			{
				source: '/how-to-store-ginger/',
				destination: '/blog/how-to-store-ginger/',
				permanent: true
			},
			{
				source: '/how-to-store-onions/',
				destination: '/blog/how-to-store-onions/',
				permanent: true
			},
			{
				source: '/how-to-store-potatoes/',
				destination: '/blog/how-to-store-potatoes/',
				permanent: true
			},
			{
				source: '/how-to-store-garlic/',
				destination: '/blog/how-to-store-garlic/',
				permanent: true
			},
			{
				source: '/how-to-freeze-asparagus/',
				destination: '/blog/how-to-freeze-asparagus/',
				permanent: true
			},
			{
				source: '/how-to-freeze-apples/',
				destination: '/blog/how-to-freeze-apples/',
				permanent: true
			},
			{
				source: '/water-softener-repairs/',
				destination: '/blog/water-softener-repairs/',
				permanent: true
			},
			{
				source: '/how-to-use-an-instant-pot-as-a-slow-cooker/',
				destination: '/blog/how-to-use-an-instant-pot-as-a-slow-cooker/',
				permanent: true
			},
			{
				source: '/how-to-vent-a-range-hood-on-an-interior-wall/',
				destination: '/blog/how-to-vent-a-range-hood-on-an-interior-wall/',
				permanent: true
			},
			{
				source: '/instant-pot-quinoa/',
				destination: '/blog/instant-pot-quinoa/',
				permanent: true
			},
			{
				source: '/how-to-freeze-carrots/',
				destination: '/blog/how-to-freeze-carrots/',
				permanent: true
			},
			{
				source: '/how-to-convert-a-propane-grill-to-natural-gas/',
				destination: '/blog/how-to-convert-a-propane-grill-to-natural-gas/',
				permanent: true
			},
			{
				source: '/how-to-start-a-charcoal-grill/',
				destination: '/blog/how-to-start-a-charcoal-grill/',
				permanent: true
			},
			{
				source: '/instant-pot-butternut-squash/',
				destination: '/blog/instant-pot-butternut-squash/',
				permanent: true
			},
			{
				source: '/how-to-freeze-strawberries/',
				destination: '/blog/how-to-freeze-strawberries/',
				permanent: true
			},
			{
				source: '/how-to-freeze-broccoli/',
				destination: '/blog/how-to-freeze-broccoli/',
				permanent: true
			},
			{
				source: '/can-you-freeze-potatoes/',
				destination: '/blog/can-you-freeze-potatoes/',
				permanent: true
			},
			{
				source: '/air-fryer-vs-instant-pot/',
				destination: '/blog/air-fryer-vs-instant-pot/',
				permanent: true
			},
			{
				source: '/air-fryer-vs-convection-oven/',
				destination: '/blog/air-fryer-vs-convection-oven/',
				permanent: true
			},
			{
				source: '/how-to-clean-instant-pot/',
				destination: '/blog/how-to-clean-instant-pot/',
				permanent: true
			},
			{
				source: '/how-to-freeze-green-beans/',
				destination: '/blog/how-to-freeze-green-beans/',
				permanent: true
			},
			{
				source: '/how-to-freeze-tomatoes/',
				destination: '/blog/how-to-freeze-tomatoes/',
				permanent: true
			},
			{
				source: '/how-to-freeze-zucchini/',
				destination: '/blog/how-to-freeze-zucchini/',
				permanent: true
			},
			{
				source: '/pit-boss-vs-traeger/',
				destination: '/blog/pit-boss-vs-traeger/',
				permanent: true
			},
			{
				source: '/how-to-reheat-lasagna/',
				destination: '/blog/how-to-reheat-lasagna/',
				permanent: true
			},
			{
				source: '/how-to-reheat-rotisserie-chicken/',
				destination: '/blog/how-to-reheat-rotisserie-chicken/',
				permanent: true
			},
			{
				source: '/how-to-reheat-corn-on-the-cob/',
				destination: '/blog/how-to-reheat-corn-on-the-cob/',
				permanent: true
			},
			{
				source: '/how-to-freeze-peaches/',
				destination: '/blog/how-to-freeze-peaches/',
				permanent: true
			},
			{
				source: '/how-to-freeze-corn-on-the-cob/',
				destination: '/blog/how-to-freeze-corn-on-the-cob/',
				permanent: true
			},
			{
				source: '/how-to-freeze-bananas/',
				destination: '/blog/how-to-freeze-bananas/',
				permanent: true
			},
			{
				source: '/how-to-reheat-salmon/',
				destination: '/blog/how-to-reheat-salmon/',
				permanent: true
			},
			{
				source: '/how-to-reheat-crab-legs/',
				destination: '/blog/how-to-reheat-crab-legs/',
				permanent: true
			},
			{
				source: '/how-to-clean-a-cast-iron-skillet/',
				destination: '/blog/how-to-clean-a-cast-iron-skillet/',
				permanent: true
			},
			{
				source: '/rec-tec-vs-traeger/',
				destination: '/blog/rec-tec-vs-traeger/',
				permanent: true
			},
			{
				source: '/how-to-reheat-chicken-wings/',
				destination: '/blog/how-to-reheat-chicken-wings/',
				permanent: true
			},
			{
				source: '/how-to-cook-chicken-in-an-air-fryer/',
				destination: '/blog/how-to-cook-chicken-in-an-air-fryer/',
				permanent: true
			},
			{
				source: '/how-to-use-a-smoker/',
				destination: '/blog/how-to-use-a-smoker/',
				permanent: true
			},
			{
				source: '/camp-chef-vs-traeger/',
				destination: '/blog/camp-chef-vs-traeger/',
				permanent: true
			},
			{
				source: '/garbage-disposal-not-working/',
				destination: '/blog/garbage-disposal-not-working/',
				permanent: true
			},
			{
				source: '/zero-water-vs-brita/',
				destination: '/blog/zero-water-vs-brita/',
				permanent: true
			},
			{
				source: '/best-cookware-materials/',
				destination: '/blog/best-cookware-materials/',
				permanent: true
			},
			{
				source: '/hard-water-vs-soft-water/',
				destination: '/blog/hard-water-vs-soft-water/',
				permanent: true
			},
			{
				source: '/how-to-reheat-prime-rib/',
				destination: '/blog/how-to-reheat-prime-rib/',
				permanent: true
			},
			{
				source: '/how-to-reheat-mashed-potatoes/',
				destination: '/blog/how-to-reheat-mashed-potatoes/',
				permanent: true
			},
			{
				source: '/how-to-reheat-fries/',
				destination: '/blog/how-to-reheat-fries/',
				permanent: true
			},
			{
				source: '/how-to-reheat-rice/',
				destination: '/blog/how-to-reheat-rice/',
				permanent: true
			},
			{
				source: '/air-fryers-vs-deep-fryers/',
				destination: '/blog/air-fryers-vs-deep-fryers/',
				permanent: true
			},
			{
				source: '/brita-vs-pur/',
				destination: '/blog/brita-vs-pur/',
				permanent: true
			},
			{
				source: '/how-to-clean-a-microwave/',
				destination: '/blog/how-to-clean-a-microwave/',
				permanent: true
			},
			{
				source: '/how-to-reheat-steak/',
				destination: '/blog/how-to-reheat-steak/',
				permanent: true
			},
			{
				source: '/how-to-reheat-fried-chicken/',
				destination: '/blog/how-to-reheat-fried-chicken/',
				permanent: true
			},
			{
				source: '/instant-pot-vs-pressure-cooker/',
				destination: '/blog/instant-pot-vs-pressure-cooker/',
				permanent: true
			},
			{
				source: '/types-of-water-filters/',
				destination: '/blog/types-of-water-filters/',
				permanent: true
			},
			{
				source: '/how-to-clean-a-cutting-board/',
				destination: '/blog/how-to-clean-a-cutting-board/',
				permanent: true
			},
			{
				source: '/how-to-use-a-charcoal-grill/',
				destination: '/blog/how-to-use-a-charcoal-grill/',
				permanent: true
			},
			{
				source: '/ice-maker-not-working/',
				destination: '/blog/ice-maker-not-working/',
				permanent: true
			},
			{
				source: '/charcoal-vs-gas-grills/',
				destination: '/blog/charcoal-vs-gas-grills/',
				permanent: true
			},
			{
				source: '/how-to-sharpen-a-serrated-knife/',
				destination: '/blog/how-to-sharpen-a-serrated-knife/',
				permanent: true
			},
			{
				source: '/how-to-sharpen-a-knife-with-a-stone/',
				destination: '/blog/how-to-sharpen-a-knife-with-a-stone/',
				permanent: true
			},
			{
				source: '/how-to-sharpen-a-pocket-knife/',
				destination: '/blog/how-to-sharpen-a-pocket-knife/',
				permanent: true
			},
			{
				source: '/how-to-clean-a-knife-block/',
				destination: '/blog/how-to-clean-a-knife-block/',
				permanent: true
			},
			{
				source: '/how-to-sharpen-a-knife-with-a-rod/',
				destination: '/blog/how-to-sharpen-a-knife-with-a-rod/',
				permanent: true
			},
			{
				source: '/types-of-kitchen-knives/',
				destination: '/blog/types-of-kitchen-knives/',
				permanent: true
			},
			{
				source: '/types-of-cuts/',
				destination: '/blog/types-of-cuts/',
				permanent: true
			},
			{
				source: '/how-to-clean-grill-grates/',
				destination: '/blog/how-to-clean-grill-grates/',
				permanent: true
			},
			{
				source: '/how-to-sharpen-a-knife/',
				destination: '/blog/how-to-sharpen-a-knife/',
				permanent: true
			},
			{
				source: '/blender-vs-food-processor/',
				destination: '/blog/blender-vs-food-processor/',
				permanent: true
			},
			{
				source: '/how-to-clean-a-gas-grill/',
				destination: '/blog/how-to-clean-a-gas-grill/',
				permanent: true
			},
			{
				source: '/what-is-a-convection-microwave-oven/',
				destination: '/blog/what-is-a-convection-microwave-oven/',
				permanent: true
			},
			{
				source: '/toaster-oven-vs-microwave/',
				destination: '/blog/toaster-oven-vs-microwave/',
				permanent: true
			},
			{
				source: '/types-of-juicers/',
				destination: '/blog/types-of-juicers/',
				permanent: true
			},
			{
				source: '/benefits-of-juicing/',
				destination: '/blog/benefits-of-juicing/',
				permanent: true
			},
			{
				source: '/kitchen-knife/',
				destination: '/blog/kitchen-knife/',
				permanent: true
			},
			{
				source: '/parts-of-a-knife/',
				destination: '/blog/parts-of-a-knife/',
				permanent: true
			},
			{
				source: '/forged-vs-stamped-knives/',
				destination: '/blog/forged-vs-stamped-knives/',
				permanent: true
			},
			{
				source: '/food-mixers-vs-blenders/',
				destination: '/blog/food-mixers-vs-blenders/',
				permanent: true
			},
			{
				source: '/how-to-clean-a-grill/',
				destination: '/blog/how-to-clean-a-grill/',
				permanent: true
			},
			{
				source: '/how-to-clean-ice-maker/',
				destination: '/blog/how-to-clean-ice-maker/',
				permanent: true
			},
			{
				source: '/how-to-use-a-toaster-oven/',
				destination: '/blog/how-to-use-a-toaster-oven/',
				permanent: true
			},
			{
				source: '/how-to-reheat-pizza-in-oven/',
				destination: '/blog/how-to-reheat-pizza-in-oven/',
				permanent: true
			},
			{
				source: '/best-steel-for-kitchen-knives/',
				destination: '/blog/best-steel-for-kitchen-knives/',
				permanent: true
			},
			{
				source: '/how-to-use-a-bread-machine/',
				destination: '/blog/how-to-use-a-bread-machine/',
				permanent: true
			},
			{
				source: '/wusthof-vs-henckels/',
				destination: '/blog/wusthof-vs-henckels/',
				permanent: true
			},
			{
				source: '/santoku-knife-vs-chefs-knife/',
				destination: '/blog/santoku-knife-vs-chefs-knife/',
				permanent: true
			},
			{
				source: '/what-is-a-utility-knife-used-for/',
				destination: '/blog/what-is-a-utility-knife-used-for/',
				permanent: true
			},
			{
				source: '/nutribullet-vs-vitamix/',
				destination: '/blog/nutribullet-vs-vitamix/',
				permanent: true
			},
			{
				source: '/benefits-of-pressure-cooker/',
				destination: '/blog/benefits-of-pressure-cooker/',
				permanent: true
			},
			{
				source: '/what-is-a-paring-knife-used-for/',
				destination: '/blog/what-is-a-paring-knife-used-for/',
				permanent: true
			},
			{
				source: '/blendtec-vs-vitamix-blender/',
				destination: '/blog/blendtec-vs-vitamix-blender/',
				permanent: true
			},
			{
				source: '/breville-vs-cuisinart/',
				destination: '/blog/breville-vs-cuisinart/',
				permanent: true
			},
			{
				source: '/how-to-use-a-pressure-cooker/',
				destination: '/blog/how-to-use-a-pressure-cooker/',
				permanent: true
			},
			{
				source: '/how-to-shred-cabbage-food-processor/',
				destination: '/blog/how-to-shred-cabbage-food-processor/',
				permanent: true
			},
			{
				source: '/vitamix-vs-ninja-blender/',
				destination: '/blog/vitamix-vs-ninja-blender/',
				permanent: true
			},
			{
				source: '/how-long-to-sous-vide-steak/',
				destination: '/blog/how-long-to-sous-vide-steak/',
				permanent: true
			},
			{
				source: '/instant-pot-natural-pressure-release-vs-quick-release/',
				destination: '/blog/instant-pot-natural-pressure-release-vs-quick-release/',
				permanent: true
			},
			{
				source: '/kitchen-faucet/',
				destination: '/blog/kitchen-faucet/',
				permanent: true
			},
			{
				source: '/how-to-repair-garbage-disposal/',
				destination: '/blog/how-to-repair-garbage-disposal/',
				permanent: true
			},
			{
				source: '/blender-vs-juicer/',
				destination: '/blog/blender-vs-juicer/',
				permanent: true
			},
			{
				source: '/how-to-use-food-processor/',
				destination: '/blog/how-to-use-food-processor/',
				permanent: true
			},
			{
				source: '/how-to-install-a-garbage-disposal/',
				destination: '/blog/how-to-install-a-garbage-disposal/',
				permanent: true
			},
			{
				source: '/types-of-garbage-disposal/',
				destination: '/blog/types-of-garbage-disposal/',
				permanent: true
			},
			{
				source: '/how-to-make-alkaline-water/',
				destination: '/blog/how-to-make-alkaline-water/',
				permanent: true
			},
			{
				source: '/how-to-find-delta-faucet-model-number/',
				destination: '/blog/how-to-find-delta-faucet-model-number/',
				permanent: true
			},
			{
				source: '/moen-vs-delta/',
				destination: '/blog/moen-vs-delta/',
				permanent: true
			},
			{
				source: '/types-of-kitchen-faucets/',
				destination: '/blog/types-of-kitchen-faucets/',
				permanent: true
			},
			{
				source: '/how-to-install-kitchen-faucet/',
				destination: '/blog/how-to-install-kitchen-faucet/',
				permanent: true
			},
			{
				source: '/how-to-care-for-your-knives/',
				destination: '/blog/how-to-care-for-your-knives/',
				permanent: true
			},
			{
				source: '/fixing-a-leaking-garbage-disposal/',
				destination: '/blog/fixing-a-leaking-garbage-disposal/',
				permanent: true
			},
			{
				source: '/insinkerator-vs-waste-king/',
				destination: '/blog/insinkerator-vs-waste-king/',
				permanent: true
			},
			{
				source: '/how-to-clean-garbage-disposal/',
				destination: '/blog/how-to-clean-garbage-disposal/',
				permanent: true
			},
			{
				source: '/shower-water-filters/',
				destination: '/blog/shower-water-filters/',
				permanent: true
			},
			{
				source: '/garbage-disposal/',
				destination: '/blog/garbage-disposal/',
				permanent: true
			},
			{
				source: '/instant-pot-duo-6-quart-review/',
				destination: '/reviews/instant-pot-duo-6-quart-review/',
				permanent: true, 
			},
			{
				source: '/z-grills-zpg-450b-review/',
				destination: '/reviews/z-grills-zpg-450b-review/',
				permanent: true, 
			},
			{
				source: '/cuzn-uc-200-under-counter-water-filter-review/',
				destination: '/reviews/cuzn-uc-200-under-counter-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/chefs-choice-15-trizor-xv-edgeselect-professional-electric-knife-sharpener-review/',
				destination: '/reviews/chefs-choice-15-trizor-xv-edgeselect-professional-electric-knife-sharpener-review/',
				permanent: true, 
			},
			{
				source: '/cuisinart-cgg-608-portable-professional-gas-grill-review/',
				destination: '/reviews/cuisinart-cgg-608-portable-professional-gas-grill-review/',
				permanent: true, 
			},
			{
				source: '/blackstone-1554-station-4-burner-propane-gas-grill-review/',
				destination: '/reviews/blackstone-1554-station-4-burner-propane-gas-grill-review/',
				permanent: true, 
			},
			{
				source: '/ninja-foodi-5-in-1-indoor-grill-review/',
				destination: '/reviews/ninja-foodi-5-in-1-indoor-grill-review/',
				permanent: true, 
			},
			{
				source: '/power-smokeless-grill-review/',
				destination: '/reviews/power-smokeless-grill-review/',
				permanent: true, 
			},
			{
				source: '/imarku-pro-kitchen-8-inch-chefs-knife-review/',
				destination: '/reviews/imarku-pro-kitchen-8-inch-chefs-knife-review/',
				permanent: true, 
			},
			{
				source: '/breville-je98xl-juice-fountain-plus-review/',
				destination: '/reviews/breville-je98xl-juice-fountain-plus-review/',
				permanent: true, 
			},
			{
				source: '/cuisinart-ccj-500-pulp-control-citrus-juicer-review/',
				destination: '/reviews/cuisinart-ccj-500-pulp-control-citrus-juicer-review/',
				permanent: true, 
			},
			{
				source: '/viking-range-hood-review/',
				destination: '/reviews/viking-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/napoleon-prestige-500-grill-review/',
				destination: '/reviews/napoleon-prestige-500-grill-review/',
				permanent: true, 
			},
			{
				source: '/louisiana-grills-lg900-review/',
				destination: '/reviews/louisiana-grills-lg900-review/',
				permanent: true, 
			},
			{
				source: '/nexgrill-720-0830h-review/',
				destination: '/reviews/nexgrill-720-0830h-review/',
				permanent: true, 
			},
			{
				source: '/jack-lalanne-fusion-juicer-review/',
				destination: '/reviews/jack-lalanne-fusion-juicer-review/',
				permanent: true, 
			},
			{
				source: '/aicok-slow-masticating-juicer-review/',
				destination: '/reviews/aicok-slow-masticating-juicer-review/',
				permanent: true, 
			},
			{
				source: '/gold-kitchen-faucet-review/',
				destination: '/reviews/gold-kitchen-faucet-review/',
				permanent: true, 
			},
			{
				source: '/kohler-kitchen-faucet-review/',
				destination: '/reviews/kohler-kitchen-faucet-review/',
				permanent: true, 
			},
			{
				source: '/kobe-range-hood-review/',
				destination: '/reviews/kobe-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/oster-juicer-review/',
				destination: '/reviews/oster-juicer-review/',
				permanent: true, 
			},
			{
				source: '/samsung-refrigerator-water-filter-review/',
				destination: '/reviews/samsung-refrigerator-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/skg-juicer-review/',
				destination: '/reviews/skg-juicer-review/',
				permanent: true, 
			},
			{
				source: '/sakura-range-hood-review/',
				destination: '/reviews/sakura-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/arofa-pull-out-kitchen-faucet-review/',
				destination: '/reviews/arofa-pull-out-kitchen-faucet-review/',
				permanent: true, 
			},
			{
				source: '/dash-juicer-review/',
				destination: '/reviews/dash-juicer-review/',
				permanent: true, 
			},
			{
				source: '/cavaliere-range-hood-review/',
				destination: '/reviews/cavaliere-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/almazan-kitchen-knife-review/',
				destination: '/reviews/almazan-kitchen-knife-review/',
				permanent: true, 
			},
			{
				source: '/brizo-kitchen-faucet-review/',
				destination: '/reviews/brizo-kitchen-faucet-review/',
				permanent: true, 
			},
			{
				source: '/damascus-kitchen-knife-review/',
				destination: '/reviews/damascus-kitchen-knife-review/',
				permanent: true, 
			},
			{
				source: '/cutco-knife-review/',
				destination: '/reviews/cutco-knife-review/',
				permanent: true, 
			},
			{
				source: '/copper-range-hood-review/',
				destination: '/reviews/copper-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/nutri-ninja-pro-blender-review/',
				destination: '/reviews/nutri-ninja-pro-blender-review/',
				permanent: true, 
			},
			{
				source: '/mwf-ge-water-filter-review/',
				destination: '/reviews/mwf-ge-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/insinkerator-badger-5-review/',
				destination: '/reviews/insinkerator-badger-5-review/',
				permanent: true, 
			},
			{
				source: '/presenza-range-hood-review/',
				destination: '/reviews/presenza-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/winflo-range-hood-review/',
				destination: '/reviews/winflo-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/margaritaville-blender-review/',
				destination: '/reviews/margaritaville-blender-review/',
				permanent: true, 
			},
			{
				source: '/berkey-water-filter-review/',
				destination: '/reviews/berkey-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/waterdrop-reverse-osmosis-water-filter-review/',
				destination: '/reviews/waterdrop-reverse-osmosis-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/kitchenaid-range-hood-review/',
				destination: '/reviews/kitchenaid-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/omnipure-k2533jj-inline-water-filter-review/',
				destination: '/reviews/omnipure-k2533jj-inline-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/kitchenaid-immersion-blender-review/',
				destination: '/reviews/kitchenaid-immersion-blender-review/',
				permanent: true, 
			},
			{
				source: '/the-mac-knife-sk-65-superior-review/',
				destination: '/reviews/the-mac-knife-sk-65-superior-review/',
				permanent: true, 
			},
			{
				source: '/everydrop-water-filter-review/',
				destination: '/reviews/everydrop-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/ge-rpwfe-water-filter-review/',
				destination: '/reviews/ge-rpwfe-water-filter-review/',
				permanent: true, 
			},
			{
				source: '/black-and-decker-blender-review/',
				destination: '/reviews/black-and-decker-blender-review/',
				permanent: true, 
			},
			{
				source: '/broan-allure-range-hood-review/',
				destination: '/reviews/broan-allure-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/oster-pro-1200-blender-review/',
				destination: '/reviews/oster-pro-1200-blender-review/',
				permanent: true, 
			},
			{
				source: '/ninja-professional-blender-1000-review/',
				destination: '/reviews/ninja-professional-blender-1000-review/',
				permanent: true, 
			},
			{
				source: '/waring-kitchen-blender-review/',
				destination: '/reviews/waring-kitchen-blender-review/',
				permanent: true, 
			},
			{
				source: '/kenmore-garbage-disposal-review/',
				destination: '/reviews/kenmore-garbage-disposal-review/',
				permanent: true, 
			},
			{
				source: '/moen-garbage-disposal-review/',
				destination: '/reviews/moen-garbage-disposal-review/',
				permanent: true, 
			},
			{
				source: '/insinkerator-garbage-disposal-review/',
				destination: '/reviews/insinkerator-garbage-disposal-review/',
				permanent: true, 
			},
			{
				source: '/american-standard-garbage-disposal-review/',
				destination: '/reviews/american-standard-garbage-disposal-review/',
				permanent: true, 
			},
			{
				source: '/osterizer-blender-review/',
				destination: '/reviews/osterizer-blender-review/',
				permanent: true, 
			},
			{
				source: '/pacific-range-hood-review/',
				destination: '/reviews/pacific-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/akdy-range-hood-review/',
				destination: '/reviews/akdy-range-hood-review/',
				permanent: true, 
			},
			{
				source: '/badger-1-garbage-disposal-review/',
				destination: '/reviews/badger-1-garbage-disposal-review/',
				permanent: true, 
			},
			{
				source: '/pentair-water-softener-review/',
				destination: '/reviews/pentair-water-softener-review/',
				permanent: true, 
			},
			{
				source: '/panasonic-sd-yd250-automatic-bread-maker-review/',
				destination: '/reviews/panasonic-sd-yd250-automatic-bread-maker-review/',
				permanent: true, 
			},
			{
				source: '/joule-sous-vide-review/',
				destination: '/reviews/joule-sous-vide-review/',
				permanent: true, 
			},
			{
				source: '/kitchenaid-food-processor-review/',
				destination: '/reviews/kitchenaid-food-processor-review/',
				permanent: true, 
			},
			{
				source: '/anova-sous-vide-review/',
				destination: '/reviews/anova-sous-vide-review/',
				permanent: true, 
			},
			{
				source: '/waste-king-l-8000-review/',
				destination: '/reviews/waste-king-l-8000-review/',
				permanent: true, 
			},
			{
				source: '/insinkerator-evolution-excel-review/',
				destination: '/reviews/insinkerator-evolution-excel-review/',
				permanent: true, 
			},
			{
				source: "/kershaw-pocket-knife-review/", 
				destination: "/buying-guides/best-kitchen-knives/",
				permanent: true
			},
			{
				source: "/starimcarbon-carbon-fiber-knife-review/", 
				destination: "/buying-guides/best-kitchen-knives/",
				permanent: true
			},
			{
				source: "/miyabi-kaizen-chefs-knife-review/", 
				destination: "/buying-guides/best-kitchen-knives/",
				permanent: true
			},
			{
				source: "/nisaku-hori-hori-knife-review/", 
				destination: "/buying-guides/best-kitchen-knives/",
				permanent: true
			},
			{
				source: "/shun-premier-chefs-knife-8-inch-review/", 
				destination: "/buying-guides/best-kitchen-knives/",
				permanent: true
			},
			{
				source: "/best-juicer-machines/",
				destination: "/buying-guides/best-juicers/",
				permanent: true
			},
			{
				source: "/best-apple-slicers-peelers-corers/",
				destination: "/buying-guides/best-apple-utensils/",
				permanent: true
			},
			{
				source: "/best-ja-henckels-knife-set-reviews/",
				destination: "/buying-guides/ja-henckels-knife-set-reviews/",
				permanent: true
			},
			{
				source: "/kitchen/ja-henckels-knife-set/",
				destination: "/buying-guides/ja-henckels-knife-set/",
				permanent: true
			},
			{
				source: "/kitchen/apple-utensils/",
				destination: "/buying-guides/best-apple-utensils/",
				permanent: true
			},
			{
				source: "/kitchen/best-food-processors/",
				destination: "/buying-guides/best-food-processors/",
				permanent: true
			},
			{
				source: "/kitchen/best-garbage-disposals/",
				destination: "/buying-guides/best-garbage-disposals/",
				permanent: true
			},
			{
				source: "/kitchen/best-juicers/",
				destination: "/buying-guides/best-juicers/",
				permanent: true
			},
			{
				source: "/kitchen/best-kitchen-faucets/",
				destination: "/buying-guides/best-kitchen-faucets/",
				permanent: true
			},
			{
				source: "/kitchen/best-water-filters/",
				destination: "/buying-guides/best-water-filters/",
				permanent: true
			},
			{
				source: "/kitchen/ja-henckels-knife-set/",
				destination: "/buying-guides/ja-henckels-knife-set/",
				permanent: true
			},
			{
				source: "/best-kitchen-tools/",
				destination: "/reviews/",
				permanent: true
			},
			{
				source: "/reviews/ja-henckels-knife-set/",
				destination: "/buying-guides/ja-henckels-knife-set/",
				permanent: true
			},
			{
				source: "/reviews/best-food-processors/",
				destination: "/buying-guides/best-food-processors/",
				permanent: true
			},
			{
				source: "/reviews/best-garbage-disposals/",
				destination: "/buying-guides/best-garbage-disposals/",
				permanent: true
			},
			{
				source: "/reviews/best-juicers/",
				destination: "/buying-guides/best-juicers/",
				permanent: true
			},
			{
				source: "/reviews/best-kitchen-faucets/",
				destination: "/buying-guides/best-kitchen-faucets/",
				permanent: true
			},
			{
				source: "/reviews/best-water-filters/",
				destination: "/buying-guides/best-water-filters/",
				permanent: true
			},
			{
				source: "/reviews/ja-henckels-knife-set/",
				destination: "/buying-guides/ja-henckels-knife-set/",
				permanent: true
			},
			{
				source: "/how-to-unclog-a-garbage-disposal/",
				destination: "/garbage-disposal-repair/",
				permanent: true
			},
			{
				source: "/best-kitchen-faucet-brand/",
				destination: "/buying-guides/best-kitchen-faucets/",
				permanent: true
			},
			{
				source: "/best-juicer-brands/",
				destination: "/buying-guides/best-juicers/",
				permanent: true
			},
			{
				source: "/food-processor-vs-blender/",
				destination: "/blog/blender-vs-food-processor/",
				permanent: true
			},
			{
				source: "/best-juicer-type/",
				destination: "/buying-guides/best-juicers/",
				permanent: true
			},
			//for recipe 
			{
				source: "/recipes/",
				destination: "https://healthyrecipes101.com/",
				permanent: true, 
			},
			{
				source: '/:slug(.*)-recipe',
				destination: 'https://healthyrecipes101.com/:slug-recipe', 
				permanent: true, 
			},
			{
				source: '/:slug(.*)-recipes/',
				destination: 'https://healthyrecipes101.com/:slug-recipes/', 
				permanent: true, 
			},
			{
				source: "/recipes/chicken/",
				destination: "https://healthyrecipes101.com/chicken/",
				permanent: true, 
			},
			{
				source: "/recipes/juicing/",
				destination: "https://healthyrecipes101.com/beverages/juices/",
				permanent: true, 
			},
			{
				source: "/10-easy-peasy-healthy-salads/",
				destination: "https://healthyrecipes101.com/healthy-salad-recipes/",
				permanent: true, 
			},
			{
				source: "/carrot-celery-juice/",
				destination: "https://healthyrecipes101.com/carrot-juice-recipes/",
				permanent: true, 
			},
			{
				source: "/juicing-recipes-for-weight-loss/",
				destination: "https://healthyrecipes101.com/green-juice-recipes/",
				permanent: true, 
			},
			{
				source: "/carrot-apple-celery-ginger-juice/",
				destination: "https://healthyrecipes101.com/carrot-juice-recipes/",
				permanent: true, 
			},
			{
				source: "/french-toast-casserole/",
				destination: "https://healthyrecipes101.com/french-toast-casserole/",
				permanent: true, 
			},
			{
				source: "/tequila-and-lime-juice/",
				destination: "https://healthyrecipes101.com/tequila-and-lime-juice/",
				permanent: true, 
			},
			{
				source: "/chicken-and-rice-casserole/",
				destination: "https://healthyrecipes101.com/chicken-and-rice-casserole/",
				permanent: true, 
			},
			{
				source: "/sunny-side-up-eggs/",
				destination: "https://healthyrecipes101.com/sunny-side-up-eggs/",
				permanent: true, 
			},
			{
				source: "/honey-butter-biscuits/",
				destination: "https://healthyrecipes101.com/honey-butter-biscuits/",
				permanent: true, 
			},
			{
				source: "/how-long-bake-chicken-breast-thighs/",
				destination: "https://healthyrecipes101.com/how-long-bake-chicken-breast-thighs/",
				permanent: true, 
			},
			{
				source: "/carrot-orange-pineapple-juice/",
				destination: "https://healthyrecipes101.com/carrot-orange-pineapple-juice/",
				permanent: true, 
			},
			{
				source: "/carrot-apple-juice/",
				destination: "https://healthyrecipes101.com/carrot-apple-juice/",
				permanent: true, 
			},
			{
				source: "/watermelon-juice/",
				destination: "https://healthyrecipes101.com/watermelon-juice/",
				permanent: true, 
			},
			{
				source: "/roasted-pork-tenderloin/",
				destination: "https://healthyrecipes101.com/roasted-pork-tenderloin/",
				permanent: true, 
			},
			{
				source: "/zucchini-fries/",
				destination: "https://healthyrecipes101.com/zucchini-fries/",
				permanent: true, 
			},
			{
				source: "/hashbrown-casserole/",
				destination: "https://healthyrecipes101.com/hashbrown-casserole/",
				permanent: true, 
			},
			{
				source: "/carrot-celery-juice/",
				destination: "https://healthyrecipes101.com/carrot-celery-juice/",
				permanent: true, 
			},
			{
				source: "/chicken-biryani/",
				destination: "https://healthyrecipes101.com/chicken-biryani/",
				permanent: true, 
			},
			{
				source: "/scalloped-potatoes/",
				destination: "https://healthyrecipes101.com/scalloped-potatoes/",
				permanent: true, 
			},
			{
				source: "/honey-butter-chicken/",
				destination: "https://healthyrecipes101.com/honey-butter-chicken/",
				permanent: true, 
			},
			{
				source: "/chicken-and-rice-soup/",
				destination: "https://healthyrecipes101.com/chicken-and-rice-soup/",
				permanent: true, 
			},
			{
				source: "/chicken-cordon-bleu/",
				destination: "https://healthyrecipes101.com/chicken-cordon-bleu/",
				permanent: true, 
			},
			{
				source: "/chicken-massaman-curry/",
				destination: "https://healthyrecipes101.com/chicken-massaman-curry/",
				permanent: true, 
			},
			{
				source: "/chicken-shawarma/",
				destination: "https://healthyrecipes101.com/chicken-shawarma/",
				permanent: true, 
			},
			{
				source: "/roasted-vegetables/",
				destination: "https://healthyrecipes101.com/roasted-vegetables/",
				permanent: true, 
			},
			{
				source: "/how-to-boil-eggs/",
				destination: "https://healthyrecipes101.com/how-to-boil-eggs/",
				permanent: true, 
			},
			{
				source: "/harry-potter-pumpkin-juice/",
				destination: "https://healthyrecipes101.com/harry-potter-pumpkin-juice/",
				permanent: true, 
			},
			{
				source: "/healthy-baked-chicken-breast/",
				destination: "https://healthyrecipes101.com/healthy-baked-chicken-breast/",
				permanent: true, 
			},
			{
				source: "/healthy-stuffed-chicken-breast/",
				destination: "https://healthyrecipes101.com/healthy-stuffed-chicken-breast/",
				permanent: true, 
			},
			{
				source: "/healthy-dinner-ideas/",
				destination: "https://healthyrecipes101.com/healthy-dinner-ideas/",
				permanent: true, 
			},
			{
				source: "/easy-recipes-for-college-students/",
				destination: "https://healthyrecipes101.com/easy-recipes-for-college-students/",
				permanent: true, 
			},
			{
				source: "/carrot-cake-cookies/",
				destination: "https://healthyrecipes101.com/carrot-cake-cookies/",
				permanent: true, 
			},
			{
				source: "/whole-wheat-blueberry-banana-bread/",
				destination: "https://healthyrecipes101.com/whole-wheat-blueberry-banana-bread/",
				permanent: true, 
			},
			{
				source: "/cherry-red-wine-sauce/",
				destination: "https://healthyrecipes101.com/cherry-red-wine-sauce/",
				permanent: true, 
			},
			{
				source: "/blackened-salmon-tacos-with-avocado-mango-salsa/",
				destination: "https://healthyrecipes101.com/blackened-salmon-tacos-with-avocado-mango-salsa/",
				permanent: true, 
			},
			{
				source: "/lentil-soup-with-spinach-and-sausage/",
				destination: "https://healthyrecipes101.com/lentil-soup-with-spinach-and-sausage/",
				permanent: true, 
			},
			{
				source: "/spinach-artichoke-dip/",
				destination: "https://healthyrecipes101.com/spinach-artichoke-dip/",
				permanent: true, 
			},
			{
				source: "/double-chocolate-zucchini-brownies/",
				destination: "https://healthyrecipes101.com/double-chocolate-zucchini-brownies/",
				permanent: true, 
			},
			{
				source: "/pumpkin-cookies-",
				destination: "https://healthyrecipes101.com/pumpkin-cookies-recipe/",
				permanent: true, 
			},
			{
				source: "/shrimp-scampi-recipe/",
				destination: "https://healthyrecipes101.com/shrimp-scampi-recipe/",
				permanent: true, 
			},
			{
				source: "/luna-regina-healthy-eating-scholarship-2017/",
				destination: "https://healthyrecipes101.com/luna-regina-healthy-eating-scholarship-2017/",
				permanent: true, 
			},
			{
				source: "/healthy-eating-guideline/",
				destination: "https://healthyrecipes101.com/healthy-eating-guideline/",
				permanent: true, 
			},
			{
				source: "/how-our-recipes-are-developed/",
				destination: "https://healthyrecipes101.com/how-our-recipes-are-developed/",
				permanent: true, 
			},
			{
				source: "/ads.txt",
				destination: "https://ads.adthrive.com/sites/5c471c4cae016d01cdef36f8/ads.txt",
				permanent: true, 
				
			}
				
		]
	},
}
