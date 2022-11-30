
const paginate = (data) => {
  const itemPerPage = 9
  const numberOfPages = Math.ceil(data.length / itemPerPage)
  
  const newDataLists = Array.from({length: numberOfPages}, (_, index) => {
    const start = index * itemPerPage
    return data.slice(start, start + itemPerPage)  
  })
  return newDataLists
}

export default paginate
