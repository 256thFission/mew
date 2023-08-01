import { useCallback } from 'react';

function CreateTaskMultiStepFormContainer() {
  const [form, setForm] = useState(FORM_STATE);

  const onComplete = useCallback((state) => {
    // do something with "state"
  }, []);

  return (
    <FormStateContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      <CreateTaskMultiStepForm />
    </FormStateContext.Provider>
  );
}

export default CreateTaskMultiStepFormContainer;
