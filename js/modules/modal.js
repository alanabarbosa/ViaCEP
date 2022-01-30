export default function initModal() {
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