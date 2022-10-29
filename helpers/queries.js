/**
 * Queries Search API 
 * @param {*} schoolName - name of school to search
 */
const searchSchoolInDB = async (schoolName) => {
    console.log(`here`)
    const response = await fetch(`/api/search?name=${schoolName}`)

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'something went wrong')
    }

    return data[0];
}

export { searchSchoolInDB }