const dailyTaskList = [
    {
      "category": "hygiene",
      "tasks": [
        { "id": "wake_up", "label": "programmer l'alarme" },
        { "id": "wash_hands_morning", "label": "Se laver les mains (matin)" },
        { "id": "eat_breakfast", "label": "Prendre le petit-déjeuner" },        
        { "id": "brush_teeth_morning", "label": "Se brosser les dents (matin)" },
        { "id": "wash_face", "label": "Se laver le visage" },
        { "id": "shower", "label": "Prendre une douche" },
        { "id": "apply_deodorant", "label": "Mettre du déodorant" },
        { "id": "apply_skincare", "label": "Appliquer de la crème" },
        { "id": "dress", "label": "S'habiller" },
        { "id": "wash_hands_afternoon", "label": "Se laver les mains (midi)" },
        { "id": "eat_lunch", "label": "Prendre le déjeuner" },
        { "id": "brush_teeth_afternoon", "label": "Se brosser les dents (midi)" }, 
        { "id": "comb_hair", "label": "Se coiffer" },
        { "id": "makeup", "label": "Se maquiller" },
        { "id": "jewelry", "label": "Mettre des bijoux" },
        { "id": "eat_snack", "label": "Prendre un encas sain" },
        { "id": "remove_makeup", "label": "Se démaquiller" },
        { "id": "cut_nails_check", "label": "Vérifier / entretenir les ongles" },
        { "id": "oral_care_extra", "label": "Utiliser fil dentaire / bain de bouche" },
        { "id": "shave_or_groom", "label": "Se raser / entretenir pilosité" },
        { "id": "apply_sunscreen", "label": "Appliquer protection solaire" },
        { "id": "eat_dinner", "label": "Prendre le dîner" },
        { "id": "wash_hands_evening", "label": "Se laver les mains (soir)" },
        { "id": "brush_teeth_evening", "label": "Se brosser les dents (soir)" },
        { "id": "night_routine", "label": "Routine du soir (hygiène + détente)" },

      ]
    },
     {
      "category": "linge",
      "tasks": [
        { "id": "change_clothes", "label": "Préparer des vêtements" },
        { "id": "iron_clothes", "label": "Repasser le linge" },
        { "id": "put_clothes_in_laundry", "label": "Mettre des vêtements au sale" },
        { "id": "iron_clothes", "label": "Repasser le linge" },
      ]
    },
    {
      "category": "rangement",
      "tasks": [
        { "id": "make_bed", "label": "Faire le lit" },
        { "id": "air_rooms", "label": "Aérer les pièces" },
        { "id": "clear_surfaces", "label": "Ranger la table, les plans de travail" },
        { "id": "put_items_back", "label": "Remettre les objets à leur place" },
        { "id": "tidy_sofa", "label": "Ranger le canapé" },
        { "id": "organize_entry", "label": "Ranger l’entrée (chaussures, sacs, clés)" },
        { "id": "quick_floor_clean", "label": "Ramasser au sol (jouets, déchets)" },
        { "id": "wipe_table", "label": "Nettoyer la table après utilisation" },
        { "id": "reset_living_room", "label": "Remettre en ordre le salon" },
        { "id": "reset_bedroom", "label": "Remettre en ordre la chambre" },
        { "id": "empty_small_bins", "label": "Vider petites poubelles (salle de bain, bureau)" },
        { "id": "organize_work_area", "label": "Ranger espace de travail" },
        { "id": "fold_blankets", "label": "Plier couvertures / coussins" },
        { "id": "take_out_trash_kitchen", "label": "Sortir la poubelle" },

      ]
    },
    {
      "category": "cuisine",
      "tasks": [
        { "id": "decide_meals", "label": "Décider quoi manger" },
        { "id": "check_fridge", "label": "Vérifier le frigo / les stocks " },
        { "id": "prepare_ingredients", "label": "Préparer les ingrédients (laver, couper)" },
        { "id": "set_table", "label": "Mettre la table" },
        { "id": "serve_meal", "label": "Servir le repas" },
        { "id": "store_leftovers", "label": "Ranger les restes" },
        { "id": "clean_sink", "label": "Nettoyer l’évier" },
        { "id": "refill_water", "label": "Remplir gourdes / carafes" },
        { "id": "prepare_snack", "label": "Préparer une collation" },
        { "id": "prepare_breakfast", "label": "Préparer le petit-déjeuner" },
        { "id": "prepare_lunch", "label": "Préparer le déjeuner" },
        { "id": "prepare_dinner", "label": "Préparer le dîner" },
        { "id": "do_dishes", "label": "Faire la vaisselle" },
        { "id": "fill_dishwasher", "label": "Remplir le lave-vaisselle" },
        { "id": "put_away_dishes", "label": "Ranger la vaisselle" },
        { "id": "empty_dishwasher", "label": "Vider le lave-vaisselle" },
        { "id": "clean_kitchen", "label": "Nettoyer la cuisine après repas" },
        { "id": "defrost_food", "label": "Décongeler aliments" },

      ]
    },
    {
      "category": "enfants/bébés",
      "tasks": [
        { "id": "wake_children", "label": "Réveiller les enfants" },
        { "id": "prepare_children", "label": "Rappeler les tâches aux enfants" },
        { "id": "school_dropoff", "label": "Amener les enfants à l'école" },
        { "id": "homework_help", "label": "Aider aux devoirs" },
        { "id": "do_homework", "label": "Faire les devoirs" },
        { "id": "bath_children", "label": "Donner le bain aux enfants" },
        { "id": "bedtime_children", "label": "Coucher les enfants" },
        { "id": "check_children_state", "label": "Observer l’état des enfants (fatigue, humeur, santé)" },
        { "id": "ask_children_favorites", "label": "Demander aux enfants ce qu'ils ont aimé aujourd'hui" },
        { "id": "ask_children_dislikes", "label": "Demander aux enfants ce qu'ils n'ont pas aimé aujourd'hui" },
        { "id": "dress_children", "label": "Habiller les enfants" },
        { "id": "prepare_school_bag", "label": "Préparer sac / affaires école" },
        { "id": "school_pickup", "label": "Récupérer les enfants" },
        { "id": "give_snack", "label": "Donner goûter / collation" },
        { "id": "educational_activity", "label": "Proposer une activité éducative" },
        { "id": "play_time", "label": "Temps de jeu / interaction" },
        { "id": "manage_conflicts", "label": "Gérer conflits / émotions" },
        { "id": "screen_time_management", "label": "Gérer le temps d’écran" },
        { "id": "bedtime_routine", "label": "Routine du coucher (histoire, câlin, apaisement)" },
        { "id": "night_check", "label": "Vérification nocturne" }
      ]
    },

    {
      "category": "gestion",
      "tasks": [
        { "id": "check_calendar", "label": "Vérifier le planning de la journée" },
        { "id": "check_messages", "label": "Consulter messages / mails importants" },
        { "id": "manage_budget", "label": "Vérifier dépenses du jour" },
        { "id": "prioritize_tasks", "label": "Prioriser les tâches essentielles" },
        { "id": "respond_messages", "label": "Répondre aux messages urgents" },
        { "id": "handle_urgent_admin", "label": "Gérer une tâche administrative urgente" },
        { "id": "track_expenses", "label": "Noter les dépenses du jour" },
        { "id": "check_bank_account", "label": "Vérifier le compte bancaire" },
        { "id": "plan_next_day", "label": "Préparer le lendemain" }
      ]
    },
    {
      "category": "sante",
      "tasks": [
        { "id": "take_medication", "label": "Prendre vitamines/compléments alimentaires" },
        { "id": "rest", "label": "Prendre un moment de repos" },
        { "id": "move_body", "label": "Faire une activité physique légère" },
        { "id": "go_for_walk", "label": "Faire une balade" },
        { "id": "get_fresh_air", "label": "S'exposer à la lumière du jour" },
        { "id": "sleep_preparation", "label": "Préparer le sommeil (routine calme)" },
        { "id": "read_book", "label": "Lire un livre" },
        { "id": "body_signal_check", "label": "Écouter son corps (douleurs, fatigue)" },
        { "id": "emotional_check", "label": "Identifier son état émotionnel" },
        { "id": "take_me_time", "label": "Prendre un moment pour soi" }


 /* CATERGORY SANTÉ SUPPRIMÉE POUR LE MOMENT, À RÉINTÉGRER DANS L'applications suivi

        { "id": "drink_water", "label": "Boire suffisamment d'eau" },
        { "id": "rest", "label": "Prendre un moment de repos" },
         { "id": "drink_water_check", "label": "Boire de l’eau régulièrement" },
    { "id": "eat_balanced_meal", "label": "Manger un repas équilibré" },
    { "id": "take_medication", "label": "Prendre traitement / vitamines" },
    { "id": "move_body", "label": "Bouger (marche, activité physique légère)" },
    { "id": "stretch_body", "label": "S’étirer / mobilité douce" },
    { "id": "get_fresh_air", "label": "Prendre l’air / exposition à la lumière du jour" },
    { "id": "rest_break", "label": "Prendre une pause (physique ou mentale)" },
    { "id": "breathing_exercise", "label": "Faire un exercice de respiration" },
    { "id": "limit_screens", "label": "Limiter les écrans (moment choisi)" },
    { "id": "sleep_check", "label": "Vérifier qualité / durée du sommeil" },
    { "id": "emotional_check", "label": "Identifier son état émotionnel" },
*/
      ]
    },
    {
      "category": "exterieur",
      "tasks": [
        { "id": "transport", "label": "Prévoir les déplacements (voiture, bus, etc.)" },
        { "id": "prepare_to_leave", "label": "Se regarder dans le miroir avant de partir" },
        { "id": "check_weather", "label": "Vérifier la météo" },
        { "id": "take_keys", "label": "Prendre les clés" },
        { "id": "take_phones", "label": "Prendre les téléphones" },
        { "id": "take_wallet", "label": "Prendre le portefeuille" },
        { "id": "take_bags", "label": "Prendre les sacs" },
        { "id": "secure_home", "label": "Sécuriser la maison (fermer portes, fenêtres)" },
        { "id": "deposit_mail", "label": "Déposer le courrier/colis" },
        { "id": "take_mail", "label": "Prendre le courrier/colis" },
        { "id": "wait_time_use", "label": "Utiliser temps d’attente (lire, écouter un podcast, se reposer)" },
      ]
    },
    {
        "category": "nettoyage",
        "tasks": [
        { "id": "brush_floor", "label": "Passer le balai" },
        { "id": "clean_floor", "label": "Passer la serpillère" },
        ]
    }
  
]