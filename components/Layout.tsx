import Header from "./Header";
import Navbar from "./Navbar";
interface LayoutProps {
  children: React.ReactNode;
  setWalletConnect: (walletConnect: boolean) => void;
  setAddress: (address: string) => void;
  hamburgerOpen: boolean;
  setHamburgerOpen: (hamburgerOpen: boolean) => void;
}

export default function Layout({
  children,
  setWalletConnect,
  setAddress,
  hamburgerOpen,
  setHamburgerOpen,
}: LayoutProps) {
  return (
    <div className="h-screen flex flex-1 bg-dark1-500">
      <Navbar hamburgerOpen={hamburgerOpen} />
      <div
        className={
          !hamburgerOpen
            ? "flex flex-col w-100 sm:flex-1 flex-initial w-24"
            : "flex flex-col w-100 sm:flex-1 flex-auto"
        }
      >
        <Header
          setWalletConnect={setWalletConnect}
          setAddress={setAddress}
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
        {children}
      </div>
    </div>
  );
}
