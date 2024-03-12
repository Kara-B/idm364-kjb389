// import { PUBLIC_SUPABASE_TABLE } from '$env/static/public';
// import { supabase } from '$lib/server/supabase_client';
// import {error} from "@sveltejs/kit"
// /**
//  * Loads products from the 'productinfo' table in Supabase.
//  * @async
//  * @param {object} 
//  * @returns {Promise<{ productinfo: Product[] }>} The product info.
//  */

// export async function load({params}) {
// 	const {id} = params;
// 	const {data, error} = await supabase
// 	.from(PUBLIC_SUPABASE_TABLE)
// 	.select("*")
// 	.eq('id', id)
// 	.single();
// 	if (!data) throw error(404);
// 	return {
// 		productinfo: data ?? [],
// 	}
// } 