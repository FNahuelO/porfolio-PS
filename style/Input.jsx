import styled from 'styled-components';
import vector from '../Style/assets/ChevronDrown.svg';
import desplegar from '../Style/assets/Desplegar.svg';
import { Field as FieldFormik } from 'formik';

export const Field = styled(FieldFormik)`
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  text-align: ${({ textAlign }) => textAlign || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  padding: ${({ padding }) => padding || null};
  margin: ${({ margin }) => margin || null};
  appearance: ${({ appearance }) => appearance || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  border-top-right-radius: ${({ topRight }) => topRight || null};
  border-bottom-right-radius: ${({ bottomRight }) => bottomRight || null};
  outline: ${({ outline }) => outline || null};
  background-size: ${({ bgSize }) => bgSize || null};
  background-position-x: ${({ bgPositionX }) => bgPositionX || null};
  background-position-y: ${({ bgPositionY }) => bgPositionY || null};
  background-repeat: ${({ bgRepeat }) => bgRepeat || null};
  background-image: ${({ bgImage }) => bgImage && `url('${vector?.src}')`};
  > option {
    background: ${({ bgOption }) => bgOption || null};
    color: ${({ colorOption }) => colorOption || null};
  }
`;

export const Input = styled.input`
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  text-align: ${({ textAlign }) => textAlign || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  padding: ${({ padding }) => padding || null};
  margin: ${({ margin }) => margin || null};
  appearance: ${({ appearance }) => appearance || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  border-top-right-radius: ${({ topRight }) => topRight || null};
  border-bottom-right-radius: ${({ bottomRight }) => bottomRight || null};

  outline: ${({ outline }) => outline || null};
  > option {
    background: ${({ bgOption }) => bgOption || null};
    color: ${({ colorOption }) => colorOption || null};
  }
`;

export const InputFile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  > label {
    background: #afcaff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #166efd;
    position: absolute;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  > span {
    width: ${({ widthSpan }) => widthSpan || '50%'};
    position: absolute;
    right: ${({ rigthSpan }) => rigthSpan || '7%'};
    left: ${({ leftSpan }) => leftSpan || null};
    font-size: ${({ sizeSpan }) => sizeSpan || '0.9rem'};
  }

  > input[type='file'] {
    opacity: 0;
  }
`;

export const InputSearch = styled.input`
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  border: ${({ border }) => border || null};
  padding: ${({ padding }) => padding || null};
  padding-right: ${({ paddingRight }) => paddingRight || null};
  border-radius: ${({ radius }) => radius || null};
  outline: none;
`;

export const Select = styled.select`
  appearance: none;
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  text-align: ${({ textAlign }) => textAlign || null};
  font-weight: ${({ weight }) => weight || null};
  font-size: ${({ size }) => size || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  padding: ${({ padding }) => padding || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  border-top-right-radius: ${({ topRight }) => topRight || null};
  border-bottom-right-radius: ${({ bottomRight }) => bottomRight || null};
  outline: ${({ outline }) => outline || null};
  overflow: ${({ overflow }) => overflow || null};
  background-image: ${({ vectorColor }) =>
    vectorColor === 'black'
      ? `url('${vector.src}')`
      : `url('${desplegar.src}')`};
  background-position-y: center;
  background-position-x: ${({ vectorWidth }) => vectorWidth || '95%'};
  background-size: ${({ bgSize }) => bgSize || '1.5rem'};
  cursor: ${({ cursor }) => cursor || null};
  background-repeat: no-repeat;

  &::placeholder {
    color: #4c4f4d;
  }
  > option {
    background: ${({ bgOption }) => bgOption || null};
    color: ${({ colorOption }) => colorOption || null};
  }
`;

export const InputIcon = styled.div`
  display: flex;
  position: relative;
  border: none;
  align-items: center;
  padding: 2px 4px 4px 4px;

  > svg {
    position: absolute;
    padding: 1rem;
    z-index: 1;
  }

  > input {
    width: 100%;
    padding: ${({ padding }) => padding || null};
    padding-left: 3rem;
    border: 1px solid #e6e6e6;
    border-radius: 3rem;

    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      color: #4c4f4d;
    }
  }

  @media (min-width: 1900px) {
    img[class='icons'] {
      width: 2rem;
      height: 2rem;
      position: absolute;
      padding: 0.9rem;
    }
    img[id='view'] {
      position: absolute;
      right: 1rem;
      width: 2rem;
      height: 2rem;
    }

    input {
      padding-left: 3.5rem;
      font-size: 1.5rem;

      &::placeholder {
        font-size: 1.5rem;
        font-weight: 400;
        color: #4c4f4d;
      }
    }
  }
`;
