using EletricVehicleChargingBunk.Data;
using EletricVehicleChargingBunk.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<EvCharging>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("EvchargingBunk")));
builder.Services.AddScoped<UserService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Ensure HTTPS Redirection is configured
app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();
app.Run("https://localhost:7298"); // Ensure this URL is correct
