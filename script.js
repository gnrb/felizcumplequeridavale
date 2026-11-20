/* =========================================================
   20 CARTAS PARA VALE — configuración editable
   Edita títulos, rutas de imágenes, playlist y el fondo de la caja aquí.
   ========================================================= */

const CHAPTERS = [
    { id: 1, name: "I. El comienzo", accent: "yellow", sealMark: "✦" },
    { id: 2, name: "II. Descubrirla", accent: "honey", sealMark: "☀" },
    { id: 3, name: "III. Lo que no se ve", accent: "blue", sealMark: "☾" },
    { id: 4, name: "IV. Lo que despertó", accent: "lilac", sealMark: "✧" },
    { id: 5, name: "V. Lo que todavía queda", accent: "terracotta", sealMark: "➳" },
    { id: 6, name: "VI. Cumpleaños", accent: "gold", sealMark: "🌻" },
];

/* Las dos canciones del mini reproductor */
const PLAYLIST = [
    { title: "Risk It All", artist: "Bruno Mars", src: "assets/audio/risk-it-all.mp3" },
    { title: "Te Amo y Más", artist: "Diego Luna", src: "assets/audio/te-amo-y-mas.mp3" },
];

const LETTERS = [
    // 01–04 · El comienzo
    { num: 1, chapterId: 1, title: "El primer cumpleaños que no conocía", prompt: "El primer cumpleaños que no conocías", image: "assets/cartas/carta-01.jpg" },
    { num: 2, chapterId: 1, title: "Cómo empezó aquella curiosidad", prompt: "Cómo empezó aquella curiosidad por ella", image: "assets/cartas/carta-02.jpg" },
    { num: 3, chapterId: 1, title: "Las primeras conversaciones", prompt: "Las primeras conversaciones", image: "assets/cartas/carta-03.jpg" },
    { num: 4, chapterId: 1, title: "Lo que recuerdo sin proponérmelo", prompt: "Algo de ella que recuerdas sin proponértelo", image: "assets/cartas/carta-04.jpg" },

    // 05–08 · Descubrirla
    { num: 5, chapterId: 2, title: "Tus ocurrencias y cantar de repente", prompt: "Sus ocurrencias y su forma de cantar de repente", image: "assets/cartas/carta-05.jpg" },
    { num: 6, chapterId: 2, title: "Los girasoles y tus contradicciones", prompt: "Los girasoles y sus contradicciones", image: "assets/cartas/carta-06.jpg" },
    { num: 7, chapterId: 2, title: "Viajar y grabar el mundo", prompt: "Su forma de querer viajar y grabar el mundo", image: "assets/cartas/carta-07.jpg" },
    { num: 8, chapterId: 2, title: "Detalles que crees pequeños", prompt: "Las cosas que probablemente ella no considera especiales, pero tú recuerdas", image: "assets/cartas/carta-08.jpg" },

    // 09–12 · Las cosas que no se ven
    { num: 9, chapterId: 3, title: "Tus días buenos y tus días grises", prompt: "Sus días buenos y malos", image: "assets/cartas/carta-09.jpg" },
    { num: 10, chapterId: 3, title: "Lo que hay detrás de tu sonrisa", prompt: "Lo que hay detrás de su sonrisa", image: "assets/cartas/carta-10.jpg" },
    { num: 11, chapterId: 3, title: "No tener que fingir estar bien", prompt: "La importancia de no tener que fingir estar bien", image: "assets/cartas/carta-11.jpg" },
    { num: 12, chapterId: 3, title: "Descansar y no exigirte tanto", prompt: "Una carta sobre descansar y no exigirse tanto", image: "assets/cartas/carta-12.jpg" },

    // 13–16 · Lo que despertó en ti
    { num: 13, chapterId: 4, title: "Volver a escribir", prompt: "Volver a escribir.", image: "assets/cartas/carta-13.jpg" },
    { num: 14, chapterId: 4, title: "Dibujar otra vez", prompt: "Dibujar otra vez.", image: "assets/cartas/carta-14.jpg" },
    { num: 15, chapterId: 4, title: "Recuperar la curiosidad por crear", prompt: "Recuperar la curiosidad por crear", image: "assets/cartas/carta-15.jpg" },
    { num: 16, chapterId: 4, title: "Ecuaciones con un lugar nuevo", prompt: "La ciencia, tus ecuaciones y esa parte tuya que volvió a encontrar un lugar para expresarse.", image: "assets/cartas/carta-16.jpg" },

    // 17–19 · Lo que todavía queda
    { num: 17, chapterId: 5, title: "Los lugares que aún quieres conocer", prompt: "Los lugares que aún quiere conocer", image: "assets/cartas/carta-17.jpg" },
    { num: 18, chapterId: 5, title: "Todo lo que viene con tus veinte", prompt: "Todo lo que le queda por vivir a sus veinte", image: "assets/cartas/carta-18.jpg" },
    { num: 19, chapterId: 5, title: "Libertad para descubrir tu camino", prompt: "Una carta que no prediga su futuro, sino que le desee libertad para descubrirlo", image: "assets/cartas/carta-19.jpg" },

    // 20 · El cumpleaños
    { num: 20, chapterId: 6, title: "Felices 20 querida Valeska", prompt: "Celebrar que está aquí, que llegó a los veinte y que todavía tiene muchísimo mundo por delante", image: "assets/cartas/carta-20.jpg", isBirthday: true },
];

/* =========================================================
   EL FONDO DE LA CAJA — se desbloquea al completar 20/20
   ========================================================= */

const BOTTOM_OF_BOX = {
    kicker: "Debajo de los 20 sobres",
    title: "Lo que quedó en el fondo de la caja",
    paragraphs: [
        "Si llegaste hasta aquí es porque ya abriste los veinte sobres. Uno por cada cumpleaños que pasó sin que pudiera darte un girasol y una carta.",
        "Ojalá esta caja te acompañe en tus noches tranquilas, y te recuerde que hay personas que te miran con cuidado y celebran que existas.",
    ],
    signature: "Felices 20, querida Vale.",
    illustration: "",
    portalText: "Y si todavía te queda un rato esta noche con audífonos...",
    portalLabel: "Abrir el otro universo ✨",
    portalUrl: "",
};

const FRIEND_NOTES = [
    {
        from: "Tu cómplice",
        role: "Quien ayudó a armar todo esto",
        accent: "lilac",
        preview: "Una nota guardada con cariño para tus 20...",
        paragraphs: [
            "Aquí puedes poner el mensaje real que escriba su amiga (o cambiarlo por una foto escaneada de su carta manuscrita usando el campo image).",
        ],
        image: "",
    },
    {
        from: "Otro amigo",
        role: "Un saludo más en la caja",
        accent: "blue",
        preview: "Toca para abrir este sobre escondido",
        paragraphs: [
            "Puedes duplicar estos bloques para cada amigo que quiera sumarse, o borrar los que no uses.",
        ],
        image: "",
    },
];

const ACCENT_VARS = {
    yellow: "var(--seal-yellow)",
    honey: "var(--seal-honey)",
    blue: "var(--seal-blue)",
    lilac: "var(--seal-lilac)",
    terracotta: "var(--seal-terracotta)",
    gold: "var(--seal-gold)",
};

/* =========================================================
   MOTOR DE JARDÍN PROGRESIVO EN ACUARELA (HTML5 CANVAS 2D)
   ========================================================= */

