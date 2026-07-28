import { AgeCategory, Coach, Facility, FAQItem, NewsArticle, Program, Testimonial, Player, MatchResult, SponsorshipPackage } from '../types';

export const ACADEMY_INFO = {
  name: "TANDEM FOOT CLUB",
  motto: {
    en: "Where your stadium dreams come to life.",
    fr: "Où vos rêves de stade prennent vie."
  },
  founded: "12 August 2024",
  headquarters: {
    street: "Street 407, Door 133",
    neighborhood: "N'Tabacoro – 3743 Logements",
    city: "Bamako",
    country: "Mali",
    fullAddress: "N'Tabacoro – 3743 Logements, Street 407, Door 133, Bamako, Mali"
  },
  contacts: {
    phones: [
      "+223 76 12 90 35",
      "+223 76 37 95 59",
      "+223 79 22 97 74"
    ],
    email: "contact@tandemfootclub.ml",
    instagram: "@tandemfootclub_bamako",
    facebook: "Tandem Foot Club Official"
  },
  mission: {
    en: "To contribute to the development of sports in Mali through football education, high-level coaching, and the promotion of discipline, teamwork, leadership, and excellence.",
    fr: "Contribuer au développement du sport au Mali par la formation footballistique, un encadrement de haut niveau et la promotion de la discipline, du travail d'équipe, du leadership et de l'excellence."
  },
  objectives: [
    {
      en: "Introduce youth aged 11 and above to elite sports and football fundamentals.",
      fr: "Initier les jeunes de 11 ans et plus au sport d'élite et aux fondamentaux du football."
    },
    {
      en: "Develop resilience, discipline, fraternity, respect, patriotism, and leadership.",
      fr: "Développer la résilience, la discipline, la fraternité, le respect, le patriotisme et le leadership."
    },
    {
      en: "Discover, nurture, and refine exceptional football talent in Mali.",
      fr: "Découvrir, cultiver et perfectionner les talents exceptionnels du football malien."
    },
    {
      en: "Establish strategic partnerships with national and European professional clubs.",
      fr: "Établir des partenariats stratégiques avec des clubs professionnels nationaux et internationaux."
    },
    {
      en: "Support student-athletes towards professional football careers.",
      fr: "Accompagner les jeunes athlètes vers une carrière footballistique professionnelle."
    },
    {
      en: "Promote academic excellence alongside athletic performance.",
      fr: "Promouvoir l'excellence académique en parallèle avec la performance sportive."
    }
  ]
};

