import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/press-kit")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/press-kit"!</div>;
}
