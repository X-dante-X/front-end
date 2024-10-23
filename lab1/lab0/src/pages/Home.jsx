import Button from '@mui/joy/Button';
import { useState } from "react";


function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          color="primary"
          size="md"
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default Home;
