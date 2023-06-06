import styled from 'styled-components'
import { Colors } from '../../styles'

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 160px 0 24px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;

  img {
    max-width: 100%;
    width: 320px;
    height: 320px;
    border-radius: 8px;
  }

  h4 {
    color: ${Colors.white};
    font-size: 20px;
    margin-bottom: 16px;
  }
`
