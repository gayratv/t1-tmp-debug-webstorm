
import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  // debugger;
  console.log('useInput ',value);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const name = useInput("Mr1");
  const email = useInput("@");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input placeholder="Имя" {...name} />
      <input placeholder="Email" {...email} />
    </div>
  );
}
