using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BACK_END_CLINICA.Data;
using BACK_END_CLINICA.Models;
using BACK_END_CLINICA.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace BACK_END_CLINICA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _db;

        public AuthController(IConfiguration configuration, ApplicationDbContext db)
        {
            _configuration = configuration;
            _db = db;
        }

        [HttpPost("token")]
        public IActionResult CreateToken([FromBody] LoginModel login)
        {
            var user = Authenticate(login);

            if (user != null)
            {
                var tokenString = BuildToken(user);
                return Ok(new { token = tokenString });
            }

            return Unauthorized();
        }

        private string BuildToken(User user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, user.IdUser.ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private User Authenticate(LoginModel login)
        {
            var user = _db.Users.FirstOrDefault(u =>
                u.Username == login.Username && u.Password == login.Password
            );

            if (user == null)
            {
                return null;
            }

            return new User
            {
                IdUser = user.IdUser,
                Username = user.Username,
                Role = user.Role,
            };
        }
    }
}
