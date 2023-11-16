import {fireEvent, render} from '@testing-library/react-native';
import {ListForm} from '../ListForm';

const mockOnSave = jest.fn();
const mockOnChangeForm = jest.fn();
const mockHooksResult = {
  listId: null,
  listDetail: {name: '', description: ''},
  listForm: {name: '', description: ''},
  loading: false,
  onSave: mockOnSave,
  onChangeForm: mockOnChangeForm,
};
jest.mock('../useListForm', () => ({
  useListForm: () => mockHooksResult,
}));

jest.mock('../../../components/TopBar', () => ({
  TopBar: 'TopBar',
}));

describe('Test List form screen', () => {
  test('Should render properly when create new list', () => {
    const {getByText} = render(<ListForm />);
    expect(getByText('Create list')).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Description')).toBeTruthy();
  });

  test('Should render properly when create existing list', () => {
    mockHooksResult.listId = 1 as any;
    mockHooksResult.listDetail.name = 'Test';

    const {getByText} = render(<ListForm />);
    expect(getByText('Edit list Test')).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Description')).toBeTruthy();
  });

  test('Should hit mock change form when change value of form', () => {
    const {getByTestId, getByText} = render(<ListForm />);
    const nameForm = getByTestId('list-form-name');
    const descriptionForm = getByTestId('list-form-description');
    expect(nameForm).toBeTruthy();
    expect(descriptionForm).toBeTruthy();

    fireEvent.changeText(nameForm, 'Test new 1');
    expect(mockOnChangeForm).toHaveBeenCalledWith('Test new 1', 'name');

    fireEvent.changeText(descriptionForm, 'Test new 1 description');
    expect(mockOnChangeForm).toHaveBeenCalledWith(
      'Test new 1 description',
      'description',
    );

    fireEvent.press(getByText('Save'));
    expect(mockOnSave).toHaveBeenCalledTimes(1);
  });
});
