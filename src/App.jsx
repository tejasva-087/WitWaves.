import Link from "./conponents/ui/Link";
import Logo from "./conponents/ui/Logo";

function App() {
  return (
    <div>
      {/* href className style fontSize color */}
      {/* <Logo href="#" fontSize={48} color="red" /> */}
      <Link href="#">Default</Link>
      <Link href="#" type="btn">
        Button
      </Link>

      <Link href="#" type="border">
        Border
      </Link>
    </div>
  );
}

export default App;
