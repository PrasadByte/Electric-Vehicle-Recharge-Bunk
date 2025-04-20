using EletricVehicleChargingBunk.Models;
using BCrypt.Net;
using EletricVehicleChargingBunk.Data;
using System.Linq;

namespace EletricVehicleChargingBunk.Services
{
    public class UserService
    {
        private readonly EvCharging _context;

        public UserService(EvCharging context)
        {
            _context = context;
        }

        public User CreateUser(string name, string email, string password)
        {
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(password);
            var user = new User
            {
               // Name = name,
                Email = email,
                Password = hashedPassword,
            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public bool VerifyPassword(string plainPassword, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(plainPassword, hashedPassword);
        }

        public User Login(string email, string password)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == email);
            if (user != null && VerifyPassword(password, user.Password))
            {
                return user;
            }
            return null;
        }
     }
}
