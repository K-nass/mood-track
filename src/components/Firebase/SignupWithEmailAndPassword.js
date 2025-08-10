import { app } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

export async function register() {
  try {
    await createUserWithEmailAndPassword(auth, "karimnase@gmail.com", "123123");
  } catch (err) {
    console.log(err.message);
  }
}
