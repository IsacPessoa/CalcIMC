import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  max-width: 660px;
  width: 100%;
  padding: 40px 24px;
  margin-top: 100px;
  border-radius: 12px;
  background-color: ${colors.white};
  color: ${colors.black};
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 50px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    margin-bottom: 8px;
    margin-top: 20px;
    text-align: left;
    width: 60%;
  }

  input {
    width: 60%;
    padding: 12px;
    border: 1px solid ${colors.pink};
    border-radius: 3px;
    outline: none;
  }

  button {
    margin-top: 20px;
    width: 60%;
    padding: 12px;
    border: none;
    background-color: ${colors.pink};
    border-radius: 3px;
    color: ${colors.white};
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 79, 145, 0.8);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;

    input,
    button,
    label {
      width: 90%;
    }
  }
`

export const TableContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`

export const Table = styled.table`
  width: 100% 
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid ${colors.pink};

    th {
      padding: 12px 24px;
      text-align: center;
      @media (max-width: 768px) {
        padding: 12px 18px;
      }
    }
  }

  tbody {
    th  {
      padding-top: 12px;
      font-weight: normal
    }
  }
  
`

export const TableInfo = styled.table`
  border: 1px solid ${colors.gray};
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    background-color: ${colors.gray};
  }

  tbody {
    font-weight: normal;
  }

  tbody tr:nth-child(odd) {
    background-color: ${colors.white};
  }
  tbody tr:nth-child(even) {
    background-color: ${colors.gray};
  }

  th {
    padding: 6px 35px;
    border: none;

    @media (max-width: 768px) {
      padding: 8px 50px;
    }
  }
`
