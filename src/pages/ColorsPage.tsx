import Hello from '../components/Hello'
import styles from './colorsPage.module.css'

// but we wanna make these a type: color, right?
const COLORS = [
  {
    name: "teal",
    number: 2,
  },
  {
    name: "orange",
    number: 1,
  },
  {
    name: "green",
  },
]

function ColorsPage() {
  return (
    <main>
      Hello AUDREY
      <div className={styles.pink}>
        {
          COLORS.map(({ name, number }) => {
            return <Hello key={name} name={name} number={number} />
          })
        }
      </div>
    </main>
  )
}

export default ColorsPage