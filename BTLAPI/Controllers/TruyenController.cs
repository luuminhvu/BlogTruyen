using BTLAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BTL.Controllers
{
    public class TruyenController : ApiController
    {
        [HttpGet]
        public List<Truyen> GetTruyen()
        {
            DBTruyenDataContext db = new DBTruyenDataContext();
            return db.Truyens.ToList();
        }
        //[HttpGet]
        //public Truyen GetTruyen(int id)
        //{
        //    DBTruyenDataContext db = new DBTruyenDataContext();
        //    return db.Truyens.FirstOrDefault(x => x.ID == id);
        //}

        ////lay noi dung truyen theo id truyen
        [HttpGet]
        public List<Truyen> GetNoiDungTruyen(int id)
        {
            DBTruyenDataContext db = new DBTruyenDataContext();
            return db.Truyens.Where(x => x.ID == id).ToList();
        }
        [HttpPost]
        public bool PostTruyen(int id, string tenTruyen, string tacGia, string noiDung, string image, int danhMuc)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                Truyen truyen = new Truyen();
                truyen.ID = id;
                truyen.TenTruyen = tenTruyen;
                truyen.TacGia = tacGia;
                truyen.NoiDung = noiDung;
                truyen.Image = image;
                truyen.DanhMuc = danhMuc;
                db.Truyens.InsertOnSubmit(truyen);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpPut]
        public bool PutTruyen(int id, string tenTruyen, string tacGia, string noiDung, string image, int danhMuc)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                Truyen truyenUpdate = db.Truyens.FirstOrDefault(x => x.ID == id);
                truyenUpdate.TenTruyen = tenTruyen;
                truyenUpdate.TacGia = tacGia;
                truyenUpdate.NoiDung = noiDung;
                truyenUpdate.Image = image;
                truyenUpdate.DanhMuc = danhMuc;
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpDelete]
        public bool DeleteTruyen(int id)
        {
            try
            {
                DBTruyenDataContext db = new DBTruyenDataContext();
                Truyen truyenDelete = db.Truyens.FirstOrDefault(x => x.ID == id);
                db.Truyens.DeleteOnSubmit(truyenDelete);
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
