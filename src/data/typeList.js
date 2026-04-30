// tableau de types de listes disponibles

const typeList = [
  {
    type: 'classic',
    label: 'classique',
    icon: new URL('../assets/list-classic-not-complete.svg', import.meta.url).href,
    image: new URL('../assets/img-classic.png', import.meta.url).href,
    color: 'var(--light-pink)',
    description: 'Ici vous notez ce que vous devez faire et vous cochez quand c’est terminé.'
  },
 
 /* à mettre dans l'applications GESTION DE TACHES!
  {
    type: 'daily',
    label: 'quotidiennes',
    icon: new URL('../assets/list-daily.svg', import.meta.url).href,
    image: new URL('../assets/img-daily.png', import.meta.url).href,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien: vous checker au fur et à mesure que vos tâches de la journée sont accomplies. Elle se réinitialise tous les jours pour vous permettre de recommencer à zéro chaque matin.'
  },
  {
    type: 'weekly',
    label: 'hebdo',
    icon: new URL('../assets/list-weekly.svg', import.meta.url).href,
    image: new URL('../assets/img-weekly.png', import.meta.url).href,
    color: 'var(--light-beige)',
    description: 'Une liste pour organiser vos tâches de la semaine : Vous garder un oeil sur vos tâches hebdomadaires. Elle se réinitialise chaque semaine pour vous permettre de recommencer à zéro chaque lundi.'

  }
  */
]

export default typeList
