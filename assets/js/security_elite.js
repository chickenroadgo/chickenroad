/**
 * 🛡️ SECURITY ELITE V2.0 - UNIVERSAL REDIRECTION ENGINE
 * Protege tus enlaces de afiliado y garantiza acceso desde cualquier dispositivo (PC/Móvil).
 */
const EliteSecurity = {
    links: {
        "spinwin": "aHR0cHM6Ly90cmFjay5iZXRtZW5hZmZpbGlhdGVzLmNvbS92aXNpdC8/YnRhPTQyNTA1Jm5jaT02MDkxJnV0bV9jYW1wYWlnbj0mYWZwMTA9U3RyZWFtZXJz",
        "spingranny": "aHR0cHM6Ly90cmFjay5iZXRtZW5hZmZpbGlhdGVzLmNvbS92aXNpdC8/YnRhPTQyNTA1Jm5jaT01OTAzJmFmcDEwPVN0cmVhbWVycw==",
        "tryagain": "aHR0cHM6Ly90cmFjay5iZXRtZW5hZmZpbGlhdGVzLmNvbS92aXNpdC8/YnRhPTQyNTA1Jm5jaT01OTAzJmFmcDEwPVN0cmVhbWVycw=="
    },
    
    decode: function(id) {
        try {
            return atob(this.links[id.toLowerCase()]);
        } catch(e) {
            console.error("Link decode error:", e);
            return "#";
        }
    },
    
    apply: function() {
        const elements = document.querySelectorAll("[data-elite-id]");
        elements.forEach(el => {
            const id = el.getAttribute("data-elite-id");
            if (this.links[id.toLowerCase()]) {
                const targetUrl = this.decode(id);
                
                // Si es un link real <a>
                if (el.tagName === "A") {
                    if (el.href !== targetUrl) {
                        el.href = targetUrl;
                        el.target = "_blank";
                        el.rel = "noopener noreferrer";
                    }
                } else {
                    // Si es un div/button (para CTAs estilizados)
                    if (!el.onclick) {
                        el.onclick = (e) => {
                            e.preventDefault();
                            window.open(targetUrl, "_blank");
                        };
                        el.style.cursor = "pointer";
                    }
                }
            }
        });
    }
};

// Polling intensivo para SPAs (React) - Asegura que los enlaces se activen al renderizar
setInterval(() => EliteSecurity.apply(), 500);

// Primera ejecución inmediata
EliteSecurity.apply();

console.log("🚀 [SECURITY ELITE] Motor de Redirección Universal Activo.");
