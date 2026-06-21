document.addEventListener('DOMContentLoaded', () => {
    
    const toggleBtn = document.getElementById('toggle-btn');
    const container = document.querySelector('.admin-container');

    toggleBtn.addEventListener('click', () => {
        container.classList.toggle('sidebar-hidden');
    });

    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const targetSectionId = item.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === targetSectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    
    const petsDados = [
        { nome: 'Virgínia', especie: 'Cachorro (Pitbull)', idade: '1 ano', tutor: 'Vinicius Jr' },
        { nome: 'Hakimi', especie: 'Cachorro (Poodle)', idade: '5 anos', tutor: 'Vinicius Jr' }
    ];

    const tabelaPets = document.getElementById('lista-pets-dinamica');
    
    
    function carregarPets() {
        tabelaPets.innerHTML = ''; 
        petsDados.forEach(pet => {
            const linha = `
                <tr>
                    <td><strong>${pet.nome}</strong></td>
                    <td>${pet.especie}</td>
                    <td>${pet.idade}</td>
                    <td>${pet.tutor}</td>
                </tr>
            `;
            tabelaPets.innerHTML += linha;
        });
    }

    carregarPets();

    // 4. Exemplo de evento no botão "Novo Pet"
    const btnNovoPet = document.getElementById('btn-novo-pet');
    btnNovoPet.addEventListener('click', () => {
        alert('Funcionalidade de abrir formulário de cadastro de Pet!');
    });
});