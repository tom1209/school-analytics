/**
 * Queries Search API 
 * @param {*} schoolName - name of school to search
 */
const searchSchoolInDB = async (schoolName) => {
    try {      
        const response = await fetch(`/api/search?name=${schoolName}`)
        const responseData = await response.json();

        return responseData[0];
    }
    catch (e) {
        console.error(e)
        return e;
    }
}

/**
 * Queries create API to add a student and their grades to a school
 * If school does not exist, the school will also be inserted
 * @param {school to add student to} school 
 * @param {student to add to the school with their grades} student 
 */
const addStudentToSchool = async (school, student) => {
    try {
        const data = {
            student,
            school
        }

        const response = await fetch(`/api/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json();
        return responseData;
    }
    catch(e) {
        console.error(e)
        return e;
    }
}

export { searchSchoolInDB, addStudentToSchool }