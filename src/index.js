import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const availableScripts = [
  'select',
  'Lana_Roberts-Anal_training(92155)',
  'Lana_Roberts-Anal_Training(92162)',
  '[MetArt.com]_23-05-11_Decima-Appetite_(x122)_3255x4324',
  '[MetArt.com]_23-05-11_Ellie_Luna-Handiwork_(x131)_2882x4324',
  '[MetArt.com]_23-05-11_MerciaFrancis-Mesmeric_(x123)_5464x8192',
  '[MetArt.com]_23-05-11_MilaAzul-Fetish_Party_(x112)_2815x4220',
  'AliceRedlips(x1304)',  // Add more script names here...
];

function AppWrapper() {
  const [selectedScript, setSelectedScript] = useState(null);
  const [App, setApp] = useState(() => () => <h1>Select a gallery</h1>); // Initialize with a placeholder component

  useEffect(() => {
    if (selectedScript) {
      import(`./js/${selectedScript}.js`)
        .then(AppModule => {
          setApp(() => AppModule.default); // Update the state with the imported App component
        })
        .catch(err => console.error('Error loading module', err));
    }
  }, [selectedScript]);

  if (!selectedScript) {
    return (
      <div className="d-flex flex-column">
        <h1>Select a Gallery:</h1>
        {availableScripts.map(script => (
          <button type="button" className="selection" key={script} onClick={() => setSelectedScript(script)}>
            {script}
          </button>
        ))}
      </div>
    );
  }

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

root.render(<AppWrapper />);
