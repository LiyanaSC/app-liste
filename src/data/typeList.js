// tableau de types de listes disponibles

const typeList = [
  {
    type: 'classic',
    label: 'Liste',
    icon: new URL('../assets/list-classic-not-complete.svg', import.meta.url).href,
    image: new URL('../assets/img-classic.png', import.meta.url).href,
    color: 'var(--light-pink)',
    description: 'Une liste basique: Vous notez ce que vous devez faire et vous cochez quand c’est terminé.'
  },
  {
    type: 'analytics',
    label: 'Analyse',
    icon: new URL('../assets/list-analytics-not-complete.svg', import.meta.url).href,
    image: new URL('../assets/img-analytics.png', import.meta.url).href,
    color: 'var(--light-beige)',
    description: 'Une liste pour analyser vos habitudes: Vous notez des choses et vous voyez à quelle fréquence elles se produisent.'
  },
  {
    type: 'daily',
    label: 'Tâches',
    icon: new URL('../assets/list-daily-not-complete.svg', import.meta.url).href,
    image: new URL('../assets/img-daily.png', import.meta.url).href,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien, ou de la semaine, afin de ne plus les oublier.'
  }
]

export default typeList
