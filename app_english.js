/* ==========================================================================
   THE 6IX TO FLUENCY — TORONTO ENGLISH MASTER APPLICATION
   Robust, Interactive Client Engine with 30-Step Curriculum & Custom Builder
   ========================================================================== */

(function () {
  'use strict';

  // 1. SAFE ICONS & UTILITIES
  function safeCreateIcons() {
    if (typeof window.lucide !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
      try {
        window.lucide.createIcons();
      } catch (e) {
        // Silent catch for non-fatal icon errors
      }
    }
  }

  // 2. DATA ACCESS WITH FALLBACK
  const FALLBACK_PHRASES = [
    {
      id: "s1_fb1",
      step: 1,
      stepTitle: "Casual Greetings & Toronto Small Talk",
      stepBadge: "👋 Étape 1",
      level: "A2-B1",
      category: "Small Talk & Social",
      en: "Hey, how's it going with you today?",
      fr: "Salut, comment ça va pour toi aujourd'hui ?",
      target: "how's it going with you",
      prefix: "Hey, ",
      suffix: " today?",
      hint: "'How's it going' est la salutation reine au Canada.",
      note: "Bien plus courant et chaleureux que 'How do you do'.",
      distractors: ["how do you do with", "what are you feeling"],
      tiles: ["Hey", "how's", "it", "going", "with", "you", "today"]
    },
    {
      id: "s1_fb2",
      step: 1,
      stepTitle: "Casual Greetings & Toronto Small Talk",
      stepBadge: "👋 Étape 1",
      level: "A2-B1",
      category: "Small Talk & Social",
      en: "I'm doing well, thanks for asking! How about yourself?",
      fr: "Je vais bien, merci de demander ! Et toi de ton côté ?",
      target: "thanks for asking! How about yourself",
      prefix: "I'm doing well, ",
      suffix: "?",
      hint: "Politesse réciproque naturelle au quotidien.",
      note: "'How about yourself?' renvoie chaleureusement la question.",
      distractors: ["cheers for saying! And your self", "thank you asking! What about you"],
      tiles: ["I'm", "doing", "well", "thanks", "for", "asking", "How", "about", "yourself"]
    },
    {
      id: "s3_fb1",
      step: 3,
      stepTitle: "Coffee Culture & Ordering",
      stepBadge: "☕ Étape 3",
      level: "A2-B1",
      category: "Food & Cafés",
      en: "Can I get a medium double-double and an iced latte?",
      fr: "Puis-je avoir un café moyen deux crèmes deux sucres et un latte glacé ?",
      target: "Can I get a medium double-double",
      prefix: "",
      suffix: " and an iced latte?",
      hint: "Au Canada, 'double-double' signifie 2 crèmes, 2 sucres.",
      note: "Commande emblématique chez Tim Hortons ou n'importe quel café ontarien.",
      distractors: ["May I take two cream two sugar", "Could I have a twice sweet twice milk"],
      tiles: ["Can", "I", "get", "a", "medium", "double-double", "and", "an", "iced", "latte"]
    }
  ];

  function getSteps() {
    return (window.TORONTO_ENGLISH_STEPS && Array.isArray(window.TORONTO_ENGLISH_STEPS) && window.TORONTO_ENGLISH_STEPS.length > 0)
      ? window.TORONTO_ENGLISH_STEPS
      : Array.from({ length: 30 }, (_, i) => ({
          step: i + 1,
          title: `Étape ${i + 1}`,
          level: i < 10 ? "A2-B1" : i < 20 ? "B2" : "C1",
          category: "Toronto English",
          badge: `Étape ${i + 1}`,
          tip: "Pratique régulière quotidienne.",
          culture: "Toronto vibes."
        }));
  }

  function getAllPhrases() {
    if (window.TORONTO_ENGLISH_PHRASES && Array.isArray(window.TORONTO_ENGLISH_PHRASES) && window.TORONTO_ENGLISH_PHRASES.length > 0) {
      return window.TORONTO_ENGLISH_PHRASES;
    }
    return FALLBACK_PHRASES;
  }

  // 3. DIALOGUES TORONTO DATA
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
      title: "🏡 Downtown Condo Life & Concierge",
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

  // 4. BADGES CATALOG
  const BADGES = [
    { id: "b_first", title: "Premier Pas", icon: "🌱", desc: "Avoir répondu à sa première phrase", condition: s => s.answersCount >= 1 },
    { id: "b_10", title: "En Route vers Toronto", icon: "🏙️", desc: "10 phrases réussies", condition: s => s.answersCount >= 10 },
    { id: "b_50", title: "Club des 50", icon: "🎯", desc: "50 phrases pratiquées", condition: s => s.answersCount >= 50 },
    { id: "b_100", title: "Centurion de la Langue", icon: "💯", desc: "100 phrases maîtrisées", condition: s => s.answersCount >= 100 },
    { id: "b_streak3", title: "Régularité de Bronze", icon: "🥉", desc: "3 jours consécutifs d'entraînement", condition: s => s.streak >= 3 },
    { id: "b_streak7", title: "Série d'Or : 7 Jours", icon: "🔥", desc: "Une semaine entière de pratique quotidienne", condition: s => s.streak >= 7 },
    { id: "b_streak14", title: "Discipline de Fer", icon: "⚔️", desc: "14 jours consécutifs sans faillir", condition: s => s.streak >= 14 },
    { id: "b_custom", title: "Autrice Passionnée", icon: "📝", desc: "Avoir ajouté au moins 3 phrases personnelles", condition: s => (s.customPhrases || []).length >= 3 },
    { id: "b_stage0", title: "Bases Solides A1-A2", icon: "🌱", desc: "Avoir pratiqué 5 étapes du Palier 1 (Bases 1-10)", condition: s => s.completedSteps.filter(x => x <= 10).length >= 5 },
    { id: "b_stage1", title: "Maître du Quotidien", icon: "👋", desc: "Avoir pratiqué 5 étapes du Palier 2 (Étapes 11-20)", condition: s => s.completedSteps.filter(x => x >= 11 && x <= 20).length >= 5 },
    { id: "b_stage2", title: "Fluidité Professionnelle B2", icon: "💼", desc: "Avoir terminé 5 étapes du Palier 3 (Étapes 21-30)", condition: s => s.completedSteps.filter(x => x >= 21 && x <= 30).length >= 5 },
    { id: "b_c1", title: "Éloquence & Nuance C1", icon: "🧠", desc: "Avoir pratiqué des phrases du Palier 4 (Étapes 31-40)", condition: s => s.completedSteps.some(x => x >= 31) },
    { id: "b_master", title: "True Native Flow", icon: "👑", desc: "Atteindre 1 000 points d'XP", condition: s => s.xp >= 1000 }
  ];

  // 5. APPLICATION STATE & LOCALSTORAGE
  const STORAGE_KEY = "toronto_english_master_state_v4";
  const VALID_PRACTICE_MODES = ["fill", "qcm", "tiles", "writing", "listening", "voice"];
  const LEGACY_MODE_MAP = {
    cloze: "fill",
    mcq: "qcm",
    translate: "writing",
    dictation: "listening",
    pronunciation: "voice"
  };

  function normalizePracticeMode(m) {
    if (!m) return "fill";
    if (LEGACY_MODE_MAP[m]) return LEGACY_MODE_MAP[m];
    if (VALID_PRACTICE_MODES.includes(m)) return m;
    return "fill";
  }

  function loadState() {
    try {
      const savedV4 = localStorage.getItem(STORAGE_KEY);
      const legacySaved = !savedV4 && (localStorage.getItem("toronto_english_master_state_v3") || localStorage.getItem("toronto_english_master_state_v2") || localStorage.getItem("toronto_english_master_state_v1"));
      const saved = savedV4 || legacySaved;
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          let stepFilter = savedV4 ? String(parsed.currentStepFilter || "1") : "1";
          if (stepFilter !== "all" && stepFilter !== "custom") {
            const num = parseInt(stepFilter, 10);
            if (isNaN(num) || num < 1 || num > 40) stepFilter = "1";
          }
          return {
            xp: parsed.xp || 0,
            streak: parsed.streak || 1,
            lastActiveDate: parsed.lastActiveDate || new Date().toISOString().slice(0, 10),
            answersCount: parsed.answersCount || 0,
            correctCount: parsed.correctCount || 0,
            completedSteps: savedV4 && Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [],
            stepProgress: (savedV4 && parsed.stepProgress && typeof parsed.stepProgress === 'object') ? parsed.stepProgress : {},
            favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
            mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
            customPhrases: Array.isArray(parsed.customPhrases) ? parsed.customPhrases : [],
            srsCards: (parsed.srsCards && typeof parsed.srsCards === 'object') ? parsed.srsCards : {},
            audioSpeed: parsed.audioSpeed || 1.0,
            soundEnabled: parsed.soundEnabled !== false,
            darkMode: Boolean(parsed.darkMode),
            currentStepFilter: stepFilter,
            practiceMode: normalizePracticeMode(parsed.practiceMode)
          };
        }
      }
    } catch (e) {
      console.warn("Could not load state:", e);
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
      srsCards: {},
      audioSpeed: 1.0,
      soundEnabled: true,
      darkMode: false,
      currentStepFilter: "1",
      practiceMode: "fill"
    };
  }

  const state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
    updateTopBarUI();
  }

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
        state.streak = 1;
      }
      state.lastActiveDate = today;
      saveState();
    }
  }
  checkDailyStreak();

  // 6. SYNTHESIZED SOUND EFFECTS
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
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0.12, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.28);
        });
      } else if (type === 'error') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(349.23, now);
        osc.frequency.exponentialRampToValueAtTime(261.63, now + 0.22);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'level') {
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.18, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.38);
        });
      }
    } catch (e) {
      // Audio failure fallback
    }
  }

  // 7. WEB SPEECH API (ENGLISH PRONUNCIATION)
  let preferredVoice = null;
  function initVoices() {
    if (!('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices();
      preferredVoice = voices.find(v => v.lang === 'en-CA') ||
        voices.find(v => v.lang === 'en-US' && (v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Aria'))) ||
        voices.find(v => v.lang.startsWith('en-US')) ||
        voices.find(v => v.lang.startsWith('en')) ||
        null;
    } catch (e) {}
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = initVoices;
    initVoices();
  }

  function speakEnglish(text, rateOverride) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-CA';
      if (preferredVoice) utterance.voice = preferredVoice;
      utterance.rate = rateOverride || state.audioSpeed || 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech error:", e);
    }
  }

  // 8. STRING NORMALIZATION FOR SMART CHECKING
  function cleanStr(s) {
    if (!s) return "";
    return s.trim()
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[.,!?;:"()\-]/g, "")
      .replace(/\s+/g, " ");
  }

  function calculateSimilarity(str1, str2) {
    const s1 = cleanStr(str1);
    const s2 = cleanStr(str2);
    if (s1 === s2) return 1.0;
    const words1 = s1.split(/\s+/).filter(Boolean);
    const words2 = s2.split(/\s+/).filter(Boolean);
    if (words1.length === 0 || words2.length === 0) return 0;
    let matches = 0;
    words1.forEach(w => {
      if (words2.includes(w)) matches++;
    });
    return matches / Math.max(words1.length, words2.length);
  }

  // 9. TOP BAR & STATS DISPLAY
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
      soundIcon.textContent = state.soundEnabled ? '🔔' : '🔕';
    }

    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      themeIcon.textContent = state.darkMode ? '☀️' : '🌙';
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

    const notebookCount = document.getElementById('notebookCount');
    if (notebookCount) notebookCount.textContent = (state.customPhrases || []).length;
  }

  // Dark mode initial application
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 10. STEP SELECTORS & HORIZONTAL PILLS BAR
  function renderStepSelectors() {
    const sel = document.getElementById('practiceStepSelect');
    const pillBar = document.getElementById('quickStepPills');
    const expSel = document.getElementById('explorerStepFilter');
    const fcSel = document.getElementById('flashcardStepSelect');
    const STEPS = getSteps();

    // 1. Practice dropdown
    if (sel) {
      sel.innerHTML = `
        <option value="all">🌐 Toutes les 40 étapes (Mélange complet)</option>
        <option value="custom">⭐ Mes phrases personnalisées (${(state.customPhrases || []).length})</option>
      `;
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = String(s.step);
        const prefix = s.step <= 10 ? "🌱 " : "";
        opt.textContent = `${prefix}Étape ${s.step} : ${s.title} (${s.level})`;
        sel.appendChild(opt);
      });
      sel.value = state.currentStepFilter || "1";
    }

    // 2. Explorer dropdown
    if (expSel) {
      expSel.innerHTML = `
        <option value="all">Toutes les étapes (1 à 40)</option>
        <option value="custom">⭐ Mes phrases personnalisées (${(state.customPhrases || []).length})</option>
      `;
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = String(s.step);
        const prefix = s.step <= 10 ? "🌱 " : "";
        opt.textContent = `${prefix}Étape ${s.step} : ${s.title}`;
        expSel.appendChild(opt);
      });
    }

    // 3. Flashcards dropdown
    if (fcSel) {
      fcSel.innerHTML = `
        <option value="all">Toutes les étapes (1 à 40)</option>
        <option value="custom">⭐ Mes phrases (${(state.customPhrases || []).length})</option>
      `;
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = String(s.step);
        opt.textContent = `${s.step <= 10 ? '🌱 ' : ''}Étape ${s.step} (${s.level})`;
        fcSel.appendChild(opt);
      });
    }

    // 4. Quick horizontal pill bar
    if (pillBar) {
      pillBar.innerHTML = '';

      // All pill
      const allPill = document.createElement('button');
      allPill.type = 'button';
      allPill.dataset.stepPill = 'all';
      allPill.className = `quick-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${state.currentStepFilter === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'}`;
      allPill.textContent = '🌐 Toutes';
      allPill.addEventListener('click', () => selectStep('all'));
      pillBar.appendChild(allPill);

      // Custom pill
      const customPill = document.createElement('button');
      customPill.type = 'button';
      customPill.dataset.stepPill = 'custom';
      customPill.className = `quick-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${state.currentStepFilter === 'custom' ? 'bg-indigo-600 text-white shadow-md' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'}`;
      customPill.textContent = `⭐ Mes phrases (${(state.customPhrases || []).length})`;
      customPill.addEventListener('click', () => selectStep('custom'));
      pillBar.appendChild(customPill);

      // 1 to 40 pills
      STEPS.forEach(s => {
        const isSelected = String(s.step) === String(state.currentStepFilter);
        const isCompleted = state.completedSteps.includes(s.step);
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.dataset.stepPill = String(s.step);
        pill.className = `quick-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${
          isSelected 
            ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400/50' 
            : (isCompleted 
                ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200')
        }`;
        const iconPrefix = isCompleted ? '✓ ' : (s.step <= 10 ? '🌱 ' : '');
        pill.innerHTML = `${iconPrefix}Étape ${s.step}`;
        pill.addEventListener('click', () => selectStep(String(s.step)));
        pillBar.appendChild(pill);
      });
    }
  }

  function selectStep(stepKey, preferredFirstPhrase = null) {
    playSound('click');
    state.currentStepFilter = String(stepKey);
    saveState();

    const sel = document.getElementById('practiceStepSelect');
    if (sel) sel.value = String(stepKey);

    // Update pill styles
    document.querySelectorAll('#quickStepPills .quick-pill').forEach(btn => {
      const isSel = btn.dataset.stepPill === String(stepKey);
      if (btn.dataset.stepPill === 'all') {
        btn.className = `quick-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${isSel ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'}`;
      } else if (btn.dataset.stepPill === 'custom') {
        btn.className = `quick-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${isSel ? 'bg-indigo-600 text-white shadow-md' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'}`;
      } else {
        const num = parseInt(btn.dataset.stepPill, 10);
        const isDone = state.completedSteps.includes(num);
        btn.className = `quick-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${
          isSel 
            ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400/50' 
            : (isDone 
                ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200')
        }`;
      }
    });

    startSession(stepKey, preferredFirstPhrase);
  }

  // 11. EXERCISE SESSION ENGINE
  let currentSessionPhrases = [];
  let currentPhraseIndex = 0;
  let isCurrentAnswerChecked = false;
  let sessionCorrectCount = 0;
  let activeSelectedTiles = [];
  let currentSelectedQCMOption = null;

  function startSession(stepFilter, preferredFirstPhrase) {
    const filter = String(stepFilter !== undefined ? stepFilter : (state.currentStepFilter || "1"));
    state.currentStepFilter = filter;

    const allPhrases = getAllPhrases();
    let pool = [];

    if (filter === "custom") {
      pool = [...(state.customPhrases || [])];
      if (pool.length === 0) {
        showCustomNoticeInArena();
        return;
      }
    } else if (filter === "all") {
      pool = [...allPhrases, ...(state.customPhrases || [])];
    } else {
      const num = parseInt(filter, 10);
      pool = allPhrases.filter(p => p.step === num);
      if (pool.length === 0) {
        pool = allPhrases.slice(0, 15);
      }
    }

    // Shuffle and pick up to 10 phrases with unique target expressions so a session never repeats the same expression
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = [];
    const usedTargets = new Set();

    if (preferredFirstPhrase) {
      selected.push(preferredFirstPhrase);
      usedTargets.add((preferredFirstPhrase.target || preferredFirstPhrase.en).toLowerCase());
    }

    for (const item of shuffled) {
      if (selected.length >= 10) break;
      const tKey = (item.target || item.en).toLowerCase();
      if (!usedTargets.has(tKey)) {
        usedTargets.add(tKey);
        selected.push(item);
      }
    }

    // If custom pool had fewer than 10 unique targets, fill from remaining shuffled items
    if (selected.length < Math.min(10, shuffled.length)) {
      for (const item of shuffled) {
        if (selected.length >= 10) break;
        if (!selected.includes(item)) selected.push(item);
      }
    }

    currentSessionPhrases = selected;
    currentPhraseIndex = 0;
    sessionCorrectCount = 0;
    isCurrentAnswerChecked = false;
    currentSelectedQCMOption = null;

    // Show question view, hide completion view
    const qView = document.getElementById('exerciseQuestionView');
    const cView = document.getElementById('sessionCompletionView');
    if (qView) qView.classList.remove('hidden');
    if (cView) cView.classList.add('hidden');

    renderCurrentPhrase();
  }

  function showCustomNoticeInArena() {
    const container = document.getElementById('interactiveZone');
    const frenchPrompt = document.getElementById('frenchPromptText');
    if (frenchPrompt) frenchPrompt.textContent = "Aucune phrase personnalisée pour l'instant !";
    if (container) {
      container.innerHTML = `
        <div class="p-6 text-center space-y-4 bg-indigo-50/60 dark:bg-indigo-950/40 rounded-2xl border border-indigo-200 dark:border-indigo-800">
          <p class="text-sm font-semibold text-indigo-900 dark:text-indigo-200">
            Tu n'as pas encore ajouté de phrases dans ton catalogue.
          </p>
          <button id="goAddPhrasesNowBtn" type="button" class="px-5 py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white text-xs shadow-md transition">
            ➕ Ajouter ma première phrase maintenant
          </button>
        </div>
      `;
      const btn = document.getElementById('goAddPhrasesNowBtn');
      if (btn) btn.addEventListener('click', () => switchTab('notebook'));
    }
  }

  function renderCurrentPhrase() {
    if (!currentSessionPhrases || currentSessionPhrases.length === 0) return;
    const phrase = currentSessionPhrases[currentPhraseIndex];
    if (!phrase) return;

    isCurrentAnswerChecked = false;
    activeSelectedTiles = [];
    currentSelectedQCMOption = null;

    // Make sure question view is active
    const qView = document.getElementById('exerciseQuestionView');
    const cView = document.getElementById('sessionCompletionView');
    if (qView) qView.classList.remove('hidden');
    if (cView) cView.classList.add('hidden');

    // Badges
    const stepBadge = document.getElementById('cardStepBadge');
    if (stepBadge) stepBadge.textContent = phrase.stepBadge || `Étape ${phrase.step} : ${phrase.stepTitle || ''}`;

    const levelBadge = document.getElementById('cardLevelBadge');
    if (levelBadge) levelBadge.textContent = phrase.level || 'B2';

    const catBadge = document.getElementById('cardCategoryBadge');
    if (catBadge) catBadge.textContent = phrase.category || 'Toronto Life';

    // Bookmark (Safe textContent update - never mutates SVG className)
    const isFav = state.favorites.includes(phrase.id);
    const star = document.getElementById('bookmarkIcon');
    if (star) {
      star.textContent = isFav ? "⭐ Favori" : "☆ Favori";
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

    // Feedback
    const feedbackBox = document.getElementById('feedbackContainer');
    if (feedbackBox) {
      feedbackBox.classList.add('hidden');
      feedbackBox.innerHTML = '';
    }

    // Buttons
    const verifyBtn = document.getElementById('verifyBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (verifyBtn) verifyBtn.classList.remove('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

    renderInteractiveMode(phrase);
    safeCreateIcons();
  }

  function renderInteractiveMode(phrase) {
    const container = document.getElementById('interactiveZone');
    if (!container) return;
    container.innerHTML = '';

    const mode = normalizePracticeMode(state.practiceMode);

    // Build distractors list
    const target = phrase.target || phrase.en.split(' ')[0];
    const d1 = (phrase.distractors && phrase.distractors[0]) ? phrase.distractors[0] : "instead of this";
    const d2 = (phrase.distractors && phrase.distractors[1]) ? phrase.distractors[1] : "beside that";
    const options = [target, d1, d2].sort(() => Math.random() - 0.5);

    // MODE 2: QCM EXPRESS (3 CHOIX EN 1 CLIC)
    if (mode === 'qcm') {
      const prefix = phrase.prefix !== undefined ? phrase.prefix : "";
      const suffix = phrase.suffix !== undefined ? phrase.suffix : "";

      const wrapper = document.createElement('div');
      wrapper.className = "space-y-4";
      wrapper.innerHTML = `
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-base sm:text-lg font-bold leading-relaxed shadow-sm">
          <span>${prefix}</span>
          <span class="px-3 py-1 mx-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">______</span>
          <span>${suffix}</span>
        </div>

        <div class="space-y-2 pt-2">
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-400">Clique sur la bonne option :</label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="qcmGrid">
            ${options.map(opt => `
              <button type="button" class="qcm-opt-btn p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-extrabold text-sm sm:text-base text-left transition transform active:scale-95 shadow-sm" data-val="${opt.replace(/"/g, '&quot;')}">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      container.appendChild(wrapper);

      container.querySelectorAll('.qcm-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (isCurrentAnswerChecked) return;
          playSound('click');
          currentSelectedQCMOption = btn.dataset.val;
          container.querySelectorAll('.qcm-opt-btn').forEach(b => b.classList.remove('ring-4', 'ring-rose-400', 'border-rose-500'));
          btn.classList.add('ring-4', 'ring-rose-400', 'border-rose-500');
          verifyCurrentAnswer();
        });
      });

    // MODE 3: TILES / SENTENCE BUILDER (MOTS À ASSEMBLER AVEC TOUS LES MOTS)
    } else if (mode === 'tiles') {
      const sentenceWords = phrase.en.split(/\s+/).filter(Boolean);
      let availableTokens = sentenceWords
        .map((w, idx) => ({ id: `token_${idx}`, word: w }))
        .sort(() => Math.random() - 0.5);
      activeSelectedTiles = [];

      const wrapper = document.createElement('div');
      wrapper.className = "space-y-4";
      wrapper.innerHTML = `
        <div class="space-y-1.5">
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-400">Assemble les mots dans le bon ordre :</label>
          <div id="placedTilesArea" class="min-h-[64px] p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap gap-2 items-center">
            <span id="tilesPlaceholder" class="text-xs text-slate-400 italic">Clique sur les mots ci-dessous pour construire la phrase...</span>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs text-slate-400 pt-1">
          <span>Mots disponibles :</span>
          <button id="clearTilesBtn" type="button" class="text-xs font-bold text-rose-500 hover:text-rose-600 transition">
            🔄 Réinitialiser
          </button>
        </div>

        <div id="poolTilesArea" class="flex flex-wrap gap-2 pt-1">
          <!-- Chips -->
        </div>
      `;

      container.appendChild(wrapper);

      const placedArea = document.getElementById('placedTilesArea');
      const poolArea = document.getElementById('poolTilesArea');

      function updateTilesUI() {
        if (!placedArea || !poolArea) return;
        placedArea.innerHTML = '';
        if (activeSelectedTiles.length === 0) {
          placedArea.innerHTML = '<span class="text-xs text-slate-400 italic">Clique sur les mots ci-dessous pour construire la phrase...</span>';
        } else {
          activeSelectedTiles.forEach((token, index) => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = "px-3.5 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm shadow-md hover:bg-rose-600 transition flex items-center gap-1.5";
            chip.innerHTML = `<span>${token.word}</span> <span class="text-[10px] opacity-60">✕</span>`;
            chip.addEventListener('click', () => {
              if (isCurrentAnswerChecked) return;
              playSound('click');
              activeSelectedTiles.splice(index, 1);
              availableTokens.push(token);
              updateTilesUI();
            });
            placedArea.appendChild(chip);
          });
        }

        poolArea.innerHTML = '';
        availableTokens.forEach((token, index) => {
          const chip = document.createElement('button');
          chip.type = 'button';
          chip.className = "px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-sm hover:border-rose-400 transition active:scale-95";
          chip.textContent = token.word;
          chip.addEventListener('click', () => {
            if (isCurrentAnswerChecked) return;
            playSound('click');
            availableTokens.splice(index, 1);
            activeSelectedTiles.push(token);
            updateTilesUI();
          });
          poolArea.appendChild(chip);
        });
      }

      updateTilesUI();

      const clearBtn = document.getElementById('clearTilesBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          if (isCurrentAnswerChecked) return;
          playSound('click');
          availableTokens = sentenceWords.map((w, idx) => ({ id: `token_${idx}`, word: w })).sort(() => Math.random() - 0.5);
          activeSelectedTiles = [];
          updateTilesUI();
        });
      }

    // MODE 4: FULL WRITING (TRADUCTION LIBRE AU CLAVIER + BARRE DE CONTRACTIONS)
    } else if (mode === 'writing') {
      const contractions = ["I'm", "don't", "can't", "it's", "we're", "you're", "I'd", "I'll", "didn't", "wouldn't"];
      const wrapper = document.createElement('div');
      wrapper.className = "space-y-3";
      wrapper.innerHTML = `
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-400">Écris la phrase complète en anglais :</label>
        <textarea id="writingInput" rows="2" placeholder="Tape la phrase en anglais ici..." class="w-full p-4 rounded-2xl border-2 border-slate-300 dark:border-slate-600 focus:border-rose-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-base outline-none shadow-sm transition"></textarea>
        <div class="pt-1">
          <span class="block text-[11px] font-bold text-slate-400 mb-1.5">Insertion rapide de contractions anglaises :</span>
          <div class="flex flex-wrap gap-1.5" id="contractionBar">
            ${contractions.map(c => `<button type="button" class="contraction-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-slate-800 dark:text-slate-100 font-bold text-xs transition" data-insert="${c}">${c}</button>`).join('')}
          </div>
        </div>
      `;
      container.appendChild(wrapper);

      const writingInput = document.getElementById('writingInput');
      if (writingInput) {
        setTimeout(() => writingInput.focus(), 60);
        writingInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            if (!isCurrentAnswerChecked) verifyCurrentAnswer();
            else goToNextPhrase();
          }
        });
      }

      container.querySelectorAll('.contraction-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!writingInput || isCurrentAnswerChecked) return;
          playSound('click');
          const txt = btn.dataset.insert + " ";
          const start = writingInput.selectionStart || writingInput.value.length;
          const end = writingInput.selectionEnd || writingInput.value.length;
          const v = writingInput.value;
          writingInput.value = v.substring(0, start) + txt + v.substring(end);
          writingInput.focus();
        });
      });

    // MODE 5: LISTENING DICTATION (DICTÉE À L'OREILLE)
    } else if (mode === 'listening') {
      const wrapper = document.createElement('div');
      wrapper.className = "space-y-5 text-center py-2";
      wrapper.innerHTML = `
        <div class="flex items-center justify-center gap-4">
          <button id="playAudioDictationBtn" type="button" class="px-5 py-3.5 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition text-sm font-bold">
            <span>🔊 Écouter l'audio</span>
          </button>
          <button id="playSlowDictationBtn" type="button" class="px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 flex items-center gap-1.5 transition text-xs font-bold">
            <span>🐢 Écouter lentement (0.75x)</span>
          </button>
        </div>

        <div class="max-w-xl mx-auto">
          <input type="text" id="dictationInput" autocomplete="off" placeholder="Écris la phrase que tu entends..." class="w-full text-center px-4 py-3.5 rounded-2xl border-2 border-slate-300 dark:border-slate-600 focus:border-rose-500 bg-white dark:bg-slate-900 font-bold text-base sm:text-lg outline-none shadow-sm transition">
        </div>
      `;
      container.appendChild(wrapper);

      const playBtn = document.getElementById('playAudioDictationBtn');
      if (playBtn) {
        playBtn.addEventListener('click', () => speakEnglish(phrase.en));
      }

      const slowBtn = document.getElementById('playSlowDictationBtn');
      if (slowBtn) {
        slowBtn.addEventListener('click', () => speakEnglish(phrase.en, 0.75));
      }

      const dictInput = document.getElementById('dictationInput');
      if (dictInput) {
        setTimeout(() => dictInput.focus(), 60);
        dictInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (!isCurrentAnswerChecked) verifyCurrentAnswer();
            else goToNextPhrase();
          }
        });
      }

      setTimeout(() => speakEnglish(phrase.en), 250);

    // MODE 6: VOICE SHADOWING & PRONUNCIATION
    } else if (mode === 'voice') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
      const hasMic = Boolean(SpeechRecognition);

      const wrapper = document.createElement('div');
      wrapper.className = "space-y-5 text-center py-2";
      wrapper.innerHTML = `
        <div class="space-y-1">
          <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading">
            "${phrase.en}"
          </div>
          <p class="text-xs text-slate-400">Écoute le modèle natif puis répète au micro.</p>
        </div>

        <div class="flex items-center justify-center gap-3">
          <button id="listenVoicePromptBtn" type="button" class="px-4 py-2.5 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition text-xs flex items-center gap-1.5">
            <span>🔊 Écouter le modèle</span>
          </button>

          ${hasMic ? `
            <button id="micRecordBtn" type="button" class="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 hover:from-rose-600 text-white shadow-xl flex items-center justify-center active:scale-95 transition text-xl font-bold">
              🎙️
            </button>
          ` : `
            <div class="p-3 rounded-xl bg-amber-50 text-amber-800 text-xs font-semibold">
              Microphone accessible sur Google Chrome / Edge
            </div>
          `}
        </div>

        <div id="voiceTranscriptArea" class="hidden p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm space-y-1">
          <p id="voiceTranscriptText" class="font-bold text-slate-800 dark:text-slate-100 italic"></p>
          <div id="voiceAccuracyScore" class="text-xs font-extrabold text-emerald-600"></div>
        </div>
      `;

      container.appendChild(wrapper);

      const listenBtn = document.getElementById('listenVoicePromptBtn');
      if (listenBtn) listenBtn.addEventListener('click', () => speakEnglish(phrase.en));

      const micBtn = document.getElementById('micRecordBtn');
      if (micBtn && hasMic) {
        micBtn.addEventListener('click', () => handleVoiceRecording(phrase));
      }

    // MODE 1 (DEFAULT & FALLBACK): FILL IN THE BLANK (MOT À TROU + OPTIONS RAPIDES CLIC/SAISIE)
    } else {
      const prefix = phrase.prefix !== undefined ? phrase.prefix : "";
      const suffix = phrase.suffix !== undefined ? phrase.suffix : "";

      const wrapper = document.createElement('div');
      wrapper.className = "space-y-4";
      wrapper.innerHTML = `
        <div class="space-y-2">
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-400">Complète l'expression en anglais :</label>
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-base sm:text-lg font-medium leading-relaxed flex flex-wrap items-center gap-2 shadow-sm">
            <span>${prefix}</span>
            <input type="text" id="clozeInput" autocomplete="off" placeholder="Tape ici..." class="px-3.5 py-1.5 rounded-xl border-2 border-rose-400 focus:border-rose-600 bg-rose-50/50 dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold outline-none shadow-sm transition min-w-[150px] max-w-[320px]">
            <span>${suffix}</span>
          </div>
        </div>

        <!-- Quick 3 option chips for mobile / 1-click answers -->
        <div class="space-y-1.5 pt-1">
          <div class="text-[11px] font-bold text-slate-400 uppercase">Ou clique directement sur la bonne suggestion :</div>
          <div class="flex flex-wrap gap-2" id="clozeOptionPills">
            ${options.map(opt => `
              <button type="button" class="cloze-opt-btn px-4 py-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-xs sm:text-sm shadow-sm transition transform active:scale-95" data-val="${opt.replace(/"/g, '&quot;')}">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      container.appendChild(wrapper);

      const input = document.getElementById('clozeInput');
      if (input) {
        setTimeout(() => input.focus(), 60);
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (!isCurrentAnswerChecked) verifyCurrentAnswer();
            else goToNextPhrase();
          }
        });
      }

      container.querySelectorAll('.cloze-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (isCurrentAnswerChecked) return;
          playSound('click');
          if (input) {
            input.value = btn.dataset.val;
            verifyCurrentAnswer();
          }
        });
      });
    }
  }

  // Voice recording engine
  let activeRecognition = null;
  function handleVoiceRecording(phrase) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!SpeechRecognition) return;

    const micBtn = document.getElementById('micRecordBtn');
    const transcriptArea = document.getElementById('voiceTranscriptArea');
    const transcriptText = document.getElementById('voiceTranscriptText');
    const scoreText = document.getElementById('voiceAccuracyScore');

    if (activeRecognition) {
      activeRecognition.stop();
      activeRecognition = null;
      if (micBtn) micBtn.classList.remove('animate-pulse');
      return;
    }

    try {
      const rec = new SpeechRecognition();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      if (micBtn) micBtn.classList.add('animate-pulse');

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
          scoreText.textContent = pct >= 80 ? `🎉 Prononciation excellente : ${pct}% !` : `Score : ${pct}% (Réessaie pour atteindre 80%+)`;
        }
        if (pct >= 80) {
          playSound('success');
          state.xp += 15;
          saveState();
        }
      };

      rec.onerror = () => {
        if (transcriptText) transcriptText.textContent = "Micro non détecté. Réessaie !";
      };

      rec.onend = () => {
        if (micBtn) micBtn.classList.remove('animate-pulse');
        activeRecognition = null;
      };

      activeRecognition = rec;
      rec.start();
    } catch (e) {
      console.warn("Speech recognition error:", e);
    }
  }

  // 12. VERIFY ANSWER LOGIC
  function verifyCurrentAnswer() {
    if (isCurrentAnswerChecked) {
      goToNextPhrase();
      return;
    }

    const phrase = currentSessionPhrases[currentPhraseIndex];
    if (!phrase) return;

    let isCorrect = false;
    let expectedSolution = phrase.en;
    const mode = normalizePracticeMode(state.practiceMode);

    if (mode === 'qcm') {
      const expected = cleanStr(phrase.target || "");
      expectedSolution = phrase.target || phrase.en;
      isCorrect = cleanStr(currentSelectedQCMOption || "") === expected;
    } else if (mode === 'tiles') {
      const reconstructed = activeSelectedTiles.map(t => t.word).join(' ');
      isCorrect = cleanStr(reconstructed) === cleanStr(phrase.en);
    } else if (mode === 'writing') {
      const input = document.getElementById('writingInput');
      const val = cleanStr(input ? input.value : "");
      isCorrect = calculateSimilarity(val, cleanStr(phrase.en)) >= 0.88;
    } else if (mode === 'listening') {
      const input = document.getElementById('dictationInput');
      const val = cleanStr(input ? input.value : "");
      isCorrect = calculateSimilarity(val, cleanStr(phrase.en)) >= 0.85;
    } else if (mode === 'voice') {
      isCorrect = true;
    } else {
      // Default 'fill' mode
      const input = document.getElementById('clozeInput');
      const val = cleanStr(input ? input.value : "");
      const expected = cleanStr(phrase.target || "");
      expectedSolution = phrase.target || phrase.en;
      isCorrect = (val === expected) || (val.length > 3 && calculateSimilarity(val, expected) >= 0.9);
    }

    isCurrentAnswerChecked = true;
    state.answersCount = (state.answersCount || 0) + 1;

    // Record step progress
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

      if (!state.completedSteps.includes(phrase.step) && state.stepProgress[phrase.step].answered >= 6) {
        state.completedSteps.push(phrase.step);
        playSound('level');
        try {
          if (typeof confetti === 'function') {
            confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
          }
        } catch (e) {}
      }

      if (feedbackBox) {
        feedbackBox.className = "p-5 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/95 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 space-y-2 transition-all";
        feedbackBox.innerHTML = `
          <div class="flex items-center gap-2 font-bold text-base text-emerald-700 dark:text-emerald-300">
            <span>🎉 Excellent ! Réponse exacte (+10 XP)</span>
          </div>
          <div class="text-lg font-black text-slate-900 dark:text-white font-heading">
            "${phrase.en}"
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300">
            💡 <strong>Note Toronto :</strong> ${phrase.note || phrase.hint || "Formule naturelle et courante."}
          </p>
        `;
        feedbackBox.classList.remove('hidden');
      }
    } else {
      playSound('error');
      if (!state.mistakes.includes(phrase.id)) {
        state.mistakes.push(phrase.id);
      }

      if (feedbackBox) {
        feedbackBox.className = "p-5 rounded-2xl border border-rose-300 dark:border-rose-800 bg-rose-50/95 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 space-y-2 transition-all";
        feedbackBox.innerHTML = `
          <div class="flex items-center gap-2 font-bold text-base text-rose-700 dark:text-rose-300">
            <span>Pas tout à fait ! Voici la formulation naturelle attendue :</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-900 rounded-xl font-bold text-base text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
            ${expectedSolution} — "${phrase.en}"
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300">
            💡 <strong>Astuce :</strong> ${phrase.hint || phrase.note || "Mémorise bien cette expression pour la prochaine fois !"}
          </p>
        `;
        feedbackBox.classList.remove('hidden');
      }
    }

    if (verifyBtn) verifyBtn.classList.add('hidden');
    if (nextBtn) nextBtn.classList.remove('hidden');

    saveState();
  }

  function revealOrSkipPhrase() {
    if (isCurrentAnswerChecked) {
      goToNextPhrase();
      return;
    }
    const phrase = currentSessionPhrases[currentPhraseIndex];
    if (!phrase) return;

    isCurrentAnswerChecked = true;
    playSound('click');

    const feedbackBox = document.getElementById('feedbackContainer');
    const verifyBtn = document.getElementById('verifyBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (feedbackBox) {
      feedbackBox.className = "p-5 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50/95 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100 space-y-2 transition-all";
      feedbackBox.innerHTML = `
        <div class="flex items-center gap-2 font-bold text-sm text-amber-700 dark:text-amber-300">
          <span>💡 Solution complète de la phrase :</span>
        </div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-xl font-bold text-base text-slate-900 dark:text-white border border-amber-200 dark:border-amber-800">
          "${phrase.en}"
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300">
          <strong>Explication :</strong> ${phrase.note || phrase.hint || "Formule idiomatique courante."}
        </p>
      `;
      feedbackBox.classList.remove('hidden');
    }

    speakEnglish(phrase.en);
    if (verifyBtn) verifyBtn.classList.add('hidden');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }

  function goToNextPhrase() {
    currentPhraseIndex++;
    if (currentPhraseIndex < currentSessionPhrases.length) {
      renderCurrentPhrase();
    } else {
      showSessionCompletionModal();
    }
  }

  // 13. SESSION COMPLETION (SAFE DOM TOGGLE)
  function showSessionCompletionModal() {
    playSound('level');
    try {
      if (typeof confetti === 'function') {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.5 } });
      }
    } catch (e) {}

    const qView = document.getElementById('exerciseQuestionView');
    const cView = document.getElementById('sessionCompletionView');
    if (!cView) return;

    if (qView) qView.classList.add('hidden');
    cView.classList.remove('hidden');

    const total = currentSessionPhrases.length || 10;
    const acc = Math.round((sessionCorrectCount / total) * 100);

    cView.innerHTML = `
      <div class="max-w-md mx-auto space-y-6">
        <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center mx-auto shadow-xl text-3xl font-black">
          🏆
        </div>

        <div class="space-y-1">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">Session Réussie !</h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Bravo ! Tu as terminé cette série de 10 phrases. Chaque séance renforce tes réflexes automatiques.
          </p>
        </div>

        <div class="grid grid-cols-3 gap-3">
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-center">
            <div class="text-2xl font-black text-rose-600 dark:text-rose-400 font-heading">${sessionCorrectCount}/${total}</div>
            <div class="text-[11px] text-slate-400 font-medium">Réussies</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-center">
            <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-heading">${acc}%</div>
            <div class="text-[11px] text-slate-400 font-medium">Précision</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-center">
            <div class="text-2xl font-black text-amber-500 dark:text-amber-400 font-heading">+${sessionCorrectCount * 10} XP</div>
            <div class="text-[11px] text-slate-400 font-medium">Gagnés</div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button id="restartSessionBtn" type="button" class="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 text-white shadow-lg transition">
            🔄 Nouvelle série de 10
          </button>
          ${(!isNaN(parseInt(state.currentStepFilter, 10)) && parseInt(state.currentStepFilter, 10) < 40) ? `
            <button id="advanceNextStepBtn" type="button" class="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white shadow-lg transition">
              🚀 Passer à l'Étape ${parseInt(state.currentStepFilter, 10) + 1}
            </button>
          ` : ''}
          <button id="backToRoadmapBtn" type="button" class="px-5 py-3 rounded-2xl font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-white transition">
            🗺️ Voir les 40 étapes
          </button>
        </div>
      </div>
    `;

    const restartBtn = document.getElementById('restartSessionBtn');
    if (restartBtn) restartBtn.addEventListener('click', () => startSession(state.currentStepFilter));

    const advanceBtn = document.getElementById('advanceNextStepBtn');
    if (advanceBtn) {
      advanceBtn.addEventListener('click', () => {
        const nextNum = parseInt(state.currentStepFilter, 10) + 1;
        if (nextNum <= 40) selectStep(String(nextNum));
      });
    }

    const roadmapBtn = document.getElementById('backToRoadmapBtn');
    if (roadmapBtn) roadmapBtn.addEventListener('click', () => switchTab('roadmap'));
  }

  // 14. ROADMAP GENERATOR (40 STEPS ACROSS 4 PALIERS)
  function renderRoadmap(filterStage = "all") {
    const grid = document.getElementById('roadmapGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const STEPS = getSteps();
    const allPhrases = getAllPhrases();

    STEPS.forEach(st => {
      let stage = 1;
      if (st.step >= 31) stage = 4;
      else if (st.step >= 21) stage = 3;
      else if (st.step >= 11) stage = 2;

      if (filterStage !== "all" && String(stage) !== String(filterStage)) {
        return;
      }

      const isCompleted = state.completedSteps.includes(st.step);
      const stepProg = state.stepProgress[st.step] || { answered: 0, correct: 0 };
      const phrasesInStep = allPhrases.filter(p => p.step === st.step).length || 80;
      const progressPercent = Math.min(100, Math.round((stepProg.answered / Math.max(1, phrasesInStep)) * 100));

      const card = document.createElement('div');
      card.setAttribute('data-start-step', st.step);
      card.className = `cursor-pointer bg-white dark:bg-slate-800 rounded-3xl border ${isCompleted ? 'border-emerald-500/50 dark:border-emerald-500/40 shadow-emerald-500/10' : 'border-slate-200 dark:border-slate-700/80'} p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-4`;

      const badgeColorClass =
        stage === 1 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300' :
        stage === 2 ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300' :
        stage === 3 ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300' :
                      'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300';

      const barGradientClass =
        stage === 1 ? 'from-emerald-500 to-teal-600' :
        stage === 2 ? 'from-rose-500 to-red-600' :
        stage === 3 ? 'from-amber-500 to-orange-500' :
                      'from-indigo-500 to-purple-600';

      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black px-3 py-1 rounded-full ${badgeColorClass}">
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

          <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
            <span class="font-bold text-rose-600 dark:text-rose-400">${stage === 1 ? '🌱 Astuce Départ :' : '🍁 Vibe Toronto :'}</span> ${st.culture}
          </div>
        </div>

        <div class="pt-2 border-t border-slate-100 dark:border-slate-700/80 space-y-3">
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span>Progression : ${stepProg.answered}/${phrasesInStep} phrases</span>
              <span>${progressPercent}%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r ${barGradientClass}" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <button data-start-step="${st.step}" type="button" class="w-full py-3 px-4 rounded-xl text-xs font-bold ${isCompleted ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-100' : 'bg-slate-900 hover:bg-rose-600 text-white dark:bg-slate-700 dark:hover:bg-rose-600'} transition flex items-center justify-center gap-2 shadow-sm">
            <span>${isCompleted ? '✓ S\'entraîner à nouveau' : '🎯 Faire les exercices de l\'Étape ' + st.step}</span>
          </button>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // 15. CUSTOM PHRASES BUILDER & BULK IMPORT
  function renderCustomPhrasesList() {
    const container = document.getElementById('notebookListContainer');
    const badge = document.getElementById('notebookCount');
    if (!container) return;

    const list = state.customPhrases || [];
    if (badge) badge.textContent = list.length;
    container.innerHTML = '';

    if (list.length === 0) {
      container.innerHTML = `
        <p class="text-xs text-slate-400 italic">Aucune phrase personnalisée pour l'instant. Ajoute ta première phrase ci-dessus !</p>
      `;
      return;
    }

    list.forEach((p, idx) => {
      const item = document.createElement('div');
      item.className = "p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm";
      item.innerHTML = `
        <div class="space-y-1 flex-1">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              ${p.category || 'Mes phrases'}
            </span>
            <span class="text-[11px] text-slate-400">Trou : <strong>"${p.target}"</strong></span>
          </div>
          <div class="text-base font-bold text-slate-900 dark:text-white font-heading">${p.en}</div>
          <div class="text-xs text-slate-500 italic">🇫🇷 ${p.fr}</div>
          ${p.note ? `<div class="text-[11px] text-slate-400">📝 ${p.note}</div>` : ''}
        </div>
        <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <button data-speak-custom="${idx}" type="button" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-indigo-50 text-slate-600 dark:text-slate-200 hover:text-indigo-600 transition" title="Écouter la prononciation">
            <span>🔊</span>
          </button>
          <button data-practice-custom="${idx}" type="button" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 transition">
            🎯 Pratiquer
          </button>
          <button data-del-custom="${idx}" type="button" class="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Supprimer">
            <span>🗑️</span>
          </button>
        </div>
      `;
      container.appendChild(item);
    });

    container.querySelectorAll('[data-speak-custom]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.speakCustom, 10);
        speakEnglish(list[idx].en);
      });
    });

    container.querySelectorAll('[data-practice-custom]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.practiceCustom, 10);
        selectStep('custom', list[idx] || null);
        switchTab('practice');
      });
    });

    container.querySelectorAll('[data-del-custom]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.delCustom, 10);
        state.customPhrases.splice(idx, 1);
        saveState();
        renderCustomPhrasesList();
        renderStepSelectors();
      });
    });
  }

  function addCustomPhrase(en, fr, targetInput, category, note) {
    if (!en || !fr) return false;
    const cleanEn = en.trim();
    const cleanFr = fr.trim();

    // Determine target word/phrase without trailing punctuation
    let target = (targetInput || '').trim().replace(/[.,!?;:]+$/, '');
    if (!target) {
      const words = cleanEn.split(/\s+/).map(w => w.replace(/[.,!?;:]+$/, '')).filter(Boolean);
      target = words.length > 2 ? words.slice(1, 3).join(' ') : (words[0] || cleanEn);
    }

    const idx = cleanEn.toLowerCase().indexOf(target.toLowerCase());
    let prefix = "";
    let suffix = "";
    if (idx !== -1) {
      prefix = cleanEn.substring(0, idx);
      suffix = cleanEn.substring(idx + target.length);
    } else {
      prefix = "";
      suffix = "";
    }

    // Build realistic distractors from existing phrases
    const sampleTargets = getAllPhrases()
      .map(p => p.target)
      .filter(t => t && t.toLowerCase() !== target.toLowerCase());
    const distractors = sampleTargets.sort(() => Math.random() - 0.5).slice(0, 3);
    while (distractors.length < 3) distractors.push("something else");

    const newPhrase = {
      id: `custom_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      step: "custom",
      stepTitle: "Mes Phrases Personnalisées",
      stepBadge: "⭐ Mes phrases",
      level: "Perso",
      category: category || "Mes Notes",
      en: cleanEn,
      fr: cleanFr,
      target,
      prefix,
      suffix,
      hint: note || `Indice : commence par "${target.substring(0, Math.min(2, target.length))}..." (${target.split(/\s+/).length} mot(s))`,
      note: note || "Phrase personnelle ajoutée dans ton carnet.",
      distractors,
      tiles: cleanEn.split(/\s+/).sort(() => Math.random() - 0.5)
    };

    if (!state.customPhrases) state.customPhrases = [];
    state.customPhrases.unshift(newPhrase);
    state.xp += 15;
    saveState();
    return true;
  }

  // 16. FLASHCARDS & SRS (LEITNER SYSTEM)
  let flashcardQueue = [];
  let flashcardIndex = 0;
  let isCardFlipped = false;

  function initFlashcards(filter = "all") {
    const all = getAllPhrases();
    let pool = [];
    if (filter === "custom") {
      pool = [...(state.customPhrases || [])];
      if (pool.length === 0) pool = all.slice(0, 20);
    } else if (filter === "all") {
      pool = [...all, ...(state.customPhrases || [])];
    } else {
      const num = parseInt(filter, 10);
      pool = all.filter(p => p.step === num);
      if (pool.length === 0) pool = all.slice(0, 20);
    }

    flashcardQueue = [...pool].sort(() => Math.random() - 0.5);
    flashcardIndex = 0;
    isCardFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (!flashcardQueue || flashcardQueue.length === 0) return;
    const phrase = flashcardQueue[flashcardIndex];
    if (!phrase) return;

    isCardFlipped = false;
    const inner = document.getElementById('flashcardInner');
    if (inner) inner.classList.remove('rotate-y-180');

    const stepBadge = document.getElementById('fcFrontStepBadge');
    if (stepBadge) stepBadge.textContent = phrase.stepBadge || `Étape ${phrase.step}`;

    const french = document.getElementById('fcFrontFrench');
    if (french) french.textContent = phrase.fr;

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

  // 17. DIALOGUES TORONTO
  let activeDialogue = DIALOGUES[0];

  function renderDialoguePills() {
    const container = document.getElementById('dialoguePillsContainer');
    if (!container) return;
    container.innerHTML = '';

    DIALOGUES.forEach(d => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `dialogue-pill px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${d.id === activeDialogue.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`;
      btn.textContent = d.title;
      btn.addEventListener('click', () => {
        playSound('click');
        activeDialogue = d;
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
        <button id="playAllDialogueBtn" type="button" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-100 transition flex items-center gap-1.5 shadow-sm">
          <span>▶ Écouter le dialogue en entier</span>
        </button>
      </div>

      <div class="space-y-4 pt-2" id="dialogueLinesList">
        <!-- Lines -->
      </div>
    `;

    const list = document.getElementById('dialogueLinesList');
    activeDialogue.lines.forEach((line, idx) => {
      const isYou = line.speaker === "You";
      const lineDiv = document.createElement('div');
      lineDiv.className = `p-4 rounded-2xl border transition-all ${isYou ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 ml-4 sm:ml-12' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 mr-4 sm:mr-12'}`;

      lineDiv.innerHTML = `
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="text-xs font-bold ${isYou ? 'text-rose-600 dark:text-rose-400' : 'text-slate-600 dark:text-slate-400'} flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-full ${isYou ? 'bg-rose-500' : 'bg-slate-500'} text-white flex items-center justify-center text-[10px]">
              ${isYou ? '👤' : '🗣️'}
            </span>
            ${line.speaker}
          </span>
          <button data-speak-line="${idx}" type="button" class="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 transition" title="Écouter">
            <span>🔊</span>
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

  // 18. MASTER EXPLORER (2 260+ PHRASES)
  let explorerPage = 1;
  const EXPLORER_PAGE_SIZE = 25;
  let filteredExplorerPhrases = [];

  function filterExplorerPhrases() {
    const searchVal = (document.getElementById('explorerSearchInput')?.value || '').toLowerCase().trim();
    const stepVal = document.getElementById('explorerStepFilter')?.value || 'all';
    const levelVal = document.getElementById('explorerLevelFilter')?.value || 'all';
    const onlyFavs = document.getElementById('explorerOnlyFavsBtn')?.classList.contains('active');

    const all = getAllPhrases();
    const allPlusCustom = [...all, ...(state.customPhrases || [])];

    filteredExplorerPhrases = allPlusCustom.filter(p => {
      if (stepVal === 'custom') {
        if (!p.id || !p.id.startsWith('custom_')) return false;
      } else if (stepVal !== 'all') {
        if (String(p.step) !== stepVal) return false;
      }
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
          Aucune phrase trouvée. Essaye d'ajuster ta recherche !
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
              ${p.stepBadge || `Étape ${p.step}`}
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
          <button data-speak-id="${p.id}" type="button" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-cyan-50 text-slate-600 dark:text-slate-200 hover:text-cyan-600 transition" title="Écouter la prononciation">
            <span>🔊</span>
          </button>
          <button data-fav-id="${p.id}" type="button" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-amber-50 text-slate-400 hover:text-amber-500 transition" title="Mettre en favori">
            <span>${isFav ? '⭐' : '☆'}</span>
          </button>
        </div>
      `;

      container.appendChild(row);
    });

    renderExplorerPagination();

    container.querySelectorAll('[data-speak-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.speakId;
        const allPlusCustom = [...getAllPhrases(), ...(state.customPhrases || [])];
        const p = allPlusCustom.find(x => x.id === id);
        if (p) speakEnglish(p.en);
      });
    });

    container.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.favId;
        const idx = state.favorites.indexOf(id);
        if (idx === -1) state.favorites.push(id);
        else state.favorites.splice(idx, 1);
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
      prev.type = 'button';
      prev.className = "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 transition";
      prev.textContent = "Précédent";
      prev.addEventListener('click', () => {
        explorerPage--;
        renderExplorerList();
      });
      pag.appendChild(prev);
    }

    const info = document.createElement('span');
    info.className = "text-xs font-semibold text-slate-500 px-2";
    info.textContent = `Page ${explorerPage} / ${totalPages}`;
    pag.appendChild(info);

    if (explorerPage < totalPages) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 transition";
      next.textContent = "Suivant";
      next.addEventListener('click', () => {
        explorerPage++;
        renderExplorerList();
      });
      pag.appendChild(next);
    }
  }

  // 19. BADGES & TROPHIES
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

  // 20. TAB NAVIGATION LOGIC
  function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => {
      const isActive = b.dataset.tab === tabId;
      if (isActive) {
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

    if (tabId === 'practice') {
      if (currentSessionPhrases.length === 0) startSession(state.currentStepFilter);
    } else if (tabId === 'roadmap') {
      renderRoadmap();
    } else if (tabId === 'tenses') {
      initTensesTab();
    } else if (tabId === 'notebook') {
      renderCustomPhrasesList();
    } else if (tabId === 'flashcards') {
      if (flashcardQueue.length === 0) initFlashcards();
    } else if (tabId === 'dialogues') {
      renderDialoguePills();
      renderActiveDialogue();
    } else if (tabId === 'explorer') {
      filterExplorerPhrases();
    } else if (tabId === 'stats') {
      renderBadges();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    safeCreateIcons();
  }

  // ==========================================================
  // 20B. VERB TENSES & CONJUGAISON TRAINER ENGINE
  // ==========================================================
  const TENSE_META = {
    all: {
      icon: "🌟",
      title: "Mémo Grammatical : Tous les temps (Repérer les indices)",
      markers: "Indices : yesterday (passé) • right now (continu) • every day (présent) • tomorrow (futur)",
      usage: "Astuce clé : En anglais, regarde toujours le <strong>mot-indice de temps</strong> dans la phrase avant de conjuguer ! Par exemple, <em>yesterday</em> ou <em>last week</em> appelle le Passé Simple, tandis que <em>right now</em> appelle BE + -ING.",
      pos: "Présent : I work / She works • Passé : I worked / I went • Futur : I will work / I'm going to work",
      neg: "Présent : don't / doesn't + base • Passé : didn't + base • Futur : won't + base",
      question: "Présent : Do / Does + sujet + base ? • Passé : Did + sujet + base ? • Futur : Will + sujet + base ?"
    },
    present_all: {
      icon: "☀️",
      title: "Tout le Présent : Habitudes (Simple) vs Action en cours (Continu)",
      markers: "Indices : every day, usually, often (Simple) vs right now, at the moment, Look! (Continu)",
      usage: "Distinction essentielle : Utilise le <strong>Présent Simple</strong> pour les vérités générales et habitudes (n'oublie pas le <strong>-s</strong> avec he/she/it !), et le <strong>Présent Continu (am/is/are + -ing)</strong> pour une action qui se déroule sous tes yeux maintenant.",
      pos: "Habitude : I work / She works • En cours : I am working / She is working",
      neg: "Habitude : I don't work / She doesn't work • En cours : I'm not working / She isn't working",
      question: "Habitude : Do you work? / Does she work? • En cours : Are you working? / Is she working?"
    },
    past_all: {
      icon: "⏪",
      title: "Tout le Passé : Passé Simple (-ed / Irréguliers), Present Perfect & Passé Continu",
      markers: "Indices : yesterday, last night, ago (Passé Simple) • already, ever, just, since, for (Present Perfect)",
      usage: "Si le moment passé est terminé et daté (<em>yesterday, in 2024, last week</em>), utilise le <strong>Passé Simple</strong> (régulier en <em>-ed</em> ou irrégulier comme <em>went, saw, had</em>). Aux formes négative et question du Passé Simple, utilise <strong>didn't / Did + verbe de base</strong> !",
      pos: "Passé Simple : I walked / I went • Present Perfect : I have seen • Continu : I was walking",
      neg: "Passé Simple : I didn't walk / I didn't go (verbe de base après didn't !) • Perfect : I haven't seen",
      question: "Passé Simple : Did you walk? / Did you go? • Perfect : Have you ever seen...?"
    },
    future_all: {
      icon: "🚀",
      title: "Tout le Futur & Conditionnel : Going to, Will & Would / Could / Should",
      markers: "Indices : tomorrow, tonight, next week, soon, in a few days, if I could",
      usage: "Utilise <strong>am/is/are going to + verbe</strong> pour un projet déjà prévu, <strong>will / won't + verbe</strong> pour une promesse ou décision spontanée, et <strong>would / could / should + verbe</strong> pour la politesse ou un conseil.",
      pos: "Projet : I'm going to call • Spontané : I will help • Conditionnel : I would love / You should go",
      neg: "Projet : I'm not going to call • Futur : I won't be late • Conseil : You shouldn't worry",
      question: "Projet : Are you going to stay? • Futur : Will you come? • Politesse : Could you help me?"
    },
    present_simple: {
      icon: "☀️",
      title: "Présent Simple — Habitudes, Routines & Vérités générales",
      markers: "Indices : every day, usually, always, often, on Mondays, never, generally",
      usage: "Sert à exprimer ce que tu fais régulièrement ou ce qui est toujours vrai. ⚠️ Règle d'or : avec <strong>he / she / it</strong>, ajoute un <strong>-s</strong> (ou <em>-es</em>) au verbe affirmatif (<em>She works, He goes, It takes</em>).",
      pos: "I / You / We / They work • He / She / It works (goes, watches, has)",
      neg: "I / You / We / They don't work • He / She / It doesn't work (sans -s au verbe !)",
      question: "Do you work? • Does she work? (sans -s au verbe !)"
    },
    present_continuous: {
      icon: "⚡",
      title: "Présent Continu (BE + V-ing) — Action en train de se dérouler",
      markers: "Indices : right now, at the moment, currently, today, Look!, Listen!",
      usage: "Sert à décrire ce qui se passe <strong>en ce moment précis</strong>. On conjugue l'auxiliaire <strong>to be</strong> au présent (<em>am / is / are</em>) + le verbe terminé par <strong>-ing</strong>.",
      pos: "I am working • You / We / They are working • He / She / It is working",
      neg: "I am not working • You aren't working • She isn't working",
      question: "Am I disturbing you? • Are you listening? • What is she doing right now?"
    },
    past_regular: {
      icon: "⏪",
      title: "Passé Simple Régulier (-ed) & Was / Were",
      markers: "Indices : yesterday, last night, last week, two days ago, in 2023, this morning",
      usage: "Pour une action terminée dans le passé. Les verbes réguliers prennent <strong>-ed</strong> à toutes les personnes (<em>walked, watched, called</em>). Le verbe <em>to be</em> devient <strong>was</strong> (I/he/she/it) ou <strong>were</strong> (you/we/they). ⚠️ Après <strong>didn't</strong> ou <strong>Did</strong>, le verbe revient à la base !",
      pos: "I walked / She watched / We worked • I was tired / They were happy",
      neg: "I didn't walk / She didn't watch (PAS de -ed après didn't !) • I wasn't / They weren't",
      question: "Did you walk? / Did she call? • Were you in Toronto last summer?"
    },
    past_irregular: {
      icon: "🔥",
      title: "Passé Simple Irrégulier — Les verbes incontournables du quotidien",
      markers: "Indices : yesterday, last weekend, a few days ago, when I was in Toronto",
      usage: "En anglais, les verbes les plus fréquents (<em>go ➔ went, have ➔ had, see ➔ saw, make ➔ made, buy ➔ bought, take ➔ took</em>) ont une forme passée spéciale à l'affirmatif. Mais à la forme négative, on utilise toujours <strong>didn't + base</strong> (ex: <em>I didn't go</em>) !",
      pos: "I went (go) • She saw (see) • We had (have) • They bought (buy) • He took (take)",
      neg: "I didn't go • She didn't see • We didn't have (le verbe revient à l'infinitif !)",
      question: "Where did you go? • What did she say? • Did you have a good flight?"
    },
    present_perfect: {
      icon: "✨",
      title: "Present Perfect (Have / Has + Participe Passé) — Expérience & Bilan",
      markers: "Indices : already, just, yet, ever, never, recently, so far, since, for",
      usage: "Relie le passé au présent : une expérience de vie (<em>I have been to Toronto</em>), une action qui vient juste d'avoir lieu (<em>I have just finished</em>), ou qui dure encore (<em>for 3 months / since May</em>).",
      pos: "I / You / We / They have + participe (seen, been, done) • He / She / It has + participe",
      neg: "I haven't finished yet • She hasn't replied yet • I have never tried",
      question: "Have you ever been to Canada? • Has she already left?"
    },
    past_continuous: {
      icon: "🎬",
      title: "Passé Continu (Was / Were + V-ing) — Action en cours dans le passé",
      markers: "Indices : while, when, at 8 PM last night, all morning yesterday",
      usage: "Décrit le décor ou une action qui était en train de se dérouler à un moment précis du passé, souvent interrompue par une action courte au Passé Simple (ex: <em>I was sleeping when you called</em>).",
      pos: "I / He / She / It was working • You / We / They were working",
      neg: "I wasn't sleeping • They weren't paying attention",
      question: "What were you doing when it started snowing?"
    },
    future_going_to: {
      icon: "📅",
      title: "Futur Proche (BE + going to + Verbe) — Intentions & Projets prévus",
      markers: "Indices : tonight, tomorrow, this weekend, next month, soon",
      usage: "C'est le futur le plus utilisé à l'oral quand tu as <strong>déjà décidé ou prévu</strong> de faire quelque chose, ou que c'est imminent. N'oublie jamais de conjuguer <strong>am / is / are</strong> devant <em>going to</em> !",
      pos: "I am going to travel • She is going to call • We are going to visit",
      neg: "I'm not going to wait • He isn't going to come • They aren't going to stay",
      question: "Are you going to watch the game tonight? • What is she going to do?"
    },
    future_will: {
      icon: "🚀",
      title: "Futur Simple (Will / Won't + Verbe) — Promesses, Décisions sur le vif & Prédictions",
      markers: "Indices : I think, I promise, maybe, probably, tomorrow, in the future",
      usage: "Utilise <strong>will ('ll)</strong> quand tu prends une décision sur-le-champ (<em>I'll pay for the coffee!</em>), que tu fais une promesse (<em>I won't tell anyone</em>), ou une prédiction (<em>I think it will snow</em>).",
      pos: "I / You / He / She / We / They will + verbe de base (I'll send it right away)",
      neg: "I / You / He / She / We / They won't (will not) + verbe de base",
      question: "Will you be there tomorrow? • When will we know the results?"
    },
    conditional: {
      icon: "💭",
      title: "Conditionnel & Modaux (Would / Could / Should + Verbe)",
      markers: "Indices : I'd like, if I had time, polite requests, advice",
      usage: "Ultra utile au quotidien pour être poli(e) et nuancé(e) : <strong>would ('d)</strong> = conditionnel (<em>I would love to come</em>), <strong>could</strong> = pourrais/pourrait (<em>Could you help me?</em>), <strong>should</strong> = devrais/devrait (<em>You should try this café</em>).",
      pos: "I would ('d) like • You should visit • We could meet tomorrow",
      neg: "I wouldn't do that • You shouldn't worry • I couldn't hear anything",
      question: "Would you like some coffee? • Could you send me the link? • Should I call her?"
    }
  };

  // 45 Essential Irregular Verbs for the Reference Table
  const IRREGULAR_VERBS_LIST = [
    { fr: "être", base: "be (am/is/are)", past: "was / were", pp: "been" },
    { fr: "avoir", base: "have / has", past: "had", pp: "had" },
    { fr: "faire (action)", base: "do / does", past: "did", pp: "done" },
    { fr: "aller", base: "go", past: "went", pp: "gone / been" },
    { fr: "voir", base: "see", past: "saw", pp: "seen" },
    { fr: "venir", base: "come", past: "came", pp: "come" },
    { fr: "prendre", base: "take", past: "took", pp: "taken" },
    { fr: "fabriquer / faire", base: "make", past: "made", pp: "made" },
    { fr: "obtenir / devenir / arriver", base: "get", past: "got", pp: "got / gotten" },
    { fr: "savoir / connaître", base: "know", past: "knew", pp: "known" },
    { fr: "penser / croire", base: "think", past: "thought", pp: "thought" },
    { fr: "dire", base: "say", past: "said", pp: "said" },
    { fr: "raconter / dire à qqn", base: "tell", past: "told", pp: "told" },
    { fr: "donner", base: "give", past: "gave", pp: "given" },
    { fr: "trouver", base: "find", past: "found", pp: "found" },
    { fr: "acheter", base: "buy", past: "bought", pp: "bought" },
    { fr: "apporter", base: "bring", past: "brought", pp: "brought" },
    { fr: "partir / quitter / laisser", base: "leave", past: "left", pp: "left" },
    { fr: "rencontrer / retrouver", base: "meet", past: "met", pp: "met" },
    { fr: "manger", base: "eat", past: "ate", pp: "eaten" },
    { fr: "boire", base: "drink", past: "drank", pp: "drunk" },
    { fr: "dormir", base: "sleep", past: "slept", pp: "slept" },
    { fr: "écrire", base: "write", past: "wrote", pp: "written" },
    { fr: "lire (prononcé 'red' au passé)", base: "read", past: "read", pp: "read" },
    { fr: "parler", base: "speak", past: "spoke", pp: "spoken" },
    { fr: "comprendre", base: "understand", past: "understood", pp: "understood" },
    { fr: "entendre", base: "hear", past: "heard", pp: "heard" },
    { fr: "ressentir / se sentir", base: "feel", past: "felt", pp: "felt" },
    { fr: "garder / continuer", base: "keep", past: "kept", pp: "kept" },
    { fr: "commencer", base: "begin", past: "began", pp: "begun" },
    { fr: "courir", base: "run", past: "ran", pp: "run" },
    { fr: "envoyer", base: "send", past: "sent", pp: "sent" },
    { fr: "dépenser / passer du temps", base: "spend", past: "spent", pp: "spent" },
    { fr: "payer", base: "pay", past: "paid", pp: "paid" },
    { fr: "oublier", base: "forget", past: "forgot", pp: "forgotten" },
    { fr: "choisir", base: "choose", past: "chose", pp: "chosen" },
    { fr: "conduire", base: "drive", past: "drove", pp: "driven" },
    { fr: "voler (en avion)", base: "fly", past: "flew", pp: "flown" },
    { fr: "perdre", base: "lose", past: "lost", pp: "lost" },
    { fr: "gagner", base: "win", past: "won", pp: "won" },
    { fr: "porter (un vêtement)", base: "wear", past: "wore", pp: "worn" },
    { fr: "vendre", base: "sell", past: "sold", pp: "sold" },
    { fr: "enseigner / apprendre à", base: "teach", past: "taught", pp: "taught" },
    { fr: "attraper / prendre (bus/train)", base: "catch", past: "caught", pp: "caught" },
    { fr: "mettre / poser", base: "put", past: "put", pp: "put" }
  ];

  // Dedicated Conjugation Exercises across all 9 Tenses
  const VERB_TENSE_EXERCISES = [
    // =====================================================
    // 1. PRESENT SIMPLE (present_simple)
    // =====================================================
    { id: "vt_1", tense: "present_simple", family: "present", verb: "to work", marker: "every day", en: "She works in downtown Toronto every day.", fr: "Elle travaille au centre-ville de Toronto tous les jours.", target: "works", distractors: ["work", "is working", "worked"], note: "Au Présent Simple (habitude 'every day'), avec 'She', on ajoute un -s au verbe : works." },
    { id: "vt_2", tense: "present_simple", family: "present", verb: "to take", marker: "every morning", en: "I usually take the subway every morning.", fr: "Je prends généralement le métro tous les matins.", target: "take", distractors: ["takes", "took", "am taking"], note: "Habitude ('usually', 'every morning') avec 'I' : base verbale 'take'." },
    { id: "vt_3", tense: "present_simple", family: "present", verb: "to live (négatif)", marker: "now / vérité générale", en: "He doesn't live far from the station.", fr: "Il n'habite pas loin de la gare.", target: "doesn't live", distractors: ["don't live", "isn't living", "didn't live"], note: "Négation au Présent Simple avec 'He' : doesn't + verbe de base (live)." },
    { id: "vt_4", tense: "present_simple", family: "present", verb: "to go", marker: "on Saturdays", en: "My sister goes to the gym on Saturdays.", fr: "Ma sœur va à la salle de sport le samedi.", target: "goes", distractors: ["go", "went", "is going"], note: "Habitude ('on Saturdays') avec 'My sister' (she) : go prend -es -> goes." },
    { id: "vt_5", tense: "present_simple", family: "present", verb: "to like (question)", marker: "habitude", en: "Do you like iced coffee in the summer?", fr: "Est-ce que tu aimes le café glacé en été ?", target: "Do you like", distractors: ["Are you liking", "Did you like", "Does you like"], note: "Question au Présent Simple avec 'you' : Do you + verbe de base." },
    { id: "vt_6", tense: "present_simple", family: "present", verb: "to have", marker: "usually", en: "She usually has lunch around noon.", fr: "Elle déjeune habituellement vers midi.", target: "has", distractors: ["have", "had", "is having"], note: "Au Présent Simple avec he/she/it, 'to have' devient 'has'." },
    { id: "vt_7", tense: "present_simple", family: "present", verb: "to open", marker: "every morning", en: "The coffee shop opens at seven every morning.", fr: "Le café ouvre à sept heures tous les matins.", target: "opens", distractors: ["open", "is opening", "opened"], note: "Horaire régulier ('every morning') avec 'The coffee shop' (it) : opens." },
    { id: "vt_8", tense: "present_simple", family: "present", verb: "to drink (négatif)", marker: "never / le soir", en: "I don't drink coffee in the evening.", fr: "Je ne bois pas de café le soir.", target: "don't drink", distractors: ["doesn't drink", "am not drinking", "didn't drink"], note: "Habitude négative au Présent Simple avec 'I' : don't drink." },
    { id: "vt_9", tense: "present_simple", family: "present", verb: "to speak (question)", marker: "vérité générale", en: "Does your colleague speak French?", fr: "Est-ce que ton collègue parle français ?", target: "Does", distractors: ["Do", "Is", "Did"], note: "Question au Présent Simple à la 3e personne du singulier ('your colleague') : Does + sujet + speak." },
    { id: "vt_10", tense: "present_simple", family: "present", verb: "to watch", marker: "often", en: "He often watches movies in English.", fr: "Il regarde souvent des films en anglais.", target: "watches", distractors: ["watch", "is watching", "watched"], note: "Après -ch, -sh, -s, -x, -o, on ajoute -es avec he/she/it : watches." },
    { id: "vt_11", tense: "present_simple", family: "present", verb: "to be", marker: "always", en: "They are always very welcoming with newcomers.", fr: "Ils sont toujours très accueillants avec les nouveaux venus.", target: "are", distractors: ["is", "were", "have been"], note: "Présent de 'to be' avec 'They' : are." },
    { id: "vt_12", tense: "present_simple", family: "present", verb: "to start (question)", marker: "horaire", en: "What time does the train leave?", fr: "À quelle heure part le train ?", target: "does the train leave", distractors: ["do the train leave", "is the train leaving", "did the train leave"], note: "Pour les horaires officiels (trains, avions), on utilise le Présent Simple : does the train leave." },

    // =====================================================
    // 2. PRESENT CONTINUOUS (present_continuous)
    // =====================================================
    { id: "vt_13", tense: "present_continuous", family: "present", verb: "to rain", marker: "Look! / right now", en: "Look! It is raining outside right now.", fr: "Regarde ! Il pleut dehors en ce moment même.", target: "is raining", distractors: ["rains", "rained", "will rain"], note: "Indices 'Look!' et 'right now' = action sous nos yeux ➔ Présent Continu (is raining)." },
    { id: "vt_14", tense: "present_continuous", family: "present", verb: "to cook", marker: "at the moment", en: "She is cooking dinner in the kitchen at the moment.", fr: "Elle est en train de préparer le dîner dans la cuisine en ce moment.", target: "is cooking", distractors: ["cooks", "cooked", "has cooked"], note: "'At the moment' indique une action en cours ➔ is + cooking." },
    { id: "vt_15", tense: "present_continuous", family: "present", verb: "to wait", marker: "right now", en: "We are waiting for the streetcar right now.", fr: "Nous attendons le tramway en ce moment même.", target: "are waiting", distractors: ["wait", "waited", "were waiting"], note: "Avec 'We' et 'right now' ➔ Présent Continu : are waiting." },
    { id: "vt_16", tense: "present_continuous", family: "present", verb: "to work", marker: "today", en: "I am working from home today.", fr: "Je travaille depuis la maison aujourd'hui (exceptionnellement).", target: "am working", distractors: ["work", "worked", "was working"], note: "Situation temporaire ('today') avec 'I' ➔ am working." },
    { id: "vt_17", tense: "present_continuous", family: "present", verb: "to do (question)", marker: "right now", en: "What are you doing right now?", fr: "Qu'est-ce que tu es en train de faire là tout de suite ?", target: "are you doing", distractors: ["do you do", "did you do", "have you done"], note: "Question sur l'action en cours ('right now') ➔ What are you doing?" },
    { id: "vt_18", tense: "present_continuous", family: "present", verb: "to listen (question)", marker: "en ce moment", en: "Are you listening to me?", fr: "Est-ce que tu m'écoutes (en ce moment) ?", target: "Are you listening", distractors: ["Do you listen", "Did you listen", "Will you listen"], note: "Action en direct ➔ Are you + verbe en -ing." },
    { id: "vt_19", tense: "present_continuous", family: "present", verb: "to wear", marker: "today", en: "He is wearing a warm winter coat today.", fr: "Il porte un manteau d'hiver chaud aujourd'hui.", target: "is wearing", distractors: ["wears", "wore", "has worn"], note: "Pour décrire ce que quelqu'un porte aujourd'hui, l'anglais utilise toujours BE + wearing." },
    { id: "vt_20", tense: "present_continuous", family: "present", verb: "to look for", marker: "currently", en: "They are currently looking for a new apartment.", fr: "Ils cherchent actuellement un nouvel appartement.", target: "are currently looking", distractors: ["currently look", "looked", "will look"], note: "'Currently' (actuellement) appelle le Présent Continu : are looking." },
    { id: "vt_21", tense: "present_continuous", family: "present", verb: "to sleep", marker: "Be quiet!", en: "Be quiet please, the baby is sleeping.", fr: "Fais silence s'il te plaît, le bébé est en train de dormir.", target: "is sleeping", distractors: ["sleeps", "slept", "was sleeping"], note: "'Be quiet!' montre que l'action se passe maintenant ➔ is sleeping." },
    { id: "vt_22", tense: "present_continuous", family: "present", verb: "to use (négatif)", marker: "right now", en: "I am not using my laptop right now if you need it.", fr: "Je n'utilise pas mon ordinateur portable en ce moment si tu en as besoin.", target: "am not using", distractors: ["don't use", "didn't use", "wasn't using"], note: "Négation du Présent Continu avec 'I' : am not using." },

    // =====================================================
    // 3. PAST REGULAR & WAS/WERE (past_regular)
    // =====================================================
    { id: "vt_23", tense: "past_regular", family: "past", verb: "to walk", marker: "yesterday", en: "Yesterday, we walked along the harbourfront.", fr: "Hier, nous avons marché le long du port.", target: "walked", distractors: ["walk", "are walking", "will walk"], note: "'Yesterday' = action terminée dans le passé ➔ verbe régulier + -ed (walked)." },
    { id: "vt_24", tense: "past_regular", family: "past", verb: "to watch", marker: "last night", en: "I watched a great documentary last night.", fr: "J'ai regardé un super documentaire hier soir.", target: "watched", distractors: ["watch", "have watched", "was watching"], note: "'Last night' est un moment passé révolu ➔ Passé Simple : watched." },
    { id: "vt_25", tense: "past_regular", family: "past", verb: "to be", marker: "yesterday", en: "She was very busy at the office yesterday.", fr: "Elle était très occupée au bureau hier.", target: "was", distractors: ["is", "were", "has been"], note: "Passé de 'to be' avec 'She' : was." },
    { id: "vt_26", tense: "past_regular", family: "past", verb: "to be", marker: "last weekend", en: "We were in Montreal last weekend.", fr: "Nous étions à Montréal le week-end dernier.", target: "were", distractors: ["was", "are", "will be"], note: "Passé de 'to be' au pluriel ('We / You / They') : were." },
    { id: "vt_27", tense: "past_regular", family: "past", verb: "to work (négatif)", marker: "yesterday", en: "I didn't work yesterday because it was a holiday.", fr: "Je n'ai pas travaillé hier car c'était un jour férié.", target: "didn't work", distractors: ["didn't worked", "don't work", "wasn't working"], note: "⚠️ Règle clé : après 'didn't', le verbe revient TOUJOURS à la base sans -ed (didn't work)." },
    { id: "vt_28", tense: "past_regular", family: "past", verb: "to call (question)", marker: "this morning", en: "Did you call your parents this morning?", fr: "As-tu appelé tes parents ce matin ?", target: "Did you call", distractors: ["Did you called", "Do you call", "Were you calling"], note: "Question au Passé Simple : Did + sujet + verbe de base (call)." },
    { id: "vt_29", tense: "past_regular", family: "past", verb: "to arrive", marker: "two hours ago", en: "Our flight arrived two hours ago.", fr: "Notre vol est arrivé il y a deux heures.", target: "arrived", distractors: ["arrives", "has arrived", "is arriving"], note: "'Ago' (il y a...) déclenche toujours le Passé Simple : arrived." },
    { id: "vt_30", tense: "past_regular", family: "past", verb: "to rain", marker: "all day yesterday", en: "It rained heavily all day yesterday.", fr: "Il a plu fort toute la journée d'hier.", target: "rained", distractors: ["rains", "is raining", "will rain"], note: "Action passée terminée ('yesterday') ➔ rained." },
    { id: "vt_31", tense: "past_regular", family: "past", verb: "to book", marker: "last week", en: "They booked their train tickets last week.", fr: "Ils ont réservé leurs billets de train la semaine dernière.", target: "booked", distractors: ["book", "are booking", "will book"], note: "'Last week' = Passé Simple régulier : booked." },
    { id: "vt_32", tense: "past_regular", family: "past", verb: "to study", marker: "in 2024", en: "She studied English in Toronto for four months.", fr: "Elle a étudié l'anglais à Toronto pendant quatre mois.", target: "studied", distractors: ["studies", "is studying", "study"], note: "Verbe en consonne + y (study) ➔ le -y devient -ied au passé : studied." },
    { id: "vt_33", tense: "past_regular", family: "past", verb: "to be (négatif)", marker: "last night", en: "The restaurant wasn't very crowded last night.", fr: "Le restaurant n'était pas très rempli hier soir.", target: "wasn't", distractors: ["isn't", "weren't", "didn't be"], note: "Avec 'to be' au passé, on n'utilise jamais 'didn't' : on dit wasn't / weren't." },
    { id: "vt_34", tense: "past_regular", family: "past", verb: "to enjoy (question)", marker: "last weekend", en: "Did you enjoy the concert last weekend?", fr: "As-tu apprécié le concert le week-end dernier ?", target: "Did you enjoy", distractors: ["Do you enjoy", "Were you enjoy", "Did you enjoyed"], note: "Did + sujet + base verbale (enjoy)." },

    // =====================================================
    // 4. PAST IRREGULAR (past_irregular)
    // =====================================================
    { id: "vt_35", tense: "past_irregular", family: "past", verb: "to go", marker: "yesterday", en: "Yesterday, I went to St. Lawrence Market.", fr: "Hier, je suis allé(e) au marché St. Lawrence.", target: "went", distractors: ["go", "gone", "am going"], note: "Passé irrégulier de 'to go' ➔ went." },
    { id: "vt_36", tense: "past_irregular", family: "past", verb: "to see", marker: "last night", en: "We saw a beautiful sunset over Lake Ontario last night.", fr: "Nous avons vu un magnifique coucher de soleil sur le lac Ontario hier soir.", target: "saw", distractors: ["see", "seen", "were seeing"], note: "Passé irrégulier de 'to see' ➔ saw (attention : 'seen' est le participe passé !)." },
    { id: "vt_37", tense: "past_irregular", family: "past", verb: "to buy", marker: "this morning", en: "She bought fresh bagels at the bakery this morning.", fr: "Elle a acheté des bagels frais à la boulangerie ce matin.", target: "bought", distractors: ["buy", "buyed", "is buying"], note: "Passé irrégulier de 'to buy' ➔ bought." },
    { id: "vt_38", tense: "past_irregular", family: "past", verb: "to have", marker: "yesterday", en: "They had a wonderful time at Niagara Falls yesterday.", fr: "Ils ont passé un moment merveilleux aux chutes du Niagara hier.", target: "had", distractors: ["have", "has", "having"], note: "Passé irrégulier de 'to have' ➔ had." },
    { id: "vt_39", tense: "past_irregular", family: "past", verb: "to take", marker: "ten minutes ago", en: "He took a taxi to the airport ten minutes ago.", fr: "Il a pris un taxi pour l'aéroport il y a dix minutes.", target: "took", distractors: ["take", "taken", "takes"], note: "Passé irrégulier de 'to take' ➔ took." },
    { id: "vt_40", tense: "past_irregular", family: "past", verb: "to make", marker: "for breakfast", en: "I made pancakes with maple syrup for breakfast.", fr: "J'ai fait des pancakes au sirop d'érable pour le petit-déjeuner.", target: "made", distractors: ["make", "maked", "am making"], note: "Passé irrégulier de 'to make' ➔ made." },
    { id: "vt_41", tense: "past_irregular", family: "past", verb: "to meet", marker: "in Toronto", en: "I met so many friendly people when I was in Toronto.", fr: "J'ai rencontré tellement de gens sympathiques quand j'étais à Toronto.", target: "met", distractors: ["meet", "meeted", "have met"], note: "Passé irrégulier de 'to meet' ➔ met." },
    { id: "vt_42", tense: "past_irregular", family: "past", verb: "to leave", marker: "early this morning", en: "She left the house early this morning.", fr: "Elle a quitté la maison tôt ce matin.", target: "left", distractors: ["leave", "leaved", "leaves"], note: "Passé irrégulier de 'to leave' ➔ left." },
    { id: "vt_43", tense: "past_irregular", family: "past", verb: "to forget", marker: "yesterday", en: "Oops, I forgot my umbrella on the train yesterday.", fr: "Oups, j'ai oublié mon parapluie dans le train hier.", target: "forgot", distractors: ["forget", "forgotten", "forgets"], note: "Passé irrégulier de 'to forget' ➔ forgot." },
    { id: "vt_44", tense: "past_irregular", family: "past", verb: "to tell", marker: "last week", en: "He told me the good news last week.", fr: "Il m'a annoncé la bonne nouvelle la semaine dernière.", target: "told", distractors: ["tell", "telled", "tells"], note: "Passé irrégulier de 'to tell' ➔ told." },
    { id: "vt_45", tense: "past_irregular", family: "past", verb: "to come", marker: "last Friday", en: "My friends came over for dinner last Friday.", fr: "Mes amis sont venus dîner à la maison vendredi dernier.", target: "came", distractors: ["come", "comed", "are coming"], note: "Passé irrégulier de 'to come' ➔ came." },
    { id: "vt_46", tense: "past_irregular", family: "past", verb: "to find", marker: "yesterday", en: "Thankfully, I found my keys in my coat pocket.", fr: "Heureusement, j'ai trouvé mes clés dans la poche de mon manteau.", target: "found", distractors: ["find", "finded", "am finding"], note: "Passé irrégulier de 'to find' ➔ found." },
    { id: "vt_47", tense: "past_irregular", family: "past", verb: "to go (négatif)", marker: "last night", en: "We didn't go out last night because we were tired.", fr: "Nous ne sommes pas sortis hier soir parce que nous étions fatigués.", target: "didn't go", distractors: ["didn't went", "don't go", "haven't gone"], note: "⚠️ Piège classique : après 'didn't', on remet 'go' (jamais 'didn't went') !" },
    { id: "vt_48", tense: "past_irregular", family: "past", verb: "to eat", marker: "at noon", en: "We ate lunch at a cozy little bistro on Queen Street.", fr: "Nous avons déjeuné dans un petit bistrot chaleureux sur Queen Street.", target: "ate", distractors: ["eat", "eaten", "were eating"], note: "Passé irrégulier de 'to eat' ➔ ate." },
    { id: "vt_49", tense: "past_irregular", family: "past", verb: "to spend", marker: "last summer", en: "She spent three months in Canada last summer.", fr: "Elle a passé trois mois au Canada l'été dernier.", target: "spent", distractors: ["spend", "spended", "spends"], note: "Passé irrégulier de 'to spend' ➔ spent." },
    { id: "vt_50", tense: "past_irregular", family: "past", verb: "to speak", marker: "yesterday", en: "I spoke with the manager about my schedule yesterday.", fr: "J'ai parlé de mon emploi du temps avec le responsable hier.", target: "spoke", distractors: ["speak", "spoken", "speaks"], note: "Passé irrégulier de 'to speak' ➔ spoke." },

    // =====================================================
    // 5. PRESENT PERFECT (present_perfect)
    // =====================================================
    { id: "vt_51", tense: "present_perfect", family: "past", verb: "to be (expérience)", marker: "ever", en: "Have you ever been to Toronto?", fr: "Es-tu déjà allé(e) à Toronto (dans ta vie) ?", target: "Have you ever been", distractors: ["Did you ever go", "Are you ever being", "Were you ever"], note: "Pour une expérience de vie ('ever' = déjà dans ta vie), on utilise le Present Perfect : Have you ever been...?" },
    { id: "vt_52", tense: "present_perfect", family: "past", verb: "to finish", marker: "already", en: "She has already finished her report.", fr: "Elle a déjà terminé son rapport.", target: "has already finished", distractors: ["already finished", "is already finishing", "have already finished"], note: "Avec 'already' et 'She' ➔ Present Perfect : has already finished." },
    { id: "vt_53", tense: "present_perfect", family: "past", verb: "to see (négatif)", marker: "yet", en: "I haven't seen that movie yet.", fr: "Je n'ai pas encore vu ce film.", target: "haven't seen", distractors: ["didn't see", "don't see", "haven't saw"], note: "'Yet' (pas encore) s'utilise avec le Present Perfect : haven't + participe passé (seen)." },
    { id: "vt_54", tense: "present_perfect", family: "past", verb: "to arrive", marker: "just", en: "We have just arrived at the station.", fr: "Nous venons tout juste d'arriver à la gare.", target: "have just arrived", distractors: ["just arrive", "are just arriving", "had just arrive"], note: "Pour traduire 'venir tout juste de faire qqch' : have/has just + participe passé." },
    { id: "vt_55", tense: "present_perfect", family: "past", verb: "to live", marker: "for five years", en: "They have lived in this neighborhood for five years.", fr: "Ils habitent dans ce quartier depuis cinq ans (et y sont encore).", target: "have lived", distractors: ["live", "lived", "are living"], note: "En anglais, une action commencée dans le passé qui continue aujourd'hui ('for / since') se met au Present Perfect !" },
    { id: "vt_56", tense: "present_perfect", family: "past", verb: "to try", marker: "never", en: "I have never tried poutine before.", fr: "Je n'ai encore jamais goûté de poutine auparavant.", target: "have never tried", distractors: ["never tried", "am never trying", "has never tried"], note: "Bilan d'expérience avec 'never' : have never + participe passé." },
    { id: "vt_57", tense: "present_perfect", family: "past", verb: "to lose", marker: "conséquence présente", en: "Oh no, I have lost my boarding pass!", fr: "Oh non, j'ai perdu ma carte d'embarquement (et je ne l'ai plus maintenant) !", target: "have lost", distractors: ["lose", "am losing", "has lost"], note: "Action passée avec une conséquence directe maintenant ➔ Present Perfect (have lost)." },
    { id: "vt_58", tense: "present_perfect", family: "past", verb: "to know", marker: "since 2021", en: "I have known her since 2021.", fr: "Je la connais depuis 2021.", target: "have known", distractors: ["know", "knew", "am knowing"], note: "Avec 'since 2021' (depuis 2021), on utilise have/has + participe passé (known)." },
    { id: "vt_59", tense: "present_perfect", family: "past", verb: "to reply (négatif)", marker: "yet", en: "He hasn't replied to my email yet.", fr: "Il n'a pas encore répondu à mon e-mail.", target: "hasn't replied", distractors: ["didn't reply", "doesn't reply", "haven't replied"], note: "3e personne ('He') + 'yet' ➔ hasn't replied." },
    { id: "vt_60", tense: "present_perfect", family: "past", verb: "to eat (question)", marker: "already", en: "Have you eaten lunch yet?", fr: "As-tu déjà déjeuné ?", target: "Have you eaten", distractors: ["Did you eat", "Do you eat", "Have you ate"], note: "Participe passé de 'eat' : eaten (Have you eaten?)." },

    // =====================================================
    // 6. PAST CONTINUOUS (past_continuous)
    // =====================================================
    { id: "vt_61", tense: "past_continuous", family: "past", verb: "to sleep", marker: "when you called", en: "I was sleeping when you called me last night.", fr: "J'étais en train de dormir quand tu m'as appelé(e) hier soir.", target: "was sleeping", distractors: ["slept", "am sleeping", "have slept"], note: "Action longue en cours dans le passé ('was sleeping') interrompue par une action courte ('when you called')." },
    { id: "vt_62", tense: "past_continuous", family: "past", verb: "to snow", marker: "when we left", en: "It was snowing heavily when we left the restaurant.", fr: "Il neigeait fort quand nous avons quitté le restaurant.", target: "was snowing", distractors: ["snowed", "is snowing", "has snowed"], note: "Décor en cours dans le passé ➔ was snowing." },
    { id: "vt_63", tense: "past_continuous", family: "past", verb: "to walk", marker: "when I saw her", en: "We were walking down Yonge Street when we saw her.", fr: "Nous marchions sur Yonge Street quand nous l'avons vue.", target: "were walking", distractors: ["walked", "was walking", "are walking"], note: "Avec 'We' au Passé Continu ➔ were + walking." },
    { id: "vt_64", tense: "past_continuous", family: "past", verb: "to do (question)", marker: "at 8 PM yesterday", en: "What were you doing at eight o'clock last night?", fr: "Que faisais-tu hier soir à vingt heures ?", target: "were you doing", distractors: ["did you do", "are you doing", "was you doing"], note: "Action en cours à une heure précise du passé ➔ What were you doing?" },
    { id: "vt_65", tense: "past_continuous", family: "past", verb: "to wait", marker: "for the bus", en: "She was waiting for the bus when it started to rain.", fr: "Elle attendait le bus quand il a commencé à pleuvoir.", target: "was waiting", distractors: ["waited", "is waiting", "were waiting"], note: "Avec 'She' au Passé Continu ➔ was waiting." },
    { id: "vt_66", tense: "past_continuous", family: "past", verb: "to listen (négatif)", marker: "sorry", en: "Sorry, I wasn't listening. Could you repeat that?", fr: "Désolé(e), je n'écoutais pas. Pourrais-tu répéter ?", target: "wasn't listening", distractors: ["didn't listen", "am not listening", "weren't listening"], note: "Pour dire 'je n'étais pas en train d'écouter' ➔ I wasn't listening." },
    { id: "vt_67", tense: "past_continuous", family: "past", verb: "to work", marker: "while", en: "While I was cooking, he was setting the table.", fr: "Pendant que je cuisinais, il mettait la table.", target: "was cooking", distractors: ["cooked", "am cooking", "have cooked"], note: "Après 'While' (pendant que) au passé, on utilise le Passé Continu : was cooking." },
    { id: "vt_68", tense: "past_continuous", family: "past", verb: "to talk", marker: "on the phone", en: "They were talking on the phone when I walked in.", fr: "Ils parlaient au téléphone quand je suis entré(e).", target: "were talking", distractors: ["talked", "was talking", "are talking"], note: "Pluriel 'They' au Passé Continu ➔ were talking." },

    // =====================================================
    // 7. FUTURE GOING TO (future_going_to)
    // =====================================================
    { id: "vt_69", tense: "future_going_to", family: "future", verb: "to visit", marker: "next weekend", en: "We are going to visit Toronto Islands next weekend.", fr: "Nous allons visiter les îles de Toronto le week-end prochain (projet prévu).", target: "are going to visit", distractors: ["going to visit", "visited", "visit"], note: "Futur proche (projet déjà prévu) avec 'We' : are going to + verbe." },
    { id: "vt_70", tense: "future_going_to", family: "future", verb: "to call", marker: "tonight", en: "I am going to call my friends in Canada tonight.", fr: "Je vais appeler mes amis au Canada ce soir.", target: "am going to call", distractors: ["going to call", "called", "call"], note: "Avec 'I' : I am going to call (n'oublie pas 'am' !)." },
    { id: "vt_71", tense: "future_going_to", family: "future", verb: "to buy", marker: "tomorrow", en: "She is going to buy a new winter jacket tomorrow.", fr: "Elle va s'acheter une nouvelle veste d'hiver demain.", target: "is going to buy", distractors: ["are going to buy", "bought", "buys"], note: "Intention prévue avec 'She' : is going to buy." },
    { id: "vt_72", tense: "future_going_to", family: "future", verb: "to rain", marker: "Look at those clouds!", en: "Look at those dark clouds! It is going to rain soon.", fr: "Regarde ces nuages noirs ! Il va bientôt pleuvoir.", target: "is going to rain", distractors: ["rains", "rained", "was raining"], note: "Quand un signe visible montre que quelque chose est imminent, on utilise 'is going to'." },
    { id: "vt_73", tense: "future_going_to", family: "future", verb: "to do (question)", marker: "this evening", en: "What are you going to do this evening?", fr: "Qu'est-ce que tu vas faire ce soir ?", target: "are you going to do", distractors: ["do you going to do", "did you do", "will you doing"], note: "Question sur les projets de quelqu'un : What are you going to do?" },
    { id: "vt_74", tense: "future_going_to", family: "future", verb: "to stay", marker: "for two weeks", en: "They are going to stay with us for two weeks.", fr: "Ils vont rester chez nous pendant deux semaines.", target: "are going to stay", distractors: ["is going to stay", "stayed", "stay"], note: "Avec 'They' : are going to stay." },
    { id: "vt_75", tense: "future_going_to", family: "future", verb: "to cook (négatif)", marker: "tonight", en: "We aren't going to cook tonight; let's order Thai food!", fr: "Nous n'allons pas cuisiner ce soir ; commandons thaï !", target: "aren't going to cook", distractors: ["don't going to cook", "didn't cook", "weren't cooking"], note: "Négation du futur proche : aren't going to + verbe." },
    { id: "vt_76", tense: "future_going_to", family: "future", verb: "to move", marker: "next month", en: "He is going to move into his new apartment next month.", fr: "Il va emménager dans son nouvel appartement le mois prochain.", target: "is going to move", distractors: ["moves", "moved", "moving"], note: "Projet planifié ('next month') avec 'He' : is going to move." },

    // =====================================================
    // 8. FUTURE WILL / WON'T (future_will)
    // =====================================================
    { id: "vt_77", tense: "future_will", family: "future", verb: "to help", marker: "décision spontanée", en: "That bag looks heavy! I will help you carry it.", fr: "Ce sac a l'air lourd ! Je vais t'aider à le porter (décision prise sur l'instant).", target: "will help", distractors: ["am helping", "helped", "helps"], note: "Pour proposer son aide spontanément sur le moment, l'anglais utilise toujours 'I will (I'll) + verbe'." },
    { id: "vt_78", tense: "future_will", family: "future", verb: "to send", marker: "right away", en: "I will send you the address on WhatsApp right away.", fr: "Je t'envoie l'adresse sur WhatsApp tout de suite.", target: "will send", distractors: ["sent", "am sending", "sends"], note: "Promesse / action immédiate : I will send." },
    { id: "vt_79", tense: "future_will", family: "future", verb: "to be (négatif)", marker: "I promise", en: "Don't worry, I won't be late tomorrow morning!", fr: "Ne t'inquiète pas, je ne serai pas en retard demain matin !", target: "won't be", distractors: ["willn't be", "am not", "wasn't"], note: "La forme négative de 'will' est 'won't' (will not) + base verbale 'be'." },
    { id: "vt_80", tense: "future_will", family: "future", verb: "to love", marker: "I think", en: "I think you will love Kensington Market!", fr: "Je pense que tu vas adorer Kensington Market !", target: "will love", distractors: ["loved", "are loving", "have loved"], note: "Après 'I think / I'm sure', on utilise généralement 'will + verbe'." },
    { id: "vt_81", tense: "future_will", family: "future", verb: "to tell (négatif)", marker: "secret / promesse", en: "Your secret is safe with me; I won't tell anyone.", fr: "Ton secret est bien gardé avec moi ; je ne le dirai à personne.", target: "won't tell", distractors: ["don't tell", "didn't tell", "not tell"], note: "Promesse au futur négatif : I won't tell." },
    { id: "vt_82", tense: "future_will", family: "future", verb: "to call", marker: "as soon as", en: "She will call us as soon as her plane lands.", fr: "Elle nous appellera dès que son avion atterrira.", target: "will call", distractors: ["called", "is calling", "has called"], note: "Action future dans la proposition principale : She will call." },
    { id: "vt_83", tense: "future_will", family: "future", verb: "to have", marker: "au restaurant", en: "I think I will have the grilled salmon, please.", fr: "Je pense que je vais prendre le saumon grillé, s'il vous plaît.", target: "will have", distractors: ["had", "am having", "has"], note: "Au restaurant, pour annoncer son choix au serveur, on dit 'I'll have / I will have'." },
    { id: "vt_84", tense: "future_will", family: "future", verb: "to see", marker: "tomorrow", en: "Have a great evening, I will see you tomorrow!", fr: "Passe une très bonne soirée, on se voit demain !", target: "will see", distractors: ["saw", "have seen", "seeing"], note: "Expression classique de départ : I'll see you / I will see you tomorrow." },

    // =====================================================
    // 9. CONDITIONAL : WOULD / COULD / SHOULD (conditional)
    // =====================================================
    { id: "vt_85", tense: "conditional", family: "future", verb: "to like (conditionnel poli)", marker: "politesse", en: "I would like a medium oat milk latte, please.", fr: "Je voudrais un latte moyen au lait d'avoine, s'il vous plaît.", target: "would like", distractors: ["want", "liked", "will like"], note: "'Je voudrais' se traduit toujours par 'I would like' (ou 'I'd like'), beaucoup plus poli que 'I want'." },
    { id: "vt_86", tense: "conditional", family: "future", verb: "to help (question polie)", marker: "politesse", en: "Excuse me, could you help me for a second?", fr: "Excusez-moi, pourriez-vous m'aider une seconde ?", target: "could you help", distractors: ["can you helped", "did you help", "would you helping"], note: "'Pourriez-vous' = Could you + verbe de base." },
    { id: "vt_87", tense: "conditional", family: "future", verb: "to try (conseil)", marker: "conseil", en: "You should really try the butter tarts at this bakery!", fr: "Tu devrais vraiment goûter les tartelettes au beurre de cette boulangerie !", target: "should really try", distractors: ["would really try", "tried", "are trying"], note: "Pour donner un conseil ('tu devrais'), on utilise 'You should + verbe de base'." },
    { id: "vt_88", tense: "conditional", family: "future", verb: "to love", marker: "invitation", en: "I would love to join you for brunch on Sunday!", fr: "J'adorerais me joindre à vous pour le brunch dimanche !", target: "would love", distractors: ["loved", "am loving", "should love"], note: "'J'adorerais' (conditionnel) = I would love (I'd love)." },
    { id: "vt_89", tense: "conditional", family: "future", verb: "to worry (conseil négatif)", marker: "conseil", en: "You shouldn't worry so much; everything will be fine.", fr: "Tu ne devrais pas tant t'inquiéter ; tout ira bien.", target: "shouldn't worry", distractors: ["don't worry", "wouldn't worried", "didn't worry"], note: "'Tu ne devrais pas' = You shouldn't + verbe de base." },
    { id: "vt_90", tense: "conditional", family: "future", verb: "to travel (hypothèse)", marker: "if I had more time", en: "If I had more vacation days, I would travel across Canada.", fr: "Si j'avais plus de jours de congé, je voyagerais à travers le Canada.", target: "would travel", distractors: ["will travel", "traveled", "am traveling"], note: "Conditionnel (If + passé ➔ I would + verbe de base)." },
    { id: "vt_91", tense: "conditional", family: "future", verb: "to mind (question)", marker: "politesse", en: "Would you like to grab a coffee after work?", fr: "Aimerais-tu aller prendre un café après le travail ?", target: "Would you like", distractors: ["Do you like", "Did you like", "Will you liking"], note: "Pour proposer quelque chose poliment : Would you like to...?" },
    { id: "vt_92", tense: "conditional", family: "future", verb: "to send (demande polie)", marker: "au travail", en: "Could you please send me the updated file when you have a moment?", fr: "Pourrais-tu m'envoyer le fichier mis à jour quand tu auras un moment ?", target: "Could you please send", distractors: ["Can you sent", "Did you send", "Should you send"], note: "Formule professionnelle très naturelle : Could you please + verbe de base." }
  ];

  // State for Verb Tenses tab
  let currentTenseFilter = "all";
  let currentTenseMode = "fill";
  let currentTenseSession = [];
  let currentTenseIndex = 0;
  let tenseSessionAnswered = 0;
  let tenseSessionCorrect = 0;
  let isTenseAnswerChecked = false;
  let selectedTenseQCMOption = null;
  let tensesInitialized = false;

  function getFilteredTensePool(filterKey) {
    if (!filterKey || filterKey === "all") return [...VERB_TENSE_EXERCISES];
    if (filterKey === "present_all") {
      return VERB_TENSE_EXERCISES.filter(x => x.family === "present");
    }
    if (filterKey === "past_all") {
      return VERB_TENSE_EXERCISES.filter(x => x.family === "past");
    }
    if (filterKey === "future_all") {
      return VERB_TENSE_EXERCISES.filter(x => x.family === "future");
    }
    return VERB_TENSE_EXERCISES.filter(x => x.tense === filterKey);
  }

  function renderTenseGrammarCard(filterKey) {
    const meta = TENSE_META[filterKey] || TENSE_META.all;
    const iconEl = document.getElementById("tenseRuleIcon");
    const titleEl = document.getElementById("tenseRuleTitle");
    const markersEl = document.getElementById("tenseTimeMarkers");
    const usageEl = document.getElementById("tenseRuleUsage");
    const posEl = document.getElementById("tenseFormulaPos");
    const negEl = document.getElementById("tenseFormulaNeg");
    const qEl = document.getElementById("tenseFormulaQuestion");

    if (iconEl) iconEl.textContent = meta.icon;
    if (titleEl) titleEl.textContent = meta.title;
    if (markersEl) markersEl.textContent = meta.markers;
    if (usageEl) usageEl.innerHTML = meta.usage;
    if (posEl) posEl.textContent = meta.pos;
    if (negEl) negEl.textContent = meta.neg;
    if (qEl) qEl.textContent = meta.question;

    const poolCountBadge = document.getElementById("tensePoolCountBadge");
    if (poolCountBadge) {
      const count = getFilteredTensePool(filterKey).length;
      poolCountBadge.textContent = `${count} exercices ciblés sur ce choix`;
    }
  }

  function selectTenseFilter(filterKey) {
    currentTenseFilter = filterKey || "all";
    document.querySelectorAll(".tense-filter-btn").forEach(btn => {
      const active = btn.dataset.tenseFilter === currentTenseFilter;
      if (active) {
        btn.classList.add("active", "bg-indigo-600", "text-white", "shadow-sm");
        btn.classList.remove("bg-slate-100", "dark:bg-slate-700", "text-slate-700", "dark:text-slate-200");
      } else {
        btn.classList.remove("active", "bg-indigo-600", "text-white", "shadow-sm");
        btn.classList.add("bg-slate-100", "dark:bg-slate-700", "text-slate-700", "dark:text-slate-200");
      }
    });
    renderTenseGrammarCard(currentTenseFilter);
    startTenseSession();
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startTenseSession() {
    const pool = getFilteredTensePool(currentTenseFilter);
    currentTenseSession = shuffleArray(pool).slice(0, 15);
    currentTenseIndex = 0;
    tenseSessionAnswered = 0;
    tenseSessionCorrect = 0;
    renderCurrentTenseExercise();
  }

  function getTenseBadgeLabel(tenseKey) {
    const labels = {
      present_simple: "☀️ Présent Simple",
      present_continuous: "⚡ Présent Continu",
      past_regular: "⏪ Passé Régulier (-ed / was / were)",
      past_irregular: "🔥 Passé Irrégulier",
      present_perfect: "✨ Present Perfect",
      past_continuous: "🎬 Passé Continu",
      future_going_to: "📅 Futur Proche (Going to)",
      future_will: "🚀 Futur Simple (Will / Won't)",
      conditional: "💭 Conditionnel (Would / Could / Should)"
    };
    return labels[tenseKey] || "⏳ Conjugaison";
  }

  function renderCurrentTenseExercise() {
    const ex = currentTenseSession[currentTenseIndex];
    if (!ex) return;

    isTenseAnswerChecked = false;
    selectedTenseQCMOption = null;

    const total = currentTenseSession.length;
    const progText = document.getElementById("tenseSessionProgressText");
    const accText = document.getElementById("tenseSessionAccuracyText");
    const progBar = document.getElementById("tenseSessionProgressBar");

    if (progText) progText.textContent = `Verbe ${currentTenseIndex + 1} / ${total}`;
    if (accText) {
      const pct = tenseSessionAnswered > 0 ? Math.round((tenseSessionCorrect / tenseSessionAnswered) * 100) : 100;
      accText.textContent = `Précision : ${pct}%`;
    }
    if (progBar) {
      progBar.style.width = `${Math.max(7, Math.round(((currentTenseIndex + 1) / total) * 100))}%`;
    }

    const cardBadge = document.getElementById("tenseCardBadge");
    const verbBadge = document.getElementById("tenseVerbPromptBadge");
    const markerBadge = document.getElementById("tenseMarkerBadge");
    const promptFr = document.getElementById("tensePromptFr");
    const hintBox = document.getElementById("tenseHintBox");
    const hintText = document.getElementById("tenseHintText");
    const feedback = document.getElementById("tenseFeedbackContainer");
    const verifyBtn = document.getElementById("tenseVerifyBtn");
    const nextBtn = document.getElementById("tenseNextBtn");
    const area = document.getElementById("tenseInteractionArea");

    if (cardBadge) cardBadge.textContent = getTenseBadgeLabel(ex.tense);
    if (verbBadge) verbBadge.textContent = `Verbe : ${ex.verb.toUpperCase()}`;
    if (markerBadge) markerBadge.textContent = `Indice : ${ex.marker}`;
    if (promptFr) promptFr.textContent = ex.fr;

    if (hintBox) hintBox.classList.add("hidden");
    if (hintText) hintText.textContent = `💡 Règle : ${ex.note}`;

    if (feedback) {
      feedback.classList.add("hidden");
      feedback.innerHTML = "";
    }
    if (verifyBtn) verifyBtn.classList.remove("hidden");
    if (nextBtn) nextBtn.classList.add("hidden");

    if (!area) return;

    // Build masked sentence where target is replaced by input/blank + verb hint
    const escapedTarget = ex.target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedTarget}\\b`, 'i');
    const options = shuffleArray([ex.target, ...(ex.distractors || []).slice(0, 3)]);

    if (currentTenseMode === "qcm") {
      const blankedSentence = ex.en.replace(regex, `<span class="px-3 py-1 mx-1 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-extrabold underline decoration-dashed">___ (${ex.verb}) ___</span>`);
      area.innerHTML = `
        <div class="space-y-5">
          <div class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
            ${blankedSentence}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="tenseQcmGrid">
            ${options.map(opt => `
              <button type="button" data-tense-qcm="${opt.replace(/"/g, '&quot;')}" class="tense-qcm-opt p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-500 text-left font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 transition flex items-center justify-between">
                <span>${opt}</span>
                <span class="text-xs text-slate-400">Choisir</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;

      area.querySelectorAll(".tense-qcm-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          playSound("click");
          selectedTenseQCMOption = btn.dataset.tenseQcm;
          area.querySelectorAll(".tense-qcm-opt").forEach(b => {
            b.classList.remove("border-indigo-600", "bg-indigo-50/70", "dark:bg-indigo-950/50");
          });
          btn.classList.add("border-indigo-600", "bg-indigo-50/70", "dark:bg-indigo-950/50");
          verifyTenseAnswer();
        });
      });
    } else if (currentTenseMode === "writing") {
      area.innerHTML = `
        <div class="space-y-3">
          <label class="block text-xs font-bold uppercase text-slate-400">
            Traduis toute la phrase en anglais en conjuguant "${ex.verb}" au bon temps :
          </label>
          <input id="tenseWritingInput" type="text" autocomplete="off" placeholder="Écris la phrase en anglais ici..." class="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-base font-bold text-slate-900 dark:text-white focus:border-indigo-500 outline-none" />
        </div>
      `;
      const wInput = document.getElementById("tenseWritingInput");
      if (wInput) {
        wInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            if (!isTenseAnswerChecked) verifyTenseAnswer();
            else goToNextTenseExercise();
          }
        });
      }
    } else {
      // Default 'fill' mode: inline input + 4 quick-choice conjugation pills
      const inputHtml = `<input id="tenseClozeInput" type="text" autocomplete="off" placeholder="${ex.verb}" class="inline-block w-48 sm:w-56 mx-1 px-3 py-1.5 rounded-xl border-2 border-indigo-400 dark:border-indigo-500 bg-indigo-50/50 dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-indigo-500" />`;
      const sentenceHtml = ex.en.replace(regex, inputHtml);

      area.innerHTML = `
        <div class="space-y-5">
          <div class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
            ${sentenceHtml}
          </div>
          <div class="space-y-2">
            <div class="text-xs font-bold text-slate-400">
              Tape la forme conjuguée de <strong class="text-indigo-600 dark:text-indigo-400">${ex.verb}</strong> ou clique sur l'une des formes :
            </div>
            <div class="flex flex-wrap gap-2">
              ${options.map(opt => `
                <button type="button" data-tense-pill="${opt.replace(/"/g, '&quot;')}" class="tense-fill-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 hover:bg-indigo-600 hover:text-white border border-slate-200 dark:border-slate-600 transition">
                  ${opt}
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `;

      const cInput = document.getElementById("tenseClozeInput");
      if (cInput) {
        cInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            if (!isTenseAnswerChecked) verifyTenseAnswer();
            else goToNextTenseExercise();
          }
        });
      }

      area.querySelectorAll(".tense-fill-pill").forEach(pill => {
        pill.addEventListener("click", () => {
          playSound("click");
          const val = pill.dataset.tensePill;
          const inp = document.getElementById("tenseClozeInput");
          if (inp) inp.value = val;
          verifyTenseAnswer();
        });
      });
    }
  }

  function verifyTenseAnswer() {
    if (isTenseAnswerChecked) {
      goToNextTenseExercise();
      return;
    }

    const ex = currentTenseSession[currentTenseIndex];
    if (!ex) return;

    let isCorrect = false;
    let userVal = "";

    if (currentTenseMode === "qcm") {
      userVal = selectedTenseQCMOption || "";
      isCorrect = cleanStr(userVal) === cleanStr(ex.target);
    } else if (currentTenseMode === "writing") {
      const inp = document.getElementById("tenseWritingInput");
      userVal = inp ? inp.value : "";
      isCorrect = calculateSimilarity(cleanStr(userVal), cleanStr(ex.en)) >= 0.88;
    } else {
      const inp = document.getElementById("tenseClozeInput");
      userVal = inp ? inp.value : "";
      isCorrect = cleanStr(userVal) === cleanStr(ex.target);
    }

    isTenseAnswerChecked = true;
    tenseSessionAnswered++;
    state.answersCount = (state.answersCount || 0) + 1;

    const feedback = document.getElementById("tenseFeedbackContainer");
    const verifyBtn = document.getElementById("tenseVerifyBtn");
    const nextBtn = document.getElementById("tenseNextBtn");

    if (isCorrect) {
      playSound("success");
      tenseSessionCorrect++;
      state.correctCount = (state.correctCount || 0) + 1;
      state.xp = (state.xp || 0) + 10;

      if (feedback) {
        feedback.className = "p-5 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/95 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 space-y-2";
        feedback.innerHTML = `
          <div class="font-extrabold text-base text-emerald-700 dark:text-emerald-300">
            🎉 Bravo ! Conjugaison parfaite (+10 XP)
          </div>
          <div class="text-lg font-black text-slate-900 dark:text-white">
            "${ex.en}"
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            💡 <strong>Pourquoi ce temps :</strong> ${ex.note}
          </p>
        `;
        feedback.classList.remove("hidden");
      }
    } else {
      playSound("error");
      if (feedback) {
        feedback.className = "p-5 rounded-2xl border border-rose-300 dark:border-rose-800 bg-rose-50/95 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 space-y-2";
        feedback.innerHTML = `
          <div class="font-extrabold text-base text-rose-700 dark:text-rose-300">
            Pas tout à fait ! La forme attendue de "${ex.verb}" était : <span class="underline">${ex.target}</span>
          </div>
          <div class="text-lg font-black text-slate-900 dark:text-white">
            "${ex.en}"
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            💡 <strong>Explication :</strong> ${ex.note}
          </p>
        `;
        feedback.classList.remove("hidden");
      }
    }

    if (verifyBtn) verifyBtn.classList.add("hidden");
    if (nextBtn) nextBtn.classList.remove("hidden");

    const accText = document.getElementById("tenseSessionAccuracyText");
    if (accText && tenseSessionAnswered > 0) {
      accText.textContent = `Précision : ${Math.round((tenseSessionCorrect / tenseSessionAnswered) * 100)}%`;
    }
    saveState();
  }

  function revealOrSkipTense() {
    const ex = currentTenseSession[currentTenseIndex];
    if (!ex) return;

    if (!isTenseAnswerChecked) {
      isTenseAnswerChecked = true;
      const feedback = document.getElementById("tenseFeedbackContainer");
      const verifyBtn = document.getElementById("tenseVerifyBtn");
      const nextBtn = document.getElementById("tenseNextBtn");

      if (feedback) {
        feedback.className = "p-5 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50/95 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100 space-y-2";
        feedback.innerHTML = `
          <div class="font-extrabold text-sm text-amber-800 dark:text-amber-300">
            👀 Réponse révélée — Forme conjuguée : <span class="underline">${ex.target}</span>
          </div>
          <div class="text-lg font-black text-slate-900 dark:text-white">
            "${ex.en}"
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            💡 <strong>Règle :</strong> ${ex.note}
          </p>
        `;
        feedback.classList.remove("hidden");
      }
      if (verifyBtn) verifyBtn.classList.add("hidden");
      if (nextBtn) nextBtn.classList.remove("hidden");
    } else {
      goToNextTenseExercise();
    }
  }

  function goToNextTenseExercise() {
    playSound("click");
    if (currentTenseIndex < currentTenseSession.length - 1) {
      currentTenseIndex++;
      renderCurrentTenseExercise();
    } else {
      startTenseSession();
    }
  }

  function renderIrregularVerbsTable(searchQuery = "") {
    const tbody = document.getElementById("irregularVerbsTableBody");
    if (!tbody) return;

    const q = cleanStr(searchQuery);
    const filtered = IRREGULAR_VERBS_LIST.filter(v => {
      if (!q) return true;
      return cleanStr(v.fr).includes(q) || cleanStr(v.base).includes(q) || cleanStr(v.past).includes(q) || cleanStr(v.pp).includes(q);
    });

    tbody.innerHTML = filtered.map(v => {
      const spokenForms = `${v.base.split(' ')[0]}, ${v.past.split('/')[0].trim()}, ${v.pp.split('/')[0].trim()}`;
      return `
        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition">
          <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">${v.fr}</td>
          <td class="py-3 px-4 font-bold text-slate-900 dark:text-white">${v.base}</td>
          <td class="py-3 px-4 font-bold text-amber-700 dark:text-amber-300">${v.past}</td>
          <td class="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-300">${v.pp}</td>
          <td class="py-3 px-4 text-right">
            <button type="button" data-speak-verb="${spokenForms.replace(/"/g, '&quot;')}" class="speak-verb-btn px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white transition">
              🔊 Écouter
            </button>
          </td>
        </tr>
      `;
    }).join("");

    tbody.querySelectorAll(".speak-verb-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        speakEnglish(btn.dataset.speakVerb);
      });
    });
  }

  function initTensesTab() {
    if (!tensesInitialized) {
      tensesInitialized = true;
      renderTenseGrammarCard(currentTenseFilter);
      startTenseSession();
      renderIrregularVerbsTable("");
    }
  }

  // 21. GLOBAL EVENTS & INIT
  document.addEventListener('DOMContentLoaded', () => {
    updateTopBarUI();
    renderStepSelectors();

    // Start directly on practice tab with Step 1
    startSession(state.currentStepFilter || "1");

    // Brand click returns to practice
    const brandBtn = document.getElementById('brandHomeBtn');
    if (brandBtn) brandBtn.addEventListener('click', () => switchTab('practice'));

    // Navigation Tabs
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

    // Practice Step Selector Dropdown
    const practiceSel = document.getElementById('practiceStepSelect');
    if (practiceSel) {
      practiceSel.addEventListener('change', () => {
        selectStep(practiceSel.value);
      });
    }

    // Quick Action Buttons in Practice Bar
    const quickAddBtn = document.getElementById('quickAddPhraseBtn');
    if (quickAddBtn) {
      quickAddBtn.addEventListener('click', () => switchTab('notebook'));
    }

    const quickRoadmapBtn = document.getElementById('openRoadmapQuickBtn');
    if (quickRoadmapBtn) {
      quickRoadmapBtn.addEventListener('click', () => switchTab('roadmap'));
    }

    // Practice Mode Buttons (sync initial state + click handlers)
    document.querySelectorAll('.practice-mode-btn').forEach(btn => {
      const isInitialMode = btn.dataset.practiceMode === state.practiceMode;
      if (isInitialMode) {
        btn.classList.add('active', 'bg-rose-600', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
      } else {
        btn.classList.remove('active', 'bg-rose-600', 'text-white', 'shadow-sm');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
      }

      btn.addEventListener('click', () => {
        playSound('click');
        document.querySelectorAll('.practice-mode-btn').forEach(b => {
          b.classList.remove('active', 'bg-rose-600', 'text-white', 'shadow-sm');
          b.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        });
        btn.classList.add('active', 'bg-rose-600', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        state.practiceMode = normalizePracticeMode(btn.dataset.practiceMode);
        saveState();
        renderCurrentPhrase();
      });
    });

    // Practice Card Actions
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
          star.textContent = isFav ? "⭐ Favori" : "☆ Favori";
        }
      });
    }

    const verifyBtn = document.getElementById('verifyBtn');
    if (verifyBtn) verifyBtn.addEventListener('click', verifyCurrentAnswer);

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.addEventListener('click', goToNextPhrase);

    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) skipBtn.addEventListener('click', revealOrSkipPhrase);

    const newBatchBtn = document.getElementById('newBatchBtn');
    if (newBatchBtn) {
      newBatchBtn.addEventListener('click', () => {
        playSound('click');
        startSession(state.currentStepFilter);
      });
    }

    // ==========================================================
    // VERB TENSES TAB EVENT LISTENERS
    // ==========================================================
    document.querySelectorAll('.tense-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        selectTenseFilter(btn.dataset.tenseFilter);
      });
    });

    document.querySelectorAll('.tense-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        currentTenseMode = btn.dataset.tenseMode || 'fill';
        document.querySelectorAll('.tense-mode-btn').forEach(b => {
          b.classList.remove('active', 'bg-rose-600', 'text-white', 'shadow-sm');
          b.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        });
        btn.classList.add('active', 'bg-rose-600', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        renderCurrentTenseExercise();
      });
    });

    const tenseNewBatchBtn = document.getElementById('tenseNewBatchBtn');
    if (tenseNewBatchBtn) {
      tenseNewBatchBtn.addEventListener('click', () => {
        playSound('click');
        startTenseSession();
      });
    }

    const tensePronounceBtn = document.getElementById('tensePronounceBtn');
    if (tensePronounceBtn) {
      tensePronounceBtn.addEventListener('click', () => {
        const ex = currentTenseSession[currentTenseIndex];
        if (ex) speakEnglish(ex.en);
      });
    }

    const tenseHintBtn = document.getElementById('tenseHintBtn');
    if (tenseHintBtn) {
      tenseHintBtn.addEventListener('click', () => {
        playSound('click');
        const hb = document.getElementById('tenseHintBox');
        if (hb) hb.classList.toggle('hidden');
      });
    }

    const tenseVerifyBtn = document.getElementById('tenseVerifyBtn');
    if (tenseVerifyBtn) tenseVerifyBtn.addEventListener('click', verifyTenseAnswer);

    const tenseNextBtn = document.getElementById('tenseNextBtn');
    if (tenseNextBtn) tenseNextBtn.addEventListener('click', goToNextTenseExercise);

    const tenseSkipBtn = document.getElementById('tenseSkipBtn');
    if (tenseSkipBtn) tenseSkipBtn.addEventListener('click', revealOrSkipTense);

    const irregularVerbSearch = document.getElementById('irregularVerbSearch');
    if (irregularVerbSearch) {
      irregularVerbSearch.addEventListener('input', () => {
        renderIrregularVerbsTable(irregularVerbSearch.value);
      });
    }

    // Keyboard Shortcuts (Enter for Verify / Next)
    window.addEventListener('keydown', (e) => {
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : '';
      if (e.key === 'Enter') {
        if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(tag)) return;
        const practiceSection = document.getElementById('tab-practice');
        if (practiceSection && !practiceSection.classList.contains('hidden')) {
          e.preventDefault();
          if (!isCurrentAnswerChecked) verifyCurrentAnswer();
          else goToNextPhrase();
        }
        const tensesSection = document.getElementById('tab-tenses');
        if (tensesSection && !tensesSection.classList.contains('hidden')) {
          e.preventDefault();
          if (!isTenseAnswerChecked) verifyTenseAnswer();
          else goToNextTenseExercise();
        }
      } else if (e.code === 'Space') {
        const fcSection = document.getElementById('tab-flashcards');
        if (fcSection && !fcSection.classList.contains('hidden') && !['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(tag)) {
          e.preventDefault();
          flipFlashcard();
        }
      }
    });

    // Roadmap Start Step clicks
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-start-step]');
      if (target) {
        const stepNum = target.dataset.startStep;
        selectStep(stepNum);
        switchTab('practice');
      }
    });

    // Hero buttons in roadmap
    const heroResume = document.getElementById('heroResumeBtn');
    if (heroResume) heroResume.addEventListener('click', () => switchTab('practice'));

    const heroExplore = document.getElementById('heroExploreAllBtn');
    if (heroExplore) {
      heroExplore.addEventListener('click', () => {
        selectStep('all');
        switchTab('practice');
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

    // Custom phrase single form
    const customForm = document.getElementById('customPhraseForm');
    if (customForm) {
      customForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const en = document.getElementById('customEn').value.trim();
        const fr = document.getElementById('customFr').value.trim();
        const target = document.getElementById('customTarget').value.trim();
        const category = document.getElementById('customCategory').value.trim();
        const note = document.getElementById('customNote').value.trim();

        if (addCustomPhrase(en, fr, target, category, note)) {
          customForm.reset();
          renderCustomPhrasesList();
          renderStepSelectors();
          playSound('success');

          // Show confirmation banner
          const toast = document.getElementById('customSavedToast');
          if (toast) {
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 5000);
          }
        }
      });
    }

    const toastPracticeBtn = document.getElementById('toastPracticeNowBtn');
    if (toastPracticeBtn) {
      toastPracticeBtn.addEventListener('click', () => {
        selectStep('custom');
        switchTab('practice');
      });
    }

    const practiceMyPhrasesBtn = document.getElementById('practiceMyPhrasesBtn');
    if (practiceMyPhrasesBtn) {
      practiceMyPhrasesBtn.addEventListener('click', () => {
        selectStep('custom');
        switchTab('practice');
      });
    }

    // Bulk Add Phrases
    const bulkAddBtn = document.getElementById('bulkAddBtn');
    const bulkInput = document.getElementById('bulkPhrasesInput');
    if (bulkAddBtn && bulkInput) {
      bulkAddBtn.addEventListener('click', () => {
        const text = bulkInput.value.trim();
        if (!text) return;
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
        let addedCount = 0;

        lines.forEach(line => {
          let parts = [];
          if (line.includes('=')) parts = line.split('=');
          else if (line.includes('|')) parts = line.split('|');
          else if (line.includes(' - ')) parts = line.split(' - ');

          if (parts.length >= 2) {
            const en = parts[0].trim();
            const fr = parts[1].trim();
            if (en && fr) {
              addCustomPhrase(en, fr, '', 'Import rapide', '');
              addedCount++;
            }
          }
        });

        if (addedCount > 0) {
          bulkInput.value = '';
          renderCustomPhrasesList();
          renderStepSelectors();
          playSound('success');
          const toast = document.getElementById('customSavedToast');
          if (toast) {
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 5000);
          }
        }
      });
    }

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

    const fcStepSel = document.getElementById('flashcardStepSelect');
    if (fcStepSel) {
      fcStepSel.addEventListener('change', () => initFlashcards(fcStepSel.value));
    }

    // Explorer Search & Filters
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

    const expPracticeBtn = document.getElementById('practiceExplorerSelectionBtn');
    if (expPracticeBtn) {
      expPracticeBtn.addEventListener('click', () => {
        const stepVal = document.getElementById('explorerStepFilter')?.value || 'all';
        selectStep(stepVal);
        switchTab('practice');
      });
    }

    // Data Export / Import
    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const dl = document.createElement('a');
        dl.setAttribute("href", dataStr);
        dl.setAttribute("download", `toronto_english_master_backup_${new Date().toISOString().slice(0, 10)}.json`);
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
        if (confirm("Es-tu sûre de vouloir réinitialiser toutes tes statistiques et ton XP ? Tes phrases personnalisées seront conservées.")) {
          state.xp = 0;
          state.answersCount = 0;
          state.correctCount = 0;
          state.completedSteps = [];
          state.stepProgress = {};
          saveState();
          location.reload();
        }
      });
    }

    safeCreateIcons();
  });

})();
