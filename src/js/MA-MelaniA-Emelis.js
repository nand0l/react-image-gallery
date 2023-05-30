import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0001.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0001.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0002.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0002.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0003.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0003.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0004.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0004.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0005.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0005.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0006.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0006.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0007.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0007.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0008.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0008.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0009.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0009.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0010.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0010.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0011.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0011.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0012.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0012.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0013.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0013.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0014.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0014.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0015.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0015.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0016.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0016.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0017.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0017.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0018.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0018.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0019.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0019.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0020.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0020.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0021.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0021.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0022.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0022.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0023.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0023.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0024.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0024.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0025.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0025.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0026.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0026.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0027.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0027.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0028.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0028.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0029.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0029.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0030.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0030.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0031.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0031.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0032.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0032.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0033.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0033.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0034.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0034.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0035.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0035.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0036.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0036.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0037.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0037.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0038.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0038.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0039.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0039.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0040.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0040.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0041.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0041.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0042.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0042.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0043.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0043.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0044.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0044.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0045.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0045.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0046.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0046.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0047.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0047.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0048.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0048.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0049.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0049.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0050.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0050.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0051.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0051.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0052.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0052.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0053.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0053.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0054.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0054.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0055.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0055.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0056.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0056.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0057.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0057.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0058.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0058.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0059.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0059.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0060.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0060.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0061.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0061.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0062.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0062.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0063.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0063.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0064.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0064.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0065.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0065.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0066.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0066.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0067.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0067.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0068.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0068.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0069.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0069.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0070.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0070.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0071.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0071.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0072.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0072.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0073.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0073.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0074.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0074.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0075.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0075.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0076.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0076.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0077.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0077.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0078.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0078.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0079.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0079.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0080.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0080.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0081.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0081.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0082.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0082.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0083.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0083.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0084.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0084.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0085.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0085.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0086.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0086.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0087.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0087.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0088.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0088.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0089.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0089.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0090.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0090.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0091.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0091.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0092.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0092.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0093.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0093.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0094.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0094.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0095.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0095.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0096.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0096.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0097.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0097.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0098.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0098.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0099.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0099.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0100.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0100.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0101.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0101.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0102.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0102.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0103.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0103.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0104.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0104.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0105.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0105.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0106.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0106.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0107.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0107.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0108.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0108.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0109.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0109.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0110.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0110.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0111.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0111.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0112.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0112.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0113.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0113.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0114.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0114.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0115.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0115.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0116.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0116.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0117.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0117.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0118.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/0118.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/a1c6fecb1fcc6390aae2a6838bdf1093.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-MelaniA-Emelis/a1c6fecb1fcc6390aae2a6838bdf1093.jpg"
}
]
        
    ;

  return (
    <div className="App">
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={3000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
    </div>
  );
}
