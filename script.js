const dts = document.querySelectorAll('dt');
const dds = document.querySelectorAll('dd');
const Adts = Array.from(dts);
const Adds = Array.from(dds);

Adts.forEach(item => {
    item.addEventListener('click', toggli);
    function toggli(){
        item.classList.toggle('dt-ativo');
        item.nextElementSibling.classList.toggle('show');
    }
})
