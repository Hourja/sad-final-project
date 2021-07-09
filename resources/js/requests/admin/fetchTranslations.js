export default async function fetchTranslations(phraseId) {
  const url = `/api/table/phraseWithTranslation?phraseId=${phraseId}`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
