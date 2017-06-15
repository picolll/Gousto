const hasBeenProcessedWithWebpack = global.navigator.userAgent !== 'mocha';
if (hasBeenProcessedWithWebpack) {
    require('../../../Gousto/node_modules/bootstrap/dist/css/bootstrap.css');
}

export const CATEGORIES_ENDPOINT = 'https://api.gousto.co.uk/products/v2.0/categories';
export const PRODUCTS_ENDPOINT   = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120';

