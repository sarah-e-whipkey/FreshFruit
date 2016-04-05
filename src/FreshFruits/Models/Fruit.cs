using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FreshFruits.Models
{
    public class Fruit
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Color { get; set; }

        public bool IsFresh { get; set; }
    }
}
