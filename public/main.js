const deleteButton = document.querySelector('#delete-button')


deleteButton.addEventListener('click', _ => {
  console.log('working')
    fetch('/times', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'meal',
        type: 'snack'
      })
    })
      .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        if (response === 'No entry to delete') {
          messageDiv.textContent = 'Board is clear'
        } else {
          window.location.reload(true)
        }
      })
})
