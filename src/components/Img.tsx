import globals from "../globals";

/** Shows image from publicly served images */
export default function Img(
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    src?: string | {src: string}
  }
) {
  console.log(props.src);
  return <img
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />;
}