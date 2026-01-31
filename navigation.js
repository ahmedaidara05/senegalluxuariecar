// navigation.js - Script pour injecter la navigation dans chaque page

document.addEventListener('DOMContentLoaded', function() {
    // Créer la structure HTML de la navigation
    const navigationHTML = `
        <div class="bg-effects" id="bgEffects"></div>
        
        <div class="container">
            <!-- Logo futuriste -->
            <div class="logo-container">
                <div class="logo">
                    <div class="logo-core">
                        <div class="logo-text">NEXUS</div>
                    </div>
                </div>
            </div>
            
            <!-- Boutons de navigation -->
            <div class="buttons-container">
                <!-- Bouton Facture -->
                <a href="facture.html" class="btn">
                    <div class="btn-inner">
                        <div class="btn-front">
                            <div class="btn-icon"><i class="fas fa-file-invoice-dollar"></i></div>
                            <div class="btn-title">FACTURE</div>
                            <div class="btn-subtitle">Gestion des factures</div>
                        </div>
                        <div class="btn-back">
                            <div class="btn-title">ACCÉDER AUX FACTURES</div>
                            <div class="btn-subtitle">Cliquez pour ouvrir</div>
                        </div>
                    </div>
                </a>
                
                <!-- Bouton Bon -->
                <a href="bon.html" class="btn">
                    <div class="btn-inner">
                        <div class="btn-front">
                            <div class="btn-icon"><i class="fas fa-ticket-alt"></i></div>
                            <div class="btn-title">BON</div>
                            <div class="btn-subtitle">Gestion des bons</div>
                        </div>
                        <div class="btn-back">
                            <div class="btn-title">ACCÉDER AUX BONS</div>
                            <div class="btn-subtitle">Cliquez pour ouvrir</div>
                        </div>
                    </div>
                </a>
                
                <!-- Bouton Devis -->
                <a href="devis.html" class="btn">
                    <div class="btn-inner">
                        <div class="btn-front">
                            <div class="btn-icon"><i class="fas fa-clipboard-list"></i></div>
                            <div class="btn-title">DEVIS</div>
                            <div class="btn-subtitle">Gestion des devis</div>
                        </div>
                        <div class="btn-back">
                            <div class="btn-title">ACCÉDER AUX DEVIS</div>
                            <div class="btn-subtitle">Cliquez pour ouvrir</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- Contenu spécifique à la page sera inséré ici -->
        <div id="page-content"></div>
    `;
    
    // Insérer la navigation au début du body
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
    
    // Déplacer le contenu existant (sauf la navigation) dans #page-content
    const pageContent = document.getElementById('page-content');
    const allElements = Array.from(document.body.children);
    
    allElements.forEach(element => {
        if (element.id !== 'bgEffects' && 
            !element.classList.contains('container') && 
            element.id !== 'page-content') {
            pageContent.appendChild(element);
        }
    });
    
    // Initialiser les effets de particules
    createParticles();
});

// Fonction pour créer les particules
function createParticles() {
    const container = document.getElementById('bgEffects');
    if (!container) return;
    
    // Nettoyer les anciennes particules
    container.innerHTML = '';
    
    // Créer des particules
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Position aléatoire
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Animation de déplacement
        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 5;
        
        particle.style.animation = `moveParticle ${duration}s linear ${delay}s infinite`;
        
        // Taille aléatoire
        const size = 1 + Math.random() * 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);
    }
    
    // Créer des lignes de grille
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.classList.add('grid-line');
        
        // Lignes verticales
        if (i < 10) {
            line.style.left = (i * 10) + 'vw';
            line.style.top = '0';
            line.style.width = '1px';
            line.style.height = '100vh';
        } 
        // Lignes horizontales
        else {
            line.style.left = '0';
            line.style.top = ((i-10) * 10) + 'vh';
            line.style.width = '100vw';
            line.style.height = '1px';
        }
        
        container.appendChild(line);
    }
}

// Ajouter l'animation des particules au style global
if (!document.querySelector('#particle-animations')) {
    const style = document.createElement('style');
    style.id = 'particle-animations';
    style.textContent = `
        @keyframes moveParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(20px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
