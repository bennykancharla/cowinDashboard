// Write your code here
import {BarChart, XAxis, YAxis, Legend, Bar} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverage} = props
  const DataFormatter = num => `${num * 100}k`
  //   console.log(props)
  return (
    <div className="chart-container">
      <h4 className="chart-heading">Vaccination Coverage</h4>

      <BarChart
        width={1000}
        height={300}
        data={vaccinationCoverage}
        margin={{top: 5}}
      >
        <XAxis dataKey="vaccineDate" tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
