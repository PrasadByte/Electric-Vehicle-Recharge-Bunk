using EletricVehicleChargingBunk.Models;
using EletricVehicleChargingBunk.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EletricVehicleChargingBunk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public IActionResult RegisterUser([FromBody] User user)
        {
            if (_userService.CreateUser(user.Name, user.Email, user.Password) != null)
            {
                return Ok(new { message = "User registered successfully" });
            }
            return BadRequest(new { message = "User registration failed" });
        }

        [HttpPost("login")]
        public IActionResult LoginUser([FromBody] User loginRequest)
        {
            var user = _userService.Login(loginRequest.Email, loginRequest.Password);
            if (user != null)
            {
                return Ok(new { message = "Login successful", user = user });
            }
            return Unauthorized(new { message = "Invalid email or password" });
        }

    }
}
