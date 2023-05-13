using BTLAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BTL.Controllers
{
    public class DanhMucController : ApiController
    {
        [HttpGet]
        public List<DanhMuc> GetDanhMuc()
        {
            DBTruyenDataContext dBTruyenDataContext = new DBTruyenDataContext();
            return dBTruyenDataContext.DanhMucs.ToList();
        }
        [HttpGet]
        public List<Truyen> GetTruyenByDanhMuc(int id)
        {
            DBTruyenDataContext db = new DBTruyenDataContext();
            return db.Truyens.Where(x => x.DanhMuc == id).ToList();
        }
        [HttpPost]
        public bool PostDanhMuc(int id, string tenDanhMuc)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                DanhMuc danhMuc = new DanhMuc();
                danhMuc.IdDanhMuc = id;
                danhMuc.TenDanhMuc = tenDanhMuc;
                db.DanhMucs.InsertOnSubmit(danhMuc);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpPut]
        public bool PutDanhMuc(int id, string tenDanhMuc)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                DanhMuc danhMucUpdate = db.DanhMucs.FirstOrDefault(x => x.IdDanhMuc == id);
                danhMucUpdate.TenDanhMuc = tenDanhMuc;
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpDelete]
        public bool DeleteDanhMuc(int id)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                DanhMuc danhMucDelete = db.DanhMucs.FirstOrDefault(x => x.IdDanhMuc == id);
                db.DanhMucs.DeleteOnSubmit(danhMucDelete);
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
