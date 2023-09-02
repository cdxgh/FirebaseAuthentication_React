import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignupPages from "./pages/Signup";
import SigninPage from "./pages/Signinpage";
import { app } from "./firebase";
import "./styles.css";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "Abdul.20204csit1070@kiet.edu",
      "Abdul@123"
    ).then((value) => console.log(value));
  };
  return (
    <div className="App">
      <SignupPages />
      <SigninPage/>
    </div>
  );
}
export default App;
