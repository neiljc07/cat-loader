import Form from 'react-bootstrap/Form';

const Dropdown = ({ options, value, label, defaultLabel, callback }) => {
  return (
    <Form.Select aria-label={ label } onChange={callback}>
      <option>{ defaultLabel }</option>

      {options.map((option, index) => {
        return <option key={index} value={option[value]}>{ option[label] }</option>
      })}
    </Form.Select>
  )
}

export default Dropdown;