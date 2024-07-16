import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sales/')({
  component: App
})

function App() {
  return (
    <div>
      <h1>Sales index component goes here!!!</h1>
    </div >
  )
}
