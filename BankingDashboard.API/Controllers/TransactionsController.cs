
using Microsoft.AspNetCore.Mvc;

namespace BankingDashboard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTransactions()
        {
            var transactions = new[]
            {
                new
                {
                    Id = 1,
                    Description = "Salary Deposit",
                    Amount = 3500.00m,
                    Type = "Credit"
                },
                new
                {
                    Id = 2,
                    Description = "Grocery Shopping",
                    Amount = 125.50m,
                    Type = "Debit"
                },
                new
                {
                    Id = 3,
                    Description = "Electricity Bill",
                    Amount = 85.00m,
                    Type = "Debit"
                }
            };

            return Ok(transactions);
        }
    }
}
