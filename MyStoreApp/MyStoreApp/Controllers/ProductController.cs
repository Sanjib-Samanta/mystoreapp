using MyStoreApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyStoreApp.Controllers
{
    public class ProductController : ApiController
    {
      private MyStoreEntities _db;

      public ProductController()
      {
      _db = new MyStoreEntities();
      }

    public IEnumerable<Product> GetProducts()
    {
      return _db.Products.ToList();
    }
    }
}
