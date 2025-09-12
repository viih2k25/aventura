const avanca=document.querySelectorAll('.btn-proximo');
const reiniciarBtn=document.getElementById('btn-reiniciar');


avanca.forEach(button) => {
  button.addEventlistener('click', function (){
    const atual=document.querySelector('.ativo');
    const proximoPasso='passo-'+this.getAttribute('data proximo');

    atual.classList.remove('ativo');
    const proximoElemento=document.getElementById(proxdimopasso);

    if(proximoElemento){
       proximoElemento.classList.add('ativo');
     } else{
        console.error('Elemento com ID"${proximopasso}" não encontrado.');
     }
    }
  })
})