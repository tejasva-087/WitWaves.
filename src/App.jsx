import Link from "./conponents/ui/Link";
import Logo from "./conponents/ui/Logo";

function App() {
  return (
    <div>
      {/* href className style fontSize color */}
      <Logo href="#" fontSize={48} />
      <Link
        href="#"
        fontSize={18}
        borderColor="red"
        textColor="red"
        padding="0.8rem 1.8crem"
        borderRadius="50rem"
      >
        Default
      </Link>
    </div>
  );
}

export default App;
