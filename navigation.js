// navigation.js - Script pour injecter la navigation avec design SENEGALLUXUARYCAR

document.addEventListener('DOMContentLoaded', function() {
    // Créer la structure HTML de la navigation
    const navigationHTML = `
        <div class="navigation-container">
            <!-- Background Effects -->
            <div class="navigation-bg">
                <div class="bg-gradient-1"></div>
                <div class="bg-gradient-2"></div>
                <div class="bg-particles" id="bgParticles"></div>
            </div>
            
            <!-- Main Navigation -->
            <nav class="main-navigation">
                <!-- Logo SENEGALLUXUARYCAR -->
                <div class="nav-logo-container">
                    <div class="nav-logo">
                        <div class="logo-text-gradient">SENEGALLUXUARYCAR</div>
                        <div class="logo-subtitle">El Hadji Djibril Niass</div>
                    </div>
                </div>
                
                <!-- Navigation Cards -->
                <div class="nav-cards-grid">
                    <!-- Carte Facture -->
                    <a href="index.html" class="nav-card">
                        <div class="nav-card-inner">
                            <div class="nav-card-front">
                                <div class="nav-card-icon">
                                    <svg class="icon-lg" viewBox="0 0 24 24">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10 9 9 9 8 9"/>
                                    </svg>
                                </div>
                                <div class="nav-card-title">Factures</div>
                                <div class="nav-card-subtitle">Gestion complète des factures</div>
                            </div>
                            <div class="nav-card-back">
                                <div class="nav-card-back-content">
                                    <div class="nav-card-back-title">Système de Facturation</div>
                                    <div class="nav-card-back-desc">
                                        Créez, gérez et imprimez vos factures professionnelles avec intégration Firebase
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                    <!-- Carte Devis -->
                    <a href="devis.html" class="nav-card">
                        <div class="nav-card-inner">
                            <div class="nav-card-front">
                                <div class="nav-card-icon">
                                    <svg class="icon-lg" viewBox="0 0 24 24">
                                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                        <polyline points="17 21 17 13 7 13 7 21"/>
                                        <polyline points="7 3 7 8 15 8"/>
                                        <line x1="9" y1="17" x2="15" y2="17"/>
                                        <line x1="9" y1="15" x2="15" y2="15"/>
                                    </svg>
                                </div>
                                <div class="nav-card-title">Devis</div>
                                <div class="nav-card-subtitle">Création de devis</div>
                            </div>
                            <div class="nav-card-back">
                                <div class="nav-card-back-content">
                                    <div class="nav-card-back-title">Système de Devis</div>
                                    <div class="nav-card-back-desc">
                                        Générez des devis professionnels avec sauvegarde automatique sur Firebase
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                    <!-- Carte Bon de Livraison -->
                    <a href="bon.html" class="nav-card">
                        <div class="nav-card-inner">
                            <div class="nav-card-front">
                                <div class="nav-card-icon">
                                    <svg class="icon-lg" viewBox="0 0 24 24">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                        <line x1="9" y1="15" x2="15" y2="15"/>
                                        <line x1="12" y1="12" x2="12" y2="18"/>
                                    </svg>
                                </div>
                                <div class="nav-card-title">Bons de Livraison</div>
                                <div class="nav-card-subtitle">Gestion des livraisons</div>
                            </div>
                            <div class="nav-card-back">
                                <div class="nav-card-back-content">
                                    <div class="nav-card-back-title">Bons de Livraison</div>
                                    <div class="nav-card-back-desc">
                                        Créez et gérez vos bons de livraison avec suivi complet
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                
                <!-- Footer Navigation -->
                <div class="nav-footer">
                    <div class="nav-footer-text">
                        <span>© 2024 SENEGALLUXUARYCAR</span>
                        <span class="separator">•</span>
                        <span>RC-SN-DKR-2024-A-46119</span>
                        <span class="separator">•</span>
                        <span>NINEA: 0116573661</span>
                    </div>
                </div>
            </nav>
        </div>
    `;
    
    // Insérer la navigation au début du body
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
    
    // Appliquer les styles de navigation
    applyNavigationStyles();
    
    // Initialiser les effets de particules
    createNavigationParticles();
    
    // Initialiser les animations des cartes
    initNavigationCards();
});

