using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebAPIDataAccess;

namespace WebAPIPractice.Controllers
{
    public class EmployeesController : ApiController
    {
       // GET: Employees
        public IEnumerable<Employee> Get()
        {
            using (EmployeeDBEntities entites = new EmployeeDBEntities())
            {
                return entites.Employees.ToList();
            }
        }



        public Employee Get(int id)
        {
            using (EmployeeDBEntities entites = new EmployeeDBEntities())
            {
                return entites.Employees.FirstOrDefault(e => e.ID == id);
            }
        }
    }
}