// Ultra-high resolution imagery curated for Champions League & Nike Football aesthetic
export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop", // Stadium under lights
  "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1920&auto=format&fit=crop", // Young player control
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop"  // Dramatic stadium floodlight
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: "tech-train",
    title: { en: "Technical Mastery", fr: "Maîtrise Technique" },
    category: { en: "Core Development", fr: "Développement Fondamental" },
    description: {
      en: "High-frequency ball mastery, 1v1 dominance, first touch precision, and body orientation drills.",
      fr: "Maîtrise du ballon haute fréquence, dominance en 1v1, précision du premier contrôle et orientation du corps."
    },
    detailedDesc: {
      en: "Designed according to FIFA & UEFA modern methodology, our Technical Mastery program ensures every player achieves effortless ball control under high pressure.",
      fr: "Conçu selon la méthodologie moderne FIFA & UEFA, notre programme de maîtrise technique garantit un contrôle parfait sous haute pression."
    },
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["360° Dribbling & Escapes", "Ambipodal Shooting Precision", "Tight Space Passing Windows", "Scanning & Spatial Awareness"],
      fr: ["Dribble 360° et Dégagements", "Précision de tir des deux pieds", "Passes dans espaces réduits", "Prise d'information & Vision"]
    },
    duration: "10-12 hrs/week",
    intensity: "Elite"
  },
  {
    id: "tactical-dev",
    title: { en: "Tactical Intelligence", fr: "Intelligence Tactique" },
    category: { en: "Game Reading", fr: "Lecture du Jeu" },
    description: {
      en: "Positional play, press resistance, defensive compacting, and transition speed development.",
      fr: "Jeu de position, résistance au pressing, bloc défensif compact et vitesse de transition."
    },
    detailedDesc: {
      en: "Players master game phases through micro-sided games, interactive tablet breakdown, and full 11v11 positional positioning.",
      fr: "Les joueurs maîtrisent les phases de jeu grâce à des jeux réduits, des analyses vidéo sur tablette et du positionnement 11v11."
    },
    icon: "Compass",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["High Press & Gegenpressing", "Counter-Attack Transitions", "Defensive Line Coordination", "Set Piece Execution"],
      fr: ["Pressing Haut & Gegenpressing", "Transitions en Contre-Attaque", "Coordination de la Ligne Défensive", "Coup de Pied Arrêté"]
    },
    duration: "8 hrs/week",
    intensity: "Elite"
  },
  {
    id: "physical-prep",
    title: { en: "Athletic Conditioning", fr: "Préparation Physique" },
    category: { en: "Performance", fr: "Performance Athlétique" },
    description: {
      en: "Explosive acceleration, deceleration mechanics, aerobic capacity, and core stability.",
      fr: "Accélération explosive, mécanique de décélération, capacité aérobique et gainage."
    },
    detailedDesc: {
      en: "Scientific athletic development customized for growing adolescents to build power while protecting joints.",
      fr: "Développement athlétique scientifique personnalisé pour les adolescents en croissance afin de renforcer la puissance."
    },
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["GPS Player Tracking Data", "Plyometrics & Vertical Leap", "Sprint Speed Mechanics", "Core & Balance Training"],
      fr: ["Données de Suivi GPS", "Pliométrie & Détente Verticale", "Mécanique de Sprint", "Renforcement de la Sangle Abdominale"]
    },
    duration: "6 hrs/week",
    intensity: "Pro"
  },
  {
    id: "goalkeeper-acad",
    title: { en: "Goalkeeper Elite Unit", fr: "Académie des Gardiens" },
    category: { en: "Specialized Unit", fr: "Unité Spécialisée" },
    description: {
      en: "Shot stopping, reflex agility, aerial dominance, and modern swept-pass distribution.",
      fr: "Arrêts réflexes, agilité, maîtrise aérienne et jeu au pied moderne de relance."
    },
    detailedDesc: {
      en: "Goalkeepers are modern sweepers and first playmakers. Dedicated daily coaching with specialized equipment.",
      fr: "Les gardiens sont de véritables relanceurs. Entraînement quotidien dédié avec équipement spécialisé."
    },
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["1v1 Reflex Reactions", "Distribution with Both Feet", "Cross Command & Communication", "Penalty Box Leadership"],
      fr: ["Réflexes en 1v1", "Relance au pied des deux pieds", "Gestion des centres", "Leadership dans la surface"]
    },
    duration: "10 hrs/week",
    intensity: "Elite"
  },
  {
    id: "mental-coaching",
    title: { en: "Mental Resilience & Leadership", fr: "Coaching Mental & Leadership" },
    category: { en: "Mindset", fr: "Mental d'Acier" },
    description: {
      en: "Pressure management, focus isolation, emotional discipline, and team captaincy qualities.",
      fr: "Gestion de la pression, concentration, discipline émotionnelle et qualités de capitaine."
    },
    detailedDesc: {
      en: "Champions are built in the mind. Guided sessions teach players how to turn setbacks into motivation.",
      fr: "Les champions se construisent dans la tête. Séances guidées pour transformer les défis en victoires."
    },
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["Performance Anxiety Reduction", "Goal Setting Mindset", "In-Match Communication", "Patriotic & Team Honor"],
      fr: ["Gestion du Stress de Match", "Fixation d'Objectifs", "Communication Terrain", "Esprit d'Équipe & Fierté"]
    },
    duration: "3 hrs/week",
    intensity: "Developmental"
  },
  {
    id: "video-analysis",
    title: { en: "Video Match Analysis", fr: "Analyse Vidéo" },
    category: { en: "Tactical Tech", fr: "Technologie Tactique" },
    description: {
      en: "High-definition camera tracking, individual clip analysis, and opponent scouting reviews.",
      fr: "Captation caméra haute définition, analyse individuelle des séquences et décryptage des adversaires."
    },
    detailedDesc: {
      en: "Players review their own match highlights every week with coaches to accelerate game intelligence.",
      fr: "Les joueurs analysent leurs temps forts chaque semaine avec leurs entraîneurs pour accélérer leur apprentissage."
    },
    icon: "Video",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["HD Match Recording", "Individual Heatmaps", "Decision Making Clips", "Opponent Scouting Tactical Prep"],
      fr: ["Enregistrement Matchs HD", "Cartes Thermiques Individuelles", "Séquences Prise de Décision", "Analyse des Adversaires"]
    },
    duration: "2 hrs/week",
    intensity: "Pro"
  },
  {
    id: "nutrition-recovery",
    title: { en: "Sports Nutrition & Recovery", fr: "Nutrition & Récupération" },
    category: { en: "Health Science", fr: "Santé & Hygiène" },
    description: {
      en: "Hydration protocols, muscle recovery science, meal plans, and sleep optimization.",
      fr: "Protocole d'hydratation, science de la récupération musculaire, plans alimentaires et sommeil."
    },
    detailedDesc: {
      en: "Custom nutrition guidance adapted for young athletes in West Africa to support high growth and stamina.",
      fr: "Conseils nutritionnels adaptés aux jeunes athlètes pour soutenir une croissance optimale et l'endurance."
    },
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["Pre-Match Fueling", "Post-Training Muscle Repair", "Hydration Monitoring", "Ice Bath & Mobility Protocols"],
      fr: ["Alimentation d'Avant-Match", "Récupération Musculaire", "Monitoring d'Hydratation", "Bains Froides & Mobilité"]
    },
    duration: "Continuous",
    intensity: "Developmental"
  },
  {
    id: "injury-prevention",
    title: { en: "Injury Prevention Unit", fr: "Prévention des Blessures" },
    category: { en: "Sports Medicine", fr: "Médecine du Sport" },
    description: {
      en: "Biomechanics assessment, hamstring strengthening, ankle stability, and corrective routines.",
      fr: "Évaluation biomécanique, renforcement des ischio-jambiers, stabilité de cheville et exercices correctifs."
    },
    detailedDesc: {
      en: "Our medical team screens every player quarterly to correct posture and minimize soft-tissue injuries.",
      fr: "Notre équipe médicale évalue chaque joueur chaque trimestre pour corriger les postures et éviter les blessures."
    },
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    keyPoints: {
      en: ["Functional Movement Screen", "Joint Mobility Exercises", "Soft Tissue Physiotherapy", "Rehabilitation Pathway"],
      fr: ["Test de Mouvement Fonctionnel", "Mobilité Articulaire", "Physiothérapie", "Protocole de Réathlétisation"]
    },
    duration: "4 hrs/week",
    intensity: "Pro"
  }
];

