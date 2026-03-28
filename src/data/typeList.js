// tableau de types de listes disponibles
import listClassic from '../assets/list-classic-not-complete.svg'
import listDaily from '../assets/list-daily-not-complete.svg'
import listAnalytics from '../assets/list-analytics-not-complete.svg'
import imageAnalytics from '../assets/img-analytics.png'
import imageClassic from '../assets/img-classic.png'
import imageDaily from '../assets/img-daily.png'


const typeList = [
  {
    value: 'classic',
    label: 'Liste',
    icon: listClassic,
    image: imageClassic,
    color: 'var(--light-pink)',
    description: 'Une liste basique: Vous notez ce que vous devez faire et vous cochez quand c’est terminé.'
  },
  {
    value: 'analytics',
    label: 'Analyse',
    icon: listAnalytics,
    image: imageAnalytics,
    color: 'var(--light-lavender)',
    description: 'Une liste pour analyser vos habitudes: Vous notez des choses et vous voyez à quelle fréquence elles se produisent.'
  },
  {
    value: 'daily',
    label: 'Tâches',
    icon: listDaily,
    image: imageDaily,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien, ou de la semaine, afin de ne plus les oublier.'
  }
]

export default typeList
