
import { Button, Htag } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Htag пример</Htag>
      <Button appearance="primary" arrow="right">Привет</Button>
      <Button appearance="ghost" arrow="down">Привет ghost</Button>
    </div>
  );
}
