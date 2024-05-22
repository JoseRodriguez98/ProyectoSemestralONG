$(document).ready(function() {
    function calculateDV(rut) {
      var body = rut.slice(0, -1);
      var dv = rut.slice(-1).toUpperCase();
      var sum = 0;
      var multiplier = 2;

      for (var i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
      }

      var mod11 = 11 - (sum % 11);
      var calculatedDV = mod11 === 11 ? '0' : mod11 === 10 ? 'K' : mod11.toString();

      return dv === calculatedDV;
    }

    $('#rut').on('input', function() {
      var rut = $(this).val().replace(/[^0-9kK]/g, '');
      if (rut.length > 1) {
        rut = rut.slice(0, -1) + '-' + rut.slice(-1);
      }
      if (rut.length > 5) {
        rut = rut.slice(0, -5) + '.' + rut.slice(-5);
      }
      if (rut.length > 9) {
        rut = rut.slice(0, -9) + '.' + rut.slice(-9);
      }
      $(this).val(rut);
      $('#format-error, #dv-error').hide(); // Oculta los mensajes de error mientras escribe
      $('#rut').removeClass('is-invalid'); // Remueve la clase de inválido
    });

    $('#rut').on('blur', function() {
      var formattedRut = $(this).val();
      if (formattedRut === '') {
        $('#format-error, #dv-error').hide(); // Oculta ambos mensajes de error si el campo está vacío
        $('#rut').removeClass('is-invalid'); // Remueve la clase de inválido si está presente
        return;
      }
      var rut = formattedRut.replace(/\./g, '').replace('-', '');
      var rutPattern = /^\d{7,8}[0-9Kk]$/;

      if (!rutPattern.test(rut)) {
        $('#format-error').show(); // Muestra el mensaje de error de formato
        $('#dv-error').hide(); // Oculta el mensaje de error de DV
        $('#rut').addClass('is-invalid'); // Añade clase para mostrar el campo como inválido
      } else if (!calculateDV(rut)) {
        $('#dv-error').show(); // Muestra el mensaje de error de DV
        $('#format-error').hide(); // Oculta el mensaje de error de formato
        $('#rut').addClass('is-invalid'); // Añade clase para mostrar el campo como inválido
      } else {
        $('#format-error, #dv-error').hide(); // Oculta ambos mensajes de error
        $('#rut').removeClass('is-invalid'); // Remueve la clase de inválido si está presente
      }
    });
  });