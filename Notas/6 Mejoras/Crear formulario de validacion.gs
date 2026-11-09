// Crea en Google Forms el formulario de "Validacion - formulario.md".
// Se ejecuta una sola vez en script.google.com. Cada ejecución crea un formulario nuevo.

function crearFormularioStudyhub() {
  var DEMO = 'https://marianafferrero.github.io/Studyhub_proyecto/06%20Demo%20de%20la%20plataforma/Studyhub%20demo%20%28abrir%20en%20el%20navegador%29.html';

  var form = FormApp.create('Prueba de Studyhub');
  form.setDescription('Studyhub es un prototipo para encontrar con quién estudiar bien, o estudiar solo con mejor organización. Es un proyecto académico de Usabilidad. Estamos probando la plataforma, no a ti: si algo no te sale, es información valiosa. Las respuestas son anónimas. Algunas funciones, como la IA, son simuladas y los datos son de ejemplo.');
  form.setCollectEmail(false);
  form.setProgressBar(true);

  // Sección 1 · Sobre ti
  form.addSectionHeaderItem().setTitle('Sobre ti');
  form.addTextItem().setTitle('¿En qué universidad estudias?').setRequired(true);
  form.addTextItem().setTitle('¿Qué carrera estudias?').setRequired(true);
  var semestre = form.addListItem().setTitle('¿En qué semestre estás?').setRequired(true);
  semestre.setChoiceValues(['1–2', '3–4', '5–6', '7–8', '9 o más']);
  var preferencia = form.addMultipleChoiceItem().setTitle('Normalmente prefieres estudiar…').setRequired(true);
  preferencia.setChoiceValues(['Solo', 'Acompañado', 'Depende de la materia']);

  // Sección 2 · Prueba la plataforma
  form.addPageBreakItem()
    .setTitle('Prueba la plataforma')
    .setHelpText(
      'Abre este enlace, crea tu cuenta con los datos que ya vienen llenos y elige un modo:\n' + DEMO + '\n\n' +
      'Intenta hacer estas 5 tareas, sin ayuda:\n' +
      '1. Encuentra a la persona más compatible contigo para estudiar Narrativas Transmedia y solicita una sesión.\n' +
      '2. Únete a un grupo pequeño de estudio.\n' +
      '3. Pídele a Tu IA un tablero de tu sesión de Semiótica del martes. Después sal y vuelve a encontrarlo.\n' +
      '4. Pídele a Tu IA un quiz de Fotografía y haz lo necesario para que te lo pueda hacer.\n' +
      '5. Cambia al modo Solo, marca una tarea como hecha y empieza un bloque de concentración.'
    );
  form.addGridItem()
    .setTitle('¿Cómo te fue con cada tarea?')
    .setRows([
      'Tarea 1: buscar compañero',
      'Tarea 2: unirme a un grupo',
      'Tarea 3: crear y encontrar un tablero',
      'Tarea 4: quiz de Fotografía',
      'Tarea 5: modo Solo'
    ])
    .setColumns(['Lo logré fácil', 'Lo logré con dificultad', 'No lo logré'])
    .setRequired(true);

  // Sección 3 · Tu opinión
  form.addPageBreakItem().setTitle('Tu opinión');
  form.addGridItem()
    .setTitle('¿Qué tan de acuerdo estás?')
    .setRows([
      'Fue fácil encontrar lo que necesitaba',
      'Entendí por qué alguien es compatible conmigo',
      'La plataforma da ganas de usarla',
      'Confiaría en estudiar con alguien que encontré aquí',
      'Tu IA me sería útil para estudiar',
      'La usaría en lugar de organizarme por WhatsApp'
    ])
    .setColumns(['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'])
    .setRequired(true);
  var pesa = form.addMultipleChoiceItem().setTitle('Al elegir con quién estudiar, ¿qué pesa más para ti?').setRequired(true);
  pesa.setChoiceValues([
    'Que sepa un nivel parecido al mío',
    'Que se comprometa de verdad',
    'Que se concentre y no se distraiga',
    'Que coincidan nuestros horarios'
  ]);
  pesa.showOtherOption(true);
  var cuantas = form.addMultipleChoiceItem().setTitle('¿Con cuántas personas te gusta estudiar?').setRequired(true);
  cuantas.setChoiceValues(['Solo', 'Con una persona', 'En grupo de 3 o 4', 'En grupo de 5 o más']);

  // Sección 4 · Lo más importante
  form.addPageBreakItem().setTitle('Lo más importante');
  form.addParagraphTextItem().setTitle('¿Qué fue lo que más te gustó de Studyhub?').setRequired(true);
  form.addParagraphTextItem().setTitle('¿Qué es lo primero que mejorarías?').setRequired(true);
  form.addParagraphTextItem().setTitle('¿Hubo algo que te confundiera?').setRequired(false);

  Logger.log('LISTO. Abre este link para revisarlo y publicarlo:');
  Logger.log(form.getEditUrl());
}
