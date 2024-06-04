import Carousel from 'react-spring-3d-carousel'
import { useState, useEffect, useRef } from 'react'
import { config } from 'react-spring'

export default function Carroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(2)
  const [showArrows, setShowArrows] = useState(false)
  const [cards, setCards] = useState([])
  const [goToSlide, setGoToSlide] = useState(props.activeCard)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  const activeCardRef = useRef(props.activeCard)

  useEffect(() => {
    const table = props.cards?.map((element, index) => ({
      ...element,
      onClick: () => setGoToSlide(index),
    }))
    setCards(table)
  }, [props.cards]) // Actualiza las cartas cuando cambian las props

  useEffect(() => {
    setOffsetRadius(props.offset)
    setShowArrows(props.showArrows)
  }, [props.offset, props.showArrows])

  useEffect(() => {
    activeCardRef.current = props.activeCard
    setGoToSlide(props.activeCard)
  }, [props.activeCard])

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
    clearInterval()
  }

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      if (touchEndX < touchStartX) {
        setGoToSlide((activeCardRef.current + 1) % cards?.length)
      } else if (touchEndX > touchStartX) {
        setGoToSlide(
          activeCardRef.current === 0
            ? cards?.length - 1
            : activeCardRef.current - 1,
        )
      }
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  const renderCard = (slide, index) => {
    const isActive = index === goToSlide
    const isLeft = index === (goToSlide - 1 + cards.length) % cards.length
    const isRight = index === (goToSlide + 1) % cards.length

    const cardStyle = {
      // Estilo común para todas las tarjetas
      transition: 'transform 0.5s ease-in-out',
      width: '20rem',
      height: '100%',
      // Estilos condicionales
      ...(isActive && { transform: 'scale(1)', zIndex: 1 }), // Central
      ...(isLeft && {
        transform: 'translateX(30%) scale(1.65)',
        zIndex: 0,
      }), // Lateral izquierda
      ...(isRight && {
        transform: 'translateX(-30%) scale(1.65)',
        zIndex: 0,
      }), // Lateral derecha
    }

    return (
      <div key={index} style={cardStyle} onClick={slide.onClick}>
        {slide.content}
      </div>
    )
  }

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards.map((card, index) => ({
          ...card,
          content: renderCard(card, index),
        }))}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.default}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  )
}
