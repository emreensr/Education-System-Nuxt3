export const useErrorHandler = () => {
    const errorHandler = (err) => {
        let errors = []
        try {
            if(typeof err?.response?._data === 'object') {
                Object.keys(err.response._data).forEach((key) => {
                    errors.push(err.response._data[key][0]);
                  });
            } else if(err?.message) {
                errors.push(err.message)
            }
          } catch {
            errors.push("Etwas ist schief gelaufen");
          }

          return errors
    }

    return { errorHandler }
}