<template>
    <div class="notification" :style="rootStyles">
      <div class="size=m" :style="styles.Size=M"><!-- Contenu enfant --></div>
      <div class="size=l" :style="styles.Size=L"><!-- Contenu enfant --></div>
      <div class="size=s" :style="styles.Size=S"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rootStyles: {
      "border": "1px solid rgba(151, 71, 255, 1)",
      "width": "184px",
      "height": "60px",
      "justifyContent": "flex-start",
      "alignItems": "flex-start",
      "borderRadius": "5px"
  },
        styles: {
          "Size=M": {
      "backgroundColor": "rgba(229, 78, 103, 1)",
      "width": "16px",
      "height": "16px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "32px"
  },
          "Size=L": {
      "backgroundColor": "rgba(229, 78, 103, 1)",
      "width": "24px",
      "height": "24px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "32px"
  },
          "Size=S": {
      "backgroundColor": "rgba(229, 78, 103, 1)",
      "width": "8px",
      "height": "8px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "32px"
  }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .notification {
    /* Styles de base seront appliqués via :style */
  }
  </style>