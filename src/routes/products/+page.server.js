// // src/routes/[slug]/+page.server.js
// import { error } from '@sveltejs/kit';
// import { slugify } from '$lib/utils.js';
// /**
//  * Load a team based on the provided parameters.
//  *
//  * @param {Object} options - The options object.
//  * @param {Object} options.params - The parameters object.
//  * @param {string} options.params.slug - The slug of the team to load.
//  * @returns {Object} An object containing the team data.
//  * @throws Will throw an error if the team is not found.
//  */
// export function load({ params }) {
//   const slug = params.slug;
//   const candle = {
//     slug: slugify(candle.product_name)
//   };


//   if (!product) throw error(404);

//   return {
//     product
//   };
// }