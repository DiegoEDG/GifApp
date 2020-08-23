
export const getGifs=async(category)=>{
  const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Hrsya1YKTOAtcFTxwb1Fuf58WIA9uTvo`
  const resp=await fetch(url)
  const {data}=await resp.json()

  const gifs=data.map(img=>{
    return({
        id: img.id,
        title: img.title,
        url: img.images.original.url
      })
  })

  return gifs;
}