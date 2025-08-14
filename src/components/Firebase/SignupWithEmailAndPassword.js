import { app } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
