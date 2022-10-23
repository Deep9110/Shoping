export const load = async () => {
  const fetchMegamenu = async () => {
    const res = await fetch(
      `https://staging.zapvi.in/api/categories/megamenu?store=62b00e15c4899dc7b1f78cb1`
    )
    const data = await res.json()
    return data
  }

  return {
    megamenu: fetchMegamenu(),
  }
}
