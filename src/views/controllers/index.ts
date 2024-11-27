(() => {
  document.addEventListener('htmx:afterOnLoad', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchId = document
      .querySelector(`[data-controller="search-card"]`)
      ?.getAttribute('data-search-card-id-value');

    if (searchId) {
      searchParams.set('id', searchId);
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}?${searchParams}`
      );
    }
  });

  document.addEventListener('htmx:timeout', function () {
    alert('ww');
  });
})();
