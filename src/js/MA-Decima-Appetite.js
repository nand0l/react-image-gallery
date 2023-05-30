import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt-Appetite-cover-clean.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt-Appetite-cover-clean.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0001.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0001.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0002.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0002.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0003.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0003.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0004.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0004.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0005.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0005.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0006.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0006.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0007.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0007.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0008.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0008.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0009.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0009.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0010.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0010.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0011.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0011.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0012.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0012.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0013.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0013.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0014.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0014.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0015.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0015.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0016.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0016.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0017.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0017.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0018.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0018.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0019.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0019.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0020.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0020.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0021.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0021.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0022.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0022.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0023.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0023.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0024.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0024.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0025.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0025.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0026.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0026.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0027.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0027.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0028.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0028.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0029.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0029.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0030.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0030.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0031.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0031.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0032.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0032.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0033.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0033.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0034.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0034.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0035.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0035.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0036.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0036.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0037.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0037.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0038.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0038.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0039.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0039.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0040.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0040.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0041.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0041.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0042.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0042.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0043.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0043.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0044.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0044.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0045.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0045.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0046.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0046.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0047.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0047.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0048.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0048.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0049.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0049.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0050.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0050.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0051.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0051.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0052.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0052.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0053.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0053.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0054.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0054.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0055.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0055.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0056.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0056.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0057.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0057.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0058.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0058.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0059.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0059.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0060.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0060.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0061.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0061.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0062.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0062.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0063.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0063.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0064.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0064.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0065.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0065.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0066.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0066.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0067.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0067.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0068.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0068.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0069.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0069.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0070.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0070.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0071.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0071.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0072.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0072.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0073.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0073.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0074.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0074.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0075.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0075.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0076.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0076.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0077.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0077.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0078.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0078.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0079.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0079.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0080.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0080.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0081.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0081.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0082.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0082.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0083.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0083.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0084.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0084.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0085.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0085.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0086.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0086.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0087.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0087.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0088.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0088.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0089.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0089.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0090.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0090.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0091.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0091.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0092.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0092.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0093.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0093.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0094.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0094.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0095.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0095.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0096.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0096.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0097.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0097.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0098.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0098.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0099.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0099.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0100.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0100.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0101.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0101.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0102.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0102.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0103.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0103.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0104.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0104.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0105.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0105.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0106.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0106.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0107.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0107.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0108.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0108.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0109.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0109.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0110.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0110.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0111.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0111.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0112.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0112.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0113.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0113.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0114.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0114.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0115.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0115.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0116.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0116.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0117.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0117.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0118.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0118.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0119.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0119.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0120.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/MetArt_Appetite_Decima_high_0120.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/_MetArt-Appetite-cover.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/MA-Decima-Appetite/_MetArt-Appetite-cover.jpg"
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
