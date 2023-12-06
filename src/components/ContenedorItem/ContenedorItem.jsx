import React from 'react'
import Item from '../Item/Item'
import "./contenedoritem.css"
const ContenedorItem = () => {
  const ts="6"
  const key="67761095461147f2a9e88335b16ad5f6"
  const hash="62ea68417303bdb1f06386189768a9ba"
  

  return (
    <>
      <main className='contenedor'>
      <Item
      ruta="https://www.billboard.com/wp-content/uploads/2022/03/50.-Taylor-Swift-%E2%80%981989-2014-album-art-billboard-1240.jpg?w=768"
      titulo="Taylor Swift"
      descripcion="Album: 1989 (2014)"/>  
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/SamSmithThrillOfItAll.png/220px-SamSmithThrillOfItAll.png"
      titulo="Sam Smith"
      descripcion="Album: The thrill of it all (2017)"/> 
      <Item
      ruta="https://media.pitchfork.com/photos/5f9734dc362a0a17e78b7f3a/1:1/w_320,c_limit/love%20goes_sam%20smith.jpg"
      titulo="Sam Smith"
      descripcion="Album: Love Goes (2020) "/> 
      <Item
      ruta="https://assets.vogue.com/photos/623b4f0174ede191983e2c76/master/w_1600,c_limit/unnamed%20(3).jpg"
      titulo="Harry Styles"
      descripcion="Album: As It Was (2022) "/> 
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Harry_Styles_-_Fine_Line.png/220px-Harry_Styles_-_Fine_Line.png"
      titulo="Harry Styles"
      descripcion="Album: Fine Line (2019) "/> 
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Album_Julieta_Venegas_limon_y_sal_cover.jpg/220px-Album_Julieta_Venegas_limon_y_sal_cover.jpg"
      titulo="Julieta Venegas"
      descripcion="Album: Limon Y Sal (2006) "/> 
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Julieta_Venegas_Si.jpg/220px-Julieta_Venegas_Si.jpg"
      titulo="Julieta Venegas"
      descripcion="Album: Sí (2003) "/> 
      <Item
      ruta="https://images.squarespace-cdn.com/content/v1/5ba161f245776eeed1027ece/1541808488002-G7QJR7H4VWO2ISA6C5UE/SmempDLg.jpeg?format=1000w"
      titulo="Andrés Cepeda"
      descripcion="Album: El Carpintero (2001) "/> 
      <Item
      ruta="https://f4.bcbits.com/img/a1187246504_16.jpg"
      titulo="Andrés Cepeda"
      descripcion="Album: Lo Mejor Que Hay En Mi Vida (2001) "/> 
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
      titulo="Michael Jackson"
      descripcion="Album: Thriller (1982) "/> 
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png"
      titulo="Michael Jackson"
      descripcion="Album: Bad (1987) "/> 
      <Item
      ruta="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/One_Direction_-_Made_in_the_AM_%28Official_Album_Cover%29.png/220px-One_Direction_-_Made_in_the_AM_%28Official_Album_Cover%29.png"
      titulo="One Direction"
      descripcion="Album: Made In The A.M. (2015) "/> 
      </main>
    </>
  )
}

export default ContenedorItem