export const AGE_CATEGORIES_DATA: AgeCategory[] = [
  {
    id: "u11",
    code: "U11",
    title: { en: "Under-11 Discovery & Passion", fr: "U11 Éveil & Initiation" },
    ageRange: "10 - 11 Yrs",
    objectives: {
      en: "Instilling love for the ball, basic coordination, joyful teamwork, and basic ball control.",
      fr: "Développer l'amour du ballon, la coordination de base, le travail d'équipe et la conduite de balle."
    },
    schedule: {
      en: "Wed & Sat: 15:30 - 17:30",
      fr: "Mer & Sam: 15h30 - 17h30"
    },
    sessionsPerWeek: 3,
    focusAreas: {
      en: ["Ball Control & Dribbling", "Eye-Foot Coordination", "Fair Play & Respect", "Small Sided 5v5 / 7v7 Games"],
      fr: ["Conduite & Dribble", "Coordination Œil-Pied", "Fair-Play & Respect", "Matchs Réduits 5v5 / 7v7"]
    },
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "u13",
    code: "U13",
    title: { en: "Under-13 Technical Foundation", fr: "U13 Fondation Technique" },
    ageRange: "12 - 13 Yrs",
    objectives: {
      en: "Refining passing accuracy, movement off the ball, positional basics, and decision making under light pressure.",
      fr: "Perfectionner la passe, le démarquage, la notion de poste et la prise de décision."
    },
    schedule: {
      en: "Tue, Thu, Sat: 16:00 - 18:00",
      fr: "Mar, Jeu, Sam: 16h00 - 18h00"
    },
    sessionsPerWeek: 4,
    focusAreas: {
      en: ["Two-Touch Speed Play", "Positioning 9v9 Layout", "Basic Tactical Concepts", "Discipline & Punctuality"],
      fr: ["Jeu Rapide à Deux Touches", "Organisation en 9v9", "Concepts Tactiques de Base", "Discipline & Ponctualité"]
    },
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "u15",
    code: "U15",
    title: { en: "Under-15 Tactical & Athletic Transition", fr: "U15 Transition Tactique & Athlétique" },
    ageRange: "14 - 15 Yrs",
    objectives: {
      en: "Mastering 11v11 field dimensions, high pressing intensity, strength conditioning, and match reading.",
      fr: "Maîtriser le grand terrain 11v11, l'intensité du pressing, la condition physique et la lecture du jeu."
    },
    schedule: {
      en: "Mon, Wed, Fri, Sat: 16:30 - 18:30",
      fr: "Lun, Mer, Ven, Sam: 16h30 - 18h30"
    },
    sessionsPerWeek: 5,
    focusAreas: {
      en: ["Full 11v11 Pitch Orientation", "High Pressing Tactics", "Strength & Acceleration", "Academic Progress Tracking"],
      fr: ["Tactique Grand Terrain 11v11", "Jeu sous Pression", "Force & Vitesse Explosive", "Suivi Scolaire Réguier"]
    },
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "u17",
    code: "U17",
    title: { en: "Under-17 High Performance & Competition", fr: "U17 Haute Performance & Compétition" },
    ageRange: "16 - 17 Yrs",
    objectives: {
      en: "Competing in national youth leagues, tactical flexibility, high tempo execution, and elite athletic standard.",
      fr: "Rivaliser dans les championnats nationaux, flexibilité tactique, rythme élevé et exigence athlétique."
    },
    schedule: {
      en: "Mon to Fri: 16:30 - 18:30 + Sat Matches",
      fr: "Lun au Ven: 16h30 - 18h30 + Matchs Sam"
    },
    sessionsPerWeek: 6,
    focusAreas: {
      en: ["Championship Match Play", "Video Tactical Scouting", "Athletic Peak Performance", "Scouting Showcase Preparation"],
      fr: ["Matchs de Championnat", "Analyse Vidéo Tactique", "Pic de Forme Athlétique", "Préparation aux Détections"]
    },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "u20",
    code: "U20",
    title: { en: "Under-20 Professional Pathway", fr: "U20 Tremplin Professionnel" },
    ageRange: "18 - 20 Yrs",
    objectives: {
      en: "Preparing players for professional contracts in Mali, Africa, and European leagues through scout exposure.",
      fr: "Préparer les joueurs à la signature de contrats professionnels au Mali et à l'international."
    },
    schedule: {
      en: "Daily Morning & Afternoon Sessions",
      fr: "Séances Quotidiennes Matin & Après-Midi"
    },
    sessionsPerWeek: 8,
    focusAreas: {
      en: ["Pro Match Simulation", "Agent & Club Showcase", "High-Intensity Game Management", "Leadership & Career Mentorship"],
      fr: ["Simulation Matchs Pro", "Présentation aux Recruteurs", "Gestion des Matchs à Enjeu", "Mentorat de Carrière"]
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  }
];

export const COACHES_DATA: Coach[] = [
  {
    id: "coach-1",
    name: "Ousmane Traoré",
    role: { en: "Technical Director & Head Coach", fr: "Directeur Technique & Entraîneur Principal" },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    license: "CAF 'A' License & UEFA B Equivalent",
    experience: { en: "14+ Years in Youth Football", fr: "14+ Ans dans le Football des Jeunes" },
    bio: {
      en: "Former professional midfielder with vast experience in West African football development. Dedicated to crafting elite tactical minds in Bamako.",
      fr: "Ancien milieu de terrain professionnel possédant une vaste expérience dans la formation en Afrique de l'Ouest. Dédié à la formation de joueurs d'élite à Bamako."
    },
    specialty: { en: "Tactical System & Player Mentorship", fr: "Systèmes Tactiques & Mentorat" },
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: "coach-2",
    name: "Ibrahim Coulibaly",
    role: { en: "Lead Tactical & Opposition Analyst", fr: "Responsable Analyse Tactique & Vidéo" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    license: "CAF 'B' License & Video Performance Specialist",
    experience: { en: "9 Years Youth High Performance", fr: "9 Ans en Formation Haute Performance" },
    bio: {
      en: "Specialist in micro-tactics, positioning, and video scouting. He transforms technical players into intelligent game managers.",
      fr: "Spécialiste de la micro-tactique et du scouting vidéo. Il transforme les joueurs techniques en véritables stratèges."
    },
    specialty: { en: "Positional Play & Video Analysis", fr: "Jeu de Position & Analyse Vidéo" }
  },
  {
    id: "coach-3",
    name: "Moussa Keïta",
    role: { en: "Head Goalkeeping Specialist", fr: "Entraîneur Principal des Gardiens" },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    license: "CAF Goalkeeping Pro License",
    experience: { en: "11 Years Specialist Coaching", fr: "11 Ans Spécialiste Gardiens" },
    bio: {
      en: "Former national squad goalkeeper passionate about building agile, fearless, and modern swept-passing goalkeepers.",
      fr: "Ancien gardien international passionné par le développement de gardiens agiles, courageux et modernes."
    },
    specialty: { en: "Shot Stopping & Feet Distribution", fr: "Arrêts Réflexes & Jeu au Pied" }
  },
  {
    id: "coach-4",
    name: "Dr. Aminata Diallo",
    role: { en: "Head Athletic Trainer & Physiotherapist", fr: "Préparateur Physique & Physiothérapeute" },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    license: "M.Sc. Sports Science & FIFA Medical Cert.",
    experience: { en: "8 Years High Level Athletics", fr: "8 Ans en Sport de Haut Niveau" },
    bio: {
      en: "Pioneer in youth injury prevention and athletic conditioning. Ensures young players grow strong and resilient without risking long-term health.",
      fr: "Pionnière dans la prévention des blessures chez les jeunes. Elle garantit un développement athlétique sain et durable."
    },
    specialty: { en: "Biomechanics & Injury Recovery", fr: "Biomécanique & Récupération" }
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "fac-1",
    name: { en: "Terrain officiel de club", fr: "Terrain officiel de club" },
    description: {
      en: "State-of-the-art synthetic field with professional LED floodlights, shock pad underlay, and professional match dimensions.",
      fr: "Terrain synthétique de dernière génération avec éclairage LED professionnel, sous-couche d'amortissement et dimensions réglementaires."
    },
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    features: {
      en: ["Full 11v11 Dimensions", "Night LED Lighting", "All-Weather Drainage System", "Spectator Seating Area"],
      fr: ["Dimensions 11v11 Officielles", "Éclairage LED Nocturne", "Drainage Tout Temps", "Tribune Spectateurs"]
    },
    category: "Pitch"
  },
  {
    id: "fac-2",
    name: { en: "High Performance Fitness Gym", fr: "Centre de Conditionnement Physique" },
    description: {
      en: "Fully equipped athletic center designed for explosive power, plyometrics, stability, and injury prevention.",
      fr: "Espace athlétique moderne conçu pour la puissance explosive, la pliométrie et le renforcement musculaire."
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    features: {
      en: ["Olympic Free Weights", "Agility Ladder Equipment", "Cardio Endurance Track", "Core & Mobility Area"],
      fr: ["Poids Libres Olympiques", "Équipement d'Agilité", "Piste d'Endurance Cardio", "Espace Gainage & Mobilité"]
    },
    category: "Fitness"
  },
  {
    id: "fac-3",
    name: { en: "Physiotherapy & Medical Center", fr: "Centre Médical & Physiothérapie" },
    description: {
      en: "Dedicated medical unit staffed with physiotherapists, ice bath recovery tubs, and biomechanical screening tools.",
      fr: "Unité médicale dédiée avec physiothérapeutes, bains de glace pour la récupération et outils biomécaniques."
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    features: {
      en: ["Cryotherapy Ice Tubs", "Physio Treatment Tables", "First-Aid & Emergency Gear", "Nutritional Hydration Bar"],
      fr: ["Bains de Cryothérapie", "Tables de Physiothérapie", "Équipement de Premier Secours", "Bar d'Hydratation"]
    },
    category: "Recovery"
  },
  {
    id: "fac-4",
    name: { en: "Tactical & Video Analysis Room", fr: "Salle d'Analyse Tactique & Vidéo" },
    description: {
      en: "Modern interactive classroom featuring 4K displays, tactical magnetic boards, and player review workstations.",
      fr: "Salle de classe interactive équipée d'écrans 4K, de tableaux magnétiques tactiques et de postes d'analyse."
    },
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop",
    features: {
      en: ["4K Interactive Screen", "Tactical Magnetic Boards", "Player Clip Terminals", "Academic Study Desks"],
      fr: ["Écran Interactif 4K", "Tableaux Tactiques Magnétiques", "Postes de Visionnage", "Bureaux d'Études"]
    },
    category: "Tactical"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Amadou Sidibé",
    role: { en: "Parent of U15 Captain", fr: "Parent de Capitaine U15" },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: {
      en: "TANDEM FOOT CLUB did not only make my son a much better footballer; they transformed his discipline at school and his leadership at home. The staff is exceptionally professional.",
      fr: "TANDEM FOOT CLUB n'a pas seulement fait de mon fils un meilleur footballeur; ils ont transformé sa discipline à l'école et son leadership à la maison. Le personnel est extrêmement professionnel."
    },
    rating: 5,
    category: "parent"
  },
  {
    id: "test-2",
    name: "Cheick Oumar Diarra",
    role: { en: "U17 Midfielder", fr: "Milieu de Terrain U17" },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: {
      en: "Training here feels like being at a European club. The coaches demand 100% effort every single day, and the video feedback helped me understand tactical spaces faster.",
      fr: "S'entraîner ici, c'est comme être dans un club européen. Les entraîneurs exigent 100% d'effort chaque jour, et les analyses vidéo m'ont aidé à comprendre le jeu plus vite."
    },
    rating: 5,
    category: "player"
  },
  {
    id: "test-3",
    name: "Laurent Mercier",
    role: { en: "International Scout & Partner", fr: "Recruteur International & Partenaire" },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: {
      en: "The technical quality and discipline shown by Tandem Foot Club players during our scout visit in Bamako were remarkable. A true model for football education in West Africa.",
      fr: "La qualité technique et la discipline des joueurs de Tandem Foot Club lors de notre visite à Bamako étaient remarquables. Un vrai modèle pour la formation en Afrique de l'Ouest."
    },
    rating: 5,
    category: "partner"
  },
  {
    id: "test-4",
    name: "Fatoumata Coulibaly",
    role: { en: "Mother of U13 Goalkeeper", fr: "Mère de Gardien U13" },
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: {
      en: "The academic tracking and personal care given by coach staff is what makes Tandem unique. My son's self-confidence and grades have improved significantly.",
      fr: "Le suivi scolaire et l'accompagnement personnalisé du staff rendent Tandem unique. La confiance en soi et les résultats scolaires de mon fils ont énormément progressé."
    },
    rating: 5,
    category: "parent"
  },
  {
    id: "test-5",
    name: "Moussa Keïta",
    role: { en: "Former U20 Captain & Scholar", fr: "Ancien Capitaine U20 & Boursier" },
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    quote: {
      en: "Tandem Foot Club gave me the tactical roots and athletic mindset needed to earn my sports scholarship. Forever grateful for the coaches in N'Tabacoro.",
      fr: "Tandem Foot Club m'a transmis la rigueur tactique et l'esprit athlétique nécessaires pour obtenir ma bourse sportive. Reconnaissant à jamais envers les coachs de N'Tabacoro."
    },
    rating: 5,
    category: "player"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: {
      en: "What is the minimum age to enroll at TANDEM FOOT CLUB?",
      fr: "Quel est l'âge minimum pour s'inscrire au TANDEM FOOT CLUB ?"
    },
    answer: {
      en: "We welcome passionate young players aged 11 and above. Our training programs are tailored across U11, U13, U15, U17, and U20 categories.",
      fr: "Nous accueillons les jeunes joueurs passionnés à partir de 11 ans. Nos programmes sont adaptés aux catégories U11, U13, U15, U17 et U20."
    },
    category: "enrollment"
  },
  {
    id: "faq-2",
    question: {
      en: "Where is the academy headquarters located in Bamako?",
      fr: "Où se trouve le siège de l'académie à Bamako ?"
    },
    answer: {
      en: "We are located at N'Tabacoro – 3743 Logements, Street 407, Door 133, Bamako, Mali. Our facilities are easily accessible and offer a safe environment.",
      fr: "Nous sommes situés à N'Tabacoro – 3743 Logements, Rue 407, Porte 133, Bamako, Mali. Nos installations sont faciles d'accès et sécurisées."
    },
    category: "general"
  },
  {
    id: "faq-3",
    question: {
      en: "How does TANDEM FOOT CLUB balance football with school education?",
      fr: "Comment le TANDEM FOOT CLUB concilie-t-il le football et les études scolaires ?"
    },
    answer: {
      en: "Education is a core non-negotiable value. Training schedules are designed around school hours, and we monitor quarterly academic report cards.",
      fr: "L'éducation est une valeur fondamentale non négociable. Les horaires d'entraînement sont adaptés aux cours et nous suivons les bulletins scolaires."
    },
    category: "education"
  },
  {
    id: "faq-4",
    question: {
      en: "How can my child participate in academy tryouts/trials?",
      fr: "Comment mon enfant peut-il participer aux détections de l'académie ?"
    },
    answer: {
      en: "Parents or guardians can fill out the online enrollment form or call +223 76 12 90 35 to reserve a trial session ticket.",
      fr: "Les parents peuvent remplir le formulaire d'inscription en ligne ou appeler le +223 76 12 90 35 pour réserver une séance de détection."
    },
    category: "enrollment"
  },
  {
    id: "faq-5",
    question: {
      en: "Are there opportunities to be scouted by international professional clubs?",
      fr: "Existe-t-il des opportunités d'être recruté par des clubs professionnels internationaux ?"
    },
    answer: {
      en: "Yes. We host official scouting showcases twice a year with national and European club scouts to offer clear career pathways for top talents.",
      fr: "Oui. Nous organisons deux fois par an des journées de détection officielles avec des recruteurs nationaux et internationaux."
    },
    category: "training"
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "news-1",
    title: {
      en: "TANDEM FOOT CLUB U17 Wins Regional Youth Championship in Bamako",
      fr: "Le TANDEM FOOT CLUB U17 Remporte le Championnat Régional des Jeunes à Bamako"
    },
    category: { en: "Tournament Victory", fr: "Victoire en Tournoi" },
    date: "July 18, 2026",
    readTime: "4 min read",
    summary: {
      en: "Our U17 squad delivered a masterclass tactical performance, defeating regional rivals 3-0 in the grand final under the lights.",
      fr: "Notre équipe U17 a livré une prestation tactique magistrale en s'imposant 3-0 en grande finale régionale."
    },
    content: {
      en: "In a breathtaking final held in Bamako, TANDEM FOOT CLUB U17 demonstrated the power of our tactical pressing and fluid ball movement...",
      fr: "Lors d'une finale palpitante à Bamako, l'équipe U17 du TANDEM FOOT CLUB a démontré toute l'efficacité du jeu de position..."
    },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "news-2",
    title: {
      en: "New FIFA-Standard Synthetic Turf Pitch Completed at N'Tabacoro",
      fr: "Inauguration du Nouveau Terrain Synthétique aux Normes FIFA à N'Tabacoro"
    },
    category: { en: "Facility Upgrade", fr: "Infrastructures" },
    date: "June 30, 2026",
    readTime: "3 min read",
    summary: {
      en: "Players now enjoy a world-class training surface with professional LED floodlights for night sessions.",
      fr: "Les joueurs bénéficient désormais d'une surface de jeu haut de gamme avec un éclairage nocturne LED professionnel."
    },
    content: {
      en: "As part of our commitment to athletic excellence, TANDEM FOOT CLUB has officially opened its expanded training complex in Bamako...",
      fr: "Dans le cadre de notre engagement envers l'excellence, le TANDEM FOOT CLUB a officiellement inauguré son complexe rénové..."
    },
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "news-3",
    title: {
      en: "International Scouting Showcase Announced for November 2026",
      fr: "Grande Journée de Détection Internationale Annoncée pour Novembre 2026"
    },
    category: { en: "Scouting Event", fr: "Événement Détection" },
    date: "May 12, 2026",
    readTime: "5 min read",
    summary: {
      en: "Scouts from leading African and European clubs will visit Bamako to observe our top U17 and U20 talents.",
      fr: "Des recruteurs de clubs africains et européens se rendront à Bamako pour observer nos meilleurs talents U17 et U20."
    },
    content: {
      en: "TANDEM FOOT CLUB continues to build direct pathways for talented players in Mali to step into professional football contracts...",
      fr: "Le TANDEM FOOT CLUB continue d'offrir des passerelles directes vers le football professionnel pour les talents maliens..."
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  }
];

export const GALLERY_IMAGES = [
  { id: "g1", url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop", title: { en: "Stadium Night Lights", fr: "Lumières du Stade" }, category: "Pitch" },
  { id: "g2", url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop", title: { en: "Technical Ball Mastery", fr: "Maîtrise Technique" }, category: "Training" },
  { id: "g3", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop", title: { en: "Team Celebration", fr: "Célébration d'Équipe" }, category: "Matches" },
  { id: "g4", url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop", title: { en: "Agility Drill", fr: "Parcours d'Agilité" }, category: "Training" },
  { id: "g5", url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop", title: { en: "Goalkeeper Flying Save", fr: "Parade Aérienne du Gardien" }, category: "Training" },
  { id: "g6", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop", title: { en: "Athletic Gym Session", fr: "Séance en Salle de Sport" }, category: "Facilities" },
  { id: "g7", url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop", title: { en: "Video Strategy Room", fr: "Salle de Stratégie Vidéo" }, category: "Facilities" },
  { id: "g8", url: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=1000&auto=format&fit=crop", title: { en: "Team Huddle Spirit", fr: "Union & Esprit d'Équipe" }, category: "Matches" }
];

export const PLAYERS_DATA: Player[] = [
  {
    id: "ply-1",
    name: "Ibrahim 'Ibro' Coulibaly",
    number: 10,
    category: "U17",
    position: "Milieu",
    positionEn: "Midfielder",
    secondaryPosition: { en: "Attacking Midfielder / Playmaker", fr: "Milieu Offensif / Meneur de Jeu" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    age: 16,
    height: "1m78",
    weight: "69 kg",
    preferredFoot: "Droit",
    preferredFootEn: "Right",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 88,
    overallPotential: 94,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 18,
      goals: 12,
      assists: 14,
      minutesPlayed: 1520,
      passAccuracy: "89%"
    },
    skills: {
      speed: 86,
      technique: 92,
      dribbling: 94,
      passing: 90,
      physicality: 78,
      tacticalIQ: 91
    },
    bio: {
      en: "Exceptional vision and silky first touch. Ibrahim commands the tempo of the game with elite spatial awareness and lethal key passes.",
      fr: "Vision du jeu exceptionnelle et premier contrôle de velours. Ibrahim dicte le tempo du match avec une prise d'information instantanée et des passes décisives mortelles."
    },
    scoutNotes: {
      en: "High European potential. Similar profile to Bernardo Silva & Luka Modrić. Exceptional press-resistance under tight pressure.",
      fr: "Potentiel européen très élevé. Profil similaire à Bernardo Silva & Luka Modrić. Résistance au pressing impressionnante dans les petits espaces."
    },
    featured: true
  },
  {
    id: "ply-2",
    name: "Mamadou 'Tigre' Traoré",
    number: 9,
    category: "U20",
    position: "Attaquant",
    positionEn: "Forward",
    secondaryPosition: { en: "Center Forward / Striker", fr: "Avant-Centre de Rupture" },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    age: 19,
    height: "1m86",
    weight: "77 kg",
    preferredFoot: "Ambidextre",
    preferredFootEn: "Ambidextrous",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 91,
    overallPotential: 96,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 22,
      goals: 21,
      assists: 7,
      minutesPlayed: 1890,
      passAccuracy: "81%"
    },
    skills: {
      speed: 94,
      technique: 88,
      dribbling: 87,
      passing: 80,
      physicality: 92,
      tacticalIQ: 89
    },
    bio: {
      en: "Clinical finisher with explosive acceleration and aerial dominance. Unstoppable in 1v1 situations inside the box.",
      fr: "Buteur clinique doté d'une accélération foudroyante et d'une grande puissance aérienne. Inarrêtable en 1v1 dans la surface de réparation."
    },
    scoutNotes: {
      en: "Ready for immediate pro transition. High goal-to-minute ratio. Excellent aerial jump and box positioning.",
      fr: "Prêt pour une transition pro immédiate. Ratio buts/minutes exceptionnel. Qualité de détente et d'appel en profondeur remarquables."
    },
    featured: true
  },
  {
    id: "ply-3",
    name: "Ousmane 'Roc' Diakité",
    number: 4,
    category: "U20",
    position: "Défenseur",
    positionEn: "Defender",
    secondaryPosition: { en: "Central Defender / Stopper", fr: "Défenseur Central / Stoppeur" },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    age: 18,
    height: "1m89",
    weight: "81 kg",
    preferredFoot: "Droit",
    preferredFootEn: "Right",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 87,
    overallPotential: 93,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 20,
      goals: 3,
      assists: 2,
      minutesPlayed: 1800,
      cleanSheets: 11,
      tacklesWon: 68
    },
    skills: {
      speed: 84,
      technique: 81,
      dribbling: 75,
      passing: 86,
      physicality: 95,
      tacticalIQ: 90
    },
    bio: {
      en: "Commanding central defender. Master of aerial duels with precise diagonal long ball distribution out of the back.",
      fr: "Défenseur central autoritaire. Maître des duels aériens avec une relance longue diagonale d'une précision chirurgicale."
    },
    scoutNotes: {
      en: "Strong leadership and vocal organization. Modern ball-playing center back profile suited for high pressing defensive lines.",
      fr: "Fort leadership et organisation vocale. Profil de défenseur relanceur moderne idéal pour les lignes de défense hautes."
    },
    featured: true
  },
  {
    id: "ply-4",
    name: "Cheick 'Rempart' Keita",
    number: 1,
    category: "U17",
    position: "Gardien",
    positionEn: "Goalkeeper",
    secondaryPosition: { en: "Sweeper Keeper", fr: "Gardien Volant / Libéro" },
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    age: 17,
    height: "1m91",
    weight: "82 kg",
    preferredFoot: "Droit",
    preferredFootEn: "Right",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 86,
    overallPotential: 92,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 16,
      goals: 0,
      assists: 1,
      minutesPlayed: 1440,
      cleanSheets: 9,
      passAccuracy: "88%"
    },
    skills: {
      speed: 80,
      technique: 85,
      dribbling: 70,
      passing: 88,
      physicality: 89,
      tacticalIQ: 92
    },
    bio: {
      en: "Agile, vocal sweeper keeper with extraordinary reflexes on line shots and confident foot distribution under pressure.",
      fr: "Gardien volant très agile aux réflexes impressionnants sur la ligne, excellent relanceur au pied sous pression."
    },
    scoutNotes: {
      en: "Elite distribution range with both feet. Calm composure when pressed by opposition forwards.",
      fr: "Jeu au pied haut de gamme des deux pieds. Calme absolu sous le pressing adverse."
    },
    featured: false
  },
  {
    id: "ply-5",
    name: "Bakary 'Eclair' Sissoko",
    number: 7,
    category: "U15",
    position: "Attaquant",
    positionEn: "Forward",
    secondaryPosition: { en: "Winger (Left & Right)", fr: "Ailier Dribbleur (Gauche / Droit)" },
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    age: 14,
    height: "1m72",
    weight: "62 kg",
    preferredFoot: "Gauche",
    preferredFootEn: "Left",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 84,
    overallPotential: 95,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 15,
      goals: 14,
      assists: 11,
      minutesPlayed: 1200,
      passAccuracy: "84%"
    },
    skills: {
      speed: 96,
      technique: 90,
      dribbling: 95,
      passing: 83,
      physicality: 72,
      tacticalIQ: 85
    },
    bio: {
      en: "Prodigious left-footed winger with blistering pace and sudden direction change. Devastating in open field transitions.",
      fr: "Ailier gaucher prodigieux doté d'une pointe de vitesse phénoménale et de changements de direction foudroyants."
    },
    scoutNotes: {
      en: "Raw elite talent in U15 category. Exceptional 1v1 dribbling stats. Top prospect for academy development.",
      fr: "Pépite brute en catégorie U15. Statistiques de dribble en 1v1 hors normes. Prospect prioritaire."
    },
    featured: true
  },
  {
    id: "ply-6",
    name: "Seydou 'Metronome' Touré",
    number: 6,
    category: "Seniors",
    position: "Milieu",
    positionEn: "Midfielder",
    secondaryPosition: { en: "Defensive Midfielder / Anchor", fr: "Milieu Défensif / Sentinelle" },
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    age: 21,
    height: "1m83",
    weight: "76 kg",
    preferredFoot: "Droit",
    preferredFootEn: "Right",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 89,
    overallPotential: 92,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 24,
      goals: 4,
      assists: 9,
      minutesPlayed: 2160,
      passAccuracy: "92%",
      tacklesWon: 82
    },
    skills: {
      speed: 82,
      technique: 88,
      dribbling: 82,
      passing: 93,
      physicality: 90,
      tacticalIQ: 95
    },
    bio: {
      en: "Tactical anchor with high interception volume and 92%+ pass accuracy across the season.",
      fr: "Sentinelle tactique avec un volume d'interceptions massif et une précision de passe supérieure à 92%."
    },
    scoutNotes: {
      en: "Mature tactical discipline. Excellent ball recovery and transitional switching play.",
      fr: "Maturité tactique remarquable. Récupération propre et jeu de transition fluide."
    },
    featured: false
  },
  {
    id: "ply-7",
    name: "Lamine 'Piston' Camara",
    number: 2,
    category: "U17",
    position: "Défenseur",
    positionEn: "Defender",
    secondaryPosition: { en: "Right Fullback / Wingback", fr: "Arrière Droit / Piston" },
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=800&auto=format&fit=crop",
    age: 16,
    height: "1m76",
    weight: "68 kg",
    preferredFoot: "Droit",
    preferredFootEn: "Right",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 85,
    overallPotential: 91,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 17,
      goals: 2,
      assists: 8,
      minutesPlayed: 1420,
      tacklesWon: 54
    },
    skills: {
      speed: 92,
      technique: 84,
      dribbling: 83,
      passing: 85,
      physicality: 82,
      tacticalIQ: 86
    },
    bio: {
      en: "Relentless stamina down the right flank with pin-point crossing precision and high recovery speed.",
      fr: "Endurance inépuisable sur le couloir droit, centres brossés d'une grande précision et repli défensif rapide."
    },
    scoutNotes: {
      en: "Modern wingback profile capable of overlapping and contributing heavily in final third crosses.",
      fr: "Profil moderne de piston capable d'apporter le surnombre offensif et de centrer dans la course."
    },
    featured: false
  },
  {
    id: "ply-8",
    name: "Moussa 'Aigle' Koné",
    number: 11,
    category: "U20",
    position: "Attaquant",
    positionEn: "Forward",
    secondaryPosition: { en: "Left Winger / Inside Forward", fr: "Ailier Gauche / Attaquant Intérieur" },
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    age: 18,
    height: "1m80",
    weight: "73 kg",
    preferredFoot: "Droit",
    preferredFootEn: "Right",
    nationality: "Mali",
    flag: "🇲🇱",
    marketRating: 87,
    overallPotential: 93,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stats: {
      matchesPlayed: 19,
      goals: 15,
      assists: 8,
      minutesPlayed: 1610,
      passAccuracy: "83%"
    },
    skills: {
      speed: 93,
      technique: 89,
      dribbling: 91,
      passing: 82,
      physicality: 84,
      tacticalIQ: 87
    },
    bio: {
      en: "Explosive cutting-inside left winger. Deadly curling shots from outside the box into the top corner.",
      fr: "Ailier gauche explosif aimant repiquer dans l'axe. Frappe en enroulé dévastatrice dans la lucarne opposée."
    },
    scoutNotes: {
      en: "Lethal shooting mechanics. High goal contribution per 90 minutes.",
      fr: "Mécanique de frappe mortelle. Ratio de contribution aux buts très élevé par match."
    },
    featured: true
  }
];

export const MATCHES_DATA: MatchResult[] = [
  {
    id: "match-1",
    competition: { en: "Mali Regional U20 League - Grand Final", fr: "Ligue Régionale U20 Mali - Grande Finale" },
    date: "24 Juillet 2026",
    homeTeam: { name: "TANDEM FOOT CLUB U20", score: 3 },
    awayTeam: { name: "AS Real Bamako U20", score: 1 },
    isTandemHome: true,
    venue: "Stade Municipal N'Tabacoro",
    status: "Finished",
    scorers: ["M. Traoré (14', 68')", "I. Coulibaly (82')"],
    highlightsUrl: "https://youtube.com"
  },
  {
    id: "match-2",
    competition: { en: "West African Youth Showcase", fr: "Tournoi des Académies d'Afrique de l'Ouest" },
    date: "12 Juillet 2026",
    homeTeam: { name: "Stade Malien U17", score: 0 },
    awayTeam: { name: "TANDEM FOOT CLUB U17", score: 2 },
    isTandemHome: false,
    venue: "Stade Modibo Keïta, Bamako",
    status: "Finished",
    scorers: ["B. Sissoko (34')", "M. Koné (79')"],
    highlightsUrl: "https://youtube.com"
  },
  {
    id: "match-3",
    competition: { en: "International Scout Showcase Match", fr: "Match d'Exhibition Détection Internationale" },
    date: "15 Août 2026",
    homeTeam: { name: "TANDEM FOOT CLUB Elite", score: 0 },
    awayTeam: { name: "Sélection Académies Pro", score: 0 },
    isTandemHome: true,
    venue: "Terrain Synthétique N'Tabacoro",
    status: "Upcoming"
  }
];

export const SPONSORSHIP_DATA: SponsorshipPackage[] = [
  {
    id: "sp-1",
    tier: "Title",
    title: { en: "Main Academy Naming & Front-Jersey Partner", fr: "Sponsor Principal & Maillot Officiel" },
    benefits: {
      en: [
        "Official Front-of-Jersey logo placement across all U11-Seniors squads",
        "Stadium Naming Rights & priority perimeter LED advertising",
        "Exclusive digital media integration across video highlights and player cards",
        "First-look VIP access to official international trial showcases"
      ],
      fr: [
        "Emplacement logo principal face avant maillot sur toutes les équipes (U11 à Seniors)",
        "Dénomination officielle du complexe & visibilité panneau LED terrain",
        "Intégration digitale exclusive sur toutes les vidéos highlights et fiches joueurs",
        "Accès VIP prioritaire aux journées de détection internationale"
      ]
    },
    investment: "Sur Demande",
    badgeColor: "bg-amber-400 text-black border-amber-300"
  },
  {
    id: "sp-2",
    tier: "Gold",
    title: { en: "Official Training & Equipment Partner", fr: "Partenaire Équipement & Entraînement" },
    benefits: {
      en: [
        "Sleeve & Back-of-Jersey logo placement on official kits",
        "Branded training gear & academy travel uniforms",
        "Banners & backdrop presence during press conferences and interviews"
      ],
      fr: [
        "Emplacement logo manche et dos sur maillots de compétition",
        "Visibilité sur tenues d'entraînement et survêtements officiels",
        "Présence sur bâches et panoplies de presse lors des communiqués"
      ]
    },
    investment: "Sur Demande",
    badgeColor: "bg-blue-500 text-white border-blue-400"
  },
  {
    id: "sp-[#sp-3]",
    tier: "Technical",
    title: { en: "Academic, Medical & Nutritional Partner", fr: "Partenaire Médical & Performance" },
    benefits: {
      en: [
        "Branding inside Physiotherapy Unit & Tactical Strategy Room",
        "Academic scholarship sponsorship named after partner brand",
        "Social media co-branding for Player of the Month awards"
      ],
      fr: [
        "Visibilité au Pôle Médical & Salle d'Analyse Tactique",
        "Parrainage de bourses d'études sport-études au nom de la marque",
        "Co-branding sur les trophées 'Joueur du Mois' sur les réseaux sociaux"
      ]
    },
    investment: "Sur Demande",
    badgeColor: "bg-emerald-500 text-white border-emerald-400"
  }
];

