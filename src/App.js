import { useState } from "react";
import Heading from "./components/Heading/Heading";
import Playground from "./components/Playground/Playground";
import Rule from "./components/Rule/Rule";
import RuleModal from "./components/Rule/RuleModal";
import Battle from "./components/Playground/Battle";
import GameManagerProvider from "./context/GameManagerProvider";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playerHasPicked, setPlayerHasPicked] = useState(false);
  const openModalHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  const playerPickedHandler = () => {
    setPlayerHasPicked(true);
  };
  const resetPlayerPickedHandler = () => {
    setPlayerHasPicked(false);
  };

  return (
    <GameManagerProvider>
      <Heading />
      {!playerHasPicked && <Playground onPicked={playerPickedHandler} />}
      {playerHasPicked && <Battle onReset={resetPlayerPickedHandler} />}
      <Rule onClick={openModalHandler} />
      {modalIsOpen && <RuleModal onClick={closeModalHandler} />}
    </GameManagerProvider>
  );
}

export default App;
