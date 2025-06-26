// Translation system - only non-English languages
const translations = {
    es: {
        'nav-why': 'Por Qué Existimos',
        'nav-what': 'Qué Hacemos',
        'nav-how': 'Cómo Trabajamos',
        'nav-cta': 'Comenzar',
        'hero-title': 'Liberamos tu tiempo para que puedas enfocarte en tu potencial único.',
        'hero-subtitle': 'Diseñamos e implementamos soluciones de inteligencia artificial centradas en las personas, acompañando a individuos y organizaciones hacia la nueva era de la colaboración Humano-IA.',
        'hero-cta': 'Descubre como',
        'philosophy-title': 'Por Qué Existimos',
        'belief-title': 'Nuestra Creencia',
        'belief-p1': 'Mientras la IA maneja las tareas rutinarias, las organizaciones enfrentan una decisión: optimizar por velocidad a costa del propósito humano, o evolucionar hacia sistemas que honren tanto la capacidad como el significado.',
        'belief-p2': 'Creemos que el futuro pertenece a organizaciones que abrazan la toma de decisiones distribuida y la contribución auténtica—donde las personas aportan todo su potencial al trabajo en servicio de un propósito compartido.',
        'transformation-title': 'La Transformación De La Que Somos Parte',
        'transformation-p1': 'Estamos presenciando un cambio hacia el trabajo con propósito, donde el desarrollo individual y el impacto colectivo se vuelven inseparables. Mientras la IA automatiza la ejecución, el trabajo que importa se vuelve cada vez más centrado en el ser humano.',
        'transformation-p2': 'Cuando las personas se alinean con un propósito más profundo y combinan sabiduría con tecnología, crean organizaciones que sirven a todas las partes interesadas mientras permanecen competitivas e innovadoras.',
        'value-title': 'Las Reglas Cambiantes del Valor',
        'value-subtitle': 'Mientras la IA maneja más trabajo rutinario, el valor económico está cambiando de la velocidad de ejecución a la calidad de percepción, estrategia y juicio humano.',
        'trap-title': 'La Trampa Común',
        'trap-desc': 'La mayoría de las organizaciones usan la IA como una herramienta más rápida para el trabajo existente. Esto crea ganancias temporales pero lleva a una carrera donde todos tienen las mismas ventajas.',
        'trap-point1': 'Enfocarse en hacer las mismas cosas más rápido',
        'trap-point2': 'Ganancias de productividad temporales',
        'trap-point3': 'Comoditización mientras los competidores se ponen al día',
        'wise-title': 'Un Camino Más Sabio',
        'wise-desc': 'Te ayudamos a descubrir nuevas formas de crear valor mejorando la creatividad, el juicio y la colaboración humana—capacidades que se vuelven más valiosas mientras la IA se extiende.',
        'wise-point1': 'Reimaginar flujos de trabajo y creación de valor',
        'wise-point2': 'Ventajas competitivas sostenibles',
        'wise-point3': 'Trabajo significativo que la IA no puede replicar',
        'services-title': 'Qué Hacemos',
        'services-subtitle': 'Proporcionamos orientación práctica y apoyo directo para integrar la IA de maneras que se alineen con sus valores y amplíen el potencial de su equipo.',
        'service1-title': 'Estrategia y Planificación de IA',
        'service1-desc': 'Evaluamos sus procesos actuales, identificamos dónde la IA puede ayudar más, y creamos una hoja de ruta clara para la implementación que se alinee con sus valores organizacionales.',
        'service2-title': 'Implementación y Capacitación',
        'service2-desc': 'Construimos e implementamos herramientas de IA que se integran perfectamente con sus flujos de trabajo existentes, luego capacitamos a su equipo para usarlas de manera efectiva y con confianza.',
        'service3-title': 'Colaboración Humano-IA',
        'service3-desc': 'Ayudamos a su equipo a desarrollar las habilidades para trabajar junto a la IA—manteniendo el pensamiento crítico, la creatividad y el juicio humano que la IA no puede reemplazar.',
        'service4-title': 'Propósito Personal y Alineación',
        'service4-desc': 'Guiamos a individuos en descubrir su propósito más profundo y alinear su trabajo con sus valores. Esta coherencia interna reduce la ansiedad, previene el agotamiento, y crea la base tanto para la realización personal como para la contribución organizacional significativa.',
        'service5-title': 'Automatización de Procesos',
        'service5-desc': 'Automatizamos tareas rutinarias para que su equipo pueda enfocarse en trabajo estratégico, construcción de relaciones, y la resolución de problemas complejos que impulsa su misión.',
        'service6-title': 'IA Ética y Responsable',
        'service6-desc': 'Proporcionamos orientación sobre implementar IA éticamente, asegurando que la equidad, transparencia y privacidad de datos sean centrales en su evolución tecnológica mientras mantienen alineación con sus valores organizacionales.',
        'clients-title': 'Con Quién Trabajamos',
        'clients-subtitle': 'Nos asociamos con organizaciones que priorizan tanto la innovación como el florecimiento humano.',
        'client1-title': 'Organizaciones con Propósito',
        'client1-desc': 'Empresas que priorizan la misión junto a las ganancias, buscando crear impacto positivo mientras permanecen competitivas.',
        'client2-title': 'Cooperativas y B-Corps',
        'client2-desc': 'Organizaciones ya comprometidas con la propiedad compartida, la gobernanza de partes interesadas, y la responsabilidad social.',
        'client3-title': 'ONGs y Fundaciones',
        'client3-desc': 'Organizaciones impulsadas por misión que buscan amplificar su impacto a través de la adopción tecnológica reflexiva.',
        'client4-title': 'Instituciones Educativas',
        'client4-desc': 'Escuelas y organizaciones de investigación enfocadas en el desarrollo humano y la construcción de cultura consciente.',
        'process-title': 'Cómo Trabajamos',
        'process-subtitle': 'Nuestro enfoque enfatiza la asociación, el entendimiento, y la transformación sostenible.',
        'step1-title': 'Escuchar y Evaluar',
        'step1-desc': 'Comenzamos entendiendo su organización, objetivos, y preocupaciones sobre la implementación de IA.',
        'step2-title': 'Diseñar y Construir',
        'step2-desc': 'Creamos soluciones de IA personalizadas que se ajusten a sus necesidades específicas y cultura organizacional.',
        'step3-title': 'Capacitar y Apoyar',
        'step3-desc': 'Nos aseguramos de que su equipo esté confiado y capacitado, con apoyo continuo mientras crece.',
        'cta-title': '¿Listo para Comenzar?',
        'cta-desc': 'Hable primero con nuestro asistente de IA—hará algunas preguntas sobre su organización y lo conectará con la persona adecuada en nuestro equipo.',
        'cta-button': 'Chatear con Nuestro Asistente de IA',
        'footer-text': '© 2024 Collective Intelligence Consulting. IA centrada en el ser humano para organizaciones con propósito.',
        'chat-widget': '💬 Chatear Ahora',
        'philosophy-intro-short': 'Artificial intelligence is reshaping our world. Our mission is to ensure this transformation puts people at the center.',
        'philosophy-fusion-short': 'We merge AI innovation with personal consciousness development to build more <strong>resilient, creative, and authentic</strong> teams, ready to lead the future.',
        'philosophy-cta-link': 'Conoce nuestra filosofía →',
        'philosophy-main-text': 'La inteligencia artificial está redefiniendo nuestro mundo. Nuestra misión es asegurar que esta transformación ponga lo humano en el centro. Fusionamos la innovación en IA con el desarrollo de la conciencia personal para construir equipos más <strong>resilientes, creativos y auténticos</strong>, listos para liderar el futuro.',
        'assistant-title': 'Inicia Tu Transformación',
        'assistant-intro': 'Nuestro asistente de IA te guiará a través de una breve evaluación para identificar oportunidades de automatización en tu flujo de trabajo. Responde unas pocas preguntas para comenzar y descubre cómo liberar tu activo más valioso: tu tiempo.',
        'assistant-left-text': 'Conecta tus herramientas esenciales. Analizamos tu comunicación, gestión de proyectos y rutinas diarias para crear flujos de trabajo inteligentes y personalizados.',
        'assistant-left-title': 'Conecta tu Ecosistema',
        'form-name-label': 'Nombre',
        'form-name-placeholder': 'Tu nombre',
        'form-email-label': 'Email',
        'form-email-placeholder': 'tu@email.com',
        'form-checkbox-label': 'Confirmo que soy humano.',
        'form-button': 'Iniciar Evaluación con IA',
        'value1-title': 'Infraestructura IA con enfoque ético',
        'value1-desc': 'Diseñamos e implementamos soluciones IA que integran visión estratégica, tecnología y valores humanos. Detectamos procesos automatizables con mirada integral.',
        'value2-title': 'Entrenamiento y Empoderamiento',
        'value2-desc': 'Preparamos personas y equipos para usar IA con seguridad y confianza. Nuestro enfoque potencia capacidades humanas, no las reemplaza.',
        'value3-title': 'Activación del Potencial Humano',
        'value3-desc': 'Acompañamos a cada persona a descubrir su talento único y ponerlo en acción. Porque el verdadero progreso ocurre cuando somos auténticamente humanos.',
        'value-tag': 'Creación de Valor',
        'services-tag': 'Nuestros Servicios',
        'clients-tag': 'Nuestros Socios',
        'approach-tag': 'Nuestro Enfoque',
        'approach-title': 'Cómo Trabajamos',
        'approach-subtitle': 'Nuestra metodología probada asegura un proceso de transformación suave y efectivo.',
        'step1-description': 'Comenzamos con un análisis integral de su estado actual y objetivos.',
        'step2-description': 'Juntos, creamos una hoja de ruta personalizada para su transformación.',
        'step3-description': 'Los guiamos a través de la ejecución de su plan de transformación.',
        'approach-step1-title': 'Evaluación Inicial',
        'approach-step2-title': 'Desarrollo de Estrategia',
        'approach-step3-title': 'Implementación',
        'value1-preheader': 'Para organizaciones',
        'value2-preheader': 'Para equipos',
        'value3-preheader': 'Para individuos'
    }
};

