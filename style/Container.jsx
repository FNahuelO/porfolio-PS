import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  min-height: ${({ minHeight }) => minHeight || null};
  min-height: ${({ maxHeight }) => maxHeight || null};
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flex }) => flex || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ align }) => align || null};
  align-content: ${({ content }) => content || null};
  gap: ${({ gap }) => gap || null};
  padding: ${({ padding }) => padding || null};
  overflow: ${({ overflow }) => overflow || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top: ${({ borderTop }) => borderTop || null};
  border-left: ${({ borderLeft }) => borderLeft || null};
  border-right: ${({ borderRight }) => borderRight || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-align: ${({ textAlign }) => textAlign || null};
  flex-wrap: ${({ wrap }) => wrap || null};
  flex-grow: ${({ grow }) => grow || null};
  color: ${({ color }) => color || null};
  background-size: ${({ bgSize }) => bgSize || null};
  background-position: ${({ bgPosition }) => bgPosition || null};
  background-repeat: ${({ bgRepeat }) => bgRepeat || null};
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  inset: ${({ inset }) => inset || null};
  transform: ${({ transform }) => transform || null};
  transition: ${({ transition }) => transition || null};
  margin: ${({ margin }) => margin || null};
  z-index: ${({ index }) => index || null};
  font-size: ${({ size }) => size || null};

  &:hover {
    ${({ hover }) =>
      hover &&
      css`
        ${hover}
      `};
  }
`
