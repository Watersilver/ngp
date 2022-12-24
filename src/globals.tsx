// trim off `<owner>/` because process.env.GITHUB_REPOSITORY will be `<owner>/<repo>`
const repo_name = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || "";

const globals = {
  constants: {
    repo_name,
    public_prefix: "/" + repo_name
  } as const,
  functions: {
    prependPublicPrefix(src?: string | {src: string}) {
      if (src === undefined) return undefined;
      if (typeof src === "object") return src.src;
      if (
        globals.constants.repo_name === "" ||
        src[0] !== "/" ||
        src.includes("://")
      ) return src;
      return "/" + globals.constants.repo_name + src;
    }
  } as const
}

export default globals;