let currentLanguage = 'en';
let originalContent = {};

// Cache original English content from HTML
function cacheOriginalContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        originalContent[key] = element.innerHTML;
    });
}

// Detect browser language
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('es')) {
        return 'es';
    }
    return 'en';
}

// Switch language function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active buttons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + lang).classList.add('active');
    document.getElementById('mobile-lang-' + lang).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        
        if (lang === 'en') {
            // Restore original English content
            if (originalContent[key]) {
                element.innerHTML = originalContent[key];
            }
        } else if (translations[lang] && translations[lang][key]) {
            // Apply translation for other languages
            element.innerHTML = translations[lang][key];
        }
    });

    // Apply highlights to hero title
    applyHeroHighlights();

    // Store preference (would use localStorage in real implementation)
    // For artifacts, we'll just keep it in memory
}

// Function to apply highlight classes to hero title keywords
function applyHeroHighlights() {
    const heroTitle = document.querySelector('.hero h1[data-translate="hero-title"]');
    if (!heroTitle) return;
    
    let text = heroTitle.textContent;
    
    if (currentLanguage === 'es') {
        // Spanish: highlight "tiempo" and "potencial único"
        text = text.replace(/(tiempo)/gi, '<span class="highlight">$1</span>');
        text = text.replace(/(potencial único)/gi, '<span class="highlight">$1</span>');
    } else {
        // English: highlight "time" and "unique potential"
        text = text.replace(/(time)/gi, '<span class="highlight">$1</span>');
        text = text.replace(/(unique potential)/gi, '<span class="highlight">$1</span>');
    }
    
    heroTitle.innerHTML = text;
}

