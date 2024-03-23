using BACK_END_CLINICA.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Stripe.Checkout;

namespace BACK_END_CLINICA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheckoutController : ControllerBase
    {
        [HttpPost("create-session")]
        public ActionResult CreateCheckoutSession([FromBody] CreateCheckoutSessionRequest request)
        {
            try
            {
                var domain = "http://localhost:5173"; // URL del tuo frontend React

                // Crea la lista degli articoli per la sessione di checkout
                var lineItems = request
                    .Items.Select(item => new SessionLineItemOptions
                    {
                        PriceData = new SessionLineItemPriceDataOptions
                        {
                            Currency = "eur",
                            ProductData = new SessionLineItemPriceDataProductDataOptions
                            {
                                Name = item.NomeProdotto,
                            },
                            UnitAmountDecimal = (long)(item.PrezzoProdotto * 100), // Converti il prezzo in centesimi
                        },
                        Quantity = item.Quantita, // Modifica la quantità se necessario
                    })
                    .ToList();

                // Crea opzioni per la sessione di checkout
                var options = new SessionCreateOptions
                {
                    PaymentMethodTypes = new List<string> { "card" },
                    LineItems = lineItems,
                    Mode = "payment",
                    SuccessUrl = domain + "/success",
                    CancelUrl = domain + "/cancel",
                };

                var service = new SessionService();
                Session session = service.Create(options);

                return Ok(new { sessionId = session.Id });
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }
    }
}
