// Translation system
const translations = {
    en: {
        'nav-why': 'Why We Exist',
        'nav-what': 'What We Do',
        'nav-how': 'How We Work',
        'nav-cta': 'Get Started',
        'hero-title': 'AI That Works With Your Team, Not Against Them',
        'hero-subtitle': 'We help purpose-driven organizations implement AI solutions that enhance human capabilities while preserving what makes your work meaningful.',
        'hero-cta': 'Start a Conversation',
        'philosophy-title': 'Why We Exist',
        'belief-title': 'Our Belief',
        'belief-p1': 'As AI handles routine tasks, organizations face a choice: optimize for speed at the cost of human purpose, or evolve toward systems that honor both capability and meaning.',
        'belief-p2': 'We believe the future belongs to organizations that embrace distributed decision-making and authentic contribution—where people bring their full potential to work in service of shared purpose.',
        'transformation-title': 'The Transformation We\'re Part Of',
        'transformation-p1': 'We\'re witnessing a shift toward purposeful work, where individual development and collective impact become inseparable. As AI automates execution, the work that matters becomes increasingly human-centered.',
        'transformation-p2': 'When people align with deeper purpose and combine wisdom with technology, they create organizations that serve all stakeholders while remaining competitive and innovative.',
        'value-title': 'The Changing Rules of Value',
        'value-subtitle': 'As AI handles more routine work, economic value is shifting from speed of execution to quality of insight, strategy, and human judgment.',
        'trap-title': 'The Common Trap',
        'trap-desc': 'Most organizations use AI as a faster tool for existing work. This creates temporary gains but leads to a race where everyone has the same advantages.',
        'trap-point1': 'Focus on doing the same things faster',
        'trap-point2': 'Temporary productivity gains',
        'trap-point3': 'Commoditization as competitors catch up',
        'wise-title': 'A Wiser Path',
        'wise-desc': 'We help you discover new ways to create value by enhancing human creativity, judgment, and collaboration—capabilities that become more valuable as AI spreads.',
        'wise-point1': 'Reimagine workflows and value creation',
        'wise-point2': 'Sustainable competitive advantages',
        'wise-point3': 'Meaningful work that AI can\'t replicate',
        'services-title': 'What We Do',
        'services-subtitle': 'We provide practical guidance and hands-on support to integrate AI in ways that align with your values and amplify your team\'s potential.',
        'service1-title': 'AI Strategy & Planning',
        'service1-desc': 'We assess your current processes, identify where AI can help most, and create a clear roadmap for implementation that aligns with your organizational values.',
        'service2-title': 'Implementation & Training',
        'service2-desc': 'We build and deploy AI tools that integrate seamlessly with your existing workflows, then train your team to use them effectively and confidently.',
        'service3-title': 'Human-AI Collaboration',
        'service3-desc': 'We help your team develop the skills to work alongside AI—maintaining critical thinking, creativity, and the human judgment that AI can\'t replace.',
        'service4-title': 'Personal Purpose & Alignment',
        'service4-desc': 'We guide individuals in discovering their deeper purpose and aligning their work with their values. This internal coherence reduces anxiety, prevents burnout, and creates the foundation for both personal fulfillment and meaningful organizational contribution.',
        'service5-title': 'Process Automation',
        'service5-desc': 'We automate routine tasks so your team can focus on strategic work, relationship building, and the complex problem-solving that drives your mission forward.',
        'service6-title': 'Ethical & Responsible AI',
        'service6-desc': 'We provide guidance on implementing AI ethically, ensuring fairness, transparency, and data privacy are central to your technological evolution while maintaining alignment with your organizational values.',
        'clients-title': 'Who We Work With',
        'clients-subtitle': 'We partner with organizations that prioritize both innovation and human flourishing.',
        'client1-title': 'Purpose-Driven Organizations',
        'client1-desc': 'Companies that prioritize mission alongside profit, seeking to create positive impact while remaining competitive.',
        'client2-title': 'Cooperatives & B-Corps',
        'client2-desc': 'Organizations already committed to shared ownership, stakeholder governance, and social responsibility.',
        'client3-title': 'Non-Profits & Foundations',
        'client3-desc': 'Mission-driven organizations looking to amplify their impact through thoughtful technology adoption.',
        'client4-title': 'Educational Institutions',
        'client4-desc': 'Schools and research organizations focused on human development and conscious culture building.',
        'process-title': 'How We Work',
        'process-subtitle': 'Our approach emphasizes partnership, understanding, and sustainable transformation.',
        'step1-title': 'Listen & Assess',
        'step1-desc': 'We start by understanding your organization, goals, and concerns about AI implementation.',
        'step2-title': 'Design & Build',
        'step2-desc': 'We create custom AI solutions that fit your specific needs and organizational culture.',
        'step3-title': 'Train & Support',
        'step3-desc': 'We ensure your team is confident and capable, with ongoing support as you grow.',
        'cta-title': 'Ready to Get Started?',
        'cta-desc': 'Talk to our AI assistant first—it will ask a few questions about your organization and connect you with the right person on our team.',
        'cta-button': 'Chat with Our AI Assistant',
        'footer-text': '© 2024 Collective Intelligence Consulting. Human-centered AI for purpose-driven organizations.',
        'chat-widget': '💬 Chat Now'
    },
    es: {
        'nav-why': 'Por Qué Existimos',
        'nav-what': 'Qué Hacemos',
        'nav-how': 'Cómo Trabajamos',
        'nav-cta': 'Comenzar',
        'hero-title': 'IA Que Trabaja Con Tu Equipo',
        'hero-subtitle': 'Ayudamos a organizaciones con propósito a implementar soluciones de IA que mejoran las capacidades humanas mientras preservan lo que hace significativo su trabajo.',
        'hero-cta': 'Iniciar una Conversación',
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
        'chat-widget': '💬 Chatear Ahora'
    }
};

let currentLanguage = 'en';

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
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Store preference (would use localStorage in real implementation)
    // For artifacts, we'll just keep it in memory
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
    initializeLanguage();
}); 