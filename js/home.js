function validaBusca() 
{
    if (document.querySelector('#q').value == '') 
    {
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}

function trocaBanner() 
{
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
setInterval(trocaBanner, 4000);
document.querySelector('#form-busca').onsubmit = validaBusca;