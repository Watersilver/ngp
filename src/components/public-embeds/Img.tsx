import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Img(
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    src?: string | {src: string}
  }
) {
  return <img
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />;
}