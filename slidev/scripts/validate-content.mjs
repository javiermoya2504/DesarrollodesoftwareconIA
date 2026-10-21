import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile, access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { load } from '@slidev/parser/fs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const data = await load({ roots: [root], userRoot: root }, resolve(root, 'slides.md'))
const manifest = JSON.parse(await readFile(resolve(root, 'source-assets.json'), 'utf8'))
const sourceSnapshot = JSON.parse(await readFile(resolve(root, 'source-snapshot.json'), 'utf8'))
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const content = data.slides.map(s => s.content).join('\n')

assert.equal(data.slides.length, 63, 'El curso debe contener 63 diapositivas')
assert.equal(data.slides.filter(s => s.frontmatter.layout === 'module').length, 6, 'Faltan separadores de módulos')
assert.equal(manifest.length, 16, 'Deben conservarse las 16 imágenes originales')
assert.equal(new Set(manifest.map(a => a.sha256)).size, 16, 'Hay archivos de imagen duplicados')

const references = [...content.matchAll(/<SourceImage\s+src="([^"]+)"/g)].map(m => m[1])
assert.equal(references.length, 16, 'Cada imagen debe aparecer una vez en la presentación')
for (const asset of manifest) {
  assert.equal(references.filter(r => r === asset.public).length, 1, `Uso de ${asset.public}`)
  const original = await readFile(resolve(root, '..', asset.source))
  const copied = await readFile(resolve(root, 'public', asset.public.slice(1)))
  assert.equal(hash(original), asset.sha256, `Se modificó el original ${asset.source}`)
  assert.equal(hash(copied), asset.sha256, `Se modificó la copia ${asset.public}`)
}

for (const [file, expected] of Object.entries(sourceSnapshot)) {
  assert.equal(hash(await readFile(resolve(root, '..', file))), expected, `Original modificado: ${file}`)
}
for (const [, path] of content.matchAll(/<CourseResource\s+path="([^"]+)"/g)) {
  await access(resolve(root, 'public', path.replace(/^\//, '')))
}
const pdfOriginal = Object.keys(sourceSnapshot).find(p => p.endsWith('.pdf'))
assert.equal(hash(await readFile(resolve(root, 'public/resources/attention-is-all-you-need.pdf'))), sourceSnapshot[pdfOriginal])

assert.match(content, /```js\nfunction sumar\(a, b\) \{ return\n```/, 'El fragmento JavaScript original cambió')
assert.equal([...content.matchAll(/```mermaid/g)].length, 4, 'Deben existir cuatro diagramas Mermaid')
assert.match(content, /https:\/\/platform\.openai\.com\/tokenizer/)
assert.match(content, /https:\/\/claude-tokenizer\.vercel\.app\//)
assert.ok(data.slides.every(s => s.content.match(/^# /m)), 'Hay una diapositiva sin título')
console.log('Validación correcta: 63 diapositivas, 6 módulos, 16 imágenes únicas, 4 diagramas Mermaid, 1 fragmento JavaScript y PDF local.')
console.log('Los 18 archivos de la exportación de Notion conservan sus hashes originales.')
console.log('Todas las referencias locales existen. La revisión visual y los enlaces externos se documentan en VALIDACION.md.')
