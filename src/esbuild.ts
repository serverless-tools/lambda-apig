require('esbuild').build({
  entryPoints: ['./src/index.ts'],
  bundle: true, 
  minify: false,
  outdir: 'dist',
  target: "node12",
  platform: "node",
  watch: false,
}).catch((e:any) => {console.log(e); process.exit(1)})
