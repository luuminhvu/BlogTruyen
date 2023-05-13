using BTLAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Web.Http;

namespace BTL.Controllers
{
    public class AccountController : ApiController
    {
        [HttpGet]
        public List<TaiKhoan> GetAccount()
        {
            DBTruyenDataContext db = new DBTruyenDataContext();
            return db.TaiKhoans.ToList();
        }

        //[HttpGet]
        //public IEnumerable<TaiKhoan> Get(string username, string password)
        //{
        //    DBTruyenDataContext db = new DBTruyenDataContext();
        //    return db.TaiKhoans.Where(a => a.Username == username && a.Password == password);
        //}

        [HttpPost]
        public bool PostAccount(int idAcc, string username, string password)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                TaiKhoan account = new TaiKhoan();
                account.idAcc = idAcc;
                account.Username = username;
                account.Password = password;
                db.TaiKhoans.InsertOnSubmit(account);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpPut]
        public bool PutAccount(int idAcc, string username, string password, int role)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                TaiKhoan accountUpdate = db.TaiKhoans.FirstOrDefault(x => x.idAcc == idAcc);
                accountUpdate.Username = username;
                accountUpdate.Password = password;
                accountUpdate.Role = role;
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpDelete]
        public bool DeleteAccount(int idAcc)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                TaiKhoan accountDelete = db.TaiKhoans.FirstOrDefault(x => x.idAcc == idAcc);
                db.TaiKhoans.DeleteOnSubmit(accountDelete);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
