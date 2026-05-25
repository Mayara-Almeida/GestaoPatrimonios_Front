using GestaoPatrimonios.Applications.Services;
using GestaoPatrimonios.DTOs.Bairro;
using GestaoPatrimonios.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestaoPatrimonios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BairroController : ControllerBase
    {
        private readonly BairroService _service;

        public BairroController(BairroService service)
        {
            _service = service;
        }

        [HttpGet]
        [Authorize]
        public ActionResult<List<ListarBairroDto>> Listar()
        {
            return Ok(_service.Listar());
        }

        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<ListarBairroDto> BuscarPorId(Guid id)
        {
            try
            {
                return Ok(_service.BuscarPorId(id));
            }
            catch (DomainException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Coordenador")]
        public ActionResult Adicionar(CriarBairroDto dto)
        {
            try
            {
                _service.Adicionar(dto);
                return Created();
            }
            catch (DomainException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Coordenador")]
        public ActionResult Atualizar(Guid id, CriarBairroDto dto)
        {
            try
            {
                _service.Atualizar(id, dto);
                return NoContent();
            }
            catch (DomainException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
