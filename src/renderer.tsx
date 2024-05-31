import { Renderer } from "@k8slens/extensions";

const { name } = require("../package.json");

export default class extends Renderer.LensExtension {
  protected onActivate(): void | Promise<void> {
    console.log(`${name} renderer activated`);

    const style = document.createElement("style");

    style.appendChild(
      document.createTextNode(`
        :root {
          --font-main: 'JetBrainsMono Nerd Font', 'Cascadia Code', Consolas, monospace;
        }
      `)
    );

    document.head.appendChild(style);
  }

  protected onDeactivate(): void | Promise<void> {
    console.log(`${name} renderer de-activated`);
  }
}
