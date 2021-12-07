import axios from 'axios';

const EMPLOYEE_API_BASE_URI = 'http://localhost:8080/api/v1/employees';

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URI);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URI, employee);
    }
    
    getEmployeeById(id) {
        return axios.get(`${EMPLOYEE_API_BASE_URI}/${id}`);
    }

    updateEmployee(employee, id) {
        return axios.put(`${EMPLOYEE_API_BASE_URI}/${id}`, employee);
    }

    deleteEmployee(id) {
        return axios.delete(`${EMPLOYEE_API_BASE_URI}/${id}`);
    }
}

export default new EmployeeService();