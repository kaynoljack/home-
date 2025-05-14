"use strict";
'use string';

var valuesTabs = document.querySelector('.reproduction__values');
valuesTabs.addEventListener('click', function (e) {
  if (e.target && !e.target.closest('.reproduction__value')) {
    return;
  } else {
    showTab(e.target.closest('.reproduction__value'));
  }
});
function showTab(value) {
  var tabs = document.querySelector('.reproduction__container');
  if (value.classList.contains('active-value')) {
    return;
  }
  var valueId = String(value.dataset.idValue);
  var elTabPane = tabs.querySelector(".reproduction__tabs[data-id-tabs=\"".concat(valueId, "\"]"));
  if (elTabPane) {
    var valueActive = tabs.querySelector('.active-value');
    valueActive.classList.remove('active-value');
    var elTabPaneShow = tabs.querySelector('.tab-active');
    elTabPaneShow.classList.remove('tab-active');
    value.classList.add('active-value');
    elTabPane.classList.add('tab-active');
  }
}