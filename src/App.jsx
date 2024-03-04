import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-bold text-4xl text-center">Welcome to reality</h1>
      <Button>Click Me!</Button>
    </>
  );
}

export default App;
