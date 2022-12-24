import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Audio(
  props: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> & {
    src?: string | {src: string}
  }) {

  return <audio
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />
}