function kelimeYazdir(kelime,adet)
{
    for(let i=0;i<adet;i++)
    {
        console.log(kelime);
    }
}


function alanCevreHesapla(kisa,uzun)
{
    let alan =kisa*uzun;
    let cevre =(kisa+uzun)*2;
    return `alan ${alan} çevre: ${cevre}`;
}
let sonuc = alanCevreHesapla(7,10);

function yaziTuraAt(){
    let random = Math.random();
    console.log(random);
    if(random>0.5)
    {
        console.log("Yazı");
    }
    else{
        console.log("Tura");
    }
}
yaziTuraAt();

function tamBolenler(sayi)
{
    let sayilar = [];
    for(let i=2;i<sayi;i++)
    {
        if(sayi%i==0)
        {
            sayilar.push(i);
        }
    }

    return sayilar;
}
console.log(tamBolenler(10));