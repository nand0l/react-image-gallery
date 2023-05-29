import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(1).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(1).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(10).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(10).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(11).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(11).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(12).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(12).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(13).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(13).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(14).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(14).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(15).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(15).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(16).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(16).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(17).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(17).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(2).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(2).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(3).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(3).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(4).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(4).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(5).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(5).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(6).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(6).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(7).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(7).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(8).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(8).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(9).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/ATK_Galleria_-_Paris_White_Nude_&_Sexy/ATK_Galleria_-_Paris_White_Nude_&_Sexy_(9).jpg"
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
