import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(1).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(1).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(10).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(10).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(11).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(11).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(12).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(12).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(13).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(13).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(14).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(14).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(15).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(15).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(16).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(16).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(17).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(17).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(18).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(18).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(2).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(2).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(3).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(3).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(4).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(4).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(5).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(5).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(6).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(6).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(7).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(7).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(8).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(8).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(9).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Beauty+In+Stockings+Nude+&+Sexy/Beauty+In+Stockings+Nude+&+Sexy+(9).jpg"
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
