import { useState } from 'react'
import { CardContainer, Form, Table, TableContent, TableInfo } from './styles'

const Card = () => {
  const [peso, setPeso] = useState<string>('')
  const [altura, setAltura] = useState<string>('')
  const [imc, setImc] = useState<number | null>(null)
  const [resultado, setResultado] = useState<string>('')
  const [calculado, setCalculado] = useState<boolean>(false)

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)

    if (!isNaN(pesoNum) && !isNaN(alturaNum) && pesoNum > 0 && alturaNum > 0) {
      const alturaMetros = alturaNum / 100
      const imcCalc = pesoNum / (alturaMetros * alturaMetros)
      setImc(imcCalc)
      setCalculado(true)

      if (imcCalc < 18.5) {
        setResultado('Abaixo do peso')
      } else if (imcCalc >= 18.5 && imcCalc < 24.9) {
        setResultado('Peso normal')
      } else if (imcCalc >= 25 && imcCalc < 29.9) {
        setResultado('Sobrepeso')
      } else if (imcCalc >= 30 && imcCalc < 34.9) {
        setResultado('Obesidade grau 1')
      } else if (imcCalc >= 35 && imcCalc < 39.9) {
        setResultado('Obesidade grau 2')
      } else {
        setResultado('Obesidade grau 3')
      }
    } else {
      setImc(null)
      setResultado('')
      setCalculado(false)
    }
  }

  return (
    <CardContainer>
      <Form>
        <label htmlFor="peso">Peso</label>
        <input placeholder="KG" type="number" value={peso} min={0} onChange={(e) => setPeso(e.target.value)} />
        <label htmlFor="altura">Altura</label>
        <input placeholder="CM" type="number" value={altura} min={0} onChange={(e) => setAltura(e.target.value)} />
        <button type="button" onClick={calcularIMC}>
          {calculado ? 'recalcular' : 'calcular'}
        </button>
      </Form>

      <TableContent>
        <Table>
          <thead>
            <tr>
              <th>Peso</th>
              <th>Altura</th>
              <th>IMC</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{calculado ? `${peso} kg` : '- kg'}</th>
              <th>{calculado ? `${altura} cm` : '- cm'}</th>
              <th>{calculado && imc !== null ? imc.toFixed(2) : '-'}</th>
              <th>{calculado ? resultado : '-'}</th>
            </tr>
          </tbody>
        </Table>
      </TableContent>

      <TableContent>
        <TableInfo>
          <thead>
            <th>IMC</th>
            <th>Classificação</th>
          </thead>
          <tbody>
            <tr>
              <th>Abaixo de 18,5</th>
              <th>Abaixo do peso</th>
            </tr>
            <tr>
              <th>18,5 - 24,9</th>
              <th>Peso normal</th>
            </tr>
            <tr>
              <th>25 - 29,9</th>
              <th>Sobrepeso</th>
            </tr>
            <tr>
              <th>30 - 34,9</th>
              <th>Obesidade grau 1</th>
            </tr>
            <tr>
              <th>35 - 39,9</th>
              <th>Obesidade grau 2</th>
            </tr>
            <tr>
              <th>40 ou mais</th>
              <th>Obesidade grau 3</th>
            </tr>
          </tbody>
        </TableInfo>
      </TableContent>
    </CardContainer>
  )
}

export default Card
