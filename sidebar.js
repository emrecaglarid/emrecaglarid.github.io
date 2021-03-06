miro.onReady(() => {
  // Subscribe on user selected widgets
  //miro.addListener(miro.enums.event.SELECTION_UPDATED, getWidget)
  // getWidget()
})

// Get HTML elements for tip and text container
const tipElement = document.getElementById('tip')
const widgetTextElement = document.getElementById('widget-text')

async function getWidget() {
  // Get selected widgets
  let widgets = await miro.board.selection.get()

  // Get first widget from selected widgets

  for (i = 0; i < widgets.length; i++){
    if (typeof widgets[i].text === 'string') {
      tipElement.style.opacity = '0'
      widgetTextElement.innerHTML += (i+1) + ": " + widgets[i].text;
      }
  }

  // Check that the widget has text field
  //if (typeof text === 'string') {
    // Hide tip and show text in sidebar
  //  tipElement.style.opacity = '0'
  //  widgetTextElement.value = text
  //} else {
  //  // Show tip and clear text in sidebar
  //  tipElement.style.opacity = '1'
   // widgetTextElement.value = ''
  //}
}

