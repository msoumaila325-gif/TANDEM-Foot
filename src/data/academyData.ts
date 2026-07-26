import { AgeCategory, Coach, Facility, FAQItem, NewsArticle, Program, Testimonial } from '../types';

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
    name: { en: "FIFA Standard Synthetic Pitch", fr: "Terrain Synthétique Norme FIFA" },
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
