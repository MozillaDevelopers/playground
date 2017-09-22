import './autotrack';
import Mozilla from './dnt';

export default (() => {
  // If doNotTrack is not enabled, it is ok to add GTM
  if (typeof Mozilla.dntEnabled === 'function' && !Mozilla.dntEnabled()) {
    window.ga =
      window.ga ||
      function () {
        (ga.q = ga.q || []).push(arguments);
      };
    ga.l = +new Date();
    ga('create', 'UA-35433268-86', 'auto');

    ga('require', 'cleanUrlTracker');
    ga('require', 'maxScrollTracker');
    ga('require', 'mediaQueryTracker');
    ga('require', 'outboundLinkTracker');
    ga('require', 'pageVisibilityTracker');

    ga('send', 'pageview');
  }
})();
