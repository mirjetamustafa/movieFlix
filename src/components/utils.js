export const getGenreNames = (genreIds, genresList) => {
  if (!Array.isArray(genreIds)) return 'No genre info'
  return genreIds
    .map((id) => genresList.find((genre) => genre.id === id)?.name)
    .filter(Boolean)
    .join(', ')
}
