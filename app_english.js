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
    { id: "b_stage1", title: "Maître du Quotidien", icon: "👋", desc: "Avoir pratiqué 5 étapes du Palier 1", condition: s => s.completedSteps.filter(x => x <= 10).length >= 5 },
    { id: "b_stage2", title: "Fluidité Professionnelle B2", icon: "💼", desc: "Avoir terminé 5 étapes du Palier 2", condition: s => s.completedSteps.filter(x => x >= 11 && x <= 20).length >= 5 },
    { id: "b_c1", title: "Éloquence & Nuance C1", icon: "🧠", desc: "Avoir pratiqué des phrases du Palier 3", condition: s => s.completedSteps.some(x => x >= 21) },
    { id: "b_master", title: "True Native Flow", icon: "👑", desc: "Atteindre 1 000 points d'XP", condition: s => s.xp >= 1000 }
  ];

  // 5. APPLICATION STATE & LOCALSTORAGE
  const STORAGE_KEY = "toronto_english_master_state_v3";
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
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("toronto_english_master_state_v2") || localStorage.getItem("toronto_english_master_state_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          let stepFilter = String(parsed.currentStepFilter || "1");
          if (stepFilter !== "all" && stepFilter !== "custom") {
            const num = parseInt(stepFilter, 10);
            if (isNaN(num) || num < 1 || num > 30) stepFilter = "1";
          }
          return {
            xp: parsed.xp || 0,
            streak: parsed.streak || 1,
            lastActiveDate: parsed.lastActiveDate || new Date().toISOString().slice(0, 10),
            answersCount: parsed.answersCount || 0,
            correctCount: parsed.correctCount || 0,
            completedSteps: Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [],
            stepProgress: (parsed.stepProgress && typeof parsed.stepProgress === 'object') ? parsed.stepProgress : {},
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
        <option value="all">🌐 Toutes les 30 étapes (Mélange complet)</option>
        <option value="custom">⭐ Mes phrases personnalisées (${(state.customPhrases || []).length})</option>
      `;
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = String(s.step);
        opt.textContent = `Étape ${s.step} : ${s.title} (${s.level})`;
        sel.appendChild(opt);
      });
      sel.value = state.currentStepFilter || "1";
    }

    // 2. Explorer dropdown
    if (expSel) {
      expSel.innerHTML = `
        <option value="all">Toutes les étapes (1 à 30)</option>
        <option value="custom">⭐ Mes phrases personnalisées (${(state.customPhrases || []).length})</option>
      `;
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = String(s.step);
        opt.textContent = `Étape ${s.step} : ${s.title}`;
        expSel.appendChild(opt);
      });
    }

    // 3. Flashcards dropdown
    if (fcSel) {
      fcSel.innerHTML = `
        <option value="all">Toutes les étapes</option>
        <option value="custom">⭐ Mes phrases (${(state.customPhrases || []).length})</option>
      `;
      STEPS.forEach(s => {
        const opt = document.createElement('option');
        opt.value = String(s.step);
        opt.textContent = `Étape ${s.step}`;
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

      // 1 to 30 pills
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
        pill.innerHTML = `${isCompleted ? '✓ ' : ''}Étape ${s.step}`;
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
          <button id="backToRoadmapBtn" type="button" class="px-5 py-3 rounded-2xl font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-white transition">
            🗺️ Voir les 30 étapes
          </button>
        </div>
      </div>
    `;

    const restartBtn = document.getElementById('restartSessionBtn');
    if (restartBtn) restartBtn.addEventListener('click', () => startSession(state.currentStepFilter));

    const roadmapBtn = document.getElementById('backToRoadmapBtn');
    if (roadmapBtn) roadmapBtn.addEventListener('click', () => switchTab('roadmap'));
  }

  // 14. ROADMAP GENERATOR (30 STEPS)
  function renderRoadmap(filterStage = "all") {
    const grid = document.getElementById('roadmapGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const STEPS = getSteps();
    const allPhrases = getAllPhrases();

    STEPS.forEach(st => {
      let stage = 1;
      if (st.step >= 21) stage = 3;
      else if (st.step >= 11) stage = 2;

      if (filterStage !== "all" && String(stage) !== String(filterStage)) {
        return;
      }

      const isCompleted = state.completedSteps.includes(st.step);
      const stepProg = state.stepProgress[st.step] || { answered: 0, correct: 0 };
      const phrasesInStep = allPhrases.filter(p => p.step === st.step).length || 75;
      const progressPercent = Math.min(100, Math.round((stepProg.answered / Math.max(1, phrasesInStep)) * 100));

      const card = document.createElement('div');
      card.setAttribute('data-start-step', st.step);
      card.className = `cursor-pointer bg-white dark:bg-slate-800 rounded-3xl border ${isCompleted ? 'border-emerald-500/50 dark:border-emerald-500/40 shadow-emerald-500/10' : 'border-slate-200 dark:border-slate-700/80'} p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-4`;

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
