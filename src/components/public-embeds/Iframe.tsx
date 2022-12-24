import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Iframe(
  props: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> & {
    src?: string | {src: string}
  }
) {
  return <iframe
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />;
}