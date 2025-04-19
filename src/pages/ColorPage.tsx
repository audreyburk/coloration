import { useParams } from 'react-router'

function ColorPage() {
  const { id: name } = useParams()

  return (
    <main>
      unique lil color {name}
    </main>
  )
}

export default ColorPage