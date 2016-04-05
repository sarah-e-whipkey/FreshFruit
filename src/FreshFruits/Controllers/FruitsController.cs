using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FreshFruits.Models;
using FreshFruits.Infrastructure;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FreshFruits.Controllers
{
    [Route("api/[controller]")]
    public class FruitsController : Controller
    {
        private FruitRepository _fruitRepo;

        public FruitsController(FruitRepository fruitRepo)
        {
            _fruitRepo = fruitRepo;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var fruits = _fruitRepo.List().Select(f => new { Name = f.Name, Color = f.Color, IsFresh = f.IsFresh}).ToList();

            return Ok(fruits);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Fruit f)
        {
            if (ModelState.IsValid)
            {
                _fruitRepo.Add(f);
                _fruitRepo.SaveChanges();

                return Ok();
            }
            else
            {
                return HttpBadRequest(ModelState);
            }
        }
    }
}
