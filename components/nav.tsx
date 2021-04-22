import { SOAPBOX_URL } from "../constants";

function Navigation() {
  return (
    <header className="p-4">
      <nav className="flex justify-center">
        <a
          href={SOAPBOX_URL}
          className="focus:outline-none focus:ring-4 rounded"
        >
          <img
            className="w-16 h-16"
            src="/brand.png"
            alt="Soapbox"
            loading="eager"
          />
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
