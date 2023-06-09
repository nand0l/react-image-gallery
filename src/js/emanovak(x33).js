import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_1.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_1.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_12.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_12.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_13.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_13.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_2.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_2.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_293.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_293.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_3.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_3.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_5.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_5.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_588.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_588.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_6.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_6.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_7.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_7.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_778.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_778.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_779.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_779.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_782.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_782.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_783.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_783.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_784.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_784.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_785.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_785.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_786.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_786.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_787.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_787.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_790.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_790.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_791.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_791.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_792.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_792.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_793.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_793.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_794.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_794.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_795.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_795.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_796.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_796.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_797.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_797.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_798.jpeg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_798.jpeg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_800.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_800.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_801.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_801.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_802.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_802.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_804.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_804.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_805.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_805.jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_9.jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/emanovak(x33)/OnF_emanovak_9.jpg"
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
