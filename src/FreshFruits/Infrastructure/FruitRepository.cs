using CoderCamps.Infrastructure;
using FreshFruits.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FreshFruits.Infrastructure
{
    public class FruitRepository : GenericRepository<Fruit>
    {

        public FruitRepository(ApplicationDbContext db) : base(db)  { }

    }
}