function createWatercolorGarden(canvas) {
    if (!canvas) {
        return {
            syncReadSet() { },
            bloomLetter() { },
            showAll() { },
        };
    }

    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Paletas en acuarela basadas en los colores de Valeska
    const PALETTES = {
        sunflower: {
            wash: [242, 204, 88],
            outer: [212, 148, 34],
            inner: [242, 198, 66],
            edge: [176, 114, 20],
            centerDark: [76, 48, 26],
            centerWarm: [118, 78, 38],
        },
        goldHero: {
            wash: [247, 212, 92],
            outer: [218, 152, 26],
            inner: [250, 210, 74],
            edge: [170, 108, 16],
            centerDark: [68, 42, 20],
            centerWarm: [130, 86, 36],
        },
        blueRose: {
            wash: [152, 186, 214],
            outer: [122, 162, 196],
            inner: [88, 126, 162],
            edge: [64, 96, 130],
            centerDark: [56, 82, 112],
        },
        lilacRose: {
            wash: [188, 158, 208],
            outer: [164, 128, 188],
            inner: [128, 92, 154],
            edge: [96, 66, 120],
            centerDark: [84, 56, 106],
        },
        terracottaRose: {
            wash: [224, 144, 132],
            outer: [204, 108, 96],
            inner: [172, 76, 66],
            edge: [138, 54, 46],
            centerDark: [120, 46, 38],
        },
        honeyBlossom: {
            wash: [240, 194, 116],
            outer: [224, 158, 68],
            inner: [246, 204, 122],
            edge: [180, 114, 38],
            centerDark: [148, 92, 28],
        },
        lavender: {
            wash: [174, 146, 204],
            outer: [142, 110, 176],
            inner: [112, 82, 148],
            edge: [86, 60, 118],
        },
    };

    // Composición armoniosa de las 20 flores (altas a los costados, valle suave al centro)
    const SPECS = [
        { num: 1, x: 0.11, h: 0.24, type: "sunflower", palette: "sunflower", size: 1.05, curve: 0.18 },
        { num: 2, x: 0.89, h: 0.25, type: "sunflower", palette: "sunflower", size: 1.08, curve: -0.16 },
        { num: 3, x: 0.24, h: 0.17, type: "wildflower", palette: "honeyBlossom", size: 0.88, curve: 0.12 },
        { num: 4, x: 0.76, h: 0.18, type: "wildflower", palette: "honeyBlossom", size: 0.90, curve: -0.14 },
        { num: 5, x: 0.05, h: 0.19, type: "wildflower", palette: "honeyBlossom", size: 0.86, curve: 0.22 },
        { num: 6, x: 0.95, h: 0.20, type: "sunflower", palette: "sunflower", size: 0.96, curve: -0.20 },
        { num: 7, x: 0.36, h: 0.12, type: "sunflower", palette: "sunflower", size: 0.82, curve: 0.08 },
        { num: 8, x: 0.64, h: 0.12, type: "wildflower", palette: "honeyBlossom", size: 0.80, curve: -0.09 },
        { num: 9, x: 0.17, h: 0.22, type: "rose", palette: "blueRose", size: 0.96, curve: 0.14 },
        { num: 10, x: 0.82, h: 0.21, type: "rose", palette: "blueRose", size: 0.94, curve: -0.15 },
        { num: 11, x: 0.44, h: 0.10, type: "rose", palette: "blueRose", size: 0.78, curve: -0.06 },
        { num: 12, x: 0.56, h: 0.10, type: "wildflower", palette: "blueRose", size: 0.76, curve: 0.07 },
        { num: 13, x: 0.08, h: 0.27, type: "lavender", palette: "lavender", size: 1.00, curve: 0.16 },
        { num: 14, x: 0.92, h: 0.27, type: "lavender", palette: "lavender", size: 1.00, curve: -0.16 },
        { num: 15, x: 0.29, h: 0.15, type: "rose", palette: "lilacRose", size: 0.88, curve: 0.10 },
        { num: 16, x: 0.71, h: 0.15, type: "rose", palette: "lilacRose", size: 0.88, curve: -0.11 },
        { num: 17, x: 0.20, h: 0.14, type: "rose", palette: "terracottaRose", size: 0.84, curve: -0.10 },
        { num: 18, x: 0.80, h: 0.14, type: "rose", palette: "terracottaRose", size: 0.86, curve: 0.10 },
        { num: 19, x: 0.49, h: 0.11, type: "rose", palette: "lilacRose", size: 0.80, curve: -0.05 },
        { num: 20, x: 0.14, h: 0.29, type: "sunflower", palette: "goldHero", size: 1.24, curve: 0.12 },
    ];

    const flowerStates = new Map(); // num -> { visible, progress, startTime, duration }
    SPECS.forEach((s) => {
        flowerStates.set(s.num, { visible: false, progress: 0, startTime: 0, duration: 1550 });
    });

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = null;
    let resizeTimer = null;

    function mulberry32(seed) {
        let a = seed >>> 0;
        return function () {
            a |= 0;
            a = (a + 0x6d2b79f5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    function rgba(rgb, alpha) {
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
    }

    function easeOutCubic(t) {
        const c = Math.max(0, Math.min(1, t));
        return 1 - Math.pow(1 - c, 3);
    }

    function resize(force = false) {
        const nextW = window.innerWidth;
        const nextH = window.innerHeight;
        if (!force && nextW === width && Math.abs(nextH - height) < 85) return;

        width = nextW;
        height = nextH;
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.max(1, Math.round(width * dpr));
        canvas.height = Math.max(1, Math.round(height * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        drawFrame();
    }

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => resize(false), 160);
    });

    // Mancha orgánica de acuarela (capas semitransparentes + borde capilar suave)
    function drawWatercolorBlob(x, y, rx, ry, rot, rgb, alpha, rand, edgeRgb) {
        if (alpha <= 0.005 || rx <= 0.4 || ry <= 0.4) return;
        const points = 9;

        for (let layer = 0; layer < 3; layer++) {
            const jx = (rand() - 0.5) * rx * 0.22;
            const jy = (rand() - 0.5) * ry * 0.22;
            const scale = 1 - layer * 0.12;
            const pts = [];

            for (let i = 0; i < points; i++) {
                const ang = (i / points) * Math.PI * 2;
                const wobble = 0.84 + rand() * 0.32;
                pts.push({
                    x: Math.cos(ang) * rx * scale * wobble,
                    y: Math.sin(ang) * ry * scale * wobble,
                });
            }

            ctx.save();
            ctx.translate(x + jx, y + jy);
            ctx.rotate(rot + (rand() - 0.5) * 0.15);
            ctx.beginPath();

            for (let i = 0; i < points; i++) {
                const curr = pts[i];
                const next = pts[(i + 1) % points];
                const midX = (curr.x + next.x) * 0.5;
                const midY = (curr.y + next.y) * 0.5;
                if (i === 0) ctx.moveTo(midX, midY);
                else ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
            }
            ctx.closePath();

            ctx.fillStyle = rgba(rgb, alpha * (layer === 0 ? 0.34 : layer === 1 ? 0.26 : 0.2));
            ctx.fill();

            if (layer === 0 && edgeRgb) {
                ctx.strokeStyle = rgba(edgeRgb, alpha * 0.24);
                ctx.lineWidth = 0.9;
                ctx.stroke();
            }

            ctx.restore();
        }
    }

    function drawPetalTear(x, y, length, widthPx, angle, rgb, edgeRgb, alpha, rand) {
        if (length < 1 || alpha <= 0.005) return;

        for (let pass = 0; pass < 2; pass++) {
            const l = length * (pass === 0 ? 1 : 0.84);
            const w = widthPx * (pass === 0 ? 1 : 0.82);
            const jitter = (rand() - 0.5) * 0.08;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle + jitter);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(w, -l * 0.32, w * 0.85, -l * 0.78, 0, -l);
            ctx.bezierCurveTo(-w * 0.85, -l * 0.78, -w, -l * 0.32, 0, 0);
            ctx.closePath();

            ctx.fillStyle = rgba(rgb, alpha * (pass === 0 ? 0.44 : 0.34));
            ctx.fill();

            if (pass === 0 && edgeRgb) {
                ctx.strokeStyle = rgba(edgeRgb, alpha * 0.26);
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }
            ctx.restore();
        }
    }

    function drawLeaf(x, y, len, angle, alpha, rand) {
        if (len < 2 || alpha <= 0.005) return;
        drawPetalTear(x, y, len, len * 0.32, angle, [112, 138, 86], [76, 102, 58], alpha * 0.82, rand);
    }

    function evalQuad(p0, p1, p2, t) {
        const u = 1 - t;
        return {
            x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
            y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
        };
    }

    function drawPartialQuadStem(p0, p1, p2, tMax, lineWidth, strokeColor) {
        const steps = 16;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * tMax;
            const pt = evalQuad(p0, p1, p2, t);
            if (i === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.stroke();
    }

    function drawFlowerHead(spec, tipX, tipY, scale, bloomT, rand) {
        const pal = PALETTES[spec.palette] || PALETTES.sunflower;
        const radius = 24 * spec.size * scale * easeOutCubic(bloomT);
        const alpha = Math.min(1, bloomT * 1.15);

        // 1. Halo aguado húmedo sobre papel
        drawWatercolorBlob(tipX, tipY, radius * 1.25, radius * 1.18, rand() * Math.PI, pal.wash, alpha * 0.35, rand);

        if (spec.type === "sunflower") {
            const count = 13;
            for (let i = 0; i < count; i++) {
                const a = (i / count) * Math.PI * 2 + 0.14;
                drawPetalTear(tipX, tipY, radius * 1.38, radius * 0.3, a, pal.outer, pal.edge, alpha * 0.82, rand);
            }
            for (let i = 0; i < count; i++) {
                const a = ((i + 0.5) / count) * Math.PI * 2;
                drawPetalTear(tipX, tipY, radius * 1.2, radius * 0.27, a, pal.inner, pal.outer, alpha * 0.88, rand);
            }
            drawWatercolorBlob(tipX, tipY, radius * 0.46, radius * 0.44, rand() * Math.PI, pal.centerWarm, alpha * 0.95, rand, pal.centerDark);
            drawWatercolorBlob(tipX, tipY, radius * 0.32, radius * 0.31, rand() * Math.PI, pal.centerDark, alpha * 0.85, rand);

            // Punteado de semillas
            if (bloomT > 0.65) {
                const seedA = (bloomT - 0.65) / 0.35;
                for (let s = 0; s < 10; s++) {
                    const ang = rand() * Math.PI * 2;
                    const dist = rand() * radius * 0.28;
                    ctx.beginPath();
                    ctx.arc(tipX + Math.cos(ang) * dist, tipY + Math.sin(ang) * dist, 1.15 * scale, 0, Math.PI * 2);
                    ctx.fillStyle = rgba([232, 186, 84], seedA * 0.5);
                    ctx.fill();
                }
            }
        } else if (spec.type === "rose") {
            // 3 capas de pétalos redondeados en acuarela
            for (let i = 0; i < 5; i++) {
                const a = (i / 5) * Math.PI * 2 + rand() * 0.2;
                const ox = tipX + Math.cos(a) * radius * 0.44;
                const oy = tipY + Math.sin(a) * radius * 0.44;
                drawWatercolorBlob(ox, oy, radius * 0.58, radius * 0.46, a, pal.outer, alpha * 0.78, rand, pal.edge);
            }
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 + 0.5;
                const ox = tipX + Math.cos(a) * radius * 0.24;
                const oy = tipY + Math.sin(a) * radius * 0.24;
                drawWatercolorBlob(ox, oy, radius * 0.42, radius * 0.34, a, pal.inner, alpha * 0.85, rand, pal.edge);
            }
            drawWatercolorBlob(tipX, tipY, radius * 0.25, radius * 0.22, rand() * Math.PI, pal.centerDark, alpha * 0.78, rand);
        } else if (spec.type === "wildflower") {
            const count = 6;
            for (let i = 0; i < count; i++) {
                const a = (i / count) * Math.PI * 2 + 0.2;
                drawPetalTear(tipX, tipY, radius * 1.18, radius * 0.42, a, pal.outer, pal.edge, alpha * 0.76, rand);
            }
            drawWatercolorBlob(tipX, tipY, radius * 0.26, radius * 0.24, rand() * Math.PI, [224, 174, 58], alpha * 0.9, rand);
        } else if (spec.type === "lavender") {
            const buds = 7;
            for (let i = 0; i < buds; i++) {
                const f = i / buds;
                const by = tipY + radius * 1.65 * (0.45 - f);
                const side = i % 2 === 0 ? -1 : 1;
                const bx = tipX + side * radius * (0.28 - f * 0.12);
                drawWatercolorBlob(bx, by, radius * 0.24, radius * 0.34, side * 0.35, i % 2 === 0 ? pal.outer : pal.inner, alpha * 0.86, rand, pal.edge);
            }
            drawWatercolorBlob(tipX, tipY - radius * 0.95, radius * 0.18, radius * 0.26, 0, pal.inner, alpha * 0.82, rand);
        }

        // Pequeñas salpicaduras de acuarela alrededor de la flor
        if (bloomT > 0.72) {
            const dropA = (bloomT - 0.72) / 0.28;
            for (let d = 0; d < 3; d++) {
                const ang = rand() * Math.PI * 2;
                const dist = radius * (1.25 + rand() * 0.75);
                const r = (1.1 + rand() * 2.1) * scale;
                ctx.beginPath();
                ctx.arc(tipX + Math.cos(ang) * dist, tipY + Math.sin(ang) * dist, r, 0, Math.PI * 2);
                ctx.fillStyle = rgba(pal.outer, dropA * 0.24);
                ctx.fill();
            }
        }
    }

    function drawSingleFlower(spec, progress) {
        const rand = mulberry32(spec.num * 7919 + 131);
        const scale = Math.max(0.72, Math.min(1.16, width / 480));

        const baseX = spec.x * width;
        const baseY = height + 8;

        // Tope de altura para no invadir el centro del sobre
        const maxStemPx = Math.min(height * spec.h, width <= 520 ? 185 : 245);
        const swayX = spec.curve * maxStemPx * 0.75;

        const p0 = { x: baseX, y: baseY };
        const p1 = { x: baseX + swayX * 0.6, y: baseY - maxStemPx * 0.55 };
        const p2 = { x: baseX + swayX, y: baseY - maxStemPx };

        // Fase 1: mancha verde de pasto y crecimiento del tallo
        const stemT = easeOutCubic(Math.min(1, progress / 0.52));

        drawWatercolorBlob(
            baseX,
            height - 4,
            34 * scale * stemT,
            16 * scale * stemT,
            0,
            [124, 146, 94],
            0.34 * stemT,
            rand
        );

        // Dos briznas de pasto en acuarela en la base
        for (let g = 0; g < 2; g++) {
            const dir = g === 0 ? -1 : 1;
            const gh = (22 + rand() * 24) * scale * stemT;
            const g1 = { x: baseX + dir * 10 * scale, y: baseY - gh * 0.5 };
            const g2 = { x: baseX + dir * (16 + rand() * 14) * scale, y: baseY - gh };
            drawPartialQuadStem(p0, g1, g2, 1, 1.8 * scale, rgba([104, 130, 82], 0.26 * stemT));
        }

        // Tallo en dos pasadas (aguada + trazo fino)
        drawPartialQuadStem(p0, p1, p2, stemT, 3.6 * scale, rgba([118, 142, 92], 0.34));
        drawPartialQuadStem(p0, p1, p2, stemT, 1.5 * scale, rgba([78, 102, 60], 0.52));

        // Hojas brotando a lo largo del tallo
        if (progress > 0.24) {
            const leafT = easeOutCubic(Math.min(1, (progress - 0.24) / 0.34));
            const lp1 = evalQuad(p0, p1, p2, 0.38);
            const lp2 = evalQuad(p0, p1, p2, 0.62);
            drawLeaf(lp1.x, lp1.y, 24 * spec.size * scale * leafT, -0.78, leafT, rand);
            drawLeaf(lp2.x, lp2.y, 21 * spec.size * scale * leafT, 0.82, leafT, rand);
        }

        // Fase 2: flor abriéndose en la punta
        if (progress > 0.38) {
            const bloomT = Math.min(1, (progress - 0.38) / 0.62);
            const tip = evalQuad(p0, p1, p2, stemT);
            drawFlowerHead(spec, tip.x, tip.y, scale, bloomT, rand);
        }
    }

    function drawFrame() {
        if (!width || !height) return;
        ctx.clearRect(0, 0, width, height);

        let visibleCount = 0;
        flowerStates.forEach((st) => {
            if (st.visible && st.progress > 0) visibleCount++;
        });

        if (visibleCount === 0) return;

        // Aguada botánica muy suave a lo largo del borde inferior, crece con el progreso
        const meadowAlpha = Math.min(0.24, 0.04 + (visibleCount / 20) * 0.2);
        const grad = ctx.createLinearGradient(0, height - Math.min(height * 0.22, 160), 0, height);
        grad.addColorStop(0, "rgba(136, 156, 106, 0)");
        grad.addColorStop(1, `rgba(136, 156, 106, ${meadowAlpha.toFixed(3)})`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, height - Math.min(height * 0.22, 160), width, Math.min(height * 0.22, 160));

        // Dibujar primero las más altas (atrás) y al final las más cercanas (adelante)
        const ordered = [...SPECS].sort((a, b) => b.h - a.h);
        ordered.forEach((spec) => {
            const st = flowerStates.get(spec.num);
            if (st && st.visible && st.progress > 0.005) {
                drawSingleFlower(spec, st.progress);
            }
        });
    }

    function tick(now) {
        let animating = false;

        flowerStates.forEach((st) => {
            if (st.visible && st.progress < 1) {
                const elapsed = now - st.startTime;
                st.progress = Math.min(1, elapsed / st.duration);
                if (st.progress < 1) animating = true;
            }
        });

        drawFrame();

        if (animating) {
            rafId = requestAnimationFrame(tick);
        } else {
            rafId = null;
        }
    }

    function ensureLoop() {
        if (!rafId) {
            rafId = requestAnimationFrame(tick);
        }
    }

    function syncReadSet(setOfNums) {
        setOfNums.forEach((num) => {
            const st = flowerStates.get(num);
            if (st && !st.visible) {
                st.visible = true;
                st.progress = 1;
            }
        });
        drawFrame();
    }

    function bloomLetter(num) {
        const st = flowerStates.get(num);
        if (!st) return;
        st.visible = true;
        if (reducedMotion) {
            st.progress = 1;
            drawFrame();
            return;
        }
        st.progress = 0.01;
        st.startTime = performance.now();
        ensureLoop();
    }

    function showAll() {
        SPECS.forEach((s) => {
            const st = flowerStates.get(s.num);
            if (st) {
                st.visible = true;
                st.progress = 1;
            }
        });
        drawFrame();
    }

    resize(true);

    return {
        syncReadSet,
        bloomLetter,
        showAll,
    };
}

/* ========================================================= */

(function () {
    "use strict";

    const STORAGE_KEY_READ = "vale20_read_letters";
    const STORAGE_KEY_LAST = "vale20_last_index";
    const STORAGE_KEY_BOTTOM_SEEN = "vale20_bottom_seen";

    const isPreviewBottom = new URLSearchParams(window.location.search).get("fondo") === "1";

    let currentIndex = loadLastIndex();
    let readSet = loadReadSet();
    let pendingBloomNum = null;
    let busy = false;
    let view = "BOX"; // BOX | DECK | OPENING | READING | CLOSING | BOTTOM
    let friendModalOpen = false;
    let petalTimer = null;

    /* ---------- referencias DOM ---------- */
    const gardenCanvas = document.getElementById("watercolorGarden");
    const garden = createWatercolorGarden(gardenCanvas);

    const petalsLayer = document.getElementById("petalsLayer");

    const boxScreen = document.getElementById("boxScreen");
    const keepsakeBox = document.getElementById("keepsakeBox");
    const boxLid = document.getElementById("boxLid");

    const deckScreen = document.getElementById("deckScreen");
    const btnCloseBox = document.getElementById("btnCloseBox");
    const btnOpenBottom = document.getElementById("btnOpenBottom");
    const readCounter = document.getElementById("readCounter");
    const chapterNav = document.getElementById("chapterNav");
    const deckStage = document.getElementById("deckStage");
    const deckCard = document.getElementById("deckCard");
    const deckChapterLabel = document.getElementById("deckChapterLabel");
    const deckPostmark = document.getElementById("deckPostmark");
    const deckLetterTitle = document.getElementById("deckLetterTitle");
    const deckSealDot = document.getElementById("deckSealDot");
    const deckReadBadge = document.getElementById("deckReadBadge");
    const btnPrevCard = document.getElementById("btnPrevCard");
    const btnNextCard = document.getElementById("btnNextCard");
    const deckNumbers = document.getElementById("deckNumbers");

    const envelopeStage = document.getElementById("envelopeStage");
    const envelopeWrap = document.getElementById("envelopeWrap");
    const activeEnvelope = document.getElementById("activeEnvelope");
    const envFrontChapter = document.getElementById("envFrontChapter");
    const envPostmark = document.getElementById("envPostmark");
    const envFrontTitle = document.getElementById("envFrontTitle");
    const envFlap = document.getElementById("envFlap");
    const envSeal = document.getElementById("envSeal");
    const envSealMark = document.getElementById("envSealMark");

    const letterSlot = document.getElementById("letterSlot");
    const letterSheet = document.getElementById("letterSheet");
    const letterImg = document.getElementById("letterImg");
    const letterFallback = document.getElementById("letterFallback");
    const fbNumber = document.getElementById("fbNumber");
    const fbChapter = document.getElementById("fbChapter");
    const fbTitle = document.getElementById("fbTitle");
    const fbPrompt = document.getElementById("fbPrompt");
    const fbPathNote = document.getElementById("fbPathNote");

    const readerOverlay = document.getElementById("readerOverlay");
    const readerMeta = document.getElementById("readerMeta");
    const readerCanvas = document.getElementById("readerCanvas");
    const btnPutBack = document.getElementById("btnPutBack");

    /* ---------- fondo de la caja DOM ---------- */
    const bottomScreen = document.getElementById("bottomScreen");
    const btnBackToDeck = document.getElementById("btnBackToDeck");
    const bottomKicker = document.getElementById("bottomKicker");
    const bottomTitle = document.getElementById("bottomTitle");
    const bottomMessage = document.getElementById("bottomMessage");
    const bottomSignature = document.getElementById("bottomSignature");
    const bottomArtWrap = document.getElementById("bottomArtWrap");
    const bottomArtImg = document.getElementById("bottomArtImg");
    const friendsSection = document.getElementById("friendsSection");
    const friendsGrid = document.getElementById("friendsGrid");
    const bottomPortal = document.getElementById("bottomPortal");
    const bottomPortalText = document.getElementById("bottomPortalText");
    const bottomPortalLink = document.getElementById("bottomPortalLink");

    const friendModal = document.getElementById("friendModal");
    const friendModalBackdrop = document.getElementById("friendModalBackdrop");
    const btnCloseFriendModal = document.getElementById("btnCloseFriendModal");
    const friendModalFrom = document.getElementById("friendModalFrom");
    const friendModalRole = document.getElementById("friendModalRole");
    const friendPaperText = document.getElementById("friendPaperText");
    const friendModalText = document.getElementById("friendModalText");
    const friendPaperPhoto = document.getElementById("friendPaperPhoto");
    const friendModalImg = document.getElementById("friendModalImg");

    /* ---------- mini reproductor DOM ---------- */
    const playerToggle = document.getElementById("playerToggle");
    const playerToggleLabel = document.getElementById("playerToggleLabel");
    const miniPlayerPanel = document.getElementById("miniPlayerPanel");
    const btnMinimize = document.getElementById("btnMinimize");
    const playerTrackNum = document.getElementById("playerTrackNum");
    const playerSongTitle = document.getElementById("playerSongTitle");
    const playerSongArtist = document.getElementById("playerSongArtist");
    const btnPrevTrack = document.getElementById("btnPrevTrack");
    const btnPlayPause = document.getElementById("btnPlayPause");
    const iconPlay = document.getElementById("iconPlay");
    const iconPause = document.getElementById("iconPause");
    const btnNextTrack = document.getElementById("btnNextTrack");
    const btnToggleList = document.getElementById("btnToggleList");
    const playerTrackList = document.getElementById("playerTrackList");
    const playerError = document.getElementById("playerError");
    const audio = document.getElementById("audio");
    const timeCurrent = document.getElementById("timeCurrent");
    const timeDuration = document.getElementById("timeDuration");
    const progressTrack = document.getElementById("progressTrack");
    const progressFill = document.getElementById("progressFill");
    const progressThumb = document.getElementById("progressThumb");

    /* =========================================================
       UTILIDADES
       ========================================================= */

    function pad2(n) {
        return String(n).padStart(2, "0");
    }

    function getChapter(chapterId) {
        return CHAPTERS.find((c) => c.id === chapterId) || CHAPTERS[0];
    }

    function isAllRead() {
        return readSet.size >= LETTERS.length;
    }

    function loadReadSet() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_READ);
            const parsed = raw ? JSON.parse(raw) : [];
            return new Set(Array.isArray(parsed) ? parsed : []);
        } catch {
            return new Set();
        }
    }

    function saveReadSet() {
        try {
            localStorage.setItem(STORAGE_KEY_READ, JSON.stringify([...readSet]));
        } catch { }
    }

    function hasSeenBottom() {
        try {
            return localStorage.getItem(STORAGE_KEY_BOTTOM_SEEN) === "true";
        } catch {
            return false;
        }
    }

    function markBottomSeen() {
        try {
            localStorage.setItem(STORAGE_KEY_BOTTOM_SEEN, "true");
        } catch { }
    }

    function loadLastIndex() {
        try {
            const raw = Number(localStorage.getItem(STORAGE_KEY_LAST));
            return Number.isInteger(raw) && raw >= 0 && raw < LETTERS.length ? raw : 0;
        } catch {
            return 0;
        }
    }

    function saveLastIndex(idx) {
        try {
            localStorage.setItem(STORAGE_KEY_LAST, String(idx));
        } catch { }
    }

    function preloadImage(src) {
        const img = new Image();
        img.src = src;
    }

    function onTransitionEnd(el, callback, maxMs = 1300) {
        let done = false;
        function finish() {
            if (done) return;
            done = true;
            el.removeEventListener("transitionend", finish);
            clearTimeout(fallback);
            callback();
        }
        el.addEventListener("transitionend", finish);
        const fallback = setTimeout(finish, maxMs);
    }

    /* =========================================================
       MAZO DE 20 SOBRES
       ========================================================= */

    function buildChapterNav() {
        chapterNav.innerHTML = "";
        CHAPTERS.forEach((chap) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "chapter-pill";
            btn.dataset.chapterId = String(chap.id);
            btn.style.setProperty("--pill-accent", ACCENT_VARS[chap.accent]);
            btn.innerHTML = `<span class="chapter-pill-dot"></span><span>${chap.name}</span>`;
            btn.addEventListener("click", () => {
                const firstIdx = LETTERS.findIndex((l) => l.chapterId === chap.id);
                if (firstIdx !== -1) goToIndex(firstIdx);
            });
            chapterNav.appendChild(btn);
        });
    }

    function buildNumberButtons() {
        deckNumbers.innerHTML = "";
        LETTERS.forEach((letter, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "num-btn" + (letter.isBirthday ? " is-birthday" : "");
            btn.dataset.index = String(idx);
            btn.textContent = pad2(letter.num);
            btn.setAttribute("aria-label", `Ir a la carta ${letter.num}`);
            btn.addEventListener("click", () => goToIndex(idx));
            deckNumbers.appendChild(btn);
        });
    }

    function renderDeck() {
        const item = LETTERS[currentIndex];
        const chap = getChapter(item.chapterId);

        document.documentElement.style.setProperty("--active-accent", ACCENT_VARS[chap.accent]);

        deckChapterLabel.textContent = chap.name;
        deckPostmark.textContent = `N.º ${pad2(item.num)} / 20`;
        deckLetterTitle.textContent = item.title;
        deckSealDot.style.background = ACCENT_VARS[chap.accent];
        deckReadBadge.hidden = !readSet.has(item.num);
        deckCard.classList.toggle("is-birthday-card", Boolean(item.isBirthday));

        readCounter.textContent = `${readSet.size} / ${LETTERS.length} leídas`;
        btnOpenBottom.hidden = !(isAllRead() || isPreviewBottom);

        chapterNav.querySelectorAll(".chapter-pill").forEach((el) => {
            el.classList.toggle("is-current", Number(el.dataset.chapterId) === item.chapterId);
        });

        deckNumbers.querySelectorAll(".num-btn").forEach((el, idx) => {
            el.classList.toggle("is-current", idx === currentIndex);
            el.classList.toggle("is-read", readSet.has(LETTERS[idx].num));
        });

        preloadImage(item.image);
        const nextItem = LETTERS[(currentIndex + 1) % LETTERS.length];
        if (nextItem) preloadImage(nextItem.image);

        saveLastIndex(currentIndex);
    }

    function goToIndex(targetIdx, direction) {
        if (busy || view !== "DECK") return;
        const total = LETTERS.length;
        const normalized = ((targetIdx % total) + total) % total;
        if (normalized === currentIndex) return;

        const dir = direction || (normalized > currentIndex ? 1 : -1);
        const cls = dir > 0 ? "slide-out-left" : "slide-out-right";

        busy = true;
        deckCard.classList.add(cls);

        setTimeout(() => {
            currentIndex = normalized;
            renderDeck();
            deckCard.classList.remove(cls);
            busy = false;
        }, 210);
    }

    /* =========================================================
       EL FONDO DE LA CAJA (VISTA 5 + NOTAS DE AMIGOS)
       ========================================================= */

    function buildBoxBottom() {
        bottomKicker.textContent = BOTTOM_OF_BOX.kicker;
        bottomTitle.textContent = BOTTOM_OF_BOX.title;

        bottomMessage.innerHTML = "";
        BOTTOM_OF_BOX.paragraphs.forEach((text) => {
            const p = document.createElement("p");
            p.textContent = text;
            bottomMessage.appendChild(p);
        });

        bottomSignature.textContent = BOTTOM_OF_BOX.signature || "";

        if (BOTTOM_OF_BOX.illustration) {
            bottomArtImg.src = BOTTOM_OF_BOX.illustration;
            bottomArtImg.onload = () => {
                bottomArtWrap.hidden = false;
            };
            bottomArtImg.onerror = () => {
                bottomArtWrap.hidden = true;
            };
        } else {
            bottomArtWrap.hidden = true;
        }

        if (Array.isArray(FRIEND_NOTES) && FRIEND_NOTES.length > 0) {
            friendsSection.hidden = false;
            friendsGrid.innerHTML = "";

            FRIEND_NOTES.forEach((note, idx) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "friend-mini-envelope";
                btn.style.setProperty("--friend-accent", ACCENT_VARS[note.accent] || ACCENT_VARS.gold);
                btn.innerHTML = `
                    <span class="friend-mini-top">
                        <span class="friend-mini-tag">Nota ${pad2(idx + 1)}</span>
                        <span class="friend-mini-dot" aria-hidden="true"></span>
                    </span>
                    <span class="friend-mini-name">${note.from}</span>
                    <span class="friend-mini-preview">${note.preview || note.role || "Toca para leer"}</span>
                `;
                btn.addEventListener("click", () => openFriendNote(note));
                friendsGrid.appendChild(btn);
            });
        } else {
            friendsSection.hidden = true;
        }

        if (BOTTOM_OF_BOX.portalUrl) {
            bottomPortal.hidden = false;
            bottomPortalText.textContent = BOTTOM_OF_BOX.portalText || "";
            bottomPortalLink.textContent = BOTTOM_OF_BOX.portalLabel || "Abrir sorpresa";
            bottomPortalLink.href = BOTTOM_OF_BOX.portalUrl;
        } else {
            bottomPortal.hidden = true;
        }
    }

    function openBoxBottom() {
        if (busy || view === "BOTTOM") return;
        busy = true;

        boxScreen.hidden = true;
        deckScreen.classList.remove("is-active");

        setTimeout(() => {
            deckScreen.hidden = true;
            bottomScreen.hidden = false;
            startBirthdayAtmosphere();

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    bottomScreen.classList.add("is-active");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    view = "BOTTOM";
                    busy = false;
                });
            });
        }, view === "DECK" ? 320 : 20);
    }

    function closeBoxBottom() {
        if (busy || view !== "BOTTOM") return;
        busy = true;

        closeFriendNote();
        stopBirthdayAtmosphere();
        bottomScreen.classList.remove("is-active");

        setTimeout(() => {
            bottomScreen.hidden = true;
            deckScreen.hidden = false;
            renderDeck();

            requestAnimationFrame(() => {
                deckScreen.classList.add("is-active");
                view = "DECK";
                busy = false;
            });
        }, 420);
    }

    function openFriendNote(note) {
        friendModalFrom.textContent = note.from;
        friendModalRole.textContent = note.role || "";

        friendPaperText.hidden = true;
        friendPaperPhoto.hidden = true;

        if (note.image) {
            friendModalImg.src = note.image;
            friendModalImg.alt = `Carta de ${note.from} para Vale`;
            friendModalImg.onerror = () => {
                friendPaperPhoto.hidden = true;
                fillFriendText(note);
            };
            friendPaperPhoto.hidden = false;
        } else {
            fillFriendText(note);
        }

        friendModal.hidden = false;
        friendModal.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => {
            friendModal.classList.add("is-active");
        });
        friendModalOpen = true;
    }

    function fillFriendText(note) {
        friendModalText.innerHTML = "";
        const list = Array.isArray(note.paragraphs) && note.paragraphs.length
            ? note.paragraphs
            : [note.preview || ""];
        list.forEach((line) => {
            const p = document.createElement("p");
            p.textContent = line;
            friendModalText.appendChild(p);
        });
        friendPaperText.hidden = false;
    }

    function closeFriendNote() {
        if (!friendModalOpen) return;
        friendModalOpen = false;
        friendModal.classList.remove("is-active");
        friendModal.setAttribute("aria-hidden", "true");
        setTimeout(() => {
            if (!friendModalOpen) friendModal.hidden = true;
        }, 300);
    }

    btnOpenBottom.addEventListener("click", openBoxBottom);
    btnBackToDeck.addEventListener("click", closeBoxBottom);
    btnCloseFriendModal.addEventListener("click", closeFriendNote);
    friendModalBackdrop.addEventListener("click", closeFriendNote);

    /* =========================================================
       CAJA: ABRIR Y CERRAR
       ========================================================= */

    function openKeepsakeBox() {
        if (busy || view !== "BOX") return;
        busy = true;

        boxLid.setAttribute("data-open", "true");

        setTimeout(() => {
            boxScreen.classList.add("is-leaving");
        }, 360);

        setTimeout(() => {
            boxScreen.hidden = true;
            boxScreen.classList.remove("is-leaving");
            deckScreen.hidden = false;
            renderDeck();
            requestAnimationFrame(() => {
                deckScreen.classList.add("is-active");
            });
            view = "DECK";
            busy = false;
        }, 820);
    }

    function closeKeepsakeBox() {
        if (busy || view !== "DECK") return;
        busy = true;

        deckScreen.classList.remove("is-active");
        setTimeout(() => {
            deckScreen.hidden = true;
            boxLid.removeAttribute("data-open");
            boxScreen.hidden = false;
            view = "BOX";
            busy = false;
        }, 420);
    }

    keepsakeBox.addEventListener("click", openKeepsakeBox);
    btnCloseBox.addEventListener("click", closeKeepsakeBox);

    /* =========================================================
       NAVEGACIÓN EN EL MAZO
       ========================================================= */

    btnPrevCard.addEventListener("click", () => goToIndex(currentIndex - 1, -1));
    btnNextCard.addEventListener("click", () => goToIndex(currentIndex + 1, 1));

    let deckTouchX = 0;
    let deckTouchY = 0;
    let swipedOnDeck = false;

    deckStage.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) return;
        deckTouchX = e.touches[0].clientX;
        deckTouchY = e.touches[0].clientY;
        swipedOnDeck = false;
    }, { passive: true });

    deckStage.addEventListener("touchend", (e) => {
        const t = e.changedTouches[0];
        const dx = t.clientX - deckTouchX;
        const dy = t.clientY - deckTouchY;
        if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.2) {
            swipedOnDeck = true;
            goToIndex(currentIndex + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
        }
    }, { passive: true });

    deckCard.addEventListener("click", () => {
        if (swipedOnDeck) {
            swipedOnDeck = false;
            return;
        }
        openSelectedEnvelope();
    });

    document.addEventListener("keydown", (e) => {
        if (friendModalOpen && e.key === "Escape") {
            closeFriendNote();
            return;
        }
        if (view === "DECK") {
            if (e.key === "ArrowLeft") goToIndex(currentIndex - 1, -1);
            if (e.key === "ArrowRight") goToIndex(currentIndex + 1, 1);
            if (e.key === "Enter") openSelectedEnvelope();
        } else if (view === "READING" && e.key === "Escape") {
            putLetterBack();
        } else if (view === "BOTTOM" && e.key === "Escape") {
            closeBoxBottom();
        }
    });

    /* =========================================================
       APERTURA 3D DEL SOBRE + MODO LECTURA (1 CARA)
       ========================================================= */

    function populateEnvelopeAndLetter(item) {
        const chap = getChapter(item.chapterId);

        envFrontChapter.textContent = chap.name;
        envPostmark.textContent = `N.º ${pad2(item.num)} / 20`;
        envFrontTitle.textContent = item.title;

        envSeal.className = `wax-seal wax-seal--${chap.accent}`;
        envSealMark.textContent = chap.sealMark;

        readerMeta.textContent = `Carta ${pad2(item.num)} / 20`;

        fbNumber.textContent = `Carta ${pad2(item.num)} / 20`;
        fbChapter.textContent = chap.name;
        fbTitle.textContent = item.title;
        fbPrompt.textContent = item.prompt;
        fbPathNote.textContent = `Coloca tu escaneo en: ${item.image}`;

        letterImg.hidden = false;
        letterFallback.hidden = true;
        letterImg.alt = `Carta ${pad2(item.num)} para Vale — ${item.title}`;

        letterImg.onerror = () => {
            letterImg.hidden = true;
            letterFallback.hidden = false;
        };

        letterImg.src = item.image;
    }

    function openSelectedEnvelope() {
        if (busy || view !== "DECK") return;
        busy = true;
        view = "OPENING";

        const item = LETTERS[currentIndex];
        populateEnvelopeAndLetter(item);

        letterSheet.removeAttribute("data-settled");
        letterSheet.removeAttribute("data-emerged");
        letterSlot.appendChild(letterSheet);

        activeEnvelope.removeAttribute("data-flipped");
        envFlap.removeAttribute("data-open");
        envelopeWrap.classList.remove("is-faded");

        deckScreen.classList.add("is-dimmed");
        envelopeStage.classList.add("is-active");
        envelopeStage.setAttribute("aria-hidden", "false");

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                activeEnvelope.setAttribute("data-flipped", "true");

                onTransitionEnd(activeEnvelope, () => {
                    setTimeout(() => {
                        envFlap.setAttribute("data-open", "true");

                        onTransitionEnd(envFlap, () => {
                            setTimeout(() => {
                                letterSheet.setAttribute("data-emerged", "true");

                                onTransitionEnd(letterSheet, () => {
                                    settleLetterInReader(item);
                                });
                            }, 90);
                        });
                    }, 120);
                });
            });
        });
    }

    function settleLetterInReader(item) {
        const firstRect = letterSheet.getBoundingClientRect();

        document.body.classList.add("is-reading-letter");
        readerOverlay.classList.add("is-active");
        readerOverlay.setAttribute("aria-hidden", "false");
        readerCanvas.appendChild(letterSheet);

        letterSheet.style.position = "fixed";
        letterSheet.style.margin = "0";
        letterSheet.style.width = firstRect.width + "px";
        letterSheet.style.height = firstRect.height + "px";
        letterSheet.style.top = firstRect.top + "px";
        letterSheet.style.left = firstRect.left + "px";
        letterSheet.style.transform = "none";
        letterSheet.style.transition = "none";

        void letterSheet.offsetHeight;

        const isMobile = window.innerWidth <= 520;
        const targetW = isMobile
            ? Math.min(window.innerWidth * 0.94, 460)
            : Math.min(window.innerHeight * 0.78 * (1080 / 1527), window.innerWidth * 0.94, 580);
        const targetH = targetW * (1527 / 1080);
        const finalTop = Math.max(58, (window.innerHeight - targetH) / 2);
        const finalLeft = Math.max(10, (window.innerWidth - targetW) / 2);

        requestAnimationFrame(() => {
            letterSheet.style.transition =
                "top 0.55s cubic-bezier(0.22,0.9,0.3,1), left 0.55s cubic-bezier(0.22,0.9,0.3,1), width 0.55s cubic-bezier(0.22,0.9,0.3,1), height 0.55s cubic-bezier(0.22,0.9,0.3,1)";
            letterSheet.style.top = finalTop + "px";
            letterSheet.style.left = finalLeft + "px";
            letterSheet.style.width = targetW + "px";
            letterSheet.style.height = targetH + "px";
        });

        envelopeWrap.classList.add("is-faded");

        onTransitionEnd(letterSheet, () => {
            letterSheet.style.position = "";
            letterSheet.style.margin = "";
            letterSheet.style.width = "";
            letterSheet.style.height = "";
            letterSheet.style.top = "";
            letterSheet.style.left = "";
            letterSheet.style.transform = "";
            letterSheet.style.transition = "";
            letterSheet.setAttribute("data-settled", "true");

            if (!readSet.has(item.num)) {
                readSet.add(item.num);
                saveReadSet();
                pendingBloomNum = item.num;
            }

            if (item.isBirthday) {
                startBirthdayAtmosphere();
            }

            view = "READING";
            busy = false;
        });
    }

    /* =========================================================
       CIERRE REVERSIBLE: GUARDAR EN EL SOBRE
       ========================================================= */

    function putLetterBack() {
        if (busy || view !== "READING") return;
        busy = true;
        view = "CLOSING";

        document.body.classList.remove("is-reading-letter");
        stopBirthdayAtmosphere();

        const firstRect = letterSheet.getBoundingClientRect();
        envelopeWrap.classList.remove("is-faded");

        const envRect = activeEnvelope.getBoundingClientRect();
        const targetH = Math.min(window.innerHeight * 0.46, 520) * 0.95;
        const targetW = targetH * (1080 / 1527);
        const targetLeft = envRect.left + (envRect.width - targetW) / 2;
        const targetTop = envRect.top - targetH * 0.62;

        letterSheet.removeAttribute("data-settled");
        letterSheet.style.position = "fixed";
        letterSheet.style.margin = "0";
        letterSheet.style.width = firstRect.width + "px";
        letterSheet.style.height = firstRect.height + "px";
        letterSheet.style.top = firstRect.top + "px";
        letterSheet.style.left = firstRect.left + "px";
        letterSheet.style.transform = "none";
        letterSheet.style.transition = "none";

        void letterSheet.offsetHeight;

        readerOverlay.classList.remove("is-active");
        readerOverlay.setAttribute("aria-hidden", "true");

        requestAnimationFrame(() => {
            letterSheet.style.transition =
                "top 0.48s cubic-bezier(0.4,0,0.2,1), left 0.48s cubic-bezier(0.4,0,0.2,1), width 0.48s cubic-bezier(0.4,0,0.2,1), height 0.48s cubic-bezier(0.4,0,0.2,1)";
            letterSheet.style.top = targetTop + "px";
            letterSheet.style.left = targetLeft + "px";
            letterSheet.style.width = targetW + "px";
            letterSheet.style.height = targetH + "px";
        });

        onTransitionEnd(letterSheet, () => {
            letterSheet.style.position = "";
            letterSheet.style.margin = "";
            letterSheet.style.width = "";
            letterSheet.style.height = "";
            letterSheet.style.top = "";
            letterSheet.style.left = "";
            letterSheet.style.transform = "";
            letterSheet.style.transition = "";

            letterSheet.setAttribute("data-emerged", "true");
            letterSlot.appendChild(letterSheet);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    letterSheet.removeAttribute("data-emerged");

                    onTransitionEnd(letterSheet, () => {
                        envFlap.removeAttribute("data-open");

                        onTransitionEnd(envFlap, () => {
                            activeEnvelope.removeAttribute("data-flipped");

                            onTransitionEnd(activeEnvelope, () => {
                                envelopeStage.classList.remove("is-active");
                                envelopeStage.setAttribute("aria-hidden", "true");
                                renderDeck();
                                deckScreen.classList.remove("is-dimmed");
                                view = "DECK";
                                busy = false;

                                // Pinta en vivo la flor en acuarela correspondiente a esta carta
                                if (pendingBloomNum !== null) {
                                    const numToBloom = pendingBloomNum;
                                    pendingBloomNum = null;
                                    garden.bloomLetter(numToBloom);
                                }

                                // Si completó las 20 por primera vez, deja florecer la última flor y abre el fondo
                                if (isAllRead() && !hasSeenBottom()) {
                                    markBottomSeen();
                                    setTimeout(() => {
                                        if (view === "DECK") openBoxBottom();
                                    }, 1250);
                                }
                            });
                        });
                    });
                });
            });
        });
    }

    btnPutBack.addEventListener("click", putLetterBack);

    /* =========================================================
       PÉTALOS SUAVES (CARTA 20 Y FONDO DE LA CAJA)
       ========================================================= */

    function spawnPetal() {
        const p = document.createElement("span");
        p.className = "petal";
        p.style.left = Math.random() * 100 + "vw";
        p.style.setProperty("--drift", (Math.random() * 90 - 45).toFixed(0) + "px");
        p.style.setProperty("--spin", (Math.random() * 260 + 140).toFixed(0) + "deg");
        const dur = 6 + Math.random() * 4;
        p.style.animationDuration = dur + "s";
        petalsLayer.appendChild(p);
        setTimeout(() => p.remove(), dur * 1000 + 200);
    }

    function startBirthdayAtmosphere() {
        document.body.classList.add("is-birthday-glow");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        clearInterval(petalTimer);
        for (let i = 0; i < 4; i++) {
            setTimeout(spawnPetal, i * 450);
        }
        petalTimer = setInterval(spawnPetal, 1800);
    }

    function stopBirthdayAtmosphere() {
        document.body.classList.remove("is-birthday-glow");
        clearInterval(petalTimer);
        petalTimer = null;
        petalsLayer.innerHTML = "";
    }

    /* =========================================================
       MINI REPRODUCTOR CON PLAYLIST PROPIA
       ========================================================= */

    let isPlayerOpen = false;
    let currentTrackIndex = 0;
    let trackLoaded = false;

    function buildTrackList() {
        playerTrackList.innerHTML = "";
        PLAYLIST.forEach((track, idx) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "mini-track-item";
            btn.dataset.index = String(idx);
            btn.innerHTML = `
        <span class="mini-track-name">${idx + 1}. ${track.title}</span>
        <span class="mini-track-artist">${track.artist}</span>
      `;
            btn.addEventListener("click", () => loadTrack(idx, true));
            li.appendChild(btn);
            playerTrackList.appendChild(li);
        });
    }

    function updateTrackUI() {
        const track = PLAYLIST[currentTrackIndex];
        playerTrackNum.textContent = `Pista ${currentTrackIndex + 1} / ${PLAYLIST.length}`;
        playerSongTitle.textContent = track.title;
        playerSongArtist.textContent = track.artist;

        playerTrackList.querySelectorAll(".mini-track-item").forEach((el, idx) => {
            el.classList.toggle("is-active", idx === currentTrackIndex);
        });
    }

    function loadTrack(index, shouldPlay = false) {
        const total = PLAYLIST.length;
        currentTrackIndex = ((index % total) + total) % total;
        const track = PLAYLIST[currentTrackIndex];

        updateTrackUI();
        playerError.hidden = true;
        audio.src = track.src;
        trackLoaded = true;
        updateProgress(0);
        timeCurrent.textContent = "0:00";
        timeDuration.textContent = "0:00";

        if (shouldPlay) attemptPlay();
    }

    function attemptPlay() {
        if (!trackLoaded) {
            loadTrack(currentTrackIndex, false);
        }
        const p = audio.play();
        if (p && typeof p.catch === "function") {
            p.then(() => setPlayIcon(true)).catch(() => setPlayIcon(false));
        }
    }

    function setPlayIcon(playing) {
        iconPlay.hidden = playing;
        iconPause.hidden = !playing;
        playerToggle.classList.toggle("is-playing", playing);
        playerToggleLabel.textContent = playing ? PLAYLIST[currentTrackIndex].title : "Música";
        btnPlayPause.setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
    }

    function togglePlayer(forceOpen) {
        isPlayerOpen = typeof forceOpen === "boolean" ? forceOpen : !isPlayerOpen;
        miniPlayerPanel.hidden = !isPlayerOpen;
    }

    playerToggle.addEventListener("click", () => togglePlayer());
    btnMinimize.addEventListener("click", () => togglePlayer(false));

    btnToggleList.addEventListener("click", () => {
        const willShow = playerTrackList.hidden;
        playerTrackList.hidden = !willShow;
        btnToggleList.setAttribute("aria-expanded", String(willShow));
    });

    btnPlayPause.addEventListener("click", () => {
        if (audio.paused) attemptPlay();
        else {
            audio.pause();
            setPlayIcon(false);
        }
    });

    btnPrevTrack.addEventListener("click", () => loadTrack(currentTrackIndex - 1, true));
    btnNextTrack.addEventListener("click", () => loadTrack(currentTrackIndex + 1, true));

    audio.addEventListener("play", () => setPlayIcon(true));
    audio.addEventListener("pause", () => setPlayIcon(false));
    audio.addEventListener("ended", () => loadTrack(currentTrackIndex + 1, true));
    audio.addEventListener("loadedmetadata", () => {
        timeDuration.textContent = formatTime(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
        timeCurrent.textContent = formatTime(audio.currentTime);
        if (isFinite(audio.duration) && audio.duration > 0) {
            updateProgress(audio.currentTime / audio.duration);
        }
    });
    audio.addEventListener("error", () => {
        playerError.hidden = false;
        setPlayIcon(false);
    });

    function updateProgress(ratio) {
        const pct = Math.max(0, Math.min(1, ratio)) * 100;
        progressFill.style.width = pct + "%";
        progressThumb.style.left = pct + "%";
    }

    function formatTime(sec) {
        if (!isFinite(sec) || sec < 0) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return m + ":" + String(s).padStart(2, "0");
    }

    let draggingProgress = false;
    function seekFromEvent(clientX) {
        const rect = progressTrack.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        if (isFinite(audio.duration) && audio.duration > 0) {
            audio.currentTime = ratio * audio.duration;
            updateProgress(ratio);
        }
    }

    progressTrack.addEventListener("pointerdown", (e) => {
        draggingProgress = true;
        progressTrack.setPointerCapture(e.pointerId);
        seekFromEvent(e.clientX);
    });
    progressTrack.addEventListener("pointermove", (e) => {
        if (draggingProgress) seekFromEvent(e.clientX);
    });
    progressTrack.addEventListener("pointerup", (e) => {
        draggingProgress = false;
        progressTrack.releasePointerCapture(e.pointerId);
    });
    progressTrack.addEventListener("pointercancel", () => {
        draggingProgress = false;
    });

    /* ---------- arranque ---------- */
    buildChapterNav();
    buildNumberButtons();
    buildTrackList();
    updateTrackUI();
    buildBoxBottom();

    // Pinta las flores correspondientes a las cartas ya leídas
    garden.syncReadSet(readSet);

    if (isPreviewBottom) {
        garden.showAll();
        openBoxBottom();
    }
})();