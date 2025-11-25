// Local helper script for odishabooknow.html
// Adds the `showPlanOptions(packageId)` function used by Book Now buttons

function showPlanOptions(packageId) {
  if (!packageId) return;
  const targetId = 'plan-options-' + packageId;
  const target = document.getElementById(targetId);
  if (!target) return;

  // Hide all other plan-options sections
  document.querySelectorAll('[id^="plan-options-"]').forEach(el => {
    if (el.id !== targetId) {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  });

  // Toggle the target
  if (target.classList.contains('hidden') || getComputedStyle(target).display === 'none') {
    target.classList.remove('hidden');
    // default to flex layout if the markup expects it
    target.style.display = window.innerWidth >= 768 ? 'flex' : 'block';
    setTimeout(() => { target.scrollIntoView({behavior: 'smooth', block: 'center'}); }, 50);
  } else {
    target.classList.add('hidden');
    target.style.display = 'none';
  }
}

// Expose to global so inline onclick handlers work
window.showPlanOptions = showPlanOptions;
