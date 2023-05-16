import { Formik, Form, Field } from 'formik';

function MyForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        tipo: '',
        quartos: '',
      }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <h2>Adicionar Imóvel</h2>

          <label htmlFor="endereco">Endereço:</label>
          <Field name="endereco" type="text" />

          <label htmlFor="cidade">Cidade:</label>
          <Field name="cidade" type="text" />

          <label htmlFor="estado">Estado:</label>
          <Field name="estado" type="text" />

          <label htmlFor="cep">CEP:</label>
          <Field name="cep" type="text" />

          <label htmlFor="tipo">Tipo de Aluguel:</label>
          <Field name="tipo" as="select">
            <option value="">Selecione</option>
            <option value="apartamento-inteiro">Apartamento Inteiro</option>
            <option value="apartamento-metade">Apartamento Metade</option>
          </Field>

          <label htmlFor="quartos">Quartos:</label>
          <Field name="quartos" as="select">
            <option value="">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>

          <button type="submit">Salvar</button>
          <button type="button">Excluir</button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;