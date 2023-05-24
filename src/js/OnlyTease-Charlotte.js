import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(1).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(1).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(10).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(10).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(11).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(11).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(12).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(12).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(13).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(13).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(14).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(14).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(15).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(15).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(16).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(16).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(17).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(17).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(18).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(18).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(19).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(19).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(2).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(2).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(20).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(20).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(21).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(21).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(3).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(3).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(4).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(4).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(5).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(5).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(6).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(6).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(7).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(7).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(8).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(8).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(9).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Only+Tease+-+Charlotte/Only+Tease+-+Charlotte+(9).jpg"
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
