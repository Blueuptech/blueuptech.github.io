---
title: "Cuestionario"
layout: "page"
---

<div class="cuestionario">

    <p>A través de 9 preguntas relacionadas con el riesgo inherente y el riesgo sistémico de una institución financiera, este Cuestionario de Clasificación de Impacto ayuda a las instituciones financieras a discernir su Nivel de Impacto utilizando un modelo de cuatro niveles. Cada uno de los cuatro Niveles de Impacto está asociado con un conjunto de preguntas de Declaración de Diagnóstico correspondientes.</p>

    <h2>Nivel 1: Impacto Nacional/Supernacional</h2>
    <div class="question">
        <h3>Pregunta 1.1:</h3>
        <p>¿Su institución está designada como sistémicamente importante para el Sector de Servicios Financieros bajo una de las siguientes designaciones? (Marque las casillas que correspondan)</p>
        <label for="q1_1a"><input type="checkbox" id="q1_1a"> a. Institución de infraestructura crítica según lo definido por una o más naciones en las que opera.</label><br>
        <label for="q1_1b"><input type="checkbox" id="q1_1b"> b. Banco Globalmente Sistémicamente Importante (G-SIB)</label><br>
        <label for="q1_1c"><input type="checkbox" id="q1_1c"> c. Bancos Domésticamente Sistémicamente Importantes (D-SIB) o Instituciones Financieras No Bancarias Sistémicamente Importantes (N-SIFI)</label><br>
        <label for="q1_1d"><input type="checkbox" id="q1_1d"> d. Utilidad de Mercados Financieros Designada (por ejemplo, SIFMU’s, D-FMUs)</label><br>
        <label for="q1_1e"><input type="checkbox" id="q1_1e"> e. Establecimientos de procesamiento de datos según lo definido por el mercado local (por ejemplo, MDPS, MRIO)</label><br>
    </div>

    <div class="question">
        <h3>Pregunta 1.2:</h3>
        <p>¿Su institución participa consistentemente (por ejemplo, mantiene, liquida, transfiere o transacciona) al menos el cinco por ciento del valor de las transacciones en un mercado crítico dentro de una economía nacional? Marque todas las que correspondan.</p>
        <label for="q1_2a"><input type="checkbox" id="q1_2a"> a. Saldos de Reserva</label><br>
        <label for="q1_2b"><input type="checkbox" id="q1_2b"> b. Divisas</label><br>
        <label for="q1_2c"><input type="checkbox" id="q1_2c"> c. Papel Comercial</label><br>
        <label for="q1_2d"><input type="checkbox" id="q1_2d"> d. Valores Gubernamentales</label><br>
        <label for="q1_2e"><input type="checkbox" id="q1_2e"> e. Valores de Agencias Patrocinadas por el Gobierno</label><br>
        <label for="q1_2f"><input type="checkbox" id="q1_2f"> f. Deuda Corporativa</label><br>
        <label for="q1_2g"><input type="checkbox" id="q1_2g"> g. Valores de Renta Variable Corporativa</label><br>
        <label for="q1_2h"><input type="checkbox" id="q1_2h"> h. Derivados</label><br>
    </div>

    <h2>Nivel 2: Impacto Subnacional</h2>
    <div class="question">
        <h3>Pregunta 2.1:</h3>
        <p>¿Su institución proporciona un producto o servicio a negocios en otras industrias o a otras instituciones en el Sector de Servicios Financieros para los cuales el compromiso de la confidencialidad, integridad o disponibilidad de su producto o servicio sea razonablemente probable que cause uno o más de los siguientes impactos?</p>
        <input type="checkbox" id="q2_1a"> <label for="q2_1a">a. Falla en la capacidad de su institución para cumplir con sus obligaciones de pago o liquidación, lo que podría desencadenar una interrupción del mercado donde otras instituciones financieras podrían no ser capaces de cumplir con sus obligaciones de liquidación (por ejemplo, restringiendo materialmente la capacidad de los clientes comerciales para mantener una liquidez adecuada).</label><br>
        <input type="checkbox" id="q2_1b"> <label for="q2_1b">b. Falla o interrupción severa o prolongada de un sistema de pago y liquidación central, que puede ser comprometido en varios puntos, afectando los mercados de valores de múltiples países y ubicaciones.</label><br>
        <input type="checkbox" id="q2_1c"> <label for="q2_1c">c. La pérdida o compromiso de la disponibilidad e integridad de datos financieros clave críticos para la entrega de un producto o servicio en otras instituciones.</label><br>
        <label for="q2_1d"><input type="checkbox" id="q2_1d"> d. Pérdida generalizada de confianza y seguridad en los sistemas de pago y liquidación.</label><br>
    </div>

    <div class="question">
        <h3>Pregunta 2.2.A:</h3>
        <p>¿Su institución es propiedad o está parcialmente propiedad de una entidad extranjera ubicada en un país de interés particular (verifique a través del enlace anterior)?</p>
        <label for="q2_2a_no"><input type="radio" name="q2_2a" id="q2_2a_no" value="no"> No</label><br>
        <label for="q2_2a_yes"><input type="radio" name="q2_2a" id="q2_2a_yes" value="yes"> Sí</label><br>
    </div>

    <div class="question">
        <h3>Pregunta 2.2.B:</h3>
        <p>¿Su institución tiene instalaciones ubicadas en un país de interés particular (verifique a través del enlace anterior) que permiten el acceso a su infraestructura de red desde esa instalación?</p>
        <label for="q2_2b_no"><input type="radio" name="q2_2b" id="q2_2b_no" value="no"> No</label><br>
        <label for="q2_2b_yes"><input type="radio" name="q2_2b" id="q2_2b_yes" value="yes"> Sí</label><br>
    </div>

    <div class="question">
        <h3>Pregunta 2.3:</h3>
        <p>¿El número de individuos cuyos datos procesa su institución excede los 5 millones o el 2% de la población del país en el que su institución opera, lo que sea menor?</p>
        <label for="q2_3_no"><input type="radio" name="q2_3" id="q2_3_no" value="no"> No</label><br>
        <label for="q2_3_yes"><input type="radio" name="q2_3" id="q2_3_yes" value="yes"> Sí</label><br>
    </div>

    <button onclick="checkResponses()">Comprobar Respuestas</button>

    <div id="result" class="result"></div>

    <script>
        function checkResponses() {
            let resultDiv = document.getElementById('result');
            let resultText = '';

            // Pregunta 1.1
            let q1_1 = document.getElementById('q1_1a').checked || document.getElementById('q1_1b').checked || document.getElementById('q1_1c').checked || document.getElementById('q1_1d').checked || document.getElementById('q1_1e').checked;
            // Pregunta 1.2
            let q1_2 = document.getElementById('q1_2a').checked || document.getElementById('q1_2b').checked || document.getElementById('q1_2c').checked || document.getElementById('q1_2d').checked || document.getElementById('q1_2e').checked || document.getElementById('q1_2f').checked || document.getElementById('q1_2g').checked || document.getElementById('q1_2h').checked;

            // Lógica Nivel 1
            if (q1_1 || q1_2) {
                resultText = "Su institución está designada como Nivel 1: Impacto Nacional/Supernacional. Consulte las declaraciones de diagnóstico correspondientes al Nivel 1.";
                showResult(resultText);
                return;
            }

            // Pregunta 2.1
            let q2_1 = document.getElementById('q2_1a').checked || document.getElementById('q2_1b').checked || document.getElementById('q2_1c').checked || document.getElementById('q2_1d').checked;
            // Preguntas 2.2.A y 2.2.B
            let q2_2a = document.querySelector('input[name="q2_2a"]:checked')?.value === "yes";
            let q2_2b = document.querySelector('input[name="q2_2b"]:checked')?.value === "yes";
            // Pregunta 2.3
            let q2_3 = document.querySelector('input[name="q2_3"]:checked')?.value === "yes";

            // Lógica Nivel 2
            if (q2_1 || q2_2a || q2_2b || q2_3) {
                resultText = "Su institución está designada como Nivel 2: Impacto Subnacional. Consulte las declaraciones de diagnóstico correspondientes al Nivel 2.";
                showResult(resultText);
                return;
            }

            // Aquí puedes agregar la lógica para Nivel 3 y 4 según sea necesario

            resultText = "Su institución no califica para los Niveles 1 o 2. Proceda a evaluar para los Niveles 3 y 4.";
            showResult(resultText);
        }

        function showResult(text) {
            let resultDiv = document.getElementById('result');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = text;
        }
    </script>
</div>
