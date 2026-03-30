# 🛡️ PROTOCOLO DE SEGURIDAD ELITE (github_deploy/assets/js/security_elite.js)
// Este script ofusca los enlaces de afiliado para que no sean visibles en el HTML plano
const EliteSecurity = {
    links: {
        "spinwin": "aHR0cHM6Ly90cmFjay5iZXRtZW5hZmZpbGlhdGVzLmNvbS92aXNpdC8/YnRhPTQyNTA1Jm5jaT02MDkxJnV0bV9jYW1wYWlnbj0mYWZwMTA9U3RyZWFtZXJz",
        "spingranny": "aHR0cHM6Ly90cmFjay5iZXRtZW5hZmZpbGlhdGVzLmNvbS92aXNpdC8/YnRhPTQyNTA1Jm5jaT01OTAzJmFmcDEwPVN0cmVhbWVycw=="
    },
    
    decode: function(id) {
        return atob(this.links[id]);
    },
    
    apply: function() {
        document.querySelectorAll("[data-elite-id]").forEach(el => {
            const id = el.getAttribute("data-elite-id");
            if (this.links[id]) {
                el.href = this.decode(id);
            }
        });
    }
};

window.onload = () => EliteSecurity.apply();
