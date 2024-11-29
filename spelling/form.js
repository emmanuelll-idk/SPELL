// script.js
const palabras = {
    ronda2: [
        { texto: "ANOXIA", audio: "audios/anoxia.mp3" },
        { texto: "BOTTLE", audio: "audios/bottle.mp3" },
        { texto: "ETHNIC", audio: "audios/ethnic.mp3" },
        { texto: "HYBRID", audio: "audios/hybrid.mp3" },
        { texto: "LITTER", audio: "audios/litter.mp3" },
        { texto: "OFFSET", audio: "audios/offset.mp3" },
        { texto: "THEORY", audio: "audios/theory.mp3" },
        { texto: "TISSUE", audio: "audios/tissue.mp3" },
        { texto: "WEALTH", audio: "audios/wealth.mp3" }
    ],
    ronda3: [
        { texto: "ABILITY", audio: "audios/ability.mp3" },
        { texto: "AEROSOL", audio: "audios/aerosol.mp3" },
        { texto: "BIOFUEL", audio: "audios/biofuel.mp3" },
        { texto: "CHARTER", audio: "audios/charter.mp3" },
        { texto: "COMPETE", audio: "audios/compete.mp3" },
        { texto: "DUALITY", audio: "audios/duality.mp3" },
        { texto: "ETHICAL", audio: "audios/ethical.mp3" },
        { texto: "FACULTY", audio: "audios/faculty.mp3" },
        { texto: "HECTARE", audio: "audios/hectare.mp3" },
        { texto: "OUTBEAR", audio: "audios/outbear.mp3" },
        { texto: "PASTURE", audio: "audios/pasture.mp3" },
        { texto: "POSSESS", audio: "audios/possess.mp3" },
        { texto: "POTENCY", audio: "audios/potency.mp3" },
        { texto: "SOLVENT", audio: "audios/solvent.mp3" },
        { texto: "TOURISM", audio: "audios/tourism.mp3" }
    ],
    ronda4: [
        { texto: "ADAPTABLE", audio: "audios/adaptable.mp3" },
        { texto: "DIVERSITY", audio: "audios/diversity.mp3" },
        { texto: "HEGEMONIC", audio: "audios/hegemonic.mp3" },
        { texto: "OVULATION", audio: "audios/ovulation.mp3" },
        { texto: "ANCESTRAL", audio: "audios/ancestral.mp3" },
        { texto: "ECOSYSTEM", audio: "audios/ecosystem.mp3" },
        { texto: "IDENTICAL", audio: "audios/identical.mp3" },
        { texto: "POLLUTANT", audio: "audios/pollutant.mp3" },
        { texto: "AWARENESS", audio: "audios/awareness.mp3" },
        { texto: "EMBELLISH", audio: "audios/embellish.mp3" },
        { texto: "IMMIGRANT", audio: "audios/immigrant.mp3" },
        { texto: "PRESCRIBE", audio: "audios/prescribe.mp3" },
        { texto: "BIOSPHERE", audio: "audios/biosphere.mp3" },
        { texto: "ETHNICITY", audio: "audios/ethnicity.mp3" },
        { texto: "JOVIALITY", audio: "audios/joviality.mp3" },
        { texto: "RADIOLOGY", audio: "audios/radiology.mp3" },
        { texto: "BLASPHEMY", audio: "audios/blasphemy.mp3" },
        { texto: "EXISTENCE", audio: "audios/existence.mp3" },
        { texto: "MAGNITUDE", audio: "audios/magnitude.mp3" },
        { texto: "RECYCLING", audio: "audios/recycling.mp3" },
        { texto: "BREATHING", audio: "audios/breathing.mp3" },
        { texto: "FANTASTIC", audio: "audios/fantastic.mp3" },
        { texto: "MARGARINE", audio: "audios/margarine.mp3" },
        { texto: "RENEWABLE", audio: "audios/renewable.mp3" },
        { texto: "CULTIVATE", audio: "audios/cultivate.mp3" },
        { texto: "FOOTPRINT", audio: "audios/footprint.mp3" },
        { texto: "MYSTICISM", audio: "audios/mysticism.mp3" },
        { texto: "SPIRITUAL", audio: "audios/spiritual.mp3" },
        { texto: "CLIMATIZE", audio: "audios/climatize.mp3" },
        { texto: "GUIDELINE", audio: "audios/guideline.mp3" },
        { texto: "NARRATIVE", audio: "audios/narrative.mp3" },
        { texto: "SUBSIDIZE", audio: "audios/subsidize.mp3" },
        { texto: "DANGEROUS", audio: "audios/dangerous.mp3" },
        { texto: "GRASSLAND", audio: "audios/grassland.mp3" },
        { texto: "NUTRITIVE", audio: "audios/nutritive.mp3" },
        { texto: "VEGETABLE", audio: "audios/vegetable.mp3" },
        { texto: "DECOMPOSE", audio: "audios/decompose.mp3" },
        { texto: "HERVIBORE", audio: "audios/hervibore.mp3" },
        { texto: "OBJECTIVE", audio: "audios/objective.mp3" },
        { texto: "WAREHOUSE", audio: "audios/warehouse.mp3" }
    ],
    ronda5: [
        { texto: "APPRECIATION", audio: "audios/appreciation.mp3" },
        { texto: "ENLIGHTENING", audio: "audios/enlightening.mp3" },
        { texto: "HUMANITARIAN", audio: "audios/humanitarian.mp3" },
        { texto: "METAPHORICAL", audio: "audios/metaphorical.mp3" },
        { texto: "BIODIVERSITY", audio: "audios/biodiversity.mp3" },
        { texto: "EXPECTATIONS", audio: "audios/expectations.mp3" },
        { texto: "INDEPENDENCE", audio: "audios/independence.mp3" },
        { texto: "PERSEVERANCE", audio: "audios/perseverance.mp3" },
        { texto: "CHAMPIONSHIP", audio: "audios/championship.mp3" },
        { texto: "GALACTOPHORE", audio: "audios/galactophore.mp3" },
        { texto: "INVIGORATING", audio: "audios/invigorating.mp3" },
        { texto: "SUBJECTIVISM", audio: "audios/subjectivism.mp3" },
        { texto: "CONSISTENTLY", audio: "audios/consistently.mp3" },
        { texto: "HARMONIOUSLY", audio: "audios/harmoniously.mp3" },
        { texto: "JOURNALIZING", audio: "audios/journalizing.mp3" },
        { texto: "UNACCEPTABLE", audio: "audios/unacceptable.mp3" },
        { texto: "EMPRESSEMENT", audio: "audios/empressement.mp3" },
        { texto: "HEADQUARTERS", audio: "audios/headquarters.mp3" },
        { texto: "MAXIMIZATION", audio: "audios/maximization.mp3" },
        { texto: "YOUTHFULNESS", audio: "audios/youthfulness.mp3" }
    ],
    ronda6: [
        { texto: "ABRASIVENESSES", audio: "audios/ABRASIVENESSES.mp3" },
        { texto: "CONJUNCTIVITIS", audio: "audios/CONJUNCTIVITIS.mp3" },
        { texto: "PALEOBIOLOGIST", audio: "audios/PALEOBIOLOGIST.mp3" },
        { texto: "ADMINISTRATION", audio: "audios/ADMINISTRATION.mp3" },
        { texto: "DECAFFEINATING", audio: "audios/decaffeinating.mp3" },
        { texto: "PHOTOSYNTHESIS", audio: "audios/photosynthesis.mp3" },
        { texto: "AGREEABILITIES", audio: "audios/agreeabilities.mp3" },
        { texto: "GEOCENTRICALLY", audio: "audios/geocentrically.mp3" },
        { texto: "SCHIZOPHRENICS", audio: "audios/schizophrenics.mp3" },
        { texto: "BRACHYPTERISMS", audio: "audios/brachypterisms.mp3" },
        { texto: "LEPTODACTYLOUS", audio: "audios/leptodactylous.mp3" },
        { texto: "TELECONFERENCE", audio: "audios/teleconference.mp3" },
        { texto: "CONCEPTUALIZED", audio: "audios/conceptualized.mp3" },
        { texto: "MISEMPHASIZING", audio: "audios/MISEMPHASIZING.mp3" },
        { texto: "VULCANOLOGISTS", audio: "audios/VULCANOLOGISTS.mp3" }
    ]
};

function generarPalabra(ronda) {
    const randomIndex = Math.floor(Math.random() * palabras[ronda].length);
    const palabra = palabras[ronda][randomIndex];

    // Mostrar la palabra en pantalla
    const outputElement = document.getElementById("output");
    outputElement.innerText = palabra.texto;

    // Reproducir el audio
    const audio = new Audio(palabra.audio);
    audio.play();
}