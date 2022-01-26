import Form from 'react-bootstrap/Form';

const Category = ({ options }) => {
  console.log(options);

  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  )
}

export default Category;