import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
import path from 'path';

const config = {
  kit: {
    adapter: adapter(),
  },
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
      },
    },
  },
};

export default config;
