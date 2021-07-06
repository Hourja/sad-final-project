export default async function translate(languageId, phraseId) {
  const url = `/api/table/translate?languageId=${languageId}&phraseId=${phraseId}`

  const resp = await fetch(url)

  const data = await resp.json()

  return data.name
}
