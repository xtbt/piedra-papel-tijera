window.onload = function() {
    const piedra = document.getElementById('piedra');
    const papel = document.getElementById('papel');
    const tijeras = document.getElementById('tijeras');

    piedra.addEventListener('click', ataque__click);
    papel.addEventListener('click', ataque__click);
    tijeras.addEventListener('click', ataque__click);

    function ataque__click () {
        window.event.preventDefault();
        ataque = this.id;
        const opciones = ['piedra','papel','tijeras'];
        let user_attack = opciones.indexOf(ataque);
        let cpu_attack = Math.floor(Math.random() * 3);
        
        const posibilidades = [
            ['EMPATE','TÚ PIERDES','TÚ GANAS'],
            ['TÚ GANAS','EMPATE','TÚ PIERDES'],
            ['TÚ PIERDES','TÚ GANAS','EMPATE']
        ];
        
        document.getElementById('respuesta_cpu').innerHTML = '<img class="main__attack_image" src="/piedra-papel-tijera/@images/'+opciones[cpu_attack]+'.png" alt="'+opciones[cpu_attack]+'" />';
        document.getElementById('veredicto').innerText = posibilidades[user_attack][cpu_attack];
    }
}