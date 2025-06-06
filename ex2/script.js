// Sélection des éléments du DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Événement sur le formulaire
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const taskText = input.value.trim();
  if (taskText === '') return;

  // Créer un nouvel élément <li>
  const li = document.createElement('li');
  li.textContent = taskText;

  // Bouton accomplir
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓';
  doneBtn.className = 'done-btn';
  doneBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Bouton supprimer
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Ajout des boutons à la tâche
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  // Ajouter l'élément à la liste
  taskList.appendChild(li);

  // Réinitialiser le champ texte
  input.value = '';
});
