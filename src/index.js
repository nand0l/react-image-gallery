import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const availableScripts = 
    [
'ALSScan-EricaFontes(302NudePhotos)',
'AliceRedlips(x1304)',
'Amateur_wife_posing_at_home',
'Amateur_wife_posing_at_home1',
'Amateur_wife_posing_at_home2',
'Anastasia_Savage-Start_Game',
'Anastasia_Savage-Train_Me',
'BeautyInStockingsNude&Sexy',
'Ceciamix-What_if-spiderman',
'CourtneyRachelCulkin(49NudePhotos)',
'Ema_Novak(x721)',
'EroticNataliaGoesDeep(38NudePhotos)',
'EroticBeauty-PresentingSheire(80NudePhotos)',
'ErroticaArchives-Ossia-Socha(61NudePhotos)',
'EternalDesire-HayliSanders-Hard_Light',
'EternalDesire_HayliSanders-Hard_Light',
'FoxyAlissa-Tied_Lingerie',
'Georgia-VacayVibe',
'Jana_A-Asja_K-Naked_in_Koktebel',
'KLovSnap(88NudePhotos)',
'KrysDecker',
'Lana_Roberts-Anal_Training(92162)',
'Lana_Roberts-Anal_training(92155)',
'MPLStudios-Melena-Playtime(84NudePhotos)',
'MeArtMelaniA-Emelis.downloadedfromadultphotosets.best',
'MeArt_Stevie-To_Tempt.best',
'Melena-BestPussy(97NudePhotos)',
'MetArt-Suddenly(55NudePhotos)',
'Met-Art-AmeliaGin-WildStocking(126NudePhotos)',
'Met-Art-ElleTan-BlueOmbre(121NudePhotos)',
'Met-ArtX-Vine-MilkBath(139NudePhotos)',
'MetArt_AnnaDelos-Perfect_Poise',
'MetArt_HayliSanders-Garden_Party',
'MetArt_KattyMuss-Nude_Game',
'MetArt_Stevie-To_Tempt.best',
'Nubiles-NaomiBennett-ToyRide(66NudePhotos)',
'OnlyTease-Charlotte',
'PrettyVirgins-Alya(56NudePhotos)',
'PrettyVirgins-Nastya-TheGirlSeemsToBeSoYoung&SexyAtTheSameTime',
'PrettyVirgins-Passionate-SheHasNoLimitsAndRestrictions',
'Sex-Art-IviRein-SweetTooth(85NudePhotos)',
'SexyGirlfriendWithBigTitsSnickersBabyPosesCompletelyNakedinaSolo',
'Sexy_Asian_Teen_Selfies',
'Sexy_Young_Teen',
'TeenDreams-Julia(102NudePhotos)',
'TheLifeErotic-Liuba-Carnival(72NudePhotos)',
'VioletLatte-You_are_the_only_one',
'VioletLatte-ginger_dream',
'Whiptrax',
'[MetArt.com]_23-05-11_Decima-Appetite_(x122)_3255x4324',
'[MetArt.com]_23-05-11_Ellie_Luna-Handiwork_(x131)_2882x4324',
'[MetArt.com]_23-05-11_MerciaFrancis-Mesmeric_(x123)_5464x8192',
'[MetArt.com]_23-05-11_MilaAzul-Fetish_Party_(x112)_2815x4220',
'emanovak(x33)',
'pix4',
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
