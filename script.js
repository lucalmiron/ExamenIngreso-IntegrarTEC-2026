'use strict';

/* =============================================
   VARIABLES Y CONSTANTES DEL PERSONAJE
   ============================================= */

const characterName = 'Zara Darkbane';
const characterClass = 'Sorceress';
const characterLevel = 7;
let characterHealth = 80;
const characterMana = 120;
const characterAttack = 45;
const characterDefense = 30;
const spellCost = 30;
let isStunned = false;

/* =============================================
   FUNCIONES OBLIGATORIAS
   ============================================= */

/**
 * Calcula el daño basado en ataque y defensa.
 * @param {number} attack - Valor de ataque del personaje
 * @param {number} defense - Valor de defensa del oponente
 * @returns {number} Daño resultante (mínimo 0)
 */
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage > 0 ? damage : 0;
}

/**
 * Verifica si el personaje está vivo.
 * @param {number} health - Valor de vida actual
 * @returns {boolean} true si está vivo, false en caso contrario
 */
const isAlive = (health) => health > 0;

/**
 * Verifica si el personaje puede lanzar un hechizo.
 * @param {number} currentMana - Maná actual disponible
 * @param {number} cost - Costo del hechizo en maná
 * @param {boolean} stunned - Si el personaje está aturdido
 * @returns {boolean} true si puede lanzar el hechizo, false en caso contrario
 */
const canCastSpell = (currentMana, cost, stunned) => currentMana >= cost && !stunned;

/**
 * Retorna una presentación formateada del personaje.
 * @param {string} name - Nombre del personaje
 * @param {string} characterType - Clase del personaje
 * @param {number} level - Nivel del personaje
 * @returns {string} Presentación formateada
 */
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

/* =============================================
   EJECUCIÓN Y RESULTADOS EN CONSOLA
   ============================================= */

// Ejecutar calculateDamage
const damageCalculated = calculateDamage(characterAttack, characterDefense);
console.log(`Daño calculado: ${damageCalculated}`);

// Ejecutar isAlive
const isCharacterAlive = isAlive(characterHealth);
console.log(`¿Personaje vivo? ${isCharacterAlive}`);

// Ejecutar canCastSpell
const canCast = canCastSpell(characterMana, spellCost, isStunned);
console.log(`¿Puede lanzar hechizo? ${canCast}`);

// Ejecutar getPresentation
const characterPresentation = getPresentation(characterName, characterClass, characterLevel);
console.log(`Presentación: ${characterPresentation}`);

/* =============================================
   EVENT LISTENERS Y VALIDACIÓN
   ============================================= */

/**
 * Event listener para el formulario de desafío.
 * Captura el submit, valida campos y registra el challenger.
 */
const challengeForm = document.getElementById('challenge-form');

if (challengeForm) {
  challengeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores de los campos
    const nameInput = document.getElementById('challenger-name-input');
    const classInput = document.getElementById('challenger-class-input');
    const levelSelect = document.getElementById('challenger-level-select');
    
    const challengerName = nameInput.value.trim();
    const challengerClass = classInput.value.trim();
    const challengerLevel = levelSelect.value;
    
    // Validar que ningún campo esté vacío
    if (!challengerName || !challengerClass || !challengerLevel) {
      console.warn('Validación fallida: todos los campos son obligatorios');
      return;
    }
    
    // Mostrar en consola el registro exitoso
    console.log(`Challenger registered: ${challengerName} - ${challengerClass} - ${challengerLevel}`);
  });
}