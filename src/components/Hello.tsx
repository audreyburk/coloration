import { Link } from 'react-router'
import styles from './hello.module.css'

interface Props {
  name: string;
  number?: number;
}

export default function Hello({ name, number = 0 }: Props) {
  return (
    <div className="hello">
      <Link to={'/colors/' + name}>
        <div className={styles.red}>
          {name} {number}
        </div>
      </Link>
    </div>
  )
}