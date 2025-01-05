import { useActionState } from "react";
import "./styles.css";
import { login } from "./actions";

export default function App() {
  const [state, formAction, isPending] = useActionState(login, {
    success: false,
    message: null,
    error: null,
  });

  return (
    <div className="App">
      <h1>React Forms - New way</h1>

      <form className="form" action={formAction}>
        {state.success && <p className="message">{state.message}</p>}
        <label htmlFor="email">Email</label>
        <input className="input" name="email" id="email" />
        {isPending ? "processing..." : <button type="submit">Submit</button>}
        {!state.success && !isPending && <p className="error">{state.error}</p>}
      </form>
    </div>
  );
}
