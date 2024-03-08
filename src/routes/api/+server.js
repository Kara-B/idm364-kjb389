import {supabase} from '$lib/server/supabase_client.js' ;
export async function GET() {
    try {
        const {data, error} = await supabase
        .from('productinfo')
        .select('*');

        return new Response(JSON.stringify({candles: data}), {
            headers: { 'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.error('Error fetching candles:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
  }