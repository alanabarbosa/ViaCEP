    function initFetchBitcoin() {
        const inputCep = document.getElementById('cep');
        const btnCep = document.getElementById('btnCep')
        const resultadoCep = document.querySelector('.resultadoCep')
        const box = document.querySelectorAll('.info')
        const img = document.querySelector('.box_img')
        const img2 = document.querySelector('.box_img2')
        
        btnCep.addEventListener('click', handleClick);
        function handleClick(event) {
            event.preventDefault();
            var cep = inputCep.value;    
            buscaCep(cep);
        }
        function isEmpty() {
            if(box.lenght !== 0) {
                img2.style.display = "none";
                img.style.display = "flex";
            }
        }isEmpty() 
        
        function buscaCep(cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(body => {
                    const nomeRua = document.getElementById('nomeRua')
                    const nomeBairro = document.getElementById('nomeBairro')
                    const complemento = document.getElementById('complemento')
                    const gia = document.getElementById('gia')
                    const ibge = document.getElementById('ibge')
                    const localidade = document.getElementById('localidade')
                    const uf = document.getElementById('uf')    
                    nomeRua.innerText = body.logradouro;
                    nomeBairro.innerText = body.bairro;
                    complemento.innerText = body.complemento;
                    gia.innerText = body.gia;
                    ibge.innerText = body.ibge;
                    localidade.innerText = body.localidade;
                    uf.innerText = body.uf;
                    img2.style.display = "flex";
                    img.style.display = "none";
                })
        }
    }
    initFetchBitcoin() 

    function initModal() {
        const botaoAbrir = document.querySelector('[data-modal="abrir"]');
        const botaoFechar = document.querySelector('[data-modal="fechar"]');
        const containerModal = document.querySelector('[data-modal="container"]');
    
        if (botaoAbrir && botaoFechar && containerModal) {
            function abrirModal(event) {
                if(document.getElementById("cep").value == ""){
                    event.preventDefault();
                    containerModal.classList.add('ativo')
                }
            }
    
            function fecharModal(event) {
                event.preventDefault();
                containerModal.classList.remove('ativo')
            }
    
            function cliqueFora(event) {
                if (event.target == this)
                    fecharModal(event)
            }
    
            botaoAbrir.addEventListener('click', abrirModal);
            botaoFechar.addEventListener('click', fecharModal);
            containerModal.addEventListener('click', cliqueFora);
        }
    }
    initModal() 
