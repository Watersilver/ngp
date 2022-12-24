import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Video(
  props: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
    src?: string | {src: string}
  }) {

  return <video
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />
}