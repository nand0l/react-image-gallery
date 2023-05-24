import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(1).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(1).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(10).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(10).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(11).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(11).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(12).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(12).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(13).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(13).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(14).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(14).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(15).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(15).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(16).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(16).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(17).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(17).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(18).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(18).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(19).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(19).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(2).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(2).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(20).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(20).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(21).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(21).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(22).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(22).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(23).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(23).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(24).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(24).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(25).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(25).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(26).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(26).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(27).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(27).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(28).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(28).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(29).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(29).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(3).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(3).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(30).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(30).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(31).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(31).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(32).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(32).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(33).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(33).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(34).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(34).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(35).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(35).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(36).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(36).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(37).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(37).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(38).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(38).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(39).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(39).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(4).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(4).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(40).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(40).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(41).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(41).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(42).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(42).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(43).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(43).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(44).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(44).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(45).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(45).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(46).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(46).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(47).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(47).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(48).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(48).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(49).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(49).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(5).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(5).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(50).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(50).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(51).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(51).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(52).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(52).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(53).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(53).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(54).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(54).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(55).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(55).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(56).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(56).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(6).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(6).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(7).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(7).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(8).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(8).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(9).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time/Pretty+Virgins+-+Nastya+-+The+Girl+Seems+To+Be+So+Young+&+Sexy+At+The+Same+Time+(9).jpg"
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