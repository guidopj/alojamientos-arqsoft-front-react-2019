import { withStateHandlers } from "recompose";

const initialState = {
  provinces: ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa',
  'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
  'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'],
  types: [
    'Hotel', 'Posada', 'Cabania', 'Otro'
  ],
  stars: [
    '1 Estrella', '2 Estrellas', '3 Estrellas', '4 Estrellas', '5 Estrellas'
  ],
  province: { value: "" },
  state: { value: "" },
  address: { value: "" },
  type: { value: "" },
  category: { value: "" }
};

const onChangeProvince = () => event => ({
    province: {
        value: event.target.value,
    }
});

const onChangeState = () => event => ({
    state: {
    value: event.target.value,
  }
});

const onChangeAddress = () => event => ({
    address: {
    value: event.target.value,
  }
});

const onChangeType = () => event => ({
    type: {
      value: event.target.value,
    }
  });

  const onChangeCategory = () => event => ({
    category: {
      value: event.target.value,
    }
  });

const withTextFieldState = withStateHandlers(initialState, {
    onChangeProvince,
    onChangeState,
    onChangeAddress,
    onChangeType,
    onChangeCategory
});

export default withTextFieldState;