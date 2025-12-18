import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/press-release/keep-rolling')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/press-release/keep-rolling"!</div>
}
