import { v4 as uuidv4 } from 'uuid'
import Carousel from './Carousel'
import Card from './cards/Slider'
import React, { useState, useEffect } from 'react'

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          title="Marketplace"
          text="Estas páginas web facilitan transacciones comerciales, permitiendo a los clientes explorar catálogos de productos, agregar artículos al carrito de compras y finalizar la compra mediante métodos de pago en línea"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
          title="Marketplace"
          text="Estas páginas web facilitan transacciones comerciales, permitiendo a los clientes explorar catálogos de productos, agregar artículos al carrito de compras y finalizar la compra mediante métodos de pago en línea"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
          title="Marketplace"
          text="Estas páginas web facilitan transacciones comerciales, permitiendo a los clientes explorar catálogos de productos, agregar artículos al carrito de compras y finalizar la compra mediante métodos de pago en línea"
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ]
  const [activeCard, setActiveCard] = useState(0)

  return (
    <Carousel
      cards={cards}
      activeCard={activeCard}
      height="500px"
      width="55%"
      margin="0 auto"
      offset={1}
      showArrows={false}
      slides={cards}
    />
  )
}

export default App
