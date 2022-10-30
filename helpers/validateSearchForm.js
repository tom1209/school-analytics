/**
 * Validation for the search form
 * @param {*} values form values
 */
const validate = values => {
    const errors = {};
    
    if (!values.search) {
        errors.search = 'You must enter a value';
    } else if (values.search.length > 100) {
        errors.search = 'Query must be 100 characters or less';
    } 
  
    return errors;
};

export default validate;