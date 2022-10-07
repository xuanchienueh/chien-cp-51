const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$("#outcomes_study .track_tabs .tab-item");
const panes = $$("#outcomes_study .track_tabs .tab-pane");

const tabActive = $("#outcomes_study .track_tabs .tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );

    this.classList.add("active");
    pane.classList.add("active");
  };
});
