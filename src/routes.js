/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */
import zola from 'zola'

export default zola.router({
  history: 'browserHistory',
  routes: [
    // ==== router start ==== //
    { path: '/', component: System.import('pages/index') },
    // ==== router end   ==== //
    { path: '*', component: System.import('pages/404') },
  ]
})