// Initialize language on page load
function initializeLanguage() {
    const detectedLang = detectLanguage();
    switchLanguage(detectedLang);
}

function openChat() {
    const chatMessages = {
        en: "Hello! I'm an AI assistant that helps connect you with our human consultants.\n\nI'll ask you a few quick questions about:\n• Your organization type\n• Current AI experience\n• Main challenges you'd like to address\n• Timeline and budget considerations\n\nThen I'll connect you with the right team member.\n\n(This would open your actual AI chat interface)",
        es: "¡Hola! Soy un asistente de IA que ayuda a conectarte con nuestros consultores humanos.\n\nTe haré algunas preguntas rápidas sobre:\n• Tu tipo de organización\n• Experiencia actual con IA\n• Principales desafíos que te gustaría abordar\n• Consideraciones de cronograma y presupuesto\n\nLuego te conectaré con el miembro adecuado del equipo.\n\n(Esto abriría tu interfaz de chat de IA real)"
    };
    alert(chatMessages[currentLanguage]);
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else if (targetId === 'chat' || targetId === 'contact') {
            openChat();
        }
        
        // Close mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        }
    });
});

// Initialize language when page loads
document.addEventListener('DOMContentLoaded', function() {
    cacheOriginalContent(); // Cache English content first
    initializeLanguage();
});
