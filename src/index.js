import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const availableScripts = 
    [
'[MetArt.com]_23-05-11_Decima-Appetite_(x122)_3255x4324',
'[MetArt.com]_23-05-11_Ellie_Luna-Handiwork_(x131)_2882x4324',
'[MetArt.com]_23-05-11_MerciaFrancis-Mesmeric_(x123)_5464x8192',
'[MetArt.com]_23-05-11_MilaAzul-Fetish_Party_(x112)_2815x4220',
'[Vixen]_Jill_Kassidy_-_The_Best_Life_(104033)_(2023-05-26)',
'AliceRedlips(x1304)',
'ALSScan-EricaFontes(302NudePhotos)',
'ALSScan_-_Casting_Model_7',
'Amateur_wife_posing_at_home',
'Amateur_wife_posing_at_home1',
'Amateur_wife_posing_at_home2',
'Anastasia_Savage-Start_Game',
'Anastasia_Savage-Train_Me',
'Anna_Tatu_(60_Nude_Photos)',
'ATK_Galleria_-_Paris_White_Nude_&_Sexy',
'BeautyInStockingsNude&Sexy',
'Ceciamix-What_if-spiderman',
'Chelsea_Grimland_Nude_&_Sexy',
'CourtneyRachelCulkin(49NudePhotos)',
'Denise_King_(64_Nude_Photos)',
'Diana_Lark_(60_Nude_Photos)',
'Ema_Novak(x721)',
'emanovak(x33)',
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
'Lana_Roberts-Anal_training(92155)',
'Lana_Roberts-Anal_Training(92162)',
'MeArtMelaniA-Emelis.downloadedfromadultphotosets.best',
'MeArt_Stevie-To_Tempt.best',
'Melena-BestPussy(97NudePhotos)',
'MetArt-Suddenly(55NudePhotos)',
'Met-Art-AmeliaGin-WildStocking(126NudePhotos)',
'Met-Art-ElleTan-BlueOmbre(121NudePhotos)',
'Met-ArtX-Vine-MilkBath(139NudePhotos)',
'Met_Art_-_Liza_B_-_Figureas(142_Nude_Photos)',
'Met_Art_-_Lorena_B_(154_Nude_Photos)',
'Met_Art_-_Louisa_A_-_Queen_(150_Nude_Photos)',
'Met_Art_-_Nastya_-_Deserve_(132_Nude_Photos)',
'Met_Art_-_Natasha_S_(84_Nude_Photos)',
'Met_Art_-_Sienna_A_-_Ejilain_(148_Nude_Photos)',
'Met_Art_-_Sofi_A_-_Illidia_(74_Nude_Photos)',
'MetArt_AnnaDelos-Perfect_Poise',
'MetArt_HayliSanders-Garden_Party',
'MetArt_KattyMuss-Nude_Game',
'MetArt_Stevie-To_Tempt.best',
'MPLStudios-Melena-Playtime(84NudePhotos)',
'Nina_Verona_(54_Nude_Photos)',
'Nubiles-NaomiBennett-ToyRide(66NudePhotos)',
'OnlyTease-Charlotte',
'pix4',
'PrettyVirgins-Alya(56NudePhotos)',
'PrettyVirgins-Nastya-TheGirlSeemsToBeSoYoung&SexyAtTheSameTime',
'PrettyVirgins-Passionate-SheHasNoLimitsAndRestrictions',
'Prettypetiteprincess-Copper',
'Sadie_Summers_pic',
'Sex-Art-IviRein-SweetTooth(85NudePhotos)',
'SexyGirlfriendWithBigTitsSnickersBabyPosesCompletelyNakedinaSolo',
'Sexy_Asian_Teen_Selfies',
'Sexy_Young_Teen',
'TeenDreams-Julia(102NudePhotos)',
'Teen_Mak_Shows_Her_Perky_Tits_&_Trimmed_Pussy_While_Posing_In_The_Window',
'TheLifeErotic-Liuba-Carnival(72NudePhotos)',
'Ukrainian_Teen_Jeff_Milton_Teasing_Nude_With_Her_Tanned_Tits_&_Her_Yummy_Pussy',
'VioletLatte-ginger_dream',
'VioletLatte-You_are_the_only_one',
'Vivian_Keys_(54_Nude_Photos)',
'Whiptrax',
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
