using EletricVehicleChargingBunk.Models;
using Microsoft.EntityFrameworkCore;

namespace EletricVehicleChargingBunk.Data
{
    public class EvCharging : DbContext
    {
        public EvCharging(DbContextOptions<EvCharging> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
