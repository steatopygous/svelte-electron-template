<script>
    export let version;

    let name = "World";

    const remote = require('electron').remote;
    const app = remote.app;

    const { setDebug } = app;
</script>

<style type="text/scss">
	h1 {
		color: purple;

		span {
			color: green;
		}
	}
</style>

<h1>Hello <span>{name}</span>!</h1>
<p>We are using Node.js version {process.versions.node},</p>
<p>Chromium version {process.versions.chrome}</p>
<p>and Electron version {process.versions.electron}.</p>
<p>But most importantly <strong>Svelte</strong> version {version}!</p>
<br>
<p>This boilerplate, in addition to using Svelte with Electron, also uses <i>Node-Sass</i>!</p>
