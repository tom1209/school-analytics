/**
 * Validation for the add student form
 * @param {*} values form values
 */
const validate = values => {
    const errors = {};

    /** School Name */
    if (!values.schoolName) {
      errors.schoolName = 'This field is Required';
    } else if (values.schoolName.length > 100) {
        errors.schoolName = 'School name must be 100 characters or less';
    } 
  
    /** Student Name */
    if (!values.studentName) {
      errors.studentName = 'This field is Required';
    } else if (values.studentName.length > 100) {
      errors.studentName = 'Student Name must be 100 characters or less';
    } 
  
    /** Class Name */
    if (values.newClass.length > 100) {
        errors.newClass = 'Class must be 100 characters or less';
    } 

    /** Mark */
    if (values.newMark.length > 3) {
        errors.newMark = 'Mark must be 3 characters or less';
    } 
  
    return errors;
};

export default validate;