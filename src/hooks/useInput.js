import { useState } from "react";

export default function useInput(initialState = "") {
  const [state, setState] = useState(initialState);
  const handleInput = (event) => setState(event.target.value);
  return {
    input: state,
    setInput: handleInput,
  };
}
