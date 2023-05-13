using BTLAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BTL.Controllers
{
    public class AdminController : ApiController
    {
        [HttpGet]
        public Truyen GetTruyenByID(int id)
        {
            DBTruyenDataContext dB = new DBTruyenDataContext();
            return dB.Truyens.FirstOrDefault(x => x.ID == id);
        }
    }
}