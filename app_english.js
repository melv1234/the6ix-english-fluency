/* ==========================================================================
   THE 6IX TO FLUENCY — TORONTO ENGLISH MASTER APPLICATION
   Full Client Application Engine
   ========================================================================== */

(function () {
  'use strict';

  // 1. DATA REFERENCES
  const STEPS = window.TORONTO_ENGLISH_STEPS || [];
  const ALL_PHRASES = window.TORONTO_ENGLISH_PHRASES || [];

  // 2. REALISTIC TORONTO SCENARIOS / DIALOGUES
  const DIALOGUES = [
    {
      id: "diag_1",
      title: "☕ Tim Hortons & Morning Coffee Run",
      location: "Queen St & Spadina Ave",
      level: "A2-B1",
      description: "Commander son café du matin et ses pâtisseries avec les expressions authentiques.",
      lines: [
        { speaker: "Barista", en: "Hi there, good morning! What can I get started for you today?", fr: "Bonjour ! Qu'est-ce que je vous sers ce matin ?" },
        { speaker: "You", en: "Good morning! Can I get a medium double-double and an iced latte with oat milk, please?", fr: "Bonjour ! Puis-je avoir un café moyen deux crèmes deux sucres et un latte glacé au lait d'avoine, s'il vous plaît ?" },
        { speaker: "Barista", en: "Sure thing! Would you like any bakery items with that today?", fr: "Tout à fait ! Souhaitez-vous une viennoiserie ou pâtisserie avec cela aujourd'hui ?" },
        { speaker: "You", en: "Yes, could I also grab a box of ten chocolate Timbits?", fr: "Oui, pourrais-je aussi prendre une boîte de dix Timbits au chocolat ?" },
        { speaker: "Barista", en: "You got it! Is that for here or to go?", fr: "C'est noté ! C'est pour consommer sur place ou à emporter ?" },
        { speaker: "You", en: "To go, please. And I'll pay by tap with my phone.", fr: "À emporter, s'il vous plaît. Et je vais payer sans contact avec mon téléphone." },
        { speaker: "Barista", en: "Perfect, just tap whenever you're ready. Have a wonderful rest of your day!", fr: "Parfait, posez votre téléphone quand vous voulez. Passez une excellente fin de journée !" },
        { speaker: "You", en: "Thanks so much, cheers!", fr: "Merci beaucoup, bonne journée !" }
      ]
    },
    {
      id: "diag_2",
      title: "🚇 TTC Subway & Rush Hour Commute",
      location: "Bloor-Yonge Station (Line 1 & 2)",
      level: "A2-B1",
      description: "Demander son chemin dans le métro bondé et gérer les correspondances.",
      lines: [
        { speaker: "You", en: "Excuse me, does this train go southbound towards Union Station?", fr: "Excusez-moi, est-ce que ce train va vers le sud en direction de Union Station ?" },
        { speaker: "Commuter", en: "Yes it does, you're on Line 1. It's about five stops down from here.", fr: "Oui tout à fait, vous êtes sur la Ligne 1. C'est à environ cinq stations d'ici." },
        { speaker: "You", en: "Great, thanks! Do you know if I need to transfer to get to King Street?", fr: "Super, merci ! Savez-vous si je dois faire une correspondance pour aller à King Street ?" },
        { speaker: "Commuter", en: "Nope, King is right on this line, just one stop past Queen. Make sure you tap off if needed!", fr: "Non, King est directement sur cette ligne, juste un arrêt après Queen. Pensez à badger si nécessaire !" },
        { speaker: "Announcer", en: "Attention passengers, Line 1 is currently running normally with minor delays downtown.", fr: "Attention chers passagers, la Ligne 1 circule normalement avec de légers ralentissements au centre-ville." },
        { speaker: "You", en: "Rush hour is always packed, isn't it?", fr: "L'heure de pointe est toujours bondée, n'est-ce pas ?" },
        { speaker: "Commuter", en: "Tell me about it! You get used to it after a while, eh?", fr: "Tu m'étonnes ! On s'y fait au bout d'un moment, hein ?" }
      ]
    },
    {
      id: "diag_3",
      title: "🍻 Queen West Afterwork Drinks & Patio",
      location: "Trinity Bellwoods & Queen West",
      level: "B2",
      description: "Rejoindre des collègues sur une terrasse ensoleillée et parler des projets du week-end.",
      lines: [
        { speaker: "Friend", en: "Hey! Over here on the patio! So glad you made it out!", fr: "Hé ! Par ici en terrasse ! Tellement content(e) que tu aies pu venir !" },
        { speaker: "You", en: "Hey everyone! Traffic on the Gardiner was bumper to bumper, but I made it!", fr: "Salut tout le monde ! Les bouchons sur la Gardiner étaient pare-chocs contre pare-chocs, mais j'ai réussi !" },
        { speaker: "Friend", en: "We just ordered a pitcher of local craft beer. Do you want a glass?", fr: "On vient de commander un pichet de bière artisanale locale. Tu en veux un verre ?" },
        { speaker: "You", en: "I'd love that! What are you guys planning for the upcoming long weekend?", fr: "J'adorerais ! Quels sont vos projets pour le long week-end qui arrive ?" },
        { speaker: "Friend", en: "A few of us are heading up north to cottage country in Muskoka. You're welcome to join!", fr: "Quelques-uns d'entre nous montent dans le nord aux chalets à Muskoka. Tu es la bienvenue si tu veux te joindre à nous !" },
        { speaker: "You", en: "That sounds amazing! Let me check my schedule and loop back with you tomorrow.", fr: "Ça a l'air génial ! Laisse-moi vérifier mon emploi du temps et je te redis ça demain." }
      ]
    },
    {
      id: "diag_4",
      title: "🏡 Downtown Condo Life & Landlord",
      location: "Waterfront Condo, Toronto",
      level: "B2",
      description: "Échanger avec le régisseur / concierge sur un colis et une question d'appartement.",
      lines: [
        { speaker: "You", en: "Hi John, good afternoon. I received a notification that a delivery parcel arrived for suite 1402.", fr: "Bonjour John. J'ai reçu une notification m'indiquant qu'un colis était arrivé pour l'appartement 1402." },
        { speaker: "Concierge", en: "Let me check the storage room for you. Yes, here it is, from Amazon. Just sign right here on the tablet.", fr: "Laissez-moi vérifier dans la remise. Oui, le voilà, d'Amazon. Signez simplement ici sur la tablette." },
        { speaker: "You", en: "Thank you! Also, could you remind me what the policy is regarding rooftop BBQ reservations?", fr: "Merci ! Aussi, pourriez-vous me rappeler la règle pour réserver les barbecues sur le toit ?" },
        { speaker: "Concierge", en: "Sure! You can book a two-hour slot through the resident portal up to one week in advance.", fr: "Bien sûr ! Vous pouvez réserver un créneau de deux heures via le portail des résidents jusqu'à une semaine à l'avance." },
        { speaker: "You", en: "That's super convenient. Thanks for your help, have a great shift!", fr: "C'est super pratique. Merci pour votre aide, bon service à vous !" }
      ]
    },
    {
      id: "diag_5",
      title: "💼 Business Meeting & Polite Pushback",
      location: "Financial District (Bay Street)",
      level: "B2-C1",
      description: "Prendre la parole en réunion d'équipe, faire le point et poser des limites avec diplomatie.",
      lines: [
        { speaker: "Colleague", en: "So the client wants the entire redesign ready by next Tuesday. Can your team take that on?", fr: "Donc le client veut la refonte complète pour mardi prochain. Votre équipe peut-elle prendre cela en charge ?" },
        { speaker: "You", en: "If I may jump in here, I understand the client's urgency, but we simply don't have the bandwidth for that timeline.", fr: "Si je peux intervenir, je comprends l'urgence du client, mais nous n'avons tout simplement pas la bande passante pour ce calendrier." },
        { speaker: "Colleague", en: "What would be a more realistic turnaround time from your standpoint?", fr: "Quel serait un délai plus réaliste de ton point de vue ?" },
        { speaker: "You", en: "From our standpoint, delivering a polished version by next Friday ensures quality without burning out the team.", fr: "De notre point de vue, livrer une version soignée pour vendredi prochain garantit la qualité sans épuiser l'équipe." },
        { speaker: "Colleague", en: "Fair enough, that makes total sense. Let me circle back to the client with that revised proposal.", fr: "C'est tout à fait juste et cohérent. Je reviens vers le client avec cette proposition révisée." }
      ]
    },
    {
      id: "diag_6",
      title: "🚗 Road Trip to Muskoka Cottage",
      location: "Highway 400 North",
      level: "B2-C1",
      description: "Prendre la route pour un week-end au bord du lac, discuter des arrêts et des snacks.",
      lines: [
        { speaker: "Driver", en: "We're finally past the Highway 401 junction. Should be smooth sailing from here up to Barrie.", fr: "On a enfin dépassé l'échangeur de la 401. La route devrait être fluide à partir d'ici jusqu'à Barrie." },
        { speaker: "You", en: "What a relief! Can we make a quick pit stop at the next gas station for iced coffee?", fr: "Quel soulagement ! Pourrions-nous faire un arrêt rapide à la prochaine station pour du café glacé ?" },
        { speaker: "Driver", en: "Absolutely. Did you remember to pack the bug spray and the marshmallows for the campfire?", fr: "Absolument. As-tu pensé à prendre le spray anti-moustiques et les guimauves pour le feu de camp ?" },
        { speaker: "You", en: "Got them right here in the back seat! I can't wait to jump into the lake.", fr: "Je les ai juste là sur la banquette arrière ! J'ai trop hâte de plonger dans le lac." },
        { speaker: "Driver", en: "Nothing beats a summer weekend in cottage country, eh?", fr: "Rien ne vaut un week-end d'été dans la région des chalets, hein ?" }
      ]
    },
    {
      id: "diag_7",
      title: "🍽️ Little Italy Dinner & Splitting the Bill",
      location: "College St, Little Italy",
      level: "B2-C1",
      description: "Passer une agréable soirée au restaurant et régler l'addition entre amis.",
      lines: [
        { speaker: "Server", en: "How was everything tonight? Can I bring you some dessert menus or coffees?", fr: "Comment s'est passé votre repas ce soir ? Puis-je vous apporter la carte des desserts ou des cafés ?" },
        { speaker: "You", en: "Everything was absolutely delicious, my compliments to the chef! We're all set for the check, please.", fr: "Tout était absolument délicieux, tous mes compliments au chef ! Nous sommes prêts pour l'addition, s'il vous plaît." },
        { speaker: "Server", en: "Certainly! Would you like that on one bill or split up?", fr: "Certainement ! Vous souhaitez une seule note ou séparer l'addition ?" },
        { speaker: "You", en: "Could we split it evenly between the three of us, please?", fr: "Pourrions-nous la diviser en parts égales entre nous trois, s'il vous plaît ?" },
        { speaker: "Server", en: "No problem at all, I'll bring the mobile payment terminals over in just a second.", fr: "Aucun souci, je vous apporte les terminaux de paiement portables dans un instant." }
      ]
    },
    {
      id: "diag_8",
      title: "🤝 Networking & Elevator Pitch Downtown",
      location: "Design & Tech Meetup, Toronto",
      level: "C1",
      description: "Présenter son parcours, son expérience internationale et échanger des contacts.",
      lines: [
        { speaker: "Attendee", en: "Hi! I don't think we've met yet. I'm Marcus, lead product designer at Shopify.", fr: "Salut ! Je ne crois pas qu'on se soit encore croisés. Je suis Marcus, lead product designer chez Shopify." },
        { speaker: "You", en: "Nice to meet you, Marcus! I recently spent several months here in Toronto exploring the tech and design scene.", fr: "Ravi(e) de te rencontrer, Marcus ! J'ai récemment passé plusieurs mois ici à Toronto à explorer l'écosystème tech et design." },
        { speaker: "Attendee", en: "Oh that's awesome! What was your biggest takeaway from your time in the city?", fr: "Oh c'est génial ! Quelle a été ta plus grande impression de ton séjour dans la ville ?" },
        { speaker: "You", en: "The sheer cultural diversity and the collaborative energy. People are genuinely welcoming and driven.", fr: "La diversité culturelle pure et l'énergie collaborative. Les gens sont sincèrement accueillants et motivés." },
        { speaker: "Attendee", en: "Spot on! Let's definitely connect on LinkedIn so we can stay in touch.", fr: "Dans le mille ! Connectons-nous absolument sur LinkedIn pour rester en contact." }
      ]
    }
  ];

  // 3. BADGES & TROPHIES CATALOG
  const BADGES = [
    { id: "b_first", title: "Premier Pas", icon: "🌱", desc: "Avoir répondu à sa première phrase", condition: s => s.answersCount >= 1 },
    { id: "b_10", title: "En Route vers Toronto", icon: "🏙️", desc: "10 phrases réussies", condition: s => s.answersCount >= 10 },
    { id: "b_50", title: "Club des 50", icon: "🎯", desc: "50 phrases pratiquées", condition: s => s.answersCount >= 50 },
    { id: "b_100", title: "Centurion de la Langue", icon: "💯", desc: "100 phrases maîtrisées", condition: s => s.answersCount >= 100 },
    { id: "b_streak3", title: "Régularité de Bronze", icon: "🥉", desc: "3 jours consécutifs d'entraînement", condition: s => s.streak >= 3 },
    { id: "b_streak7", title: "Série d'Or : 7 Jours", icon: "🔥", desc: "Une semaine entière de pratique quotidienne", condition: s => s.streak >= 7 },
    { id: "b_streak14", title: "Discipline de Fer", icon: "⚔️", desc: "14 jours consécutifs sans faillir", condition: s => s.streak >= 14 },
    { id: "b_stage1", title: "Maître du Quotidien", icon: "👋", desc: "Avoir pratiqué les 10 premières étapes (Palier 1)", condition: s => s.completedSteps.filter(x => x <= 10).length >= 5 },
    { id: "b_phrasal", title: "Phrasal Verb Ninja", icon: "⚡", desc: "Avoir pratiqué les étapes 11 ou 12", condition: s => s.completedSteps.includes(11) || s.completedSteps.includes(12) },
    { id: "b_stage2", title: "Fluidité Professionnelle B2", icon: "💼", desc: "Avoir terminé 5 étapes du Palier 2", condition: s => s.completedSteps.filter(x => x >= 11 && x <= 20).length >= 5 },
    { id: "b_c1", title: "Éloquence & Nuance C1", icon: "🧠", desc: "Avoir pratiqué des phrases du Palier 3", condition: s => s.completedSteps.some(x => x >= 21) },
    { id: "b_master", title: "True Native Flow", icon: "👑", desc: "Atteindre 1 000 points d'XP", condition: s => s.xp >= 1000 }
  ];

  // 4. APPLICATION STATE & PERSISTENCE
  const STORAGE_KEY = "toronto_english_master_state_v1";

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load state from localStorage:", e);
    }
    return {
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().slice(0, 10),
      answersCount: 0,
      correctCount: 0,
      completedSteps: [],
      stepProgress: {},
      favorites: [],
      mistakes: [],
      customPhrases: [],
      srsCards: {}, // { [phraseId]: { box: 1, nextReview: timestamp } }
      audioSpeed: 1.0,
      soundEnabled: true,
      darkMode: false,
      currentStepFilter: "all",
      practiceMode: "tiles" // tiles, fill, voice, listening
    };
  }

  const state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save state to localStorage:", e);
    }
    updateTopBarUI();
  }

  // Update streak logic on startup
  function checkDailyStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (!state.lastActiveDate) {
      state.lastActiveDate = today;
      state.streak = 1;
    } else if (state.lastActiveDate !== today) {
      const last = new Date(state.lastActiveDate);
      const now = new Date(today);
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        state.streak = (state.streak || 0) + 1;
      } else if (diffDays > 1) {
        state.streak = 1; // Reset streak if missed a day
      }
      state.lastActiveDate = today;
      saveState();
    }
  }
  checkDailyStreak();

  // 5. SYNTHESIZED SOUND EFFECTS (Zero-dependency Web Audio API)
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioCtx = new AudioCtx();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'success') {
        // Melodious major arpeggio
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.12, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.3);
        });
      } else if (type === 'error') {
        // Soft descending tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(349.23, now); // F4
        osc.frequency.exponentialRampToValueAtTime(261.63, now + 0.25); // C4
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        // Subtle tick
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'level') {
        // Celebration fanfarita
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(0.2, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.42);
        });
      }
    } catch (e) {
      console.warn("Sound effect error:", e);
    }
  }

  // 6. NATIVE SPEECH SYNTHESIS (Web Speech API)
  let preferredVoice = null;
  function initVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize Canadian English, then North American US, then UK
    preferredVoice = voices.find(v => v.lang === 'en-CA') ||
      voices.find(v => v.lang === 'en-US' && (v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Aria'))) ||
      voices.find(v => v.lang.startsWith('en-US')) ||
      voices.find(v => v.lang.startsWith('en')) ||
      null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = initVoices;
    initVoices();
  }

  function speakEnglish(text, rateOverride) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop any pending utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-CA';
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = rateOverride || state.audioSpeed || 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  // 7. SPEECH RECOGNITION (Voice Practice & Shadowing)
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  let activeRecognition = null;

  function calculateSimilarity(str1, str2) {
    const s1 = str1.toLowerCase().replace(/[.,!?;:'"-]/g, '').trim();
    const s2 = str2.toLowerCase().replace(/[.,!?;:'"-]/g, '').trim();
    if (s1 === s2) return 1.0;
    const words1 = s1.split(/\s+/);
    const words2 = s2.split(/\s+/);
    let matches = 0;
    words1.forEach(w => {
      if (words2.includes(w)) matches++;
    });
    return matches / Math.max(words1.length, words2.length);
  }

  // 8. UI HELPERS & TOP BAR UPDATES
  function updateTopBarUI() {
    const streakDisplay = document.getElementById('streakDisplay');
    if (streakDisplay) streakDisplay.textContent = `${state.streak || 1} ${state.streak > 1 ? 'jours' : 'jour'}`;

    const xpDisplay = document.getElementById('xpDisplay');
    if (xpDisplay) xpDisplay.textContent = `${state.xp || 0} XP`;

    const levelDisplay = document.getElementById('levelDisplay');
    if (levelDisplay) {
      let lvl = "Niveau 1 : Toronto Explorer";
      if (state.xp >= 1500) lvl = "Niveau 5 : C1 Spontaneous Flow 🏆";
      else if (state.xp >= 900) lvl = "Niveau 4 : Connected Speech Pro";
      else if (state.xp >= 500) lvl = "Niveau 3 : Phrasal Verb Master";
      else if (state.xp >= 200) lvl = "Niveau 2 : Confident Commuter";
      levelDisplay.textContent = lvl;
    }

    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon) {
      soundIcon.setAttribute('data-lucide', state.soundEnabled ? 'volume-2' : 'volume-x');
      lucide.createIcons();
    }

    const speedLabel = document.getElementById('speedLabel');
    if (speedLabel) speedLabel.textContent = `${(state.audioSpeed || 1.0).toFixed(1)}x`;

    const statAns = document.getElementById('statQuestionsAnswered');
    if (statAns) statAns.textContent = state.answersCount || 0;

    const statAcc = document.getElementById('statSuccessRate');
    if (statAcc) {
      const pct = state.answersCount > 0 ? Math.round((state.correctCount / state.answersCount) * 100) : 0;
      statAcc.textContent = `${pct}%`;
    }

    const statXP = document.getElementById('statTotalXP');
    if (statXP) statXP.textContent = state.xp || 0;

    const statStreak = document.getElementById('statStreakDays');
    if (statStreak) statStreak.textContent = state.streak || 1;

    const completedBadge = document.getElementById('completedStepsCount');
    if (completedBadge) completedBadge.textContent = state.completedSteps ? state.completedSteps.length : 0;
  }

  // Dark mode initial application
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 9. TAB 1: 30-STEP ROADMAP GENERATOR
  function renderRoadmap(filterStage = "all") {
    const grid = document.getElementById('roadmapGrid');
    if (!grid) return;
    grid.innerHTML = '';

    STEPS.forEach(st => {
      let stage = 1;
      if (st.step >= 21) stage = 3;
      else if (st.step >= 11) stage = 2;

      if (filterStage !== "all" && String(stage) !== String(filterStage)) {
        return;
      }

      const isCompleted = state.completedSteps.includes(st.step);
      const stepProg = state.stepProgress[st.step] || { answered: 0, correct: 0 };
      const phrasesInStep = ALL_PHRASES.filter(p => p.step === st.step).length;
      const progressPercent = Math.min(100, Math.round((stepProg.answered / Math.max(1, phrasesInStep)) * 100));

      const card = document.createElement('div');
      card.className = `bg-white dark:bg-slate-800 rounded-3xl border ${isCompleted ? 'border-emerald-500/50 dark:border-emerald-500/40 shadow-emerald-500/10' : 'border-slate-200 dark:border-slate-700/80'} p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-4`;

      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black px-3 py-1 rounded-full ${stage === 1 ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300' : stage === 2 ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300'}">
              ${st.badge || `Étape ${st.step}`}
            </span>
            <span class="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              ${st.level}
            </span>
          </div>

          <div>
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition leading-snug">
              Étape ${st.step} : ${st.title}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              ${st.tip}
            </p>
          </div>

          <!-- Cultural mini callout -->
          <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
            <span class="font-bold text-rose-600 dark:text-rose-400">🍁 Vibe Toronto :</span> ${st.culture}
          </div>
        </div>

        <div class="pt-2 border-t border-slate-100 dark:border-slate-700/80 space-y-3">
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span>Progression : ${stepProg.answered}/${phrasesInStep} phrases</span>
              <span>${progressPercent}%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r ${stage === 1 ? 'from-rose-500 to-red-600' : stage === 2 ? 'from-amber-500 to-orange-500' : 'from-indigo-500 to-purple-600'}" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <button data-start-step="${st.step}" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold ${isCompleted ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-100' : 'bg-slate-900 hover:bg-rose-600 text-white dark:bg-slate-700 dark:hover:bg-rose-600'} transition flex items-center justify-center gap-2">
            <i data-lucide="${isCompleted ? 'check-circle' : 'play'}" class="w-3.5 h-3.5"></i>
            <span>${isCompleted ? 'S\'entraîner à nouveau' : 'Démarrer cette étape'}</span>
          </button>
        </div>
      `;

      grid.appendChild(card);
    });

    lucide.createIcons();
  }

  // 10. TAB 2: INTERACTIVE PRACTICE ARENA
  let currentSessionPhrases = [];
  let currentPhraseIndex = 0;
  let activeSelectedTiles = []; // for sentence builder mode
  let isCurrentAnswerChecked = false;
  let sessionCorrectCount = 0;

  function populateStepDropdown() {
    const sel = document.getElementById('practiceStepSelect');
    if (!sel) return;
    sel.innerHTML = '<option value="all">🌐 Toutes les étapes (Mélange complet)</option>';
    STEPS.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.step;
      opt.textContent = `Étape ${s.step} : ${s.title} (${s.level})`;
      sel.appendChild(opt);
    });

    const expSel = document.getElementById('explorerStepFilter');
    if (expSel) {
      expSel.innerHTML = '<option value="all">Toutes les étapes (1 à 30)</option>';
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.step;
        opt.textContent = `Étape ${s.step} : ${s.title}`;
        expSel.appendChild(opt);
      });
    }
  }

  function startSession(stepFilter = "all") {
    state.currentStepFilter = stepFilter;
    const sel = document.getElementById('practiceStepSelect');
    if (sel) sel.value = stepFilter;

    let pool = [];
    if (stepFilter === "all") {
      pool = [...ALL_PHRASES, ...state.customPhrases];
    } else {
      const num = parseInt(stepFilter, 10);
      pool = ALL_PHRASES.filter(p => p.step === num);
      if (pool.length === 0) pool = ALL_PHRASES.slice(0, 10);
    }

    // Shuffle and pick 10 phrases for a crisp, motivating session
    currentSessionPhrases = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    currentPhraseIndex = 0;
    sessionCorrectCount = 0;
    isCurrentAnswerChecked = false;
    renderCurrentPhrase();
  }

  function renderCurrentPhrase() {
    const phrase = currentSessionPhrases[currentPhraseIndex];
    if (!phrase) return;

    isCurrentAnswerChecked = false;
    activeSelectedTiles = [];

    // Header badges
    const stepBadge = document.getElementById('cardStepBadge');
    if (stepBadge) stepBadge.textContent = phrase.stepBadge || `Étape ${phrase.step} : ${phrase.stepTitle}`;

    const levelBadge = document.getElementById('cardLevelBadge');
    if (levelBadge) levelBadge.textContent = phrase.level || 'B2';

    const catBadge = document.getElementById('cardCategoryBadge');
    if (catBadge) catBadge.textContent = phrase.category || 'Toronto Life';

    // Bookmark star icon state
    const isFav = state.favorites.includes(phrase.id);
    const star = document.getElementById('bookmarkIcon');
    if (star) {
      star.className = isFav ? "w-4 h-4 fill-amber-400 stroke-amber-400 text-amber-400" : "w-4 h-4";
    }

    // French prompt
    const frenchText = document.getElementById('frenchPromptText');
    if (frenchText) frenchText.textContent = phrase.fr;

    // Hint box
    const hintBox = document.getElementById('hintBox');
    const hintText = document.getElementById('hintText');
    if (hintBox) hintBox.classList.add('hidden');
    if (hintText) hintText.textContent = phrase.hint || phrase.note || "Concentre-toi sur les verbes idiomatiques et la fluidité !";

    // Progress bar
    const progressLabel = document.getElementById('sessionProgressLabel');
    if (progressLabel) progressLabel.textContent = `Phrase ${currentPhraseIndex + 1} sur ${currentSessionPhrases.length}`;

    const scoreLabel = document.getElementById('sessionScoreLabel');
    if (scoreLabel) {
      const acc = currentPhraseIndex === 0 ? 100 : Math.round((sessionCorrectCount / currentPhraseIndex) * 100);
      scoreLabel.textContent = `Précision session : ${acc}%`;
    }

    const progressBar = document.getElementById('sessionProgressBar');
    if (progressBar) {
      const pct = (currentPhraseIndex / currentSessionPhrases.length) * 100;
      progressBar.style.width = `${pct}%`;
    }

    // Feedback container reset
    const feedbackBox = document.getElementById('feedbackContainer');
    if (feedbackBox) {
      feedbackBox.classList.add('hidden');
      feedbackBox.innerHTML = '';
    }

    // Button state
    const verifyBtn = document.getElementById('verifyBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (verifyBtn) verifyBtn.classList.remove('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

    // Render interactive zone based on active practice mode
    renderInteractiveMode(phrase);
  }

  function renderInteractiveMode(phrase) {
    const container = document.getElementById('interactiveZone');
    if (!container) return;
    container.innerHTML = '';

    const mode = state.practiceMode || 'tiles';

    if (mode === 'tiles') {
      // 🔤 MODE 1: SENTENCE BUILDER / WORD TILES
      const tilesWrapper = document.createElement('div');
      tilesWrapper.className = "space-y-4";

      tilesWrapper.innerHTML = `
        <div class="space-y-1.5">
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-400">Construis la phrase en anglais :</label>
          <!-- Destination Area -->
          <div id="placedTilesArea" class="min-h-[64px] p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap gap-2 items-center">
            <span id="tilesPlaceholder" class="text-xs text-slate-400 italic">Clique sur les mots ci-dessous pour assembler la phrase...</span>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs text-slate-400">
          <span>Mots disponibles (avec distracteurs) :</span>
          <button id="clearTilesBtn" class="text-xs font-semibold text-rose-500 hover:text-rose-600 transition flex items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            <span>Réinitialiser</span>
          </button>
        </div>

        <!-- Pool Area -->
        <div id="poolTilesArea" class="flex flex-wrap gap-2 pt-1">
          <!-- Chips rendered below -->
        </div>
      `;

      container.appendChild(tilesWrapper);

      const placedArea = document.getElementById('placedTilesArea');
      const poolArea = document.getElementById('poolTilesArea');
      const placeholder = document.getElementById('tilesPlaceholder');

      // Prepare word tiles
      const availableTiles = [...(phrase.tiles || phrase.en.split(/\s+/))];

      availableTiles.forEach((word, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = "word-tile-btn px-3.5 py-2 rounded-xl bg-white dark:bg-slate-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-sm border border-slate-200 dark:border-slate-600 hover:border-rose-400 transition transform active:scale-95";
        btn.textContent = word;
        btn.dataset.word = word;
        btn.dataset.tileId = `t_${idx}`;

        btn.addEventListener('click', () => {
          if (isCurrentAnswerChecked) return;
          playSound('click');
          btn.classList.add('opacity-30', 'pointer-events-none');
          activeSelectedTiles.push({ word, btn });
          updatePlacedTilesUI();
        });

        poolArea.appendChild(btn);
      });

      function updatePlacedTilesUI() {
        if (!placedArea) return;
        placedArea.innerHTML = '';
        if (activeSelectedTiles.length === 0) {
          placedArea.innerHTML = '<span id="tilesPlaceholder" class="text-xs text-slate-400 italic">Clique sur les mots ci-dessous pour assembler la phrase...</span>';
          return;
        }

        activeSelectedTiles.forEach((item, index) => {
          const placedChip = document.createElement('button');
          placedChip.type = 'button';
          placedChip.className = "px-3.5 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm shadow-md hover:bg-rose-600 dark:hover:bg-rose-500 dark:hover:text-white transition flex items-center gap-1.5";
          placedChip.innerHTML = `<span>${item.word}</span> <span class="text-[10px] opacity-60">✕</span>`;
          placedChip.addEventListener('click', () => {
            if (isCurrentAnswerChecked) return;
            playSound('click');
            item.btn.classList.remove('opacity-30', 'pointer-events-none');
            activeSelectedTiles.splice(index, 1);
            updatePlacedTilesUI();
          });
          placedArea.appendChild(placedChip);
        });
      }

      const clearBtn = document.getElementById('clearTilesBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          if (isCurrentAnswerChecked) return;
          playSound('click');
          activeSelectedTiles.forEach(it => it.btn.classList.remove('opacity-30', 'pointer-events-none'));
          activeSelectedTiles = [];
          updatePlacedTilesUI();
        });
      }

    } else if (mode === 'fill') {
      // 🧩 MODE 2: CLOZE TEST (MOT À TROU INTELLIGENT)
      const fillWrapper = document.createElement('div');
      fillWrapper.className = "space-y-4";

      fillWrapper.innerHTML = `
        <div class="space-y-2">
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-400">Complète le mot ou l'expression manquante :</label>
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-base sm:text-lg font-medium leading-relaxed flex flex-wrap items-center gap-2">
            <span>${phrase.prefix}</span>
            <input type="text" id="clozeInput" autocomplete="off" placeholder="Tape ici..." class="px-3.5 py-1.5 rounded-xl border-2 border-rose-400 focus:border-rose-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none shadow-sm transition min-w-[140px] max-w-[280px]">
            <span>${phrase.suffix}</span>
          </div>
        </div>

        <!-- Quick characters toolbar -->
        <div class="flex items-center gap-1.5 pt-1 text-xs text-slate-400">
          <span class="mr-1 text-[11px]">Raccourcis :</span>
          <button type="button" class="quick-char-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-rose-100 text-slate-800 dark:text-slate-200 font-bold">'</button>
          <button type="button" class="quick-char-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-rose-100 text-slate-800 dark:text-slate-200 font-bold">-</button>
          <button type="button" class="quick-char-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-rose-100 text-slate-800 dark:text-slate-200 font-bold">’</button>
        </div>
      `;

      container.appendChild(fillWrapper);

      const clozeInput = document.getElementById('clozeInput');
      if (clozeInput) {
        setTimeout(() => clozeInput.focus(), 80);
        clozeInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            verifyCurrentAnswer();
          }
        });
      }

      container.querySelectorAll('.quick-char-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (clozeInput) {
            clozeInput.value += btn.textContent;
            clozeInput.focus();
          }
        });
      });

    } else if (mode === 'voice') {
      // 🎙️ MODE 3: VOICE SHADOWING & MICROPHONE PRACTICE
      const voiceWrapper = document.createElement('div');
      voiceWrapper.className = "space-y-6 text-center py-4";

      const hasMic = Boolean(SpeechRecognition);

      voiceWrapper.innerHTML = `
        <div class="space-y-2">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Objectif prononciation & cadence :</div>
          <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading">
            "${phrase.en}"
          </div>
          <p class="text-xs text-slate-400 italic">Écoute l'audio natif, puis clique sur le micro pour t'enregistrer et répéter la phrase.</p>
        </div>

        <div class="flex items-center justify-center gap-4">
          <button id="listenVoicePromptBtn" type="button" class="px-4 py-2.5 rounded-xl font-bold bg-slate-100 dark:bg-slate-700 hover:bg-rose-100 text-slate-800 dark:text-slate-200 transition flex items-center gap-2 text-xs">
            <i data-lucide="volume-2" class="w-4 h-4 text-rose-500"></i>
            <span>Écouter le modèle</span>
          </button>

          ${hasMic ? `
            <button id="micRecordBtn" type="button" class="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white shadow-xl shadow-rose-500/30 flex items-center justify-center active:scale-95 transition">
              <i data-lucide="mic" id="micIcon" class="w-7 h-7"></i>
            </button>
          ` : `
            <div class="p-3 rounded-xl bg-amber-50 text-amber-800 text-xs">
              Microphone non disponible sur ce navigateur. Utilise Chrome ou Edge pour la reconnaissance vocale !
            </div>
          `}
        </div>

        <!-- Transcript Preview Box -->
        <div id="voiceTranscriptArea" class="hidden p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm space-y-1">
          <span class="text-xs text-slate-400 block font-semibold">Ce que nous avons entendu :</span>
          <p id="voiceTranscriptText" class="font-bold text-slate-800 dark:text-slate-100 italic"></p>
          <div id="voiceAccuracyScore" class="text-xs font-extrabold text-emerald-600"></div>
        </div>
      `;

      container.appendChild(voiceWrapper);

      const listenBtn = document.getElementById('listenVoicePromptBtn');
      if (listenBtn) {
        listenBtn.addEventListener('click', () => speakEnglish(phrase.en));
      }

      const micBtn = document.getElementById('micRecordBtn');
      if (micBtn && hasMic) {
        micBtn.addEventListener('click', () => {
          handleVoiceRecording(phrase);
        });
      }

    } else if (mode === 'listening') {
      // 🎧 MODE 4: LISTENING DICTATION (À L'OREILLE)
      const listenWrapper = document.createElement('div');
      listenWrapper.className = "space-y-5 text-center py-4";

      listenWrapper.innerHTML = `
        <div class="space-y-3">
          <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center mx-auto shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition" id="playAudioDictationBtn">
            <i data-lucide="volume-2" class="w-10 h-10"></i>
          </div>
          <p class="text-xs font-semibold text-slate-500">Clique ci-dessus pour écouter la phrase en anglais parlé.</p>
        </div>

        <div class="max-w-xl mx-auto space-y-2">
          <input type="text" id="dictationInput" autocomplete="off" placeholder="Écris la phrase complète que tu entends..." class="w-full text-center px-4 py-3 rounded-2xl border-2 border-slate-300 dark:border-slate-600 focus:border-rose-500 bg-white dark:bg-slate-800 font-bold text-base sm:text-lg outline-none shadow-sm transition">
        </div>
      `;

      container.appendChild(listenWrapper);

      const playBtn = document.getElementById('playAudioDictationBtn');
      if (playBtn) {
        playBtn.addEventListener('click', () => {
          speakEnglish(phrase.en);
        });
      }

      const dictInput = document.getElementById('dictationInput');
      if (dictInput) {
        setTimeout(() => dictInput.focus(), 100);
        dictInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            verifyCurrentAnswer();
          }
        });
      }

      // Auto-play sound once on start of listening mode
      setTimeout(() => speakEnglish(phrase.en), 300);
    }

    lucide.createIcons();
  }

  // Voice recording engine
  function handleVoiceRecording(phrase) {
    if (!SpeechRecognition) return;
    const micBtn = document.getElementById('micRecordBtn');
    const transcriptArea = document.getElementById('voiceTranscriptArea');
    const transcriptText = document.getElementById('voiceTranscriptText');
    const scoreText = document.getElementById('voiceAccuracyScore');

    if (activeRecognition) {
      activeRecognition.stop();
      activeRecognition = null;
      if (micBtn) micBtn.classList.remove('animate-pulse', 'bg-red-600');
      return;
    }

    try {
      const rec = new SpeechRecognition();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      if (micBtn) micBtn.classList.add('animate-pulse', 'bg-red-600');

      rec.onstart = () => {
        if (transcriptArea) transcriptArea.classList.remove('hidden');
        if (transcriptText) transcriptText.textContent = "🎙️ En écoute... Parlez maintenant !";
        if (scoreText) scoreText.textContent = "";
      };

      rec.onresult = (evt) => {
        const spoken = evt.results[0][0].transcript;
        if (transcriptText) transcriptText.textContent = `"${spoken}"`;
        const sim = calculateSimilarity(spoken, phrase.en);
        const pct = Math.round(sim * 100);
        if (scoreText) {
          scoreText.textContent = pct >= 80 ? `🎉 Score de prononciation : ${pct}% (Excellent !)` : `Score : ${pct}% (Réessaie pour atteindre 80%+)`;
        }
        if (pct >= 80) {
          playSound('success');
          state.xp += 15;
          saveState();
        }
      };

      rec.onerror = (err) => {
        console.warn("Speech recognition error:", err);
        if (transcriptText) transcriptText.textContent = "Erreur audio ou micro muet. Réessaie !";
      };

      rec.onend = () => {
        if (micBtn) micBtn.classList.remove('animate-pulse', 'bg-red-600');
        activeRecognition = null;
      };

      activeRecognition = rec;
      rec.start();
    } catch (e) {
      console.warn("Cannot start speech recognition:", e);
    }
  }

  // Verification Logic
  function verifyCurrentAnswer() {
    if (isCurrentAnswerChecked) {
      goToNextPhrase();
      return;
    }

    const phrase = currentSessionPhrases[currentPhraseIndex];
    if (!phrase) return;

    let isCorrect = false;
    let userGiven = "";
    const mode = state.practiceMode || 'tiles';

    if (mode === 'tiles') {
      const reconstructed = activeSelectedTiles.map(t => t.word.toLowerCase().replace(/[.,!?;:"'-]/g, '')).join(' ');
      const expected = phrase.en.toLowerCase().replace(/[.,!?;:"'-]/g, '').split(/\s+/).join(' ');
      userGiven = activeSelectedTiles.map(t => t.word).join(' ');
      isCorrect = reconstructed === expected;
    } else if (mode === 'fill') {
      const input = document.getElementById('clozeInput');
      const val = (input ? input.value : "").trim().toLowerCase();
      const targetClean = phrase.target.trim().toLowerCase();
      userGiven = input ? input.value : "";
      isCorrect = (val === targetClean) || (val.replace(/[’']/g, "'") === targetClean.replace(/[’']/g, "'"));
    } else if (mode === 'listening') {
      const input = document.getElementById('dictationInput');
      const val = (input ? input.value : "").trim().toLowerCase().replace(/[.,!?;:"'-]/g, '');
      const expected = phrase.en.toLowerCase().replace(/[.,!?;:"'-]/g, '').trim();
      userGiven = input ? input.value : "";
      isCorrect = calculateSimilarity(val, expected) >= 0.85;
    } else if (mode === 'voice') {
      // In voice mode, user is guided interactively
      isCorrect = true;
    }

    isCurrentAnswerChecked = true;
    state.answersCount = (state.answersCount || 0) + 1;

    // Step progress
    if (!state.stepProgress[phrase.step]) {
      state.stepProgress[phrase.step] = { answered: 0, correct: 0 };
    }
    state.stepProgress[phrase.step].answered += 1;

    const feedbackBox = document.getElementById('feedbackContainer');
    const verifyBtn = document.getElementById('verifyBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (isCorrect) {
      playSound('success');
      sessionCorrectCount++;
      state.correctCount = (state.correctCount || 0) + 1;
      state.xp = (state.xp || 0) + 10;
      state.stepProgress[phrase.step].correct += 1;

      // Check if step completed
      if (!state.completedSteps.includes(phrase.step) && state.stepProgress[phrase.step].answered >= 8) {
        state.completedSteps.push(phrase.step);
        playSound('level');
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      }

      if (feedbackBox) {
        feedbackBox.className = "p-5 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 space-y-3 transition-all";
        feedbackBox.innerHTML = `
          <div class="flex items-center gap-2 font-bold text-base text-emerald-700 dark:text-emerald-300">
            <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i>
            <span>Excellent ! Réponse parfaitement exacte (+10 XP)</span>
          </div>
          <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-heading">
            "${phrase.en}"
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300">
            💡 <strong>Note :</strong> ${phrase.note || phrase.hint || "Formule naturelle et courante."}
          </p>
        `;
        feedbackBox.classList.remove('hidden');
      }
    } else {
      playSound('error');
      // Record mistake for review
      if (!state.mistakes.includes(phrase.id)) {
        state.mistakes.push(phrase.id);
      }

      if (feedbackBox) {
        feedbackBox.className = "p-5 rounded-2xl border border-rose-300 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 space-y-3 transition-all";
        feedbackBox.innerHTML = `
          <div class="flex items-center gap-2 font-bold text-base text-rose-700 dark:text-rose-300">
            <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600"></i>
            <span>Pas tout à fait ! Voici la formulation naturelle attendue :</span>
          </div>
          <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-heading">
            "${phrase.en}"
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <p>🎯 Mot / élément clé : <strong>${phrase.target}</strong></p>
            <p>💡 Astuce : ${phrase.hint || phrase.note || "Mémorise bien cette expression pour la prochaine fois !"}</p>
          </div>
        `;
        feedbackBox.classList.remove('hidden');
      }
    }

    // Toggle Action Buttons
    if (verifyBtn) verifyBtn.classList.add('hidden');
    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      nextBtn.focus();
    }

    saveState();
    lucide.createIcons();
  }

  function goToNextPhrase() {
    currentPhraseIndex++;
    if (currentPhraseIndex < currentSessionPhrases.length) {
      renderCurrentPhrase();
    } else {
      showSessionCompletionModal();
    }
  }

  function showSessionCompletionModal() {
    playSound('level');
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });

    const container = document.getElementById('exerciseCard');
    if (!container) return;

    const acc = Math.round((sessionCorrectCount / currentSessionPhrases.length) * 100);

    container.innerHTML = `
      <div class="p-8 sm:p-12 text-center space-y-6">
        <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center mx-auto shadow-xl">
          <i data-lucide="trophy" class="w-10 h-10"></i>
        </div>

        <div class="space-y-2">
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">Session Terminée avec Brio !</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Tu viens de t'entraîner sur 10 phrases clés. Chaque session quotidienne t'approche de la fluidité spontanée C1.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto">
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-center">
            <div class="text-2xl font-black text-rose-600 dark:text-rose-400 font-heading">${sessionCorrectCount}/10</div>
            <div class="text-xs text-slate-400 font-medium">Réussies</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-center">
            <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-heading">${acc}%</div>
            <div class="text-xs text-slate-400 font-medium">Précision</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-center col-span-2 sm:col-span-1">
            <div class="text-2xl font-black text-amber-500 dark:text-amber-400 font-heading">+${sessionCorrectCount * 10} XP</div>
            <div class="text-xs text-slate-400 font-medium">Gagnés</div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button id="restartSessionBtn" class="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 text-white shadow-lg transition flex items-center gap-2">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i>
            <span>Nouvelle série de 10</span>
          </button>
          <button id="backToRoadmapBtn" class="px-5 py-3 rounded-2xl font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-white transition">
            Voir le parcours (30 étapes)
          </button>
        </div>
      </div>
    `;

    lucide.createIcons();

    const restartBtn = document.getElementById('restartSessionBtn');
    if (restartBtn) restartBtn.addEventListener('click', () => startSession(state.currentStepFilter));

    const roadmapBtn = document.getElementById('backToRoadmapBtn');
    if (roadmapBtn) {
      roadmapBtn.addEventListener('click', () => {
        switchTab('roadmap');
      });
    }
  }

  // 11. TAB 3: FLASHCARDS & SRS (LEITNER SYSTEM)
  let flashcardQueue = [];
  let flashcardIndex = 0;
  let isCardFlipped = false;

  function initFlashcards() {
    flashcardQueue = [...ALL_PHRASES].sort(() => Math.random() - 0.5);
    flashcardIndex = 0;
    isCardFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const phrase = flashcardQueue[flashcardIndex];
    if (!phrase) return;

    isCardFlipped = false;
    const inner = document.getElementById('flashcardInner');
    if (inner) inner.classList.remove('rotate-y-180');

    // Front
    const stepBadge = document.getElementById('fcFrontStepBadge');
    if (stepBadge) stepBadge.textContent = phrase.stepBadge || `Étape ${phrase.step}`;

    const french = document.getElementById('fcFrontFrench');
    if (french) french.textContent = phrase.fr;

    // Back
    const levelBadge = document.getElementById('fcBackLevelBadge');
    if (levelBadge) levelBadge.textContent = phrase.level || 'B2';

    const english = document.getElementById('fcBackEnglish');
    if (english) english.textContent = phrase.en;

    const note = document.getElementById('fcBackNote');
    if (note) note.textContent = phrase.note || phrase.hint || "";

    const count = document.getElementById('flashcardDeckCount');
    if (count) count.textContent = `Carte ${flashcardIndex + 1} sur ${flashcardQueue.length}`;
  }

  function flipFlashcard() {
    const inner = document.getElementById('flashcardInner');
    if (!inner) return;
    playSound('click');
    isCardFlipped = !isCardFlipped;
    if (isCardFlipped) {
      inner.classList.add('rotate-y-180');
      const phrase = flashcardQueue[flashcardIndex];
      if (phrase) speakEnglish(phrase.en);
    } else {
      inner.classList.remove('rotate-y-180');
    }
  }

  function handleSRSRating(rating) {
    playSound('click');
    const phrase = flashcardQueue[flashcardIndex];
    if (!phrase) return;

    if (!state.srsCards) state.srsCards = {};
    state.srsCards[phrase.id] = {
      box: rating === 'easy' ? 3 : rating === 'good' ? 2 : 1,
      reviewedAt: Date.now()
    };

    if (rating === 'easy') {
      state.xp += 10;
      saveState();
    }

    flashcardIndex = (flashcardIndex + 1) % flashcardQueue.length;
    renderFlashcard();
  }

  // 12. TAB 4: INTERACTIVE TORONTO DIALOGUES
  let activeDialogue = DIALOGUES[0];
  let activeDialogueLine = 0;

  function renderDialoguePills() {
    const container = document.getElementById('dialoguePillsContainer');
    if (!container) return;
    container.innerHTML = '';

    DIALOGUES.forEach(d => {
      const btn = document.createElement('button');
      btn.className = `dialogue-pill px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${d.id === activeDialogue.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`;
      btn.textContent = d.title;
      btn.addEventListener('click', () => {
        playSound('click');
        activeDialogue = d;
        activeDialogueLine = 0;
        renderDialoguePills();
        renderActiveDialogue();
      });
      container.appendChild(btn);
    });
  }

  function renderActiveDialogue() {
    const container = document.getElementById('activeDialogueContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
        <div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            📍 ${activeDialogue.location}
          </span>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mt-2">${activeDialogue.title}</h3>
          <p class="text-xs text-slate-500">${activeDialogue.description}</p>
        </div>
        <button id="playAllDialogueBtn" class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-100 transition flex items-center gap-1.5">
          <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
          <span>Écouter le dialogue entier</span>
        </button>
      </div>

      <div class="space-y-4 pt-2" id="dialogueLinesList">
        <!-- Lines rendered below -->
      </div>
    `;

    const list = document.getElementById('dialogueLinesList');
    activeDialogue.lines.forEach((line, idx) => {
      const isYou = line.speaker === "You";
      const lineDiv = document.createElement('div');
      lineDiv.className = `p-4 rounded-2xl border transition-all ${isYou ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 ml-4 sm:ml-12' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 mr-4 sm:mr-12'}`;

      lineDiv.innerHTML = `
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="text-xs font-bold ${isYou ? 'text-rose-600 dark:text-rose-400' : 'text-slate-600 dark:text-slate-400'} flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-full ${isYou ? 'bg-rose-500' : 'bg-slate-500'} text-white flex items-center justify-center text-[10px]">
              ${isYou ? '👤' : '🗣️'}
            </span>
            ${line.speaker}
          </span>
          <button data-speak-line="${idx}" class="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-white dark:hover:bg-slate-800 transition" title="Écouter cette réplique">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>
        <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed font-heading">
          "${line.en}"
        </p>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
          🇫🇷 ${line.fr}
        </p>
      `;

      list.appendChild(lineDiv);
    });

    lucide.createIcons();

    // Listen events
    list.querySelectorAll('[data-speak-line]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.speakLine, 10);
        speakEnglish(activeDialogue.lines[idx].en);
      });
    });

    const playAllBtn = document.getElementById('playAllDialogueBtn');
    if (playAllBtn) {
      playAllBtn.addEventListener('click', () => {
        let i = 0;
        function playNext() {
          if (i < activeDialogue.lines.length) {
            speakEnglish(activeDialogue.lines[i].en);
            i++;
            setTimeout(playNext, 3800);
          }
        }
        playNext();
      });
    }
  }

  // 13. TAB 5: MASTER EXPLORER (2 260+ PHRASES)
  let explorerPage = 1;
  const EXPLORER_PAGE_SIZE = 25;
  let filteredExplorerPhrases = [];

  function filterExplorerPhrases() {
    const searchVal = (document.getElementById('explorerSearchInput')?.value || '').toLowerCase().trim();
    const stepVal = document.getElementById('explorerStepFilter')?.value || 'all';
    const levelVal = document.getElementById('explorerLevelFilter')?.value || 'all';
    const onlyFavs = document.getElementById('explorerOnlyFavsBtn')?.classList.contains('active');

    filteredExplorerPhrases = ALL_PHRASES.filter(p => {
      if (stepVal !== 'all' && String(p.step) !== stepVal) return false;
      if (levelVal !== 'all' && p.level !== levelVal) return false;
      if (onlyFavs && !state.favorites.includes(p.id)) return false;
      if (searchVal) {
        const enMatch = p.en.toLowerCase().includes(searchVal);
        const frMatch = p.fr.toLowerCase().includes(searchVal);
        const catMatch = (p.category || '').toLowerCase().includes(searchVal);
        return enMatch || frMatch || catMatch;
      }
      return true;
    });

    explorerPage = 1;
    renderExplorerList();
  }

  function renderExplorerList() {
    const container = document.getElementById('explorerListContainer');
    const countBadge = document.getElementById('explorerResultCount');
    if (!container) return;

    if (countBadge) countBadge.textContent = filteredExplorerPhrases.length;

    container.innerHTML = '';
    if (filteredExplorerPhrases.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center text-slate-400 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          Aucune phrase ne correspond à ces critères. Essaye d'ajuster ta recherche !
        </div>
      `;
      return;
    }

    const start = (explorerPage - 1) * EXPLORER_PAGE_SIZE;
    const pageItems = filteredExplorerPhrases.slice(start, start + EXPLORER_PAGE_SIZE);

    pageItems.forEach(p => {
      const isFav = state.favorites.includes(p.id);
      const row = document.createElement('div');
      row.className = "p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-cyan-400/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3";

      row.innerHTML = `
        <div class="space-y-1 flex-1">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              Étape ${p.step}
            </span>
            <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
              ${p.level}
            </span>
            <span class="text-[11px] text-slate-400 hidden sm:inline">• ${p.category}</span>
          </div>

          <div class="text-base font-bold text-slate-900 dark:text-white font-heading">
            ${p.en}
          </div>
          <div class="text-xs text-slate-500 italic">
            🇫🇷 ${p.fr}
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <button data-speak-id="${p.id}" class="p-2 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-cyan-50 dark:hover:bg-cyan-950 text-slate-600 dark:text-slate-200 hover:text-cyan-600 transition" title="Écouter la prononciation">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
          <button data-fav-id="${p.id}" class="p-2 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-amber-50 text-slate-400 hover:text-amber-500 transition" title="Mettre en favori">
            <i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-amber-400 stroke-amber-400 text-amber-400' : ''}"></i>
          </button>
        </div>
      `;

      container.appendChild(row);
    });

    // Pagination
    renderExplorerPagination();
    lucide.createIcons();

    // Event handlers
    container.querySelectorAll('[data-speak-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.speakId;
        const p = ALL_PHRASES.find(x => x.id === id);
        if (p) speakEnglish(p.en);
      });
    });

    container.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.favId;
        const idx = state.favorites.indexOf(id);
        if (idx === -1) {
          state.favorites.push(id);
        } else {
          state.favorites.splice(idx, 1);
        }
        saveState();
        renderExplorerList();
      });
    });
  }

  function renderExplorerPagination() {
    const pag = document.getElementById('explorerPagination');
    if (!pag) return;
    pag.innerHTML = '';

    const totalPages = Math.ceil(filteredExplorerPhrases.length / EXPLORER_PAGE_SIZE);
    if (totalPages <= 1) return;

    if (explorerPage > 1) {
      const prev = document.createElement('button');
      prev.className = "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 transition";
      prev.textContent = "Précédent";
      prev.addEventListener('click', () => {
        explorerPage--;
        renderExplorerList();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
      pag.appendChild(prev);
    }

    const info = document.createElement('span');
    info.className = "text-xs font-semibold text-slate-500 px-2";
    info.textContent = `Page ${explorerPage} / ${totalPages}`;
    pag.appendChild(info);

    if (explorerPage < totalPages) {
      const next = document.createElement('button');
      next.className = "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 transition";
      next.textContent = "Suivant";
      next.addEventListener('click', () => {
        explorerPage++;
        renderExplorerList();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
      pag.appendChild(next);
    }
  }

  // 14. TAB 6: NOTEBOOK (MON CARNET PERSONNEL)
  function renderNotebookList() {
    const container = document.getElementById('notebookListContainer');
    const badge = document.getElementById('notebookCount');
    if (!container) return;

    if (badge) badge.textContent = state.customPhrases ? state.customPhrases.length : 0;
    container.innerHTML = '';

    if (!state.customPhrases || state.customPhrases.length === 0) {
      container.innerHTML = `
        <p class="text-xs text-slate-400 italic">Aucune phrase personnalisée pour l'instant. Ajoute ta première note ci-dessus !</p>
      `;
      return;
    }

    state.customPhrases.forEach((p, idx) => {
      const item = document.createElement('div');
      item.className = "p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3";
      item.innerHTML = `
        <div class="space-y-1">
          <div class="text-base font-bold text-slate-900 dark:text-white font-heading">${p.en}</div>
          <div class="text-xs text-slate-500 italic">🇫🇷 ${p.fr}</div>
          ${p.note ? `<div class="text-[11px] text-indigo-500">📝 ${p.note}</div>` : ''}
        </div>
        <div class="flex items-center gap-2">
          <button data-speak-custom="${idx}" class="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-white transition">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
          <button data-del-custom="${idx}" class="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-white transition">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      `;
      container.appendChild(item);
    });

    lucide.createIcons();

    container.querySelectorAll('[data-speak-custom]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.speakCustom, 10);
        speakEnglish(state.customPhrases[idx].en);
      });
    });

    container.querySelectorAll('[data-del-custom]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.delCustom, 10);
        state.customPhrases.splice(idx, 1);
        saveState();
        renderNotebookList();
      });
    });
  }

  // 15. TAB 7: STATS & BADGES
  function renderBadges() {
    const container = document.getElementById('badgesContainer');
    if (!container) return;
    container.innerHTML = '';

    BADGES.forEach(b => {
      const isUnlocked = b.condition(state);
      const card = document.createElement('div');
      card.className = `p-4 rounded-2xl border transition-all ${isUnlocked ? 'bg-gradient-to-tr from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-800 border-amber-300 dark:border-amber-700 shadow-sm' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-50'}`;

      card.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="text-3xl p-2 rounded-2xl ${isUnlocked ? 'bg-amber-100 dark:bg-amber-900/40' : 'bg-slate-200 dark:bg-slate-700'}">
            ${b.icon}
          </div>
          <div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">${b.title}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">${b.desc}</p>
            <span class="text-[10px] font-bold ${isUnlocked ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'} uppercase">
              ${isUnlocked ? '✓ Débloqué !' : 'À débloquer'}
            </span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // 16. TAB NAVIGATION LOGIC
  function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => {
      if (b.dataset.tab === tabId) {
        b.classList.add('active', 'border-b-2', 'border-rose-500', 'text-rose-600', 'dark:text-rose-400', 'bg-rose-50/70', 'dark:bg-rose-950/30');
        b.classList.remove('text-slate-600', 'dark:text-slate-400');
      } else {
        b.classList.remove('active', 'border-b-2', 'border-rose-500', 'text-rose-600', 'dark:text-rose-400', 'bg-rose-50/70', 'dark:bg-rose-950/30');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      }
    });

    document.querySelectorAll('.tab-pane').forEach(p => {
      p.classList.toggle('hidden', p.id !== `tab-${tabId}`);
    });

    if (tabId === 'roadmap') renderRoadmap();
    else if (tabId === 'practice' && currentSessionPhrases.length === 0) startSession(state.currentStepFilter);
    else if (tabId === 'flashcards' && flashcardQueue.length === 0) initFlashcards();
    else if (tabId === 'dialogues') { renderDialoguePills(); renderActiveDialogue(); }
    else if (tabId === 'explorer') filterExplorerPhrases();
    else if (tabId === 'notebook') renderNotebookList();
    else if (tabId === 'stats') renderBadges();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 17. INITIALIZATION & GLOBAL EVENT LISTENERS
  document.addEventListener('DOMContentLoaded', () => {
    updateTopBarUI();
    populateStepDropdown();
    renderRoadmap();

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        switchTab(btn.dataset.tab);
      });
    });

    // Dark Mode Toggle
    const darkBtn = document.getElementById('toggleDarkBtn');
    if (darkBtn) {
      darkBtn.addEventListener('click', () => {
        playSound('click');
        state.darkMode = !state.darkMode;
        document.documentElement.classList.toggle('dark', state.darkMode);
        saveState();
      });
    }

    // Audio Mute Toggle
    const audioBtn = document.getElementById('toggleAudioBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        playSound('click');
        saveState();
      });
    }

    // Speed Toggle (cycles 0.8x -> 1.0x -> 1.2x)
    const speedBtn = document.getElementById('toggleSpeedBtn');
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        playSound('click');
        if (state.audioSpeed === 1.0) state.audioSpeed = 1.2;
        else if (state.audioSpeed === 1.2) state.audioSpeed = 0.8;
        else state.audioSpeed = 1.0;
        saveState();
      });
    }

    // Hero buttons
    const heroResume = document.getElementById('heroResumeBtn');
    if (heroResume) {
      heroResume.addEventListener('click', () => {
        switchTab('practice');
        startSession("all");
      });
    }

    const heroExplore = document.getElementById('heroExploreAllBtn');
    if (heroExplore) {
      heroExplore.addEventListener('click', () => {
        switchTab('practice');
        startSession("all");
      });
    }

    // Stage filters in roadmap
    document.querySelectorAll('.stage-filter-btn').forEach(b => {
      b.addEventListener('click', () => {
        playSound('click');
        document.querySelectorAll('.stage-filter-btn').forEach(x => {
          x.classList.remove('active', 'bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-slate-900');
          x.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        });
        b.classList.add('active', 'bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-slate-900');
        b.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        renderRoadmap(b.dataset.stageFilter);
      });
    });

    // Roadmap start step listener
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-start-step]');
      if (target) {
        playSound('click');
        const stepNum = target.dataset.startStep;
        switchTab('practice');
        startSession(stepNum);
      }
    });

    // Practice Step Selector
    const practiceSel = document.getElementById('practiceStepSelect');
    if (practiceSel) {
      practiceSel.addEventListener('change', () => {
        playSound('click');
        startSession(practiceSel.value);
      });
    }

    // Practice Mode Buttons (Tiles, Fill, Voice, Listening)
    document.querySelectorAll('.practice-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        document.querySelectorAll('.practice-mode-btn').forEach(b => {
          b.classList.remove('active', 'bg-rose-600', 'text-white');
          b.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        });
        btn.classList.add('active', 'bg-rose-600', 'text-white');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        state.practiceMode = btn.dataset.practiceMode;
        saveState();
        renderCurrentPhrase();
      });
    });

    // Action buttons in practice card
    const pronounceCardBtn = document.getElementById('pronounceCardBtn');
    if (pronounceCardBtn) {
      pronounceCardBtn.addEventListener('click', () => {
        const p = currentSessionPhrases[currentPhraseIndex];
        if (p) speakEnglish(p.en);
      });
    }

    const hintCardBtn = document.getElementById('hintCardBtn');
    if (hintCardBtn) {
      hintCardBtn.addEventListener('click', () => {
        playSound('click');
        const hintBox = document.getElementById('hintBox');
        if (hintBox) hintBox.classList.toggle('hidden');
      });
    }

    const bookmarkCardBtn = document.getElementById('bookmarkCardBtn');
    if (bookmarkCardBtn) {
      bookmarkCardBtn.addEventListener('click', () => {
        playSound('click');
        const p = currentSessionPhrases[currentPhraseIndex];
        if (!p) return;
        const idx = state.favorites.indexOf(p.id);
        if (idx === -1) state.favorites.push(p.id);
        else state.favorites.splice(idx, 1);
        saveState();
        const star = document.getElementById('bookmarkIcon');
        if (star) {
          const isFav = state.favorites.includes(p.id);
          star.className = isFav ? "w-4 h-4 fill-amber-400 stroke-amber-400 text-amber-400" : "w-4 h-4";
        }
      });
    }

    const verifyBtn = document.getElementById('verifyBtn');
    if (verifyBtn) verifyBtn.addEventListener('click', verifyCurrentAnswer);

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.addEventListener('click', goToNextPhrase);

    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) skipBtn.addEventListener('click', goToNextPhrase);

    // Keyboard shortcut (Enter)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const practiceSection = document.getElementById('tab-practice');
        if (practiceSection && !practiceSection.classList.contains('hidden')) {
          if (!isCurrentAnswerChecked) verifyCurrentAnswer();
          else goToNextPhrase();
        }
      } else if (e.code === 'Space') {
        const fcSection = document.getElementById('tab-flashcards');
        if (fcSection && !fcSection.classList.contains('hidden') && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          flipFlashcard();
        }
      }
    });

    // Flashcard Flip & SRS
    const fcInner = document.getElementById('flashcardInner');
    if (fcInner) fcInner.addEventListener('click', flipFlashcard);

    const fcSpeak = document.getElementById('fcSpeakBtn');
    if (fcSpeak) {
      fcSpeak.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = flashcardQueue[flashcardIndex];
        if (p) speakEnglish(p.en);
      });
    }

    const srsHard = document.getElementById('srsHardBtn');
    if (srsHard) srsHard.addEventListener('click', () => handleSRSRating('hard'));
    const srsGood = document.getElementById('srsGoodBtn');
    if (srsGood) srsGood.addEventListener('click', () => handleSRSRating('good'));
    const srsEasy = document.getElementById('srsEasyBtn');
    if (srsEasy) srsEasy.addEventListener('click', () => handleSRSRating('easy'));

    // Explorer live search and filters
    const expSearch = document.getElementById('explorerSearchInput');
    if (expSearch) expSearch.addEventListener('input', filterExplorerPhrases);

    const expStep = document.getElementById('explorerStepFilter');
    if (expStep) expStep.addEventListener('change', filterExplorerPhrases);

    const expLevel = document.getElementById('explorerLevelFilter');
    if (expLevel) expLevel.addEventListener('change', filterExplorerPhrases);

    const expFavs = document.getElementById('explorerOnlyFavsBtn');
    if (expFavs) {
      expFavs.addEventListener('click', () => {
        expFavs.classList.toggle('active');
        expFavs.classList.toggle('bg-amber-100');
        expFavs.classList.toggle('text-amber-800');
        filterExplorerPhrases();
      });
    }

    // Custom phrase form
    const customForm = document.getElementById('customPhraseForm');
    if (customForm) {
      customForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const en = document.getElementById('customEn').value.trim();
        const fr = document.getElementById('customFr').value.trim();
        const target = document.getElementById('customTarget').value.trim();
        const category = document.getElementById('customCategory').value.trim() || 'My Notes';
        const note = document.getElementById('customNote').value.trim();

        if (!en || !fr) return;

        const newPhrase = {
          id: `custom_${Date.now()}`,
          step: 1,
          stepTitle: "Mes Phrases Personnalisées",
          stepBadge: "📝 Mon Carnet",
          level: "Custom",
          category,
          en,
          fr,
          target: target || en.split(' ')[0],
          prefix: en.substring(0, en.indexOf(target)),
          suffix: en.substring(en.indexOf(target) + (target ? target.length : 0)),
          hint: note || "Phrase personnelle ajoutée",
          note,
          tiles: en.split(/\s+/).sort(() => Math.random() - 0.5)
        };

        state.customPhrases.unshift(newPhrase);
        state.xp += 20;
        saveState();
        customForm.reset();
        renderNotebookList();
        playSound('success');
      });
    }

    // Data Export / Import
    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const dl = document.createElement('a');
        dl.setAttribute("href", dataStr);
        dl.setAttribute("download", `the6ix_english_master_backup_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(dl);
        dl.click();
        dl.remove();
      });
    }

    const importBtn = document.getElementById('importDataBtn');
    const importFileInput = document.getElementById('importFileInput');
    if (importBtn && importFileInput) {
      importBtn.addEventListener('click', () => importFileInput.click());
      importFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const imported = JSON.parse(evt.target.result);
            Object.assign(state, imported);
            saveState();
            location.reload();
          } catch (err) {
            alert("Erreur lors de la lecture du fichier JSON.");
          }
        };
        reader.readAsText(file);
      });
    }

    // Reset Progress
    const resetBtn = document.getElementById('resetProgressBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm("Es-tu sûre de vouloir réinitialiser toutes tes statistiques et ton XP ?")) {
          localStorage.removeItem(STORAGE_KEY);
          location.reload();
        }
      });
    }
  });

})();
