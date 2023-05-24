import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(1).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(1).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(10).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(10).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(11).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(11).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(12).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(12).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(13).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(13).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(14).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(14).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(15).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(15).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(16).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(16).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(17).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(17).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(18).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(18).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(19).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(19).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(2).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(2).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(20).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(20).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(21).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(21).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(22).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(22).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(23).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(23).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(24).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(24).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(25).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(25).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(26).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(26).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(27).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(27).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(28).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(28).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(29).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(29).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(3).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(3).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(30).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(30).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(31).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(31).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(32).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(32).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(33).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(33).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(34).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(34).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(35).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(35).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(36).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(36).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(37).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(37).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(38).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(38).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(39).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(39).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(4).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(4).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(40).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(40).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(41).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(41).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(42).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(42).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(43).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(43).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(44).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(44).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(45).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(45).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(46).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(46).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(47).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(47).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(48).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(48).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(49).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(49).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(5).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(5).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(50).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(50).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(51).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(51).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(52).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(52).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(53).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(53).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(54).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(54).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(55).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(55).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(56).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(56).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(57).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(57).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(58).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(58).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(59).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(59).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(6).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(6).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(60).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(60).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(61).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(61).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(62).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(62).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(63).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(63).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(64).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(64).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(65).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(65).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(66).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(66).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(67).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(67).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(68).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(68).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(69).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(69).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(7).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(7).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(70).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(70).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(71).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(71).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(72).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(72).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(73).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(73).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(74).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(74).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(75).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(75).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(76).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(76).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(77).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(77).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(78).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(78).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(79).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(79).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(8).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(8).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(80).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(80).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(81).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(81).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(82).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(82).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(83).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(83).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(84).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(84).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(85).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(85).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(86).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(86).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(87).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(87).jpg"
},
{
	"original":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(9).jpg",
	"thumbnail":"https://00009999000088889999.s3.eu-west-1.amazonaws.com/single_folders/Jana_A-Asja_K-Naked_in_Koktebel/+(9).jpg"
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