// Styles pour la navigation
function applyNavigationStyles() {
    const styles = `
        :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --dark-bg: #0f172a;
            --card-bg: rgba(30, 41, 59, 0.8);
            --border-color: rgba(255, 255, 255, 0.1);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent-blue: #3b82f6;
        }
        
        .navigation-container {
            min-height: 100vh;
            background: var(--dark-bg);
            position: relative;
            overflow: hidden;
        }
        
        .navigation-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }
        
        .bg-gradient-1 {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%);
        }
        
        .bg-gradient-2 {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
        }
        
        .main-navigation {
            position: relative;
            z-index: 2;
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .nav-logo-container {
            text-align: center;
            margin-bottom: 4rem;
            padding-top: 2rem;
        }
        
        .logo-text-gradient {
            font-size: 3.5rem;
            font-weight: 800;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 0.5rem;
            letter-spacing: 1px;
        }
        
        .logo-subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
        }
        
        .nav-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
        
        .nav-card {
            display: block;
            text-decoration: none;
            height: 300px;
            perspective: 1000px;
        }
        
        .nav-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
        }
        
        .nav-card:hover .nav-card-inner {
            transform: rotateY(180deg);
        }
        
        .nav-card-front, .nav-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 20px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .nav-card-front {
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .nav-card-back {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            transform: rotateY(180deg);
        }
        
        .nav-card-icon {
            margin-bottom: 1.5rem;
        }
        
        .icon-lg {
            width: 64px;
            height: 64px;
            stroke: var(--accent-blue);
            stroke-width: 1.5;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        
        .nav-card-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            text-align: center;
        }
        
        .nav-card-subtitle {
            font-size: 1rem;
            color: var(--text-secondary);
            text-align: center;
        }
        
        .nav-card-back-content {
            text-align: center;
        }
        
        .nav-card-back-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .nav-card-back-desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }
        
        .nav-footer {
            text-align: center;
            padding: 2rem;
            border-top: 1px solid var(--border-color);
            margin-top: 2rem;
        }
        
        .nav-footer-text {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }
        
        .separator {
            margin: 0 0.5rem;
        }
        
        /* Particules */
        .particle {
            position: absolute;
            background: var(--accent-blue);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
        }
        
        .particle.small {
            width: 2px;
            height: 2px;
        }
        
        .particle.medium {
            width: 3px;
            height: 3px;
        }
        
        .particle.large {
            width: 4px;
            height: 4px;
        }
        
        /* Animations */
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 0.6;
            }
            50% {
                opacity: 0.3;
            }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .nav-cards-grid {
                grid-template-columns: 1fr;
            }
            
            .logo-text-gradient {
                font-size: 2.5rem;
            }
            
            .nav-card {
                height: 250px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Créer les particules de navigation
function createNavigationParticles() {
    const container = document.getElementById('bgParticles');
    if (!container) return;
    
    // Nettoyer les anciennes particules
    container.innerHTML = '';
    
    // Créer 50 particules
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Taille aléatoire
        const sizes = ['small', 'medium', 'large'];
        particle.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
        
        // Position aléatoire
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Animation de flottement
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Effet pulse
        const pulseDuration = 2 + Math.random() * 3;
        particle.style.animation += `, pulse ${pulseDuration}s ease-in-out infinite`;
        
        // Opacité aléatoire
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        container.appendChild(particle);
    }
}

// Initialiser les animations des cartes
function initNavigationCards() {
    const cards = document.querySelectorAll('.nav-card');
    
    cards.forEach((card, index) => {
        // Délai d'animation progressif
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Effet de survol amélioré
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}
