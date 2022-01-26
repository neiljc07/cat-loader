import Form from 'react-bootstrap/Form';

const Dropdown = ({ label, options, value, text, defaultLabel, callback, defaultValue = '', disabled = false }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>{ label }</Form.Label>
        <Form.Select aria-label={ text } onChange={callback} disabled={disabled} value={defaultValue}>
          <option>{ defaultLabel }</option>

          {options.map((option, index) => {
            return (
              <option 
                key={index} 
                value={option[value]}>
                  { option[text] }
              </option>
            )
          })}
        </Form.Select>
      </Form.Group>
    </Form>
  )
}

export default Dropdown;