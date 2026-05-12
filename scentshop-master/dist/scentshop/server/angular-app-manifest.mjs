
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5044, hash: 'b3ab819c93d5e5efa752692a4e48d861248f9907fd67363d5f354c601d0eaee8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '374b4b5caae6490e515ce2f794bb3f4cf84ffbbda8b03dc12b3e8c988eaa3996', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25254, hash: '81a49a75174dadd50fd5cf7749de34c877110bc07c80c8bb7f11a39568b3692b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 16530, hash: 'c58a9d68d50f7d664cba2ea18d2fac8b203a85fb342adc1d0bbbeab258438601', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-4JGYNQZ4.css': {size: 231961, hash: 'AxHlGcXOBao', text: () => import('./assets-chunks/styles-4JGYNQZ4_css.mjs').then(m => m.default)}
  },
};
