document.addEventListener('DOMContentLoaded', (event) => {   
  
    function changePage(href) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 500); 
    }

    document.getElementById('btnContato').addEventListener('click', function(event){
        event.preventDefault();
        changePage('contato.html');
    });

    document.getElementById('btnPortfolio').addEventListener('click', function(event){
        event.preventDefault();
        changePage('portfolio.html');
    });

    document.getElementById('btnCurriculo').addEventListener('click', function(event){
        event.preventDefault();
        changePage('curriculo.html');
    });
});

