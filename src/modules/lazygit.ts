import { PrimerPalette } from "palette";
import { blend } from "@lib/colors";

const fmt = (c: string): string => {
  return `'${c.replace("#", "0x")}'`;
};

export default {
  name: "lazygit",
  ext: "yml",
  generate: (name: string, p: PrimerPalette): string => {
    const parse = (c: string) => blend(p.canvas.default, c);
    return `# (${name}) Colors for lazygit

theme:
  activeBorderColor:
    - '${p.accent.emphasis}'
    - bold
  inactiveBorderColor:
    - '${p.border.default}'
  optionsTextColor:
    - '${p.fg.muted}'
  selectedLineBgColor:
    - ${fmt(parse(p.codemirror.selectionBg))}
  cherryPickedCommitBgColor:
    - '${p.canvas.overlay}'
  cherryPickedCommitFgColor:
    - '${p.accent.emphasis}'
  unstagedChangesColor:
    - '${p.danger.emphasis}'
  defaultFgColor:
    - '${p.fg.default}'
  searchingActiveBorderColor:
    - '${p.attention.emphasis}'`;
  }
}
