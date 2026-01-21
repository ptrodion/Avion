export async function loadPartial(selector, path) {
  const container = document.querySelector(selector);
  if (!container) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(path);
    container.innerHTML = await response.text();
  } catch (error) {
    console.error(`Ошибка загрузки: ${path}`);
  }
}