'use string'
const valuesTabs = document.querySelector('.reproduction__values')
valuesTabs.addEventListener('click',(e)=>{
    if(e.target && !e.target.closest('.reproduction__value')){
        return
    }else{
        showTab(e.target.closest('.reproduction__value'))
        
    }
})
function showTab(value){
    const tabs = document.querySelector('.reproduction__container')
    if(value.classList.contains('active-value')){
        return
    }
    const valueId = String(value.dataset.idValue)
    const elTabPane = tabs.querySelector(`.reproduction__tabs[data-id-tabs="${valueId}"]`);
    if(elTabPane){
        const valueActive = tabs.querySelector('.active-value');
        valueActive.classList.remove('active-value');
        const elTabPaneShow = tabs.querySelector('.tab-active');
        elTabPaneShow.classList.remove('tab-active');
        value.classList.add('active-value');
        elTabPane.classList.add('tab-active');
    }
}