import { PUBLIC_SUPABASE_TABLE } from '$env/static/public';
import { supabase } from '$lib/server/supabase_client';

/**
 * @async {Function} load
 * @returns {{productinfo: {product_name: string, slug: string}[]}} - An object with product array
 */


export function load() {
    return {
    
    }
};




/**
 * Loads products from the 'product_info' table in Supabase.
 * @async
 * @returns {Promise<{ productinfo: Product[] }>} The product info.
 */

export async function load() {
	const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE).select('*');
	return {
		productinfo: data ?? [],
	};

} 

// Starting over again,traight from Phil's Code:
// import { slugify } from '$lib/utils';
// // import { teams } from '$lib/teams'; (this line needs to bring in the product info array)
// import { supabase } from '$lib/server/supabase_client';
// /**
//  * The load function iterates over the `teams` array and returns an object.
//  * Each object in the array 'mascots' has 'name' and 'mascot' properties.
//  * The value for the 'name' and 'mascot' keys are derived from the corresponding properties of each 'team' object.
//  *
//  * @async 
//  * @returns {{product_info: {product_name: string, slug: string}[]}} - An object with teams array
//  */
// export function load() {
//   return {
//     product_info: product_info.map((product) => ({
//       name: product.product_name,
//       slug: slugify(product.name)
//     }))
//   };
// }