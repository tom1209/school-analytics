const validate = values => {
    const errors = {};

    if (!values.schoolName) {
      errors.schoolName = 'Required';
    } else if (values.schoolName.length > 100) {
        errors.schoolName = 'School name must be 100 characters or less';
    } 
  
    if (!values.studentName) {
      errors.studentName = 'Required';
    } else if (values.studentName.length > 100) {
      errors.studentName = 'Student Name must be 100 characters or less';
    } 
  
    if (values.newClass.length > 100) {
        errors.newClass = 'Class must be 100 characters or less';
    } 

    if (!/^[0-9]+$/i.test(values.newMark)) {
        errors.newMark = 'Marks can only contain numbers';
    } else if (values.newMark.length > 3) {
        errors.newMark = 'Mark must be 3 characters or less';
    } 
  
    return errors;
};

export default validate;